var a169_0x10e5=['INTEGER','UUID','UUIDV4','DATE','import','__importDefault','defineProperty','default'];(function(_0x47e4f4,_0x5978a0){var _0xcc5632=function(_0x2fc65d){while(--_0x2fc65d){_0x47e4f4['push'](_0x47e4f4['shift']());}};_0xcc5632(++_0x5978a0);}(a169_0x10e5,0x17d));var a169_0x4f9d=function(_0x145955,_0x521932){_0x145955=_0x145955-0x0;var _0x440b10=a169_0x10e5[_0x145955];return _0x440b10;};'use strict';var __importDefault=this&&this[a169_0x4f9d('0x0')]||function(_0x9994){return _0x9994&&_0x9994['__esModule']?_0x9994:{'default':_0x9994};};Object[a169_0x4f9d('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserCompaniesModel{constructor(_0x22d37a,_0x187215,_0x481fde,_0x4283c0){const _0x498833=function(_0x22d37a,_0xf5f2f0){const _0x498833=_0x22d37a['define'](_0x187215,{'id':{'type':sequelize_1[a169_0x4f9d('0x2')][a169_0x4f9d('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a169_0x4f9d('0x4')],'defaultValue':sequelize_1[a169_0x4f9d('0x2')][a169_0x4f9d('0x5')]},'user_id':{'type':_0xf5f2f0['INTEGER'],'references':{'model':_0x481fde,'key':'id'}},'company_id':{'type':_0xf5f2f0['INTEGER'],'references':{'model':_0x4283c0,'key':'id'}},'created_at':{'type':_0xf5f2f0[a169_0x4f9d('0x6')],'allowNull':![]},'updated_at':_0xf5f2f0[a169_0x4f9d('0x6')],'deleted_at':_0xf5f2f0[a169_0x4f9d('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x498833;};const _0x3fc5ad=_0x22d37a[a169_0x4f9d('0x7')](_0x187215,_0x498833);return _0x3fc5ad;}}exports[a169_0x4f9d('0x2')]=UserCompaniesModel;