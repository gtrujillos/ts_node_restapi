var a27_0x5ab5=['default','/reportAlarm','reportAlarm','__importDefault','defineProperty','../../infrastructure/router-utils','express','./alarms-controller'];(function(_0x4bd822,_0x2bd6f7){var _0xb4bdb3=function(_0x1d68f6){while(--_0x1d68f6){_0x4bd822['push'](_0x4bd822['shift']());}};_0xb4bdb3(++_0x2bd6f7);}(a27_0x5ab5,0xe3));var a27_0xb030=function(_0x3b253c,_0x2a810e){_0x3b253c=_0x3b253c-0x0;var _0x4af6c9=a27_0x5ab5[_0x3b253c];return _0x4af6c9;};'use strict';var __importDefault=this&&this[a27_0xb030('0x0')]||function(_0x10e896){return _0x10e896&&_0x10e896['__esModule']?_0x10e896:{'default':_0x10e896};};Object[a27_0xb030('0x1')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a27_0xb030('0x2')));const express_1=__importDefault(require(a27_0xb030('0x3')));const alarms_controller_1=__importDefault(require(a27_0xb030('0x4')));const router=express_1[a27_0xb030('0x5')]['Router']();class AlarmsRoute{constructor(_0x1b3431){const _0x2061b9=new alarms_controller_1[(a27_0xb030('0x5'))](_0x1b3431);router['post'](a27_0xb030('0x6'),_0x2061b9[a27_0xb030('0x7')]);const _0x5b8623=new router_utils_1[(a27_0xb030('0x5'))](_0x2061b9,router,null);return router;}}exports[a27_0xb030('0x5')]=AlarmsRoute;