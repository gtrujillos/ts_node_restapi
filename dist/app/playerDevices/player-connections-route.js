var a62_0x2a4e=['Router','default','reportAlarm','defineProperty','express','./player-connections-controller'];(function(_0x4cbe00,_0x35d2c7){var _0x46f629=function(_0x4a8102){while(--_0x4a8102){_0x4cbe00['push'](_0x4cbe00['shift']());}};_0x46f629(++_0x35d2c7);}(a62_0x2a4e,0xb7));var a62_0x35d2=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=a62_0x2a4e[_0x2699a9];return _0x5b6c40;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x47babc){return _0x47babc&&_0x47babc['__esModule']?_0x47babc:{'default':_0x47babc};};Object[a62_0x35d2('0x0')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a62_0x35d2('0x1')));const player_connections_controller_1=__importDefault(require(a62_0x35d2('0x2')));const router=express_1['default'][a62_0x35d2('0x3')]();class PlayerConnectionsRoute{constructor(_0x2e64c5){const _0x3284ec=new player_connections_controller_1[(a62_0x35d2('0x4'))](_0x2e64c5);router['post']('/reportAlarm',_0x3284ec[a62_0x35d2('0x5')]);const _0x10c8b8=new router_utils_1[(a62_0x35d2('0x4'))](_0x3284ec,router,null);return router;}}exports[a62_0x35d2('0x4')]=PlayerConnectionsRoute;