var a109_0x7fb2=['save','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','data','substr','hex2Float','body'];(function(_0x2fbeca,_0x302170){var _0x1ae02f=function(_0x1066ee){while(--_0x1066ee){_0x2fbeca['push'](_0x2fbeca['shift']());}};_0x1ae02f(++_0x302170);}(a109_0x7fb2,0x146));var a109_0x6b74=function(_0xd693c3,_0xa42ff1){_0xd693c3=_0xd693c3-0x0;var _0x48532f=a109_0x7fb2[_0xd693c3];return _0x48532f;};'use strict';var __importDefault=this&&this[a109_0x6b74('0x0')]||function(_0x38e38e){return _0x38e38e&&_0x38e38e[a109_0x6b74('0x1')]?_0x38e38e:{'default':_0x38e38e};};Object['defineProperty'](exports,a109_0x6b74('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a109_0x6b74('0x2')));const number_utils_1=__importDefault(require(a109_0x6b74('0x3')));const responseUtils=require(a109_0x6b74('0x4'));class AlarmsController extends controller_utils_1[a109_0x6b74('0x5')]{constructor(_0x50d238){super(_0x50d238,null);this[a109_0x6b74('0x6')]=this[a109_0x6b74('0x6')][a109_0x6b74('0x7')](this);}['reportAlarm'](_0x196261,_0x199daa,_0x5ee720){const _0xf8c6a7=_0x196261['body'][a109_0x6b74('0x8')];const _0x4c6634=_0xf8c6a7[a109_0x6b74('0x9')](0x0,0x2);const _0x5e5e86=_0xf8c6a7[a109_0x6b74('0x9')](0x2,0x2);const _0x22d66=number_utils_1[a109_0x6b74('0x5')][a109_0x6b74('0xa')](_0xf8c6a7['substr'](0x4,0x8),0x10);const _0x5ccf2d=number_utils_1[a109_0x6b74('0x5')]['hex2Float'](_0xf8c6a7[a109_0x6b74('0x9')](0xc,0x8),0x10);const _0x11859c=_0xf8c6a7[a109_0x6b74('0x9')](0x14,0x2);const _0x14b4d1=_0xf8c6a7['substr'](0x16,0x2);_0x196261[a109_0x6b74('0xb')]={'reportType':_0x4c6634,'gpsId':_0x5e5e86,'lat':_0x22d66,'lon':_0x5ccf2d,'speedType':_0x11859c,'speed':_0x14b4d1,'reported_at':new Date(),'status':0x0};return this[a109_0x6b74('0xc')](_0x196261,_0x199daa,_0x5ee720);}}exports[a109_0x6b74('0x5')]=AlarmsController;