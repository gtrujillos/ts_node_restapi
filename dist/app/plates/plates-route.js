var a47_0x9028=['reportPlate','get','all','/reportPlate','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','./plates-controller','Router','default','post'];(function(_0x58f7fd,_0x2c233d){var _0x23c476=function(_0x302c55){while(--_0x302c55){_0x58f7fd['push'](_0x58f7fd['shift']());}};_0x23c476(++_0x2c233d);}(a47_0x9028,0x100));var a47_0x5871=function(_0x3127b8,_0x125822){_0x3127b8=_0x3127b8-0x0;var _0x2278f3=a47_0x9028[_0x3127b8];return _0x2278f3;};'use strict';var __importDefault=this&&this[a47_0x5871('0x0')]||function(_0x9f924a){return _0x9f924a&&_0x9f924a[a47_0x5871('0x1')]?_0x9f924a:{'default':_0x9f924a};};Object[a47_0x5871('0x2')](exports,a47_0x5871('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a47_0x5871('0x3')));const express_1=__importDefault(require('express'));const plates_controller_1=__importDefault(require(a47_0x5871('0x4')));const router=express_1['default'][a47_0x5871('0x5')]();class PlatesRoute{constructor(_0x219f75){const _0x23c70=new plates_controller_1[(a47_0x5871('0x6'))](_0x219f75);router[a47_0x5871('0x7')]('/reportPlate',_0x23c70[a47_0x5871('0x8')]);router[a47_0x5871('0x9')]('/reportPlate',_0x23c70[a47_0x5871('0x8')]);router[a47_0x5871('0xa')](a47_0x5871('0xb'),_0x23c70['reportPlate']);const _0x19f2af=new router_utils_1['default'](_0x23c70,router,null);return router;}}exports[a47_0x5871('0x6')]=PlatesRoute;