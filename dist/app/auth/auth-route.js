var a29_0x48b3=['/create-account','createAccount','__importDefault','__esModule','defineProperty','express','default','Router','/login','login','post'];(function(_0x2616f4,_0x1ad850){var _0x3d410d=function(_0x42f8f8){while(--_0x42f8f8){_0x2616f4['push'](_0x2616f4['shift']());}};_0x3d410d(++_0x1ad850);}(a29_0x48b3,0x65));var a29_0x651d=function(_0x35b1ea,_0x31283f){_0x35b1ea=_0x35b1ea-0x0;var _0x1f1e80=a29_0x48b3[_0x35b1ea];return _0x1f1e80;};'use strict';var __importDefault=this&&this[a29_0x651d('0x0')]||function(_0x35f755){return _0x35f755&&_0x35f755[a29_0x651d('0x1')]?_0x35f755:{'default':_0x35f755};};Object[a29_0x651d('0x2')](exports,a29_0x651d('0x1'),{'value':!![]});const auth_controller_1=__importDefault(require('./auth-controller'));const express_1=__importDefault(require(a29_0x651d('0x3')));const router=express_1[a29_0x651d('0x4')][a29_0x651d('0x5')]();class AuthRoute{constructor(_0x248277){const _0x4c5bdc=new auth_controller_1['default'](_0x248277);router['post'](a29_0x651d('0x6'),_0x4c5bdc[a29_0x651d('0x7')]);router[a29_0x651d('0x8')](a29_0x651d('0x9'),_0x4c5bdc[a29_0x651d('0xa')]);return router;}}exports[a29_0x651d('0x4')]=AuthRoute;