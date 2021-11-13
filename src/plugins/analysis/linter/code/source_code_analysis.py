import json
import logging
import sys
from pathlib import Path

from analysis.PluginBase import AnalysisBasePlugin
from helperFunctions.docker import run_docker_container
from storage.fsorganizer import FSOrganizer

try:
    from ..internal import js_linter, lua_linter, python_linter, shell_linter
except ImportError:
    sys.path.append(str(Path(__file__).parent.parent))
    from internal import js_linter, lua_linter, python_linter, shell_linter


class AnalysisPlugin(AnalysisBasePlugin):
    '''
    This class implements the FACT wrapper for multiple linters including
    - shellcheck (shell)
    - pylint (python)
    - jshint (javascript)
    - lua (luacheck)
    TODO Implement proper view
    TODO implement additional linters (ruby, perl, php)
    '''
    NAME = 'source_code_analysis'
    DESCRIPTION = 'This plugin implements static code analysis for multiple scripting languages'
    DEPENDENCIES = ['file_type']
    VERSION = '0.6'
    MIME_WHITELIST = ['text/']
    # All linters must contain a 'do_analysis' method which must return an array of dicts.
    # These dicts must at least contain a value for the 'symbol' key.
    SCRIPT_TYPES = {
        'shell': {'mime': 'shell', 'shebang': 'sh', 'ending': '.sh', 'linter': shell_linter.ShellLinter},
        'lua': {'mime': 'luascript', 'shebang': 'lua', 'ending': '.lua', 'linter': lua_linter.LuaLinter},
        'javascript': {'mime': 'javascript', 'shebang': 'javascript', 'ending': '.js', 'linter': js_linter.JavaScriptLinter},
        'python': {'mime': 'python', 'shebang': 'python', 'ending': '.py', 'linter': python_linter.PythonLinter}
    }

    def __init__(self, plugin_administrator, config=None, recursive=True, offline_testing=False):
        self.config = config
        self._fs_organizer = FSOrganizer(config)
        super().__init__(plugin_administrator, config=config, plugin_path=__file__, recursive=recursive, offline_testing=offline_testing)

    def process_object(self, file_object):
        '''
        After only receiving text files thanks to the whitelist, we try to detect the correct scripting language
        and then call a linter if a supported language is detected
        '''
        script_type = self._get_script_type(file_object)
        if script_type is None:
            file_object.processed_analysis[self.NAME] = {'summary': [], 'warning': 'Is not a script or language could not be detected'}
            return file_object

        script_type = script_type.lower()

        if script_type not in self.SCRIPT_TYPES:
            logging.debug(f'[{self.NAME}] {file_object.file_name} ({script_type}) is not a supported script.')
            file_object.processed_analysis[self.NAME] = {'summary': [], 'warning': f'Unsupported script type: {script_type}'}
            return file_object

        issues = self.SCRIPT_TYPES[script_type]['linter']().do_analysis(file_object.file_path)

        if len(issues) == 0:
            file_object.processed_analysis[self.NAME] = {'summary': []}
        else:
            file_object.processed_analysis[self.NAME] = {'full': sorted(issues, key=lambda k: k['symbol']),
                                                         'summary': [f'Warnings in {script_type} script']}
        return file_object

    def _get_script_type(self, file_object):
        host_path = self._fs_organizer.generate_path_from_uid(file_object.uid)
        container_path = f'/repo/{file_object.file_name}'
        linguist_output = run_docker_container('crazymax/linguist', 60, f'--json {container_path}', reraise=True, mount=(container_path, host_path), label=self.NAME)
        output_json = json.loads(linguist_output)

        # FIXME plugins should not set the output for other plugins
        # But due to performance reasons we don't want the filetype plugin to run linguist
        file_object.processed_analysis['file_type']['linguist'] = ''.join([f'{k:<10} {str(v):<10}\n' for k, v in output_json[container_path].items()])

        script_type = output_json[container_path].get('language')

        return script_type
