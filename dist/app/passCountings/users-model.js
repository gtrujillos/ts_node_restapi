var a40_0x29bb=['defineProperty','sequelize','UUIDV4','default','STRING','INTEGER','DATE','import','__importDefault','__esModule'];(function(_0x43a2f6,_0x47402c){var _0x3fcccc=function(_0x4645df){while(--_0x4645df){_0x43a2f6['push'](_0x43a2f6['shift']());}};_0x3fcccc(++_0x47402c);}(a40_0x29bb,0xf8));var a40_0x27b9=function(_0x4fb800,_0x3afdae){_0x4fb800=_0x4fb800-0x0;var _0x3fcfe5=a40_0x29bb[_0x4fb800];return _0x3fcfe5;};'use strict';var __importDefault=this&&this[a40_0x27b9('0x0')]||function(_0xdfbbe){return _0xdfbbe&&_0xdfbbe[a40_0x27b9('0x1')]?_0xdfbbe:{'default':_0xdfbbe};};Object[a40_0x27b9('0x2')](exports,a40_0x27b9('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a40_0x27b9('0x3')));class UserModel{constructor(_0x11ab82,_0x5559f9){const _0x1c3501=function(_0x11ab82,_0x407be3){const _0x1c3501=_0x11ab82['define'](_0x5559f9,{'id':{'type':_0x407be3['UUID'],'primaryKey':!![],'defaultValue':_0x407be3[a40_0x27b9('0x4')]},'first_name':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')]},'last_name':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')]},'email':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')],'unique':!![]},'username':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')],'unique':!![]},'password':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x6')]},'status':{'type':sequelize_1[a40_0x27b9('0x5')][a40_0x27b9('0x7')],'defaultValue':0x0},'created_at':{'type':_0x407be3[a40_0x27b9('0x8')],'allowNull':![]},'updated_at':_0x407be3['DATE'],'deleted_at':_0x407be3['DATE']},{'paranoid':!![],'underscored':!![]});return _0x1c3501;};const _0x4ab051=_0x11ab82[a40_0x27b9('0x9')](_0x5559f9,_0x1c3501);return _0x4ab051;}}exports['default']=UserModel;