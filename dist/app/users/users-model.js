var a80_0x1bc9=['INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault','__esModule','defineProperty','sequelize','default'];(function(_0x53f437,_0x26b2ff){var _0x1dfbfc=function(_0x8cf1cc){while(--_0x8cf1cc){_0x53f437['push'](_0x53f437['shift']());}};_0x1dfbfc(++_0x26b2ff);}(a80_0x1bc9,0xf8));var a80_0x17c4=function(_0x44b7ad,_0x4a033b){_0x44b7ad=_0x44b7ad-0x0;var _0x5b73a7=a80_0x1bc9[_0x44b7ad];return _0x5b73a7;};'use strict';var __importDefault=this&&this[a80_0x17c4('0x0')]||function(_0x3dbdd5){return _0x3dbdd5&&_0x3dbdd5[a80_0x17c4('0x1')]?_0x3dbdd5:{'default':_0x3dbdd5};};Object[a80_0x17c4('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a80_0x17c4('0x3')));class UsersModel{constructor(_0x4536f3,_0x256edc){const _0xb04b58=function(_0x4536f3){const _0xb04b58=_0x4536f3['define'](_0x256edc,{'id':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x6')],'defaultValue':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x7')]},'first_name':{'type':sequelize_1[a80_0x17c4('0x4')]['STRING']},'last_name':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x8')]},'email':{'type':sequelize_1[a80_0x17c4('0x4')]['STRING'],'unique':!![]},'phone':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x8')]},'username':{'type':sequelize_1['default'][a80_0x17c4('0x8')],'unique':!![]},'password':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x8')]},'status':{'type':sequelize_1['default'][a80_0x17c4('0x5')],'defaultValue':0x0},'created_by_user_id':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x5')],'references':{'model':_0x256edc,'key':'id'}},'updated_by_user_id':{'type':sequelize_1['default'][a80_0x17c4('0x5')],'references':{'model':_0x256edc,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1['default'][a80_0x17c4('0x5')],'references':{'model':_0x256edc,'key':'id'}},'created_at':{'type':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x9')],'allowNull':![]},'updated_at':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x9')],'deleted_at':sequelize_1[a80_0x17c4('0x4')][a80_0x17c4('0x9')]},{'paranoid':!![],'underscored':!![]});return _0xb04b58;};const _0x41fea5=_0x4536f3[a80_0x17c4('0xa')](_0x256edc,_0xb04b58);return _0x41fea5;}}exports[a80_0x17c4('0x4')]=UsersModel;