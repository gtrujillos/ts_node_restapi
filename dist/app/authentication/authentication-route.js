var a12_0x17ad=['post','/login','createAccount','__importDefault','__esModule','defineProperty','./authentication-controller','default','Router'];(function(_0x28e534,_0x10d39c){var _0x3d7a7f=function(_0x4f4a73){while(--_0x4f4a73){_0x28e534['push'](_0x28e534['shift']());}};_0x3d7a7f(++_0x10d39c);}(a12_0x17ad,0x1bc));var a12_0x3d9f=function(_0x441abd,_0x491a08){_0x441abd=_0x441abd-0x0;var _0x283147=a12_0x17ad[_0x441abd];return _0x283147;};'use strict';var __importDefault=this&&this[a12_0x3d9f('0x0')]||function(_0x16f03d){return _0x16f03d&&_0x16f03d[a12_0x3d9f('0x1')]?_0x16f03d:{'default':_0x16f03d};};Object[a12_0x3d9f('0x2')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require('express'));const authentication_controller_1=__importDefault(require(a12_0x3d9f('0x3')));const router=express_1[a12_0x3d9f('0x4')][a12_0x3d9f('0x5')]();class AuthenticationRoute{constructor(_0x3652f1){const _0x30e506=new authentication_controller_1[(a12_0x3d9f('0x4'))](_0x3652f1);router[a12_0x3d9f('0x6')](a12_0x3d9f('0x7'),_0x30e506['login']);router[a12_0x3d9f('0x6')]('/create_account',_0x30e506[a12_0x3d9f('0x8')]);return router;}}exports[a12_0x3d9f('0x4')]=AuthenticationRoute;