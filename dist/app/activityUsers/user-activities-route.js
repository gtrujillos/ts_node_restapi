var a35_0x103f=['Router','/latest','latest','get','/latest_by_user','default','__importDefault','express'];(function(_0x222b23,_0x36eb5f){var _0x288c07=function(_0x4c5d53){while(--_0x4c5d53){_0x222b23['push'](_0x222b23['shift']());}};_0x288c07(++_0x36eb5f);}(a35_0x103f,0x96));var a35_0x2664=function(_0x356b7e,_0x2c035e){_0x356b7e=_0x356b7e-0x0;var _0x1c4ead=a35_0x103f[_0x356b7e];return _0x1c4ead;};'use strict';var __importDefault=this&&this[a35_0x2664('0x0')]||function(_0x5d698a){return _0x5d698a&&_0x5d698a['__esModule']?_0x5d698a:{'default':_0x5d698a};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a35_0x2664('0x1')));const router=express_1['default'][a35_0x2664('0x2')]();class UserActivitiesRoute{constructor(_0x383614){router['get'](a35_0x2664('0x3'),_0x383614[a35_0x2664('0x4')]);router[a35_0x2664('0x5')](a35_0x2664('0x6'),_0x383614['latestByUser']);const _0x5f13e2=new router_utils_1['default'](_0x383614,router,null);return router;}}exports[a35_0x2664('0x7')]=UserActivitiesRoute;