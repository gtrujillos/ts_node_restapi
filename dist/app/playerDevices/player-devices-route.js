var a59_0x4893=['get','/get_status/:user_uuid','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','express','default','Router','post','/register','reportStatus'];(function(_0x16e4ac,_0x54aac8){var _0x29a920=function(_0x260ee0){while(--_0x260ee0){_0x16e4ac['push'](_0x16e4ac['shift']());}};_0x29a920(++_0x54aac8);}(a59_0x4893,0xda));var a59_0x1002=function(_0x1bfbb6,_0x496476){_0x1bfbb6=_0x1bfbb6-0x0;var _0x166192=a59_0x4893[_0x1bfbb6];return _0x166192;};'use strict';var __importDefault=this&&this[a59_0x1002('0x0')]||function(_0x49c4bb){return _0x49c4bb&&_0x49c4bb[a59_0x1002('0x1')]?_0x49c4bb:{'default':_0x49c4bb};};Object[a59_0x1002('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a59_0x1002('0x3')));const express_1=__importDefault(require(a59_0x1002('0x4')));const player_devices_controller_1=__importDefault(require('./player-devices-controller'));const router=express_1[a59_0x1002('0x5')][a59_0x1002('0x6')]();class PlayerDevicesRoute{constructor(_0x6005b5,_0x538ea6,_0x1b94ea){const _0x4108fe=new player_devices_controller_1[(a59_0x1002('0x5'))](_0x6005b5,_0x538ea6,_0x1b94ea);router[a59_0x1002('0x7')](a59_0x1002('0x8'),_0x4108fe['register']);router['post']('/report_status',_0x4108fe[a59_0x1002('0x9')]);router[a59_0x1002('0xa')](a59_0x1002('0xb'),_0x4108fe['getStatus']);const _0x50de96=new router_utils_1[(a59_0x1002('0x5'))](_0x4108fe,router,null);return router;}}exports[a59_0x1002('0x5')]=PlayerDevicesRoute;