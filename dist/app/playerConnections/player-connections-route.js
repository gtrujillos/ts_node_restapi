var a53_0x24cd=['__esModule','defineProperty','../../infrastructure/router-utils','express','./player-connections-controller','default','Router','post','/reportAlarm','__importDefault'];(function(_0x1f95e1,_0x1f1b14){var _0x28a342=function(_0x4a3249){while(--_0x4a3249){_0x1f95e1['push'](_0x1f95e1['shift']());}};_0x28a342(++_0x1f1b14);}(a53_0x24cd,0x171));var a53_0x5b2d=function(_0x432349,_0xbacc4e){_0x432349=_0x432349-0x0;var _0x3e30de=a53_0x24cd[_0x432349];return _0x3e30de;};'use strict';var __importDefault=this&&this[a53_0x5b2d('0x0')]||function(_0x535e00){return _0x535e00&&_0x535e00[a53_0x5b2d('0x1')]?_0x535e00:{'default':_0x535e00};};Object[a53_0x5b2d('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a53_0x5b2d('0x3')));const express_1=__importDefault(require(a53_0x5b2d('0x4')));const player_connections_controller_1=__importDefault(require(a53_0x5b2d('0x5')));const router=express_1[a53_0x5b2d('0x6')][a53_0x5b2d('0x7')]();class PlayerConnectionsRoute{constructor(_0x5ee97a){const _0x459307=new player_connections_controller_1[(a53_0x5b2d('0x6'))](_0x5ee97a);router[a53_0x5b2d('0x8')](a53_0x5b2d('0x9'),_0x459307['reportAlarm']);const _0x2a486e=new router_utils_1['default'](_0x459307,router,null);return router;}}exports[a53_0x5b2d('0x6')]=PlayerConnectionsRoute;