var a169_0x4dfc=['__esModule','define','default','INTEGER','UUIDV4','DATE','import','__importDefault','defineProperty'];(function(_0x3d7d09,_0x1ba7db){var _0x4d779e=function(_0x968a3c){while(--_0x968a3c){_0x3d7d09['push'](_0x3d7d09['shift']());}};_0x4d779e(++_0x1ba7db);}(a169_0x4dfc,0xe8));var a169_0x3973=function(_0x1dd37f,_0x1d8eed){_0x1dd37f=_0x1dd37f-0x0;var _0x40a65b=a169_0x4dfc[_0x1dd37f];return _0x40a65b;};'use strict';var __importDefault=this&&this[a169_0x3973('0x0')]||function(_0x5f4049){return _0x5f4049&&_0x5f4049['__esModule']?_0x5f4049:{'default':_0x5f4049};};Object[a169_0x3973('0x1')](exports,a169_0x3973('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserCompaniesModel{constructor(_0x8c5264,_0x5c9017,_0x37a7d6,_0x43cbed){const _0x2c9aa8=function(_0x8c5264,_0x976f44){const _0x2c9aa8=_0x8c5264[a169_0x3973('0x3')](_0x5c9017,{'id':{'type':sequelize_1[a169_0x3973('0x4')][a169_0x3973('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a169_0x3973('0x4')][a169_0x3973('0x6')]},'user_id':{'type':_0x976f44[a169_0x3973('0x5')],'references':{'model':_0x37a7d6,'key':'id'}},'company_id':{'type':_0x976f44[a169_0x3973('0x5')],'references':{'model':_0x43cbed,'key':'id'}},'created_at':{'type':_0x976f44[a169_0x3973('0x7')],'allowNull':![]},'updated_at':_0x976f44[a169_0x3973('0x7')],'deleted_at':_0x976f44[a169_0x3973('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x2c9aa8;};const _0x50f414=_0x8c5264[a169_0x3973('0x8')](_0x5c9017,_0x2c9aa8);return _0x50f414;}}exports[a169_0x3973('0x4')]=UserCompaniesModel;