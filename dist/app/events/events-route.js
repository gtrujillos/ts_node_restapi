var a89_0x5b1c=['reportEvent','models','vehiclesModel','desc','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','../../infrastructure/sequelize-utils','default','post'];(function(_0x94486c,_0x59ecb6){var _0x58f79b=function(_0x5724b7){while(--_0x5724b7){_0x94486c['push'](_0x94486c['shift']());}};_0x58f79b(++_0x59ecb6);}(a89_0x5b1c,0x185));var a89_0x2dc1=function(_0x1a2628,_0x528615){_0x1a2628=_0x1a2628-0x0;var _0x4025a2=a89_0x5b1c[_0x1a2628];return _0x4025a2;};'use strict';var __importDefault=this&&this[a89_0x2dc1('0x0')]||function(_0x387a11){return _0x387a11&&_0x387a11[a89_0x2dc1('0x1')]?_0x387a11:{'default':_0x387a11};};Object[a89_0x2dc1('0x2')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a89_0x2dc1('0x3')));const express_1=__importDefault(require('express'));const sequelize_utils_1=__importDefault(require(a89_0x2dc1('0x4')));const router=express_1[a89_0x2dc1('0x5')]['Router']();class EventsRoute{constructor(_0x43324e){router[a89_0x2dc1('0x6')]('/report_event',_0x43324e[a89_0x2dc1('0x7')]);const _0x56223f=new router_utils_1[(a89_0x2dc1('0x5'))](_0x43324e,router,null,[{'model':sequelize_utils_1[a89_0x2dc1('0x5')][a89_0x2dc1('0x8')][a89_0x2dc1('0x9')],'attributes':['id','plate']},{'model':sequelize_utils_1['default'][a89_0x2dc1('0x8')]['eventTypesModel'],'attributes':['id','name']},{'model':sequelize_utils_1[a89_0x2dc1('0x5')][a89_0x2dc1('0x8')]['eventStatusModel'],'attributes':['id','name']}],[['reported_at',a89_0x2dc1('0xa')]]);return router;}}exports[a89_0x2dc1('0x5')]=EventsRoute;