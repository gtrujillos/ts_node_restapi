var a88_0x2e5b=['DOUBLE','getEntity','bind','import','__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','companiesModel','INTEGER','usersModel','vehiclesModel','devicesModel','eventTypesModel'];(function(_0x23e9bd,_0x589d9e){var _0x11c89=function(_0x3dde7d){while(--_0x3dde7d){_0x23e9bd['push'](_0x23e9bd['shift']());}};_0x11c89(++_0x589d9e);}(a88_0x2e5b,0x1d4));var a88_0xf7af=function(_0x130589,_0x157743){_0x130589=_0x130589-0x0;var _0x472792=a88_0x2e5b[_0x130589];return _0x472792;};'use strict';var __importDefault=this&&this[a88_0xf7af('0x0')]||function(_0x2f9b5f){return _0x2f9b5f&&_0x2f9b5f[a88_0xf7af('0x1')]?_0x2f9b5f:{'default':_0x2f9b5f};};Object[a88_0xf7af('0x2')](exports,a88_0xf7af('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a88_0xf7af('0x3')));const model_base_1=__importDefault(require(a88_0xf7af('0x4')));class EventsModel extends model_base_1[a88_0xf7af('0x5')]{constructor(_0x54ee37,_0x30e248,_0x4a34a0){super(_0x4a34a0);const _0x3c3291=function(_0x54ee37){const _0x2d729c={'company_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x4a34a0[a88_0xf7af('0x6')],'key':'id'}},'event_type_id':{'type':sequelize_1[a88_0xf7af('0x5')][a88_0xf7af('0x7')],'references':{'model':_0x4a34a0['eventTypesModel'],'key':'id'}},'user_id':{'type':sequelize_1[a88_0xf7af('0x5')]['INTEGER'],'references':{'model':_0x4a34a0[a88_0xf7af('0x8')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a88_0xf7af('0x5')][a88_0xf7af('0x7')],'references':{'model':_0x4a34a0[a88_0xf7af('0x9')],'key':'id'}},'device_id':{'type':sequelize_1[a88_0xf7af('0x5')][a88_0xf7af('0x7')],'references':{'model':_0x4a34a0[a88_0xf7af('0xa')],'key':'id'}},'event_status_id':{'type':sequelize_1[a88_0xf7af('0x5')][a88_0xf7af('0x7')],'references':{'model':_0x4a34a0[a88_0xf7af('0xb')],'key':'id'},'defaultValue':0x1},'latitude':{'type':sequelize_1[a88_0xf7af('0x5')][a88_0xf7af('0xc')]},'longitude':{'type':sequelize_1['default'][a88_0xf7af('0xc')]},'description':{'type':sequelize_1[a88_0xf7af('0x5')]['TEXT']},'reported_at':sequelize_1[a88_0xf7af('0x5')]['DATE']};const _0x3c3291=this[a88_0xf7af('0xd')](_0x54ee37,_0x30e248,_0x2d729c);return _0x3c3291;}[a88_0xf7af('0xe')](this);const _0x23ba83=_0x54ee37[a88_0xf7af('0xf')](_0x30e248,_0x3c3291);return _0x23ba83;}}exports[a88_0xf7af('0x5')]=EventsModel;