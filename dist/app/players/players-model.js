var a63_0x39a0=['DATE','import','__importDefault','__esModule','defineProperty','define','default','INTEGER','UUID','UUIDV4','STRING'];(function(_0x534668,_0x3a4a9d){var _0x166f97=function(_0x210198){while(--_0x210198){_0x534668['push'](_0x534668['shift']());}};_0x166f97(++_0x3a4a9d);}(a63_0x39a0,0xf4));var a63_0xef01=function(_0x26fe3c,_0x474a38){_0x26fe3c=_0x26fe3c-0x0;var _0xc4e5e7=a63_0x39a0[_0x26fe3c];return _0xc4e5e7;};'use strict';var __importDefault=this&&this[a63_0xef01('0x0')]||function(_0x153624){return _0x153624&&_0x153624[a63_0xef01('0x1')]?_0x153624:{'default':_0x153624};};Object[a63_0xef01('0x2')](exports,a63_0xef01('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayersModel{constructor(_0x2cc179,_0x3c8550,_0x444052){const _0x1ff2e9=function(_0x2cc179,_0x471d53){const _0x1ff2e9=_0x2cc179[a63_0xef01('0x3')](_0x3c8550,{'id':{'type':sequelize_1[a63_0xef01('0x4')][a63_0xef01('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a63_0xef01('0x4')][a63_0xef01('0x6')],'defaultValue':sequelize_1[a63_0xef01('0x4')][a63_0xef01('0x7')]},'user_id':{'type':_0x471d53[a63_0xef01('0x5')],'references':{'model':_0x444052,'key':'id'}},'title':{'type':sequelize_1[a63_0xef01('0x4')]['STRING']},'short_desc':{'type':sequelize_1[a63_0xef01('0x4')][a63_0xef01('0x8')]},'thumb':{'type':sequelize_1[a63_0xef01('0x4')][a63_0xef01('0x8')]},'created_at':{'type':_0x471d53['DATE'],'allowNull':![]},'updated_at':_0x471d53['DATE'],'deleted_at':_0x471d53[a63_0xef01('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1ff2e9;};const _0x2b8f04=_0x2cc179[a63_0xef01('0xa')](_0x3c8550,_0x1ff2e9);return _0x2b8f04;}}exports[a63_0xef01('0x4')]=PlayersModel;