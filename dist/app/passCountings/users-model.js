var a40_0x54cd=['import','__importDefault','defineProperty','sequelize','UUID','UUIDV4','default','STRING','INTEGER','DATE'];(function(_0x46891c,_0x2e38ee){var _0x2c0d16=function(_0x2ba46a){while(--_0x2ba46a){_0x46891c['push'](_0x46891c['shift']());}};_0x2c0d16(++_0x2e38ee);}(a40_0x54cd,0x17d));var a40_0x742a=function(_0x3e1b5d,_0x4da9c2){_0x3e1b5d=_0x3e1b5d-0x0;var _0x1d71fb=a40_0x54cd[_0x3e1b5d];return _0x1d71fb;};'use strict';var __importDefault=this&&this[a40_0x742a('0x0')]||function(_0x2030ed){return _0x2030ed&&_0x2030ed['__esModule']?_0x2030ed:{'default':_0x2030ed};};Object[a40_0x742a('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a40_0x742a('0x2')));class UserModel{constructor(_0x4da602,_0x1dbe7b){const _0x529bf4=function(_0x4da602,_0xda1a80){const _0x529bf4=_0x4da602['define'](_0x1dbe7b,{'id':{'type':_0xda1a80[a40_0x742a('0x3')],'primaryKey':!![],'defaultValue':_0xda1a80[a40_0x742a('0x4')]},'first_name':{'type':sequelize_1[a40_0x742a('0x5')]['STRING']},'last_name':{'type':sequelize_1[a40_0x742a('0x5')]['STRING']},'email':{'type':sequelize_1[a40_0x742a('0x5')][a40_0x742a('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a40_0x742a('0x5')][a40_0x742a('0x6')],'unique':!![]},'username':{'type':sequelize_1[a40_0x742a('0x5')][a40_0x742a('0x6')],'unique':!![]},'password':{'type':sequelize_1[a40_0x742a('0x5')][a40_0x742a('0x6')]},'status':{'type':sequelize_1[a40_0x742a('0x5')][a40_0x742a('0x7')],'defaultValue':0x0},'created_at':{'type':_0xda1a80[a40_0x742a('0x8')],'allowNull':![]},'updated_at':_0xda1a80['DATE'],'deleted_at':_0xda1a80[a40_0x742a('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x529bf4;};const _0x5ec885=_0x4da602[a40_0x742a('0x9')](_0x1dbe7b,_0x529bf4);return _0x5ec885;}}exports[a40_0x742a('0x5')]=UserModel;