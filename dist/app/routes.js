var a65_0x46c4=['usersModel','default','vehiclesModel','deviceTypesModel','companiesModel','passCountingsModel','locationPointsModel','syncFilesModel','alarmsModel','vehiclesCountModel','playerDevicesModel','/companies','/user_types','/users','/authentication','/devices','/vehicles','/location_points','/sync_files','/vehicles-count','/players','/player_devices','__importDefault','__esModule','defineProperty','../infrastructure/auth-utils','./users/users-route','./syncFiles/sync-files-route','./devices/devices-route','./companies/companies-route','./userTypes/user-types-route','./brands/brands-route','./deviceTypes/device-types-route','./authentication/authentication-route','./playerDevices/player-devices-route','./devices/devices-controller','./vehiclesCount/vehicles-count-route','./vehicles/vehicles-controller','use','isLoggedIn'];(function(_0x4c6030,_0x28ba32){var _0x5e2d44=function(_0x5f07f6){while(--_0x5f07f6){_0x4c6030['push'](_0x4c6030['shift']());}};_0x5e2d44(++_0x28ba32);}(a65_0x46c4,0x1ce));var a65_0x4715=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a65_0x46c4[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a65_0x4715('0x0')]||function(_0x4deb77){return _0x4deb77&&_0x4deb77[a65_0x4715('0x1')]?_0x4deb77:{'default':_0x4deb77};};Object[a65_0x4715('0x2')](exports,a65_0x4715('0x1'),{'value':!![]});const authUtils=require(a65_0x4715('0x3'));const users_route_1=__importDefault(require(a65_0x4715('0x4')));const pass_countings_route_1=__importDefault(require('./passCountings/pass-countings-route'));const location_points_route_1=__importDefault(require('./locationPoints/location-points-route'));const sync_files_route_1=__importDefault(require(a65_0x4715('0x5')));const devices_route_1=__importDefault(require(a65_0x4715('0x6')));const companies_route_1=__importDefault(require(a65_0x4715('0x7')));const user_types_route_1=__importDefault(require(a65_0x4715('0x8')));const brands_route_1=__importDefault(require(a65_0x4715('0x9')));const device_types_route_1=__importDefault(require(a65_0x4715('0xa')));const authentication_route_1=__importDefault(require(a65_0x4715('0xb')));const alarms_route_1=__importDefault(require('./alarms/alarms-route'));const players_route_1=__importDefault(require('./players/players-route'));const player_devices_route_1=__importDefault(require(a65_0x4715('0xc')));const authentication_controller_1=__importDefault(require('./authentication/authentication-controller'));const devices_controller_1=__importDefault(require(a65_0x4715('0xd')));const players_controller_1=__importDefault(require('./players/players-controller'));const vehicles_count_route_1=__importDefault(require(a65_0x4715('0xe')));const vehicles_route_1=__importDefault(require('./vehicles/vehicles-route'));const vehicles_controller_1=__importDefault(require(a65_0x4715('0xf')));function default_1(_0x44290d,_0x4eb583,_0x2c65c3){_0x44290d[a65_0x4715('0x10')](authUtils[a65_0x4715('0x11')]);const _0x416446=new authentication_controller_1['default'](_0x2c65c3[a65_0x4715('0x12')]);const _0x290d06=new devices_controller_1[(a65_0x4715('0x13'))](_0x2c65c3['devicesModel']);const _0xb50a71=new players_controller_1[(a65_0x4715('0x13'))](_0x2c65c3['playersModel']);const _0x1f95e9=new vehicles_controller_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x14')]);const _0x4ce389=new authentication_route_1[(a65_0x4715('0x13'))](_0x416446);const _0x4559a3=new user_types_route_1[(a65_0x4715('0x13'))](_0x2c65c3['userTypesModel']);const _0x3156eb=new device_types_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x15')]);const _0x4031fd=new users_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x12')]);const _0x1f61a4=new companies_route_1['default'](_0x2c65c3[a65_0x4715('0x16')]);const _0x10aa48=new brands_route_1[(a65_0x4715('0x13'))](_0x2c65c3['brandsModel']);const _0x1c4aed=new vehicles_route_1[(a65_0x4715('0x13'))](_0x1f95e9);const _0x48f7e7=new pass_countings_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x17')]);const _0x33a9c2=new location_points_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x18')]);const _0x3f34d9=new sync_files_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x19')]);const _0x5b02c2=new devices_route_1[(a65_0x4715('0x13'))](_0x290d06);const _0x4cdae9=new alarms_route_1['default'](_0x2c65c3[a65_0x4715('0x1a')]);const _0x11953b=new vehicles_count_route_1['default'](_0x2c65c3[a65_0x4715('0x1b')],_0x1f95e9);const _0x3cb21f=new players_route_1[(a65_0x4715('0x13'))](_0xb50a71);const _0x268d10=new player_devices_route_1[(a65_0x4715('0x13'))](_0x2c65c3[a65_0x4715('0x1c')],_0x290d06,_0xb50a71);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x1d'),_0x1f61a4);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x1e'),_0x4559a3);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x1f'),_0x4031fd);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x20'),_0x4ce389);_0x44290d['use']('/device_types',_0x3156eb);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x21'),_0x5b02c2);_0x44290d[a65_0x4715('0x10')]('/brands',_0x10aa48);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x22'),_0x1c4aed);_0x44290d[a65_0x4715('0x10')]('/pass_countings',_0x48f7e7);_0x44290d['use'](a65_0x4715('0x23'),_0x33a9c2);_0x44290d[a65_0x4715('0x10')](a65_0x4715('0x24'),_0x3f34d9);_0x44290d[a65_0x4715('0x10')]('/alarms',_0x4cdae9);_0x44290d['use'](a65_0x4715('0x25'),_0x11953b);_0x44290d['use'](a65_0x4715('0x26'),_0x3cb21f);_0x44290d['use'](a65_0x4715('0x27'),_0x268d10);}exports[a65_0x4715('0x13')]=default_1;