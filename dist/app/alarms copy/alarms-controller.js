var a6_0x533e=['hex2Float','body','save','__esModule','defineProperty','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','substr'];(function(_0x1ee5e9,_0x3b4a4a){var _0x2150e6=function(_0x4dc218){while(--_0x4dc218){_0x1ee5e9['push'](_0x1ee5e9['shift']());}};_0x2150e6(++_0x3b4a4a);}(a6_0x533e,0xc9));var a6_0x13f5=function(_0x26911f,_0x42ef24){_0x26911f=_0x26911f-0x0;var _0x3703e8=a6_0x533e[_0x26911f];return _0x3703e8;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x577840){return _0x577840&&_0x577840[a6_0x13f5('0x0')]?_0x577840:{'default':_0x577840};};Object[a6_0x13f5('0x1')](exports,a6_0x13f5('0x0'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a6_0x13f5('0x2')));const responseUtils=require(a6_0x13f5('0x3'));class AlarmsController extends controller_utils_1[a6_0x13f5('0x4')]{constructor(_0xbfb101){super(_0xbfb101,null);this[a6_0x13f5('0x5')]=this[a6_0x13f5('0x5')][a6_0x13f5('0x6')](this);}[a6_0x13f5('0x5')](_0x275748,_0x514836,_0x2a631d){const _0x519897=_0x275748['body']['data'];const _0x40db33=_0x519897['substr'](0x0,0x2);const _0x3fdb14=_0x519897[a6_0x13f5('0x7')](0x2,0x2);const _0x5dca9e=number_utils_1[a6_0x13f5('0x4')][a6_0x13f5('0x8')](_0x519897[a6_0x13f5('0x7')](0x4,0x8),0x10);const _0x1f6d31=number_utils_1[a6_0x13f5('0x4')]['hex2Float'](_0x519897[a6_0x13f5('0x7')](0xc,0x8),0x10);const _0x4d7ea0=_0x519897[a6_0x13f5('0x7')](0x14,0x2);const _0x183f43=_0x519897['substr'](0x16,0x2);_0x275748[a6_0x13f5('0x9')]={'reportType':_0x40db33,'gpsId':_0x3fdb14,'lat':_0x5dca9e,'lon':_0x1f6d31,'speedType':_0x4d7ea0,'speed':_0x183f43,'reported_at':new Date(),'status':0x0};return this[a6_0x13f5('0xa')](_0x275748,_0x514836,_0x2a631d);}}exports[a6_0x13f5('0x4')]=AlarmsController;