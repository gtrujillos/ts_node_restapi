var a80_0x2ebf=['default','getInstance','vehiclesModel','plate','eventTypesModel','name','eventStatusModel','reported_at','defineProperty','express','../models','post','/report_event','reportEvent','get','/count_new_for_user'];(function(_0x1341be,_0x310d44){var _0xfedb6=function(_0x964903){while(--_0x964903){_0x1341be['push'](_0x1341be['shift']());}};_0xfedb6(++_0x310d44);}(a80_0x2ebf,0xf8));var a80_0x2e52=function(_0x5d8717,_0x596ad1){_0x5d8717=_0x5d8717-0x0;var _0x575127=a80_0x2ebf[_0x5d8717];return _0x575127;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2c5485){return _0x2c5485&&_0x2c5485['__esModule']?_0x2c5485:{'default':_0x2c5485};};Object[a80_0x2e52('0x0')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a80_0x2e52('0x1')));const models_1=__importDefault(require(a80_0x2e52('0x2')));const router=express_1['default']['Router']();class EventsRoute{constructor(_0x234b46){router[a80_0x2e52('0x3')](a80_0x2e52('0x4'),_0x234b46[a80_0x2e52('0x5')]);router[a80_0x2e52('0x6')](a80_0x2e52('0x7'),_0x234b46['countNewForUser']);const _0x343afb=new router_utils_1[(a80_0x2e52('0x8'))](_0x234b46,router,null,[{'model':models_1[a80_0x2e52('0x8')][a80_0x2e52('0x9')]()[a80_0x2e52('0xa')],'attributes':['id',a80_0x2e52('0xb')]},{'model':models_1['default']['getInstance']()[a80_0x2e52('0xc')],'attributes':['id',a80_0x2e52('0xd')]},{'model':models_1['default'][a80_0x2e52('0x9')]()[a80_0x2e52('0xe')],'attributes':['id',a80_0x2e52('0xd')]}],[[a80_0x2e52('0xf'),'desc']]);return router;}}exports[a80_0x2e52('0x8')]=EventsRoute;