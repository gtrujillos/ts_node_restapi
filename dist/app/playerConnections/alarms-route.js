var a135_0x172d=['post','reportAlarm','__esModule','defineProperty','express','./alarms-controller','default','Router'];(function(_0x5a16bd,_0x79c6f2){var _0x3a8953=function(_0x31e8dc){while(--_0x31e8dc){_0x5a16bd['push'](_0x5a16bd['shift']());}};_0x3a8953(++_0x79c6f2);}(a135_0x172d,0x10a));var a135_0x3b60=function(_0x14bcb3,_0x2e7b9d){_0x14bcb3=_0x14bcb3-0x0;var _0x12018f=a135_0x172d[_0x14bcb3];return _0x12018f;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1b7f04){return _0x1b7f04&&_0x1b7f04[a135_0x3b60('0x0')]?_0x1b7f04:{'default':_0x1b7f04};};Object[a135_0x3b60('0x1')](exports,a135_0x3b60('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a135_0x3b60('0x2')));const alarms_controller_1=__importDefault(require(a135_0x3b60('0x3')));const router=express_1[a135_0x3b60('0x4')][a135_0x3b60('0x5')]();class AlarmsRoute{constructor(_0x3dbdee){const _0x5cb59f=new alarms_controller_1[(a135_0x3b60('0x4'))](_0x3dbdee);router[a135_0x3b60('0x6')]('/reportAlarm',_0x5cb59f[a135_0x3b60('0x7')]);const _0x46c5aa=new router_utils_1['default'](_0x5cb59f,router,null);return router;}}exports[a135_0x3b60('0x4')]=AlarmsRoute;