var a2_0x1347=['__importDefault','__esModule','express','./alarms-controller','default','Router','post','/reportAlarm'];(function(_0x4a4955,_0x54a0dc){var _0x3a6eb0=function(_0x7b8fd9){while(--_0x7b8fd9){_0x4a4955['push'](_0x4a4955['shift']());}};_0x3a6eb0(++_0x54a0dc);}(a2_0x1347,0x130));var a2_0x383b=function(_0x387adc,_0xc5f110){_0x387adc=_0x387adc-0x0;var _0x3f2af1=a2_0x1347[_0x387adc];return _0x3f2af1;};'use strict';var __importDefault=this&&this[a2_0x383b('0x0')]||function(_0x16b88d){return _0x16b88d&&_0x16b88d[a2_0x383b('0x1')]?_0x16b88d:{'default':_0x16b88d};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a2_0x383b('0x2')));const alarms_controller_1=__importDefault(require(a2_0x383b('0x3')));const router=express_1[a2_0x383b('0x4')][a2_0x383b('0x5')]();class AlarmsRoute{constructor(_0x3d1145){const _0x10bbcf=new alarms_controller_1[(a2_0x383b('0x4'))](_0x3d1145);router[a2_0x383b('0x6')](a2_0x383b('0x7'),_0x10bbcf['reportAlarm']);const _0x4f8026=new router_utils_1[(a2_0x383b('0x4'))](_0x10bbcf,router,null);return router;}}exports['default']=AlarmsRoute;