var a47_0x128b=['default','reportAlarm','body','data','substr','hex2Float','save','__esModule','defineProperty','../../infrastructure/number-utils'];(function(_0x515e68,_0x6b54c5){var _0x477058=function(_0x1fd831){while(--_0x1fd831){_0x515e68['push'](_0x515e68['shift']());}};_0x477058(++_0x6b54c5);}(a47_0x128b,0x183));var a47_0x3c85=function(_0x35f84c,_0x4ca31d){_0x35f84c=_0x35f84c-0x0;var _0x3904cb=a47_0x128b[_0x35f84c];return _0x3904cb;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x37993f){return _0x37993f&&_0x37993f[a47_0x3c85('0x0')]?_0x37993f:{'default':_0x37993f};};Object[a47_0x3c85('0x1')](exports,a47_0x3c85('0x0'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a47_0x3c85('0x2')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a47_0x3c85('0x3')]{constructor(_0x51b421){super(_0x51b421,null);this[a47_0x3c85('0x4')]=this[a47_0x3c85('0x4')]['bind'](this);}[a47_0x3c85('0x4')](_0x24ebb4,_0x4ca2cd,_0x121fa7){const _0xd66e4=_0x24ebb4[a47_0x3c85('0x5')][a47_0x3c85('0x6')];const _0x355fbd=_0xd66e4[a47_0x3c85('0x7')](0x0,0x2);const _0xb96eb8=_0xd66e4[a47_0x3c85('0x7')](0x2,0x2);const _0x451332=number_utils_1[a47_0x3c85('0x3')][a47_0x3c85('0x8')](_0xd66e4[a47_0x3c85('0x7')](0x4,0x8),0x10);const _0x26306e=number_utils_1[a47_0x3c85('0x3')][a47_0x3c85('0x8')](_0xd66e4[a47_0x3c85('0x7')](0xc,0x8),0x10);const _0x10031d=_0xd66e4['substr'](0x14,0x2);const _0x29f2e1=_0xd66e4[a47_0x3c85('0x7')](0x16,0x2);_0x24ebb4[a47_0x3c85('0x5')]={'reportType':_0x355fbd,'gpsId':_0xb96eb8,'lat':_0x451332,'lon':_0x26306e,'speedType':_0x10031d,'speed':_0x29f2e1,'reported_at':new Date(),'status':0x0};return this[a47_0x3c85('0x9')](_0x24ebb4,_0x4ca2cd,_0x121fa7);}}exports[a47_0x3c85('0x3')]=AlarmsController;