var a80_0xd97c=['STRING','DATE','import','__esModule','sequelize','define','default','INTEGER','UUID'];(function(_0x4558ba,_0x3b6a08){var _0x3b82d7=function(_0x21d534){while(--_0x21d534){_0x4558ba['push'](_0x4558ba['shift']());}};_0x3b82d7(++_0x3b6a08);}(a80_0xd97c,0x150));var a80_0x59ce=function(_0x3050e0,_0x32017e){_0x3050e0=_0x3050e0-0x0;var _0x37da15=a80_0xd97c[_0x3050e0];return _0x37da15;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1d1ff2){return _0x1d1ff2&&_0x1d1ff2[a80_0x59ce('0x0')]?_0x1d1ff2:{'default':_0x1d1ff2};};Object['defineProperty'](exports,a80_0x59ce('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a80_0x59ce('0x1')));class UsersModel{constructor(_0x5dc6d7,_0x555879){const _0x71e053=function(_0x5dc6d7){const _0x71e053=_0x5dc6d7[a80_0x59ce('0x2')](_0x555879,{'id':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a80_0x59ce('0x5')],'defaultValue':sequelize_1[a80_0x59ce('0x3')]['UUIDV4']},'first_name':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x6')]},'last_name':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x6')]},'email':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x6')]},'username':{'type':sequelize_1['default'][a80_0x59ce('0x6')],'unique':!![]},'password':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x6')]},'status':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x4')],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a80_0x59ce('0x3')]['INTEGER'],'references':{'model':_0x555879,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x4')],'references':{'model':_0x555879,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x4')],'references':{'model':_0x555879,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x59ce('0x3')][a80_0x59ce('0x7')],'allowNull':![]},'updated_at':sequelize_1[a80_0x59ce('0x3')]['DATE'],'deleted_at':sequelize_1[a80_0x59ce('0x3')]['DATE']},{'paranoid':!![],'underscored':!![]});return _0x71e053;};const _0x4b63c7=_0x5dc6d7[a80_0x59ce('0x8')](_0x555879,_0x71e053);return _0x4b63c7;}}exports[a80_0x59ce('0x3')]=UsersModel;