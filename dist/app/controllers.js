var a19_0x5dcb=['./devices/devices-controller','./players/players-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller','./alarms/alarms-controller','authenticationController','default','usersModel','devicesModel','playersController','playersModel','vehiclesController','vehiclesCountController','alarmsModel','__importDefault','__esModule','defineProperty','./authentication/authentication-controller'];(function(_0x497fe2,_0x580302){var _0x963821=function(_0x447792){while(--_0x447792){_0x497fe2['push'](_0x497fe2['shift']());}};_0x963821(++_0x580302);}(a19_0x5dcb,0x1d0));var a19_0x3535=function(_0x562115,_0x117259){_0x562115=_0x562115-0x0;var _0x245112=a19_0x5dcb[_0x562115];return _0x245112;};'use strict';var __importDefault=this&&this[a19_0x3535('0x0')]||function(_0x3e63b1){return _0x3e63b1&&_0x3e63b1[a19_0x3535('0x1')]?_0x3e63b1:{'default':_0x3e63b1};};Object[a19_0x3535('0x2')](exports,a19_0x3535('0x1'),{'value':!![]});const authentication_controller_1=__importDefault(require(a19_0x3535('0x3')));const devices_controller_1=__importDefault(require(a19_0x3535('0x4')));const players_controller_1=__importDefault(require(a19_0x3535('0x5')));const vehicles_controller_1=__importDefault(require(a19_0x3535('0x6')));const vehicles_count_controller_1=__importDefault(require(a19_0x3535('0x7')));const alarms_controller_1=__importDefault(require(a19_0x3535('0x8')));class Controllers{constructor(_0x1d9871){this[a19_0x3535('0x9')]=new authentication_controller_1[(a19_0x3535('0xa'))](_0x1d9871[a19_0x3535('0xb')]);this['devicesController']=new devices_controller_1[(a19_0x3535('0xa'))](_0x1d9871[a19_0x3535('0xc')]);this[a19_0x3535('0xd')]=new players_controller_1[(a19_0x3535('0xa'))](_0x1d9871[a19_0x3535('0xe')]);this[a19_0x3535('0xf')]=new vehicles_controller_1[(a19_0x3535('0xa'))](_0x1d9871['vehiclesModel']);this[a19_0x3535('0x10')]=new vehicles_count_controller_1[(a19_0x3535('0xa'))](_0x1d9871['vehiclesCountModel'],this[a19_0x3535('0xf')]);this['alarmsController']=new alarms_controller_1['default'](_0x1d9871[a19_0x3535('0x11')]);}}exports['default']=Controllers;