var a20_0x550c=['DOUBLE','TEXT','__importDefault','__esModule','defineProperty','../../infrastructure/model-base','default','alarmTypesModel','INTEGER','usersModel','vehiclesModel'];(function(_0x396054,_0x578740){var _0xd867f7=function(_0x374ce3){while(--_0x374ce3){_0x396054['push'](_0x396054['shift']());}};_0xd867f7(++_0x578740);}(a20_0x550c,0x1e6));var a20_0x56ae=function(_0x4b315c,_0x2d152c){_0x4b315c=_0x4b315c-0x0;var _0x35a9d1=a20_0x550c[_0x4b315c];return _0x35a9d1;};'use strict';var __importDefault=this&&this[a20_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a20_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a20_0x56ae('0x2')](exports,a20_0x56ae('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a20_0x56ae('0x3')));class AlarmsModel extends model_base_1[a20_0x56ae('0x4')]{constructor(_0x292610,_0x151bd2,_0x558098){super(_0x558098);const _0xd7aec1=function(_0x292610){const _0x948b6c={'company_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098['companiesModel'],'key':'id'}},'alarm_type_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098[a20_0x56ae('0x5')],'key':'id'}},'user_id':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x6')],'references':{'model':_0x558098[a20_0x56ae('0x7')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a20_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098[a20_0x56ae('0x8')],'key':'id'}},'device_id':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x6')],'references':{'model':_0x558098['devicesModel'],'key':'id'}},'alarm_status_id':{'type':sequelize_1['default'][a20_0x56ae('0x6')],'references':{'model':_0x558098['alarmTypesModel'],'key':'id'}},'latitude':{'type':sequelize_1['default'][a20_0x56ae('0x9')]},'longitude':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0x9')]},'description':{'type':sequelize_1[a20_0x56ae('0x4')][a20_0x56ae('0xa')]}};const _0xd7aec1=this['getEntity'](_0x292610,_0x151bd2,_0x948b6c);return _0xd7aec1;}['bind'](this);const _0x527cdd=_0x292610['import'](_0x151bd2,_0xd7aec1);return _0x527cdd;}}exports[a20_0x56ae('0x4')]=AlarmsModel;