var a35_0x6432=['usersModel','brandsModel','brands','deviceTypesModel','device_types','devicesModel','vehiclesModel','vehicles','pass_countings','locationPointsModel','location_points','devices','syncFilesModel','sync_files','alarmsModel','alarms','vehiclesCountModel','vehicles_count','playersModel','players','player_devices','user_id','belongsTo','hasMany','playerDevicesModel','player_id','vehicle_id','__importDefault','defineProperty','./users/users-model','./locationPoints/location-points-model','./passCountings/pass-countings-model','./devices/devices-model','./deviceTypes/device-types-model','./userTypes/user-types-model','./vehicles/vehicles-model','./brands/brands-model','./alarms/alarms-model','./players/players-model','./playerDevices/player-devices-model','./vehiclesCount/vehicles-count-model','default','users','user_types','companiesModel'];(function(_0x434ce6,_0xbcc853){var _0x2893e4=function(_0x5c7106){while(--_0x5c7106){_0x434ce6['push'](_0x434ce6['shift']());}};_0x2893e4(++_0xbcc853);}(a35_0x6432,0x1dd));var a35_0x2c49=function(_0x2dba02,_0x38da27){_0x2dba02=_0x2dba02-0x0;var _0x47e6ac=a35_0x6432[_0x2dba02];return _0x47e6ac;};'use strict';var __importDefault=this&&this[a35_0x2c49('0x0')]||function(_0x12893b){return _0x12893b&&_0x12893b['__esModule']?_0x12893b:{'default':_0x12893b};};Object[a35_0x2c49('0x1')](exports,'__esModule',{'value':!![]});const users_model_1=__importDefault(require(a35_0x2c49('0x2')));const location_points_model_1=__importDefault(require(a35_0x2c49('0x3')));const pass_countings_model_1=__importDefault(require(a35_0x2c49('0x4')));const sync_files_model_1=__importDefault(require('./syncFiles/sync-files-model'));const devices_model_1=__importDefault(require(a35_0x2c49('0x5')));const device_types_model_1=__importDefault(require(a35_0x2c49('0x6')));const user_types_model_1=__importDefault(require(a35_0x2c49('0x7')));const companies_model_1=__importDefault(require('./companies/companies-model'));const vehicles_model_1=__importDefault(require(a35_0x2c49('0x8')));const brands_model_1=__importDefault(require(a35_0x2c49('0x9')));const alarms_model_1=__importDefault(require(a35_0x2c49('0xa')));const players_model_1=__importDefault(require(a35_0x2c49('0xb')));const player_devices_model_1=__importDefault(require(a35_0x2c49('0xc')));const vehicles_count_model_1=__importDefault(require(a35_0x2c49('0xd')));class Models{constructor(_0x58d4d7){this['usersModel']=new users_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0xf'));this['userTypesModel']=new user_types_model_1['default'](_0x58d4d7,a35_0x2c49('0x10'));this[a35_0x2c49('0x11')]=new companies_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,'companies',this[a35_0x2c49('0x12')]);this[a35_0x2c49('0x13')]=new brands_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x14'));this[a35_0x2c49('0x15')]=new device_types_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x16'));this[a35_0x2c49('0x17')]=new devices_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,'devices',this[a35_0x2c49('0x15')],this[a35_0x2c49('0x13')]);this[a35_0x2c49('0x18')]=new vehicles_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x19'),this[a35_0x2c49('0x11')],this['brandsModel']);this['passCountingsModel']=new pass_countings_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x1a'));this[a35_0x2c49('0x1b')]=new location_points_model_1['default'](_0x58d4d7,a35_0x2c49('0x1c'),a35_0x2c49('0x1d'));this[a35_0x2c49('0x1e')]=new sync_files_model_1['default'](_0x58d4d7,a35_0x2c49('0x1f'));this[a35_0x2c49('0x20')]=new alarms_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x21'),this[a35_0x2c49('0x17')]);this[a35_0x2c49('0x22')]=new vehicles_count_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x23'),this[a35_0x2c49('0x18')]);this[a35_0x2c49('0x24')]=new players_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x25'),this[a35_0x2c49('0x12')]);this['playerDevicesModel']=new player_devices_model_1[(a35_0x2c49('0xe'))](_0x58d4d7,a35_0x2c49('0x26'),this[a35_0x2c49('0x17')],this[a35_0x2c49('0x24')]);this['usersModel']['hasMany'](this[a35_0x2c49('0x24')],{'foreignKey':a35_0x2c49('0x27')});this[a35_0x2c49('0x24')][a35_0x2c49('0x28')](this[a35_0x2c49('0x12')],{'foreignKey':a35_0x2c49('0x27')});this['playersModel'][a35_0x2c49('0x29')](this[a35_0x2c49('0x2a')],{'foreignKey':a35_0x2c49('0x2b')});this['playerDevicesModel']['belongsTo'](this[a35_0x2c49('0x24')],{'foreignKey':a35_0x2c49('0x2b')});this[a35_0x2c49('0x2a')][a35_0x2c49('0x28')](this[a35_0x2c49('0x24')]);this[a35_0x2c49('0x18')][a35_0x2c49('0x29')](this[a35_0x2c49('0x22')],{'foreignKey':a35_0x2c49('0x2c')});this[a35_0x2c49('0x22')][a35_0x2c49('0x28')](this[a35_0x2c49('0x18')],{'foreignKey':'vehicle_id'});_0x58d4d7['sync']({'force':![]})['then'](()=>{});}}exports[a35_0x2c49('0xe')]=Models;