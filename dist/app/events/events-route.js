var a89_0x16db=['models','vehiclesModel','plate','name','eventStatusModel','desc','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','../../infrastructure/sequelize-utils','default','Router'];(function(_0x391c41,_0x2f6ba5){var _0x188a40=function(_0x23d12f){while(--_0x23d12f){_0x391c41['push'](_0x391c41['shift']());}};_0x188a40(++_0x2f6ba5);}(a89_0x16db,0x1c0));var a89_0x4f99=function(_0x206443,_0x86173a){_0x206443=_0x206443-0x0;var _0x5103f0=a89_0x16db[_0x206443];return _0x5103f0;};'use strict';var __importDefault=this&&this[a89_0x4f99('0x0')]||function(_0x1d769c){return _0x1d769c&&_0x1d769c[a89_0x4f99('0x1')]?_0x1d769c:{'default':_0x1d769c};};Object[a89_0x4f99('0x2')](exports,a89_0x4f99('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a89_0x4f99('0x3')));const express_1=__importDefault(require('express'));const sequelize_utils_1=__importDefault(require(a89_0x4f99('0x4')));const router=express_1[a89_0x4f99('0x5')][a89_0x4f99('0x6')]();class EventsRoute{constructor(_0x392fc5){router['post']('/report_event',_0x392fc5['reportEvent']);const _0x22a6eb=new router_utils_1[(a89_0x4f99('0x5'))](_0x392fc5,router,null,[{'model':sequelize_utils_1[a89_0x4f99('0x5')][a89_0x4f99('0x7')][a89_0x4f99('0x8')],'attributes':['id',a89_0x4f99('0x9')]},{'model':sequelize_utils_1['default'][a89_0x4f99('0x7')]['eventTypesModel'],'attributes':['id',a89_0x4f99('0xa')]},{'model':sequelize_utils_1[a89_0x4f99('0x5')][a89_0x4f99('0x7')][a89_0x4f99('0xb')],'attributes':['id','name']}],[['reported_at',a89_0x4f99('0xc')]]);return router;}}exports[a89_0x4f99('0x5')]=EventsRoute;