var a101_0x1fb8=['defineProperty','sequelize','UUID','UUIDV4','default','STRING','DATE','__importDefault','__esModule'];(function(_0x3cf0c2,_0x3d12ac){var _0x5df0fc=function(_0x383ef8){while(--_0x383ef8){_0x3cf0c2['push'](_0x3cf0c2['shift']());}};_0x5df0fc(++_0x3d12ac);}(a101_0x1fb8,0x103));var a101_0x130c=function(_0x22fa54,_0x194555){_0x22fa54=_0x22fa54-0x0;var _0x55bce8=a101_0x1fb8[_0x22fa54];return _0x55bce8;};'use strict';var __importDefault=this&&this[a101_0x130c('0x0')]||function(_0x40acd8){return _0x40acd8&&_0x40acd8[a101_0x130c('0x1')]?_0x40acd8:{'default':_0x40acd8};};Object[a101_0x130c('0x2')](exports,a101_0x130c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a101_0x130c('0x3')));class UserModel{constructor(_0x338453,_0x2ce9db){const _0x43ef82=function(_0x338453,_0x1e8499){const _0x43ef82=_0x338453['define'](_0x2ce9db,{'id':{'type':_0x1e8499[a101_0x130c('0x4')],'primaryKey':!![],'defaultValue':_0x1e8499[a101_0x130c('0x5')]},'first_name':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')]},'last_name':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')]},'email':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')],'unique':!![]},'username':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')],'unique':!![]},'password':{'type':sequelize_1[a101_0x130c('0x6')][a101_0x130c('0x7')]},'status':{'type':sequelize_1['default']['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x1e8499['DATE'],'allowNull':![]},'updated_at':_0x1e8499[a101_0x130c('0x8')],'deleted_at':_0x1e8499['DATE']},{'paranoid':!![],'underscored':!![]});return _0x43ef82;};const _0xcb92b2=_0x338453['import'](_0x2ce9db,_0x43ef82);return _0xcb92b2;}}exports[a101_0x130c('0x6')]=UserModel;