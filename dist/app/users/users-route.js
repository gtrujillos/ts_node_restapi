var a81_0x2a75=['__esModule','../../infrastructure/router-utils','default','__importDefault','defineProperty'];(function(_0x112f9f,_0x14a697){var _0x435cc5=function(_0x5c1eb9){while(--_0x5c1eb9){_0x112f9f['push'](_0x112f9f['shift']());}};_0x435cc5(++_0x14a697);}(a81_0x2a75,0xb7));var a81_0x4549=function(_0x21f362,_0x3ac0cb){_0x21f362=_0x21f362-0x0;var _0x398544=a81_0x2a75[_0x21f362];return _0x398544;};'use strict';var __importDefault=this&&this[a81_0x4549('0x0')]||function(_0x22f1b2){return _0x22f1b2&&_0x22f1b2['__esModule']?_0x22f1b2:{'default':_0x22f1b2};};Object[a81_0x4549('0x1')](exports,a81_0x4549('0x2'),{'value':!![]});const users_controller_1=__importDefault(require('./users-controller'));const router_utils_1=__importDefault(require(a81_0x4549('0x3')));const express_1=__importDefault(require('express'));const router=express_1[a81_0x4549('0x4')]['Router']();class UsersRoute{constructor(_0x2a005c){const _0x3c3605=new users_controller_1[(a81_0x4549('0x4'))](_0x2a005c);const _0x2f4f54=new router_utils_1[(a81_0x4549('0x4'))](_0x3c3605,router,null);return router;}}exports['default']=UsersRoute;