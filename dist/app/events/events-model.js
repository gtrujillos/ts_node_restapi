var a88_0x10a2=['DATE','getEntity','bind','import','__importDefault','sequelize','../../infrastructure/model-base','default','INTEGER','eventTypesModel','usersModel','devicesModel','TEXT'];(function(_0x526922,_0x4caab7){var _0x5ea460=function(_0x3b6d77){while(--_0x3b6d77){_0x526922['push'](_0x526922['shift']());}};_0x5ea460(++_0x4caab7);}(a88_0x10a2,0x1be));var a88_0xe9f2=function(_0x330666,_0x40e99e){_0x330666=_0x330666-0x0;var _0x1e5e14=a88_0x10a2[_0x330666];return _0x1e5e14;};'use strict';var __importDefault=this&&this[a88_0xe9f2('0x0')]||function(_0x4e1df9){return _0x4e1df9&&_0x4e1df9['__esModule']?_0x4e1df9:{'default':_0x4e1df9};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a88_0xe9f2('0x1')));const model_base_1=__importDefault(require(a88_0xe9f2('0x2')));class EventsModel extends model_base_1[a88_0xe9f2('0x3')]{constructor(_0x3bec35,_0x5df7c4,_0x2c0e10){super(_0x2c0e10);const _0x11c83b=function(_0x3bec35){const _0x1c0b52={'company_id':{'type':sequelize_1['default'][a88_0xe9f2('0x4')],'references':{'model':_0x2c0e10['companiesModel'],'key':'id'}},'event_type_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x2c0e10[a88_0xe9f2('0x5')],'key':'id'}},'user_id':{'type':sequelize_1[a88_0xe9f2('0x3')][a88_0xe9f2('0x4')],'references':{'model':_0x2c0e10[a88_0xe9f2('0x6')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a88_0xe9f2('0x3')]['INTEGER'],'references':{'model':_0x2c0e10['vehiclesModel'],'key':'id'}},'device_id':{'type':sequelize_1[a88_0xe9f2('0x3')][a88_0xe9f2('0x4')],'references':{'model':_0x2c0e10[a88_0xe9f2('0x7')],'key':'id'}},'event_status_id':{'type':sequelize_1['default'][a88_0xe9f2('0x4')],'references':{'model':_0x2c0e10[a88_0xe9f2('0x5')],'key':'id'},'defaultValue':0x1},'latitude':{'type':sequelize_1['default']['DOUBLE']},'longitude':{'type':sequelize_1['default']['DOUBLE']},'description':{'type':sequelize_1[a88_0xe9f2('0x3')][a88_0xe9f2('0x8')]},'reported_at':sequelize_1[a88_0xe9f2('0x3')][a88_0xe9f2('0x9')]};const _0x11c83b=this[a88_0xe9f2('0xa')](_0x3bec35,_0x5df7c4,_0x1c0b52);return _0x11c83b;}[a88_0xe9f2('0xb')](this);const _0xb7290a=_0x3bec35[a88_0xe9f2('0xc')](_0x5df7c4,_0x11c83b);return _0xb7290a;}}exports[a88_0xe9f2('0x3')]=EventsModel;