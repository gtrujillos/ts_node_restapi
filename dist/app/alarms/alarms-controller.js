var a0_0x3548=['default','reportAlarm','bind','body','data','substr','hex2Float','save','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils'];(function(_0x3353c0,_0x59988c){var _0x3de2ed=function(_0x471b3b){while(--_0x471b3b){_0x3353c0['push'](_0x3353c0['shift']());}};_0x3de2ed(++_0x59988c);}(a0_0x3548,0xe8));var a0_0x27f0=function(_0x521811,_0x43153e){_0x521811=_0x521811-0x0;var _0x17fa1e=a0_0x3548[_0x521811];return _0x17fa1e;};'use strict';var __importDefault=this&&this[a0_0x27f0('0x0')]||function(_0x34fb16){return _0x34fb16&&_0x34fb16['__esModule']?_0x34fb16:{'default':_0x34fb16};};Object[a0_0x27f0('0x1')](exports,a0_0x27f0('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a0_0x27f0('0x3')));const number_utils_1=__importDefault(require(a0_0x27f0('0x4')));const responseUtils=require(a0_0x27f0('0x5'));class AlarmsController extends controller_utils_1[a0_0x27f0('0x6')]{constructor(_0xfb9719){super(_0xfb9719,null);this[a0_0x27f0('0x7')]=this[a0_0x27f0('0x7')][a0_0x27f0('0x8')](this);}[a0_0x27f0('0x7')](_0x5133b4,_0x5528c1,_0xb1a87b){const _0x202f9d=_0x5133b4[a0_0x27f0('0x9')][a0_0x27f0('0xa')];const _0x4772c7=_0x202f9d['substr'](0x0,0x2);const _0x101945=_0x202f9d[a0_0x27f0('0xb')](0x2,0x2);const _0x8198fa=number_utils_1['default'][a0_0x27f0('0xc')](_0x202f9d[a0_0x27f0('0xb')](0x4,0x8),0x10);const _0xff6aad=number_utils_1[a0_0x27f0('0x6')][a0_0x27f0('0xc')](_0x202f9d[a0_0x27f0('0xb')](0xc,0x8),0x10);const _0x262ad0=_0x202f9d[a0_0x27f0('0xb')](0x14,0x2);const _0x16ac52=_0x202f9d['substr'](0x16,0x2);_0x5133b4['body']={'reportType':_0x4772c7,'gpsId':_0x101945,'lat':_0x8198fa,'lon':_0xff6aad,'speedType':_0x262ad0,'speed':_0x16ac52,'reported_at':new Date(),'status':0x0};return this[a0_0x27f0('0xd')](_0x5133b4,_0x5528c1,_0xb1a87b);}}exports[a0_0x27f0('0x6')]=AlarmsController;