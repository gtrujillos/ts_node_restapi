var a59_0x7cf8=['getStatus','__esModule','defineProperty','express','./player-devices-controller','default','post','/register','register','/report_status','reportStatus','/get_status/:user_uuid'];(function(_0x3f3d46,_0x4085b4){var _0x30e0ac=function(_0x1f3fd7){while(--_0x1f3fd7){_0x3f3d46['push'](_0x3f3d46['shift']());}};_0x30e0ac(++_0x4085b4);}(a59_0x7cf8,0x85));var a59_0x42ff=function(_0x2e7145,_0x14ba46){_0x2e7145=_0x2e7145-0x0;var _0x39f397=a59_0x7cf8[_0x2e7145];return _0x39f397;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x154462){return _0x154462&&_0x154462[a59_0x42ff('0x0')]?_0x154462:{'default':_0x154462};};Object[a59_0x42ff('0x1')](exports,a59_0x42ff('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a59_0x42ff('0x2')));const player_devices_controller_1=__importDefault(require(a59_0x42ff('0x3')));const router=express_1[a59_0x42ff('0x4')]['Router']();class PlayerDevicesRoute{constructor(_0x563022,_0x387c8f,_0x5e2236){const _0x28e1f4=new player_devices_controller_1['default'](_0x563022,_0x387c8f,_0x5e2236);router[a59_0x42ff('0x5')](a59_0x42ff('0x6'),_0x28e1f4[a59_0x42ff('0x7')]);router['post'](a59_0x42ff('0x8'),_0x28e1f4[a59_0x42ff('0x9')]);router['get'](a59_0x42ff('0xa'),_0x28e1f4[a59_0x42ff('0xb')]);const _0x51c972=new router_utils_1[(a59_0x42ff('0x4'))](_0x28e1f4,router,null);return router;}}exports[a59_0x42ff('0x4')]=PlayerDevicesRoute;