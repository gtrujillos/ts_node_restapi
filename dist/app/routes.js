var a155_0x1b48=['/route_schedules','/pass_countings','/location_points','/sync_files','/vehicles_count','/players','defineProperty','__esModule','../infrastructure/auth-utils','./users/users-route','./passCountings/pass-countings-route','./devices/devices-route','./userTypes/user-types-route','./brands/brands-route','./deviceTypes/device-types-route','./playerDevices/player-devices-route','./vehiclesCount/vehicles-count-route','./routes/routes-route','./routeSchedules/route-schedules-route','./countries/countries-route','./events/events-route','./eventStatuses/event-statuses-route','use','default','usersController','authenticationController','provincesController','citiesController','routesController','routeSchedulesController','devicesController','deviceTypesController','vehiclesController','playersController','playerDevicesController','eventTypesController','brandsModel','passCountingsModel','syncFilesModel','/companies','/user_types','/users','/authentication','/events','/device_types','/brands','/vehicles','/routes'];(function(_0x4d493b,_0x521672){var _0x5bccd4=function(_0x8d14d9){while(--_0x8d14d9){_0x4d493b['push'](_0x4d493b['shift']());}};_0x5bccd4(++_0x521672);}(a155_0x1b48,0x66));var a155_0x4b54=function(_0x330385,_0x377365){_0x330385=_0x330385-0x0;var _0x4796cd=a155_0x1b48[_0x330385];return _0x4796cd;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2feba3){return _0x2feba3&&_0x2feba3['__esModule']?_0x2feba3:{'default':_0x2feba3};};Object[a155_0x4b54('0x0')](exports,a155_0x4b54('0x1'),{'value':!![]});const authUtils=require(a155_0x4b54('0x2'));const users_route_1=__importDefault(require(a155_0x4b54('0x3')));const pass_countings_route_1=__importDefault(require(a155_0x4b54('0x4')));const location_points_route_1=__importDefault(require('./locationPoints/location-points-route'));const sync_files_route_1=__importDefault(require('./syncFiles/sync-files-route'));const devices_route_1=__importDefault(require(a155_0x4b54('0x5')));const companies_route_1=__importDefault(require('./companies/companies-route'));const user_types_route_1=__importDefault(require(a155_0x4b54('0x6')));const brands_route_1=__importDefault(require(a155_0x4b54('0x7')));const device_types_route_1=__importDefault(require(a155_0x4b54('0x8')));const authentication_route_1=__importDefault(require('./authentication/authentication-route'));const players_route_1=__importDefault(require('./players/players-route'));const player_devices_route_1=__importDefault(require(a155_0x4b54('0x9')));const vehicles_count_route_1=__importDefault(require(a155_0x4b54('0xa')));const vehicles_route_1=__importDefault(require('./vehicles/vehicles-route'));const routes_route_1=__importDefault(require(a155_0x4b54('0xb')));const route_schedules_route_1=__importDefault(require(a155_0x4b54('0xc')));const countries_route_1=__importDefault(require(a155_0x4b54('0xd')));const events_route_1=__importDefault(require(a155_0x4b54('0xe')));const event_types_route_1=__importDefault(require('./eventTypes/event-types-route'));const event_statuses_route_1=__importDefault(require(a155_0x4b54('0xf')));function default_1(_0x9016fc,_0x342102,_0x579866,_0x3d50ed){_0x9016fc[a155_0x4b54('0x10')](authUtils['isLoggedIn']);const _0x586621=new users_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x12')]);const _0x12f3a2=new user_types_route_1['default'](_0x3d50ed['userTypesController']);const _0x584dd6=new authentication_route_1['default'](_0x3d50ed[a155_0x4b54('0x13')]);const _0x220a5c=new companies_route_1[(a155_0x4b54('0x11'))](_0x3d50ed['companiesController']);const _0xf0a940=new countries_route_1[(a155_0x4b54('0x11'))](_0x3d50ed['countriesController']);const _0x1cdc63=new countries_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x14')]);const _0x4a74f6=new countries_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x15')]);const _0x4e4350=new routes_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x16')]);const _0x3328c8=new route_schedules_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x17')]);const _0x2f4eed=new devices_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x18')]);const _0xe51dce=new device_types_route_1['default'](_0x3d50ed[a155_0x4b54('0x19')]);const _0x942cb3=new vehicles_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x1a')]);const _0x4bc9f6=new vehicles_count_route_1[(a155_0x4b54('0x11'))](_0x3d50ed['vehiclesCountController']);const _0x514fe4=new players_route_1['default'](_0x3d50ed[a155_0x4b54('0x1b')]);const _0x51fd38=new player_devices_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x1c')]);const _0x4818d3=new event_types_route_1[(a155_0x4b54('0x11'))](_0x3d50ed[a155_0x4b54('0x1d')]);const _0x322f48=new event_statuses_route_1[(a155_0x4b54('0x11'))](_0x3d50ed['eventStatusController']);const _0x36b743=new events_route_1[(a155_0x4b54('0x11'))](_0x3d50ed['eventsController']);const _0x159a00=new brands_route_1['default'](_0x579866[a155_0x4b54('0x1e')]);const _0x4dc344=new pass_countings_route_1[(a155_0x4b54('0x11'))](_0x579866[a155_0x4b54('0x1f')]);const _0x5f34aa=new location_points_route_1[(a155_0x4b54('0x11'))](_0x579866['locationPointsModel']);const _0x4e0dbe=new sync_files_route_1['default'](_0x579866[a155_0x4b54('0x20')]);_0x9016fc[a155_0x4b54('0x10')]('/countries',_0xf0a940);_0x9016fc[a155_0x4b54('0x10')]('/provinces',_0x1cdc63);_0x9016fc[a155_0x4b54('0x10')]('/cities',_0x4a74f6);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x21'),_0x220a5c);_0x9016fc['use'](a155_0x4b54('0x22'),_0x12f3a2);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x23'),_0x586621);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x24'),_0x584dd6);_0x9016fc[a155_0x4b54('0x10')]('/event_types',_0x4818d3);_0x9016fc[a155_0x4b54('0x10')]('/event_statuses',_0x322f48);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x25'),_0x36b743);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x26'),_0xe51dce);_0x9016fc['use']('/devices',_0x2f4eed);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x27'),_0x159a00);_0x9016fc['use'](a155_0x4b54('0x28'),_0x942cb3);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x29'),_0x4e4350);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x2a'),_0x3328c8);_0x9016fc['use'](a155_0x4b54('0x2b'),_0x4dc344);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x2c'),_0x5f34aa);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x2d'),_0x4e0dbe);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x25'),_0x36b743);_0x9016fc[a155_0x4b54('0x10')](a155_0x4b54('0x2e'),_0x4bc9f6);_0x9016fc['use'](a155_0x4b54('0x2f'),_0x514fe4);_0x9016fc[a155_0x4b54('0x10')]('/player_devices',_0x51fd38);}exports['default']=default_1;