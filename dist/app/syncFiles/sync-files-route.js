var a74_0xeefc=['uploadEvent','__importDefault','defineProperty','__esModule','../../infrastructure/router-utils','express','multer','default','Router','/sync_list_file','syncFtp','downloadFtp','get','/process_files','processFtp','post','/upload_event','single','file'];(function(_0x1f47ef,_0x1b47b2){var _0x5ae384=function(_0x5b5bf9){while(--_0x5b5bf9){_0x1f47ef['push'](_0x1f47ef['shift']());}};_0x5ae384(++_0x1b47b2);}(a74_0xeefc,0x190));var a74_0x2a88=function(_0x4adc7d,_0x25f49c){_0x4adc7d=_0x4adc7d-0x0;var _0x591923=a74_0xeefc[_0x4adc7d];return _0x591923;};'use strict';var __importDefault=this&&this[a74_0x2a88('0x0')]||function(_0xeaa88d){return _0xeaa88d&&_0xeaa88d['__esModule']?_0xeaa88d:{'default':_0xeaa88d};};Object[a74_0x2a88('0x1')](exports,a74_0x2a88('0x2'),{'value':!![]});const sync_files_controller_1=__importDefault(require('./sync-files-controller'));const router_utils_1=__importDefault(require(a74_0x2a88('0x3')));const express_1=__importDefault(require(a74_0x2a88('0x4')));const multer_1=__importDefault(require(a74_0x2a88('0x5')));const router=express_1[a74_0x2a88('0x6')][a74_0x2a88('0x7')]();const UPLOAD_PATH='media';const upload=multer_1[a74_0x2a88('0x6')]({'dest':UPLOAD_PATH+'/'});class SyncFilesRoute{constructor(_0x4d0622){const _0x69bb12=new sync_files_controller_1[(a74_0x2a88('0x6'))](_0x4d0622);const _0x4b0fad=new router_utils_1['default'](_0x69bb12,router,null);router['get'](a74_0x2a88('0x8'),_0x69bb12[a74_0x2a88('0x9')]);router['get']('/download_files',_0x69bb12[a74_0x2a88('0xa')]);router[a74_0x2a88('0xb')](a74_0x2a88('0xc'),_0x69bb12[a74_0x2a88('0xd')]);router[a74_0x2a88('0xe')](a74_0x2a88('0xf'),upload[a74_0x2a88('0x10')](a74_0x2a88('0x11')),_0x69bb12[a74_0x2a88('0x12')]);return router;}}exports['default']=SyncFilesRoute;