var a46_0x48b2=['./plates-controller','default','Router','/reportPlate','get','reportPlate','__importDefault','defineProperty'];(function(_0x73c419,_0x577d89){var _0x2d3852=function(_0x3cd7e8){while(--_0x3cd7e8){_0x73c419['push'](_0x73c419['shift']());}};_0x2d3852(++_0x577d89);}(a46_0x48b2,0x13e));var a46_0x2fc3=function(_0x49a866,_0x51dfd5){_0x49a866=_0x49a866-0x0;var _0x125b09=a46_0x48b2[_0x49a866];return _0x125b09;};'use strict';var __importDefault=this&&this[a46_0x2fc3('0x0')]||function(_0x69ae36){return _0x69ae36&&_0x69ae36['__esModule']?_0x69ae36:{'default':_0x69ae36};};Object[a46_0x2fc3('0x1')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require('express'));const plates_controller_1=__importDefault(require(a46_0x2fc3('0x2')));const router=express_1[a46_0x2fc3('0x3')][a46_0x2fc3('0x4')]();class PlatesRoute{constructor(_0x6cb502){const _0xb39fc8=new plates_controller_1['default'](_0x6cb502);router['post'](a46_0x2fc3('0x5'),_0xb39fc8['reportPlate']);router[a46_0x2fc3('0x6')]('/reportPlate',_0xb39fc8[a46_0x2fc3('0x7')]);router['all']('/reportPlate',_0xb39fc8['reportPlate']);const _0x89f758=new router_utils_1[(a46_0x2fc3('0x3'))](_0xb39fc8,router,null);return router;}}exports[a46_0x2fc3('0x3')]=PlatesRoute;