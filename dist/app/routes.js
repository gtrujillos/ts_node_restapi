var a66_0x3ecb=['./syncFiles/sync-files-route','./devices/devices-route','./userTypes/user-types-route','./brands/brands-route','./deviceTypes/device-types-route','./authentication/authentication-route','./alarms/alarms-route','./players/players-route','./vehiclesCount/vehicles-count-route','./vehicles/vehicles-route','isLoggedIn','default','userTypesModel','deviceTypesModel','usersModel','companiesModel','brandsModel','vehiclesController','locationPointsModel','syncFilesModel','devicesController','alarmsModel','vehiclesCountController','playersController','use','/companies','/user_types','/authentication','/device_types','/brands','/vehicles','/pass_countings','/location_points','/sync_files','/alarms','/vehicles_count','/players','__importDefault','__esModule','defineProperty','../infrastructure/auth-utils','./users/users-route','./passCountings/pass-countings-route','./locationPoints/location-points-route'];(function(_0x317374,_0x553b4a){var _0x5245e7=function(_0x2b01a1){while(--_0x2b01a1){_0x317374['push'](_0x317374['shift']());}};_0x5245e7(++_0x553b4a);}(a66_0x3ecb,0x1dd));var a66_0x3192=function(_0x291152,_0xf8bea2){_0x291152=_0x291152-0x0;var _0x47c703=a66_0x3ecb[_0x291152];return _0x47c703;};'use strict';var __importDefault=this&&this[a66_0x3192('0x0')]||function(_0x4e66a8){return _0x4e66a8&&_0x4e66a8[a66_0x3192('0x1')]?_0x4e66a8:{'default':_0x4e66a8};};Object[a66_0x3192('0x2')](exports,a66_0x3192('0x1'),{'value':!![]});const authUtils=require(a66_0x3192('0x3'));const users_route_1=__importDefault(require(a66_0x3192('0x4')));const pass_countings_route_1=__importDefault(require(a66_0x3192('0x5')));const location_points_route_1=__importDefault(require(a66_0x3192('0x6')));const sync_files_route_1=__importDefault(require(a66_0x3192('0x7')));const devices_route_1=__importDefault(require(a66_0x3192('0x8')));const companies_route_1=__importDefault(require('./companies/companies-route'));const user_types_route_1=__importDefault(require(a66_0x3192('0x9')));const brands_route_1=__importDefault(require(a66_0x3192('0xa')));const device_types_route_1=__importDefault(require(a66_0x3192('0xb')));const authentication_route_1=__importDefault(require(a66_0x3192('0xc')));const alarms_route_1=__importDefault(require(a66_0x3192('0xd')));const players_route_1=__importDefault(require(a66_0x3192('0xe')));const player_devices_route_1=__importDefault(require('./playerDevices/player-devices-route'));const vehicles_count_route_1=__importDefault(require(a66_0x3192('0xf')));const vehicles_route_1=__importDefault(require(a66_0x3192('0x10')));function default_1(_0x44b45d,_0x3d078b,_0x19f932,_0x54f064){_0x44b45d['use'](authUtils[a66_0x3192('0x11')]);const _0x4d09f7=new authentication_route_1['default'](_0x54f064['authenticationController']);const _0x20c6ff=new user_types_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x13')]);const _0x46dda5=new device_types_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x14')]);const _0x2fc6ad=new users_route_1['default'](_0x19f932[a66_0x3192('0x15')]);const _0x2513d5=new companies_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x16')]);const _0x395662=new brands_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x17')]);const _0x5be3bc=new vehicles_route_1['default'](_0x54f064[a66_0x3192('0x18')]);const _0x23161a=new pass_countings_route_1[(a66_0x3192('0x12'))](_0x19f932['passCountingsModel']);const _0x424b93=new location_points_route_1['default'](_0x19f932[a66_0x3192('0x19')]);const _0x15821a=new sync_files_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x1a')]);const _0x304541=new devices_route_1[(a66_0x3192('0x12'))](_0x54f064[a66_0x3192('0x1b')]);const _0x29b441=new alarms_route_1[(a66_0x3192('0x12'))](_0x19f932[a66_0x3192('0x1c')]);const _0x1dd80b=new vehicles_count_route_1['default'](_0x54f064[a66_0x3192('0x1d')]);const _0x1f15a3=new players_route_1[(a66_0x3192('0x12'))](_0x54f064['playersController']);const _0x2c55bf=new player_devices_route_1[(a66_0x3192('0x12'))](_0x19f932['playerDevicesModel'],_0x54f064[a66_0x3192('0x1b')],_0x54f064[a66_0x3192('0x1e')]);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x20'),_0x2513d5);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x21'),_0x20c6ff);_0x44b45d[a66_0x3192('0x1f')]('/users',_0x2fc6ad);_0x44b45d['use'](a66_0x3192('0x22'),_0x4d09f7);_0x44b45d['use'](a66_0x3192('0x23'),_0x46dda5);_0x44b45d[a66_0x3192('0x1f')]('/devices',_0x304541);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x24'),_0x395662);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x25'),_0x5be3bc);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x26'),_0x23161a);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x27'),_0x424b93);_0x44b45d['use'](a66_0x3192('0x28'),_0x15821a);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x29'),_0x29b441);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x2a'),_0x1dd80b);_0x44b45d[a66_0x3192('0x1f')](a66_0x3192('0x2b'),_0x1f15a3);_0x44b45d['use']('/player_devices',_0x2c55bf);}exports[a66_0x3192('0x12')]=default_1;