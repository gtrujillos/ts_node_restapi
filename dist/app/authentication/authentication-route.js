var a40_0x5742=['/logout','logout','/username_taken','/create_account','createAccount','__importDefault','__esModule','defineProperty','express','default','Router','post','login','get'];(function(_0x29ca48,_0x5df2b6){var _0x2d6d07=function(_0x51c72f){while(--_0x51c72f){_0x29ca48['push'](_0x29ca48['shift']());}};_0x2d6d07(++_0x5df2b6);}(a40_0x5742,0x1c5));var a40_0x40a0=function(_0x574981,_0x1e2c70){_0x574981=_0x574981-0x0;var _0x162b21=a40_0x5742[_0x574981];return _0x162b21;};'use strict';var __importDefault=this&&this[a40_0x40a0('0x0')]||function(_0x3807d1){return _0x3807d1&&_0x3807d1[a40_0x40a0('0x1')]?_0x3807d1:{'default':_0x3807d1};};Object[a40_0x40a0('0x2')](exports,a40_0x40a0('0x1'),{'value':!![]});const express_1=__importDefault(require(a40_0x40a0('0x3')));const router=express_1[a40_0x40a0('0x4')][a40_0x40a0('0x5')]();class AuthenticationRoute{constructor(_0x258271){router[a40_0x40a0('0x6')]('/login',_0x258271[a40_0x40a0('0x7')]);router[a40_0x40a0('0x8')](a40_0x40a0('0x9'),_0x258271[a40_0x40a0('0xa')]);router['post'](a40_0x40a0('0xb'),_0x258271['usernameExist']);router['post'](a40_0x40a0('0xc'),_0x258271[a40_0x40a0('0xd')]);return router;}}exports[a40_0x40a0('0x4')]=AuthenticationRoute;