var a19_0x16ee=['authenticationController','default','usersModel','devicesController','devicesModel','vehiclesController','vehiclesCountModel','alarmsController','alarmsModel','./authentication/authentication-controller','./devices/devices-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller'];(function(_0x2b5f72,_0x3799f0){var _0x53884d=function(_0x82161b){while(--_0x82161b){_0x2b5f72['push'](_0x2b5f72['shift']());}};_0x53884d(++_0x3799f0);}(a19_0x16ee,0x1a9));var a19_0x565d=function(_0x1b46a8,_0x4591e4){_0x1b46a8=_0x1b46a8-0x0;var _0x465396=a19_0x16ee[_0x1b46a8];return _0x465396;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1713bd){return _0x1713bd&&_0x1713bd['__esModule']?_0x1713bd:{'default':_0x1713bd};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const authentication_controller_1=__importDefault(require(a19_0x565d('0x0')));const devices_controller_1=__importDefault(require(a19_0x565d('0x1')));const players_controller_1=__importDefault(require('./players/players-controller'));const vehicles_controller_1=__importDefault(require(a19_0x565d('0x2')));const vehicles_count_controller_1=__importDefault(require(a19_0x565d('0x3')));const alarms_controller_1=__importDefault(require('./alarms/alarms-controller'));class Controllers{constructor(_0x4c08b8){this[a19_0x565d('0x4')]=new authentication_controller_1[(a19_0x565d('0x5'))](_0x4c08b8[a19_0x565d('0x6')]);this[a19_0x565d('0x7')]=new devices_controller_1[(a19_0x565d('0x5'))](_0x4c08b8[a19_0x565d('0x8')]);this['playersController']=new players_controller_1[(a19_0x565d('0x5'))](_0x4c08b8['playersModel']);this[a19_0x565d('0x9')]=new vehicles_controller_1[(a19_0x565d('0x5'))](_0x4c08b8['vehiclesModel']);this['vehiclesCountController']=new vehicles_count_controller_1[(a19_0x565d('0x5'))](_0x4c08b8[a19_0x565d('0xa')],this[a19_0x565d('0x9')]);this[a19_0x565d('0xb')]=new alarms_controller_1[(a19_0x565d('0x5'))](_0x4c08b8[a19_0x565d('0xc')]);}}exports['default']=Controllers;