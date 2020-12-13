import os
from configparser import ConfigParser
from tempfile import TemporaryDirectory
from typing import Any, Dict, Optional, Tuple

from flask import Request, escape
from werkzeug.datastructures import FileStorage

from helperFunctions.config import get_temp_dir_path
from helperFunctions.uid import create_uid
from objects.firmware import Firmware

OPTIONAL_FIELDS = ['tags', 'device_part']
DROPDOWN_FIELDS = ['device_class', 'vendor', 'device_name', 'device_part']


def create_analysis_task(request: Request, config: ConfigParser) -> Dict[str, Any]:
    '''
    Create an analysis task from the data stored in the flask request object.

    :param request: The flask request object.
    :param config: The FACT configuration.
    :return: A dict containing the analysis task data.
    '''
    task = _get_meta_from_request(request)
    if request.files['file']:
        task['file_name'], task['binary'] = get_file_name_and_binary_from_request(request, config)
    task['uid'] = _get_uid_of_analysis_task(task)
    if task['release_date'] == '':
        # set default value if date field is empty
        task['release_date'] = '1970-01-01'
    return task


def get_file_name_and_binary_from_request(request: Request, config: ConfigParser) -> Tuple[str, bytes]:  # pylint: disable=invalid-name
    '''
    Retrieves the file name and content from the flask request object.

    :param request: The flask request object.
    :param config: The FACT configuration.
    :return: A Tuple containing the file name and the file content.
    '''
    try:
        file_name = escape(request.files['file'].filename)
    except Exception:
        file_name = 'no name'
    file_binary = _get_uploaded_file_binary(request.files['file'], config)
    return file_name, file_binary


def create_re_analyze_task(request: Request, uid: str) -> Dict[str, Any]:
    '''
    Create an analysis task for a file that is already in the database.

    :param request: The flask request object.
    :param uid: The unique identifier of the firmware.
    :return: A dict containing the analysis task data.
    '''
    task = _get_meta_from_request(request)
    task['uid'] = uid
    if not task['release_date']:
        task['release_date'] = '1970-01-01'
    return task


def _get_meta_from_request(request: Request):
    meta = {
        'device_name': escape(request.form['device_name']),
        'device_part': escape(request.form['device_part']),
        'device_class': escape(request.form['device_class']),
        'vendor': escape(request.form['vendor']),
        'version': escape(request.form['version']),
        'release_date': escape(request.form['release_date']),
        'requested_analysis_systems': request.form.getlist('analysis_systems'),
        'tags': escape(request.form['tags'])
    }
    _get_meta_from_dropdowns(meta, request)

    if 'file_name' in request.form.keys():
        meta['file_name'] = escape(request.form['file_name'])
    return meta


def _get_meta_from_dropdowns(meta, request: Request):
    for item in meta.keys():
        if not meta[item] and item in DROPDOWN_FIELDS:
            dd = request.form['{}_dropdown'.format(item)]
            if dd != 'new entry':
                meta[item] = escape(dd)


def _get_tag_list(tag_string):
    if tag_string == '':
        return []
    return tag_string.split(',')


def convert_analysis_task_to_fw_obj(analysis_task: dict) -> Firmware:
    '''
    Convert an analysis task to a firmware object.

    :param analysis_task: The analysis task data.
    :return: A new `Firmware` object based on the analysis task data.
    '''
    fw = Firmware(scheduled_analysis=analysis_task['requested_analysis_systems'])
    if 'binary' in analysis_task.keys():
        fw.set_binary(analysis_task['binary'])
        fw.file_name = analysis_task['file_name']
    else:
        if 'file_name' in analysis_task.keys():
            fw.file_name = analysis_task['file_name']
        fw.uid = analysis_task['uid']
    fw.set_device_name(analysis_task['device_name'])
    fw.set_part_name(analysis_task['device_part'])
    fw.set_firmware_version(analysis_task['version'])
    fw.set_device_class(analysis_task['device_class'])
    fw.set_vendor(analysis_task['vendor'])
    fw.set_release_date(analysis_task['release_date'])
    for tag in _get_tag_list(analysis_task['tags']):
        fw.set_tag(tag)
    return fw


def _get_uid_of_analysis_task(analysis_task: dict) -> Optional[str]:
    '''
    Creates a UID (unique identifier) for an analysis task. The UID is generated based on the binary stored in the
    analysis task dict. The return value may be `None` if no binary is contained in the analysis task dict.

    :param analysis_task: The analysis task data.
    :return: A UID based on the binary contained in the analysis task or `None` if there is no binary.
    '''
    if analysis_task['binary']:
        uid = create_uid(analysis_task['binary'])
        return uid
    return None


def _get_uploaded_file_binary(request_file: FileStorage, config: ConfigParser) -> Optional[bytes]:
    '''
    Retrieves the binary from the request file storage and returns it as byte string. May return `None` if no
    binary was found or an exception occurred.

    :param request_file: A file contained in the flask request object.
    :param config: The FACT configuration.
    :return: The binary as byte string or `None` if no binary was found.
    '''
    if request_file:
        tmp_dir = TemporaryDirectory(prefix='fact_upload_', dir=get_temp_dir_path(config))
        tmp_file_path = os.path.join(tmp_dir.name, 'upload.bin')
        try:
            request_file.save(tmp_file_path)
            with open(tmp_file_path, 'rb') as tmp_file:
                binary = tmp_file.read()
            tmp_dir.cleanup()
            return binary
        except Exception:
            return None
    return None


def check_for_errors(analysis_task: dict) -> Dict[str, str]:
    '''
    Check an analysis task for missing fields and return a dict with error messages (that are intended to be displayed
    in the webinterface).

    :param analysis_task: The analysis task data.
    :return: A dictionary containing error messages in the form `{task_key: error_message}`.
    '''
    return {
        key: 'Please specify the {}'.format(key.replace('_', ' '))
        for key in analysis_task
        if analysis_task[key] in [None, '', b''] and key not in OPTIONAL_FIELDS
    }
