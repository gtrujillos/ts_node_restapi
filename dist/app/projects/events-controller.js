var a157_0x1139=['body','data','substr','hex2Float','save','__importDefault','__esModule','../../infrastructure/number-utils','default','reportEvent','bind'];(function(_0x324fd1,_0x4020e2){var _0x4e24d1=function(_0x43ed18){while(--_0x43ed18){_0x324fd1['push'](_0x324fd1['shift']());}};_0x4e24d1(++_0x4020e2);}(a157_0x1139,0x186));var a157_0x3733=function(_0x27fc6a,_0x170a2c){_0x27fc6a=_0x27fc6a-0x0;var _0x37ce52=a157_0x1139[_0x27fc6a];return _0x37ce52;};'use strict';var __importDefault=this&&this[a157_0x3733('0x0')]||function(_0x3984d7){return _0x3984d7&&_0x3984d7['__esModule']?_0x3984d7:{'default':_0x3984d7};};Object['defineProperty'](exports,a157_0x3733('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a157_0x3733('0x2')));const responseUtils=require('../../infrastructure/response-utils');class EventsController extends controller_utils_1[a157_0x3733('0x3')]{constructor(_0xf839df){super(_0xf839df,null);this[a157_0x3733('0x4')]=this[a157_0x3733('0x4')][a157_0x3733('0x5')](this);}[a157_0x3733('0x4')](_0x3f715c,_0x118189,_0x390710){if(_0x3f715c[a157_0x3733('0x6')][a157_0x3733('0x7')]){const _0x4a6e97=_0x3f715c[a157_0x3733('0x6')]['data'];const _0x45249f=_0x4a6e97!=''?_0x4a6e97[a157_0x3733('0x8')](0x0,0x2):null;const _0x52ccde=_0x4a6e97!=''?_0x4a6e97['substr'](0x2,0x2):null;const _0x414c40=_0x4a6e97!=''?number_utils_1[a157_0x3733('0x3')]['hex2Float'](_0x4a6e97['substr'](0x4,0x8),0x10):null;const _0x121ad4=_0x4a6e97!=''?number_utils_1[a157_0x3733('0x3')][a157_0x3733('0x9')](_0x4a6e97[a157_0x3733('0x8')](0xc,0x8),0x10):null;const _0x34d856=_0x4a6e97!=''?_0x4a6e97['substr'](0x14,0x2):null;const _0x211687=_0x4a6e97!=''?_0x4a6e97['substr'](0x16,0x2):null;_0x3f715c['body']={'reportType':_0x45249f,'gpsId':_0x52ccde,'lat':_0x414c40,'lon':_0x121ad4,'speedType':_0x34d856,'speed':_0x211687,'reported_at':new Date(),'status':0x0};}else{}return this[a157_0x3733('0xa')](_0x3f715c,_0x118189,_0x390710);}}exports[a157_0x3733('0x3')]=EventsController;