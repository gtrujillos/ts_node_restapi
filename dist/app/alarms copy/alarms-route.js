var a8_0xf0e8=['./alarms-controller','Router','default','post','/reportAlarm','reportAlarm','__importDefault','defineProperty','__esModule','../../infrastructure/router-utils','express'];(function(_0x4b5b83,_0x16c817){var _0x19b468=function(_0x3003e8){while(--_0x3003e8){_0x4b5b83['push'](_0x4b5b83['shift']());}};_0x19b468(++_0x16c817);}(a8_0xf0e8,0x1b3));var a8_0xe6d7=function(_0x1bcca6,_0x33f534){_0x1bcca6=_0x1bcca6-0x0;var _0x5f9e7a=a8_0xf0e8[_0x1bcca6];return _0x5f9e7a;};'use strict';var __importDefault=this&&this[a8_0xe6d7('0x0')]||function(_0x1e291f){return _0x1e291f&&_0x1e291f['__esModule']?_0x1e291f:{'default':_0x1e291f};};Object[a8_0xe6d7('0x1')](exports,a8_0xe6d7('0x2'),{'value':!![]});const router_utils_1=__importDefault(require(a8_0xe6d7('0x3')));const express_1=__importDefault(require(a8_0xe6d7('0x4')));const alarms_controller_1=__importDefault(require(a8_0xe6d7('0x5')));const router=express_1['default'][a8_0xe6d7('0x6')]();class AlarmsRoute{constructor(_0x25b347){const _0x1dc30e=new alarms_controller_1[(a8_0xe6d7('0x7'))](_0x25b347);router[a8_0xe6d7('0x8')](a8_0xe6d7('0x9'),_0x1dc30e[a8_0xe6d7('0xa')]);const _0x11dba0=new router_utils_1['default'](_0x1dc30e,router,null);return router;}}exports[a8_0xe6d7('0x7')]=AlarmsRoute;