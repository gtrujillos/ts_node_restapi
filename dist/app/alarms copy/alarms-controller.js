var a25_0x4a42=['__importDefault','__esModule','defineProperty','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','data','substr','hex2Float','body','save'];(function(_0x2128ba,_0x4583ff){var _0x4f9ec8=function(_0x2870ae){while(--_0x2870ae){_0x2128ba['push'](_0x2128ba['shift']());}};_0x4f9ec8(++_0x4583ff);}(a25_0x4a42,0x152));var a25_0x30ba=function(_0x3bdad7,_0x24d0a9){_0x3bdad7=_0x3bdad7-0x0;var _0x49a8a8=a25_0x4a42[_0x3bdad7];return _0x49a8a8;};'use strict';var __importDefault=this&&this[a25_0x30ba('0x0')]||function(_0x3fedac){return _0x3fedac&&_0x3fedac[a25_0x30ba('0x1')]?_0x3fedac:{'default':_0x3fedac};};Object[a25_0x30ba('0x2')](exports,a25_0x30ba('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a25_0x30ba('0x3')));const responseUtils=require(a25_0x30ba('0x4'));class AlarmsController extends controller_utils_1[a25_0x30ba('0x5')]{constructor(_0x10137c){super(_0x10137c,null);this[a25_0x30ba('0x6')]=this[a25_0x30ba('0x6')][a25_0x30ba('0x7')](this);}[a25_0x30ba('0x6')](_0x4c4ec0,_0x50fe9b,_0x170ef4){const _0x42ef73=_0x4c4ec0['body'][a25_0x30ba('0x8')];const _0x1c473f=_0x42ef73[a25_0x30ba('0x9')](0x0,0x2);const _0x30ecc8=_0x42ef73[a25_0x30ba('0x9')](0x2,0x2);const _0x31452c=number_utils_1[a25_0x30ba('0x5')][a25_0x30ba('0xa')](_0x42ef73[a25_0x30ba('0x9')](0x4,0x8),0x10);const _0x1842a1=number_utils_1[a25_0x30ba('0x5')][a25_0x30ba('0xa')](_0x42ef73[a25_0x30ba('0x9')](0xc,0x8),0x10);const _0x1fa4f5=_0x42ef73[a25_0x30ba('0x9')](0x14,0x2);const _0x24ad04=_0x42ef73[a25_0x30ba('0x9')](0x16,0x2);_0x4c4ec0[a25_0x30ba('0xb')]={'reportType':_0x1c473f,'gpsId':_0x30ecc8,'lat':_0x31452c,'lon':_0x1842a1,'speedType':_0x1fa4f5,'speed':_0x24ad04,'reported_at':new Date(),'status':0x0};return this[a25_0x30ba('0xc')](_0x4c4ec0,_0x50fe9b,_0x170ef4);}}exports[a25_0x30ba('0x5')]=AlarmsController;