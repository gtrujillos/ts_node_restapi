var a35_0x8930=['syncFilesModel','sync_files','alarmsModel','devicesModel','vehiclesCountModel','playersModel','players','playerDevicesModel','player_devices','hasMany','user_id','player_id','belongsTo','then','__importDefault','__esModule','defineProperty','./locationPoints/location-points-model','./devices/devices-model','./deviceTypes/device-types-model','./userTypes/user-types-model','./companies/companies-model','./vehicles/vehicles-model','./brands/brands-model','./players/players-model','./playerDevices/player-devices-model','./vehiclesCount/vehicles-count-model','default','userTypesModel','user_types','companiesModel','companies','usersModel','brandsModel','brands','deviceTypesModel','device_types','devices','vehiclesModel','location_points'];(function(_0x1d9cb4,_0x187a4a){var _0x247a6c=function(_0x1fd876){while(--_0x1fd876){_0x1d9cb4['push'](_0x1d9cb4['shift']());}};_0x247a6c(++_0x187a4a);}(a35_0x8930,0xd6));var a35_0x239d=function(_0x281072,_0x25220c){_0x281072=_0x281072-0x0;var _0x5efd56=a35_0x8930[_0x281072];return _0x5efd56;};'use strict';var __importDefault=this&&this[a35_0x239d('0x0')]||function(_0x549427){return _0x549427&&_0x549427[a35_0x239d('0x1')]?_0x549427:{'default':_0x549427};};Object[a35_0x239d('0x2')](exports,a35_0x239d('0x1'),{'value':!![]});const users_model_1=__importDefault(require('./users/users-model'));const location_points_model_1=__importDefault(require(a35_0x239d('0x3')));const pass_countings_model_1=__importDefault(require('./passCountings/pass-countings-model'));const sync_files_model_1=__importDefault(require('./syncFiles/sync-files-model'));const devices_model_1=__importDefault(require(a35_0x239d('0x4')));const device_types_model_1=__importDefault(require(a35_0x239d('0x5')));const user_types_model_1=__importDefault(require(a35_0x239d('0x6')));const companies_model_1=__importDefault(require(a35_0x239d('0x7')));const vehicles_model_1=__importDefault(require(a35_0x239d('0x8')));const brands_model_1=__importDefault(require(a35_0x239d('0x9')));const alarms_model_1=__importDefault(require('./alarms/alarms-model'));const players_model_1=__importDefault(require(a35_0x239d('0xa')));const player_devices_model_1=__importDefault(require(a35_0x239d('0xb')));const vehicles_count_model_1=__importDefault(require(a35_0x239d('0xc')));class Models{constructor(_0x7efca){this['usersModel']=new users_model_1[(a35_0x239d('0xd'))](_0x7efca,'users');this[a35_0x239d('0xe')]=new user_types_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0xf'));this[a35_0x239d('0x10')]=new companies_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x11'),this[a35_0x239d('0x12')]);this[a35_0x239d('0x13')]=new brands_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x14'));this[a35_0x239d('0x15')]=new device_types_model_1['default'](_0x7efca,a35_0x239d('0x16'));this['devicesModel']=new devices_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x17'),this[a35_0x239d('0x15')],this[a35_0x239d('0x13')]);this[a35_0x239d('0x18')]=new vehicles_model_1['default'](_0x7efca,'vehicles',this[a35_0x239d('0x10')],this[a35_0x239d('0x13')]);this['passCountingsModel']=new pass_countings_model_1[(a35_0x239d('0xd'))](_0x7efca,'pass_countings');this['locationPointsModel']=new location_points_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x19'),a35_0x239d('0x17'));this[a35_0x239d('0x1a')]=new sync_files_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x1b'));this[a35_0x239d('0x1c')]=new alarms_model_1['default'](_0x7efca,'alarms',this[a35_0x239d('0x1d')]);this[a35_0x239d('0x1e')]=new vehicles_count_model_1['default'](_0x7efca,'vehicles_count',this[a35_0x239d('0x18')]);this[a35_0x239d('0x1f')]=new players_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x20'),this[a35_0x239d('0x12')]);this[a35_0x239d('0x21')]=new player_devices_model_1[(a35_0x239d('0xd'))](_0x7efca,a35_0x239d('0x22'),this[a35_0x239d('0x1d')],this[a35_0x239d('0x1f')]);this[a35_0x239d('0x12')][a35_0x239d('0x23')](this[a35_0x239d('0x1f')],{'foreignKey':a35_0x239d('0x24')});this[a35_0x239d('0x1f')]['belongsTo'](this[a35_0x239d('0x12')],{'foreignKey':a35_0x239d('0x24')});this['playersModel'][a35_0x239d('0x23')](this[a35_0x239d('0x21')],{'foreignKey':a35_0x239d('0x25')});this[a35_0x239d('0x21')][a35_0x239d('0x26')](this[a35_0x239d('0x1f')],{'foreignKey':a35_0x239d('0x25')});this[a35_0x239d('0x21')][a35_0x239d('0x26')](this[a35_0x239d('0x1f')]);_0x7efca['sync']({'force':![]})[a35_0x239d('0x27')](()=>{});}}exports[a35_0x239d('0xd')]=Models;