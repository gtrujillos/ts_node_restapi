var a79_0x1184=['sequelize','INTEGER','default','UUID','UUIDV4','STRING','DATE','import','__importDefault','__esModule','defineProperty'];(function(_0x582769,_0x42188a){var _0x3a0ca8=function(_0x59a640){while(--_0x59a640){_0x582769['push'](_0x582769['shift']());}};_0x3a0ca8(++_0x42188a);}(a79_0x1184,0xb8));var a79_0x142a=function(_0x3a034e,_0x42782b){_0x3a034e=_0x3a034e-0x0;var _0x57a9e8=a79_0x1184[_0x3a034e];return _0x57a9e8;};'use strict';var __importDefault=this&&this[a79_0x142a('0x0')]||function(_0x584f2f){return _0x584f2f&&_0x584f2f[a79_0x142a('0x1')]?_0x584f2f:{'default':_0x584f2f};};Object[a79_0x142a('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a79_0x142a('0x3')));class UsersModel{constructor(_0x27b3bd,_0x54379a){const _0x3ef698=function(_0x27b3bd){const _0x3ef698=_0x27b3bd['define'](_0x54379a,{'id':{'type':sequelize_1['default'][a79_0x142a('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x6')],'defaultValue':sequelize_1['default'][a79_0x142a('0x7')]},'first_name':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x8')]},'last_name':{'type':sequelize_1[a79_0x142a('0x5')]['STRING']},'email':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x8')],'unique':!![]},'phone':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x8')]},'username':{'type':sequelize_1['default']['STRING'],'unique':!![]},'password':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x8')]},'status':{'type':sequelize_1[a79_0x142a('0x5')]['INTEGER'],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1['default'][a79_0x142a('0x4')],'references':{'model':_0x54379a,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x4')],'references':{'model':_0x54379a,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x54379a,'key':'id'}},'created_at':{'type':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x9')],'allowNull':![]},'updated_at':sequelize_1[a79_0x142a('0x5')][a79_0x142a('0x9')],'deleted_at':sequelize_1['default'][a79_0x142a('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x3ef698;};const _0x4e1080=_0x27b3bd[a79_0x142a('0xa')](_0x54379a,_0x3ef698);return _0x4e1080;}}exports['default']=UsersModel;