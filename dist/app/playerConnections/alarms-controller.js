var a48_0x3327=['save','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm','bind','substr','hex2Float','body'];(function(_0x469439,_0x388341){var _0x264bde=function(_0x1dba84){while(--_0x1dba84){_0x469439['push'](_0x469439['shift']());}};_0x264bde(++_0x388341);}(a48_0x3327,0xc1));var a48_0x37c8=function(_0xa355b,_0x5267fd){_0xa355b=_0xa355b-0x0;var _0x3a47cb=a48_0x3327[_0xa355b];return _0x3a47cb;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1e851c){return _0x1e851c&&_0x1e851c[a48_0x37c8('0x0')]?_0x1e851c:{'default':_0x1e851c};};Object[a48_0x37c8('0x1')](exports,a48_0x37c8('0x0'),{'value':!![]});const controller_utils_1=__importDefault(require(a48_0x37c8('0x2')));const number_utils_1=__importDefault(require(a48_0x37c8('0x3')));const responseUtils=require(a48_0x37c8('0x4'));class AlarmsController extends controller_utils_1[a48_0x37c8('0x5')]{constructor(_0x19dd38){super(_0x19dd38,null);this[a48_0x37c8('0x6')]=this[a48_0x37c8('0x6')][a48_0x37c8('0x7')](this);}[a48_0x37c8('0x6')](_0x5805a2,_0x447d3a,_0x2b254a){const _0x4e3dd1=_0x5805a2['body']['data'];const _0x455d4b=_0x4e3dd1[a48_0x37c8('0x8')](0x0,0x2);const _0x2a6516=_0x4e3dd1[a48_0x37c8('0x8')](0x2,0x2);const _0x3ce831=number_utils_1['default'][a48_0x37c8('0x9')](_0x4e3dd1[a48_0x37c8('0x8')](0x4,0x8),0x10);const _0x297d31=number_utils_1['default']['hex2Float'](_0x4e3dd1[a48_0x37c8('0x8')](0xc,0x8),0x10);const _0x3ea9b4=_0x4e3dd1['substr'](0x14,0x2);const _0x505eab=_0x4e3dd1[a48_0x37c8('0x8')](0x16,0x2);_0x5805a2[a48_0x37c8('0xa')]={'reportType':_0x455d4b,'gpsId':_0x2a6516,'lat':_0x3ce831,'lon':_0x297d31,'speedType':_0x3ea9b4,'speed':_0x505eab,'reported_at':new Date(),'status':0x0};return this[a48_0x37c8('0xb')](_0x5805a2,_0x447d3a,_0x2b254a);}}exports[a48_0x37c8('0x5')]=AlarmsController;