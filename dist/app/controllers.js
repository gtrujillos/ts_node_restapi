var a19_0xff71=['playersController','vehiclesController','vehiclesCountController','alarmsController','__esModule','defineProperty','./authentication/authentication-controller','./devices/devices-controller','./vehicles/vehicles-controller','./alarms/alarms-controller','authenticationController','default','usersModel','devicesController'];(function(_0x570752,_0x4d83fc){var _0x375ad7=function(_0x2a4b0f){while(--_0x2a4b0f){_0x570752['push'](_0x570752['shift']());}};_0x375ad7(++_0x4d83fc);}(a19_0xff71,0xac));var a19_0x18c3=function(_0x221343,_0x281544){_0x221343=_0x221343-0x0;var _0x9d2581=a19_0xff71[_0x221343];return _0x9d2581;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3b8082){return _0x3b8082&&_0x3b8082[a19_0x18c3('0x0')]?_0x3b8082:{'default':_0x3b8082};};Object[a19_0x18c3('0x1')](exports,a19_0x18c3('0x0'),{'value':!![]});const authentication_controller_1=__importDefault(require(a19_0x18c3('0x2')));const devices_controller_1=__importDefault(require(a19_0x18c3('0x3')));const players_controller_1=__importDefault(require('./players/players-controller'));const vehicles_controller_1=__importDefault(require(a19_0x18c3('0x4')));const vehicles_count_controller_1=__importDefault(require('./vehiclesCount/vehicles-count-controller'));const alarms_controller_1=__importDefault(require(a19_0x18c3('0x5')));class Controllers{constructor(_0x124579){this[a19_0x18c3('0x6')]=new authentication_controller_1[(a19_0x18c3('0x7'))](_0x124579[a19_0x18c3('0x8')]);this[a19_0x18c3('0x9')]=new devices_controller_1[(a19_0x18c3('0x7'))](_0x124579['devicesModel']);this[a19_0x18c3('0xa')]=new players_controller_1['default'](_0x124579['playersModel']);this[a19_0x18c3('0xb')]=new vehicles_controller_1[(a19_0x18c3('0x7'))](_0x124579['vehiclesModel']);this[a19_0x18c3('0xc')]=new vehicles_count_controller_1[(a19_0x18c3('0x7'))](_0x124579['vehiclesCountModel'],this[a19_0x18c3('0xb')]);this[a19_0x18c3('0xd')]=new alarms_controller_1[(a19_0x18c3('0x7'))](_0x124579['alarmsModel']);}}exports[a19_0x18c3('0x7')]=Controllers;