var a66_0x5160=['brandsModel','vehiclesController','passCountingsModel','locationPointsModel','syncFilesModel','devicesController','vehiclesCountController','playersController','playerDevicesModel','use','/user_types','/users','/device_types','/devices','/brands','/pass_countings','/alarms','/vehicles_count','/player_devices','__importDefault','__esModule','../infrastructure/auth-utils','./users/users-route','./passCountings/pass-countings-route','./syncFiles/sync-files-route','./companies/companies-route','./userTypes/user-types-route','./brands/brands-route','./deviceTypes/device-types-route','./authentication/authentication-route','./alarms/alarms-route','./players/players-route','./playerDevices/player-devices-route','./vehiclesCount/vehicles-count-route','isLoggedIn','default','authenticationController','userTypesModel','deviceTypesModel','usersModel'];(function(_0x4e02a6,_0x3eba87){var _0xafeb2b=function(_0x2d4731){while(--_0x2d4731){_0x4e02a6['push'](_0x4e02a6['shift']());}};_0xafeb2b(++_0x3eba87);}(a66_0x5160,0x12b));var a66_0x27b7=function(_0x3a034e,_0x42782b){_0x3a034e=_0x3a034e-0x0;var _0x57a9e8=a66_0x5160[_0x3a034e];return _0x57a9e8;};'use strict';var __importDefault=this&&this[a66_0x27b7('0x0')]||function(_0xe77fc3){return _0xe77fc3&&_0xe77fc3[a66_0x27b7('0x1')]?_0xe77fc3:{'default':_0xe77fc3};};Object['defineProperty'](exports,a66_0x27b7('0x1'),{'value':!![]});const authUtils=require(a66_0x27b7('0x2'));const users_route_1=__importDefault(require(a66_0x27b7('0x3')));const pass_countings_route_1=__importDefault(require(a66_0x27b7('0x4')));const location_points_route_1=__importDefault(require('./locationPoints/location-points-route'));const sync_files_route_1=__importDefault(require(a66_0x27b7('0x5')));const devices_route_1=__importDefault(require('./devices/devices-route'));const companies_route_1=__importDefault(require(a66_0x27b7('0x6')));const user_types_route_1=__importDefault(require(a66_0x27b7('0x7')));const brands_route_1=__importDefault(require(a66_0x27b7('0x8')));const device_types_route_1=__importDefault(require(a66_0x27b7('0x9')));const authentication_route_1=__importDefault(require(a66_0x27b7('0xa')));const alarms_route_1=__importDefault(require(a66_0x27b7('0xb')));const players_route_1=__importDefault(require(a66_0x27b7('0xc')));const player_devices_route_1=__importDefault(require(a66_0x27b7('0xd')));const vehicles_count_route_1=__importDefault(require(a66_0x27b7('0xe')));const vehicles_route_1=__importDefault(require('./vehicles/vehicles-route'));function default_1(_0x39f886,_0x432060,_0xce4d6a,_0x25a0a5){_0x39f886['use'](authUtils[a66_0x27b7('0xf')]);const _0x51d0ea=new authentication_route_1[(a66_0x27b7('0x10'))](_0x25a0a5[a66_0x27b7('0x11')]);const _0x584fd6=new user_types_route_1['default'](_0xce4d6a[a66_0x27b7('0x12')]);const _0x24b894=new device_types_route_1[(a66_0x27b7('0x10'))](_0xce4d6a[a66_0x27b7('0x13')]);const _0x5a0ac9=new users_route_1['default'](_0xce4d6a[a66_0x27b7('0x14')]);const _0x3bcf26=new companies_route_1[(a66_0x27b7('0x10'))](_0xce4d6a['companiesModel']);const _0x14ac51=new brands_route_1['default'](_0xce4d6a[a66_0x27b7('0x15')]);const _0x2c16a3=new vehicles_route_1[(a66_0x27b7('0x10'))](_0x25a0a5[a66_0x27b7('0x16')]);const _0x15008b=new pass_countings_route_1[(a66_0x27b7('0x10'))](_0xce4d6a[a66_0x27b7('0x17')]);const _0x2ed789=new location_points_route_1[(a66_0x27b7('0x10'))](_0xce4d6a[a66_0x27b7('0x18')]);const _0x22f994=new sync_files_route_1[(a66_0x27b7('0x10'))](_0xce4d6a[a66_0x27b7('0x19')]);const _0x324bfc=new devices_route_1[(a66_0x27b7('0x10'))](_0x25a0a5[a66_0x27b7('0x1a')]);const _0x5ccde5=new alarms_route_1[(a66_0x27b7('0x10'))](_0xce4d6a['alarmsModel']);const _0x340a23=new vehicles_count_route_1[(a66_0x27b7('0x10'))](_0x25a0a5[a66_0x27b7('0x1b')]);const _0x762b71=new players_route_1[(a66_0x27b7('0x10'))](_0x25a0a5[a66_0x27b7('0x1c')]);const _0x580ed9=new player_devices_route_1[(a66_0x27b7('0x10'))](_0xce4d6a[a66_0x27b7('0x1d')],_0x25a0a5[a66_0x27b7('0x1a')],_0x25a0a5[a66_0x27b7('0x1c')]);_0x39f886[a66_0x27b7('0x1e')]('/companies',_0x3bcf26);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x1f'),_0x584fd6);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x20'),_0x5a0ac9);_0x39f886[a66_0x27b7('0x1e')]('/authentication',_0x51d0ea);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x21'),_0x24b894);_0x39f886['use'](a66_0x27b7('0x22'),_0x324bfc);_0x39f886['use'](a66_0x27b7('0x23'),_0x14ac51);_0x39f886[a66_0x27b7('0x1e')]('/vehicles',_0x2c16a3);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x24'),_0x15008b);_0x39f886[a66_0x27b7('0x1e')]('/location_points',_0x2ed789);_0x39f886[a66_0x27b7('0x1e')]('/sync_files',_0x22f994);_0x39f886['use'](a66_0x27b7('0x25'),_0x5ccde5);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x26'),_0x340a23);_0x39f886[a66_0x27b7('0x1e')]('/players',_0x762b71);_0x39f886[a66_0x27b7('0x1e')](a66_0x27b7('0x27'),_0x580ed9);}exports['default']=default_1;