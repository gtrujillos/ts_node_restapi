var a53_0x4472=['post','reportAlarm','__importDefault','__esModule','defineProperty','express','./player-connections-controller','default','Router'];(function(_0x1196c6,_0x44e6fa){var _0x18d0d0=function(_0x300794){while(--_0x300794){_0x1196c6['push'](_0x1196c6['shift']());}};_0x18d0d0(++_0x44e6fa);}(a53_0x4472,0x1a9));var a53_0x29d2=function(_0x14a182,_0x1b6eeb){_0x14a182=_0x14a182-0x0;var _0x3e08c2=a53_0x4472[_0x14a182];return _0x3e08c2;};'use strict';var __importDefault=this&&this[a53_0x29d2('0x0')]||function(_0x19b126){return _0x19b126&&_0x19b126[a53_0x29d2('0x1')]?_0x19b126:{'default':_0x19b126};};Object[a53_0x29d2('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a53_0x29d2('0x3')));const player_connections_controller_1=__importDefault(require(a53_0x29d2('0x4')));const router=express_1[a53_0x29d2('0x5')][a53_0x29d2('0x6')]();class PlayerConnectionsRoute{constructor(_0x45d74c){const _0x2b8726=new player_connections_controller_1['default'](_0x45d74c);router[a53_0x29d2('0x7')]('/reportAlarm',_0x2b8726[a53_0x29d2('0x8')]);const _0x28371b=new router_utils_1[(a53_0x29d2('0x5'))](_0x2b8726,router,null);return router;}}exports[a53_0x29d2('0x5')]=PlayerConnectionsRoute;