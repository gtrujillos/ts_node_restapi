var a6_0x4c43=['save','__importDefault','__esModule','defineProperty','../../infrastructure/number-utils','default','reportAlarm','bind','data','substr','hex2Float','body'];(function(_0x49627b,_0x1ae2c2){var _0x61540a=function(_0x39defa){while(--_0x39defa){_0x49627b['push'](_0x49627b['shift']());}};_0x61540a(++_0x1ae2c2);}(a6_0x4c43,0x139));var a6_0x8fd5=function(_0x4e406a,_0x57a9d0){_0x4e406a=_0x4e406a-0x0;var _0x3a6869=a6_0x4c43[_0x4e406a];return _0x3a6869;};'use strict';var __importDefault=this&&this[a6_0x8fd5('0x0')]||function(_0x1f94d7){return _0x1f94d7&&_0x1f94d7[a6_0x8fd5('0x1')]?_0x1f94d7:{'default':_0x1f94d7};};Object[a6_0x8fd5('0x2')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a6_0x8fd5('0x3')));const responseUtils=require('../../infrastructure/response-utils');class AlarmsController extends controller_utils_1[a6_0x8fd5('0x4')]{constructor(_0x47d094){super(_0x47d094,null);this[a6_0x8fd5('0x5')]=this[a6_0x8fd5('0x5')][a6_0x8fd5('0x6')](this);}['reportAlarm'](_0x59dc2a,_0x522afd,_0x196269){const _0x179b14=_0x59dc2a['body'][a6_0x8fd5('0x7')];const _0x3b8a6f=_0x179b14[a6_0x8fd5('0x8')](0x0,0x2);const _0x3ec03a=_0x179b14[a6_0x8fd5('0x8')](0x2,0x2);const _0x17f489=number_utils_1[a6_0x8fd5('0x4')][a6_0x8fd5('0x9')](_0x179b14[a6_0x8fd5('0x8')](0x4,0x8),0x10);const _0x12e21a=number_utils_1[a6_0x8fd5('0x4')][a6_0x8fd5('0x9')](_0x179b14[a6_0x8fd5('0x8')](0xc,0x8),0x10);const _0x5d6c87=_0x179b14[a6_0x8fd5('0x8')](0x14,0x2);const _0x53a63a=_0x179b14['substr'](0x16,0x2);_0x59dc2a[a6_0x8fd5('0xa')]={'reportType':_0x3b8a6f,'gpsId':_0x3ec03a,'lat':_0x17f489,'lon':_0x12e21a,'speedType':_0x5d6c87,'speed':_0x53a63a,'reported_at':new Date(),'status':0x0};return this[a6_0x8fd5('0xb')](_0x59dc2a,_0x522afd,_0x196269);}}exports['default']=AlarmsController;