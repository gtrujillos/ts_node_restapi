var a68_0x2a83=['media','get','syncFtp','post','/upload_event','single','file','__importDefault','__esModule','defineProperty','./sync-files-controller','../../infrastructure/router-utils','default'];(function(_0x2274f6,_0x6f183a){var _0x44e32c=function(_0x195a32){while(--_0x195a32){_0x2274f6['push'](_0x2274f6['shift']());}};_0x44e32c(++_0x6f183a);}(a68_0x2a83,0x166));var a68_0x52c0=function(_0xd977df,_0x1a6c74){_0xd977df=_0xd977df-0x0;var _0x54f144=a68_0x2a83[_0xd977df];return _0x54f144;};'use strict';var __importDefault=this&&this[a68_0x52c0('0x0')]||function(_0x18763c){return _0x18763c&&_0x18763c[a68_0x52c0('0x1')]?_0x18763c:{'default':_0x18763c};};Object[a68_0x52c0('0x2')](exports,'__esModule',{'value':!![]});const sync_files_controller_1=__importDefault(require(a68_0x52c0('0x3')));const router_utils_1=__importDefault(require(a68_0x52c0('0x4')));const express_1=__importDefault(require('express'));const multer_1=__importDefault(require('multer'));const router=express_1[a68_0x52c0('0x5')]['Router']();const UPLOAD_PATH=a68_0x52c0('0x6');const upload=multer_1[a68_0x52c0('0x5')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x301b92){const _0x6ed1ac=new sync_files_controller_1[(a68_0x52c0('0x5'))](_0x301b92);const _0x38af7b=new router_utils_1['default'](_0x6ed1ac,router,null);router[a68_0x52c0('0x7')]('/sync_list_file',_0x6ed1ac[a68_0x52c0('0x8')]);router['get']('/download_files',_0x6ed1ac['downloadFtp']);router[a68_0x52c0('0x7')]('/process_files',_0x6ed1ac['processFtp']);router[a68_0x52c0('0x9')](a68_0x52c0('0xa'),upload[a68_0x52c0('0xb')](a68_0x52c0('0xc')),_0x6ed1ac['uploadEvent']);return router;}}exports[a68_0x52c0('0x5')]=SyncFilesRoute;