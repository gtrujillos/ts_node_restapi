var a50_0x3a8e=['./alarms-controller','Router','default','post','/reportAlarm','reportAlarm','__importDefault','defineProperty'];(function(_0x1c839a,_0x32a7fe){var _0x257d59=function(_0x3bcd65){while(--_0x3bcd65){_0x1c839a['push'](_0x1c839a['shift']());}};_0x257d59(++_0x32a7fe);}(a50_0x3a8e,0x8e));var a50_0x5183=function(_0x177057,_0x4e2c01){_0x177057=_0x177057-0x0;var _0x1c3de6=a50_0x3a8e[_0x177057];return _0x1c3de6;};'use strict';var __importDefault=this&&this[a50_0x5183('0x0')]||function(_0x4b1631){return _0x4b1631&&_0x4b1631['__esModule']?_0x4b1631:{'default':_0x4b1631};};Object[a50_0x5183('0x1')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require('express'));const alarms_controller_1=__importDefault(require(a50_0x5183('0x2')));const router=express_1['default'][a50_0x5183('0x3')]();class AlarmsRoute{constructor(_0x497f76){const _0x1acf3c=new alarms_controller_1[(a50_0x5183('0x4'))](_0x497f76);router[a50_0x5183('0x5')](a50_0x5183('0x6'),_0x1acf3c[a50_0x5183('0x7')]);const _0x4eacd9=new router_utils_1[(a50_0x5183('0x4'))](_0x1acf3c,router,null);return router;}}exports['default']=AlarmsRoute;