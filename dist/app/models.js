var a96_0x8205=['players','playerDevicesModel','player_devices','playersModel','eventStatusModel','eventTypesModel','eventsModel','brand_id','belongsTo','hasMany','event_type_id','event_status_id','vehicle_id','user_id','routesSchedulesModel','route_id','player_id','then','__importDefault','__esModule','defineProperty','./users/users-model','./passCountings/pass-countings-model','./syncFiles/sync-files-model','./deviceTypes/device-types-model','./userTypes/user-types-model','./brands/brands-model','./players/players-model','./playerDevices/player-devices-model','./userUserTypes/user-user-types-model','./routes/routes-model','./routeSchedules/route-schedules-model','./provinces/provinces-model','./cities/cities-model','./eventTypes/event-types-model','./events/events-model','./eventStatuses/event-statuses-model','usersModelName','users','countries','provincesModelName','provinces','citiesModelName','cities','companiesModelName','companies','routesModelName','brandsModelName','brands','vehiclesModelName','routeSchedulesModelName','eventsModelName','eventTypesModelName','eventStatusModelName','event_statuses','default','countriesModelName','provincesModel','companiesModel','routesModel','brandsModel','vehiclesModel','user_types','userUserTypesModel','user_user_types','usersModel','userCompaniesModel','user_companies','deviceTypesModel','devicesModel','passCountingsModel','pass_countings','locationPointsModel','location_points','devices','syncFilesModel','sync_files','vehiclesCountModel'];(function(_0xcdb6a6,_0x22d09d){var _0x2c0acf=function(_0x5a1b04){while(--_0x5a1b04){_0xcdb6a6['push'](_0xcdb6a6['shift']());}};_0x2c0acf(++_0x22d09d);}(a96_0x8205,0x1e6));var a96_0xf8c2=function(_0x47d55d,_0x1007b4){_0x47d55d=_0x47d55d-0x0;var _0x49b3cc=a96_0x8205[_0x47d55d];return _0x49b3cc;};'use strict';var __importDefault=this&&this[a96_0xf8c2('0x0')]||function(_0x37138b){return _0x37138b&&_0x37138b[a96_0xf8c2('0x1')]?_0x37138b:{'default':_0x37138b};};Object[a96_0xf8c2('0x2')](exports,a96_0xf8c2('0x1'),{'value':!![]});const users_model_1=__importDefault(require(a96_0xf8c2('0x3')));const location_points_model_1=__importDefault(require('./locationPoints/location-points-model'));const pass_countings_model_1=__importDefault(require(a96_0xf8c2('0x4')));const sync_files_model_1=__importDefault(require(a96_0xf8c2('0x5')));const devices_model_1=__importDefault(require('./devices/devices-model'));const device_types_model_1=__importDefault(require(a96_0xf8c2('0x6')));const user_types_model_1=__importDefault(require(a96_0xf8c2('0x7')));const companies_model_1=__importDefault(require('./companies/companies-model'));const vehicles_model_1=__importDefault(require('./vehicles/vehicles-model'));const brands_model_1=__importDefault(require(a96_0xf8c2('0x8')));const players_model_1=__importDefault(require(a96_0xf8c2('0x9')));const player_devices_model_1=__importDefault(require(a96_0xf8c2('0xa')));const vehicles_count_model_1=__importDefault(require('./vehiclesCount/vehicles-count-model'));const user_companies_model_1=__importDefault(require('./userCompanies/user-companies-model'));const user_user_types_model_1=__importDefault(require(a96_0xf8c2('0xb')));const routes_model_1=__importDefault(require(a96_0xf8c2('0xc')));const route_schedules_model_1=__importDefault(require(a96_0xf8c2('0xd')));const provinces_model_1=__importDefault(require(a96_0xf8c2('0xe')));const cities_model_1=__importDefault(require(a96_0xf8c2('0xf')));const countries_model_1=__importDefault(require('./countries/countries-model'));const event_types_model_1=__importDefault(require(a96_0xf8c2('0x10')));const events_model_1=__importDefault(require(a96_0xf8c2('0x11')));const event_statuses_model_1=__importDefault(require(a96_0xf8c2('0x12')));class Models{constructor(_0x2b7573){this[a96_0xf8c2('0x13')]=a96_0xf8c2('0x14');this['countriesModelName']=a96_0xf8c2('0x15');this[a96_0xf8c2('0x16')]=a96_0xf8c2('0x17');this[a96_0xf8c2('0x18')]=a96_0xf8c2('0x19');this[a96_0xf8c2('0x1a')]=a96_0xf8c2('0x1b');this[a96_0xf8c2('0x1c')]='routes';this[a96_0xf8c2('0x1d')]=a96_0xf8c2('0x1e');this[a96_0xf8c2('0x1f')]='vehicles';this[a96_0xf8c2('0x20')]='route_schedules';this[a96_0xf8c2('0x21')]='events';this[a96_0xf8c2('0x22')]='event_types';this[a96_0xf8c2('0x23')]=a96_0xf8c2('0x24');this['countriesModel']=new countries_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x26')],this);this[a96_0xf8c2('0x27')]=new provinces_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x16')],this);this['citiesModel']=new cities_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x18')],this);this['usersModel']=new users_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x13')],this);this[a96_0xf8c2('0x28')]=new companies_model_1['default'](_0x2b7573,this[a96_0xf8c2('0x1a')],this);this[a96_0xf8c2('0x29')]=new routes_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x1c')],this);this[a96_0xf8c2('0x2a')]=new brands_model_1['default'](_0x2b7573,this[a96_0xf8c2('0x1d')],this);this[a96_0xf8c2('0x2b')]=new vehicles_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x1f')],this);this['routesSchedulesModel']=new route_schedules_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x20')],this);this['userTypesModel']=new user_types_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x2c'));this[a96_0xf8c2('0x2d')]=new user_user_types_model_1['default'](_0x2b7573,a96_0xf8c2('0x2e'),this[a96_0xf8c2('0x2f')],this['userTypesModel']);this[a96_0xf8c2('0x30')]=new user_companies_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x31'),this[a96_0xf8c2('0x2f')],this[a96_0xf8c2('0x28')]);this[a96_0xf8c2('0x32')]=new device_types_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,'device_types');this[a96_0xf8c2('0x33')]=new devices_model_1['default'](_0x2b7573,'devices',this[a96_0xf8c2('0x32')],this[a96_0xf8c2('0x2a')]);this[a96_0xf8c2('0x34')]=new pass_countings_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x35'));this[a96_0xf8c2('0x36')]=new location_points_model_1['default'](_0x2b7573,a96_0xf8c2('0x37'),a96_0xf8c2('0x38'));this[a96_0xf8c2('0x39')]=new sync_files_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x3a'));this[a96_0xf8c2('0x3b')]=new vehicles_count_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,'vehicles_count',this[a96_0xf8c2('0x2b')]);this['playersModel']=new players_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x3c'),this[a96_0xf8c2('0x2f')]);this[a96_0xf8c2('0x3d')]=new player_devices_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,a96_0xf8c2('0x3e'),this['devicesModel'],this[a96_0xf8c2('0x3f')]);this[a96_0xf8c2('0x40')]=new event_statuses_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this['eventStatusModelName'],this);this[a96_0xf8c2('0x41')]=new event_types_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this['eventTypesModelName'],this);this[a96_0xf8c2('0x42')]=new events_model_1[(a96_0xf8c2('0x25'))](_0x2b7573,this[a96_0xf8c2('0x21')],this);this[a96_0xf8c2('0x2a')]['hasMany'](this[a96_0xf8c2('0x2b')],{'foreignKey':a96_0xf8c2('0x43')});this[a96_0xf8c2('0x2b')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x2a')],{'foreignKey':a96_0xf8c2('0x43')});this['eventTypesModel'][a96_0xf8c2('0x45')](this[a96_0xf8c2('0x42')],{'foreignKey':'event_type_id'});this[a96_0xf8c2('0x42')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x41')],{'foreignKey':a96_0xf8c2('0x46')});this[a96_0xf8c2('0x40')]['hasMany'](this[a96_0xf8c2('0x42')],{'foreignKey':a96_0xf8c2('0x47')});this[a96_0xf8c2('0x42')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x40')],{'foreignKey':a96_0xf8c2('0x47')});this[a96_0xf8c2('0x2b')]['hasMany'](this['eventsModel'],{'foreignKey':'vehicle_id'});this[a96_0xf8c2('0x42')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x2b')],{'foreignKey':a96_0xf8c2('0x48')});this[a96_0xf8c2('0x2f')][a96_0xf8c2('0x45')](this['routesSchedulesModel'],{'foreignKey':a96_0xf8c2('0x49')});this[a96_0xf8c2('0x4a')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x2f')],{'foreignKey':a96_0xf8c2('0x49')});this[a96_0xf8c2('0x2b')][a96_0xf8c2('0x45')](this['routesSchedulesModel'],{'foreignKey':a96_0xf8c2('0x48')});this[a96_0xf8c2('0x4a')][a96_0xf8c2('0x44')](this['vehiclesModel'],{'foreignKey':a96_0xf8c2('0x48')});this[a96_0xf8c2('0x29')]['hasMany'](this[a96_0xf8c2('0x4a')],{'foreignKey':a96_0xf8c2('0x4b')});this[a96_0xf8c2('0x4a')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x29')],{'foreignKey':a96_0xf8c2('0x4b')});this[a96_0xf8c2('0x2f')][a96_0xf8c2('0x45')](this[a96_0xf8c2('0x3f')],{'foreignKey':a96_0xf8c2('0x49')});this[a96_0xf8c2('0x3f')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x2f')],{'foreignKey':a96_0xf8c2('0x49')});this[a96_0xf8c2('0x3f')]['hasMany'](this[a96_0xf8c2('0x3d')],{'foreignKey':a96_0xf8c2('0x4c')});this[a96_0xf8c2('0x3d')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x3f')],{'foreignKey':a96_0xf8c2('0x4c')});this['playerDevicesModel'][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x3f')]);this['vehiclesModel'][a96_0xf8c2('0x45')](this[a96_0xf8c2('0x3b')],{'foreignKey':a96_0xf8c2('0x48')});this[a96_0xf8c2('0x3b')][a96_0xf8c2('0x44')](this[a96_0xf8c2('0x2b')],{'foreignKey':a96_0xf8c2('0x48')});_0x2b7573['sync']({'force':![]})[a96_0xf8c2('0x4d')](()=>{});}}exports['default']=Models;