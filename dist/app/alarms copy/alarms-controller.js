var a6_0x159f=['default','reportAlarm','bind','body','substr','hex2Float','save','__esModule','defineProperty','../../infrastructure/number-utils','../../infrastructure/response-utils'];(function(_0xa9d33b,_0x55ee43){var _0x2b4e76=function(_0x3ba686){while(--_0x3ba686){_0xa9d33b['push'](_0xa9d33b['shift']());}};_0x2b4e76(++_0x55ee43);}(a6_0x159f,0x80));var a6_0x41fc=function(_0x3e2613,_0x1b75af){_0x3e2613=_0x3e2613-0x0;var _0x46769c=a6_0x159f[_0x3e2613];return _0x46769c;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x20cb61){return _0x20cb61&&_0x20cb61[a6_0x41fc('0x0')]?_0x20cb61:{'default':_0x20cb61};};Object[a6_0x41fc('0x1')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a6_0x41fc('0x2')));const responseUtils=require(a6_0x41fc('0x3'));class AlarmsController extends controller_utils_1[a6_0x41fc('0x4')]{constructor(_0x1b5dc0){super(_0x1b5dc0,null);this[a6_0x41fc('0x5')]=this['reportAlarm'][a6_0x41fc('0x6')](this);}[a6_0x41fc('0x5')](_0x427a12,_0xfdbc35,_0x31b4a1){const _0x44487d=_0x427a12[a6_0x41fc('0x7')]['data'];const _0x5db64a=_0x44487d['substr'](0x0,0x2);const _0xcd2c6e=_0x44487d[a6_0x41fc('0x8')](0x2,0x2);const _0x489e3d=number_utils_1['default'][a6_0x41fc('0x9')](_0x44487d['substr'](0x4,0x8),0x10);const _0x3878ba=number_utils_1[a6_0x41fc('0x4')][a6_0x41fc('0x9')](_0x44487d['substr'](0xc,0x8),0x10);const _0x5187bd=_0x44487d[a6_0x41fc('0x8')](0x14,0x2);const _0x428d03=_0x44487d[a6_0x41fc('0x8')](0x16,0x2);_0x427a12['body']={'reportType':_0x5db64a,'gpsId':_0xcd2c6e,'lat':_0x489e3d,'lon':_0x3878ba,'speedType':_0x5187bd,'speed':_0x428d03,'reported_at':new Date(),'status':0x0};return this[a6_0x41fc('0xa')](_0x427a12,_0xfdbc35,_0x31b4a1);}}exports[a6_0x41fc('0x4')]=AlarmsController;