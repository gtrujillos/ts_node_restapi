var a70_0x36a2=['bind','import','__importDefault','__esModule','defineProperty','../../infrastructure/model-base','default','INTEGER','eventTypesModel','usersModel','vehiclesModel','TEXT','DOUBLE','DATE','BOOLEAN','getEntity'];(function(_0x218174,_0x239b63){var _0x2c98d2=function(_0x58d726){while(--_0x58d726){_0x218174['push'](_0x218174['shift']());}};_0x2c98d2(++_0x239b63);}(a70_0x36a2,0xb2));var a70_0x2951=function(_0x176244,_0x31ff04){_0x176244=_0x176244-0x0;var _0x52e332=a70_0x36a2[_0x176244];return _0x52e332;};'use strict';var __importDefault=this&&this[a70_0x2951('0x0')]||function(_0x55ef86){return _0x55ef86&&_0x55ef86[a70_0x2951('0x1')]?_0x55ef86:{'default':_0x55ef86};};Object[a70_0x2951('0x2')](exports,a70_0x2951('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a70_0x2951('0x3')));class EventsModel extends model_base_1['default']{constructor(_0x2d6cfa,_0x2aed74,_0x2e518b){super(_0x2e518b);const _0x4ef0dc=function(_0x2d6cfa){const _0x3e4e99={'event_type_id':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0x5')],'references':{'model':_0x2e518b[a70_0x2951('0x6')],'key':'id'}},'event_status_id':{'type':sequelize_1['default'][a70_0x2951('0x5')],'references':{'model':_0x2e518b['eventStatusModel'],'key':'id'},'defaultValue':0x1},'company_id':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0x5')],'references':{'model':_0x2e518b['companiesModel'],'key':'id'}},'user_id':{'type':sequelize_1['default'][a70_0x2951('0x5')],'references':{'model':_0x2e518b[a70_0x2951('0x7')],'key':'id'}},'project_id':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0x5')],'references':{'model':_0x2e518b['projectsModel'],'key':'id'}},'vehicle_id':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0x5')],'references':{'model':_0x2e518b[a70_0x2951('0x8')],'key':'id'}},'device_id':{'type':sequelize_1[a70_0x2951('0x4')]['INTEGER'],'references':{'model':_0x2e518b['devicesModel'],'key':'id'}},'title':{'type':sequelize_1[a70_0x2951('0x4')]['STRING']},'description':{'type':sequelize_1['default'][a70_0x2951('0x9')]},'latitude':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0xa')]},'longitude':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0xa')]},'reported_at':sequelize_1['default'][a70_0x2951('0xb')],'is_private':{'type':sequelize_1[a70_0x2951('0x4')][a70_0x2951('0xc')],'allowNull':![],'defaultValue':!![]}};const _0x4ef0dc=this[a70_0x2951('0xd')](_0x2d6cfa,_0x2aed74,_0x3e4e99);return _0x4ef0dc;}[a70_0x2951('0xe')](this);const _0x495e67=_0x2d6cfa[a70_0x2951('0xf')](_0x2aed74,_0x4ef0dc);return _0x495e67;}}exports[a70_0x2951('0x4')]=EventsModel;