var a0_0x2be1=['__esModule','defineProperty','default','reportAlarm','bind','substr','hex2Float','save','__importDefault'];(function(_0x22ba37,_0x1a04a8){var _0x20b0cc=function(_0x148d9a){while(--_0x148d9a){_0x22ba37['push'](_0x22ba37['shift']());}};_0x20b0cc(++_0x1a04a8);}(a0_0x2be1,0x98));var a0_0x37e3=function(_0x40c7d4,_0x4be420){_0x40c7d4=_0x40c7d4-0x0;var _0x14cad7=a0_0x2be1[_0x40c7d4];return _0x14cad7;};'use strict';var __importDefault=this&&this[a0_0x37e3('0x0')]||function(_0x28ac7d){return _0x28ac7d&&_0x28ac7d[a0_0x37e3('0x1')]?_0x28ac7d:{'default':_0x28ac7d};};Object[a0_0x37e3('0x2')](exports,a0_0x37e3('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a0_0x37e3('0x3')]{constructor(_0x18692a){super(_0x18692a,null);this[a0_0x37e3('0x4')]=this[a0_0x37e3('0x4')][a0_0x37e3('0x5')](this);}['reportAlarm'](_0x189f8d,_0x5a8ca2,_0x25c6e7){const _0x19c6c7=_0x189f8d['body']['data'];const _0x9d18e8=_0x19c6c7[a0_0x37e3('0x6')](0x0,0x2);const _0x52011d=_0x19c6c7[a0_0x37e3('0x6')](0x2,0x2);const _0xbdac30=number_utils_1[a0_0x37e3('0x3')][a0_0x37e3('0x7')](_0x19c6c7[a0_0x37e3('0x6')](0x4,0x8),0x10);const _0x17ea0a=number_utils_1[a0_0x37e3('0x3')][a0_0x37e3('0x7')](_0x19c6c7[a0_0x37e3('0x6')](0xc,0x8),0x10);const _0x31ccbf=_0x19c6c7[a0_0x37e3('0x6')](0x14,0x2);const _0x5b3fa0=_0x19c6c7['substr'](0x16,0x2);_0x189f8d['body']={'reportType':_0x9d18e8,'gpsId':_0x52011d,'lat':_0xbdac30,'lon':_0x17ea0a,'speedType':_0x31ccbf,'speed':_0x5b3fa0,'reported_at':new Date(),'status':0x0};return this[a0_0x37e3('0x8')](_0x189f8d,_0x5a8ca2,_0x25c6e7);}}exports['default']=AlarmsController;