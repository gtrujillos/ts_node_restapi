var a62_0x5b96=['usersModel','default','userTypesModel','deviceTypesModel','companiesModel','vehiclesModel','passCountingsModel','syncFilesModel','devicesModel','alarmsModel','/companies','/user_types','/users','/authentication','/devices','/vehicles','/pass_countings','/location_points','/sync_files','/alarms','__esModule','defineProperty','../infrastructure/auth-utils','./users/users-route','./passCountings/pass-countings-route','./syncFiles/sync-files-route','./devices/devices-route','./companies/companies-route','./userTypes/user-types-route','./brands/brands-route','./authentication/authentication-route','./alarms/alarms-route','use'];(function(_0x4a6e42,_0x5716f1){var _0x3c819c=function(_0x15ce76){while(--_0x15ce76){_0x4a6e42['push'](_0x4a6e42['shift']());}};_0x3c819c(++_0x5716f1);}(a62_0x5b96,0x1e2));var a62_0x147a=function(_0x225818,_0x4e34cf){_0x225818=_0x225818-0x0;var _0x33d3bc=a62_0x5b96[_0x225818];return _0x33d3bc;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5ac326){return _0x5ac326&&_0x5ac326[a62_0x147a('0x0')]?_0x5ac326:{'default':_0x5ac326};};Object[a62_0x147a('0x1')](exports,a62_0x147a('0x0'),{'value':!![]});const authUtils=require(a62_0x147a('0x2'));const users_route_1=__importDefault(require(a62_0x147a('0x3')));const pass_countings_route_1=__importDefault(require(a62_0x147a('0x4')));const location_points_route_1=__importDefault(require('./locationPoints/location-points-route'));const sync_files_route_1=__importDefault(require(a62_0x147a('0x5')));const devices_route_1=__importDefault(require(a62_0x147a('0x6')));const companies_route_1=__importDefault(require(a62_0x147a('0x7')));const user_types_route_1=__importDefault(require(a62_0x147a('0x8')));const brands_route_1=__importDefault(require(a62_0x147a('0x9')));const device_types_route_1=__importDefault(require('./deviceTypes/device-types-route'));const authentication_route_1=__importDefault(require(a62_0x147a('0xa')));const alarms_route_1=__importDefault(require(a62_0x147a('0xb')));function default_1(_0x3b8cae,_0x2314d1,_0xb829cf){_0x3b8cae[a62_0x147a('0xc')](authUtils['isLoggedIn']);const _0x1b256e=new authentication_route_1['default'](_0xb829cf[a62_0x147a('0xd')]);const _0x42d7ae=new user_types_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0xf')]);const _0x22f2a4=new device_types_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x10')]);const _0x2a3ca1=new users_route_1['default'](_0xb829cf[a62_0x147a('0xd')]);const _0xa4bb25=new companies_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x11')]);const _0xb234d2=new brands_route_1[(a62_0x147a('0xe'))](_0xb829cf['brandsModel']);const _0x514d71=new companies_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x12')]);const _0x9d9542=new pass_countings_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x13')]);const _0x318e0c=new location_points_route_1['default'](_0xb829cf['locationPointsModel']);const _0x38e89e=new sync_files_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x14')]);const _0x3c9fd6=new devices_route_1[(a62_0x147a('0xe'))](_0xb829cf[a62_0x147a('0x15')]);const _0x36f606=new alarms_route_1['default'](_0xb829cf[a62_0x147a('0x16')]);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x17'),_0xa4bb25);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x18'),_0x42d7ae);_0x3b8cae['use'](a62_0x147a('0x19'),_0x2a3ca1);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1a'),_0x1b256e);_0x3b8cae[a62_0x147a('0xc')]('/device_types',_0x22f2a4);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1b'),_0x3c9fd6);_0x3b8cae[a62_0x147a('0xc')]('/brands',_0xb234d2);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1c'),_0x514d71);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1d'),_0x9d9542);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1e'),_0x318e0c);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x1f'),_0x38e89e);_0x3b8cae[a62_0x147a('0xc')](a62_0x147a('0x20'),_0x36f606);}exports['default']=default_1;