var a10_0x3c82=['login','/create-account','__importDefault','__esModule','defineProperty','express','default','Router','post'];(function(_0x3bb18d,_0x74dfcc){var _0x4f37e6=function(_0x736c42){while(--_0x736c42){_0x3bb18d['push'](_0x3bb18d['shift']());}};_0x4f37e6(++_0x74dfcc);}(a10_0x3c82,0x12b));var a10_0xa087=function(_0x54386c,_0x218267){_0x54386c=_0x54386c-0x0;var _0x10ea80=a10_0x3c82[_0x54386c];return _0x10ea80;};'use strict';var __importDefault=this&&this[a10_0xa087('0x0')]||function(_0x291ebd){return _0x291ebd&&_0x291ebd[a10_0xa087('0x1')]?_0x291ebd:{'default':_0x291ebd};};Object[a10_0xa087('0x2')](exports,a10_0xa087('0x1'),{'value':!![]});const auth_controller_1=__importDefault(require('./auth-controller'));const express_1=__importDefault(require(a10_0xa087('0x3')));const router=express_1[a10_0xa087('0x4')][a10_0xa087('0x5')]();class AuthRoute{constructor(_0x3e08c5){const _0x296519=new auth_controller_1[(a10_0xa087('0x4'))](_0x3e08c5);router[a10_0xa087('0x6')]('/login',_0x296519[a10_0xa087('0x7')]);router[a10_0xa087('0x6')](a10_0xa087('0x8'),_0x296519['createAccount']);return router;}}exports[a10_0xa087('0x4')]=AuthRoute;