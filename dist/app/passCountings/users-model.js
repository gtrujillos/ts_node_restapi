var a40_0x2dea=['DATE','__importDefault','__esModule','UUID','default','STRING','INTEGER'];(function(_0x4c7dc2,_0x4a7f84){var _0x1bfdd6=function(_0xcef8ff){while(--_0xcef8ff){_0x4c7dc2['push'](_0x4c7dc2['shift']());}};_0x1bfdd6(++_0x4a7f84);}(a40_0x2dea,0x197));var a40_0x3722=function(_0x25412b,_0xdc5590){_0x25412b=_0x25412b-0x0;var _0x19667e=a40_0x2dea[_0x25412b];return _0x19667e;};'use strict';var __importDefault=this&&this[a40_0x3722('0x0')]||function(_0x20b013){return _0x20b013&&_0x20b013['__esModule']?_0x20b013:{'default':_0x20b013};};Object['defineProperty'](exports,a40_0x3722('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserModel{constructor(_0x677099,_0x78afff){const _0x1fe005=function(_0x677099,_0x4336e7){const _0x1fe005=_0x677099['define'](_0x78afff,{'id':{'type':_0x4336e7[a40_0x3722('0x2')],'primaryKey':!![],'defaultValue':_0x4336e7['UUIDV4']},'first_name':{'type':sequelize_1[a40_0x3722('0x3')]['STRING']},'last_name':{'type':sequelize_1[a40_0x3722('0x3')][a40_0x3722('0x4')]},'email':{'type':sequelize_1['default'][a40_0x3722('0x4')],'unique':!![]},'phone':{'type':sequelize_1[a40_0x3722('0x3')][a40_0x3722('0x4')],'unique':!![]},'username':{'type':sequelize_1[a40_0x3722('0x3')][a40_0x3722('0x4')],'unique':!![]},'password':{'type':sequelize_1[a40_0x3722('0x3')]['STRING']},'status':{'type':sequelize_1[a40_0x3722('0x3')][a40_0x3722('0x5')],'defaultValue':0x0},'created_at':{'type':_0x4336e7[a40_0x3722('0x6')],'allowNull':![]},'updated_at':_0x4336e7['DATE'],'deleted_at':_0x4336e7[a40_0x3722('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x1fe005;};const _0x3f745c=_0x677099['import'](_0x78afff,_0x1fe005);return _0x3f745c;}}exports[a40_0x3722('0x3')]=UserModel;