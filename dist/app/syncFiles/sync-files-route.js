var a137_0x5235=['downloadFtp','/process_files','processFtp','/upload_event','file','__importDefault','__esModule','defineProperty','./sync-files-controller','multer','default','/sync_list_file','syncFtp','get'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a137_0x5235,0x67));var a137_0x57fe=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a137_0x5235[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a137_0x57fe('0x0')]||function(_0x51c8c4){return _0x51c8c4&&_0x51c8c4[a137_0x57fe('0x1')]?_0x51c8c4:{'default':_0x51c8c4};};Object[a137_0x57fe('0x2')](exports,a137_0x57fe('0x1'),{'value':!![]});const sync_files_controller_1=__importDefault(require(a137_0x57fe('0x3')));const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require('express'));const multer_1=__importDefault(require(a137_0x57fe('0x4')));const router=express_1['default']['Router']();const UPLOAD_PATH='media';const upload=multer_1[a137_0x57fe('0x5')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x3c0c10){const _0x297c67=new sync_files_controller_1['default'](_0x3c0c10);const _0x33bc78=new router_utils_1[(a137_0x57fe('0x5'))](_0x297c67,router,null);router['get'](a137_0x57fe('0x6'),_0x297c67[a137_0x57fe('0x7')]);router[a137_0x57fe('0x8')]('/download_files',_0x297c67[a137_0x57fe('0x9')]);router['get'](a137_0x57fe('0xa'),_0x297c67[a137_0x57fe('0xb')]);router['post'](a137_0x57fe('0xc'),upload['single'](a137_0x57fe('0xd')),_0x297c67['uploadEvent']);return router;}}exports['default']=SyncFilesRoute;