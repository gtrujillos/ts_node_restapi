var a65_0x1a14=['./plates/plates-route','use','isLoggedIn','usersModel','default','userTypesModel','deviceTypesModel','companiesModel','brandsModel','vehiclesModel','passCountingsModel','locationPointsModel','syncFilesModel','devicesModel','alarmsModel','platesModel','playerDevicesModel','/companies','/user_types','/authentication','/device_types','/devices','/brands','/vehicles','/pass_countings','/location_points','/sync_files','/alarms','/plates','/players','__importDefault','__esModule','../infrastructure/auth-utils','./users/users-route','./passCountings/pass-countings-route','./locationPoints/location-points-route','./devices/devices-route','./companies/companies-route','./deviceTypes/device-types-route','./authentication/authentication-route','./players/players-route','./playerDevices/player-devices-route'];(function(_0x293bf4,_0x2376f6){var _0x28e348=function(_0x39cb23){while(--_0x39cb23){_0x293bf4['push'](_0x293bf4['shift']());}};_0x28e348(++_0x2376f6);}(a65_0x1a14,0x144));var a65_0x31ab=function(_0x3b1f1d,_0x5ecd5b){_0x3b1f1d=_0x3b1f1d-0x0;var _0x77ddaa=a65_0x1a14[_0x3b1f1d];return _0x77ddaa;};'use strict';var __importDefault=this&&this[a65_0x31ab('0x0')]||function(_0x424646){return _0x424646&&_0x424646[a65_0x31ab('0x1')]?_0x424646:{'default':_0x424646};};Object['defineProperty'](exports,a65_0x31ab('0x1'),{'value':!![]});const authUtils=require(a65_0x31ab('0x2'));const users_route_1=__importDefault(require(a65_0x31ab('0x3')));const pass_countings_route_1=__importDefault(require(a65_0x31ab('0x4')));const location_points_route_1=__importDefault(require(a65_0x31ab('0x5')));const sync_files_route_1=__importDefault(require('./syncFiles/sync-files-route'));const devices_route_1=__importDefault(require(a65_0x31ab('0x6')));const companies_route_1=__importDefault(require(a65_0x31ab('0x7')));const user_types_route_1=__importDefault(require('./userTypes/user-types-route'));const brands_route_1=__importDefault(require('./brands/brands-route'));const device_types_route_1=__importDefault(require(a65_0x31ab('0x8')));const authentication_route_1=__importDefault(require(a65_0x31ab('0x9')));const alarms_route_1=__importDefault(require('./alarms/alarms-route'));const players_route_1=__importDefault(require(a65_0x31ab('0xa')));const player_devices_route_1=__importDefault(require(a65_0x31ab('0xb')));const plates_route_1=__importDefault(require(a65_0x31ab('0xc')));function default_1(_0x173558,_0x455909,_0x3281f4){_0x173558[a65_0x31ab('0xd')](authUtils[a65_0x31ab('0xe')]);const _0x19a5e2=new authentication_route_1['default'](_0x3281f4[a65_0x31ab('0xf')]);const _0x26f9bc=new user_types_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x11')]);const _0x2b578f=new device_types_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x12')]);const _0x34249d=new users_route_1['default'](_0x3281f4[a65_0x31ab('0xf')]);const _0x3a00b1=new companies_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x13')]);const _0x2ca36d=new brands_route_1['default'](_0x3281f4[a65_0x31ab('0x14')]);const _0x274ca0=new companies_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x15')]);const _0x4bdcb6=new pass_countings_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x16')]);const _0x461ede=new location_points_route_1['default'](_0x3281f4[a65_0x31ab('0x17')]);const _0x2bb9f4=new sync_files_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x18')]);const _0x32019a=new devices_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x19')]);const _0x43f67a=new alarms_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x1a')]);const _0x544644=new plates_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x1b')]);const _0x3e7961=new players_route_1[(a65_0x31ab('0x10'))](_0x3281f4['playersModel']);const _0x21c92c=new player_devices_route_1[(a65_0x31ab('0x10'))](_0x3281f4[a65_0x31ab('0x1c')]);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x1d'),_0x3a00b1);_0x173558['use'](a65_0x31ab('0x1e'),_0x26f9bc);_0x173558['use']('/users',_0x34249d);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x1f'),_0x19a5e2);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x20'),_0x2b578f);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x21'),_0x32019a);_0x173558['use'](a65_0x31ab('0x22'),_0x2ca36d);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x23'),_0x274ca0);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x24'),_0x4bdcb6);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x25'),_0x461ede);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x26'),_0x2bb9f4);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x27'),_0x43f67a);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x28'),_0x544644);_0x173558[a65_0x31ab('0xd')](a65_0x31ab('0x29'),_0x3e7961);_0x173558['use']('/player_devices',_0x21c92c);}exports[a65_0x31ab('0x10')]=default_1;