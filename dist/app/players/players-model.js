var a63_0x4ee6=['__esModule','defineProperty','define','default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault'];(function(_0x4b315c,_0x2d152c){var _0x35a9d1=function(_0x151d7f){while(--_0x151d7f){_0x4b315c['push'](_0x4b315c['shift']());}};_0x35a9d1(++_0x2d152c);}(a63_0x4ee6,0x128));var a63_0x1051=function(_0x2cdd02,_0x21710c){_0x2cdd02=_0x2cdd02-0x0;var _0x5114c4=a63_0x4ee6[_0x2cdd02];return _0x5114c4;};'use strict';var __importDefault=this&&this[a63_0x1051('0x0')]||function(_0x4eafa4){return _0x4eafa4&&_0x4eafa4[a63_0x1051('0x1')]?_0x4eafa4:{'default':_0x4eafa4};};Object[a63_0x1051('0x2')](exports,a63_0x1051('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayersModel{constructor(_0x7a4c3f,_0x44f489,_0x484ee4){const _0x4adfd9=function(_0x7a4c3f,_0x219e61){const _0x4adfd9=_0x7a4c3f[a63_0x1051('0x3')](_0x44f489,{'id':{'type':sequelize_1[a63_0x1051('0x4')][a63_0x1051('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a63_0x1051('0x4')][a63_0x1051('0x6')],'defaultValue':sequelize_1['default'][a63_0x1051('0x7')]},'user_id':{'type':_0x219e61[a63_0x1051('0x5')],'references':{'model':_0x484ee4,'key':'id'}},'title':{'type':sequelize_1[a63_0x1051('0x4')][a63_0x1051('0x8')]},'short_desc':{'type':sequelize_1[a63_0x1051('0x4')][a63_0x1051('0x8')]},'thumb':{'type':sequelize_1[a63_0x1051('0x4')][a63_0x1051('0x8')]},'created_at':{'type':_0x219e61[a63_0x1051('0x9')],'allowNull':![]},'updated_at':_0x219e61[a63_0x1051('0x9')],'deleted_at':_0x219e61[a63_0x1051('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x4adfd9;};const _0x15be3f=_0x7a4c3f[a63_0x1051('0xa')](_0x44f489,_0x4adfd9);return _0x15be3f;}}exports['default']=PlayersModel;