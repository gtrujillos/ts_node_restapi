var a106_0x3632=['__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/response-utils','default','reportPlate','bind','log','body','Plate'];(function(_0x4c1e7a,_0x41c7a2){var _0x23650a=function(_0x2b6c28){while(--_0x2b6c28){_0x4c1e7a['push'](_0x4c1e7a['shift']());}};_0x23650a(++_0x41c7a2);}(a106_0x3632,0x108));var a106_0x161b=function(_0x2dc689,_0x2c8b35){_0x2dc689=_0x2dc689-0x0;var _0x56d144=a106_0x3632[_0x2dc689];return _0x56d144;};'use strict';var __importDefault=this&&this[a106_0x161b('0x0')]||function(_0x5953b5){return _0x5953b5&&_0x5953b5[a106_0x161b('0x1')]?_0x5953b5:{'default':_0x5953b5};};Object[a106_0x161b('0x2')](exports,a106_0x161b('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a106_0x161b('0x3')));const responseUtils=require(a106_0x161b('0x4'));class PlatesController extends controller_utils_1[a106_0x161b('0x5')]{constructor(_0x4d3529){super(_0x4d3529,null);this[a106_0x161b('0x6')]=this['reportPlate'][a106_0x161b('0x7')](this);}[a106_0x161b('0x6')](_0x838ea5,_0x43bfb8,_0x5793c9){const _0x68ea36=_0x838ea5['body'];console[a106_0x161b('0x8')](_0x68ea36);_0x838ea5[a106_0x161b('0x9')]={'plate':_0x68ea36['infoplate'][a106_0x161b('0xa')],'reported_at':new Date()};return this['save'](_0x838ea5,_0x43bfb8,_0x5793c9);}}exports[a106_0x161b('0x5')]=PlatesController;