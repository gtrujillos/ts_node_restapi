var a48_0xc8e7=['default','reportAlarm','bind','data','substr','hex2Float','save','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a48_0xc8e7,0x129));var a48_0x4d90=function(_0xb67384,_0x27295a){_0xb67384=_0xb67384-0x0;var _0x156d7c=a48_0xc8e7[_0xb67384];return _0x156d7c;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x6171cd){return _0x6171cd&&_0x6171cd[a48_0x4d90('0x0')]?_0x6171cd:{'default':_0x6171cd};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a48_0x4d90('0x1')));const number_utils_1=__importDefault(require(a48_0x4d90('0x2')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a48_0x4d90('0x3')]{constructor(_0x34c2be){super(_0x34c2be,null);this[a48_0x4d90('0x4')]=this[a48_0x4d90('0x4')][a48_0x4d90('0x5')](this);}[a48_0x4d90('0x4')](_0x2fcbe9,_0x4b6cb0,_0x4f4393){const _0x5986d3=_0x2fcbe9['body'][a48_0x4d90('0x6')];const _0x538440=_0x5986d3[a48_0x4d90('0x7')](0x0,0x2);const _0x3328db=_0x5986d3[a48_0x4d90('0x7')](0x2,0x2);const _0x225544=number_utils_1[a48_0x4d90('0x3')]['hex2Float'](_0x5986d3[a48_0x4d90('0x7')](0x4,0x8),0x10);const _0x4fdd70=number_utils_1[a48_0x4d90('0x3')][a48_0x4d90('0x8')](_0x5986d3[a48_0x4d90('0x7')](0xc,0x8),0x10);const _0x297eac=_0x5986d3[a48_0x4d90('0x7')](0x14,0x2);const _0x36853d=_0x5986d3[a48_0x4d90('0x7')](0x16,0x2);_0x2fcbe9['body']={'reportType':_0x538440,'gpsId':_0x3328db,'lat':_0x225544,'lon':_0x4fdd70,'speedType':_0x297eac,'speed':_0x36853d,'reported_at':new Date(),'status':0x0};return this[a48_0x4d90('0x9')](_0x2fcbe9,_0x4b6cb0,_0x4f4393);}}exports[a48_0x4d90('0x3')]=AlarmsController;