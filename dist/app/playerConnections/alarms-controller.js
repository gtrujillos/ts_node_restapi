var a48_0x5d2a=['substr','hex2Float','save','__importDefault','__esModule','../../infrastructure/response-utils','default','reportAlarm','bind','body','data'];(function(_0x484051,_0x122887){var _0x597d47=function(_0x2692e3){while(--_0x2692e3){_0x484051['push'](_0x484051['shift']());}};_0x597d47(++_0x122887);}(a48_0x5d2a,0x163));var a48_0x42af=function(_0x1cf583,_0xd549e7){_0x1cf583=_0x1cf583-0x0;var _0x3165b5=a48_0x5d2a[_0x1cf583];return _0x3165b5;};'use strict';var __importDefault=this&&this[a48_0x42af('0x0')]||function(_0x1e0897){return _0x1e0897&&_0x1e0897[a48_0x42af('0x1')]?_0x1e0897:{'default':_0x1e0897};};Object['defineProperty'](exports,a48_0x42af('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a48_0x42af('0x2'));class AlarmsController extends controller_utils_1[a48_0x42af('0x3')]{constructor(_0x4f0f79){super(_0x4f0f79,null);this['reportAlarm']=this[a48_0x42af('0x4')][a48_0x42af('0x5')](this);}[a48_0x42af('0x4')](_0x12c070,_0x5d180f,_0xd936f7){const _0x18b7d6=_0x12c070[a48_0x42af('0x6')][a48_0x42af('0x7')];const _0x8b6bb6=_0x18b7d6[a48_0x42af('0x8')](0x0,0x2);const _0x12d43f=_0x18b7d6['substr'](0x2,0x2);const _0x55e611=number_utils_1[a48_0x42af('0x3')][a48_0x42af('0x9')](_0x18b7d6[a48_0x42af('0x8')](0x4,0x8),0x10);const _0x561870=number_utils_1[a48_0x42af('0x3')]['hex2Float'](_0x18b7d6[a48_0x42af('0x8')](0xc,0x8),0x10);const _0x289755=_0x18b7d6['substr'](0x14,0x2);const _0x26fc3e=_0x18b7d6[a48_0x42af('0x8')](0x16,0x2);_0x12c070[a48_0x42af('0x6')]={'reportType':_0x8b6bb6,'gpsId':_0x12d43f,'lat':_0x55e611,'lon':_0x561870,'speedType':_0x289755,'speed':_0x26fc3e,'reported_at':new Date(),'status':0x0};return this[a48_0x42af('0xa')](_0x12c070,_0x5d180f,_0xd936f7);}}exports['default']=AlarmsController;