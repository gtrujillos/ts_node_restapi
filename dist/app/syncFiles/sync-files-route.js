var a164_0x4459=['/upload_event','single','uploadEvent','__importDefault','defineProperty','__esModule','./sync-files-controller','../../infrastructure/router-utils','express','multer','default','Router','get','/sync_list_file','syncFtp','downloadFtp','/process_files','post'];(function(_0x564471,_0x4556b9){var _0x42893b=function(_0x5f2b0b){while(--_0x5f2b0b){_0x564471['push'](_0x564471['shift']());}};_0x42893b(++_0x4556b9);}(a164_0x4459,0x147));var a164_0x27e1=function(_0x2f6400,_0x2e8b53){_0x2f6400=_0x2f6400-0x0;var _0x24e937=a164_0x4459[_0x2f6400];return _0x24e937;};'use strict';var __importDefault=this&&this[a164_0x27e1('0x0')]||function(_0x9f12a6){return _0x9f12a6&&_0x9f12a6['__esModule']?_0x9f12a6:{'default':_0x9f12a6};};Object[a164_0x27e1('0x1')](exports,a164_0x27e1('0x2'),{'value':!![]});const sync_files_controller_1=__importDefault(require(a164_0x27e1('0x3')));const router_utils_1=__importDefault(require(a164_0x27e1('0x4')));const express_1=__importDefault(require(a164_0x27e1('0x5')));const multer_1=__importDefault(require(a164_0x27e1('0x6')));const router=express_1[a164_0x27e1('0x7')][a164_0x27e1('0x8')]();const UPLOAD_PATH='media';const upload=multer_1[a164_0x27e1('0x7')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x5ce343){const _0x45a579=new sync_files_controller_1['default'](_0x5ce343);const _0x13d941=new router_utils_1[(a164_0x27e1('0x7'))](_0x45a579,router,null);router[a164_0x27e1('0x9')](a164_0x27e1('0xa'),_0x45a579[a164_0x27e1('0xb')]);router[a164_0x27e1('0x9')]('/download_files',_0x45a579[a164_0x27e1('0xc')]);router[a164_0x27e1('0x9')](a164_0x27e1('0xd'),_0x45a579['processFtp']);router[a164_0x27e1('0xe')](a164_0x27e1('0xf'),upload[a164_0x27e1('0x10')]('file'),_0x45a579[a164_0x27e1('0x11')]);return router;}}exports[a164_0x27e1('0x7')]=SyncFilesRoute;