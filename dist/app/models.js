var a96_0x2740=['route_schedules','eventsModelName','events','eventTypesModelName','event_types','eventStatusModelName','event_statuses','countriesModel','default','citiesModel','usersModel','companiesModel','brandsModel','vehiclesModel','routesSchedulesModel','routeSchedulesModelName','userTypesModel','userUserTypesModel','user_user_types','user_companies','deviceTypesModel','devices','passCountingsModel','pass_countings','locationPointsModel','location_points','syncFilesModel','sync_files','vehiclesCountModel','vehicles_count','playersModel','players','playerDevicesModel','player_devices','devicesModel','eventStatusModel','eventTypesModel','eventsModel','brand_id','belongsTo','hasMany','event_type_id','event_status_id','vehicle_id','user_id','routesModel','route_id','player_id','sync','then','__importDefault','__esModule','defineProperty','./users/users-model','./locationPoints/location-points-model','./passCountings/pass-countings-model','./deviceTypes/device-types-model','./companies/companies-model','./vehicles/vehicles-model','./brands/brands-model','./players/players-model','./userCompanies/user-companies-model','./userUserTypes/user-user-types-model','./routeSchedules/route-schedules-model','./provinces/provinces-model','./cities/cities-model','./countries/countries-model','./eventTypes/event-types-model','./events/events-model','./eventStatuses/event-statuses-model','usersModelName','countriesModelName','countries','provincesModelName','provinces','citiesModelName','cities','companiesModelName','routesModelName','routes','brandsModelName','brands','vehiclesModelName'];(function(_0x1be482,_0x47c10c){var _0x316068=function(_0x4c11b5){while(--_0x4c11b5){_0x1be482['push'](_0x1be482['shift']());}};_0x316068(++_0x47c10c);}(a96_0x2740,0x17e));var a96_0x18c7=function(_0x53ae03,_0x489a3d){_0x53ae03=_0x53ae03-0x0;var _0x8f0f9d=a96_0x2740[_0x53ae03];return _0x8f0f9d;};'use strict';var __importDefault=this&&this[a96_0x18c7('0x0')]||function(_0x8dea1b){return _0x8dea1b&&_0x8dea1b[a96_0x18c7('0x1')]?_0x8dea1b:{'default':_0x8dea1b};};Object[a96_0x18c7('0x2')](exports,a96_0x18c7('0x1'),{'value':!![]});const users_model_1=__importDefault(require(a96_0x18c7('0x3')));const location_points_model_1=__importDefault(require(a96_0x18c7('0x4')));const pass_countings_model_1=__importDefault(require(a96_0x18c7('0x5')));const sync_files_model_1=__importDefault(require('./syncFiles/sync-files-model'));const devices_model_1=__importDefault(require('./devices/devices-model'));const device_types_model_1=__importDefault(require(a96_0x18c7('0x6')));const user_types_model_1=__importDefault(require('./userTypes/user-types-model'));const companies_model_1=__importDefault(require(a96_0x18c7('0x7')));const vehicles_model_1=__importDefault(require(a96_0x18c7('0x8')));const brands_model_1=__importDefault(require(a96_0x18c7('0x9')));const players_model_1=__importDefault(require(a96_0x18c7('0xa')));const player_devices_model_1=__importDefault(require('./playerDevices/player-devices-model'));const vehicles_count_model_1=__importDefault(require('./vehiclesCount/vehicles-count-model'));const user_companies_model_1=__importDefault(require(a96_0x18c7('0xb')));const user_user_types_model_1=__importDefault(require(a96_0x18c7('0xc')));const routes_model_1=__importDefault(require('./routes/routes-model'));const route_schedules_model_1=__importDefault(require(a96_0x18c7('0xd')));const provinces_model_1=__importDefault(require(a96_0x18c7('0xe')));const cities_model_1=__importDefault(require(a96_0x18c7('0xf')));const countries_model_1=__importDefault(require(a96_0x18c7('0x10')));const event_types_model_1=__importDefault(require(a96_0x18c7('0x11')));const events_model_1=__importDefault(require(a96_0x18c7('0x12')));const event_statuses_model_1=__importDefault(require(a96_0x18c7('0x13')));class Models{constructor(_0x17d061){this[a96_0x18c7('0x14')]='users';this[a96_0x18c7('0x15')]=a96_0x18c7('0x16');this[a96_0x18c7('0x17')]=a96_0x18c7('0x18');this[a96_0x18c7('0x19')]=a96_0x18c7('0x1a');this[a96_0x18c7('0x1b')]='companies';this[a96_0x18c7('0x1c')]=a96_0x18c7('0x1d');this[a96_0x18c7('0x1e')]=a96_0x18c7('0x1f');this[a96_0x18c7('0x20')]='vehicles';this['routeSchedulesModelName']=a96_0x18c7('0x21');this[a96_0x18c7('0x22')]=a96_0x18c7('0x23');this[a96_0x18c7('0x24')]=a96_0x18c7('0x25');this[a96_0x18c7('0x26')]=a96_0x18c7('0x27');this[a96_0x18c7('0x28')]=new countries_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x15')],this);this['provincesModel']=new provinces_model_1[(a96_0x18c7('0x29'))](_0x17d061,this['provincesModelName'],this);this[a96_0x18c7('0x2a')]=new cities_model_1[(a96_0x18c7('0x29'))](_0x17d061,this['citiesModelName'],this);this[a96_0x18c7('0x2b')]=new users_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x14')],this);this[a96_0x18c7('0x2c')]=new companies_model_1['default'](_0x17d061,this['companiesModelName'],this);this['routesModel']=new routes_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x1c')],this);this[a96_0x18c7('0x2d')]=new brands_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x1e')],this);this[a96_0x18c7('0x2e')]=new vehicles_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x20')],this);this[a96_0x18c7('0x2f')]=new route_schedules_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x30')],this);this[a96_0x18c7('0x31')]=new user_types_model_1['default'](_0x17d061,'user_types');this[a96_0x18c7('0x32')]=new user_user_types_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x33'),this[a96_0x18c7('0x2b')],this[a96_0x18c7('0x31')]);this['userCompaniesModel']=new user_companies_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x34'),this['usersModel'],this[a96_0x18c7('0x2c')]);this[a96_0x18c7('0x35')]=new device_types_model_1['default'](_0x17d061,'device_types');this['devicesModel']=new devices_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x36'),this[a96_0x18c7('0x35')],this['brandsModel']);this[a96_0x18c7('0x37')]=new pass_countings_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x38'));this[a96_0x18c7('0x39')]=new location_points_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x3a'),a96_0x18c7('0x36'));this[a96_0x18c7('0x3b')]=new sync_files_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x3c'));this[a96_0x18c7('0x3d')]=new vehicles_count_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x3e'),this[a96_0x18c7('0x2e')]);this[a96_0x18c7('0x3f')]=new players_model_1['default'](_0x17d061,a96_0x18c7('0x40'),this[a96_0x18c7('0x2b')]);this[a96_0x18c7('0x41')]=new player_devices_model_1[(a96_0x18c7('0x29'))](_0x17d061,a96_0x18c7('0x42'),this[a96_0x18c7('0x43')],this[a96_0x18c7('0x3f')]);this[a96_0x18c7('0x44')]=new event_statuses_model_1['default'](_0x17d061,this['eventStatusModelName'],this);this[a96_0x18c7('0x45')]=new event_types_model_1[(a96_0x18c7('0x29'))](_0x17d061,this['eventTypesModelName'],this);this[a96_0x18c7('0x46')]=new events_model_1[(a96_0x18c7('0x29'))](_0x17d061,this[a96_0x18c7('0x22')],this);this[a96_0x18c7('0x2d')]['hasMany'](this[a96_0x18c7('0x2e')],{'foreignKey':a96_0x18c7('0x47')});this[a96_0x18c7('0x2e')][a96_0x18c7('0x48')](this[a96_0x18c7('0x2d')],{'foreignKey':'brand_id'});this['eventTypesModel'][a96_0x18c7('0x49')](this['eventsModel'],{'foreignKey':'event_type_id'});this[a96_0x18c7('0x46')][a96_0x18c7('0x48')](this[a96_0x18c7('0x45')],{'foreignKey':a96_0x18c7('0x4a')});this[a96_0x18c7('0x44')]['hasMany'](this[a96_0x18c7('0x46')],{'foreignKey':a96_0x18c7('0x4b')});this[a96_0x18c7('0x46')]['belongsTo'](this[a96_0x18c7('0x44')],{'foreignKey':a96_0x18c7('0x4b')});this[a96_0x18c7('0x2e')][a96_0x18c7('0x49')](this[a96_0x18c7('0x46')],{'foreignKey':'vehicle_id'});this[a96_0x18c7('0x46')][a96_0x18c7('0x48')](this[a96_0x18c7('0x2e')],{'foreignKey':a96_0x18c7('0x4c')});this[a96_0x18c7('0x2b')][a96_0x18c7('0x49')](this[a96_0x18c7('0x2f')],{'foreignKey':a96_0x18c7('0x4d')});this['routesSchedulesModel'][a96_0x18c7('0x48')](this[a96_0x18c7('0x2b')],{'foreignKey':'user_id'});this['vehiclesModel'][a96_0x18c7('0x49')](this[a96_0x18c7('0x2f')],{'foreignKey':'vehicle_id'});this[a96_0x18c7('0x2f')][a96_0x18c7('0x48')](this['vehiclesModel'],{'foreignKey':a96_0x18c7('0x4c')});this[a96_0x18c7('0x4e')][a96_0x18c7('0x49')](this['routesSchedulesModel'],{'foreignKey':a96_0x18c7('0x4f')});this[a96_0x18c7('0x2f')][a96_0x18c7('0x48')](this[a96_0x18c7('0x4e')],{'foreignKey':a96_0x18c7('0x4f')});this[a96_0x18c7('0x2b')]['hasMany'](this['playersModel'],{'foreignKey':'user_id'});this[a96_0x18c7('0x3f')][a96_0x18c7('0x48')](this[a96_0x18c7('0x2b')],{'foreignKey':a96_0x18c7('0x4d')});this['playersModel'][a96_0x18c7('0x49')](this[a96_0x18c7('0x41')],{'foreignKey':a96_0x18c7('0x50')});this[a96_0x18c7('0x41')][a96_0x18c7('0x48')](this[a96_0x18c7('0x3f')],{'foreignKey':a96_0x18c7('0x50')});this[a96_0x18c7('0x41')][a96_0x18c7('0x48')](this[a96_0x18c7('0x3f')]);this[a96_0x18c7('0x2e')][a96_0x18c7('0x49')](this[a96_0x18c7('0x3d')],{'foreignKey':a96_0x18c7('0x4c')});this[a96_0x18c7('0x3d')]['belongsTo'](this[a96_0x18c7('0x2e')],{'foreignKey':'vehicle_id'});_0x17d061[a96_0x18c7('0x51')]({'force':![]})[a96_0x18c7('0x52')](()=>{});}}exports[a96_0x18c7('0x29')]=Models;