var a59_0x302d=['default','Router','post','/register','register','/report_status','get','/get_status/:user_uuid','__importDefault','__esModule','../../infrastructure/router-utils','./player-devices-controller'];(function(_0x5e8955,_0x85b0ea){var _0x316c34=function(_0x435a31){while(--_0x435a31){_0x5e8955['push'](_0x5e8955['shift']());}};_0x316c34(++_0x85b0ea);}(a59_0x302d,0x1ac));var a59_0x3ff5=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a59_0x302d[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a59_0x3ff5('0x0')]||function(_0x42aae0){return _0x42aae0&&_0x42aae0[a59_0x3ff5('0x1')]?_0x42aae0:{'default':_0x42aae0};};Object['defineProperty'](exports,a59_0x3ff5('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a59_0x3ff5('0x2')));const express_1=__importDefault(require('express'));const player_devices_controller_1=__importDefault(require(a59_0x3ff5('0x3')));const router=express_1[a59_0x3ff5('0x4')][a59_0x3ff5('0x5')]();class PlayerDevicesRoute{constructor(_0x33d752,_0x267ed8,_0x418c01){const _0x495792=new player_devices_controller_1[(a59_0x3ff5('0x4'))](_0x33d752,_0x267ed8,_0x418c01);router[a59_0x3ff5('0x6')](a59_0x3ff5('0x7'),_0x495792[a59_0x3ff5('0x8')]);router['post'](a59_0x3ff5('0x9'),_0x495792['reportStatus']);router[a59_0x3ff5('0xa')](a59_0x3ff5('0xb'),_0x495792['getStatus']);const _0x49ccdf=new router_utils_1[(a59_0x3ff5('0x4'))](_0x495792,router,null);return router;}}exports[a59_0x3ff5('0x4')]=PlayerDevicesRoute;