var a79_0x554e=['DATE','import','__importDefault','defineProperty','sequelize','default','UUID','UUIDV4','STRING','INTEGER'];(function(_0x18f31c,_0x59733){var _0xc6fdb3=function(_0x394688){while(--_0x394688){_0x18f31c['push'](_0x18f31c['shift']());}};_0xc6fdb3(++_0x59733);}(a79_0x554e,0xf2));var a79_0x4efd=function(_0x1ccd0f,_0x2cf6cc){_0x1ccd0f=_0x1ccd0f-0x0;var _0x576f68=a79_0x554e[_0x1ccd0f];return _0x576f68;};'use strict';var __importDefault=this&&this[a79_0x4efd('0x0')]||function(_0x573ed7){return _0x573ed7&&_0x573ed7['__esModule']?_0x573ed7:{'default':_0x573ed7};};Object[a79_0x4efd('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a79_0x4efd('0x2')));class UsersModel{constructor(_0x2a1a0a,_0x514ddb){const _0x1bbd1f=function(_0x2a1a0a){const _0x1bbd1f=_0x2a1a0a['define'](_0x514ddb,{'id':{'type':sequelize_1[a79_0x4efd('0x3')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x4')],'defaultValue':sequelize_1['default'][a79_0x4efd('0x5')]},'first_name':{'type':sequelize_1[a79_0x4efd('0x3')]['STRING']},'last_name':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x6')]},'email':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x6')]},'username':{'type':sequelize_1[a79_0x4efd('0x3')]['STRING'],'unique':!![]},'password':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x6')]},'status':{'type':sequelize_1[a79_0x4efd('0x3')]['INTEGER'],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x7')],'references':{'model':_0x514ddb,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x7')],'references':{'model':_0x514ddb,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x7')],'references':{'model':_0x514ddb,'key':'id'}},'created_at':{'type':sequelize_1[a79_0x4efd('0x3')][a79_0x4efd('0x8')],'allowNull':![]},'updated_at':sequelize_1['default'][a79_0x4efd('0x8')],'deleted_at':sequelize_1['default'][a79_0x4efd('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x1bbd1f;};const _0x4b6113=_0x2a1a0a[a79_0x4efd('0x9')](_0x514ddb,_0x1bbd1f);return _0x4b6113;}}exports[a79_0x4efd('0x3')]=UsersModel;