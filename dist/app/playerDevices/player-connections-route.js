var a56_0x26dc=['reportAlarm','__esModule','../../infrastructure/router-utils','./player-connections-controller','default','/reportAlarm'];(function(_0x32c96c,_0x107584){var _0x55270d=function(_0x47f45b){while(--_0x47f45b){_0x32c96c['push'](_0x32c96c['shift']());}};_0x55270d(++_0x107584);}(a56_0x26dc,0x1bd));var a56_0x4661=function(_0x2b8d76,_0x1060c4){_0x2b8d76=_0x2b8d76-0x0;var _0x27a8d4=a56_0x26dc[_0x2b8d76];return _0x27a8d4;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x37bd8c){return _0x37bd8c&&_0x37bd8c[a56_0x4661('0x0')]?_0x37bd8c:{'default':_0x37bd8c};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a56_0x4661('0x1')));const express_1=__importDefault(require('express'));const player_connections_controller_1=__importDefault(require(a56_0x4661('0x2')));const router=express_1[a56_0x4661('0x3')]['Router']();class PlayerConnectionsRoute{constructor(_0x1a0e45){const _0x2a6637=new player_connections_controller_1['default'](_0x1a0e45);router['post'](a56_0x4661('0x4'),_0x2a6637[a56_0x4661('0x5')]);const _0x23d0f3=new router_utils_1[(a56_0x4661('0x3'))](_0x2a6637,router,null);return router;}}exports[a56_0x4661('0x3')]=PlayerConnectionsRoute;