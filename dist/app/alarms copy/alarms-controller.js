var a6_0x1410=['data','substr','hex2Float','save','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','default','reportAlarm','bind','body'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a6_0x1410,0x12d));var a6_0x24d1=function(_0x50fc46,_0x4d319e){_0x50fc46=_0x50fc46-0x0;var _0x1e98e2=a6_0x1410[_0x50fc46];return _0x1e98e2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3d374b){return _0x3d374b&&_0x3d374b['__esModule']?_0x3d374b:{'default':_0x3d374b};};Object[a6_0x24d1('0x0')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a6_0x24d1('0x1')));const number_utils_1=__importDefault(require(a6_0x24d1('0x2')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a6_0x24d1('0x3')]{constructor(_0x38091c){super(_0x38091c,null);this[a6_0x24d1('0x4')]=this['reportAlarm'][a6_0x24d1('0x5')](this);}[a6_0x24d1('0x4')](_0x4ae9b1,_0x29ad57,_0x55d1e2){const _0x3d09a0=_0x4ae9b1[a6_0x24d1('0x6')][a6_0x24d1('0x7')];const _0x1392fe=_0x3d09a0[a6_0x24d1('0x8')](0x0,0x2);const _0x1dcaf3=_0x3d09a0[a6_0x24d1('0x8')](0x2,0x2);const _0x2be809=number_utils_1['default'][a6_0x24d1('0x9')](_0x3d09a0[a6_0x24d1('0x8')](0x4,0x8),0x10);const _0x1ac95a=number_utils_1[a6_0x24d1('0x3')][a6_0x24d1('0x9')](_0x3d09a0[a6_0x24d1('0x8')](0xc,0x8),0x10);const _0x276ca8=_0x3d09a0['substr'](0x14,0x2);const _0x11c672=_0x3d09a0[a6_0x24d1('0x8')](0x16,0x2);_0x4ae9b1[a6_0x24d1('0x6')]={'reportType':_0x1392fe,'gpsId':_0x1dcaf3,'lat':_0x2be809,'lon':_0x1ac95a,'speedType':_0x276ca8,'speed':_0x11c672,'reported_at':new Date(),'status':0x0};return this[a6_0x24d1('0xa')](_0x4ae9b1,_0x29ad57,_0x55d1e2);}}exports[a6_0x24d1('0x3')]=AlarmsController;