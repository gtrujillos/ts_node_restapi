var a101_0x409d=['__esModule','defineProperty','define','UUIDV4','default','STRING','INTEGER','DATE','__importDefault'];(function(_0x221a93,_0xf888f4){var _0x38c78f=function(_0x33dc34){while(--_0x33dc34){_0x221a93['push'](_0x221a93['shift']());}};_0x38c78f(++_0xf888f4);}(a101_0x409d,0xaa));var a101_0x17a3=function(_0x2f5e9c,_0x579d6d){_0x2f5e9c=_0x2f5e9c-0x0;var _0x52d597=a101_0x409d[_0x2f5e9c];return _0x52d597;};'use strict';var __importDefault=this&&this[a101_0x17a3('0x0')]||function(_0x1236c8){return _0x1236c8&&_0x1236c8[a101_0x17a3('0x1')]?_0x1236c8:{'default':_0x1236c8};};Object[a101_0x17a3('0x2')](exports,a101_0x17a3('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserModel{constructor(_0x4f7883,_0x2aa642){const _0x2c966b=function(_0x4f7883,_0x5b5ea5){const _0x2c966b=_0x4f7883[a101_0x17a3('0x3')](_0x2aa642,{'id':{'type':_0x5b5ea5['UUID'],'primaryKey':!![],'defaultValue':_0x5b5ea5[a101_0x17a3('0x4')]},'first_name':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')]},'last_name':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')]},'email':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')],'unique':!![]},'username':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')],'unique':!![]},'password':{'type':sequelize_1[a101_0x17a3('0x5')][a101_0x17a3('0x6')]},'status':{'type':sequelize_1['default'][a101_0x17a3('0x7')],'defaultValue':0x0},'created_at':{'type':_0x5b5ea5[a101_0x17a3('0x8')],'allowNull':![]},'updated_at':_0x5b5ea5['DATE'],'deleted_at':_0x5b5ea5[a101_0x17a3('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2c966b;};const _0x1f08a7=_0x4f7883['import'](_0x2aa642,_0x2c966b);return _0x1f08a7;}}exports[a101_0x17a3('0x5')]=UserModel;