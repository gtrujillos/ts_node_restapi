var a35_0x5229=['player_id','sync','then','__esModule','defineProperty','./locationPoints/location-points-model','./devices/devices-model','./userTypes/user-types-model','./vehicles/vehicles-model','./alarms/alarms-model','./players/players-model','./playerDevices/player-devices-model','./vehiclesCount/vehicles-count-model','usersModel','default','users','userTypesModel','user_types','companiesModel','companies','brandsModel','brands','deviceTypesModel','device_types','devicesModel','devices','vehiclesModel','pass_countings','locationPointsModel','alarmsModel','alarms','vehiclesCountModel','vehicles_count','playersModel','players','playerDevicesModel','player_devices','user_id','belongsTo','hasMany'];(function(_0xeab64,_0x26581f){var _0x250f1f=function(_0x2b1b57){while(--_0x2b1b57){_0xeab64['push'](_0xeab64['shift']());}};_0x250f1f(++_0x26581f);}(a35_0x5229,0x11b));var a35_0x7eea=function(_0xf7a838,_0x1e6379){_0xf7a838=_0xf7a838-0x0;var _0x3da6c8=a35_0x5229[_0xf7a838];return _0x3da6c8;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3bb292){return _0x3bb292&&_0x3bb292[a35_0x7eea('0x0')]?_0x3bb292:{'default':_0x3bb292};};Object[a35_0x7eea('0x1')](exports,'__esModule',{'value':!![]});const users_model_1=__importDefault(require('./users/users-model'));const location_points_model_1=__importDefault(require(a35_0x7eea('0x2')));const pass_countings_model_1=__importDefault(require('./passCountings/pass-countings-model'));const sync_files_model_1=__importDefault(require('./syncFiles/sync-files-model'));const devices_model_1=__importDefault(require(a35_0x7eea('0x3')));const device_types_model_1=__importDefault(require('./deviceTypes/device-types-model'));const user_types_model_1=__importDefault(require(a35_0x7eea('0x4')));const companies_model_1=__importDefault(require('./companies/companies-model'));const vehicles_model_1=__importDefault(require(a35_0x7eea('0x5')));const brands_model_1=__importDefault(require('./brands/brands-model'));const alarms_model_1=__importDefault(require(a35_0x7eea('0x6')));const players_model_1=__importDefault(require(a35_0x7eea('0x7')));const player_devices_model_1=__importDefault(require(a35_0x7eea('0x8')));const vehicles_count_model_1=__importDefault(require(a35_0x7eea('0x9')));class Models{constructor(_0x11d8dc){this[a35_0x7eea('0xa')]=new users_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0xc'));this[a35_0x7eea('0xd')]=new user_types_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0xe'));this[a35_0x7eea('0xf')]=new companies_model_1['default'](_0x11d8dc,a35_0x7eea('0x10'),this['usersModel']);this[a35_0x7eea('0x11')]=new brands_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x12'));this[a35_0x7eea('0x13')]=new device_types_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x14'));this[a35_0x7eea('0x15')]=new devices_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x16'),this['deviceTypesModel'],this[a35_0x7eea('0x11')]);this[a35_0x7eea('0x17')]=new vehicles_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,'vehicles',this['companiesModel'],this[a35_0x7eea('0x11')]);this['passCountingsModel']=new pass_countings_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x18'));this[a35_0x7eea('0x19')]=new location_points_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,'location_points',a35_0x7eea('0x16'));this['syncFilesModel']=new sync_files_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,'sync_files');this[a35_0x7eea('0x1a')]=new alarms_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x1b'),this[a35_0x7eea('0x15')]);this[a35_0x7eea('0x1c')]=new vehicles_count_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x1d'),this['vehiclesModel']);this[a35_0x7eea('0x1e')]=new players_model_1['default'](_0x11d8dc,a35_0x7eea('0x1f'),this['usersModel']);this[a35_0x7eea('0x20')]=new player_devices_model_1[(a35_0x7eea('0xb'))](_0x11d8dc,a35_0x7eea('0x21'),this[a35_0x7eea('0x15')],this['playersModel']);this[a35_0x7eea('0xa')]['hasMany'](this[a35_0x7eea('0x1e')],{'foreignKey':a35_0x7eea('0x22')});this[a35_0x7eea('0x1e')][a35_0x7eea('0x23')](this[a35_0x7eea('0xa')],{'foreignKey':a35_0x7eea('0x22')});this['playersModel'][a35_0x7eea('0x24')](this[a35_0x7eea('0x20')],{'foreignKey':'player_id'});this[a35_0x7eea('0x20')]['belongsTo'](this[a35_0x7eea('0x1e')],{'foreignKey':a35_0x7eea('0x25')});this['playerDevicesModel']['belongsTo'](this[a35_0x7eea('0x1e')]);_0x11d8dc[a35_0x7eea('0x26')]({'force':![]})[a35_0x7eea('0x27')](()=>{});}}exports[a35_0x7eea('0xb')]=Models;