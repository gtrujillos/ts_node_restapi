var a75_0x1a3a=['uploadEvent','__esModule','defineProperty','./sync-files-controller','multer','default','Router','get','/sync_list_file','downloadFtp','post','/upload_event','single','file'];(function(_0x429621,_0x10ba24){var _0x1a66fc=function(_0x3f961f){while(--_0x3f961f){_0x429621['push'](_0x429621['shift']());}};_0x1a66fc(++_0x10ba24);}(a75_0x1a3a,0x17b));var a75_0x51c3=function(_0x5bfc34,_0x4e8710){_0x5bfc34=_0x5bfc34-0x0;var _0x44a958=a75_0x1a3a[_0x5bfc34];return _0x44a958;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4f4045){return _0x4f4045&&_0x4f4045[a75_0x51c3('0x0')]?_0x4f4045:{'default':_0x4f4045};};Object[a75_0x51c3('0x1')](exports,a75_0x51c3('0x0'),{'value':!![]});const sync_files_controller_1=__importDefault(require(a75_0x51c3('0x2')));const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require('express'));const multer_1=__importDefault(require(a75_0x51c3('0x3')));const router=express_1[a75_0x51c3('0x4')][a75_0x51c3('0x5')]();const UPLOAD_PATH='media';const upload=multer_1[a75_0x51c3('0x4')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x28ba37){const _0x6f9db1=new sync_files_controller_1['default'](_0x28ba37);const _0x3c3d25=new router_utils_1[(a75_0x51c3('0x4'))](_0x6f9db1,router,null);router[a75_0x51c3('0x6')](a75_0x51c3('0x7'),_0x6f9db1['syncFtp']);router[a75_0x51c3('0x6')]('/download_files',_0x6f9db1[a75_0x51c3('0x8')]);router[a75_0x51c3('0x6')]('/process_files',_0x6f9db1['processFtp']);router[a75_0x51c3('0x9')](a75_0x51c3('0xa'),upload[a75_0x51c3('0xb')](a75_0x51c3('0xc')),_0x6f9db1[a75_0x51c3('0xd')]);return router;}}exports[a75_0x51c3('0x4')]=SyncFilesRoute;