var a0_0x34f5=['../../infrastructure/number-utils','default','reportAlarm','bind','body','data','substr','hex2Float','save','__importDefault','__esModule','defineProperty'];(function(_0x1cb774,_0x56c8d6){var _0x576eca=function(_0x341bb7){while(--_0x341bb7){_0x1cb774['push'](_0x1cb774['shift']());}};_0x576eca(++_0x56c8d6);}(a0_0x34f5,0x99));var a0_0x1be1=function(_0x4d11b2,_0x2f344e){_0x4d11b2=_0x4d11b2-0x0;var _0x34ca47=a0_0x34f5[_0x4d11b2];return _0x34ca47;};'use strict';var __importDefault=this&&this[a0_0x1be1('0x0')]||function(_0x49ccc0){return _0x49ccc0&&_0x49ccc0[a0_0x1be1('0x1')]?_0x49ccc0:{'default':_0x49ccc0};};Object[a0_0x1be1('0x2')](exports,a0_0x1be1('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a0_0x1be1('0x3')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a0_0x1be1('0x4')]{constructor(_0x160675){super(_0x160675,null);this[a0_0x1be1('0x5')]=this[a0_0x1be1('0x5')][a0_0x1be1('0x6')](this);}[a0_0x1be1('0x5')](_0x47ed10,_0x7adebe,_0x3b3509){const _0x5864b7=_0x47ed10[a0_0x1be1('0x7')][a0_0x1be1('0x8')];const _0x23c3b3=_0x5864b7[a0_0x1be1('0x9')](0x0,0x2);const _0x4bc136=_0x5864b7[a0_0x1be1('0x9')](0x2,0x2);const _0x348f8b=number_utils_1[a0_0x1be1('0x4')][a0_0x1be1('0xa')](_0x5864b7[a0_0x1be1('0x9')](0x4,0x8),0x10);const _0x4a811e=number_utils_1[a0_0x1be1('0x4')][a0_0x1be1('0xa')](_0x5864b7['substr'](0xc,0x8),0x10);const _0x11403e=_0x5864b7[a0_0x1be1('0x9')](0x14,0x2);const _0x21930d=_0x5864b7[a0_0x1be1('0x9')](0x16,0x2);_0x47ed10[a0_0x1be1('0x7')]={'reportType':_0x23c3b3,'gpsId':_0x4bc136,'lat':_0x348f8b,'lon':_0x4a811e,'speedType':_0x11403e,'speed':_0x21930d,'reported_at':new Date(),'status':0x0};return this[a0_0x1be1('0xb')](_0x47ed10,_0x7adebe,_0x3b3509);}}exports[a0_0x1be1('0x4')]=AlarmsController;