var a35_0x38bb=['player_devices','hasMany','user_id','belongsTo','player_id','vehiclesCountModel','vehicle_id','__importDefault','__esModule','defineProperty','./users/users-model','./locationPoints/location-points-model','./passCountings/pass-countings-model','./syncFiles/sync-files-model','./deviceTypes/device-types-model','./userTypes/user-types-model','./companies/companies-model','./vehicles/vehicles-model','./players/players-model','./playerDevices/player-devices-model','./vehiclesCount/vehicles-count-model','users','userTypesModel','default','user_types','companiesModel','companies','usersModel','brandsModel','brands','device_types','devicesModel','devices','deviceTypesModel','vehiclesModel','vehicles','passCountingsModel','pass_countings','location_points','sync_files','alarms','vehicles_count','playersModel','players','playerDevicesModel'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a35_0x38bb,0x1c9));var a35_0x5241=function(_0x2fbeca,_0x302170){_0x2fbeca=_0x2fbeca-0x0;var _0x1ae02f=a35_0x38bb[_0x2fbeca];return _0x1ae02f;};'use strict';var __importDefault=this&&this[a35_0x5241('0x0')]||function(_0x5d03a3){return _0x5d03a3&&_0x5d03a3[a35_0x5241('0x1')]?_0x5d03a3:{'default':_0x5d03a3};};Object[a35_0x5241('0x2')](exports,a35_0x5241('0x1'),{'value':!![]});const users_model_1=__importDefault(require(a35_0x5241('0x3')));const location_points_model_1=__importDefault(require(a35_0x5241('0x4')));const pass_countings_model_1=__importDefault(require(a35_0x5241('0x5')));const sync_files_model_1=__importDefault(require(a35_0x5241('0x6')));const devices_model_1=__importDefault(require('./devices/devices-model'));const device_types_model_1=__importDefault(require(a35_0x5241('0x7')));const user_types_model_1=__importDefault(require(a35_0x5241('0x8')));const companies_model_1=__importDefault(require(a35_0x5241('0x9')));const vehicles_model_1=__importDefault(require(a35_0x5241('0xa')));const brands_model_1=__importDefault(require('./brands/brands-model'));const alarms_model_1=__importDefault(require('./alarms/alarms-model'));const players_model_1=__importDefault(require(a35_0x5241('0xb')));const player_devices_model_1=__importDefault(require(a35_0x5241('0xc')));const vehicles_count_model_1=__importDefault(require(a35_0x5241('0xd')));class Models{constructor(_0x16b529){this['usersModel']=new users_model_1['default'](_0x16b529,a35_0x5241('0xe'));this[a35_0x5241('0xf')]=new user_types_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x11'));this[a35_0x5241('0x12')]=new companies_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x13'),this[a35_0x5241('0x14')]);this[a35_0x5241('0x15')]=new brands_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x16'));this['deviceTypesModel']=new device_types_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x17'));this[a35_0x5241('0x18')]=new devices_model_1['default'](_0x16b529,a35_0x5241('0x19'),this[a35_0x5241('0x1a')],this[a35_0x5241('0x15')]);this[a35_0x5241('0x1b')]=new vehicles_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x1c'),this[a35_0x5241('0x12')],this[a35_0x5241('0x15')]);this[a35_0x5241('0x1d')]=new pass_countings_model_1['default'](_0x16b529,a35_0x5241('0x1e'));this['locationPointsModel']=new location_points_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x1f'),a35_0x5241('0x19'));this['syncFilesModel']=new sync_files_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x20'));this['alarmsModel']=new alarms_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x21'),this['devicesModel']);this['vehiclesCountModel']=new vehicles_count_model_1['default'](_0x16b529,a35_0x5241('0x22'),this[a35_0x5241('0x1b')]);this[a35_0x5241('0x23')]=new players_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x24'),this[a35_0x5241('0x14')]);this[a35_0x5241('0x25')]=new player_devices_model_1[(a35_0x5241('0x10'))](_0x16b529,a35_0x5241('0x26'),this[a35_0x5241('0x18')],this[a35_0x5241('0x23')]);this[a35_0x5241('0x14')][a35_0x5241('0x27')](this['playersModel'],{'foreignKey':a35_0x5241('0x28')});this[a35_0x5241('0x23')][a35_0x5241('0x29')](this[a35_0x5241('0x14')],{'foreignKey':'user_id'});this[a35_0x5241('0x23')][a35_0x5241('0x27')](this[a35_0x5241('0x25')],{'foreignKey':a35_0x5241('0x2a')});this[a35_0x5241('0x25')][a35_0x5241('0x29')](this[a35_0x5241('0x23')],{'foreignKey':a35_0x5241('0x2a')});this[a35_0x5241('0x25')][a35_0x5241('0x29')](this['playersModel']);this[a35_0x5241('0x1b')]['hasMany'](this[a35_0x5241('0x2b')],{'foreignKey':a35_0x5241('0x2c')});this[a35_0x5241('0x2b')][a35_0x5241('0x29')](this[a35_0x5241('0x1b')],{'foreignKey':a35_0x5241('0x2c')});_0x16b529['sync']({'force':![]})['then'](()=>{});}}exports[a35_0x5241('0x10')]=Models;