var a0_0x1939=['default','reportAlarm','body','data','substr','hex2Float','save','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils'];(function(_0x2d7c31,_0x598720){var _0x40389f=function(_0x1fce3f){while(--_0x1fce3f){_0x2d7c31['push'](_0x2d7c31['shift']());}};_0x40389f(++_0x598720);}(a0_0x1939,0x1b4));var a0_0x1661=function(_0x5b4abc,_0x158171){_0x5b4abc=_0x5b4abc-0x0;var _0x192b2e=a0_0x1939[_0x5b4abc];return _0x192b2e;};'use strict';var __importDefault=this&&this[a0_0x1661('0x0')]||function(_0x1d82e1){return _0x1d82e1&&_0x1d82e1['__esModule']?_0x1d82e1:{'default':_0x1d82e1};};Object[a0_0x1661('0x1')](exports,a0_0x1661('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a0_0x1661('0x3')));const number_utils_1=__importDefault(require(a0_0x1661('0x4')));const responseUtils=require(a0_0x1661('0x5'));class AlarmsController extends controller_utils_1[a0_0x1661('0x6')]{constructor(_0xc58f84){super(_0xc58f84,null);this[a0_0x1661('0x7')]=this[a0_0x1661('0x7')]['bind'](this);}[a0_0x1661('0x7')](_0x139782,_0x2b6a1b,_0x4006a3){const _0xe6ad6=_0x139782[a0_0x1661('0x8')][a0_0x1661('0x9')];const _0x4b8d56=_0xe6ad6['substr'](0x0,0x2);const _0x866ff=_0xe6ad6[a0_0x1661('0xa')](0x2,0x2);const _0x423752=number_utils_1[a0_0x1661('0x6')][a0_0x1661('0xb')](_0xe6ad6[a0_0x1661('0xa')](0x4,0x8),0x10);const _0x37cf1f=number_utils_1[a0_0x1661('0x6')]['hex2Float'](_0xe6ad6[a0_0x1661('0xa')](0xc,0x8),0x10);const _0x32822e=_0xe6ad6[a0_0x1661('0xa')](0x14,0x2);const _0x5be9d3=_0xe6ad6[a0_0x1661('0xa')](0x16,0x2);_0x139782[a0_0x1661('0x8')]={'reportType':_0x4b8d56,'gpsId':_0x866ff,'lat':_0x423752,'lon':_0x37cf1f,'speedType':_0x32822e,'speed':_0x5be9d3,'reported_at':new Date(),'status':0x0};return this[a0_0x1661('0xc')](_0x139782,_0x2b6a1b,_0x4006a3);}}exports[a0_0x1661('0x6')]=AlarmsController;