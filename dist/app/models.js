var a34_0x5e34=['./players/players-model','./playerDevices/player-devices-model','./plates/plates-model','usersModel','default','users','userTypesModel','companiesModel','companies','brands','deviceTypesModel','device_types','devicesModel','devices','vehiclesModel','vehicles','passCountingsModel','pass_countings','locationPointsModel','syncFilesModel','sync_files','alarms','plates','playersModel','players','playerDevicesModel','player_devices','sync','__importDefault','__esModule','./locationPoints/location-points-model','./syncFiles/sync-files-model','./devices/devices-model','./userTypes/user-types-model','./companies/companies-model','./vehicles/vehicles-model','./brands/brands-model','./alarms/alarms-model'];(function(_0x36fa53,_0xe8ad91){var _0x1e0471=function(_0x2ef7a4){while(--_0x2ef7a4){_0x36fa53['push'](_0x36fa53['shift']());}};_0x1e0471(++_0xe8ad91);}(a34_0x5e34,0xda));var a34_0x1078=function(_0x31c08b,_0x21bbb6){_0x31c08b=_0x31c08b-0x0;var _0x3efae0=a34_0x5e34[_0x31c08b];return _0x3efae0;};'use strict';var __importDefault=this&&this[a34_0x1078('0x0')]||function(_0x1bc32a){return _0x1bc32a&&_0x1bc32a[a34_0x1078('0x1')]?_0x1bc32a:{'default':_0x1bc32a};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const users_model_1=__importDefault(require('./users/users-model'));const location_points_model_1=__importDefault(require(a34_0x1078('0x2')));const pass_countings_model_1=__importDefault(require('./passCountings/pass-countings-model'));const sync_files_model_1=__importDefault(require(a34_0x1078('0x3')));const devices_model_1=__importDefault(require(a34_0x1078('0x4')));const device_types_model_1=__importDefault(require('./deviceTypes/device-types-model'));const user_types_model_1=__importDefault(require(a34_0x1078('0x5')));const companies_model_1=__importDefault(require(a34_0x1078('0x6')));const vehicles_model_1=__importDefault(require(a34_0x1078('0x7')));const brands_model_1=__importDefault(require(a34_0x1078('0x8')));const alarms_model_1=__importDefault(require(a34_0x1078('0x9')));const players_model_1=__importDefault(require(a34_0x1078('0xa')));const player_devices_model_1=__importDefault(require(a34_0x1078('0xb')));const plates_model_1=__importDefault(require(a34_0x1078('0xc')));class Models{constructor(_0x229fcc){this[a34_0x1078('0xd')]=new users_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0xf'));this[a34_0x1078('0x10')]=new user_types_model_1['default'](_0x229fcc,'user_types');this[a34_0x1078('0x11')]=new companies_model_1['default'](_0x229fcc,a34_0x1078('0x12'),this['usersModel']);this['brandsModel']=new brands_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x13'));this[a34_0x1078('0x14')]=new device_types_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x15'));this[a34_0x1078('0x16')]=new devices_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x17'),this['deviceTypesModel'],this['brandsModel']);this[a34_0x1078('0x18')]=new vehicles_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x19'),this[a34_0x1078('0x11')],this['brandsModel']);this[a34_0x1078('0x1a')]=new pass_countings_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x1b'));this[a34_0x1078('0x1c')]=new location_points_model_1[(a34_0x1078('0xe'))](_0x229fcc,'location_points',a34_0x1078('0x17'));this[a34_0x1078('0x1d')]=new sync_files_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x1e'));this['alarmsModel']=new alarms_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x1f'),this[a34_0x1078('0x16')]);this['platesModel']=new plates_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x20'));this[a34_0x1078('0x21')]=new players_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x22'),this[a34_0x1078('0xd')]);this[a34_0x1078('0x23')]=new player_devices_model_1[(a34_0x1078('0xe'))](_0x229fcc,a34_0x1078('0x24'),this['devicesModel'],this[a34_0x1078('0x21')]);_0x229fcc[a34_0x1078('0x25')]({'force':![]})['then'](()=>{});}}exports[a34_0x1078('0xe')]=Models;