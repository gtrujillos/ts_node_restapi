var a70_0x3375=['default','INTEGER','eventStatusModel','companiesModel','usersModel','devicesModel','STRING','DOUBLE','DATE','BOOLEAN','getEntity','import','__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base'];(function(_0x3f3405,_0x1fbb7e){var _0xf7848=function(_0x17f907){while(--_0x17f907){_0x3f3405['push'](_0x3f3405['shift']());}};_0xf7848(++_0x1fbb7e);}(a70_0x3375,0xb6));var a70_0x4c06=function(_0x365e92,_0x1c55a2){_0x365e92=_0x365e92-0x0;var _0x5af252=a70_0x3375[_0x365e92];return _0x5af252;};'use strict';var __importDefault=this&&this[a70_0x4c06('0x0')]||function(_0x28983a){return _0x28983a&&_0x28983a[a70_0x4c06('0x1')]?_0x28983a:{'default':_0x28983a};};Object[a70_0x4c06('0x2')](exports,a70_0x4c06('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a70_0x4c06('0x3')));const model_base_1=__importDefault(require(a70_0x4c06('0x4')));class EventsModel extends model_base_1[a70_0x4c06('0x5')]{constructor(_0x1a378c,_0x4d716a,_0x305ac0){super(_0x305ac0);const _0x1831be=function(_0x1a378c){const _0x339861={'event_type_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x305ac0['eventTypesModel'],'key':'id'}},'event_status_id':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0x6')],'references':{'model':_0x305ac0[a70_0x4c06('0x7')],'key':'id'},'defaultValue':0x1},'company_id':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0x6')],'references':{'model':_0x305ac0[a70_0x4c06('0x8')],'key':'id'}},'user_id':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0x6')],'references':{'model':_0x305ac0[a70_0x4c06('0x9')],'key':'id'}},'project_id':{'type':sequelize_1['default'][a70_0x4c06('0x6')],'references':{'model':_0x305ac0['projectsModel'],'key':'id'}},'vehicle_id':{'type':sequelize_1['default'][a70_0x4c06('0x6')],'references':{'model':_0x305ac0['vehiclesModel'],'key':'id'}},'device_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x305ac0[a70_0x4c06('0xa')],'key':'id'}},'title':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0xb')]},'description':{'type':sequelize_1[a70_0x4c06('0x5')]['TEXT']},'latitude':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0xc')]},'longitude':{'type':sequelize_1['default'][a70_0x4c06('0xc')]},'reported_at':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0xd')],'is_private':{'type':sequelize_1[a70_0x4c06('0x5')][a70_0x4c06('0xe')],'allowNull':![],'defaultValue':!![]}};const _0x1831be=this[a70_0x4c06('0xf')](_0x1a378c,_0x4d716a,_0x339861);return _0x1831be;}['bind'](this);const _0x39ab84=_0x1a378c[a70_0x4c06('0x10')](_0x4d716a,_0x1831be);return _0x39ab84;}}exports[a70_0x4c06('0x5')]=EventsModel;