var a105_0x1d07=['__esModule','express','default','get','/latest','latest','/latest_by_user'];(function(_0x98a61d,_0x1d1aef){var _0x4525b1=function(_0x389fbf){while(--_0x389fbf){_0x98a61d['push'](_0x98a61d['shift']());}};_0x4525b1(++_0x1d1aef);}(a105_0x1d07,0x13b));var a105_0x2897=function(_0x4b98c9,_0x388f0d){_0x4b98c9=_0x4b98c9-0x0;var _0xcc84=a105_0x1d07[_0x4b98c9];return _0xcc84;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x52715c){return _0x52715c&&_0x52715c['__esModule']?_0x52715c:{'default':_0x52715c};};Object['defineProperty'](exports,a105_0x2897('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a105_0x2897('0x1')));const router=express_1[a105_0x2897('0x2')]['Router']();class UserActivitiesRoute{constructor(_0x4c2b56){router[a105_0x2897('0x3')](a105_0x2897('0x4'),_0x4c2b56[a105_0x2897('0x5')]);router[a105_0x2897('0x3')](a105_0x2897('0x6'),_0x4c2b56['latestByUser']);const _0x19bde1=new router_utils_1[(a105_0x2897('0x2'))](_0x4c2b56,router,null);return router;}}exports['default']=UserActivitiesRoute;