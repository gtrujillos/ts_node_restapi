var a20_0x550c=['DOUBLE','TEXT','__importDefault','__esModule','defineProperty','../../infrastructure/model-base','default','alarmTypesModel','INTEGER','usersModel','vehiclesModel'];(function(_0x38b6c5,_0x28f5ac){var _0x323550=function(_0x1fc635){while(--_0x1fc635){_0x38b6c5['push'](_0x38b6c5['shift']());}};_0x323550(++_0x28f5ac);}(a20_0x550c,0x1e6));var a20_0x56ae=function(_0x22c08d,_0x55f75a){_0x22c08d=_0x22c08d-0x0;var _0x540ebe=a20_0x550c[_0x22c08d];return _0x540ebe;};'use strict';var __importDefault=this&&this[a20_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a20_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a20_0x56ae('0x2')](exports,a20_0x56ae('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a20_0x56ae('0x3')));class AlarmsModel extends model_base_1[a20_0x56ae('0x4')]{constructor(_0x292610,_0x151bd2,_0x558098){super(_0x558098);const _0xd7aec1=function(_0x292610){const _0x948b6c={'company_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098['companiesModel'],'key':'id'}},'alarm_type_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098[a20_0x56ae('0x5')],'key':'id'}},'user_id':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x6')],'references':{'model':_0x558098[a20_0x56ae('0x7')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098[a20_0x56ae('0x8')],'key':'id'}},'device_id':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x6')],'references':{'model':_0x558098['devicesModel'],'key':'id'}},'alarm_status_id':{'type':sequelize_1['default'][a20_0x56ae('0x6')],'references':{'model':_0x558098['alarmTypesModel'],'key':'id'}},'latitude':{'type':sequelize_1['default'][a20_0x56ae('0x9')]},'longitude':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x9')]},'description':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0xa')]}};const _0xd7aec1=this['getEntity'](_0x292610,_0x151bd2,_0x948b6c);return _0xd7aec1;}['bind'](this);const _0x527cdd=_0x292610['import'](_0x151bd2,_0xd7aec1);return _0x527cdd;}}exports[a20_0x56ae('0x4')]=AlarmsModel;