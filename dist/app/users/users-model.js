var a80_0x3c99=['UUID','UUIDV4','STRING','DATE','import','__importDefault','__esModule','sequelize','default','INTEGER'];(function(_0x8a6b74,_0x4aa8d2){var _0x36fffc=function(_0x5a89a1){while(--_0x5a89a1){_0x8a6b74['push'](_0x8a6b74['shift']());}};_0x36fffc(++_0x4aa8d2);}(a80_0x3c99,0x14f));var a80_0x406f=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a80_0x3c99[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a80_0x406f('0x0')]||function(_0x241113){return _0x241113&&_0x241113[a80_0x406f('0x1')]?_0x241113:{'default':_0x241113};};Object['defineProperty'](exports,a80_0x406f('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a80_0x406f('0x2')));class UsersModel{constructor(_0x182268,_0x2e643f){const _0x449c01=function(_0x182268){const _0x449c01=_0x182268['define'](_0x2e643f,{'id':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x5')],'defaultValue':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x6')]},'first_name':{'type':sequelize_1['default'][a80_0x406f('0x7')]},'last_name':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x7')]},'email':{'type':sequelize_1['default'][a80_0x406f('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a80_0x406f('0x3')]['STRING']},'username':{'type':sequelize_1['default'][a80_0x406f('0x7')],'unique':!![]},'password':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x7')]},'status':{'type':sequelize_1[a80_0x406f('0x3')]['INTEGER'],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x4')],'references':{'model':_0x2e643f,'key':'id'}},'updated_by_user_id':{'type':sequelize_1['default'][a80_0x406f('0x4')],'references':{'model':_0x2e643f,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a80_0x406f('0x3')]['INTEGER'],'references':{'model':_0x2e643f,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x8')],'allowNull':![]},'updated_at':sequelize_1[a80_0x406f('0x3')][a80_0x406f('0x8')],'deleted_at':sequelize_1[a80_0x406f('0x3')]['DATE']},{'paranoid':!![],'underscored':!![]});return _0x449c01;};const _0x121545=_0x182268[a80_0x406f('0x9')](_0x2e643f,_0x449c01);return _0x121545;}}exports[a80_0x406f('0x3')]=UsersModel;