var a44_0x4e11=['__esModule','defineProperty','./authentication/authentication-controller','./devices/devices-controller','./players/players-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller','./events/events-controller','./playerDevices/player-devices-controller','./companies/companies-controller','./deviceTypes/device-types-controller','./routes/routes-controller','./provinces/provinces-controller','./cities/cities-controller','./eventTypes/event-types-controller','usersController','default','usersModel','companiesModel','countriesController','countriesModel','provincesController','provincesModel','citiesController','userTypesController','authenticationController','routesController','routesModel','routeSchedulesController','routesSchedulesModel','devicesController','devicesModel','deviceTypesController','deviceTypesModel','playersController','playersModel','playerDevicesController','vehiclesController','vehiclesModel','vehiclesCountController','vehiclesCountModel','eventTypesController','eventTypesModel','eventsController','eventsModel','__importDefault'];(function(_0x144f2b,_0xc9b489){var _0x2d67ae=function(_0x284a94){while(--_0x284a94){_0x144f2b['push'](_0x144f2b['shift']());}};_0x2d67ae(++_0xc9b489);}(a44_0x4e11,0xb7));var a44_0x2c31=function(_0x266495,_0x3e9e6c){_0x266495=_0x266495-0x0;var _0x3a280e=a44_0x4e11[_0x266495];return _0x3a280e;};'use strict';var __importDefault=this&&this[a44_0x2c31('0x0')]||function(_0x308bf8){return _0x308bf8&&_0x308bf8[a44_0x2c31('0x1')]?_0x308bf8:{'default':_0x308bf8};};Object[a44_0x2c31('0x2')](exports,a44_0x2c31('0x1'),{'value':!![]});const authentication_controller_1=__importDefault(require(a44_0x2c31('0x3')));const devices_controller_1=__importDefault(require(a44_0x2c31('0x4')));const players_controller_1=__importDefault(require(a44_0x2c31('0x5')));const vehicles_controller_1=__importDefault(require(a44_0x2c31('0x6')));const vehicles_count_controller_1=__importDefault(require(a44_0x2c31('0x7')));const events_controller_1=__importDefault(require(a44_0x2c31('0x8')));const player_devices_controller_1=__importDefault(require(a44_0x2c31('0x9')));const companies_controller_1=__importDefault(require(a44_0x2c31('0xa')));const users_controller_1=__importDefault(require('./users/users-controller'));const user_types_controller_1=__importDefault(require('./userTypes/user-types-controller'));const device_types_controller_1=__importDefault(require(a44_0x2c31('0xb')));const routes_controller_1=__importDefault(require(a44_0x2c31('0xc')));const route_schedules_controller_1=__importDefault(require('./routeSchedules/route-schedules-controller'));const countries_controller_1=__importDefault(require('./countries/countries-controller'));const provinces_controller_1=__importDefault(require(a44_0x2c31('0xd')));const cities_controller_1=__importDefault(require(a44_0x2c31('0xe')));const event_types_controller_1=__importDefault(require(a44_0x2c31('0xf')));class Controllers{constructor(_0x1d411d){this[a44_0x2c31('0x10')]=new users_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x12')]);this['companiesController']=new companies_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x13')]);this[a44_0x2c31('0x14')]=new countries_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x15')]);this[a44_0x2c31('0x16')]=new provinces_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x17')]);this[a44_0x2c31('0x18')]=new cities_controller_1[(a44_0x2c31('0x11'))](_0x1d411d['citiesModel']);this[a44_0x2c31('0x19')]=new user_types_controller_1[(a44_0x2c31('0x11'))](_0x1d411d['userTypesModel']);this[a44_0x2c31('0x1a')]=new authentication_controller_1[(a44_0x2c31('0x11'))](_0x1d411d['usersModel']);this[a44_0x2c31('0x1b')]=new routes_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x1c')]);this[a44_0x2c31('0x1d')]=new route_schedules_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x1e')]);this[a44_0x2c31('0x1f')]=new devices_controller_1['default'](_0x1d411d[a44_0x2c31('0x20')]);this[a44_0x2c31('0x21')]=new device_types_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x22')]);this[a44_0x2c31('0x23')]=new players_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x24')]);this[a44_0x2c31('0x25')]=new player_devices_controller_1['default'](_0x1d411d['playersModel'],this['devicesController'],this['playersController']);this[a44_0x2c31('0x26')]=new vehicles_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x27')]);this[a44_0x2c31('0x28')]=new vehicles_count_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x29')],this['vehiclesController']);this[a44_0x2c31('0x2a')]=new event_types_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x2b')]);this['eventStatusController']=new event_types_controller_1[(a44_0x2c31('0x11'))](_0x1d411d['eventStatusModel']);this[a44_0x2c31('0x2c')]=new events_controller_1[(a44_0x2c31('0x11'))](_0x1d411d[a44_0x2c31('0x2d')]);}}exports[a44_0x2c31('0x11')]=Controllers;