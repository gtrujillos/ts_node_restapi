var a41_0x2fe2=['syncFilesModel','alarmsModel','alarms','eventTypesModel','event_types','eventsModel','events','devicesModel','vehiclesCountModel','playersModel','playerDevicesModel','player_devices','user_id','hasMany','player_id','belongsTo','vehicle_id','__importDefault','__esModule','./locationPoints/location-points-model','./syncFiles/sync-files-model','./devices/devices-model','./deviceTypes/device-types-model','./companies/companies-model','./vehicles/vehicles-model','./vehiclesCount/vehicles-count-model','./events/events-model','./eventTypes/event-types-model','userTypesModel','default','user_types','usersModel','users','companiesModel','brandsModel','brands','deviceTypesModel','device_types','devices','vehiclesModel','vehicles','passCountingsModel','pass_countings','locationPointsModel','location_points'];(function(_0x286c0b,_0x2e81b8){var _0x25f89d=function(_0x3fb198){while(--_0x3fb198){_0x286c0b['push'](_0x286c0b['shift']());}};_0x25f89d(++_0x2e81b8);}(a41_0x2fe2,0x1a6));var a41_0x136b=function(_0x112cd1,_0x880e57){_0x112cd1=_0x112cd1-0x0;var _0x58d71e=a41_0x2fe2[_0x112cd1];return _0x58d71e;};'use strict';var __importDefault=this&&this[a41_0x136b('0x0')]||function(_0x51e974){return _0x51e974&&_0x51e974['__esModule']?_0x51e974:{'default':_0x51e974};};Object['defineProperty'](exports,a41_0x136b('0x1'),{'value':!![]});const users_model_1=__importDefault(require('./users/users-model'));const location_points_model_1=__importDefault(require(a41_0x136b('0x2')));const pass_countings_model_1=__importDefault(require('./passCountings/pass-countings-model'));const sync_files_model_1=__importDefault(require(a41_0x136b('0x3')));const devices_model_1=__importDefault(require(a41_0x136b('0x4')));const device_types_model_1=__importDefault(require(a41_0x136b('0x5')));const user_types_model_1=__importDefault(require('./userTypes/user-types-model'));const companies_model_1=__importDefault(require(a41_0x136b('0x6')));const vehicles_model_1=__importDefault(require(a41_0x136b('0x7')));const brands_model_1=__importDefault(require('./brands/brands-model'));const alarms_model_1=__importDefault(require('./alarms/alarms-model'));const players_model_1=__importDefault(require('./players/players-model'));const player_devices_model_1=__importDefault(require('./playerDevices/player-devices-model'));const vehicles_count_model_1=__importDefault(require(a41_0x136b('0x8')));const events_model_1=__importDefault(require(a41_0x136b('0x9')));const event_types_model_1=__importDefault(require(a41_0x136b('0xa')));class Models{constructor(_0x55f75f){this[a41_0x136b('0xb')]=new user_types_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0xd'));this[a41_0x136b('0xe')]=new users_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0xf'),null,this[a41_0x136b('0xb')]);this[a41_0x136b('0x10')]=new companies_model_1[(a41_0x136b('0xc'))](_0x55f75f,'companies',this[a41_0x136b('0xe')]);this[a41_0x136b('0x11')]=new brands_model_1['default'](_0x55f75f,a41_0x136b('0x12'));this[a41_0x136b('0x13')]=new device_types_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x14'));this['devicesModel']=new devices_model_1['default'](_0x55f75f,a41_0x136b('0x15'),this[a41_0x136b('0x13')],this['brandsModel']);this[a41_0x136b('0x16')]=new vehicles_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x17'),this[a41_0x136b('0x10')],this[a41_0x136b('0x11')]);this[a41_0x136b('0x18')]=new pass_countings_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x19'));this[a41_0x136b('0x1a')]=new location_points_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x1b'),a41_0x136b('0x15'));this[a41_0x136b('0x1c')]=new sync_files_model_1['default'](_0x55f75f,'sync_files');this[a41_0x136b('0x1d')]=new alarms_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x1e'),this['devicesModel']);this[a41_0x136b('0x1f')]=new event_types_model_1[(a41_0x136b('0xc'))](_0x55f75f,a41_0x136b('0x20'));this[a41_0x136b('0x21')]=new events_model_1['default'](_0x55f75f,a41_0x136b('0x22'),this[a41_0x136b('0x1f')],this[a41_0x136b('0x23')],this[a41_0x136b('0xe')]);this[a41_0x136b('0x24')]=new vehicles_count_model_1[(a41_0x136b('0xc'))](_0x55f75f,'vehicles_count',this[a41_0x136b('0x16')]);this[a41_0x136b('0x25')]=new players_model_1[(a41_0x136b('0xc'))](_0x55f75f,'players',this[a41_0x136b('0xe')]);this[a41_0x136b('0x26')]=new player_devices_model_1['default'](_0x55f75f,a41_0x136b('0x27'),this[a41_0x136b('0x23')],this['playersModel']);this[a41_0x136b('0xe')]['hasMany'](this[a41_0x136b('0x25')],{'foreignKey':'user_id'});this['playersModel']['belongsTo'](this[a41_0x136b('0xe')],{'foreignKey':a41_0x136b('0x28')});this[a41_0x136b('0x25')][a41_0x136b('0x29')](this[a41_0x136b('0x26')],{'foreignKey':a41_0x136b('0x2a')});this['playerDevicesModel'][a41_0x136b('0x2b')](this[a41_0x136b('0x25')],{'foreignKey':a41_0x136b('0x2a')});this[a41_0x136b('0x26')]['belongsTo'](this[a41_0x136b('0x25')]);this[a41_0x136b('0x16')][a41_0x136b('0x29')](this[a41_0x136b('0x24')],{'foreignKey':a41_0x136b('0x2c')});this[a41_0x136b('0x24')][a41_0x136b('0x2b')](this['vehiclesModel'],{'foreignKey':a41_0x136b('0x2c')});_0x55f75f['sync']({'force':![]})['then'](()=>{});}}exports[a41_0x136b('0xc')]=Models;