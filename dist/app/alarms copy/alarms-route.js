var a27_0x272b=['defineProperty','express','default','post','/reportAlarm','reportAlarm','__esModule'];(function(_0x2dbb4e,_0x51e97a){var _0x2383af=function(_0x172f02){while(--_0x172f02){_0x2dbb4e['push'](_0x2dbb4e['shift']());}};_0x2383af(++_0x51e97a);}(a27_0x272b,0xd1));var a27_0x3280=function(_0x121e72,_0x16af88){_0x121e72=_0x121e72-0x0;var _0x5bce54=a27_0x272b[_0x121e72];return _0x5bce54;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2e22b0){return _0x2e22b0&&_0x2e22b0[a27_0x3280('0x0')]?_0x2e22b0:{'default':_0x2e22b0};};Object[a27_0x3280('0x1')](exports,a27_0x3280('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a27_0x3280('0x2')));const alarms_controller_1=__importDefault(require('./alarms-controller'));const router=express_1[a27_0x3280('0x3')]['Router']();class AlarmsRoute{constructor(_0x298741){const _0x1b9941=new alarms_controller_1[(a27_0x3280('0x3'))](_0x298741);router[a27_0x3280('0x4')](a27_0x3280('0x5'),_0x1b9941[a27_0x3280('0x6')]);const _0x5d41ea=new router_utils_1[(a27_0x3280('0x3'))](_0x1b9941,router,null);return router;}}exports['default']=AlarmsRoute;