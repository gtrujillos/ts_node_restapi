var a60_0x10d4=['__importDefault','__esModule','../../infrastructure/controller-utils','reportAlarm','bind','substr','default','hex2Float','body'];(function(_0x298ab3,_0x301152){var _0x1abc26=function(_0x1b4587){while(--_0x1b4587){_0x298ab3['push'](_0x298ab3['shift']());}};_0x1abc26(++_0x301152);}(a60_0x10d4,0x1b0));var a60_0x19ec=function(_0x1186d3,_0x1be8f4){_0x1186d3=_0x1186d3-0x0;var _0x21820a=a60_0x10d4[_0x1186d3];return _0x21820a;};'use strict';var __importDefault=this&&this[a60_0x19ec('0x0')]||function(_0x13f384){return _0x13f384&&_0x13f384[a60_0x19ec('0x1')]?_0x13f384:{'default':_0x13f384};};Object['defineProperty'](exports,a60_0x19ec('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a60_0x19ec('0x2')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require('../../infrastructure/response-utils');class PlayerConnectionsController extends controller_utils_1['default']{constructor(_0x4e9701){super(_0x4e9701,null);this[a60_0x19ec('0x3')]=this[a60_0x19ec('0x3')][a60_0x19ec('0x4')](this);}['reportAlarm'](_0x43bd09,_0x1620a4,_0x2dc1a9){const _0x508042=_0x43bd09['body']['data'];const _0x3bbc00=_0x508042[a60_0x19ec('0x5')](0x0,0x2);const _0x3e86f4=_0x508042[a60_0x19ec('0x5')](0x2,0x2);const _0x4cb2ed=number_utils_1[a60_0x19ec('0x6')][a60_0x19ec('0x7')](_0x508042[a60_0x19ec('0x5')](0x4,0x8),0x10);const _0x5e46e7=number_utils_1[a60_0x19ec('0x6')][a60_0x19ec('0x7')](_0x508042[a60_0x19ec('0x5')](0xc,0x8),0x10);const _0x274187=_0x508042[a60_0x19ec('0x5')](0x14,0x2);const _0x2edd7b=_0x508042['substr'](0x16,0x2);_0x43bd09[a60_0x19ec('0x8')]={'reportType':_0x3bbc00,'gpsId':_0x3e86f4,'lat':_0x4cb2ed,'lon':_0x5e46e7,'speedType':_0x274187,'speed':_0x2edd7b,'reported_at':new Date(),'status':0x0};return this['save'](_0x43bd09,_0x1620a4,_0x2dc1a9);}}exports['default']=PlayerConnectionsController;