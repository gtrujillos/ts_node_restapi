var a80_0x4877=['STRING','DATE','__importDefault','defineProperty','__esModule','sequelize','default','INTEGER','UUID','UUIDV4'];(function(_0x379462,_0x1d9307){var _0x5a7654=function(_0x157b16){while(--_0x157b16){_0x379462['push'](_0x379462['shift']());}};_0x5a7654(++_0x1d9307);}(a80_0x4877,0x98));var a80_0x51ec=function(_0x1161c1,_0x37ed65){_0x1161c1=_0x1161c1-0x0;var _0x4972b8=a80_0x4877[_0x1161c1];return _0x4972b8;};'use strict';var __importDefault=this&&this[a80_0x51ec('0x0')]||function(_0x5d9847){return _0x5d9847&&_0x5d9847['__esModule']?_0x5d9847:{'default':_0x5d9847};};Object[a80_0x51ec('0x1')](exports,a80_0x51ec('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a80_0x51ec('0x3')));class UsersModel{constructor(_0x551a12,_0x231845){const _0x10742f=function(_0x551a12){const _0x10742f=_0x551a12['define'](_0x231845,{'id':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x6')],'defaultValue':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x7')]},'first_name':{'type':sequelize_1['default'][a80_0x51ec('0x8')]},'last_name':{'type':sequelize_1['default'][a80_0x51ec('0x8')]},'email':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x8')],'unique':!![]},'phone':{'type':sequelize_1[a80_0x51ec('0x4')]['STRING']},'username':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x8')],'unique':!![]},'password':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x8')]},'status':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x5')],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x5')],'references':{'model':_0x231845,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x5')],'references':{'model':_0x231845,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a80_0x51ec('0x4')][a80_0x51ec('0x5')],'references':{'model':_0x231845,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x51ec('0x4')]['DATE'],'allowNull':![]},'updated_at':sequelize_1['default'][a80_0x51ec('0x9')],'deleted_at':sequelize_1['default'][a80_0x51ec('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x10742f;};const _0x47e84c=_0x551a12['import'](_0x231845,_0x10742f);return _0x47e84c;}}exports[a80_0x51ec('0x4')]=UsersModel;