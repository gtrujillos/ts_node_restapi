var a20_0x1e35=['__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','INTEGER','alarmTypesModel','usersModel','vehiclesModel','DOUBLE','TEXT','bind'];(function(_0x50f863,_0x3be652){var _0x43ff32=function(_0x82ef3e){while(--_0x82ef3e){_0x50f863['push'](_0x50f863['shift']());}};_0x43ff32(++_0x3be652);}(a20_0x1e35,0x1e1));var a20_0x5a05=function(_0x10776b,_0x989ed3){_0x10776b=_0x10776b-0x0;var _0x31c728=a20_0x1e35[_0x10776b];return _0x31c728;};'use strict';var __importDefault=this&&this[a20_0x5a05('0x0')]||function(_0x22c9c8){return _0x22c9c8&&_0x22c9c8[a20_0x5a05('0x1')]?_0x22c9c8:{'default':_0x22c9c8};};Object[a20_0x5a05('0x2')](exports,a20_0x5a05('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a20_0x5a05('0x3')));const model_base_1=__importDefault(require(a20_0x5a05('0x4')));class AlarmsModel extends model_base_1[a20_0x5a05('0x5')]{constructor(_0x172f59,_0x5489f2,_0x2ca197){super(_0x2ca197);const _0x211fa3=function(_0x172f59){const _0x1feb4e={'company_id':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0x6')],'references':{'model':_0x2ca197['companiesModel'],'key':'id'}},'alarm_type_id':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0x6')],'references':{'model':_0x2ca197[a20_0x5a05('0x7')],'key':'id'}},'user_id':{'type':sequelize_1[a20_0x5a05('0x5')]['INTEGER'],'references':{'model':_0x2ca197[a20_0x5a05('0x8')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0x6')],'references':{'model':_0x2ca197[a20_0x5a05('0x9')],'key':'id'}},'device_id':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0x6')],'references':{'model':_0x2ca197['devicesModel'],'key':'id'}},'alarm_status_id':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0x6')],'references':{'model':_0x2ca197['alarmTypesModel'],'key':'id'}},'latitude':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0xa')]},'longitude':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0xa')]},'description':{'type':sequelize_1[a20_0x5a05('0x5')][a20_0x5a05('0xb')]}};const _0x211fa3=this['getEntity'](_0x172f59,_0x5489f2,_0x1feb4e);return _0x211fa3;}[a20_0x5a05('0xc')](this);const _0x41c652=_0x172f59['import'](_0x5489f2,_0x211fa3);return _0x41c652;}}exports[a20_0x5a05('0x5')]=AlarmsModel;