var a47_0x4785=['/reportPlate','reportPlate','get','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','express','default','Router'];(function(_0x1da2ce,_0x4ab94e){var _0x250bc8=function(_0x6274ac){while(--_0x6274ac){_0x1da2ce['push'](_0x1da2ce['shift']());}};_0x250bc8(++_0x4ab94e);}(a47_0x4785,0x67));var a47_0x402b=function(_0x56c42c,_0x5a7a96){_0x56c42c=_0x56c42c-0x0;var _0x5657ac=a47_0x4785[_0x56c42c];return _0x5657ac;};'use strict';var __importDefault=this&&this[a47_0x402b('0x0')]||function(_0x459381){return _0x459381&&_0x459381[a47_0x402b('0x1')]?_0x459381:{'default':_0x459381};};Object[a47_0x402b('0x2')](exports,a47_0x402b('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a47_0x402b('0x3')));const express_1=__importDefault(require(a47_0x402b('0x4')));const plates_controller_1=__importDefault(require('./plates-controller'));const router=express_1[a47_0x402b('0x5')][a47_0x402b('0x6')]();class PlatesRoute{constructor(_0x56cdc1){const _0x48cd42=new plates_controller_1[(a47_0x402b('0x5'))](_0x56cdc1);router['post'](a47_0x402b('0x7'),_0x48cd42[a47_0x402b('0x8')]);router[a47_0x402b('0x9')]('/reportPlate',_0x48cd42['reportPlate']);router['all'](a47_0x402b('0x7'),_0x48cd42[a47_0x402b('0x8')]);const _0xa08f0=new router_utils_1['default'](_0x48cd42,router,null);return router;}}exports[a47_0x402b('0x5')]=PlatesRoute;