var a75_0x414a=['__importDefault','defineProperty','./sync-files-controller','../../infrastructure/router-utils','express','multer','default','Router','get','/sync_list_file','syncFtp','/download_files','downloadFtp','processFtp','/upload_event','single','file','uploadEvent'];(function(_0x2e6ad3,_0x14b4b6){var _0x539713=function(_0x511f8c){while(--_0x511f8c){_0x2e6ad3['push'](_0x2e6ad3['shift']());}};_0x539713(++_0x14b4b6);}(a75_0x414a,0xfc));var a75_0x384d=function(_0x541a3f,_0x1de579){_0x541a3f=_0x541a3f-0x0;var _0x1e1847=a75_0x414a[_0x541a3f];return _0x1e1847;};'use strict';var __importDefault=this&&this[a75_0x384d('0x0')]||function(_0xea0ecc){return _0xea0ecc&&_0xea0ecc['__esModule']?_0xea0ecc:{'default':_0xea0ecc};};Object[a75_0x384d('0x1')](exports,'__esModule',{'value':!![]});const sync_files_controller_1=__importDefault(require(a75_0x384d('0x2')));const router_utils_1=__importDefault(require(a75_0x384d('0x3')));const express_1=__importDefault(require(a75_0x384d('0x4')));const multer_1=__importDefault(require(a75_0x384d('0x5')));const router=express_1[a75_0x384d('0x6')][a75_0x384d('0x7')]();const UPLOAD_PATH='media';const upload=multer_1[a75_0x384d('0x6')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x310a63){const _0x594b93=new sync_files_controller_1[(a75_0x384d('0x6'))](_0x310a63);const _0x766271=new router_utils_1[(a75_0x384d('0x6'))](_0x594b93,router,null);router[a75_0x384d('0x8')](a75_0x384d('0x9'),_0x594b93[a75_0x384d('0xa')]);router['get'](a75_0x384d('0xb'),_0x594b93[a75_0x384d('0xc')]);router[a75_0x384d('0x8')]('/process_files',_0x594b93[a75_0x384d('0xd')]);router['post'](a75_0x384d('0xe'),upload[a75_0x384d('0xf')](a75_0x384d('0x10')),_0x594b93[a75_0x384d('0x11')]);return router;}}exports[a75_0x384d('0x6')]=SyncFilesRoute;