var a106_0x31fe=['Plate','default','__importDefault','__esModule','../../infrastructure/controller-utils','reportPlate','bind','body','log','infoplate'];(function(_0x4325c4,_0x1bd1c0){var _0x1d36f2=function(_0x5a824a){while(--_0x5a824a){_0x4325c4['push'](_0x4325c4['shift']());}};_0x1d36f2(++_0x1bd1c0);}(a106_0x31fe,0x70));var a106_0x258b=function(_0x22706b,_0x586336){_0x22706b=_0x22706b-0x0;var _0x420ed9=a106_0x31fe[_0x22706b];return _0x420ed9;};'use strict';var __importDefault=this&&this[a106_0x258b('0x0')]||function(_0x1f46bf){return _0x1f46bf&&_0x1f46bf[a106_0x258b('0x1')]?_0x1f46bf:{'default':_0x1f46bf};};Object['defineProperty'](exports,a106_0x258b('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a106_0x258b('0x2')));const responseUtils=require('../../infrastructure/response-utils');class PlatesController extends controller_utils_1['default']{constructor(_0x8e77c){super(_0x8e77c,null);this[a106_0x258b('0x3')]=this[a106_0x258b('0x3')][a106_0x258b('0x4')](this);}['reportPlate'](_0x10583b,_0x51baa8,_0x3b1a40){const _0x3cff22=_0x10583b[a106_0x258b('0x5')];console[a106_0x258b('0x6')](_0x3cff22);_0x10583b['body']={'plate':_0x3cff22[a106_0x258b('0x7')][a106_0x258b('0x8')],'reported_at':new Date()};return this['save'](_0x10583b,_0x51baa8,_0x3b1a40);}}exports[a106_0x258b('0x9')]=PlatesController;