var a66_0x36ba=['./players/players-route','./vehicles/vehicles-route','isLoggedIn','default','authenticationController','userTypesModel','deviceTypesModel','usersModel','companiesModel','brandsModel','vehiclesController','passCountingsModel','locationPointsModel','devicesController','alarmsModel','vehiclesCountController','playersController','playerDevicesModel','/companies','use','/user_types','/users','/authentication','/device_types','/brands','/vehicles','/pass_countings','/location_points','/sync_files','/vehicles_count','/players','/player_devices','__importDefault','__esModule','defineProperty','../infrastructure/auth-utils','./passCountings/pass-countings-route','./syncFiles/sync-files-route','./devices/devices-route','./brands/brands-route','./deviceTypes/device-types-route','./authentication/authentication-route','./alarms/alarms-route'];(function(_0x559c68,_0x18550c){var _0x1f618c=function(_0x249647){while(--_0x249647){_0x559c68['push'](_0x559c68['shift']());}};_0x1f618c(++_0x18550c);}(a66_0x36ba,0x1ce));var a66_0x1557=function(_0x27d27a,_0x53b9ab){_0x27d27a=_0x27d27a-0x0;var _0x377a28=a66_0x36ba[_0x27d27a];return _0x377a28;};'use strict';var __importDefault=this&&this[a66_0x1557('0x0')]||function(_0x5bd00e){return _0x5bd00e&&_0x5bd00e[a66_0x1557('0x1')]?_0x5bd00e:{'default':_0x5bd00e};};Object[a66_0x1557('0x2')](exports,a66_0x1557('0x1'),{'value':!![]});const authUtils=require(a66_0x1557('0x3'));const users_route_1=__importDefault(require('./users/users-route'));const pass_countings_route_1=__importDefault(require(a66_0x1557('0x4')));const location_points_route_1=__importDefault(require('./locationPoints/location-points-route'));const sync_files_route_1=__importDefault(require(a66_0x1557('0x5')));const devices_route_1=__importDefault(require(a66_0x1557('0x6')));const companies_route_1=__importDefault(require('./companies/companies-route'));const user_types_route_1=__importDefault(require('./userTypes/user-types-route'));const brands_route_1=__importDefault(require(a66_0x1557('0x7')));const device_types_route_1=__importDefault(require(a66_0x1557('0x8')));const authentication_route_1=__importDefault(require(a66_0x1557('0x9')));const alarms_route_1=__importDefault(require(a66_0x1557('0xa')));const players_route_1=__importDefault(require(a66_0x1557('0xb')));const player_devices_route_1=__importDefault(require('./playerDevices/player-devices-route'));const vehicles_count_route_1=__importDefault(require('./vehiclesCount/vehicles-count-route'));const vehicles_route_1=__importDefault(require(a66_0x1557('0xc')));function default_1(_0x5a2067,_0x27b369,_0x91a392,_0x1d530e){_0x5a2067['use'](authUtils[a66_0x1557('0xd')]);const _0x3fba90=new authentication_route_1[(a66_0x1557('0xe'))](_0x1d530e[a66_0x1557('0xf')]);const _0x2f8798=new user_types_route_1['default'](_0x91a392[a66_0x1557('0x10')]);const _0x25465b=new device_types_route_1[(a66_0x1557('0xe'))](_0x91a392[a66_0x1557('0x11')]);const _0x3cd27d=new users_route_1[(a66_0x1557('0xe'))](_0x91a392[a66_0x1557('0x12')]);const _0x1a48d7=new companies_route_1['default'](_0x91a392[a66_0x1557('0x13')]);const _0x54ae71=new brands_route_1['default'](_0x91a392[a66_0x1557('0x14')]);const _0x2d8a63=new vehicles_route_1[(a66_0x1557('0xe'))](_0x1d530e[a66_0x1557('0x15')]);const _0x402f19=new pass_countings_route_1['default'](_0x91a392[a66_0x1557('0x16')]);const _0x3263c2=new location_points_route_1[(a66_0x1557('0xe'))](_0x91a392[a66_0x1557('0x17')]);const _0x20d82b=new sync_files_route_1['default'](_0x91a392['syncFilesModel']);const _0x553b9f=new devices_route_1[(a66_0x1557('0xe'))](_0x1d530e[a66_0x1557('0x18')]);const _0x5147d2=new alarms_route_1['default'](_0x91a392[a66_0x1557('0x19')]);const _0xa87c5a=new vehicles_count_route_1[(a66_0x1557('0xe'))](_0x1d530e[a66_0x1557('0x1a')]);const _0x13c6e3=new players_route_1[(a66_0x1557('0xe'))](_0x1d530e[a66_0x1557('0x1b')]);const _0x1d505a=new player_devices_route_1[(a66_0x1557('0xe'))](_0x91a392[a66_0x1557('0x1c')],_0x1d530e[a66_0x1557('0x18')],_0x1d530e['playersController']);_0x5a2067['use'](a66_0x1557('0x1d'),_0x1a48d7);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x1f'),_0x2f8798);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x20'),_0x3cd27d);_0x5a2067['use'](a66_0x1557('0x21'),_0x3fba90);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x22'),_0x25465b);_0x5a2067[a66_0x1557('0x1e')]('/devices',_0x553b9f);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x23'),_0x54ae71);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x24'),_0x2d8a63);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x25'),_0x402f19);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x26'),_0x3263c2);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x27'),_0x20d82b);_0x5a2067[a66_0x1557('0x1e')]('/alarms',_0x5147d2);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x28'),_0xa87c5a);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x29'),_0x13c6e3);_0x5a2067[a66_0x1557('0x1e')](a66_0x1557('0x2a'),_0x1d505a);}exports[a66_0x1557('0xe')]=default_1;