var a75_0x1a21=['uploadEvent','__importDefault','__esModule','defineProperty','./sync-files-controller','../../infrastructure/router-utils','express','multer','default','Router','media','get','syncFtp','/download_files','downloadFtp','/process_files','processFtp','post','single','file'];(function(_0x2abc6e,_0xd1351b){var _0x2bed6b=function(_0x384d91){while(--_0x384d91){_0x2abc6e['push'](_0x2abc6e['shift']());}};_0x2bed6b(++_0xd1351b);}(a75_0x1a21,0x1e1));var a75_0xb189=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a75_0x1a21[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a75_0xb189('0x0')]||function(_0x2c2dd3){return _0x2c2dd3&&_0x2c2dd3[a75_0xb189('0x1')]?_0x2c2dd3:{'default':_0x2c2dd3};};Object[a75_0xb189('0x2')](exports,a75_0xb189('0x1'),{'value':!![]});const sync_files_controller_1=__importDefault(require(a75_0xb189('0x3')));const router_utils_1=__importDefault(require(a75_0xb189('0x4')));const express_1=__importDefault(require(a75_0xb189('0x5')));const multer_1=__importDefault(require(a75_0xb189('0x6')));const router=express_1[a75_0xb189('0x7')][a75_0xb189('0x8')]();const UPLOAD_PATH=a75_0xb189('0x9');const upload=multer_1['default']({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x5298b9){const _0x52eb0e=new sync_files_controller_1[(a75_0xb189('0x7'))](_0x5298b9);const _0x56ae4a=new router_utils_1['default'](_0x52eb0e,router,null);router[a75_0xb189('0xa')]('/sync_list_file',_0x52eb0e[a75_0xb189('0xb')]);router[a75_0xb189('0xa')](a75_0xb189('0xc'),_0x52eb0e[a75_0xb189('0xd')]);router[a75_0xb189('0xa')](a75_0xb189('0xe'),_0x52eb0e[a75_0xb189('0xf')]);router[a75_0xb189('0x10')]('/upload_event',upload[a75_0xb189('0x11')](a75_0xb189('0x12')),_0x52eb0e[a75_0xb189('0x13')]);return router;}}exports[a75_0xb189('0x7')]=SyncFilesRoute;