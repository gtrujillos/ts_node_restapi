var a125_0x4fa5=['UUIDV4','STRING','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID'];(function(_0x27c699,_0x3c2f03){var _0x5a1557=function(_0x2a014a){while(--_0x2a014a){_0x27c699['push'](_0x27c699['shift']());}};_0x5a1557(++_0x3c2f03);}(a125_0x4fa5,0x10c));var a125_0x4980=function(_0x7bfc1f,_0x122f20){_0x7bfc1f=_0x7bfc1f-0x0;var _0x40155e=a125_0x4fa5[_0x7bfc1f];return _0x40155e;};'use strict';var __importDefault=this&&this[a125_0x4980('0x0')]||function(_0x2667cb){return _0x2667cb&&_0x2667cb[a125_0x4980('0x1')]?_0x2667cb:{'default':_0x2667cb};};Object[a125_0x4980('0x2')](exports,a125_0x4980('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a125_0x4980('0x3')));class PlayersModel{constructor(_0x3015ce,_0x4042f6,_0x426935){const _0x195608=function(_0x3015ce,_0x191d57){const _0x195608=_0x3015ce[a125_0x4980('0x4')](_0x4042f6,{'id':{'type':sequelize_1[a125_0x4980('0x5')][a125_0x4980('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a125_0x4980('0x5')][a125_0x4980('0x7')],'defaultValue':sequelize_1[a125_0x4980('0x5')][a125_0x4980('0x8')]},'user_id':{'type':_0x191d57['INTEGER'],'references':{'model':_0x426935,'key':'id'}},'title':{'type':sequelize_1['default'][a125_0x4980('0x9')]},'short_desc':{'type':sequelize_1[a125_0x4980('0x5')][a125_0x4980('0x9')]},'thumb':{'type':sequelize_1[a125_0x4980('0x5')][a125_0x4980('0x9')]},'created_at':{'type':_0x191d57[a125_0x4980('0xa')],'allowNull':![]},'updated_at':_0x191d57[a125_0x4980('0xa')],'deleted_at':_0x191d57[a125_0x4980('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x195608;};const _0x300120=_0x3015ce[a125_0x4980('0xb')](_0x4042f6,_0x195608);return _0x300120;}}exports[a125_0x4980('0x5')]=PlayersModel;