var a19_0x550c=['authenticationController','default','usersModel','devicesController','playersController','playersModel','vehiclesController','vehiclesModel','vehiclesCountController','vehiclesCountModel','__importDefault','__esModule','defineProperty','./devices/devices-controller','./players/players-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller'];(function(_0x576ea2,_0x1fdbfd){var _0x358d24=function(_0x232f51){while(--_0x232f51){_0x576ea2['push'](_0x576ea2['shift']());}};_0x358d24(++_0x1fdbfd);}(a19_0x550c,0x1e6));var a19_0x56ae=function(_0x26911f,_0x42ef24){_0x26911f=_0x26911f-0x0;var _0x3703e8=a19_0x550c[_0x26911f];return _0x3703e8;};'use strict';var __importDefault=this&&this[a19_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a19_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a19_0x56ae('0x2')](exports,a19_0x56ae('0x1'),{'value':!![]});const authentication_controller_1=__importDefault(require('./authentication/authentication-controller'));const devices_controller_1=__importDefault(require(a19_0x56ae('0x3')));const players_controller_1=__importDefault(require(a19_0x56ae('0x4')));const vehicles_controller_1=__importDefault(require(a19_0x56ae('0x5')));const vehicles_count_controller_1=__importDefault(require(a19_0x56ae('0x6')));class Controllers{constructor(_0x558098){this[a19_0x56ae('0x7')]=new authentication_controller_1[(a19_0x56ae('0x8'))](_0x558098[a19_0x56ae('0x9')]);this[a19_0x56ae('0xa')]=new devices_controller_1['default'](_0x558098['devicesModel']);this[a19_0x56ae('0xb')]=new players_controller_1['default'](_0x558098[a19_0x56ae('0xc')]);this[a19_0x56ae('0xd')]=new vehicles_controller_1[(a19_0x56ae('0x8'))](_0x558098[a19_0x56ae('0xe')]);this[a19_0x56ae('0xf')]=new vehicles_count_controller_1['default'](_0x558098[a19_0x56ae('0x10')],this[a19_0x56ae('0xd')]);}}exports[a19_0x56ae('0x8')]=Controllers;