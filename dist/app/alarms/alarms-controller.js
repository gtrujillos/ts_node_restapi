var a28_0x11fa=['bind','body','data','substr','default','log','save','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','reportAlarm'];(function(_0x53aee9,_0x310507){var _0x26af9f=function(_0x346e82){while(--_0x346e82){_0x53aee9['push'](_0x53aee9['shift']());}};_0x26af9f(++_0x310507);}(a28_0x11fa,0x11f));var a28_0x2fee=function(_0x4c3be7,_0x16b143){_0x4c3be7=_0x4c3be7-0x0;var _0x3cfc12=a28_0x11fa[_0x4c3be7];return _0x3cfc12;};'use strict';var __importDefault=this&&this[a28_0x2fee('0x0')]||function(_0x505885){return _0x505885&&_0x505885[a28_0x2fee('0x1')]?_0x505885:{'default':_0x505885};};Object[a28_0x2fee('0x2')](exports,a28_0x2fee('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a28_0x2fee('0x3')));const number_utils_1=__importDefault(require(a28_0x2fee('0x4')));const responseUtils=require(a28_0x2fee('0x5'));class AlarmsController extends controller_utils_1['default']{constructor(_0xffb8e7){super(_0xffb8e7,null);this[a28_0x2fee('0x6')]=this['reportAlarm'][a28_0x2fee('0x7')](this);}[a28_0x2fee('0x6')](_0x15a768,_0x48f930,_0x4ecad6){const _0x5d71ca=_0x15a768[a28_0x2fee('0x8')][a28_0x2fee('0x9')];const _0x5affc9=_0x5d71ca!=''?_0x5d71ca[a28_0x2fee('0xa')](0x0,0x2):null;const _0x4673ff=_0x5d71ca!=''?_0x5d71ca[a28_0x2fee('0xa')](0x2,0x2):null;const _0x396d05=_0x5d71ca!=''?number_utils_1[a28_0x2fee('0xb')]['hex2Float'](_0x5d71ca[a28_0x2fee('0xa')](0x4,0x8),0x10):null;const _0x2b6180=_0x5d71ca!=''?number_utils_1[a28_0x2fee('0xb')]['hex2Float'](_0x5d71ca[a28_0x2fee('0xa')](0xc,0x8),0x10):null;const _0x5b1783=_0x5d71ca!=''?_0x5d71ca['substr'](0x14,0x2):null;const _0x414a73=_0x5d71ca!=''?_0x5d71ca['substr'](0x16,0x2):null;_0x15a768[a28_0x2fee('0x8')]={'reportType':_0x5affc9,'gpsId':_0x4673ff,'lat':_0x396d05,'lon':_0x2b6180,'speedType':_0x5b1783,'speed':_0x414a73,'reported_at':new Date(),'status':0x0};console[a28_0x2fee('0xc')](_0x15a768['body']);return this[a28_0x2fee('0xd')](_0x15a768,_0x48f930,_0x4ecad6);}}exports[a28_0x2fee('0xb')]=AlarmsController;