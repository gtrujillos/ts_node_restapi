var a5_0x57dd=['__esModule','../../infrastructure/router-utils','default','Router','__importDefault'];(function(_0x26a4af,_0x1f93f0){var _0x5c0b63=function(_0x3d0e94){while(--_0x3d0e94){_0x26a4af['push'](_0x26a4af['shift']());}};_0x5c0b63(++_0x1f93f0);}(a5_0x57dd,0x19e));var a5_0x21ed=function(_0x3b3896,_0x2d80de){_0x3b3896=_0x3b3896-0x0;var _0x43b202=a5_0x57dd[_0x3b3896];return _0x43b202;};'use strict';var __importDefault=this&&this[a5_0x21ed('0x0')]||function(_0x277e51){return _0x277e51&&_0x277e51['__esModule']?_0x277e51:{'default':_0x277e51};};Object['defineProperty'](exports,a5_0x21ed('0x1'),{'value':!![]});const devices_controller_1=__importDefault(require('./devices-controller'));const router_utils_1=__importDefault(require(a5_0x21ed('0x2')));const express_1=__importDefault(require('express'));const router=express_1[a5_0x21ed('0x3')][a5_0x21ed('0x4')]();class DevicesRoute{constructor(_0x2b9e4b){const _0x38c0ea=new devices_controller_1[(a5_0x21ed('0x3'))](_0x2b9e4b);const _0x21140d=new router_utils_1[(a5_0x21ed('0x3'))](_0x38c0ea,router,null);return router;}}exports[a5_0x21ed('0x3')]=DevicesRoute;