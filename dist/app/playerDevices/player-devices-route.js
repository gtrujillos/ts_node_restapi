var a65_0x4827=['register','/report_status','/get_status/:user_uuid','getStatus','__importDefault','__esModule','../../infrastructure/router-utils','express','./player-devices-controller','Router','default','post','/register'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a65_0x4827,0x163));var a65_0x2e74=function(_0x234f10,_0x47c731){_0x234f10=_0x234f10-0x0;var _0x2a44cd=a65_0x4827[_0x234f10];return _0x2a44cd;};'use strict';var __importDefault=this&&this[a65_0x2e74('0x0')]||function(_0x1c80a9){return _0x1c80a9&&_0x1c80a9['__esModule']?_0x1c80a9:{'default':_0x1c80a9};};Object['defineProperty'](exports,a65_0x2e74('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a65_0x2e74('0x2')));const express_1=__importDefault(require(a65_0x2e74('0x3')));const player_devices_controller_1=__importDefault(require(a65_0x2e74('0x4')));const router=express_1['default'][a65_0x2e74('0x5')]();class PlayerDevicesRoute{constructor(_0x1613a8,_0x3f11a5,_0x1da281){const _0x3c7ccb=new player_devices_controller_1[(a65_0x2e74('0x6'))](_0x1613a8,_0x3f11a5,_0x1da281);router[a65_0x2e74('0x7')](a65_0x2e74('0x8'),_0x3c7ccb[a65_0x2e74('0x9')]);router['post'](a65_0x2e74('0xa'),_0x3c7ccb['reportStatus']);router['get'](a65_0x2e74('0xb'),_0x3c7ccb[a65_0x2e74('0xc')]);const _0x3bab28=new router_utils_1[(a65_0x2e74('0x6'))](_0x3c7ccb,router,null);return router;}}exports[a65_0x2e74('0x6')]=PlayerDevicesRoute;