var a0_0x1340=['__esModule','../../infrastructure/response-utils','default','reportAlarm','bind','body','data','substr','save'];(function(_0x25d8bb,_0xf7b620){var _0x55b7ea=function(_0x13a2b5){while(--_0x13a2b5){_0x25d8bb['push'](_0x25d8bb['shift']());}};_0x55b7ea(++_0xf7b620);}(a0_0x1340,0x168));var a0_0x160a=function(_0x44cad0,_0x5e3a98){_0x44cad0=_0x44cad0-0x0;var _0x74ea70=a0_0x1340[_0x44cad0];return _0x74ea70;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x11e411){return _0x11e411&&_0x11e411[a0_0x160a('0x0')]?_0x11e411:{'default':_0x11e411};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require(a0_0x160a('0x1'));class AlarmsController extends controller_utils_1[a0_0x160a('0x2')]{constructor(_0x1b1f34){super(_0x1b1f34,null);this[a0_0x160a('0x3')]=this[a0_0x160a('0x3')][a0_0x160a('0x4')](this);}[a0_0x160a('0x3')](_0x413cb6,_0x1d5877,_0x53d64c){const _0x43156d=_0x413cb6[a0_0x160a('0x5')][a0_0x160a('0x6')];const _0x39316c=_0x43156d[a0_0x160a('0x7')](0x0,0x2);const _0x2f3061=_0x43156d[a0_0x160a('0x7')](0x2,0x2);const _0x599809=number_utils_1['default']['hex2Float'](_0x43156d[a0_0x160a('0x7')](0x4,0x8),0x10);const _0x5ae189=number_utils_1[a0_0x160a('0x2')]['hex2Float'](_0x43156d[a0_0x160a('0x7')](0xc,0x8),0x10);const _0xad1405=_0x43156d[a0_0x160a('0x7')](0x14,0x2);const _0x225d61=_0x43156d[a0_0x160a('0x7')](0x16,0x2);_0x413cb6[a0_0x160a('0x5')]={'reportType':_0x39316c,'gpsId':_0x2f3061,'lat':_0x599809,'lon':_0x5ae189,'speedType':_0xad1405,'speed':_0x225d61,'reported_at':new Date(),'status':0x0};return this[a0_0x160a('0x8')](_0x413cb6,_0x1d5877,_0x53d64c);}}exports[a0_0x160a('0x2')]=AlarmsController;