var a47_0x2e51=['reportAlarm','bind','body','data','substr','save','__importDefault','defineProperty','../../infrastructure/controller-utils','../../infrastructure/response-utils','default'];(function(_0x41019d,_0x2c6b7f){var _0x155bcf=function(_0xab3fc4){while(--_0xab3fc4){_0x41019d['push'](_0x41019d['shift']());}};_0x155bcf(++_0x2c6b7f);}(a47_0x2e51,0x1c9));var a47_0x38ea=function(_0x2396db,_0x2d980f){_0x2396db=_0x2396db-0x0;var _0x45bcb4=a47_0x2e51[_0x2396db];return _0x45bcb4;};'use strict';var __importDefault=this&&this[a47_0x38ea('0x0')]||function(_0x4844cc){return _0x4844cc&&_0x4844cc['__esModule']?_0x4844cc:{'default':_0x4844cc};};Object[a47_0x38ea('0x1')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a47_0x38ea('0x2')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a47_0x38ea('0x3'));class AlarmsController extends controller_utils_1[a47_0x38ea('0x4')]{constructor(_0x187963){super(_0x187963,null);this[a47_0x38ea('0x5')]=this[a47_0x38ea('0x5')][a47_0x38ea('0x6')](this);}[a47_0x38ea('0x5')](_0x20b9d2,_0x45cb63,_0x111e4b){const _0x3c6e2d=_0x20b9d2[a47_0x38ea('0x7')][a47_0x38ea('0x8')];const _0x3169a4=_0x3c6e2d[a47_0x38ea('0x9')](0x0,0x2);const _0x6490b5=_0x3c6e2d[a47_0x38ea('0x9')](0x2,0x2);const _0x2e1bf7=number_utils_1[a47_0x38ea('0x4')]['hex2Float'](_0x3c6e2d['substr'](0x4,0x8),0x10);const _0x12024e=number_utils_1[a47_0x38ea('0x4')]['hex2Float'](_0x3c6e2d[a47_0x38ea('0x9')](0xc,0x8),0x10);const _0xd1e14b=_0x3c6e2d[a47_0x38ea('0x9')](0x14,0x2);const _0x1bb19b=_0x3c6e2d[a47_0x38ea('0x9')](0x16,0x2);_0x20b9d2['body']={'reportType':_0x3169a4,'gpsId':_0x6490b5,'lat':_0x2e1bf7,'lon':_0x12024e,'speedType':_0xd1e14b,'speed':_0x1bb19b,'reported_at':new Date(),'status':0x0};return this[a47_0x38ea('0xa')](_0x20b9d2,_0x45cb63,_0x111e4b);}}exports[a47_0x38ea('0x4')]=AlarmsController;