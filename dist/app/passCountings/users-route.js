var a40_0x4e81=['__importDefault','__esModule','express','default'];(function(_0x270f60,_0x904f53){var _0x189e6c=function(_0x36f2d3){while(--_0x36f2d3){_0x270f60['push'](_0x270f60['shift']());}};_0x189e6c(++_0x904f53);}(a40_0x4e81,0x160));var a40_0x53e3=function(_0x8824e4,_0x2092a6){_0x8824e4=_0x8824e4-0x0;var _0x16802f=a40_0x4e81[_0x8824e4];return _0x16802f;};'use strict';var __importDefault=this&&this[a40_0x53e3('0x0')]||function(_0x37d7e1){return _0x37d7e1&&_0x37d7e1[a40_0x53e3('0x1')]?_0x37d7e1:{'default':_0x37d7e1};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const users_controller_1=__importDefault(require('./users-controller'));const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a40_0x53e3('0x2')));const router=express_1[a40_0x53e3('0x3')]['Router']();class UserModel{constructor(_0xc67d6e){const _0x273b43=new users_controller_1[(a40_0x53e3('0x3'))](_0xc67d6e);const _0x337aac=new router_utils_1[(a40_0x53e3('0x3'))](_0x273b43,router,null);return router;}}exports[a40_0x53e3('0x3')]=UserModel;