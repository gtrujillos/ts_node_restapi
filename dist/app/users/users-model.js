var a80_0x7c9f=['STRING','INTEGER','DATE','import','__importDefault','sequelize','define','UUID','default','UUIDV4'];(function(_0x43f09e,_0x7dd095){var _0x713b08=function(_0x181aa0){while(--_0x181aa0){_0x43f09e['push'](_0x43f09e['shift']());}};_0x713b08(++_0x7dd095);}(a80_0x7c9f,0xae));var a80_0x4948=function(_0xd2563a,_0x4d60b0){_0xd2563a=_0xd2563a-0x0;var _0x2addea=a80_0x7c9f[_0xd2563a];return _0x2addea;};'use strict';var __importDefault=this&&this[a80_0x4948('0x0')]||function(_0x3bf456){return _0x3bf456&&_0x3bf456['__esModule']?_0x3bf456:{'default':_0x3bf456};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a80_0x4948('0x1')));class UsersModel{constructor(_0x2f3171,_0x4933b5){const _0x1bb5d7=function(_0x2f3171){const _0x1bb5d7=_0x2f3171[a80_0x4948('0x2')](_0x4933b5,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a80_0x4948('0x3')],'defaultValue':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x5')]},'first_name':{'type':sequelize_1[a80_0x4948('0x4')]['STRING']},'last_name':{'type':sequelize_1['default'][a80_0x4948('0x6')]},'email':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x6')]},'username':{'type':sequelize_1[a80_0x4948('0x4')]['STRING'],'unique':!![]},'password':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x6')]},'status':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x7')],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x4933b5,'key':'id'}},'updated_by_user_id':{'type':sequelize_1['default'][a80_0x4948('0x7')],'references':{'model':_0x4933b5,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x7')],'references':{'model':_0x4933b5,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x4948('0x4')][a80_0x4948('0x8')],'allowNull':![]},'updated_at':sequelize_1['default'][a80_0x4948('0x8')],'deleted_at':sequelize_1['default'][a80_0x4948('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x1bb5d7;};const _0x1f02c3=_0x2f3171[a80_0x4948('0x9')](_0x4933b5,_0x1bb5d7);return _0x1f02c3;}}exports['default']=UsersModel;