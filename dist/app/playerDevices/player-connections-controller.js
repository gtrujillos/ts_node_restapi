var a53_0x29b7=['default','reportAlarm','body','data','substr','hex2Float','save','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils'];(function(_0x474e91,_0x273910){var _0x50738e=function(_0x5eaef2){while(--_0x5eaef2){_0x474e91['push'](_0x474e91['shift']());}};_0x50738e(++_0x273910);}(a53_0x29b7,0x1b7));var a53_0x4b16=function(_0x40f17f,_0x53e585){_0x40f17f=_0x40f17f-0x0;var _0x3b3208=a53_0x29b7[_0x40f17f];return _0x3b3208;};'use strict';var __importDefault=this&&this[a53_0x4b16('0x0')]||function(_0x5d2a3e){return _0x5d2a3e&&_0x5d2a3e[a53_0x4b16('0x1')]?_0x5d2a3e:{'default':_0x5d2a3e};};Object['defineProperty'](exports,a53_0x4b16('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a53_0x4b16('0x2')));const number_utils_1=__importDefault(require(a53_0x4b16('0x3')));const responseUtils=require(a53_0x4b16('0x4'));class PlayerConnectionsController extends controller_utils_1[a53_0x4b16('0x5')]{constructor(_0x2883b6){super(_0x2883b6,null);this[a53_0x4b16('0x6')]=this[a53_0x4b16('0x6')]['bind'](this);}[a53_0x4b16('0x6')](_0x2634c4,_0x5aa730,_0x2f05d4){const _0x2a9cd0=_0x2634c4[a53_0x4b16('0x7')][a53_0x4b16('0x8')];const _0x54002e=_0x2a9cd0[a53_0x4b16('0x9')](0x0,0x2);const _0x22ce8d=_0x2a9cd0['substr'](0x2,0x2);const _0x2f5edc=number_utils_1[a53_0x4b16('0x5')]['hex2Float'](_0x2a9cd0['substr'](0x4,0x8),0x10);const _0x53d67d=number_utils_1['default'][a53_0x4b16('0xa')](_0x2a9cd0['substr'](0xc,0x8),0x10);const _0x3b3184=_0x2a9cd0[a53_0x4b16('0x9')](0x14,0x2);const _0x5bfae2=_0x2a9cd0[a53_0x4b16('0x9')](0x16,0x2);_0x2634c4[a53_0x4b16('0x7')]={'reportType':_0x54002e,'gpsId':_0x22ce8d,'lat':_0x2f5edc,'lon':_0x53d67d,'speedType':_0x3b3184,'speed':_0x5bfae2,'reported_at':new Date(),'status':0x0};return this[a53_0x4b16('0xb')](_0x2634c4,_0x5aa730,_0x2f05d4);}}exports['default']=PlayerConnectionsController;