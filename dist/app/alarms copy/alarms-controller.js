var a6_0x2065=['../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','reportAlarm','bind','body','data','substr','default','hex2Float','save','__importDefault','__esModule','defineProperty'];(function(_0x26f1ab,_0x494965){var _0x1d1987=function(_0x320caa){while(--_0x320caa){_0x26f1ab['push'](_0x26f1ab['shift']());}};_0x1d1987(++_0x494965);}(a6_0x2065,0xcf));var a6_0x5695=function(_0x41b5ff,_0xff9ae8){_0x41b5ff=_0x41b5ff-0x0;var _0x3e8ff1=a6_0x2065[_0x41b5ff];return _0x3e8ff1;};'use strict';var __importDefault=this&&this[a6_0x5695('0x0')]||function(_0x3b1cee){return _0x3b1cee&&_0x3b1cee[a6_0x5695('0x1')]?_0x3b1cee:{'default':_0x3b1cee};};Object[a6_0x5695('0x2')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a6_0x5695('0x3')));const number_utils_1=__importDefault(require(a6_0x5695('0x4')));const responseUtils=require(a6_0x5695('0x5'));class AlarmsController extends controller_utils_1['default']{constructor(_0x1f6eed){super(_0x1f6eed,null);this[a6_0x5695('0x6')]=this['reportAlarm'][a6_0x5695('0x7')](this);}['reportAlarm'](_0x464dec,_0x2b3ac1,_0x4cb601){const _0x29c63e=_0x464dec[a6_0x5695('0x8')][a6_0x5695('0x9')];const _0x3039dd=_0x29c63e[a6_0x5695('0xa')](0x0,0x2);const _0x579b04=_0x29c63e[a6_0x5695('0xa')](0x2,0x2);const _0x547a0f=number_utils_1[a6_0x5695('0xb')][a6_0x5695('0xc')](_0x29c63e[a6_0x5695('0xa')](0x4,0x8),0x10);const _0x469393=number_utils_1['default'][a6_0x5695('0xc')](_0x29c63e[a6_0x5695('0xa')](0xc,0x8),0x10);const _0x434ab5=_0x29c63e['substr'](0x14,0x2);const _0x1e7242=_0x29c63e['substr'](0x16,0x2);_0x464dec[a6_0x5695('0x8')]={'reportType':_0x3039dd,'gpsId':_0x579b04,'lat':_0x547a0f,'lon':_0x469393,'speedType':_0x434ab5,'speed':_0x1e7242,'reported_at':new Date(),'status':0x0};return this[a6_0x5695('0xd')](_0x464dec,_0x2b3ac1,_0x4cb601);}}exports[a6_0x5695('0xb')]=AlarmsController;