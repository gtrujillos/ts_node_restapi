var a2_0x2e0a=['Router','default','post','reportAlarm','__importDefault','__esModule','express','./alarms-controller'];(function(_0x14dec8,_0x35f0ed){var _0x32f9be=function(_0x86cce7){while(--_0x86cce7){_0x14dec8['push'](_0x14dec8['shift']());}};_0x32f9be(++_0x35f0ed);}(a2_0x2e0a,0xbc));var a2_0x3093=function(_0x51ee33,_0x19b0d0){_0x51ee33=_0x51ee33-0x0;var _0x52d95c=a2_0x2e0a[_0x51ee33];return _0x52d95c;};'use strict';var __importDefault=this&&this[a2_0x3093('0x0')]||function(_0x2f43f5){return _0x2f43f5&&_0x2f43f5['__esModule']?_0x2f43f5:{'default':_0x2f43f5};};Object['defineProperty'](exports,a2_0x3093('0x1'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a2_0x3093('0x2')));const alarms_controller_1=__importDefault(require(a2_0x3093('0x3')));const router=express_1['default'][a2_0x3093('0x4')]();class AlarmsRoute{constructor(_0x5628d9){const _0x52a31b=new alarms_controller_1[(a2_0x3093('0x5'))](_0x5628d9);router[a2_0x3093('0x6')]('/reportAlarm',_0x52a31b[a2_0x3093('0x7')]);const _0x52f6d5=new router_utils_1[(a2_0x3093('0x5'))](_0x52a31b,router,null);return router;}}exports[a2_0x3093('0x5')]=AlarmsRoute;