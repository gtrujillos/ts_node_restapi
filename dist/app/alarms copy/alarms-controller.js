var a6_0x39a2=['save','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/response-utils','default','reportAlarm','bind','body','data','substr','hex2Float'];(function(_0x96e879,_0x4823ee){var _0x3a8d61=function(_0x58a71f){while(--_0x58a71f){_0x96e879['push'](_0x96e879['shift']());}};_0x3a8d61(++_0x4823ee);}(a6_0x39a2,0xfd));var a6_0x4df7=function(_0xa1462f,_0x19815c){_0xa1462f=_0xa1462f-0x0;var _0x2da8ef=a6_0x39a2[_0xa1462f];return _0x2da8ef;};'use strict';var __importDefault=this&&this[a6_0x4df7('0x0')]||function(_0x985376){return _0x985376&&_0x985376[a6_0x4df7('0x1')]?_0x985376:{'default':_0x985376};};Object['defineProperty'](exports,a6_0x4df7('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a6_0x4df7('0x2')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a6_0x4df7('0x3'));class AlarmsController extends controller_utils_1[a6_0x4df7('0x4')]{constructor(_0x49d687){super(_0x49d687,null);this['reportAlarm']=this[a6_0x4df7('0x5')][a6_0x4df7('0x6')](this);}[a6_0x4df7('0x5')](_0x37c2c5,_0x33e7c5,_0x37ed5c){const _0x5c2b9e=_0x37c2c5[a6_0x4df7('0x7')][a6_0x4df7('0x8')];const _0x27b260=_0x5c2b9e[a6_0x4df7('0x9')](0x0,0x2);const _0x481ee0=_0x5c2b9e[a6_0x4df7('0x9')](0x2,0x2);const _0x544e94=number_utils_1[a6_0x4df7('0x4')][a6_0x4df7('0xa')](_0x5c2b9e[a6_0x4df7('0x9')](0x4,0x8),0x10);const _0x5af246=number_utils_1[a6_0x4df7('0x4')]['hex2Float'](_0x5c2b9e[a6_0x4df7('0x9')](0xc,0x8),0x10);const _0x25423f=_0x5c2b9e[a6_0x4df7('0x9')](0x14,0x2);const _0x365a0b=_0x5c2b9e[a6_0x4df7('0x9')](0x16,0x2);_0x37c2c5[a6_0x4df7('0x7')]={'reportType':_0x27b260,'gpsId':_0x481ee0,'lat':_0x544e94,'lon':_0x5af246,'speedType':_0x25423f,'speed':_0x365a0b,'reported_at':new Date(),'status':0x0};return this[a6_0x4df7('0xb')](_0x37c2c5,_0x33e7c5,_0x37ed5c);}}exports[a6_0x4df7('0x4')]=AlarmsController;