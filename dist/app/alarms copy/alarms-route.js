var a8_0x4840=['express','./alarms-controller','default','Router','post','reportAlarm','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils'];(function(_0x408c70,_0x47d5a6){var _0x4c03aa=function(_0x1f4bec){while(--_0x1f4bec){_0x408c70['push'](_0x408c70['shift']());}};_0x4c03aa(++_0x47d5a6);}(a8_0x4840,0x100));var a8_0x119a=function(_0x167e79,_0x293ed0){_0x167e79=_0x167e79-0x0;var _0x20ec18=a8_0x4840[_0x167e79];return _0x20ec18;};'use strict';var __importDefault=this&&this[a8_0x119a('0x0')]||function(_0x3e0fbd){return _0x3e0fbd&&_0x3e0fbd[a8_0x119a('0x1')]?_0x3e0fbd:{'default':_0x3e0fbd};};Object[a8_0x119a('0x2')](exports,a8_0x119a('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a8_0x119a('0x3')));const express_1=__importDefault(require(a8_0x119a('0x4')));const alarms_controller_1=__importDefault(require(a8_0x119a('0x5')));const router=express_1[a8_0x119a('0x6')][a8_0x119a('0x7')]();class AlarmsRoute{constructor(_0x512c9f){const _0x116bab=new alarms_controller_1[(a8_0x119a('0x6'))](_0x512c9f);router[a8_0x119a('0x8')]('/reportAlarm',_0x116bab[a8_0x119a('0x9')]);const _0x2e3fb4=new router_utils_1[(a8_0x119a('0x6'))](_0x116bab,router,null);return router;}}exports['default']=AlarmsRoute;