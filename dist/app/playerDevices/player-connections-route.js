var a117_0x4fcb=['__importDefault','__esModule','../../infrastructure/router-utils','express','./player-connections-controller','default','Router','post','/reportAlarm'];(function(_0xfd485f,_0x7b36ae){var _0x332f5a=function(_0x2a1958){while(--_0x2a1958){_0xfd485f['push'](_0xfd485f['shift']());}};_0x332f5a(++_0x7b36ae);}(a117_0x4fcb,0xb4));var a117_0x1a0d=function(_0x53d498,_0xd49436){_0x53d498=_0x53d498-0x0;var _0x136d4f=a117_0x4fcb[_0x53d498];return _0x136d4f;};'use strict';var __importDefault=this&&this[a117_0x1a0d('0x0')]||function(_0x3f4068){return _0x3f4068&&_0x3f4068[a117_0x1a0d('0x1')]?_0x3f4068:{'default':_0x3f4068};};Object['defineProperty'](exports,a117_0x1a0d('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a117_0x1a0d('0x2')));const express_1=__importDefault(require(a117_0x1a0d('0x3')));const player_connections_controller_1=__importDefault(require(a117_0x1a0d('0x4')));const router=express_1[a117_0x1a0d('0x5')][a117_0x1a0d('0x6')]();class PlayerConnectionsRoute{constructor(_0x37bc0f){const _0x17611e=new player_connections_controller_1[(a117_0x1a0d('0x5'))](_0x37bc0f);router[a117_0x1a0d('0x7')](a117_0x1a0d('0x8'),_0x17611e['reportAlarm']);const _0x2bbb20=new router_utils_1['default'](_0x17611e,router,null);return router;}}exports[a117_0x1a0d('0x5')]=PlayerConnectionsRoute;