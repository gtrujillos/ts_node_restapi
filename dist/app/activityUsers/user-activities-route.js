var a41_0x2707=['__esModule','express','default','Router','get','/latest','latestByUser'];(function(_0x29ff41,_0x2b8718){var _0x37fae9=function(_0x202fd0){while(--_0x202fd0){_0x29ff41['push'](_0x29ff41['shift']());}};_0x37fae9(++_0x2b8718);}(a41_0x2707,0xaf));var a41_0x2e1e=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a41_0x2707[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x273db7){return _0x273db7&&_0x273db7[a41_0x2e1e('0x0')]?_0x273db7:{'default':_0x273db7};};Object['defineProperty'](exports,a41_0x2e1e('0x0'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a41_0x2e1e('0x1')));const router=express_1[a41_0x2e1e('0x2')][a41_0x2e1e('0x3')]();class UserActivitiesRoute{constructor(_0xbb6197){router[a41_0x2e1e('0x4')](a41_0x2e1e('0x5'),_0xbb6197['latest']);router[a41_0x2e1e('0x4')]('/latest_by_user',_0xbb6197[a41_0x2e1e('0x6')]);const _0x52ced6=new router_utils_1[(a41_0x2e1e('0x2'))](_0xbb6197,router,null);return router;}}exports['default']=UserActivitiesRoute;