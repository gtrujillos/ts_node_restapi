var a0_0x13ca=['data','substr','hex2Float','body','log','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','default','reportAlarm'];(function(_0x38ac1f,_0x20fca5){var _0xb06f3b=function(_0x3d8669){while(--_0x3d8669){_0x38ac1f['push'](_0x38ac1f['shift']());}};_0xb06f3b(++_0x20fca5);}(a0_0x13ca,0x7d));var a0_0x1020=function(_0x27a9ba,_0x255e2f){_0x27a9ba=_0x27a9ba-0x0;var _0x2fc955=a0_0x13ca[_0x27a9ba];return _0x2fc955;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a0_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a0_0x1020('0x1')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a0_0x1020('0x2')));const number_utils_1=__importDefault(require(a0_0x1020('0x3')));const responseUtils=require(a0_0x1020('0x4'));class AlarmsController extends controller_utils_1[a0_0x1020('0x5')]{constructor(_0x2498af){super(_0x2498af,null);this[a0_0x1020('0x6')]=this[a0_0x1020('0x6')]['bind'](this);}['reportAlarm'](_0x26fe42,_0xe4a5bf,_0x17d4ec){const _0x22c4b8=_0x26fe42['body'][a0_0x1020('0x7')];const _0x2c17b8=_0x22c4b8!=''?_0x22c4b8['substr'](0x0,0x2):null;const _0x13d5fd=_0x22c4b8!=''?_0x22c4b8[a0_0x1020('0x8')](0x2,0x2):null;const _0x53ffbd=_0x22c4b8!=''?number_utils_1[a0_0x1020('0x5')][a0_0x1020('0x9')](_0x22c4b8['substr'](0x4,0x8),0x10):null;const _0x38737d=_0x22c4b8!=''?number_utils_1[a0_0x1020('0x5')]['hex2Float'](_0x22c4b8[a0_0x1020('0x8')](0xc,0x8),0x10):null;const _0x5a0e99=_0x22c4b8!=''?_0x22c4b8['substr'](0x14,0x2):null;const _0x45a12f=_0x22c4b8!=''?_0x22c4b8[a0_0x1020('0x8')](0x16,0x2):null;_0x26fe42[a0_0x1020('0xa')]={'reportType':_0x2c17b8,'gpsId':_0x13d5fd,'lat':_0x53ffbd,'lon':_0x38737d,'speedType':_0x5a0e99,'speed':_0x45a12f,'reported_at':new Date(),'status':0x0};console[a0_0x1020('0xb')](_0x26fe42[a0_0x1020('0xa')]);return this['save'](_0x26fe42,_0xe4a5bf,_0x17d4ec);}}exports[a0_0x1020('0x5')]=AlarmsController;