var a48_0x3047=['body','save','__importDefault','__esModule','../../infrastructure/controller-utils','default','reportAlarm','data','substr'];(function(_0x3e0e17,_0x39418f){var _0x4df2b3=function(_0x4692c0){while(--_0x4692c0){_0x3e0e17['push'](_0x3e0e17['shift']());}};_0x4df2b3(++_0x39418f);}(a48_0x3047,0x146));var a48_0x50ff=function(_0xf6d716,_0x427fe1){_0xf6d716=_0xf6d716-0x0;var _0x5167d8=a48_0x3047[_0xf6d716];return _0x5167d8;};'use strict';var __importDefault=this&&this[a48_0x50ff('0x0')]||function(_0x382f08){return _0x382f08&&_0x382f08[a48_0x50ff('0x1')]?_0x382f08:{'default':_0x382f08};};Object['defineProperty'](exports,a48_0x50ff('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a48_0x50ff('0x2')));const number_utils_1=__importDefault(require('../../infrastructure/number-utils'));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a48_0x50ff('0x3')]{constructor(_0x5bc1f9){super(_0x5bc1f9,null);this[a48_0x50ff('0x4')]=this['reportAlarm']['bind'](this);}['reportAlarm'](_0x38b986,_0x495e58,_0x2cfd38){const _0x36397c=_0x38b986['body'][a48_0x50ff('0x5')];const _0x42c26d=_0x36397c[a48_0x50ff('0x6')](0x0,0x2);const _0x17c3d7=_0x36397c[a48_0x50ff('0x6')](0x2,0x2);const _0x21efd9=number_utils_1[a48_0x50ff('0x3')]['hex2Float'](_0x36397c[a48_0x50ff('0x6')](0x4,0x8),0x10);const _0x2c223d=number_utils_1[a48_0x50ff('0x3')]['hex2Float'](_0x36397c[a48_0x50ff('0x6')](0xc,0x8),0x10);const _0x5086d8=_0x36397c['substr'](0x14,0x2);const _0x55b846=_0x36397c[a48_0x50ff('0x6')](0x16,0x2);_0x38b986[a48_0x50ff('0x7')]={'reportType':_0x42c26d,'gpsId':_0x17c3d7,'lat':_0x21efd9,'lon':_0x2c223d,'speedType':_0x5086d8,'speed':_0x55b846,'reported_at':new Date(),'status':0x0};return this[a48_0x50ff('0x8')](_0x38b986,_0x495e58,_0x2cfd38);}}exports[a48_0x50ff('0x3')]=AlarmsController;