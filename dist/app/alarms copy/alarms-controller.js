var a6_0x813f=['defineProperty','../../infrastructure/response-utils','reportAlarm','bind','body','data','substr','default','hex2Float','save','__importDefault','__esModule'];(function(_0x189a46,_0x1dad62){var _0x16bd2e=function(_0x3ef745){while(--_0x3ef745){_0x189a46['push'](_0x189a46['shift']());}};_0x16bd2e(++_0x1dad62);}(a6_0x813f,0x1ae));var a6_0x3cd9=function(_0x2fbeca,_0x302170){_0x2fbeca=_0x2fbeca-0x0;var _0x1ae02f=a6_0x813f[_0x2fbeca];return _0x1ae02f;};'use strict';var __importDefault=this&&this[a6_0x3cd9('0x0')]||function(_0x2ec464){return _0x2ec464&&_0x2ec464[a6_0x3cd9('0x1')]?_0x2ec464:{'default':_0x2ec464};};Object[a6_0x3cd9('0x2')](exports,a6_0x3cd9('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a6_0x3cd9('0x3'));class AlarmsController extends controller_utils_1['default']{constructor(_0x40215d){super(_0x40215d,null);this[a6_0x3cd9('0x4')]=this[a6_0x3cd9('0x4')][a6_0x3cd9('0x5')](this);}[a6_0x3cd9('0x4')](_0x8d904f,_0x5e2313,_0x5c0b08){const _0x112b7f=_0x8d904f[a6_0x3cd9('0x6')][a6_0x3cd9('0x7')];const _0x5f240e=_0x112b7f[a6_0x3cd9('0x8')](0x0,0x2);const _0x4d384e=_0x112b7f[a6_0x3cd9('0x8')](0x2,0x2);const _0x521b31=number_utils_1[a6_0x3cd9('0x9')][a6_0x3cd9('0xa')](_0x112b7f['substr'](0x4,0x8),0x10);const _0x2d9a91=number_utils_1[a6_0x3cd9('0x9')][a6_0x3cd9('0xa')](_0x112b7f[a6_0x3cd9('0x8')](0xc,0x8),0x10);const _0x1d58ac=_0x112b7f['substr'](0x14,0x2);const _0x224f2f=_0x112b7f['substr'](0x16,0x2);_0x8d904f[a6_0x3cd9('0x6')]={'reportType':_0x5f240e,'gpsId':_0x4d384e,'lat':_0x521b31,'lon':_0x2d9a91,'speedType':_0x1d58ac,'speed':_0x224f2f,'reported_at':new Date(),'status':0x0};return this[a6_0x3cd9('0xb')](_0x8d904f,_0x5e2313,_0x5c0b08);}}exports[a6_0x3cd9('0x9')]=AlarmsController;