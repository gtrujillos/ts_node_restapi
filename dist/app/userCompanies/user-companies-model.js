var a78_0xbb2f=['defineProperty','sequelize','define','INTEGER','default','UUID','UUIDV4','DATE','__importDefault','__esModule'];(function(_0x597cfc,_0x2cef34){var _0x2161fc=function(_0x509a90){while(--_0x509a90){_0x597cfc['push'](_0x597cfc['shift']());}};_0x2161fc(++_0x2cef34);}(a78_0xbb2f,0x17a));var a78_0x260f=function(_0x41fb33,_0x3f074c){_0x41fb33=_0x41fb33-0x0;var _0x20ab6a=a78_0xbb2f[_0x41fb33];return _0x20ab6a;};'use strict';var __importDefault=this&&this[a78_0x260f('0x0')]||function(_0x16601c){return _0x16601c&&_0x16601c[a78_0x260f('0x1')]?_0x16601c:{'default':_0x16601c};};Object[a78_0x260f('0x2')](exports,a78_0x260f('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a78_0x260f('0x3')));class UserCompaniesModel{constructor(_0x16caab,_0x5f5b02,_0x3193fb,_0xc35900){const _0x5aa99a=function(_0x16caab,_0x2327a4){const _0x5aa99a=_0x16caab[a78_0x260f('0x4')](_0x5f5b02,{'id':{'type':sequelize_1['default'][a78_0x260f('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a78_0x260f('0x6')][a78_0x260f('0x7')],'defaultValue':sequelize_1[a78_0x260f('0x6')][a78_0x260f('0x8')]},'user_id':{'type':_0x2327a4['INTEGER'],'references':{'model':_0x3193fb,'key':'id'}},'company_id':{'type':_0x2327a4[a78_0x260f('0x5')],'references':{'model':_0xc35900,'key':'id'}},'created_at':{'type':_0x2327a4[a78_0x260f('0x9')],'allowNull':![]},'updated_at':_0x2327a4[a78_0x260f('0x9')],'deleted_at':_0x2327a4[a78_0x260f('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x5aa99a;};const _0xeb41c9=_0x16caab['import'](_0x5f5b02,_0x5aa99a);return _0xeb41c9;}}exports[a78_0x260f('0x6')]=UserCompaniesModel;