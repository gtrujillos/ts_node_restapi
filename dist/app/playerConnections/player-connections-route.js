var a114_0x5738=['post','/reportAlarm','reportAlarm','default','__esModule','./player-connections-controller','Router'];(function(_0x51299b,_0x358df5){var _0x1d1b39=function(_0x4c17d6){while(--_0x4c17d6){_0x51299b['push'](_0x51299b['shift']());}};_0x1d1b39(++_0x358df5);}(a114_0x5738,0xb3));var a114_0x3bfc=function(_0xce44cd,_0x1d5ba1){_0xce44cd=_0xce44cd-0x0;var _0xa7257a=a114_0x5738[_0xce44cd];return _0xa7257a;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5d4271){return _0x5d4271&&_0x5d4271[a114_0x3bfc('0x0')]?_0x5d4271:{'default':_0x5d4271};};Object['defineProperty'](exports,a114_0x3bfc('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require('express'));const player_connections_controller_1=__importDefault(require(a114_0x3bfc('0x1')));const router=express_1['default'][a114_0x3bfc('0x2')]();class PlayerConnectionsRoute{constructor(_0xe8d9da){const _0x373f58=new player_connections_controller_1['default'](_0xe8d9da);router[a114_0x3bfc('0x3')](a114_0x3bfc('0x4'),_0x373f58[a114_0x3bfc('0x5')]);const _0x235e1d=new router_utils_1[(a114_0x3bfc('0x6'))](_0x373f58,router,null);return router;}}exports[a114_0x3bfc('0x6')]=PlayerConnectionsRoute;