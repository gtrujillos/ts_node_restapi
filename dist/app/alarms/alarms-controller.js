var a0_0x54e3=['default','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','reportAlarm','bind','body','data','substr','hex2Float'];(function(_0x2a362c,_0x25c50c){var _0x3595a6=function(_0x1a22de){while(--_0x1a22de){_0x2a362c['push'](_0x2a362c['shift']());}};_0x3595a6(++_0x25c50c);}(a0_0x54e3,0x1ae));var a0_0x2ca2=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a0_0x54e3[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a0_0x2ca2('0x0')]||function(_0x769dea){return _0x769dea&&_0x769dea[a0_0x2ca2('0x1')]?_0x769dea:{'default':_0x769dea};};Object['defineProperty'](exports,a0_0x2ca2('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a0_0x2ca2('0x2')));const number_utils_1=__importDefault(require(a0_0x2ca2('0x3')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1['default']{constructor(_0xa6cd4a){super(_0xa6cd4a,null);this[a0_0x2ca2('0x4')]=this['reportAlarm'][a0_0x2ca2('0x5')](this);}[a0_0x2ca2('0x4')](_0x4e2508,_0x1de4e3,_0x9a2eca){const _0x490839=_0x4e2508[a0_0x2ca2('0x6')][a0_0x2ca2('0x7')];const _0x27ded2=_0x490839[a0_0x2ca2('0x8')](0x0,0x2);const _0x4338d8=_0x490839[a0_0x2ca2('0x8')](0x2,0x2);const _0x5bde34=number_utils_1['default'][a0_0x2ca2('0x9')](_0x490839['substr'](0x4,0x8),0x10);const _0x4b6d9b=number_utils_1[a0_0x2ca2('0xa')][a0_0x2ca2('0x9')](_0x490839[a0_0x2ca2('0x8')](0xc,0x8),0x10);const _0x3829f4=_0x490839['substr'](0x14,0x2);const _0x48233d=_0x490839['substr'](0x16,0x2);_0x4e2508[a0_0x2ca2('0x6')]={'reportType':_0x27ded2,'gpsId':_0x4338d8,'lat':_0x5bde34,'lon':_0x4b6d9b,'speedType':_0x3829f4,'speed':_0x48233d,'reported_at':new Date(),'status':0x0};return this['save'](_0x4e2508,_0x1de4e3,_0x9a2eca);}}exports[a0_0x2ca2('0xa')]=AlarmsController;