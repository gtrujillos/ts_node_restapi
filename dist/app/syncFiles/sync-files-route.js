var a74_0x1fe6=['./sync-files-controller','../../infrastructure/router-utils','express','multer','default','Router','media','get','/sync_list_file','syncFtp','/download_files','downloadFtp','/process_files','processFtp','post','/upload_event','single','file','uploadEvent','__importDefault','__esModule'];(function(_0x1294d3,_0x112f97){var _0x38f4cb=function(_0x284259){while(--_0x284259){_0x1294d3['push'](_0x1294d3['shift']());}};_0x38f4cb(++_0x112f97);}(a74_0x1fe6,0x1e1));var a74_0x71f3=function(_0x5090cd,_0x521638){_0x5090cd=_0x5090cd-0x0;var _0x45a6e5=a74_0x1fe6[_0x5090cd];return _0x45a6e5;};'use strict';var __importDefault=this&&this[a74_0x71f3('0x0')]||function(_0xf28d86){return _0xf28d86&&_0xf28d86[a74_0x71f3('0x1')]?_0xf28d86:{'default':_0xf28d86};};Object['defineProperty'](exports,a74_0x71f3('0x1'),{'value':!![]});const sync_files_controller_1=__importDefault(require(a74_0x71f3('0x2')));const router_utils_1=__importDefault(require(a74_0x71f3('0x3')));const express_1=__importDefault(require(a74_0x71f3('0x4')));const multer_1=__importDefault(require(a74_0x71f3('0x5')));const router=express_1[a74_0x71f3('0x6')][a74_0x71f3('0x7')]();const UPLOAD_PATH=a74_0x71f3('0x8');const upload=multer_1[a74_0x71f3('0x6')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0xd61e47){const _0x243a8b=new sync_files_controller_1[(a74_0x71f3('0x6'))](_0xd61e47);const _0x1aa5a8=new router_utils_1['default'](_0x243a8b,router,null);router[a74_0x71f3('0x9')](a74_0x71f3('0xa'),_0x243a8b[a74_0x71f3('0xb')]);router['get'](a74_0x71f3('0xc'),_0x243a8b[a74_0x71f3('0xd')]);router[a74_0x71f3('0x9')](a74_0x71f3('0xe'),_0x243a8b[a74_0x71f3('0xf')]);router[a74_0x71f3('0x10')](a74_0x71f3('0x11'),upload[a74_0x71f3('0x12')](a74_0x71f3('0x13')),_0x243a8b[a74_0x71f3('0x14')]);return router;}}exports[a74_0x71f3('0x6')]=SyncFilesRoute;