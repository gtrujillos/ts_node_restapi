var a63_0x3270=['__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault'];(function(_0x4ccdfa,_0x41f11b){var _0x224bac=function(_0x192312){while(--_0x192312){_0x4ccdfa['push'](_0x4ccdfa['shift']());}};_0x224bac(++_0x41f11b);}(a63_0x3270,0x1c7));var a63_0x593b=function(_0x40f17f,_0x53e585){_0x40f17f=_0x40f17f-0x0;var _0x3b3208=a63_0x3270[_0x40f17f];return _0x3b3208;};'use strict';var __importDefault=this&&this[a63_0x593b('0x0')]||function(_0x469c0c){return _0x469c0c&&_0x469c0c[a63_0x593b('0x1')]?_0x469c0c:{'default':_0x469c0c};};Object[a63_0x593b('0x2')](exports,a63_0x593b('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a63_0x593b('0x3')));class PlayersModel{constructor(_0x2250eb,_0x26f455,_0x5bbeb6){const _0x279b9d=function(_0x2250eb,_0x8dcf8b){const _0x279b9d=_0x2250eb[a63_0x593b('0x4')](_0x26f455,{'id':{'type':sequelize_1[a63_0x593b('0x5')][a63_0x593b('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a63_0x593b('0x5')][a63_0x593b('0x7')],'defaultValue':sequelize_1['default'][a63_0x593b('0x8')]},'user_id':{'type':_0x8dcf8b[a63_0x593b('0x6')],'references':{'model':_0x5bbeb6,'key':'id'}},'title':{'type':sequelize_1[a63_0x593b('0x5')][a63_0x593b('0x9')]},'short_desc':{'type':sequelize_1[a63_0x593b('0x5')][a63_0x593b('0x9')]},'thumb':{'type':sequelize_1[a63_0x593b('0x5')]['STRING']},'created_at':{'type':_0x8dcf8b[a63_0x593b('0xa')],'allowNull':![]},'updated_at':_0x8dcf8b[a63_0x593b('0xa')],'deleted_at':_0x8dcf8b[a63_0x593b('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x279b9d;};const _0x2fb883=_0x2250eb[a63_0x593b('0xb')](_0x26f455,_0x279b9d);return _0x2fb883;}}exports['default']=PlayersModel;