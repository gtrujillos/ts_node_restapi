var a48_0x3c58=['body','hex2Float','substr','save','__importDefault','defineProperty','__esModule','../../infrastructure/number-utils','default','reportAlarm','bind'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a48_0x3c58,0xb4));var a48_0x4791=function(_0x59ebe1,_0x2cf73c){_0x59ebe1=_0x59ebe1-0x0;var _0x5211b9=a48_0x3c58[_0x59ebe1];return _0x5211b9;};'use strict';var __importDefault=this&&this[a48_0x4791('0x0')]||function(_0x5552d6){return _0x5552d6&&_0x5552d6['__esModule']?_0x5552d6:{'default':_0x5552d6};};Object[a48_0x4791('0x1')](exports,a48_0x4791('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a48_0x4791('0x3')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a48_0x4791('0x4')]{constructor(_0x22621a){super(_0x22621a,null);this[a48_0x4791('0x5')]=this[a48_0x4791('0x5')][a48_0x4791('0x6')](this);}[a48_0x4791('0x5')](_0x29d158,_0x439b77,_0x67b986){const _0x29e0a2=_0x29d158[a48_0x4791('0x7')]['data'];const _0x3a12a6=_0x29e0a2['substr'](0x0,0x2);const _0x437d92=_0x29e0a2['substr'](0x2,0x2);const _0x775d99=number_utils_1[a48_0x4791('0x4')][a48_0x4791('0x8')](_0x29e0a2[a48_0x4791('0x9')](0x4,0x8),0x10);const _0x234667=number_utils_1['default']['hex2Float'](_0x29e0a2['substr'](0xc,0x8),0x10);const _0x3459fa=_0x29e0a2[a48_0x4791('0x9')](0x14,0x2);const _0x37a713=_0x29e0a2['substr'](0x16,0x2);_0x29d158[a48_0x4791('0x7')]={'reportType':_0x3a12a6,'gpsId':_0x437d92,'lat':_0x775d99,'lon':_0x234667,'speedType':_0x3459fa,'speed':_0x37a713,'reported_at':new Date(),'status':0x0};return this[a48_0x4791('0xa')](_0x29d158,_0x439b77,_0x67b986);}}exports['default']=AlarmsController;