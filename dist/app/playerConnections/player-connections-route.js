var a114_0x9178=['default','/reportAlarm','__importDefault','defineProperty','__esModule','../../infrastructure/router-utils','express'];(function(_0x470f68,_0x35113a){var _0x1dc5b3=function(_0x2c387c){while(--_0x2c387c){_0x470f68['push'](_0x470f68['shift']());}};_0x1dc5b3(++_0x35113a);}(a114_0x9178,0xc6));var a114_0x42f8=function(_0x239d26,_0x43211f){_0x239d26=_0x239d26-0x0;var _0x2a9193=a114_0x9178[_0x239d26];return _0x2a9193;};'use strict';var __importDefault=this&&this[a114_0x42f8('0x0')]||function(_0x29d476){return _0x29d476&&_0x29d476['__esModule']?_0x29d476:{'default':_0x29d476};};Object[a114_0x42f8('0x1')](exports,a114_0x42f8('0x2'),{'value':!![]});const router_utils_1=__importDefault(require(a114_0x42f8('0x3')));const express_1=__importDefault(require(a114_0x42f8('0x4')));const player_connections_controller_1=__importDefault(require('./player-connections-controller'));const router=express_1[a114_0x42f8('0x5')]['Router']();class PlayerConnectionsRoute{constructor(_0x206197){const _0xad9f5b=new player_connections_controller_1['default'](_0x206197);router['post'](a114_0x42f8('0x6'),_0xad9f5b['reportAlarm']);const _0x9d2d1b=new router_utils_1[(a114_0x42f8('0x5'))](_0xad9f5b,router,null);return router;}}exports[a114_0x42f8('0x5')]=PlayerConnectionsRoute;