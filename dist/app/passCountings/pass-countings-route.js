var a99_0x50d2=['/find_by_month/:direction','/find_by_day/:direction','findByDay','/find_by_hour/:direction','__esModule','defineProperty','./pass-countings-controller','express','default','Router','get'];(function(_0x1fd29a,_0x3ed791){var _0x44f925=function(_0x10bcf3){while(--_0x10bcf3){_0x1fd29a['push'](_0x1fd29a['shift']());}};_0x44f925(++_0x3ed791);}(a99_0x50d2,0x7d));var a99_0x28b8=function(_0x39cbc4,_0x398e92){_0x39cbc4=_0x39cbc4-0x0;var _0x381982=a99_0x50d2[_0x39cbc4];return _0x381982;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2939dd){return _0x2939dd&&_0x2939dd[a99_0x28b8('0x0')]?_0x2939dd:{'default':_0x2939dd};};Object[a99_0x28b8('0x1')](exports,a99_0x28b8('0x0'),{'value':!![]});const pass_countings_controller_1=__importDefault(require(a99_0x28b8('0x2')));const express_1=__importDefault(require(a99_0x28b8('0x3')));const router=express_1[a99_0x28b8('0x4')][a99_0x28b8('0x5')]();class PassCountingsRoute{constructor(_0x269099){const _0x678519=new pass_countings_controller_1[(a99_0x28b8('0x4'))](_0x269099);router[a99_0x28b8('0x6')](a99_0x28b8('0x7'),_0x678519['findByMonth']);router[a99_0x28b8('0x6')](a99_0x28b8('0x8'),_0x678519[a99_0x28b8('0x9')]);router['get'](a99_0x28b8('0xa'),_0x678519['findByHour']);return router;}}exports['default']=PassCountingsRoute;