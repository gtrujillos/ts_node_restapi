var a35_0xe693=['default','users','userTypesModel','user_types','companiesModel','companies','brandsModel','brands','deviceTypesModel','device_types','devicesModel','devices','vehiclesModel','vehicles','passCountingsModel','locationPointsModel','location_points','alarmsModel','alarms','vehiclesCountModel','vehicles_count','playersModel','players','playerDevicesModel','player_devices','sync','then','__importDefault','__esModule','defineProperty','./users/users-model','./locationPoints/location-points-model','./passCountings/pass-countings-model','./syncFiles/sync-files-model','./devices/devices-model','./deviceTypes/device-types-model','./userTypes/user-types-model','./companies/companies-model','./vehicles/vehicles-model','./players/players-model','./playerDevices/player-devices-model','usersModel'];(function(_0x32c214,_0x14b0f0){var _0x5b0827=function(_0x42260a){while(--_0x42260a){_0x32c214['push'](_0x32c214['shift']());}};_0x5b0827(++_0x14b0f0);}(a35_0xe693,0x16b));var a35_0x394e=function(_0x126fa4,_0x2dc4b5){_0x126fa4=_0x126fa4-0x0;var _0xcbe96a=a35_0xe693[_0x126fa4];return _0xcbe96a;};'use strict';var __importDefault=this&&this[a35_0x394e('0x0')]||function(_0x50e1d1){return _0x50e1d1&&_0x50e1d1[a35_0x394e('0x1')]?_0x50e1d1:{'default':_0x50e1d1};};Object[a35_0x394e('0x2')](exports,a35_0x394e('0x1'),{'value':!![]});const users_model_1=__importDefault(require(a35_0x394e('0x3')));const location_points_model_1=__importDefault(require(a35_0x394e('0x4')));const pass_countings_model_1=__importDefault(require(a35_0x394e('0x5')));const sync_files_model_1=__importDefault(require(a35_0x394e('0x6')));const devices_model_1=__importDefault(require(a35_0x394e('0x7')));const device_types_model_1=__importDefault(require(a35_0x394e('0x8')));const user_types_model_1=__importDefault(require(a35_0x394e('0x9')));const companies_model_1=__importDefault(require(a35_0x394e('0xa')));const vehicles_model_1=__importDefault(require(a35_0x394e('0xb')));const brands_model_1=__importDefault(require('./brands/brands-model'));const alarms_model_1=__importDefault(require('./alarms/alarms-model'));const players_model_1=__importDefault(require(a35_0x394e('0xc')));const player_devices_model_1=__importDefault(require(a35_0x394e('0xd')));const vehicles_count_model_1=__importDefault(require('./vehiclesCount/vehicles-count-model'));class Models{constructor(_0x202960){this[a35_0x394e('0xe')]=new users_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x10'));this[a35_0x394e('0x11')]=new user_types_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x12'));this[a35_0x394e('0x13')]=new companies_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x14'),this[a35_0x394e('0xe')]);this[a35_0x394e('0x15')]=new brands_model_1['default'](_0x202960,a35_0x394e('0x16'));this[a35_0x394e('0x17')]=new device_types_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x18'));this[a35_0x394e('0x19')]=new devices_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x1a'),this[a35_0x394e('0x17')],this[a35_0x394e('0x15')]);this[a35_0x394e('0x1b')]=new vehicles_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x1c'),this['companiesModel'],this[a35_0x394e('0x15')]);this[a35_0x394e('0x1d')]=new pass_countings_model_1[(a35_0x394e('0xf'))](_0x202960,'pass_countings');this[a35_0x394e('0x1e')]=new location_points_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x1f'),'devices');this['syncFilesModel']=new sync_files_model_1[(a35_0x394e('0xf'))](_0x202960,'sync_files');this[a35_0x394e('0x20')]=new alarms_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x21'),this[a35_0x394e('0x19')]);this[a35_0x394e('0x22')]=new vehicles_count_model_1[(a35_0x394e('0xf'))](_0x202960,a35_0x394e('0x23'),this[a35_0x394e('0x1b')]);this[a35_0x394e('0x24')]=new players_model_1['default'](_0x202960,a35_0x394e('0x25'),this[a35_0x394e('0xe')]);this[a35_0x394e('0x26')]=new player_devices_model_1['default'](_0x202960,a35_0x394e('0x27'),this[a35_0x394e('0x19')],this[a35_0x394e('0x24')]);_0x202960[a35_0x394e('0x28')]({'force':![]})[a35_0x394e('0x29')](()=>{});}}exports['default']=Models;