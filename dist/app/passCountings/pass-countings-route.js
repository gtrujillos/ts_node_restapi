var a37_0x4566=['/find_by_month/:direction','findByMonth','/find_by_day/:direction','get','/find_by_hour/:direction','__importDefault','__esModule','defineProperty','express','Router','default'];(function(_0x27356b,_0x36f27c){var _0x4212af=function(_0x44f0bf){while(--_0x44f0bf){_0x27356b['push'](_0x27356b['shift']());}};_0x4212af(++_0x36f27c);}(a37_0x4566,0x102));var a37_0x5f4c=function(_0x26e36a,_0x6b98ab){_0x26e36a=_0x26e36a-0x0;var _0x35e4c2=a37_0x4566[_0x26e36a];return _0x35e4c2;};'use strict';var __importDefault=this&&this[a37_0x5f4c('0x0')]||function(_0x3ebb02){return _0x3ebb02&&_0x3ebb02[a37_0x5f4c('0x1')]?_0x3ebb02:{'default':_0x3ebb02};};Object[a37_0x5f4c('0x2')](exports,a37_0x5f4c('0x1'),{'value':!![]});const pass_countings_controller_1=__importDefault(require('./pass-countings-controller'));const express_1=__importDefault(require(a37_0x5f4c('0x3')));const router=express_1['default'][a37_0x5f4c('0x4')]();class PassCountingsRoute{constructor(_0x523c70){const _0x5a8158=new pass_countings_controller_1[(a37_0x5f4c('0x5'))](_0x523c70);router['get'](a37_0x5f4c('0x6'),_0x5a8158[a37_0x5f4c('0x7')]);router['get'](a37_0x5f4c('0x8'),_0x5a8158['findByDay']);router[a37_0x5f4c('0x9')](a37_0x5f4c('0xa'),_0x5a8158['findByHour']);return router;}}exports['default']=PassCountingsRoute;