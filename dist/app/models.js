var a96_0x32c6=['provincesModelName','provinces','citiesModelName','cities','companiesModelName','companies','routesModelName','routes','brandsModelName','brands','vehicles','routeSchedulesModelName','route_schedules','eventsModelName','events','eventTypesModelName','event_types','eventStatusModelName','event_statuses','countriesModel','default','provincesModel','citiesModel','usersModel','companiesModel','routesModel','brandsModel','vehiclesModel','vehiclesModelName','user_types','userTypesModel','user_companies','deviceTypesModel','devicesModel','passCountingsModel','locationPointsModel','location_points','devices','syncFilesModel','vehiclesCountModel','vehicles_count','playersModel','players','playerDevicesModel','player_devices','eventTypesModel','eventsModel','brand_id','belongsTo','event_type_id','eventStatusModel','hasMany','event_status_id','vehicle_id','routesSchedulesModel','user_id','route_id','sync','then','__esModule','defineProperty','./users/users-model','./locationPoints/location-points-model','./syncFiles/sync-files-model','./devices/devices-model','./deviceTypes/device-types-model','./companies/companies-model','./vehicles/vehicles-model','./brands/brands-model','./players/players-model','./playerDevices/player-devices-model','./userCompanies/user-companies-model','./userUserTypes/user-user-types-model','./routeSchedules/route-schedules-model','./cities/cities-model','./countries/countries-model','./eventTypes/event-types-model','usersModelName','users','countriesModelName','countries'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a96_0x32c6,0x8c));var a96_0x2f8f=function(_0x5e8645,_0x223c10){_0x5e8645=_0x5e8645-0x0;var _0x262b12=a96_0x32c6[_0x5e8645];return _0x262b12;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5e7869){return _0x5e7869&&_0x5e7869[a96_0x2f8f('0x0')]?_0x5e7869:{'default':_0x5e7869};};Object[a96_0x2f8f('0x1')](exports,a96_0x2f8f('0x0'),{'value':!![]});const users_model_1=__importDefault(require(a96_0x2f8f('0x2')));const location_points_model_1=__importDefault(require(a96_0x2f8f('0x3')));const pass_countings_model_1=__importDefault(require('./passCountings/pass-countings-model'));const sync_files_model_1=__importDefault(require(a96_0x2f8f('0x4')));const devices_model_1=__importDefault(require(a96_0x2f8f('0x5')));const device_types_model_1=__importDefault(require(a96_0x2f8f('0x6')));const user_types_model_1=__importDefault(require('./userTypes/user-types-model'));const companies_model_1=__importDefault(require(a96_0x2f8f('0x7')));const vehicles_model_1=__importDefault(require(a96_0x2f8f('0x8')));const brands_model_1=__importDefault(require(a96_0x2f8f('0x9')));const players_model_1=__importDefault(require(a96_0x2f8f('0xa')));const player_devices_model_1=__importDefault(require(a96_0x2f8f('0xb')));const vehicles_count_model_1=__importDefault(require('./vehiclesCount/vehicles-count-model'));const user_companies_model_1=__importDefault(require(a96_0x2f8f('0xc')));const user_user_types_model_1=__importDefault(require(a96_0x2f8f('0xd')));const routes_model_1=__importDefault(require('./routes/routes-model'));const route_schedules_model_1=__importDefault(require(a96_0x2f8f('0xe')));const provinces_model_1=__importDefault(require('./provinces/provinces-model'));const cities_model_1=__importDefault(require(a96_0x2f8f('0xf')));const countries_model_1=__importDefault(require(a96_0x2f8f('0x10')));const event_types_model_1=__importDefault(require(a96_0x2f8f('0x11')));const events_model_1=__importDefault(require('./events/events-model'));const event_statuses_model_1=__importDefault(require('./eventStatuses/event-statuses-model'));class Models{constructor(_0x24092a){this[a96_0x2f8f('0x12')]=a96_0x2f8f('0x13');this[a96_0x2f8f('0x14')]=a96_0x2f8f('0x15');this[a96_0x2f8f('0x16')]=a96_0x2f8f('0x17');this[a96_0x2f8f('0x18')]=a96_0x2f8f('0x19');this[a96_0x2f8f('0x1a')]=a96_0x2f8f('0x1b');this[a96_0x2f8f('0x1c')]=a96_0x2f8f('0x1d');this[a96_0x2f8f('0x1e')]=a96_0x2f8f('0x1f');this['vehiclesModelName']=a96_0x2f8f('0x20');this[a96_0x2f8f('0x21')]=a96_0x2f8f('0x22');this[a96_0x2f8f('0x23')]=a96_0x2f8f('0x24');this[a96_0x2f8f('0x25')]=a96_0x2f8f('0x26');this[a96_0x2f8f('0x27')]=a96_0x2f8f('0x28');this[a96_0x2f8f('0x29')]=new countries_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this['countriesModelName'],this);this[a96_0x2f8f('0x2b')]=new provinces_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x16')],this);this[a96_0x2f8f('0x2c')]=new cities_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x18')],this);this[a96_0x2f8f('0x2d')]=new users_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x12')],this);this[a96_0x2f8f('0x2e')]=new companies_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this['companiesModelName'],this);this[a96_0x2f8f('0x2f')]=new routes_model_1['default'](_0x24092a,this[a96_0x2f8f('0x1c')],this);this[a96_0x2f8f('0x30')]=new brands_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x1e')],this);this[a96_0x2f8f('0x31')]=new vehicles_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x32')],this);this['routesSchedulesModel']=new route_schedules_model_1['default'](_0x24092a,this[a96_0x2f8f('0x21')],this);this['userTypesModel']=new user_types_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,a96_0x2f8f('0x33'));this['userUserTypesModel']=new user_user_types_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,'user_user_types',this['usersModel'],this[a96_0x2f8f('0x34')]);this['userCompaniesModel']=new user_companies_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,a96_0x2f8f('0x35'),this[a96_0x2f8f('0x2d')],this[a96_0x2f8f('0x2e')]);this[a96_0x2f8f('0x36')]=new device_types_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,'device_types');this[a96_0x2f8f('0x37')]=new devices_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,'devices',this[a96_0x2f8f('0x36')],this[a96_0x2f8f('0x30')]);this[a96_0x2f8f('0x38')]=new pass_countings_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,'pass_countings');this[a96_0x2f8f('0x39')]=new location_points_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,a96_0x2f8f('0x3a'),a96_0x2f8f('0x3b'));this[a96_0x2f8f('0x3c')]=new sync_files_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,'sync_files');this[a96_0x2f8f('0x3d')]=new vehicles_count_model_1['default'](_0x24092a,a96_0x2f8f('0x3e'),this[a96_0x2f8f('0x31')]);this[a96_0x2f8f('0x3f')]=new players_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,a96_0x2f8f('0x40'),this[a96_0x2f8f('0x2d')]);this[a96_0x2f8f('0x41')]=new player_devices_model_1['default'](_0x24092a,a96_0x2f8f('0x42'),this[a96_0x2f8f('0x37')],this[a96_0x2f8f('0x3f')]);this['eventStatusModel']=new event_statuses_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x27')],this);this[a96_0x2f8f('0x43')]=new event_types_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x25')],this);this[a96_0x2f8f('0x44')]=new events_model_1[(a96_0x2f8f('0x2a'))](_0x24092a,this[a96_0x2f8f('0x23')],this);this[a96_0x2f8f('0x30')]['hasMany'](this[a96_0x2f8f('0x31')],{'foreignKey':a96_0x2f8f('0x45')});this['vehiclesModel'][a96_0x2f8f('0x46')](this['brandsModel'],{'foreignKey':a96_0x2f8f('0x45')});this[a96_0x2f8f('0x43')]['hasMany'](this[a96_0x2f8f('0x44')],{'foreignKey':a96_0x2f8f('0x47')});this['eventsModel'][a96_0x2f8f('0x46')](this['eventTypesModel'],{'foreignKey':'event_type_id'});this[a96_0x2f8f('0x48')][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x44')],{'foreignKey':'event_status_id'});this[a96_0x2f8f('0x44')][a96_0x2f8f('0x46')](this[a96_0x2f8f('0x48')],{'foreignKey':a96_0x2f8f('0x4a')});this[a96_0x2f8f('0x31')][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x44')],{'foreignKey':a96_0x2f8f('0x4b')});this[a96_0x2f8f('0x44')]['belongsTo'](this[a96_0x2f8f('0x31')],{'foreignKey':a96_0x2f8f('0x4b')});this[a96_0x2f8f('0x2d')]['hasMany'](this[a96_0x2f8f('0x4c')],{'foreignKey':a96_0x2f8f('0x4d')});this[a96_0x2f8f('0x4c')][a96_0x2f8f('0x46')](this[a96_0x2f8f('0x2d')],{'foreignKey':a96_0x2f8f('0x4d')});this['vehiclesModel'][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x4c')],{'foreignKey':a96_0x2f8f('0x4b')});this[a96_0x2f8f('0x4c')][a96_0x2f8f('0x46')](this[a96_0x2f8f('0x31')],{'foreignKey':a96_0x2f8f('0x4b')});this[a96_0x2f8f('0x2f')][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x4c')],{'foreignKey':a96_0x2f8f('0x4e')});this[a96_0x2f8f('0x4c')][a96_0x2f8f('0x46')](this[a96_0x2f8f('0x2f')],{'foreignKey':a96_0x2f8f('0x4e')});this[a96_0x2f8f('0x2d')][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x3f')],{'foreignKey':'user_id'});this[a96_0x2f8f('0x3f')][a96_0x2f8f('0x46')](this['usersModel'],{'foreignKey':a96_0x2f8f('0x4d')});this[a96_0x2f8f('0x3f')][a96_0x2f8f('0x49')](this[a96_0x2f8f('0x41')],{'foreignKey':'player_id'});this[a96_0x2f8f('0x41')]['belongsTo'](this[a96_0x2f8f('0x3f')],{'foreignKey':'player_id'});this['playerDevicesModel']['belongsTo'](this[a96_0x2f8f('0x3f')]);this[a96_0x2f8f('0x31')][a96_0x2f8f('0x49')](this['vehiclesCountModel'],{'foreignKey':a96_0x2f8f('0x4b')});this[a96_0x2f8f('0x3d')]['belongsTo'](this[a96_0x2f8f('0x31')],{'foreignKey':'vehicle_id'});_0x24092a[a96_0x2f8f('0x4f')]({'force':![]})[a96_0x2f8f('0x50')](()=>{});}}exports['default']=Models;