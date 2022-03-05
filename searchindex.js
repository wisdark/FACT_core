Search.setIndex({docnames:["index","main","modules/helperFunctions","modules/helperFunctions.compare_sets","modules/helperFunctions.config","modules/helperFunctions.database","modules/helperFunctions.docker","modules/helperFunctions.fileSystem","modules/helperFunctions.hash","modules/helperFunctions.install","modules/helperFunctions.logging","modules/helperFunctions.merge_generators","modules/helperFunctions.mongo_config_parser","modules/helperFunctions.mongo_task_conversion","modules/helperFunctions.object_conversion","modules/helperFunctions.object_storage","modules/helperFunctions.pdf","modules/helperFunctions.plugin","modules/helperFunctions.process","modules/helperFunctions.program_setup","modules/helperFunctions.tag","modules/helperFunctions.uid","modules/helperFunctions.web_interface","modules/helperFunctions.yara_binary_search","modules/objects","modules/objects.file","modules/objects.firmware","modules/scheduler","modules/scheduler.analysis","modules/web_interface","modules/web_interface.rest","modules/web_interface.rest.helper"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","main.rst","modules/helperFunctions.rst","modules/helperFunctions.compare_sets.rst","modules/helperFunctions.config.rst","modules/helperFunctions.database.rst","modules/helperFunctions.docker.rst","modules/helperFunctions.fileSystem.rst","modules/helperFunctions.hash.rst","modules/helperFunctions.install.rst","modules/helperFunctions.logging.rst","modules/helperFunctions.merge_generators.rst","modules/helperFunctions.mongo_config_parser.rst","modules/helperFunctions.mongo_task_conversion.rst","modules/helperFunctions.object_conversion.rst","modules/helperFunctions.object_storage.rst","modules/helperFunctions.pdf.rst","modules/helperFunctions.plugin.rst","modules/helperFunctions.process.rst","modules/helperFunctions.program_setup.rst","modules/helperFunctions.tag.rst","modules/helperFunctions.uid.rst","modules/helperFunctions.web_interface.rst","modules/helperFunctions.yara_binary_search.rst","modules/objects.rst","modules/objects.file.rst","modules/objects.firmware.rst","modules/scheduler.rst","modules/scheduler.analysis.rst","modules/web_interface.rst","modules/web_interface.rest.rst","modules/web_interface.rest.helper.rst"],objects:{"helperFunctions.compare_sets":[[3,1,1,"","iter_element_and_rest"],[3,1,1,"","remove_duplicates_from_list"],[3,1,1,"","substring_is_in_list"]],"helperFunctions.config":[[4,1,1,"","get_config_dir"],[4,1,1,"","get_temp_dir_path"],[4,1,1,"","load_config"],[4,1,1,"","read_list_from_config"]],"helperFunctions.database":[[5,2,1,"","ConnectTo"],[5,1,1,"","is_sanitized_entry"]],"helperFunctions.docker":[[6,1,1,"","run_docker_container"]],"helperFunctions.fileSystem":[[7,1,1,"","file_is_empty"],[7,1,1,"","get_relative_object_path"],[7,1,1,"","get_src_dir"],[7,1,1,"","get_template_dir"]],"helperFunctions.hash":[[8,1,1,"","get_hash"],[8,1,1,"","get_imphash"],[8,1,1,"","get_md5"],[8,1,1,"","get_sha256"],[8,1,1,"","get_ssdeep"],[8,1,1,"","get_ssdeep_comparison"],[8,1,1,"","get_tlsh"],[8,1,1,"","get_tlsh_comparison"],[8,1,1,"","normalize_lief_items"]],"helperFunctions.install":[[9,3,1,"","InstallationError"],[9,2,1,"","OperateInDirectory"],[9,1,1,"","apt_install_packages"],[9,1,1,"","apt_remove_packages"],[9,1,1,"","apt_update_sources"],[9,1,1,"","check_distribution"],[9,1,1,"","check_if_command_in_path"],[9,1,1,"","dnf_install_packages"],[9,1,1,"","dnf_remove_packages"],[9,1,1,"","dnf_update_sources"],[9,1,1,"","install_github_project"],[9,1,1,"","install_pip_packages"],[9,1,1,"","is_virtualenv"],[9,1,1,"","load_main_config"],[9,1,1,"","log_current_packages"],[9,1,1,"","read_package_list_from_file"],[9,1,1,"","remove_folder"],[9,1,1,"","run_cmd_with_logging"]],"helperFunctions.logging":[[10,2,1,"","ColoringFormatter"],[10,2,1,"","TerminalColors"],[10,1,1,"","color_string"]],"helperFunctions.logging.ColoringFormatter":[[10,4,1,"","LOG_LEVEL_COLORS"],[10,5,1,"","format"]],"helperFunctions.logging.TerminalColors":[[10,4,1,"","BLUE"],[10,4,1,"","BOLD"],[10,4,1,"","ENDC"],[10,4,1,"","FAIL"],[10,4,1,"","GREEN"],[10,4,1,"","HEADER"],[10,4,1,"","OKBLUE"],[10,4,1,"","OKGREEN"],[10,4,1,"","PURPLE"],[10,4,1,"","RED"],[10,4,1,"","UNDERLINE"],[10,4,1,"","WARNING"],[10,4,1,"","YELLOW"]],"helperFunctions.merge_generators":[[11,1,1,"","avg"],[11,1,1,"","merge_dict"],[11,1,1,"","merge_lists"],[11,1,1,"","shuffled"],[11,1,1,"","sum_up_lists"],[11,1,1,"","sum_up_nested_lists"]],"helperFunctions.mongo_config_parser":[[12,1,1,"","get_mongo_path"]],"helperFunctions.mongo_task_conversion":[[13,1,1,"","check_for_errors"],[13,1,1,"","convert_analysis_task_to_fw_obj"],[13,1,1,"","create_analysis_task"],[13,1,1,"","create_re_analyze_task"],[13,1,1,"","get_file_name_and_binary_from_request"]],"helperFunctions.object_conversion":[[14,1,1,"","create_meta_dict"]],"helperFunctions.object_storage":[[15,1,1,"","update_included_files"],[15,1,1,"","update_virtual_file_path"]],"helperFunctions.pdf":[[16,1,1,"","build_pdf_report"]],"helperFunctions.plugin":[[17,1,1,"","import_plugins"]],"helperFunctions.process":[[18,2,1,"","ExceptionSafeProcess"],[18,1,1,"","check_worker_exceptions"],[18,1,1,"","complete_shutdown"],[18,1,1,"","new_worker_was_started"],[18,1,1,"","start_single_worker"],[18,1,1,"","terminate_process_and_children"]],"helperFunctions.process.ExceptionSafeProcess":[[18,6,1,"","exception"],[18,5,1,"","run"]],"helperFunctions.program_setup":[[19,1,1,"","get_log_file_for_component"],[19,1,1,"","program_setup"]],"helperFunctions.tag":[[20,2,1,"","TagColor"]],"helperFunctions.tag.TagColor":[[20,4,1,"","ALL"],[20,4,1,"","BLUE"],[20,4,1,"","DARK"],[20,4,1,"","GRAY"],[20,4,1,"","GREEN"],[20,4,1,"","LIGHT"],[20,4,1,"","LIGHT_BLUE"],[20,4,1,"","ORANGE"],[20,4,1,"","RED"]],"helperFunctions.uid":[[21,1,1,"","create_uid"],[21,1,1,"","is_list_of_uids"],[21,1,1,"","is_uid"]],"helperFunctions.web_interface":[[22,1,1,"","apply_filters_to_query"],[22,1,1,"","cap_length_of_element"],[22,1,1,"","filter_out_illegal_characters"],[22,1,1,"","format_time"],[22,1,1,"","get_alternating_color_list"],[22,1,1,"","get_color_list"],[22,1,1,"","get_template_as_string"],[22,1,1,"","password_is_legal"]],"helperFunctions.yara_binary_search":[[23,2,1,"","YaraBinarySearchScanner"],[23,1,1,"","get_yara_error"],[23,1,1,"","is_valid_yara_rule_file"]],"helperFunctions.yara_binary_search.YaraBinarySearchScanner":[[23,5,1,"","get_binary_search_result"]],"objects.file":[[25,2,1,"","FileObject"]],"objects.file.FileObject":[[25,5,1,"","add_included_file"],[25,5,1,"","add_virtual_file_path_if_none_exists"],[25,4,1,"","analysis_exception"],[25,4,1,"","analysis_tags"],[25,4,1,"","binary"],[25,4,1,"","comments"],[25,5,1,"","create_binary_from_path"],[25,4,1,"","depth"],[25,4,1,"","file_name"],[25,4,1,"","file_path"],[25,4,1,"","files_included"],[25,5,1,"","get_hid"],[25,5,1,"","get_root_uid"],[25,5,1,"","get_virtual_file_paths"],[25,5,1,"","get_virtual_paths_for_all_uids"],[25,5,1,"","get_virtual_paths_for_one_uid"],[25,4,1,"","list_of_all_included_files"],[25,4,1,"","parent_firmware_uids"],[25,4,1,"","parents"],[25,4,1,"","processed_analysis"],[25,4,1,"","root_uid"],[25,4,1,"","scheduled_analysis"],[25,5,1,"","set_binary"],[25,4,1,"","sha256"],[25,4,1,"","size"],[25,4,1,"","temporary_data"],[25,6,1,"","uid"],[25,4,1,"","virtual_file_path"]],"objects.firmware":[[26,2,1,"","Firmware"]],"objects.firmware.Firmware":[[26,4,1,"","device_class"],[26,4,1,"","device_name"],[26,5,1,"","get_hid"],[26,4,1,"","part"],[26,4,1,"","release_date"],[26,5,1,"","remove_tag"],[26,5,1,"","set_binary"],[26,5,1,"","set_part_name"],[26,5,1,"","set_tag"],[26,4,1,"","tags"],[26,4,1,"","vendor"],[26,4,1,"","version"]],"scheduler.analysis":[[28,2,1,"","AnalysisScheduler"]],"scheduler.analysis.AnalysisScheduler":[[28,5,1,"","check_exceptions"],[28,5,1,"","get_combined_analysis_workload"],[28,5,1,"","get_plugin_dict"],[28,5,1,"","get_scheduled_workload"],[28,5,1,"","register_plugin"],[28,5,1,"","shutdown"],[28,5,1,"","start_analysis_of_object"],[28,5,1,"","update_analysis_of_object_and_children"],[28,5,1,"","update_analysis_of_single_object"]],"web_interface.rest":[[31,0,0,"-","helper"]],"web_interface.rest.helper":[[31,1,1,"","convert_rest_request"],[31,1,1,"","error_message"],[31,1,1,"","get_boolean_from_request"],[31,1,1,"","get_current_gmt"],[31,1,1,"","get_paging"],[31,1,1,"","get_query"],[31,1,1,"","get_update"],[31,1,1,"","success_message"]],helperFunctions:[[3,0,0,"-","compare_sets"],[4,0,0,"-","config"],[5,0,0,"-","database"],[6,0,0,"-","docker"],[7,0,0,"-","fileSystem"],[8,0,0,"-","hash"],[9,0,0,"-","install"],[10,0,0,"-","logging"],[11,0,0,"-","merge_generators"],[12,0,0,"-","mongo_config_parser"],[13,0,0,"-","mongo_task_conversion"],[14,0,0,"-","object_conversion"],[15,0,0,"-","object_storage"],[16,0,0,"-","pdf"],[17,0,0,"-","plugin"],[18,0,0,"-","process"],[19,0,0,"-","program_setup"],[20,0,0,"-","tag"],[21,0,0,"-","uid"],[22,0,0,"-","web_interface"],[23,0,0,"-","yara_binary_search"]],objects:[[25,0,0,"-","file"],[26,0,0,"-","firmware"]],scheduler:[[28,0,0,"-","analysis"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:exception","4":"py:attribute","5":"py:method","6":"py:property"},terms:{"0":[7,25,28],"00ff00":22,"01":26,"04":1,"0m":10,"1":[25,28],"10":[1,22],"18":1,"19":1,"1970":26,"1m":10,"2":[25,28],"200":31,"2015":19,"2019":[1,19],"3":[19,28],"300":6,"4":1,"400":31,"4m":10,"55":22,"8601":26,"9":1,"91m":10,"92m":10,"93m":10,"94m":10,"95m":10,"boolean":[9,28,31],"byte":[1,7,13,21,23,25,26,31],"case":[1,9,13,18],"class":[5,9,10,18,20,22,23,25,26,28],"default":[4,19,25,26,28,31],"do":1,"final":28,"float":[11,22,25],"function":[1,6,8,11,15,18,23,25,28,31],"import":[8,17,26],"int":[6,18,22,28,31],"new":[0,3,11,18,25,28],"public":[19,23],"return":[3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,21,22,23,25,26,28,31],"true":[3,5,7,9,10,18,21,22,23,25],"try":[1,23],"var":26,"while":[11,25,26],A:[1,3,4,5,6,9,10,11,13,15,17,18,19,20,22,23,25,28],As:25,At:1,FOR:19,For:[1,9,16,25,26],If:[1,4,6,9,18,19,22,25],In:[1,18,26],Is:[18,28],It:[1,25,26],No:[1,28],Not:[25,26],On:9,Or:1,That:25,The:[0,1,3,4,6,7,8,9,10,11,12,13,16,17,18,19,22,23,25,26,28,31],There:[1,9,26],These:7,_t:3,abl:1,about:1,absolut:[4,7],accept:22,access:18,achiev:28,acknowledg:0,across:[15,25],activ:1,actual:28,ad:[1,18],add:[22,25,28],add_included_fil:25,add_job:28,add_virtual_file_path_if_none_exist:25,addition:[7,25,26],address:28,adher:31,administr:9,advanc:26,affect:9,after:[6,9,10,22,25,28],afterward:[1,9,28],again:1,aggreg:25,all:[1,3,6,9,15,16,17,18,20,21,23,25,26,28],allow:[9,18,23,28],almost:1,along:[19,25],alreadi:[9,13,15,22],also:[3,25],altern:22,alwai:[18,25,28],an:[1,3,7,8,9,11,13,15,16,18,19,22,23,25,26,28],analys:28,analysi:[0,13,16,18,19,25,26,27,31],analysis_d:25,analysis_except:25,analysis_main_schedul:28,analysis_tag:[25,26],analysis_task:13,analysisbaseplugin:28,analysisschedul:28,analyst:1,analyz:[1,26,28],ani:[1,3,5,10,13,18,19,22,25,28],anystr:21,api:[0,1,28,31],apierror:6,applianc:26,apply_filters_to_queri:22,approach:1,appropri:1,apt_install_packag:9,apt_remove_packag:9,apt_update_sourc:9,ar:[1,6,8,9,13,18,21,23,25,26,28],arbitrari:25,architectur:1,archiv:25,arg:[6,18,19],argpars:19,argument:[9,19,25],argumentpars:19,arrai:[8,11],ask:1,assign:26,associ:[25,26],assum:26,attach:28,attribut:26,author:[0,25],autom:[0,1],automat:[1,10],avail:1,averag:11,avg:11,awai:1,back:[9,25],backend:[18,28],backenddbinterfac:28,bad:31,balanc:28,base:[1,5,9,10,13,16,18,20,23,25,26,28],base_fw:13,becaus:[1,9],been:[25,28],befor:[1,8,18,28],begin:22,behavior:22,being:25,belong:25,below:1,between:28,binari:[8,21,25,26,31],binwalk:1,black:28,blow:1,blue:[10,20,22],board:1,bold:10,bool:[3,5,6,7,9,18,21,22,23,28,31],boot:1,bootload:26,branch:26,bsi:1,bug:1,build:16,build_pdf_report:16,built:28,c:[9,19],cad:9,call:[16,28],callabl:18,callback:28,camera:26,can:[1,4,15,19,22,25,26,28],cancel:6,cap:22,cap_length_of_el:22,care:25,carv:25,carver:1,categor:26,caus:[22,23],cent:9,certif:1,cf:25,cfg:9,challeng:0,chang:[1,9],charact:22,chart:11,check:[1,3,5,7,9,13,18,21,22,23,28],check_distribut:9,check_except:28,check_for_error:13,check_if_command_in_path:9,check_worker_except:18,child:[18,25],child_path:25,children:[18,25,28],clone:9,close:[25,28],cmd:9,code:[0,8,31],codenam:9,collector:28,color:[10,20,22,25,26],color_str:10,coloringformatt:10,combin:[6,15],combine_stderr_stdout:6,comma:4,command:[6,9],command_line_opt:19,comment:[9,25],common:15,commun:[1,6],compar:[1,18],compare_set:2,comparison:[0,19],compat:[10,22],compil:23,complet:[1,26],complete_shutdown:18,completedprocess:6,compon:[1,18,19],comput:[8,25],concept:1,config:[2,5,9,12,13,18,19,23,28],config_dir:4,config_fil:4,config_file_nam:4,configpars:[4,9,13,18,19,23,28],configur:[4,5,9,13,18,23,28],connect:5,connected_interfac:5,connectto:5,consid:28,consider:28,consist:25,constructor:5,consum:1,contact:0,contain:[1,3,6,9,10,11,13,14,15,16,17,18,19,20,21,23,25,26,28,31],content:[13,22,23,25],context:[5,9,18,25,28],contribut:0,convert:[8,13,31],convert_analysis_task_to_fw_obj:13,convert_rest_request:31,convini:6,copi:[11,19],copyright:19,correspond:26,cover:1,cpu:1,creat:[1,4,7,9,13,14,16,18,19,31],create_analysis_task:13,create_binary_from_path:25,create_meta_dict:14,create_re_analyze_task:13,create_uid:21,credenti:1,critic:10,crypto:1,current:[9,15,18,25,28,31],current_analys:28,cve:1,cwe:1,cycl:25,d1:11,d2:11,danger:20,dark:20,data:[8,13,21,25,26,31],data_storag:4,databas:[1,2,12,13,15,23,25,26,28],databaseinterfac:5,datastructur:31,date:26,datefmt:10,db_interfac:28,dd:26,debian:[1,9],debug:[1,10,25],decid:28,decis:28,defin:[4,10,25,26],depend:[1,28,31],depth:25,descript:[19,28],detail:[1,16,19],detect:1,dev:19,develop:1,devic:[1,22,26],device_class:26,device_nam:26,di:25,dict:[13,15,22,23,25,26,28,31],dictionari:[11,13,14,26,28,31],differ:[1,15,20,22,25,28],direct:25,directori:[4,7,9,17,22],disassembl:1,discov:15,displai:[13,18,22],distinguish:9,distribut:[9,19],dnf_install_packag:9,dnf_remove_packag:9,dnf_update_sourc:9,doc:18,docker:[2,16],document:1,doe:[4,8,9,18],don:9,done:15,drone:0,duplic:3,durat:22,dure:[9,18,25,26,28],e:[3,5,7,9,15,18,21,22,25,28],each:[1,3,9,25,26,28],easi:0,effect:[9,28],either:[1,8,9,19,23,25],element:[3,21,22],elf:8,els:25,embed:26,empti:[7,9,16,26],emul:1,encod:31,endc:10,endpoint:31,engin:16,entertain:26,entiti:28,entri:[5,11,28],environ:9,epoch:26,equal:1,equival:9,erron:22,error:[6,9,10,13,22,23,25,31],error_messag:[13,31],especi:1,etc:[25,26],even:[15,19],everi:25,exampl:[5,9],except:[6,9,18,23,25,28],exceptionsafeprocess:18,execpt:9,execut:[1,6,9,18,28],exist:[1,4,13,15,25,28],exit:9,expect:9,expens:25,extend:0,extract:[7,25,26,28],extractor:[1,7],fact:[0,1,4,5,7,9,13,18,19,23,25,26,31],fact_cor:[1,9],fact_extract:7,fact_pdf_report:16,fail:[6,9,10,31],fall:[9,25],fallback:4,fals:[3,5,6,7,9,18,21,22,23],fandctool:1,favorit:1,featur:1,feder:1,fedora:9,few:1,field:[13,25],file:[1,5,7,8,9,12,13,14,15,16,22,23,24,26,28],file_is_empti:7,file_nam:25,file_object:[8,25],file_path:[7,12,25],fileobject:[8,14,15,25,26,28],files_includ:25,filesystem:[2,25],filter:[22,26],filter_out_illegal_charact:22,financ:1,find:[5,9],finish:[1,28],firmwar:[0,5,7,13,15,16,19,23,24,25,28],firmware_uid:25,first:[1,8,25],fit:19,fix:1,fkie:[1,9,19],flag:31,flask:[13,22],flaw:1,fmt:10,fo:[14,28],focu:[1,23],folder:[9,16,26],folder_nam:9,follow:[1,28],forc:28,form:[13,25,28],format:[1,10,22,26],format_tim:22,formatt:10,found:[1,3,6,9,15],foundat:19,fraunhof:[1,19],free:19,freeli:26,frequent:26,from:[3,4,5,7,9,10,12,13,17,19,22,25,26,31],frontenddbinterfac:5,fs:[25,26],fs_uid:25,full:25,further:[1,28],furthermor:1,fuzz:1,g:[3,5,15,18,21,22,28],gener:[3,5,8,16,19,21,25,28],german:1,get:[1,3,7,15,18,22,23,25,28,31],get_alternating_color_list:22,get_binary_search_result:23,get_boolean_from_request:31,get_color_list:22,get_combined_analysis_workload:28,get_config_dir:4,get_current_gmt:31,get_file_name_and_binary_from_request:13,get_hash:8,get_hid:[25,26],get_imphash:8,get_log_file_for_compon:19,get_md5:8,get_mongo_path:12,get_pag:31,get_plugin_dict:28,get_queri:31,get_relative_object_path:7,get_root_uid:25,get_scheduled_workload:28,get_sha256:8,get_src_dir:7,get_ssdeep:8,get_ssdeep_comparison:8,get_temp_dir_path:4,get_template_as_str:22,get_template_dir:7,get_tlsh:8,get_tlsh_comparison:8,get_upd:31,get_virtual_file_path:25,get_virtual_paths_for_all_uid:25,get_virtual_paths_for_one_uid:25,get_yara_error:23,ghusernam:9,git:1,github:[1,9],give:28,given:[9,16,22,23,25,28],gnu:19,go:1,grai:[20,26],green:[10,20,22],group:[18,26],gui:1,guidelin:[1,31],ha:[7,25,28],handl:[18,28],happen:[9,18,28],hard:1,hash:[2,22,25,28],hash_funct:8,hash_length:25,hashlib:8,have:[1,7,9,19,20,25,28],header:10,hear:1,helper:[29,30],helperfunct:26,hesit:1,hex:[8,22],hexadecim:22,hexstr:8,hi:1,hid:[22,25],hid_el:22,hold:[4,25,26],hope:19,host:[9,25],how:1,howev:1,html:22,http:[19,31],human:25,hunt:1,i:[7,9,25],identif:1,identifi:[1,9,13,21,22,25,26,31],illeg:22,imag:[6,15,25,26],imagenotfound:6,immutablemultidict:31,impend:28,impervi:18,imphash:8,implement:[1,16],impli:19,import_plugin:17,improv:1,includ:[9,15,23,25,26,28,31],incorpor:1,increment:25,independ:28,index:[0,18],indic:9,info:[10,20],inform:[1,14,25,28,31],inherit:25,initi:28,input:[3,21],input_data:21,input_list:21,input_str:21,ins:1,insid:[15,16,25,28],instal:[0,2],install_github_project:9,install_pip_packag:9,installationerror:9,instanc:[1,6,18,26,28],instead:18,integ:[8,31],integr:0,intend:[0,5,13],interact:28,interfac:[5,22],intermedi:[7,28],intern:25,intial:28,introspect:28,investig:1,iot:0,ip:26,is_list_of_uid:21,is_sanitized_entri:5,is_uid:21,is_valid_yara_rule_fil:23,is_virtualenv:9,iso:26,issu:1,item:3,iter:[3,9,11,18,28],iter_element_and_rest:3,its:[9,18,25,26,28],itself:25,jinja2:16,join:15,json:[22,31],kali:[1,9],keep:11,kei:[1,4,25],kernel:26,keyword:[6,9],kind:1,know:1,knowledg:1,known:1,kwarg:[6,9,18,26],label:[6,18],larg:5,later:19,latest:0,latex:16,layer:[1,25],lead:1,leaf:26,least:[1,25],length:[22,25],level:[10,15,25],licens:[1,19],light:20,light_blu:20,like:[1,25],limit:[22,31],line:9,link:15,list:[1,3,4,8,9,10,11,15,18,20,21,22,23,25,28,31],list_:3,list_a:11,list_b:11,list_of_all_included_fil:25,live:[1,28],load:[4,28],load_config:4,load_main_config:9,local:[1,25],log:[2,6,9,18],log_current_packag:9,log_level_color:10,logging_label:6,logic:15,login:1,logrecord:10,look:[1,25],lot:[1,25],love:1,lower:25,machin:25,made:[25,28],mai:[9,18,20,26,28],mail:1,main:[1,9],make:[9,18],manag:[5,9],mandatori:[26,28],mani:1,manual:1,manufactur:1,map:25,massiv:1,match:[18,23],materi:1,matter:[1,8],maximum:22,md5:8,mean:[5,25],memori:25,merchant:19,merg:11,merge_dict:11,merge_gener:2,merge_list:11,messag:[13,18,23,25,31],meta:[14,25,26,31],method:23,might:[1,22,25,28,31],mime_blacklist:28,mime_whitelist:28,minor:1,mint:9,miss:13,mm:26,modifi:19,modul:[0,2,24,28,29,30],mongo_config_pars:2,mongo_task_convers:2,mongodb:[5,12,22,31],more:[1,8,19],most:31,mostli:28,much:1,multipl:[1,9,11,15,25],multiprocess:[18,28],must:[1,10],name:[6,9,13,18,19,22,25,26,28,31],neat:31,necessari:9,necessarili:25,need:[1,7,28],nest:11,nested_list_b:11,never:26,new_object:15,new_process:18,new_worker_was_start:18,newfound:15,newli:15,next:[1,25],non:9,none:[4,10,13,18,19,23,25,26,28,31],normalize_lief_item:8,notifi:28,ntp:31,number:[9,22,25],object:[3,4,7,8,9,10,13,14,15,16,20,22,23,28],object_convers:2,object_storag:2,occur:[18,25,28],occurr:25,offer:[28,31],offic:1,offset:[7,31],offset_path:7,ok:31,okblu:10,okgreen:10,old:18,old_object:15,old_process:18,onc:[15,28],one:[9,11,16,25],ones:15,onli:[3,11,15,21,23,25,28],open:5,operateindirectori:9,oppos:18,option:[4,9,13,18,19,22,23,25,26,28,31],orang:20,order:[8,28],org:19,origin:1,os:1,other:[3,10,26],otherwis:[3,5,7,18,21,22,23],our:1,out:[1,9,22,28],outer:25,output:10,over:[3,18],overview:16,own:1,pack:25,packag:9,package_fil:9,packagenam:17,page:[0,16,31],pair:25,param:23,paramet:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,25,26,28,31],parent:25,parent_firmware_uid:25,parent_path:25,parent_uid:25,pars:[4,19,31],part:[1,25,26],part_nam:26,particular:19,partli:1,pass:[5,6,9,18,26],passwd:26,password:[1,22],password_is_leg:22,patch:15,path:[4,7,9,12,15,16,22,25,26],pathlib:[7,9,16],pattern:[1,23],pdf:2,per:9,perform:23,persist:25,pictur:1,pip:9,pipe:25,placehold:25,platform:1,pleas:1,plethora:26,plug:[0,1],plugin:[2,25,26,28,31],plugin_base_dir:17,plugin_inst:28,plugin_mount:17,plugin_nam:25,plugin_vers:25,pluginbas:[17,28],pluginsourc:17,point:28,possibl:[1,3],post_analysi:28,potenti:1,pre:28,pre_analysi:28,predecessor:25,present:[1,22,25,26,28],preserv:28,preset:26,previou:9,primari:[20,25],print:10,printer:26,privat:1,probabl:25,process:[1,2,28],process_index:18,process_list:18,processed_analysi:25,program:[1,9,19],program_setup:2,progress:28,project:9,project_path:9,propag:[25,26,28],properti:[18,25],provid:[1,3,23,26,28],publish:19,pull:1,purpl:10,purpos:[19,25],pw:22,python:[9,18,31],qemu:1,queri:[5,22,26,31],question:1,queue:28,rais:[6,9,18],raise_error:9,ran:[6,28],re:[1,18],reach:6,read:[4,9,19],read_list_from_config:4,read_package_list_from_fil:9,readabl:25,readm:1,readtimeout:6,reason:31,receiv:19,recent:28,recently_finished_analys:28,reconstruct:18,record:10,recurs:[25,28],red:[10,20],redhat:9,redistribut:19,refer:[16,28],regard:28,regist:28,register_plugin:28,rel:7,relat:[7,25],releas:26,release_d:26,remain:[3,6],remot:9,remov:[3,7,9,26],remove_duplicates_from_list:3,remove_fold:9,remove_tag:26,render:16,repeat:28,repositori:1,repres:[8,9,22,25,26,28,31],represent:[25,26],request:[1,6,13,22,31],request_data:31,request_paramet:31,requir:[15,26],rerais:18,resid:17,respect:[10,18],respons:[28,31],rest:[0,1,3,28,29],restart:[18,28],result:[1,11,16,23,25,28,31],result_dict:25,retriev:[7,12,13,18,31],return_cod:31,returncod:9,rf:9,right:[1,9],risk:1,rm:9,root:[7,25,26,28],root_uid:[25,26],router:[0,26],rule:23,rules_fil:23,run:[6,9,18,25,28],run_cmd_with_log:9,run_docker_contain:6,runner:28,runtim:28,s:[1,7,9,25,26,28],safe:28,said:26,same:[15,18,26],sampl:1,sanit:5,save:26,scan:23,schedul:[18,25],scheduled_analysi:25,scope:28,screenshot:0,script:1,search:[0,1,23],searchabl:1,second:[8,22],secondari:[20,26],section:4,secur:[0,1],see:[1,8,18,19,26,28],select:[22,28],self:[5,25,26],send:18,separ:[4,25,26],seq:11,sequenc:11,servic:1,set:[9,18,21,23,25,26,28],set_binari:[25,26],set_part_nam:26,set_tag:26,setter:26,sha256:25,sha256_siz:21,shall:[0,8,26,31],share:[1,28],shell:9,shorthand:8,should:[9,19,25,28],shown:28,shuffl:[11,28],shutdown:[18,28],side:28,sign:25,signal:18,silent:9,similar:25,simpli:28,sinc:1,singl:[23,25,28],size:[7,25],skip:28,so:[1,8,22,25,28],softwar:[1,19],solv:1,some:[1,7,15,19,25],sort:[8,11],sourc:0,special:26,specif:[25,26,31],specifi:[10,25,26],speedup:1,squashf:25,src:[7,9],stack:18,stage:28,start:[1,9,18,26,28],start_analysis_of_object:28,start_single_work:18,state:[15,28],statist:28,statu:[28,31],stderr:[6,9],stdout:6,stop:10,storag:[5,25],store:[1,13,25,26,28],str:[3,4,6,7,9,10,12,13,18,19,21,22,23,25,26,28,31],string:[3,8,10,21,22,23,25,26,31],structur:25,style:[9,10],subclass:10,submodul:1,subprocess:[6,9,18],substr:3,substring_is_in_list:3,substring_list:3,subtyp:18,success:[20,31],success_messag:31,sudo:9,suggest:18,sum:11,sum_up_list:11,sum_up_nested_list:11,summari:25,supplementari:26,support:[1,9],swap:5,sym:15,symlink:25,system:[0,5,9,26,31],t:[9,11],tag:[2,25,26],tag_color:26,tag_nam:25,tagcolor:[20,26],take:25,tar:25,target:31,target_directori:9,targeted_url:31,task:[1,13,23,28],task_kei:13,technic:16,tell:1,temp_dir_path:4,templat:[7,16,22],temporari:[7,25],temporary_data:25,term:19,termin:[10,18],terminalcolor:10,terminate_process_and_children:18,text:10,thei:[1,28],them:28,themselv:[25,28],therebi:0,therefor:1,thi:[1,6,9,10,11,15,18,19,23,25,26,28,31],this_files_current_vfp:25,thread:28,three:28,through:[9,28],throw_except:18,thu:[15,25],time:[1,15,25,26,31],timeout:[6,9],timestamp:31,tmp:4,too:5,tool:[0,1,16,19],total:25,tough:1,trace:18,track:28,tree:[25,26],trigger:28,tupl:[3,9,10,13,18,19,23,25,31],twitter:1,two:11,type:[3,4,5,6,7,9,10,11,12,13,15,16,18,19,21,22,23,25,26,28,31],ubuntu:[1,9],uefi:0,ui:[0,25,28],uid:[2,13,23,25],unchang:28,under:[1,19],underlin:10,understand:26,unexpect:22,union:[9,21,23],uniqu:[3,11,13,21,23,25],unix:[25,26,31],unpack:[1,7,18,25,28],until:28,up:[11,25],updat:[9,13,15,22,28,31],update_analysis_of_object_and_children:28,update_analysis_of_single_object:28,update_included_fil:15,update_virtual_file_path:15,upgrad:9,upload:26,url:31,us:[0,5,6,8,9,10,18,19,25,26,28,31],user:[26,28],usual:25,util:1,valid:[4,10,21,23],valu:[4,9,18,22,23,25,26,28,31],vendor:[22,26],veri:1,version:[1,19,25,26,28],vfp:25,view_nam:22,virtual:[9,15,22,25,26],virtual_file_path:25,vulner:1,wa:[5,6,18,22,25],wai:1,want:1,warn:[10,20],warranti:19,we:[1,26],web:[0,1,22,28],web_interfac:2,webcam:0,webinterfac:13,welcom:1,well:1,werkzeug:31,what:18,when:[1,9],where:1,whether:[6,9,22],which:[1,6,8,9,16,22,26],whitelist:28,whole:1,whose:31,why:31,witch:22,without:[1,19,22,28],work:9,worker:18,worker_funct:18,worker_label:18,workload:28,would:[1,25],wrapper:31,write:1,www:19,x1b:10,yaml:12,yara:23,yara_binary_search:2,yara_rul:23,yarabinarysearchscann:23,ye:28,yellow:[10,22],yet:18,you:[1,19,25],your:[1,19],yyyi:26,zero:9},titles:["About","Challenges","helperFunctions","helperFunctions.compare_sets module","helperFunctions.config module","helperFunctions.database module","helperFunctions.docker module","helperFunctions.fileSystem module","helperFunctions.hash module","helperFunctions.install module","helperFunctions.logging module","helperFunctions.merge_generators module","helperFunctions.mongo_config_parser module","helperFunctions.mongo_task_conversion module","helperFunctions.object_conversion module","helperFunctions.object_storage module","helperFunctions.pdf module","helperFunctions.plugin module","helperFunctions.process module","helperFunctions.program_setup module","helperFunctions.tag module","helperFunctions.uid module","helperFunctions.uid web_interface","helperFunctions.yara_binary_search module","objects","objects.file module","objects.firmware module","scheduler","scheduler.analysis","web_interface","web_interface.rest","web_interface.rest.helper module"],titleterms:{"new":1,about:[0,16],acknowledg:1,affect:1,analysi:[1,28],author:1,challeng:1,code:1,compare_set:3,comparison:1,config:4,contact:1,content:0,contribut:1,databas:5,docker:6,easi:1,extend:1,extract:1,file:25,filesystem:7,find:1,firmwar:[1,26],hash:8,helper:31,helperfunct:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],imag:1,indic:0,initi:1,instal:[1,9],integr:1,latest:1,log:10,merge_gener:11,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,31],mongo_config_pars:12,mongo_task_convers:13,object:[24,25,26],object_convers:14,object_storag:15,other:1,pdf:16,plugin:17,process:18,program_setup:19,report:16,rest:[30,31],schedul:[27,28],screenshot:1,sourc:1,tabl:0,tag:20,uid:[21,22],us:1,web_interfac:[22,29,30,31],yara_binary_search:23}})