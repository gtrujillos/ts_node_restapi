var a80_0x7259=['DATE','import','__importDefault','__esModule','sequelize','define','default','UUID','STRING','INTEGER'];(function(_0x501553,_0x228002){var _0x2d7f7e=function(_0x429979){while(--_0x429979){_0x501553['push'](_0x501553['shift']());}};_0x2d7f7e(++_0x228002);}(a80_0x7259,0xe8));var a80_0x4aad=function(_0x2831d0,_0x462dc3){_0x2831d0=_0x2831d0-0x0;var _0x5c9fe1=a80_0x7259[_0x2831d0];return _0x5c9fe1;};'use strict';var __importDefault=this&&this[a80_0x4aad('0x0')]||function(_0x2b49eb){return _0x2b49eb&&_0x2b49eb[a80_0x4aad('0x1')]?_0x2b49eb:{'default':_0x2b49eb};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a80_0x4aad('0x2')));class UsersModel{constructor(_0x1cb9d7,_0x24eb43){const _0x16df98=function(_0x1cb9d7){const _0x16df98=_0x1cb9d7[a80_0x4aad('0x3')](_0x24eb43,{'id':{'type':sequelize_1[a80_0x4aad('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x5')],'defaultValue':sequelize_1['default']['UUIDV4']},'first_name':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x6')]},'last_name':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x6')]},'email':{'type':sequelize_1['default'][a80_0x4aad('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a80_0x4aad('0x4')]['STRING']},'username':{'type':sequelize_1[a80_0x4aad('0x4')]['STRING'],'unique':!![]},'password':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x6')]},'status':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x7')],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x7')],'references':{'model':_0x24eb43,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x7')],'references':{'model':_0x24eb43,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a80_0x4aad('0x4')]['INTEGER'],'references':{'model':_0x24eb43,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x4aad('0x4')]['DATE'],'allowNull':![]},'updated_at':sequelize_1['default']['DATE'],'deleted_at':sequelize_1[a80_0x4aad('0x4')][a80_0x4aad('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x16df98;};const _0x18e60f=_0x1cb9d7[a80_0x4aad('0x9')](_0x24eb43,_0x16df98);return _0x18e60f;}}exports[a80_0x4aad('0x4')]=UsersModel;