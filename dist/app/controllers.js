var a19_0x550c=['authenticationController','default','usersModel','devicesController','playersController','playersModel','vehiclesController','vehiclesModel','vehiclesCountController','vehiclesCountModel','__importDefault','__esModule','defineProperty','./devices/devices-controller','./players/players-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller'];(function(_0x28577d,_0x536d69){var _0x5eaa0e=function(_0x5bd4c8){while(--_0x5bd4c8){_0x28577d['push'](_0x28577d['shift']());}};_0x5eaa0e(++_0x536d69);}(a19_0x550c,0x1e6));var a19_0x56ae=function(_0x41bdc0,_0x3b9b28){_0x41bdc0=_0x41bdc0-0x0;var _0x2f8a0c=a19_0x550c[_0x41bdc0];return _0x2f8a0c;};'use strict';var __importDefault=this&&this[a19_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a19_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a19_0x56ae('0x2')](exports,a19_0x56ae('0x1'),{'value':!![]});const authentication_controller_1=__importDefault(require('./authentication/authentication-controller'));const devices_controller_1=__importDefault(require(a19_0x56ae('0x3')));const players_controller_1=__importDefault(require(a19_0x56ae('0x4')));const vehicles_controller_1=__importDefault(require(a19_0x56ae('0x5')));const vehicles_count_controller_1=__importDefault(require(a19_0x56ae('0x6')));class Controllers{constructor(_0x558098){this[a19_0x56ae('0x7')]=new authentication_controller_1[(a19_0x56ae('0x8'))](_0x558098[a19_0x56ae('0x9')]);this[a19_0x56ae('0xa')]=new devices_controller_1['default'](_0x558098['devicesModel']);this[a19_0x56ae('0xb')]=new players_controller_1['default'](_0x558098[a19_0x56ae('0xc')]);this[a19_0x56ae('0xd')]=new vehicles_controller_1[(a19_0x56ae('0x8'))](_0x558098[a19_0x56ae('0xe')]);this[a19_0x56ae('0xf')]=new vehicles_count_controller_1['default'](_0x558098[a19_0x56ae('0x10')],this[a19_0x56ae('0xd')]);}}exports[a19_0x56ae('0x8')]=Controllers;