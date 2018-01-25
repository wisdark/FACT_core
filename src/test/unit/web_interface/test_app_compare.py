from test.unit.web_interface.base import WebInterfaceTest
from test.common_helper import TEST_FW, TEST_FW_2
from flask import session
from web_interface.components.compare_routes import get_comparison_uid_list_from_session, CompareRoutes


class AppMock:
    def add_url_rule(self, a, b, c):
        pass


class TestAppCompare(WebInterfaceTest):

    def test__add_firmwares_to_compare(self):
        with self.test_client:
            rv = self.test_client.get('/comparison/add/{}'.format(TEST_FW.get_uid()), follow_redirects=True)
            self.assertIn('Firmwares Selected for Comparison', rv.data.decode())
            self.assertIn('uids_for_comparison', session)
            self.assertIn(TEST_FW.get_uid(), session['uids_for_comparison'])

    def test__add_firmwares_to_compare__multiple(self):
        with self.test_client as tc:
            with tc.session_transaction() as test_session:
                test_session['uids_for_comparison'] = [TEST_FW_2.get_uid()]
            rv = self.test_client.get('/comparison/add/{}'.format(TEST_FW.get_uid()), follow_redirects=True)
            self.assertIn('Remove All', rv.data.decode())

    def test__start_compare(self):
        with self.test_client as tc:
            with tc.session_transaction() as test_session:
                test_session['uids_for_comparison'] = [TEST_FW.get_uid(), TEST_FW_2.get_uid()]
            compare_id = '{};{}'.format(TEST_FW.get_uid(), TEST_FW_2.get_uid())
            rv = self.test_client.get('/compare', follow_redirects=True)
            assert b'Your compare task is in progress' in rv.data
            self.assertEqual(len(self.mocked_interface.tasks), 1, 'task not added')
            self.assertEqual(self.mocked_interface.tasks[0], (compare_id, None), 'task not correct')

    def test__start_compare__force(self):
        with self.test_client as tc:
            with tc.session_transaction() as test_session:
                test_session['uids_for_comparison'] = [TEST_FW.get_uid(), TEST_FW_2.get_uid()]
            compare_id = '{};{}'.format(TEST_FW.get_uid(), TEST_FW_2.get_uid())
            rv = self.test_client.get('/compare?force_recompare=true', follow_redirects=True)
            assert b'Your compare task is in progress' in rv.data
            self.assertEqual(len(self.mocked_interface.tasks), 1, 'task not added')
            self.assertEqual(self.mocked_interface.tasks[0], (compare_id, True), 'task not correct')

    def test__start_compare__list_empty(self):
        rv = self.test_client.get('/compare', follow_redirects=True)
        assert b'No UIDs found for comparison' in rv.data

    def test__show_compare_result(self):
        compare_id = '{};{}'.format(TEST_FW.get_uid(), TEST_FW_2.get_uid())
        rv = self.test_client.get('/compare/{}'.format(compare_id), follow_redirects=True)
        assert b'General Information' in rv.data

    def test_get_comparison_uid_list_from_session(self):
        with self.frontend.app.test_request_context():
            assert 'uids_for_comparison' not in session

            compare_list = get_comparison_uid_list_from_session()
            assert 'uids_for_comparison' in session
            assert isinstance(session['uids_for_comparison'], list)
            assert isinstance(compare_list, list)

    def test_add_to_compare_basket(self):
        with self.frontend.app.test_request_context():
            assert 'uids_for_comparison' not in session

            CompareRoutes._add_to_compare_basket('test')
            assert 'uids_for_comparison' in session
            assert isinstance(session['uids_for_comparison'], list)
            assert 'test' in session['uids_for_comparison']

    def test_remove_from_compare_basket(self):
        with self.frontend.app.test_request_context():
            session['uids_for_comparison'] = [TEST_FW.get_uid(), TEST_FW_2.get_uid()]
            session.modified = True
            assert 'uids_for_comparison' in session
            assert TEST_FW.get_uid() in session['uids_for_comparison']
            assert TEST_FW_2.get_uid() in session['uids_for_comparison']

            CompareRoutes._remove_from_compare_basket('some_uid', TEST_FW.get_uid())
            assert TEST_FW.get_uid() not in session['uids_for_comparison']
            assert TEST_FW_2.get_uid() in session['uids_for_comparison']

    def test_remove_all_from_compare_basket(self):
        with self.frontend.app.test_request_context():
            session['uids_for_comparison'] = [TEST_FW.get_uid(), TEST_FW_2.get_uid()]
            session.modified = True
            assert 'uids_for_comparison' in session
            assert TEST_FW.get_uid() in session['uids_for_comparison']
            assert TEST_FW_2.get_uid() in session['uids_for_comparison']

            CompareRoutes._remove_all_from_compare_basket('some_uid')
            assert TEST_FW.get_uid() not in session['uids_for_comparison']
            assert TEST_FW_2.get_uid() not in session['uids_for_comparison']

    def test__insert_plugin_into_view_at_index(self):
        view = '------><------'
        plugin = 'o'
        index = view.find('<')

        assert CompareRoutes._insert_plugin_into_view_at_index(plugin, view, 0) == 'o------><------'
        assert CompareRoutes._insert_plugin_into_view_at_index(plugin, view, index) == '------>o<------'
        assert CompareRoutes._insert_plugin_into_view_at_index(plugin, view, len(view) + 10) == '------><------o'
        assert CompareRoutes._insert_plugin_into_view_at_index(plugin, view, -10) == view

    def test__add_plugin_views_to_compare_view(self):
        cr = CompareRoutes(AppMock(), None)
        plugin_views = [
            ('plugin_1', b'<plugin view 1>'),
            ('plugin_2', b'<plugin view 2>')
        ]
        key = '{# individual plugin views #}'
        compare_view = 'xxxxx{}yyyyy'.format(key)
        key_index = compare_view.find(key)
        result = cr._add_plugin_views_to_compare_view(compare_view, plugin_views)

        for plugin, view in plugin_views:
            assert 'elif plugin == \'{}\''.format(plugin) in result
            assert view.decode() in result
            assert key_index + len(key) <= result.find(view.decode()) < result.find('yyyyy')

    def test__add_plugin_views_to_compare_view__missing_key(self):
        cr = CompareRoutes(AppMock(), None)
        plugin_views = [
            ('plugin_1', b'<plugin view 1>'),
            ('plugin_2', b'<plugin view 2>')
        ]
        compare_view = 'xxxxxyyyyy'
        result = cr._add_plugin_views_to_compare_view(compare_view, plugin_views)
        assert result == compare_view

    def test__get_compare_view(self):
        cr = CompareRoutes(AppMock(), None)
        result = cr._get_compare_view([])
        assert '>General Information<' in result
        assert '--- plugin results ---' in result

    def test__get_compare_plugin_views(self):
        cr = CompareRoutes(AppMock(), None)
        compare_result = {'plugins': {}}
        result = cr._get_compare_plugin_views(compare_result)
        assert result == ([], [])

        compare_result = {'plugins': {'plugin_1': None, 'plugin_2': None}}
        plugin_views, plugins_without_view = cr._get_compare_plugin_views(compare_result)
        assert plugin_views == [('plugin_1', b'<plugin 1 view>')]
        assert plugins_without_view == ['plugin_2']
