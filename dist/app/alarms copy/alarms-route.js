var a27_0x1469=['reportAlarm','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','express','default','Router','/reportAlarm'];(function(_0x2eea0c,_0x610cdf){var _0x5db268=function(_0x4e2d29){while(--_0x4e2d29){_0x2eea0c['push'](_0x2eea0c['shift']());}};_0x5db268(++_0x610cdf);}(a27_0x1469,0xe2));var a27_0x4cf0=function(_0x165755,_0x6f9467){_0x165755=_0x165755-0x0;var _0x6d6e3b=a27_0x1469[_0x165755];return _0x6d6e3b;};'use strict';var __importDefault=this&&this[a27_0x4cf0('0x0')]||function(_0x3733ca){return _0x3733ca&&_0x3733ca[a27_0x4cf0('0x1')]?_0x3733ca:{'default':_0x3733ca};};Object[a27_0x4cf0('0x2')](exports,a27_0x4cf0('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a27_0x4cf0('0x3')));const express_1=__importDefault(require(a27_0x4cf0('0x4')));const alarms_controller_1=__importDefault(require('./alarms-controller'));const router=express_1[a27_0x4cf0('0x5')][a27_0x4cf0('0x6')]();class AlarmsRoute{constructor(_0x4023e8){const _0x4907d7=new alarms_controller_1[(a27_0x4cf0('0x5'))](_0x4023e8);router['post'](a27_0x4cf0('0x7'),_0x4907d7[a27_0x4cf0('0x8')]);const _0x5a5b80=new router_utils_1['default'](_0x4907d7,router,null);return router;}}exports[a27_0x4cf0('0x5')]=AlarmsRoute;