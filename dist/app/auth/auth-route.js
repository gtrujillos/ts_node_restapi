var a10_0x48b3=['/create-account','createAccount','__importDefault','__esModule','defineProperty','express','default','Router','/login','login','post'];(function(_0xe83114,_0x39ecff){var _0x2c2dd8=function(_0x2332b9){while(--_0x2332b9){_0xe83114['push'](_0xe83114['shift']());}};_0x2c2dd8(++_0x39ecff);}(a10_0x48b3,0x65));var a10_0x651d=function(_0x2fbeca,_0x302170){_0x2fbeca=_0x2fbeca-0x0;var _0x1ae02f=a10_0x48b3[_0x2fbeca];return _0x1ae02f;};'use strict';var __importDefault=this&&this[a10_0x651d('0x0')]||function(_0x35f755){return _0x35f755&&_0x35f755[a10_0x651d('0x1')]?_0x35f755:{'default':_0x35f755};};Object[a10_0x651d('0x2')](exports,a10_0x651d('0x1'),{'value':!![]});const auth_controller_1=__importDefault(require('./auth-controller'));const express_1=__importDefault(require(a10_0x651d('0x3')));const router=express_1[a10_0x651d('0x4')][a10_0x651d('0x5')]();class AuthRoute{constructor(_0x248277){const _0x4c5bdc=new auth_controller_1['default'](_0x248277);router['post'](a10_0x651d('0x6'),_0x4c5bdc[a10_0x651d('0x7')]);router[a10_0x651d('0x8')](a10_0x651d('0x9'),_0x4c5bdc[a10_0x651d('0xa')]);return router;}}exports[a10_0x651d('0x4')]=AuthRoute;