var a6_0x1fa6=['hex2Float','save','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/response-utils','default','reportAlarm','data','substr'];(function(_0x419440,_0x1df1e0){var _0x3637e4=function(_0x4373c0){while(--_0x4373c0){_0x419440['push'](_0x419440['shift']());}};_0x3637e4(++_0x1df1e0);}(a6_0x1fa6,0x16d));var a6_0x5d94=function(_0x5d2188,_0x5d6254){_0x5d2188=_0x5d2188-0x0;var _0x3af624=a6_0x1fa6[_0x5d2188];return _0x3af624;};'use strict';var __importDefault=this&&this[a6_0x5d94('0x0')]||function(_0x1a8ee0){return _0x1a8ee0&&_0x1a8ee0[a6_0x5d94('0x1')]?_0x1a8ee0:{'default':_0x1a8ee0};};Object[a6_0x5d94('0x2')](exports,a6_0x5d94('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a6_0x5d94('0x3')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a6_0x5d94('0x4'));class AlarmsController extends controller_utils_1[a6_0x5d94('0x5')]{constructor(_0xb84d92){super(_0xb84d92,null);this[a6_0x5d94('0x6')]=this[a6_0x5d94('0x6')]['bind'](this);}[a6_0x5d94('0x6')](_0x5525d4,_0x457a28,_0x1d079d){const _0x3a7445=_0x5525d4['body'][a6_0x5d94('0x7')];const _0x3a21be=_0x3a7445[a6_0x5d94('0x8')](0x0,0x2);const _0x23ab83=_0x3a7445['substr'](0x2,0x2);const _0x3a15fb=number_utils_1[a6_0x5d94('0x5')]['hex2Float'](_0x3a7445[a6_0x5d94('0x8')](0x4,0x8),0x10);const _0x4e82ac=number_utils_1[a6_0x5d94('0x5')][a6_0x5d94('0x9')](_0x3a7445[a6_0x5d94('0x8')](0xc,0x8),0x10);const _0x9d24a4=_0x3a7445[a6_0x5d94('0x8')](0x14,0x2);const _0x129924=_0x3a7445[a6_0x5d94('0x8')](0x16,0x2);_0x5525d4['body']={'reportType':_0x3a21be,'gpsId':_0x23ab83,'lat':_0x3a15fb,'lon':_0x4e82ac,'speedType':_0x9d24a4,'speed':_0x129924,'reported_at':new Date(),'status':0x0};return this[a6_0x5d94('0xa')](_0x5525d4,_0x457a28,_0x1d079d);}}exports[a6_0x5d94('0x5')]=AlarmsController;