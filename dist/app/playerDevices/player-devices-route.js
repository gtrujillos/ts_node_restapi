var a58_0x992b=['../../infrastructure/router-utils','Router','/register','register','__importDefault','__esModule','defineProperty'];(function(_0x4ed787,_0x23aebf){var _0x24fc5d=function(_0x96e078){while(--_0x96e078){_0x4ed787['push'](_0x4ed787['shift']());}};_0x24fc5d(++_0x23aebf);}(a58_0x992b,0x74));var a58_0x5927=function(_0x22daae,_0x32bd4b){_0x22daae=_0x22daae-0x0;var _0x27388b=a58_0x992b[_0x22daae];return _0x27388b;};'use strict';var __importDefault=this&&this[a58_0x5927('0x0')]||function(_0x2a5b6b){return _0x2a5b6b&&_0x2a5b6b[a58_0x5927('0x1')]?_0x2a5b6b:{'default':_0x2a5b6b};};Object[a58_0x5927('0x2')](exports,a58_0x5927('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a58_0x5927('0x3')));const express_1=__importDefault(require('express'));const player_devices_controller_1=__importDefault(require('./player-devices-controller'));const router=express_1['default'][a58_0x5927('0x4')]();class PlayerDevicesRoute{constructor(_0x84f230){const _0x37f01c=new player_devices_controller_1['default'](_0x84f230);router['post'](a58_0x5927('0x5'),_0x37f01c[a58_0x5927('0x6')]);const _0x203b0e=new router_utils_1['default'](_0x37f01c,router,null);return router;}}exports['default']=PlayerDevicesRoute;