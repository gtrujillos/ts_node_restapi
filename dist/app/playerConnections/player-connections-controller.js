var a51_0x5355=['reportAlarm','bind','data','substr','hex2Float','body','save','defineProperty','../../infrastructure/number-utils','../../infrastructure/response-utils','default'];(function(_0x5da3a1,_0x2c7997){var _0x2d7742=function(_0x3dcea4){while(--_0x3dcea4){_0x5da3a1['push'](_0x5da3a1['shift']());}};_0x2d7742(++_0x2c7997);}(a51_0x5355,0x1ca));var a51_0x4b39=function(_0x1a7288,_0x29e4d1){_0x1a7288=_0x1a7288-0x0;var _0x49d119=a51_0x5355[_0x1a7288];return _0x49d119;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x180ece){return _0x180ece&&_0x180ece['__esModule']?_0x180ece:{'default':_0x180ece};};Object[a51_0x4b39('0x0')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const number_utils_1=__importDefault(require(a51_0x4b39('0x1')));const responseUtils=require(a51_0x4b39('0x2'));class PlayerConnectionsController extends controller_utils_1[a51_0x4b39('0x3')]{constructor(_0x10e30e){super(_0x10e30e,null);this[a51_0x4b39('0x4')]=this['reportAlarm'][a51_0x4b39('0x5')](this);}[a51_0x4b39('0x4')](_0x324d44,_0x4de8c0,_0x49aa95){const _0x26513f=_0x324d44['body'][a51_0x4b39('0x6')];const _0x593648=_0x26513f['substr'](0x0,0x2);const _0x3b2744=_0x26513f[a51_0x4b39('0x7')](0x2,0x2);const _0x1c6df9=number_utils_1[a51_0x4b39('0x3')]['hex2Float'](_0x26513f['substr'](0x4,0x8),0x10);const _0x9f2705=number_utils_1[a51_0x4b39('0x3')][a51_0x4b39('0x8')](_0x26513f[a51_0x4b39('0x7')](0xc,0x8),0x10);const _0x11af4a=_0x26513f[a51_0x4b39('0x7')](0x14,0x2);const _0x1d542b=_0x26513f[a51_0x4b39('0x7')](0x16,0x2);_0x324d44[a51_0x4b39('0x9')]={'reportType':_0x593648,'gpsId':_0x3b2744,'lat':_0x1c6df9,'lon':_0x9f2705,'speedType':_0x11af4a,'speed':_0x1d542b,'reported_at':new Date(),'status':0x0};return this[a51_0x4b39('0xa')](_0x324d44,_0x4de8c0,_0x49aa95);}}exports['default']=PlayerConnectionsController;