var a0_0x5e0e=['hex2Float','body','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','default','reportAlarm','bind','data','substr'];(function(_0x5a08e4,_0x536cc4){var _0x1b773e=function(_0x16967f){while(--_0x16967f){_0x5a08e4['push'](_0x5a08e4['shift']());}};_0x1b773e(++_0x536cc4);}(a0_0x5e0e,0x7b));var a0_0xa5a8=function(_0x1f777a,_0x290503){_0x1f777a=_0x1f777a-0x0;var _0x431c54=a0_0x5e0e[_0x1f777a];return _0x431c54;};'use strict';var __importDefault=this&&this[a0_0xa5a8('0x0')]||function(_0x2c8aea){return _0x2c8aea&&_0x2c8aea[a0_0xa5a8('0x1')]?_0x2c8aea:{'default':_0x2c8aea};};Object[a0_0xa5a8('0x2')](exports,a0_0xa5a8('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a0_0xa5a8('0x3')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a0_0xa5a8('0x4')]{constructor(_0x30f675){super(_0x30f675,null);this[a0_0xa5a8('0x5')]=this[a0_0xa5a8('0x5')][a0_0xa5a8('0x6')](this);}['reportAlarm'](_0x2fb53a,_0x467dcc,_0xeff59a){const _0x1932e8=_0x2fb53a['body'][a0_0xa5a8('0x7')];const _0x282071=_0x1932e8[a0_0xa5a8('0x8')](0x0,0x2);const _0x49c94e=_0x1932e8[a0_0xa5a8('0x8')](0x2,0x2);const _0x38d027=number_utils_1[a0_0xa5a8('0x4')][a0_0xa5a8('0x9')](_0x1932e8[a0_0xa5a8('0x8')](0x4,0x8),0x10);const _0x206cf6=number_utils_1['default'][a0_0xa5a8('0x9')](_0x1932e8[a0_0xa5a8('0x8')](0xc,0x8),0x10);const _0x4d186c=_0x1932e8['substr'](0x14,0x2);const _0x9928e9=_0x1932e8[a0_0xa5a8('0x8')](0x16,0x2);_0x2fb53a[a0_0xa5a8('0xa')]={'reportType':_0x282071,'gpsId':_0x49c94e,'lat':_0x38d027,'lon':_0x206cf6,'speedType':_0x4d186c,'speed':_0x9928e9,'reported_at':new Date(),'status':0x0};return this['save'](_0x2fb53a,_0x467dcc,_0xeff59a);}}exports['default']=AlarmsController;