var a78_0x3b91=['__importDefault','__esModule','../../infrastructure/base-controller','../../infrastructure/sequelize-utils','default','models','locationPointsModel','findAll','lat','tracked_at','DESC','then','json'];(function(_0x3dbfa8,_0x295179){var _0x1772f3=function(_0x271bb8){while(--_0x271bb8){_0x3dbfa8['push'](_0x3dbfa8['shift']());}};_0x1772f3(++_0x295179);}(a78_0x3b91,0x82));var a78_0x42be=function(_0x3d518a,_0x16429d){_0x3d518a=_0x3d518a-0x0;var _0x546243=a78_0x3b91[_0x3d518a];return _0x546243;};'use strict';var __importDefault=this&&this[a78_0x42be('0x0')]||function(_0x54205e){return _0x54205e&&_0x54205e['__esModule']?_0x54205e:{'default':_0x54205e};};Object['defineProperty'](exports,a78_0x42be('0x1'),{'value':!![]});const base_controller_1=__importDefault(require(a78_0x42be('0x2')));const sequelize_utils_1=__importDefault(require(a78_0x42be('0x3')));class LocationPointsController extends base_controller_1[a78_0x42be('0x4')]{constructor(_0x49d65f){super(_0x49d65f,null);}['findLast'](_0x46e3d2,_0x163fbd){sequelize_utils_1[a78_0x42be('0x4')][a78_0x42be('0x5')][a78_0x42be('0x6')][a78_0x42be('0x7')]({'attributes':[a78_0x42be('0x8'),'lon',a78_0x42be('0x9')],'offset':0x0,'limit':0xa,'where':{},'order':[[a78_0x42be('0x9'),a78_0x42be('0xa')]]})[a78_0x42be('0xb')](_0x2e3f02=>{_0x163fbd[a78_0x42be('0xc')]({'data':_0x2e3f02});});}}exports['default']=LocationPointsController;