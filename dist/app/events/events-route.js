var a89_0x5df8=['defineProperty','../../infrastructure/router-utils','express','../../infrastructure/sequelize-utils','default','Router','reportEvent','models','vehiclesModel','plate','eventTypesModel','name','eventStatusModel','__importDefault','__esModule'];(function(_0x200ff0,_0x2841be){var _0x4e7071=function(_0x40b361){while(--_0x40b361){_0x200ff0['push'](_0x200ff0['shift']());}};_0x4e7071(++_0x2841be);}(a89_0x5df8,0x67));var a89_0x326e=function(_0x46e6b5,_0x4fce07){_0x46e6b5=_0x46e6b5-0x0;var _0x259a5c=a89_0x5df8[_0x46e6b5];return _0x259a5c;};'use strict';var __importDefault=this&&this[a89_0x326e('0x0')]||function(_0x4eb4f7){return _0x4eb4f7&&_0x4eb4f7[a89_0x326e('0x1')]?_0x4eb4f7:{'default':_0x4eb4f7};};Object[a89_0x326e('0x2')](exports,a89_0x326e('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a89_0x326e('0x3')));const express_1=__importDefault(require(a89_0x326e('0x4')));const sequelize_utils_1=__importDefault(require(a89_0x326e('0x5')));const router=express_1[a89_0x326e('0x6')][a89_0x326e('0x7')]();class EventsRoute{constructor(_0x2df616){router['post']('/report_event',_0x2df616[a89_0x326e('0x8')]);const _0x59b8d6=new router_utils_1[(a89_0x326e('0x6'))](_0x2df616,router,null,[{'model':sequelize_utils_1['default'][a89_0x326e('0x9')][a89_0x326e('0xa')],'attributes':['id',a89_0x326e('0xb')]},{'model':sequelize_utils_1[a89_0x326e('0x6')]['models'][a89_0x326e('0xc')],'attributes':['id',a89_0x326e('0xd')]},{'model':sequelize_utils_1[a89_0x326e('0x6')][a89_0x326e('0x9')][a89_0x326e('0xe')],'attributes':['id','name']}],[['reported_at','desc']]);return router;}}exports[a89_0x326e('0x6')]=EventsRoute;