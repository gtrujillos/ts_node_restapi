var a172_0x3710=['UUID','UUIDV4','DATE','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER'];(function(_0x1f8c8f,_0xdf7e94){var _0x5d6225=function(_0x5afed2){while(--_0x5afed2){_0x1f8c8f['push'](_0x1f8c8f['shift']());}};_0x5d6225(++_0xdf7e94);}(a172_0x3710,0x193));var a172_0x2e06=function(_0x521163,_0x173424){_0x521163=_0x521163-0x0;var _0x3380eb=a172_0x3710[_0x521163];return _0x3380eb;};'use strict';var __importDefault=this&&this[a172_0x2e06('0x0')]||function(_0x1567c8){return _0x1567c8&&_0x1567c8[a172_0x2e06('0x1')]?_0x1567c8:{'default':_0x1567c8};};Object[a172_0x2e06('0x2')](exports,a172_0x2e06('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a172_0x2e06('0x3')));class UserCompaniesModel{constructor(_0x5d6d52,_0x16e1b8,_0x4473fc,_0x3c0da1){const _0x5f3017=function(_0x5d6d52,_0x50ac57){const _0x5f3017=_0x5d6d52[a172_0x2e06('0x4')](_0x16e1b8,{'id':{'type':sequelize_1[a172_0x2e06('0x5')][a172_0x2e06('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a172_0x2e06('0x5')][a172_0x2e06('0x7')],'defaultValue':sequelize_1['default'][a172_0x2e06('0x8')]},'user_id':{'type':_0x50ac57[a172_0x2e06('0x6')],'references':{'model':_0x4473fc,'key':'id'}},'company_id':{'type':_0x50ac57['INTEGER'],'references':{'model':_0x3c0da1,'key':'id'}},'created_at':{'type':_0x50ac57[a172_0x2e06('0x9')],'allowNull':![]},'updated_at':_0x50ac57[a172_0x2e06('0x9')],'deleted_at':_0x50ac57[a172_0x2e06('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x5f3017;};const _0x41dae4=_0x5d6d52['import'](_0x16e1b8,_0x5f3017);return _0x41dae4;}}exports[a172_0x2e06('0x5')]=UserCompaniesModel;