var a27_0x10fb=['/reportAlarm','reportAlarm','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','default','Router'];(function(_0x31f0f9,_0x661ab0){var _0x9000ad=function(_0x184830){while(--_0x184830){_0x31f0f9['push'](_0x31f0f9['shift']());}};_0x9000ad(++_0x661ab0);}(a27_0x10fb,0xb2));var a27_0xae41=function(_0x52a4f9,_0x387bf9){_0x52a4f9=_0x52a4f9-0x0;var _0x2524a8=a27_0x10fb[_0x52a4f9];return _0x2524a8;};'use strict';var __importDefault=this&&this[a27_0xae41('0x0')]||function(_0xdd133f){return _0xdd133f&&_0xdd133f[a27_0xae41('0x1')]?_0xdd133f:{'default':_0xdd133f};};Object[a27_0xae41('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a27_0xae41('0x3')));const express_1=__importDefault(require('express'));const alarms_controller_1=__importDefault(require('./alarms-controller'));const router=express_1[a27_0xae41('0x4')][a27_0xae41('0x5')]();class AlarmsRoute{constructor(_0x3629aa){const _0x4b657d=new alarms_controller_1['default'](_0x3629aa);router['post'](a27_0xae41('0x6'),_0x4b657d[a27_0xae41('0x7')]);const _0x4eb082=new router_utils_1['default'](_0x4b657d,router,null);return router;}}exports[a27_0xae41('0x4')]=AlarmsRoute;