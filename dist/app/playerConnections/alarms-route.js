var a49_0x2547=['default','post','/reportAlarm','__importDefault','defineProperty','express','./alarms-controller','Router'];(function(_0x59d504,_0x27da6a){var _0x220f5b=function(_0x5ac390){while(--_0x5ac390){_0x59d504['push'](_0x59d504['shift']());}};_0x220f5b(++_0x27da6a);}(a49_0x2547,0x9b));var a49_0x5330=function(_0x12f036,_0x506fce){_0x12f036=_0x12f036-0x0;var _0x113343=a49_0x2547[_0x12f036];return _0x113343;};'use strict';var __importDefault=this&&this[a49_0x5330('0x0')]||function(_0x17b029){return _0x17b029&&_0x17b029['__esModule']?_0x17b029:{'default':_0x17b029};};Object[a49_0x5330('0x1')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a49_0x5330('0x2')));const alarms_controller_1=__importDefault(require(a49_0x5330('0x3')));const router=express_1['default'][a49_0x5330('0x4')]();class AlarmsRoute{constructor(_0x129640){const _0xd221f2=new alarms_controller_1[(a49_0x5330('0x5'))](_0x129640);router[a49_0x5330('0x6')](a49_0x5330('0x7'),_0xd221f2['reportAlarm']);const _0x1cd0a2=new router_utils_1[(a49_0x5330('0x5'))](_0xd221f2,router,null);return router;}}exports['default']=AlarmsRoute;