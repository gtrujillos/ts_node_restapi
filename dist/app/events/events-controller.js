var a87_0xe7ef=['body','data','substr','default','hex2Float','__esModule','../../infrastructure/number-utils','../../infrastructure/response-utils','reportEvent','bind'];(function(_0x4c357c,_0x3f26c0){var _0x2d2c3e=function(_0x4f0ea0){while(--_0x4f0ea0){_0x4c357c['push'](_0x4c357c['shift']());}};_0x2d2c3e(++_0x3f26c0);}(a87_0xe7ef,0x19f));var a87_0x4dc4=function(_0x774090,_0x304063){_0x774090=_0x774090-0x0;var _0x22110d=a87_0xe7ef[_0x774090];return _0x22110d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5ce396){return _0x5ce396&&_0x5ce396[a87_0x4dc4('0x0')]?_0x5ce396:{'default':_0x5ce396};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a87_0x4dc4('0x1')));const responseUtils=require(a87_0x4dc4('0x2'));class EventsController extends controller_utils_1['default']{constructor(_0x1907cd){super(_0x1907cd,null);this[a87_0x4dc4('0x3')]=this[a87_0x4dc4('0x3')][a87_0x4dc4('0x4')](this);}[a87_0x4dc4('0x3')](_0x84782f,_0x20dcff,_0x5247d1){if(_0x84782f[a87_0x4dc4('0x5')][a87_0x4dc4('0x6')]){const _0x5aa6f5=_0x84782f[a87_0x4dc4('0x5')]['data'];const _0x5577d5=_0x5aa6f5!=''?_0x5aa6f5[a87_0x4dc4('0x7')](0x0,0x2):null;const _0x48a377=_0x5aa6f5!=''?_0x5aa6f5[a87_0x4dc4('0x7')](0x2,0x2):null;const _0x32ab39=_0x5aa6f5!=''?number_utils_1[a87_0x4dc4('0x8')][a87_0x4dc4('0x9')](_0x5aa6f5[a87_0x4dc4('0x7')](0x4,0x8),0x10):null;const _0xe35a34=_0x5aa6f5!=''?number_utils_1[a87_0x4dc4('0x8')][a87_0x4dc4('0x9')](_0x5aa6f5['substr'](0xc,0x8),0x10):null;const _0x34b6c4=_0x5aa6f5!=''?_0x5aa6f5[a87_0x4dc4('0x7')](0x14,0x2):null;const _0x4e99dc=_0x5aa6f5!=''?_0x5aa6f5[a87_0x4dc4('0x7')](0x16,0x2):null;_0x84782f[a87_0x4dc4('0x5')]={'reportType':_0x5577d5,'gpsId':_0x48a377,'lat':_0x32ab39,'lon':_0xe35a34,'speedType':_0x34b6c4,'speed':_0x4e99dc,'reported_at':new Date(),'status':0x0};}else{}return this['save'](_0x84782f,_0x20dcff,_0x5247d1);}}exports[a87_0x4dc4('0x8')]=EventsController;