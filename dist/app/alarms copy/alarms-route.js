var a8_0x283c=['reportAlarm','default','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','express','./alarms-controller','Router','post'];(function(_0x8ffb13,_0x218ed8){var _0x55b1c3=function(_0x44b98e){while(--_0x44b98e){_0x8ffb13['push'](_0x8ffb13['shift']());}};_0x55b1c3(++_0x218ed8);}(a8_0x283c,0x106));var a8_0x3ff5=function(_0x481822,_0x2f8439){_0x481822=_0x481822-0x0;var _0x1a11bf=a8_0x283c[_0x481822];return _0x1a11bf;};'use strict';var __importDefault=this&&this[a8_0x3ff5('0x0')]||function(_0x509592){return _0x509592&&_0x509592[a8_0x3ff5('0x1')]?_0x509592:{'default':_0x509592};};Object[a8_0x3ff5('0x2')](exports,a8_0x3ff5('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a8_0x3ff5('0x3')));const express_1=__importDefault(require(a8_0x3ff5('0x4')));const alarms_controller_1=__importDefault(require(a8_0x3ff5('0x5')));const router=express_1['default'][a8_0x3ff5('0x6')]();class AlarmsRoute{constructor(_0xc46a5b){const _0x45328b=new alarms_controller_1['default'](_0xc46a5b);router[a8_0x3ff5('0x7')]('/reportAlarm',_0x45328b[a8_0x3ff5('0x8')]);const _0x41a16b=new router_utils_1[(a8_0x3ff5('0x9'))](_0x45328b,router,null);return router;}}exports[a8_0x3ff5('0x9')]=AlarmsRoute;