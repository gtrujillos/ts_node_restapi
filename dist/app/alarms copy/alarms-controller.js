var a25_0x550a=['body','save','__importDefault','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','data','substr','hex2Float'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a25_0x550a,0x1e3));var a25_0x13c6=function(_0x23d9b7,_0x20cf74){_0x23d9b7=_0x23d9b7-0x0;var _0x28eb2d=a25_0x550a[_0x23d9b7];return _0x28eb2d;};'use strict';var __importDefault=this&&this[a25_0x13c6('0x0')]||function(_0x702a3){return _0x702a3&&_0x702a3['__esModule']?_0x702a3:{'default':_0x702a3};};Object[a25_0x13c6('0x1')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a25_0x13c6('0x2')));const number_utils_1=__importDefault(require(a25_0x13c6('0x3')));const responseUtils=require(a25_0x13c6('0x4'));class AlarmsController extends controller_utils_1[a25_0x13c6('0x5')]{constructor(_0x16ba89){super(_0x16ba89,null);this[a25_0x13c6('0x6')]=this[a25_0x13c6('0x6')][a25_0x13c6('0x7')](this);}[a25_0x13c6('0x6')](_0x93139f,_0x553c1a,_0x49c4cf){const _0x404e87=_0x93139f['body'][a25_0x13c6('0x8')];const _0x1fc11e=_0x404e87[a25_0x13c6('0x9')](0x0,0x2);const _0x46f887=_0x404e87[a25_0x13c6('0x9')](0x2,0x2);const _0x45ddf0=number_utils_1[a25_0x13c6('0x5')][a25_0x13c6('0xa')](_0x404e87[a25_0x13c6('0x9')](0x4,0x8),0x10);const _0x30c104=number_utils_1[a25_0x13c6('0x5')]['hex2Float'](_0x404e87[a25_0x13c6('0x9')](0xc,0x8),0x10);const _0x5ba83d=_0x404e87[a25_0x13c6('0x9')](0x14,0x2);const _0x51e00a=_0x404e87[a25_0x13c6('0x9')](0x16,0x2);_0x93139f[a25_0x13c6('0xb')]={'reportType':_0x1fc11e,'gpsId':_0x46f887,'lat':_0x45ddf0,'lon':_0x30c104,'speedType':_0x5ba83d,'speed':_0x51e00a,'reported_at':new Date(),'status':0x0};return this[a25_0x13c6('0xc')](_0x93139f,_0x553c1a,_0x49c4cf);}}exports[a25_0x13c6('0x5')]=AlarmsController;