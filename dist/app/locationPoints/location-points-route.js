var a31_0x2ea4=['default','get','/find_last','__importDefault','__esModule'];(function(_0xb73647,_0x380461){var _0x5c3ee2=function(_0x5a8d9b){while(--_0x5a8d9b){_0xb73647['push'](_0xb73647['shift']());}};_0x5c3ee2(++_0x380461);}(a31_0x2ea4,0x13e));var a31_0xc733=function(_0x31a1d2,_0x4a1a57){_0x31a1d2=_0x31a1d2-0x0;var _0x439dad=a31_0x2ea4[_0x31a1d2];return _0x439dad;};'use strict';var __importDefault=this&&this[a31_0xc733('0x0')]||function(_0x25374f){return _0x25374f&&_0x25374f[a31_0xc733('0x1')]?_0x25374f:{'default':_0x25374f};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const location_points_controller_1=__importDefault(require('./location-points-controller'));const express_1=__importDefault(require('express'));const router=express_1[a31_0xc733('0x2')]['Router']();class LocationPointsRoute{constructor(_0x4abd48){const _0x2de344=new location_points_controller_1['default'](_0x4abd48);router[a31_0xc733('0x3')](a31_0xc733('0x4'),_0x2de344['findLast']);'';return router;}}exports['default']=LocationPointsRoute;