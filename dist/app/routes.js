var a197_0x42cd=['companiesController','provincesController','citiesController','routesController','devicesController','vehiclesController','vehiclesCountController','playersController','eventStatusController','brandsModel','passCountingsModel','locationPointsModel','syncFilesModel','/system','use','/provinces','/cities','/companies','/user_types','/users','/event_types','/event_statuses','/device_types','/devices','/brands','/vehicles','/routes','/route_schedules','/pass_countings','/location_points','/events','/vehicles_count','/players','/player_devices','/projects','/activities','__importDefault','__esModule','defineProperty','./users/users-route','./passCountings/pass-countings-route','./locationPoints/location-points-route','./syncFiles/sync-files-route','./devices/devices-route','./companies/companies-route','./userTypes/user-types-route','./deviceTypes/device-types-route','./authentication/authentication-route','./players/players-route','./vehiclesCount/vehicles-count-route','./routes/routes-route','./routeSchedules/route-schedules-route','./countries/countries-route','./events/events-route','./system/system-route','./projects/projects-route','./products/products-route','./activities/activities-route','./documentTypes/document-types-route','isLoggedIn','systemController','default','usersController','userTypesController','documentTypesController','authenticationController'];(function(_0x2a6b42,_0x395642){var _0x2dcbc9=function(_0x6358f7){while(--_0x6358f7){_0x2a6b42['push'](_0x2a6b42['shift']());}};_0x2dcbc9(++_0x395642);}(a197_0x42cd,0x1f2));var a197_0x516c=function(_0x2abe89,_0x1898b1){_0x2abe89=_0x2abe89-0x0;var _0x4d9a74=a197_0x42cd[_0x2abe89];return _0x4d9a74;};'use strict';var __importDefault=this&&this[a197_0x516c('0x0')]||function(_0x527265){return _0x527265&&_0x527265[a197_0x516c('0x1')]?_0x527265:{'default':_0x527265};};Object[a197_0x516c('0x2')](exports,'__esModule',{'value':!![]});const authUtils=require('../infrastructure/auth-utils');const users_route_1=__importDefault(require(a197_0x516c('0x3')));const pass_countings_route_1=__importDefault(require(a197_0x516c('0x4')));const location_points_route_1=__importDefault(require(a197_0x516c('0x5')));const sync_files_route_1=__importDefault(require(a197_0x516c('0x6')));const devices_route_1=__importDefault(require(a197_0x516c('0x7')));const companies_route_1=__importDefault(require(a197_0x516c('0x8')));const user_types_route_1=__importDefault(require(a197_0x516c('0x9')));const brands_route_1=__importDefault(require('./brands/brands-route'));const device_types_route_1=__importDefault(require(a197_0x516c('0xa')));const authentication_route_1=__importDefault(require(a197_0x516c('0xb')));const players_route_1=__importDefault(require(a197_0x516c('0xc')));const player_devices_route_1=__importDefault(require('./playerDevices/player-devices-route'));const vehicles_count_route_1=__importDefault(require(a197_0x516c('0xd')));const vehicles_route_1=__importDefault(require('./vehicles/vehicles-route'));const routes_route_1=__importDefault(require(a197_0x516c('0xe')));const route_schedules_route_1=__importDefault(require(a197_0x516c('0xf')));const countries_route_1=__importDefault(require(a197_0x516c('0x10')));const events_route_1=__importDefault(require(a197_0x516c('0x11')));const event_types_route_1=__importDefault(require('./eventTypes/event-types-route'));const event_statuses_route_1=__importDefault(require('./eventStatuses/event-statuses-route'));const system_route_1=__importDefault(require(a197_0x516c('0x12')));const projects_route_1=__importDefault(require(a197_0x516c('0x13')));const products_route_1=__importDefault(require(a197_0x516c('0x14')));const activities_route_1=__importDefault(require(a197_0x516c('0x15')));const document_types_route_1=__importDefault(require(a197_0x516c('0x16')));function default_1(_0x5e9c71,_0x1e6c9f,_0x1ec1b7,_0x416f7d){_0x5e9c71['use'](authUtils[a197_0x516c('0x17')]);const _0x1ac754=new system_route_1['default'](_0x416f7d[a197_0x516c('0x18')]);const _0x172560=new users_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x1a')]);const _0x3aa8a7=new user_types_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x1b')]);const _0xc9315d=new document_types_route_1['default'](_0x416f7d[a197_0x516c('0x1c')]);const _0x4f50aa=new authentication_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x1d')]);const _0x46c6a7=new companies_route_1['default'](_0x416f7d[a197_0x516c('0x1e')]);const _0x42ad0a=new countries_route_1[(a197_0x516c('0x19'))](_0x416f7d['countriesController']);const _0x201ae0=new countries_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x1f')]);const _0xb9c4fe=new countries_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x20')]);const _0x484c6e=new routes_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x21')]);const _0x1e9a48=new route_schedules_route_1[(a197_0x516c('0x19'))](_0x416f7d['routeSchedulesController']);const _0x3a063b=new devices_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x22')]);const _0x231b24=new device_types_route_1[(a197_0x516c('0x19'))](_0x416f7d['deviceTypesController']);const _0x1127c2=new vehicles_route_1['default'](_0x416f7d[a197_0x516c('0x23')]);const _0x8a2bf6=new vehicles_count_route_1['default'](_0x416f7d[a197_0x516c('0x24')]);const _0x1d1e6b=new players_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x25')]);const _0x3e691c=new player_devices_route_1['default'](_0x416f7d['playerDevicesController']);const _0x1d6660=new event_types_route_1[(a197_0x516c('0x19'))](_0x416f7d['eventTypesController']);const _0x5918cf=new event_statuses_route_1[(a197_0x516c('0x19'))](_0x416f7d[a197_0x516c('0x26')]);const _0x5c6cdb=new events_route_1[(a197_0x516c('0x19'))](_0x416f7d['eventsController']);const _0x10fd31=new projects_route_1[(a197_0x516c('0x19'))](_0x416f7d['projectsController']);const _0x5663ed=new products_route_1['default'](_0x416f7d['productsController']);const _0x56a132=new activities_route_1[(a197_0x516c('0x19'))](_0x416f7d['activitiesController']);const _0x5b3c75=new brands_route_1[(a197_0x516c('0x19'))](_0x1ec1b7[a197_0x516c('0x27')]);const _0x279a17=new pass_countings_route_1[(a197_0x516c('0x19'))](_0x1ec1b7[a197_0x516c('0x28')]);const _0x2b9286=new location_points_route_1['default'](_0x1ec1b7[a197_0x516c('0x29')]);const _0x252239=new sync_files_route_1[(a197_0x516c('0x19'))](_0x1ec1b7[a197_0x516c('0x2a')]);_0x5e9c71['use'](a197_0x516c('0x2b'),_0x1ac754);_0x5e9c71[a197_0x516c('0x2c')]('/countries',_0x42ad0a);_0x5e9c71['use'](a197_0x516c('0x2d'),_0x201ae0);_0x5e9c71['use'](a197_0x516c('0x2e'),_0xb9c4fe);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x2f'),_0x46c6a7);_0x5e9c71[a197_0x516c('0x2c')]('/document_types',_0xc9315d);_0x5e9c71['use'](a197_0x516c('0x30'),_0x3aa8a7);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x31'),_0x172560);_0x5e9c71[a197_0x516c('0x2c')]('/authentication',_0x4f50aa);_0x5e9c71['use'](a197_0x516c('0x32'),_0x1d6660);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x33'),_0x5918cf);_0x5e9c71[a197_0x516c('0x2c')]('/events',_0x5c6cdb);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x34'),_0x231b24);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x35'),_0x3a063b);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x36'),_0x5b3c75);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x37'),_0x1127c2);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x38'),_0x484c6e);_0x5e9c71['use'](a197_0x516c('0x39'),_0x1e9a48);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3a'),_0x279a17);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3b'),_0x2b9286);_0x5e9c71[a197_0x516c('0x2c')]('/sync_files',_0x252239);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3c'),_0x5c6cdb);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3d'),_0x8a2bf6);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3e'),_0x1d1e6b);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x3f'),_0x3e691c);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x40'),_0x10fd31);_0x5e9c71[a197_0x516c('0x2c')]('/products',_0x5663ed);_0x5e9c71[a197_0x516c('0x2c')](a197_0x516c('0x41'),_0x56a132);}exports[a197_0x516c('0x19')]=default_1;