var a96_0x3c97=['./deviceTypes/device-types-model','./userTypes/user-types-model','./companies/companies-model','./vehicles/vehicles-model','./brands/brands-model','./vehiclesCount/vehicles-count-model','./userCompanies/user-companies-model','./routeSchedules/route-schedules-model','./provinces/provinces-model','./cities/cities-model','./events/events-model','./eventStatuses/event-statuses-model','usersModelName','users','countriesModelName','countries','provincesModelName','provinces','citiesModelName','cities','companiesModelName','companies','routes','brands','vehicles','routeSchedulesModelName','route_schedules','eventsModelName','events','eventTypesModelName','event_types','countriesModel','provincesModel','default','citiesModel','usersModel','companiesModel','routesModel','routesModelName','brandsModelName','vehiclesModel','vehiclesModelName','routesSchedulesModel','user_types','userUserTypesModel','user_user_types','userTypesModel','devicesModel','devices','deviceTypesModel','passCountingsModel','location_points','syncFilesModel','sync_files','vehiclesCountModel','playersModel','players','playerDevicesModel','eventStatusModel','eventStatusModelName','eventTypesModel','eventsModel','hasMany','brand_id','belongsTo','brandsModel','event_type_id','event_status_id','vehicle_id','user_id','route_id','player_id','sync','then','__importDefault','__esModule','defineProperty','./users/users-model','./passCountings/pass-countings-model','./syncFiles/sync-files-model','./devices/devices-model'];(function(_0x53ca0c,_0xd0f613){var _0x1a5cdd=function(_0x18c2cb){while(--_0x18c2cb){_0x53ca0c['push'](_0x53ca0c['shift']());}};_0x1a5cdd(++_0xd0f613);}(a96_0x3c97,0x9b));var a96_0x4a0e=function(_0x22f54b,_0x25b10e){_0x22f54b=_0x22f54b-0x0;var _0xb25f87=a96_0x3c97[_0x22f54b];return _0xb25f87;};'use strict';var __importDefault=this&&this[a96_0x4a0e('0x0')]||function(_0x3783a2){return _0x3783a2&&_0x3783a2[a96_0x4a0e('0x1')]?_0x3783a2:{'default':_0x3783a2};};Object[a96_0x4a0e('0x2')](exports,a96_0x4a0e('0x1'),{'value':!![]});const users_model_1=__importDefault(require(a96_0x4a0e('0x3')));const location_points_model_1=__importDefault(require('./locationPoints/location-points-model'));const pass_countings_model_1=__importDefault(require(a96_0x4a0e('0x4')));const sync_files_model_1=__importDefault(require(a96_0x4a0e('0x5')));const devices_model_1=__importDefault(require(a96_0x4a0e('0x6')));const device_types_model_1=__importDefault(require(a96_0x4a0e('0x7')));const user_types_model_1=__importDefault(require(a96_0x4a0e('0x8')));const companies_model_1=__importDefault(require(a96_0x4a0e('0x9')));const vehicles_model_1=__importDefault(require(a96_0x4a0e('0xa')));const brands_model_1=__importDefault(require(a96_0x4a0e('0xb')));const players_model_1=__importDefault(require('./players/players-model'));const player_devices_model_1=__importDefault(require('./playerDevices/player-devices-model'));const vehicles_count_model_1=__importDefault(require(a96_0x4a0e('0xc')));const user_companies_model_1=__importDefault(require(a96_0x4a0e('0xd')));const user_user_types_model_1=__importDefault(require('./userUserTypes/user-user-types-model'));const routes_model_1=__importDefault(require('./routes/routes-model'));const route_schedules_model_1=__importDefault(require(a96_0x4a0e('0xe')));const provinces_model_1=__importDefault(require(a96_0x4a0e('0xf')));const cities_model_1=__importDefault(require(a96_0x4a0e('0x10')));const countries_model_1=__importDefault(require('./countries/countries-model'));const event_types_model_1=__importDefault(require('./eventTypes/event-types-model'));const events_model_1=__importDefault(require(a96_0x4a0e('0x11')));const event_statuses_model_1=__importDefault(require(a96_0x4a0e('0x12')));class Models{constructor(_0x41ee6b){this[a96_0x4a0e('0x13')]=a96_0x4a0e('0x14');this[a96_0x4a0e('0x15')]=a96_0x4a0e('0x16');this[a96_0x4a0e('0x17')]=a96_0x4a0e('0x18');this[a96_0x4a0e('0x19')]=a96_0x4a0e('0x1a');this[a96_0x4a0e('0x1b')]=a96_0x4a0e('0x1c');this['routesModelName']=a96_0x4a0e('0x1d');this['brandsModelName']=a96_0x4a0e('0x1e');this['vehiclesModelName']=a96_0x4a0e('0x1f');this[a96_0x4a0e('0x20')]=a96_0x4a0e('0x21');this[a96_0x4a0e('0x22')]=a96_0x4a0e('0x23');this[a96_0x4a0e('0x24')]=a96_0x4a0e('0x25');this['eventStatusModelName']='event_statuses';this[a96_0x4a0e('0x26')]=new countries_model_1['default'](_0x41ee6b,this[a96_0x4a0e('0x15')],this);this[a96_0x4a0e('0x27')]=new provinces_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this['provincesModelName'],this);this[a96_0x4a0e('0x29')]=new cities_model_1['default'](_0x41ee6b,this['citiesModelName'],this);this[a96_0x4a0e('0x2a')]=new users_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x13')],this);this[a96_0x4a0e('0x2b')]=new companies_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x1b')],this);this[a96_0x4a0e('0x2c')]=new routes_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x2d')],this);this['brandsModel']=new brands_model_1['default'](_0x41ee6b,this[a96_0x4a0e('0x2e')],this);this[a96_0x4a0e('0x2f')]=new vehicles_model_1['default'](_0x41ee6b,this[a96_0x4a0e('0x30')],this);this[a96_0x4a0e('0x31')]=new route_schedules_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x20')],this);this['userTypesModel']=new user_types_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,a96_0x4a0e('0x32'));this[a96_0x4a0e('0x33')]=new user_user_types_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,a96_0x4a0e('0x34'),this[a96_0x4a0e('0x2a')],this[a96_0x4a0e('0x35')]);this['userCompaniesModel']=new user_companies_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,'user_companies',this[a96_0x4a0e('0x2a')],this[a96_0x4a0e('0x2b')]);this['deviceTypesModel']=new device_types_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,'device_types');this[a96_0x4a0e('0x36')]=new devices_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,a96_0x4a0e('0x37'),this[a96_0x4a0e('0x38')],this['brandsModel']);this[a96_0x4a0e('0x39')]=new pass_countings_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,'pass_countings');this['locationPointsModel']=new location_points_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,a96_0x4a0e('0x3a'),a96_0x4a0e('0x37'));this[a96_0x4a0e('0x3b')]=new sync_files_model_1['default'](_0x41ee6b,a96_0x4a0e('0x3c'));this[a96_0x4a0e('0x3d')]=new vehicles_count_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,'vehicles_count',this[a96_0x4a0e('0x2f')]);this[a96_0x4a0e('0x3e')]=new players_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,a96_0x4a0e('0x3f'),this[a96_0x4a0e('0x2a')]);this[a96_0x4a0e('0x40')]=new player_devices_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,'player_devices',this[a96_0x4a0e('0x36')],this['playersModel']);this[a96_0x4a0e('0x41')]=new event_statuses_model_1['default'](_0x41ee6b,this[a96_0x4a0e('0x42')],this);this[a96_0x4a0e('0x43')]=new event_types_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x24')],this);this[a96_0x4a0e('0x44')]=new events_model_1[(a96_0x4a0e('0x28'))](_0x41ee6b,this[a96_0x4a0e('0x22')],this);this['brandsModel'][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x2f')],{'foreignKey':a96_0x4a0e('0x46')});this[a96_0x4a0e('0x2f')][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x48')],{'foreignKey':a96_0x4a0e('0x46')});this[a96_0x4a0e('0x43')][a96_0x4a0e('0x45')](this['eventsModel'],{'foreignKey':a96_0x4a0e('0x49')});this['eventsModel'][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x43')],{'foreignKey':a96_0x4a0e('0x49')});this['eventStatusModel']['hasMany'](this['eventsModel'],{'foreignKey':a96_0x4a0e('0x4a')});this[a96_0x4a0e('0x44')][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x41')],{'foreignKey':a96_0x4a0e('0x4a')});this['vehiclesModel'][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x44')],{'foreignKey':a96_0x4a0e('0x4b')});this[a96_0x4a0e('0x44')][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x2f')],{'foreignKey':'vehicle_id'});this[a96_0x4a0e('0x2a')]['hasMany'](this['routesSchedulesModel'],{'foreignKey':'user_id'});this['routesSchedulesModel'][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x2a')],{'foreignKey':a96_0x4a0e('0x4c')});this[a96_0x4a0e('0x2f')][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x31')],{'foreignKey':a96_0x4a0e('0x4b')});this[a96_0x4a0e('0x31')]['belongsTo'](this['vehiclesModel'],{'foreignKey':'vehicle_id'});this[a96_0x4a0e('0x2c')][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x31')],{'foreignKey':a96_0x4a0e('0x4d')});this[a96_0x4a0e('0x31')][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x2c')],{'foreignKey':a96_0x4a0e('0x4d')});this[a96_0x4a0e('0x2a')][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x3e')],{'foreignKey':a96_0x4a0e('0x4c')});this['playersModel'][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x2a')],{'foreignKey':'user_id'});this['playersModel'][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x40')],{'foreignKey':a96_0x4a0e('0x4e')});this['playerDevicesModel']['belongsTo'](this[a96_0x4a0e('0x3e')],{'foreignKey':a96_0x4a0e('0x4e')});this[a96_0x4a0e('0x40')]['belongsTo'](this[a96_0x4a0e('0x3e')]);this[a96_0x4a0e('0x2f')][a96_0x4a0e('0x45')](this[a96_0x4a0e('0x3d')],{'foreignKey':a96_0x4a0e('0x4b')});this[a96_0x4a0e('0x3d')][a96_0x4a0e('0x47')](this[a96_0x4a0e('0x2f')],{'foreignKey':a96_0x4a0e('0x4b')});_0x41ee6b[a96_0x4a0e('0x4f')]({'force':![]})[a96_0x4a0e('0x50')](()=>{});}}exports[a96_0x4a0e('0x28')]=Models;