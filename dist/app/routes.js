var a62_0x3268=['vehiclesModel','passCountingsModel','devicesModel','alarmsModel','use','/companies','/user_types','/users','/devices','/brands','/pass_countings','/location_points','/sync_files','/alarms','__esModule','defineProperty','./users/users-route','./passCountings/pass-countings-route','./locationPoints/location-points-route','./devices/devices-route','./brands/brands-route','./deviceTypes/device-types-route','./authentication/authentication-route','./alarms/alarms-route','default','usersModel','userTypesModel','deviceTypesModel','companiesModel','brandsModel'];(function(_0x26336d,_0x223724){var _0x186d79=function(_0x121292){while(--_0x121292){_0x26336d['push'](_0x26336d['shift']());}};_0x186d79(++_0x223724);}(a62_0x3268,0x13a));var a62_0x391d=function(_0x4dffdb,_0x31ea03){_0x4dffdb=_0x4dffdb-0x0;var _0x4a3604=a62_0x3268[_0x4dffdb];return _0x4a3604;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x565873){return _0x565873&&_0x565873[a62_0x391d('0x0')]?_0x565873:{'default':_0x565873};};Object[a62_0x391d('0x1')](exports,'__esModule',{'value':!![]});const authUtils=require('../infrastructure/auth-utils');const users_route_1=__importDefault(require(a62_0x391d('0x2')));const pass_countings_route_1=__importDefault(require(a62_0x391d('0x3')));const location_points_route_1=__importDefault(require(a62_0x391d('0x4')));const sync_files_route_1=__importDefault(require('./syncFiles/sync-files-route'));const devices_route_1=__importDefault(require(a62_0x391d('0x5')));const companies_route_1=__importDefault(require('./companies/companies-route'));const user_types_route_1=__importDefault(require('./userTypes/user-types-route'));const brands_route_1=__importDefault(require(a62_0x391d('0x6')));const device_types_route_1=__importDefault(require(a62_0x391d('0x7')));const authentication_route_1=__importDefault(require(a62_0x391d('0x8')));const alarms_route_1=__importDefault(require(a62_0x391d('0x9')));function default_1(_0x51bfa6,_0x56ad79,_0xdd223f){_0x51bfa6['use'](authUtils['isLoggedIn']);const _0x27ff99=new authentication_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0xb')]);const _0x3f8d4e=new user_types_route_1['default'](_0xdd223f[a62_0x391d('0xc')]);const _0x2993a1=new device_types_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0xd')]);const _0x7a4796=new users_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0xb')]);const _0x5cde0b=new companies_route_1['default'](_0xdd223f[a62_0x391d('0xe')]);const _0x97d63e=new brands_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0xf')]);const _0x5374e9=new companies_route_1['default'](_0xdd223f[a62_0x391d('0x10')]);const _0x4d6d36=new pass_countings_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0x11')]);const _0x3515af=new location_points_route_1['default'](_0xdd223f['locationPointsModel']);const _0x1087d9=new sync_files_route_1['default'](_0xdd223f['syncFilesModel']);const _0x1b082c=new devices_route_1[(a62_0x391d('0xa'))](_0xdd223f[a62_0x391d('0x12')]);const _0x99c1ae=new alarms_route_1['default'](_0xdd223f[a62_0x391d('0x13')]);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x15'),_0x5cde0b);_0x51bfa6['use'](a62_0x391d('0x16'),_0x3f8d4e);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x17'),_0x7a4796);_0x51bfa6[a62_0x391d('0x14')]('/authentication',_0x27ff99);_0x51bfa6[a62_0x391d('0x14')]('/device_types',_0x2993a1);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x18'),_0x1b082c);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x19'),_0x97d63e);_0x51bfa6[a62_0x391d('0x14')]('/vehicles',_0x5374e9);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x1a'),_0x4d6d36);_0x51bfa6['use'](a62_0x391d('0x1b'),_0x3515af);_0x51bfa6[a62_0x391d('0x14')](a62_0x391d('0x1c'),_0x1087d9);_0x51bfa6['use'](a62_0x391d('0x1d'),_0x99c1ae);}exports[a62_0x391d('0xa')]=default_1;