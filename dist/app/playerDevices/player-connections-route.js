var a117_0xa6d3=['express','./player-connections-controller','default','Router','/reportAlarm','__importDefault','defineProperty','__esModule','../../infrastructure/router-utils'];(function(_0x417d16,_0x4a5f0f){var _0x2d056f=function(_0x25076e){while(--_0x25076e){_0x417d16['push'](_0x417d16['shift']());}};_0x2d056f(++_0x4a5f0f);}(a117_0xa6d3,0xf8));var a117_0x4071=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a117_0xa6d3[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a117_0x4071('0x0')]||function(_0x1abec2){return _0x1abec2&&_0x1abec2['__esModule']?_0x1abec2:{'default':_0x1abec2};};Object[a117_0x4071('0x1')](exports,a117_0x4071('0x2'),{'value':!![]});const router_utils_1=__importDefault(require(a117_0x4071('0x3')));const express_1=__importDefault(require(a117_0x4071('0x4')));const player_connections_controller_1=__importDefault(require(a117_0x4071('0x5')));const router=express_1[a117_0x4071('0x6')][a117_0x4071('0x7')]();class PlayerConnectionsRoute{constructor(_0x309af9){const _0x15a678=new player_connections_controller_1[(a117_0x4071('0x6'))](_0x309af9);router['post'](a117_0x4071('0x8'),_0x15a678['reportAlarm']);const _0x18c17d=new router_utils_1[(a117_0x4071('0x6'))](_0x15a678,router,null);return router;}}exports[a117_0x4071('0x6')]=PlayerConnectionsRoute;