var a21_0x4f26=['express','default','__importDefault','defineProperty','__esModule','../../infrastructure/router-utils'];(function(_0x54bc80,_0x1822a5){var _0x12f469=function(_0x52f622){while(--_0x52f622){_0x54bc80['push'](_0x54bc80['shift']());}};_0x12f469(++_0x1822a5);}(a21_0x4f26,0x19a));var a21_0x3b92=function(_0x4f84c9,_0x2d13e6){_0x4f84c9=_0x4f84c9-0x0;var _0x1e112f=a21_0x4f26[_0x4f84c9];return _0x1e112f;};'use strict';var __importDefault=this&&this[a21_0x3b92('0x0')]||function(_0x58aaaf){return _0x58aaaf&&_0x58aaaf['__esModule']?_0x58aaaf:{'default':_0x58aaaf};};Object[a21_0x3b92('0x1')](exports,a21_0x3b92('0x2'),{'value':!![]});const device_types_controller_1=__importDefault(require('./device-types-controller'));const router_utils_1=__importDefault(require(a21_0x3b92('0x3')));const express_1=__importDefault(require(a21_0x3b92('0x4')));const router=express_1[a21_0x3b92('0x5')]['Router']();class DeviceTypesRoute{constructor(_0x4fbddf){const _0x337c9f=new device_types_controller_1['default'](_0x4fbddf);const _0x4889d8=new router_utils_1[(a21_0x3b92('0x5'))](_0x337c9f,router,null);return router;}}exports['default']=DeviceTypesRoute;