var a29_0x1f68=['__esModule','./auth-controller','express','Router','post','login','/create-account','createAccount','default','defineProperty'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a29_0x1f68,0x95));var a29_0x27b7=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a29_0x1f68[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1c3a83){return _0x1c3a83&&_0x1c3a83['__esModule']?_0x1c3a83:{'default':_0x1c3a83};};Object[a29_0x27b7('0x0')](exports,a29_0x27b7('0x1'),{'value':!![]});const auth_controller_1=__importDefault(require(a29_0x27b7('0x2')));const express_1=__importDefault(require(a29_0x27b7('0x3')));const router=express_1['default'][a29_0x27b7('0x4')]();class AuthRoute{constructor(_0x17dab4){const _0x52b38d=new auth_controller_1['default'](_0x17dab4);router[a29_0x27b7('0x5')]('/login',_0x52b38d[a29_0x27b7('0x6')]);router['post'](a29_0x27b7('0x7'),_0x52b38d[a29_0x27b7('0x8')]);return router;}}exports[a29_0x27b7('0x9')]=AuthRoute;