var a8_0x3285=['Router','post','/reportAlarm','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','./alarms-controller','default'];(function(_0x51995c,_0x3fd0ce){var _0x56a2f0=function(_0x10d600){while(--_0x10d600){_0x51995c['push'](_0x51995c['shift']());}};_0x56a2f0(++_0x3fd0ce);}(a8_0x3285,0x1f2));var a8_0x289d=function(_0x565fdb,_0x383efd){_0x565fdb=_0x565fdb-0x0;var _0x574c9f=a8_0x3285[_0x565fdb];return _0x574c9f;};'use strict';var __importDefault=this&&this[a8_0x289d('0x0')]||function(_0x506eb9){return _0x506eb9&&_0x506eb9[a8_0x289d('0x1')]?_0x506eb9:{'default':_0x506eb9};};Object[a8_0x289d('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a8_0x289d('0x3')));const express_1=__importDefault(require('express'));const alarms_controller_1=__importDefault(require(a8_0x289d('0x4')));const router=express_1[a8_0x289d('0x5')][a8_0x289d('0x6')]();class AlarmsRoute{constructor(_0x45bf18){const _0x4647a6=new alarms_controller_1[(a8_0x289d('0x5'))](_0x45bf18);router[a8_0x289d('0x7')](a8_0x289d('0x8'),_0x4647a6['reportAlarm']);const _0x2a1620=new router_utils_1[(a8_0x289d('0x5'))](_0x4647a6,router,null);return router;}}exports[a8_0x289d('0x5')]=AlarmsRoute;