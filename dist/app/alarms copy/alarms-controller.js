var a25_0x4ebe=['../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','body','substr','hex2Float','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils'];(function(_0x2ed326,_0x184a45){var _0x43c1b8=function(_0x30c6bb){while(--_0x30c6bb){_0x2ed326['push'](_0x2ed326['shift']());}};_0x43c1b8(++_0x184a45);}(a25_0x4ebe,0x158));var a25_0x506c=function(_0x3354ee,_0x84718b){_0x3354ee=_0x3354ee-0x0;var _0x1a89fb=a25_0x4ebe[_0x3354ee];return _0x1a89fb;};'use strict';var __importDefault=this&&this[a25_0x506c('0x0')]||function(_0x2e6186){return _0x2e6186&&_0x2e6186['__esModule']?_0x2e6186:{'default':_0x2e6186};};Object[a25_0x506c('0x1')](exports,a25_0x506c('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a25_0x506c('0x3')));const number_utils_1=__importDefault(require(a25_0x506c('0x4')));const responseUtils=require(a25_0x506c('0x5'));class AlarmsController extends controller_utils_1[a25_0x506c('0x6')]{constructor(_0x56d8a3){super(_0x56d8a3,null);this[a25_0x506c('0x7')]=this[a25_0x506c('0x7')][a25_0x506c('0x8')](this);}['reportAlarm'](_0x42c214,_0x51cf3a,_0x2b6c52){const _0x146076=_0x42c214[a25_0x506c('0x9')]['data'];const _0x1bf202=_0x146076[a25_0x506c('0xa')](0x0,0x2);const _0x26dd4f=_0x146076['substr'](0x2,0x2);const _0xa51fdb=number_utils_1[a25_0x506c('0x6')][a25_0x506c('0xb')](_0x146076[a25_0x506c('0xa')](0x4,0x8),0x10);const _0x5b5a50=number_utils_1[a25_0x506c('0x6')]['hex2Float'](_0x146076[a25_0x506c('0xa')](0xc,0x8),0x10);const _0x23ba5b=_0x146076[a25_0x506c('0xa')](0x14,0x2);const _0x1d1821=_0x146076['substr'](0x16,0x2);_0x42c214[a25_0x506c('0x9')]={'reportType':_0x1bf202,'gpsId':_0x26dd4f,'lat':_0xa51fdb,'lon':_0x5b5a50,'speedType':_0x23ba5b,'speed':_0x1d1821,'reported_at':new Date(),'status':0x0};return this['save'](_0x42c214,_0x51cf3a,_0x2b6c52);}}exports[a25_0x506c('0x6')]=AlarmsController;