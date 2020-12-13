from typing import Dict, List, Set

from flask_restful import Resource

from helperFunctions.database import ConnectTo
from storage.db_interface_frontend import FrontEndDbInterface
from web_interface.rest.helper import success_message
from web_interface.security.decorator import roles_accepted
from web_interface.security.privileges import PRIVILEGES


class RestMissingAnalyses(Resource):
    URL = '/rest/missing'

    def __init__(self, **kwargs):
        self.config = kwargs.get('config', None)

    @roles_accepted(*PRIVILEGES['delete'])
    def get(self):
        with ConnectTo(FrontEndDbInterface, self.config) as db:
            missing_analyses_data = {
                'missing_files': self._make_json_serializable(db.find_missing_files()),
                'missing_analyses': self._make_json_serializable(db.find_missing_analyses()),
                'failed_analyses': db.find_failed_analyses(),
                'orphaned_objects': db.find_orphaned_objects(),
            }
        return success_message(missing_analyses_data, self.URL)

    @staticmethod
    def _make_json_serializable(set_dict: Dict[str, Set[str]]) -> Dict[str, List[str]]:
        return {k: list(v) for k, v in set_dict.items()}
