import json

from storage.db_interface_statistic import StatisticDbUpdater
from test.integration.web_interface.rest.base import RestTestBase


class TestRestStatistics(RestTestBase):

    def setUp(self):
        super().setUp()
        self.stats_updater = StatisticDbUpdater(config=self.config)
        self.stats_updater.update_statistic('file_type', {'file_types': [['application/gzip', 3454]],
                                                          'firmware_container': [['application/zip', 3], ['firmware/foo', 1]]})
        self.stats_updater.update_statistic('known_vulnerabilities', {'known_vulnerabilities': [['BackDoor_String', 1]]})

    def tearDown(self):
        self.stats_updater.shutdown()
        super().tearDown()

    def test_rest_request_all_statistics(self):
        st = self.test_client.get('/rest/statistics', follow_redirects=True)
        st_dict = json.loads(st.data)

        assert b'file_type' in st.data
        assert bool(st_dict['file_type'])
        assert 'file_types' in st_dict['file_type']
        assert 'firmware_container' in st_dict['file_type']

        assert b'known_vulnerabilities' in st.data
        assert bool(st_dict['known_vulnerabilities'])
        assert 'known_vulnerabilities' in st_dict['known_vulnerabilities']

        assert b'malware' in st.data
        assert not bool(st_dict['malware'])
        assert b'exploit_mitigations' in st.data
        assert not bool(st_dict['exploit_mitigations'])

    def test_rest_request_single_statistic(self):
        st = self.test_client.get('/rest/statistics/file_type', follow_redirects=True)
        st_dict = json.loads(st.data)

        assert b'file_type' in st.data
        assert 'file_types' in st_dict['file_type']
        assert 'firmware_container' in st_dict['file_type']
        
        assert b'known_vulnerabilities' not in st.data

    def test_rest_request_non_existent_statistic(self):
        st = self.test_client.get('/rest/statistics/non_existent_stat', follow_redirects=True)

        assert b'A statistic with the ID non_existent_stat does not exist' in st.data

    def test_rest_request_invalid_data(self):
        st = self.test_client.get('/rest/statistics/', follow_redirects=True)
        assert b'404 Not Found' in st.data
