var a44_0xe007=['substr','default','hex2Float','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','../../infrastructure/response-utils','reportAlarm','body','data'];(function(_0x96017d,_0x4eecdc){var _0x28ed5e=function(_0x36552f){while(--_0x36552f){_0x96017d['push'](_0x96017d['shift']());}};_0x28ed5e(++_0x4eecdc);}(a44_0xe007,0x117));var a44_0x52c7=function(_0x543efd,_0x112b7f){_0x543efd=_0x543efd-0x0;var _0x23483b=a44_0xe007[_0x543efd];return _0x23483b;};'use strict';var __importDefault=this&&this[a44_0x52c7('0x0')]||function(_0x59116a){return _0x59116a&&_0x59116a[a44_0x52c7('0x1')]?_0x59116a:{'default':_0x59116a};};Object[a44_0x52c7('0x2')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a44_0x52c7('0x3')));const number_utils_1=__importDefault(require(a44_0x52c7('0x4')));const responseUtils=require(a44_0x52c7('0x5'));class AlarmsController extends controller_utils_1['default']{constructor(_0x2b81a5){super(_0x2b81a5,null);this[a44_0x52c7('0x6')]=this[a44_0x52c7('0x6')]['bind'](this);}[a44_0x52c7('0x6')](_0x529e10,_0x30d901,_0x5843e8){const _0x347925=_0x529e10[a44_0x52c7('0x7')][a44_0x52c7('0x8')];const _0x2de7dd=_0x347925['substr'](0x0,0x2);const _0x14ce3d=_0x347925[a44_0x52c7('0x9')](0x2,0x2);const _0x2ffe6c=number_utils_1[a44_0x52c7('0xa')][a44_0x52c7('0xb')](_0x347925['substr'](0x4,0x8),0x10);const _0x31af88=number_utils_1[a44_0x52c7('0xa')][a44_0x52c7('0xb')](_0x347925['substr'](0xc,0x8),0x10);const _0x24ceea=_0x347925['substr'](0x14,0x2);const _0xe8210d=_0x347925[a44_0x52c7('0x9')](0x16,0x2);_0x529e10[a44_0x52c7('0x7')]={'reportType':_0x2de7dd,'gpsId':_0x14ce3d,'lat':_0x2ffe6c,'lon':_0x31af88,'speedType':_0x24ceea,'speed':_0xe8210d,'reported_at':new Date(),'status':0x0};return this['save'](_0x529e10,_0x30d901,_0x5843e8);}}exports[a44_0x52c7('0xa')]=AlarmsController;