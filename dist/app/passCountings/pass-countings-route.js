var a38_0x2c76=['findByDay','/find_by_hour/:direction','__importDefault','__esModule','defineProperty','express','default','get','/find_by_month/:direction','findByMonth','/find_by_day/:direction'];(function(_0x5375e9,_0x8c9edc){var _0x3fb5b4=function(_0x2d5709){while(--_0x2d5709){_0x5375e9['push'](_0x5375e9['shift']());}};_0x3fb5b4(++_0x8c9edc);}(a38_0x2c76,0x1af));var a38_0xc881=function(_0x260b63,_0x3915c8){_0x260b63=_0x260b63-0x0;var _0x33d27e=a38_0x2c76[_0x260b63];return _0x33d27e;};'use strict';var __importDefault=this&&this[a38_0xc881('0x0')]||function(_0x486e0c){return _0x486e0c&&_0x486e0c[a38_0xc881('0x1')]?_0x486e0c:{'default':_0x486e0c};};Object[a38_0xc881('0x2')](exports,a38_0xc881('0x1'),{'value':!![]});const pass_countings_controller_1=__importDefault(require('./pass-countings-controller'));const express_1=__importDefault(require(a38_0xc881('0x3')));const router=express_1[a38_0xc881('0x4')]['Router']();class PassCountingsRoute{constructor(_0x3dfa38){const _0x4f8968=new pass_countings_controller_1[(a38_0xc881('0x4'))](_0x3dfa38);router[a38_0xc881('0x5')](a38_0xc881('0x6'),_0x4f8968[a38_0xc881('0x7')]);router[a38_0xc881('0x5')](a38_0xc881('0x8'),_0x4f8968[a38_0xc881('0x9')]);router['get'](a38_0xc881('0xa'),_0x4f8968['findByHour']);return router;}}exports[a38_0xc881('0x4')]=PassCountingsRoute;