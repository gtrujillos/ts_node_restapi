var a225_0x516c=['UUID','UUIDV4','DATE','import','defineProperty','__esModule','INTEGER','default'];(function(_0xc3e6c9,_0x2135d5){var _0x571e9b=function(_0x584d0c){while(--_0x584d0c){_0xc3e6c9['push'](_0xc3e6c9['shift']());}};_0x571e9b(++_0x2135d5);}(a225_0x516c,0x1bc));var a225_0x2e3f=function(_0x3eba07,_0x4c3dd3){_0x3eba07=_0x3eba07-0x0;var _0xdfff19=a225_0x516c[_0x3eba07];return _0xdfff19;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2b619d){return _0x2b619d&&_0x2b619d['__esModule']?_0x2b619d:{'default':_0x2b619d};};Object[a225_0x2e3f('0x0')](exports,a225_0x2e3f('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserCompaniesModel{constructor(_0x3946eb,_0x4058f4,_0x2c6c73,_0x581d07){const _0x101d2c=function(_0x3946eb,_0x11d28b){const _0x101d2c=_0x3946eb['define'](_0x4058f4,{'id':{'type':sequelize_1['default'][a225_0x2e3f('0x2')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a225_0x2e3f('0x3')][a225_0x2e3f('0x4')],'defaultValue':sequelize_1['default'][a225_0x2e3f('0x5')]},'user_id':{'type':_0x11d28b[a225_0x2e3f('0x2')],'references':{'model':_0x2c6c73,'key':'id'}},'company_id':{'type':_0x11d28b[a225_0x2e3f('0x2')],'references':{'model':_0x581d07,'key':'id'}},'created_at':{'type':_0x11d28b[a225_0x2e3f('0x6')],'allowNull':![]},'updated_at':_0x11d28b[a225_0x2e3f('0x6')],'deleted_at':_0x11d28b['DATE']},{'paranoid':!![],'underscored':!![]});return _0x101d2c;};const _0xadd82=_0x3946eb[a225_0x2e3f('0x7')](_0x4058f4,_0x101d2c);return _0xadd82;}}exports[a225_0x2e3f('0x3')]=UserCompaniesModel;