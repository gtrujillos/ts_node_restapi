var a0_0x3953=['save','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','default','reportAlarm','bind','body','substr','hex2Float'];(function(_0x31a5e1,_0x154e93){var _0x5aaa7c=function(_0x567926){while(--_0x567926){_0x31a5e1['push'](_0x31a5e1['shift']());}};_0x5aaa7c(++_0x154e93);}(a0_0x3953,0xe8));var a0_0x9530=function(_0x1c5e55,_0xb7a3e6){_0x1c5e55=_0x1c5e55-0x0;var _0x406857=a0_0x3953[_0x1c5e55];return _0x406857;};'use strict';var __importDefault=this&&this[a0_0x9530('0x0')]||function(_0x7d701){return _0x7d701&&_0x7d701[a0_0x9530('0x1')]?_0x7d701:{'default':_0x7d701};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a0_0x9530('0x2')));const number_utils_1=__importDefault(require(a0_0x9530('0x3')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a0_0x9530('0x4')]{constructor(_0x4b73f9){super(_0x4b73f9,null);this[a0_0x9530('0x5')]=this[a0_0x9530('0x5')][a0_0x9530('0x6')](this);}[a0_0x9530('0x5')](_0x35c59b,_0x16cd1e,_0x3ad4ef){const _0x4e2bc3=_0x35c59b[a0_0x9530('0x7')]['data'];const _0x546a33=_0x4e2bc3['substr'](0x0,0x2);const _0x289d66=_0x4e2bc3[a0_0x9530('0x8')](0x2,0x2);const _0xc8371d=number_utils_1['default'][a0_0x9530('0x9')](_0x4e2bc3[a0_0x9530('0x8')](0x4,0x8),0x10);const _0x22bdc5=number_utils_1[a0_0x9530('0x4')][a0_0x9530('0x9')](_0x4e2bc3[a0_0x9530('0x8')](0xc,0x8),0x10);const _0xecd90b=_0x4e2bc3[a0_0x9530('0x8')](0x14,0x2);const _0x1f7c33=_0x4e2bc3['substr'](0x16,0x2);_0x35c59b['body']={'reportType':_0x546a33,'gpsId':_0x289d66,'lat':_0xc8371d,'lon':_0x22bdc5,'speedType':_0xecd90b,'speed':_0x1f7c33,'reported_at':new Date(),'status':0x0};return this[a0_0x9530('0xa')](_0x35c59b,_0x16cd1e,_0x3ad4ef);}}exports[a0_0x9530('0x4')]=AlarmsController;