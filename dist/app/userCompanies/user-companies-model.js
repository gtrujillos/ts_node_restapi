var a169_0x1aa5=['import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUIDV4','DATE'];(function(_0x36840a,_0x54f7eb){var _0x198cda=function(_0x3b7d06){while(--_0x3b7d06){_0x36840a['push'](_0x36840a['shift']());}};_0x198cda(++_0x54f7eb);}(a169_0x1aa5,0x14b));var a169_0x31ec=function(_0x76cb1,_0x2a5f54){_0x76cb1=_0x76cb1-0x0;var _0x3d03b0=a169_0x1aa5[_0x76cb1];return _0x3d03b0;};'use strict';var __importDefault=this&&this[a169_0x31ec('0x0')]||function(_0x59d30f){return _0x59d30f&&_0x59d30f[a169_0x31ec('0x1')]?_0x59d30f:{'default':_0x59d30f};};Object[a169_0x31ec('0x2')](exports,a169_0x31ec('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a169_0x31ec('0x3')));class UserCompaniesModel{constructor(_0x1e8f1,_0x2c45e7,_0x16713a,_0x2b7aff){const _0x10161b=function(_0x1e8f1,_0x17cd4b){const _0x10161b=_0x1e8f1[a169_0x31ec('0x4')](_0x2c45e7,{'id':{'type':sequelize_1[a169_0x31ec('0x5')][a169_0x31ec('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a169_0x31ec('0x5')]['UUID'],'defaultValue':sequelize_1['default'][a169_0x31ec('0x7')]},'user_id':{'type':_0x17cd4b[a169_0x31ec('0x6')],'references':{'model':_0x16713a,'key':'id'}},'company_id':{'type':_0x17cd4b[a169_0x31ec('0x6')],'references':{'model':_0x2b7aff,'key':'id'}},'created_at':{'type':_0x17cd4b[a169_0x31ec('0x8')],'allowNull':![]},'updated_at':_0x17cd4b[a169_0x31ec('0x8')],'deleted_at':_0x17cd4b['DATE']},{'paranoid':!![],'underscored':!![]});return _0x10161b;};const _0x45785a=_0x1e8f1[a169_0x31ec('0x9')](_0x2c45e7,_0x10161b);return _0x45785a;}}exports['default']=UserCompaniesModel;