var a70_0x1e68=['default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault','__esModule','sequelize'];(function(_0x39a8bc,_0x569d23){var _0x52f584=function(_0x386f2e){while(--_0x386f2e){_0x39a8bc['push'](_0x39a8bc['shift']());}};_0x52f584(++_0x569d23);}(a70_0x1e68,0x101));var a70_0x1f80=function(_0x16bb5a,_0x3429a0){_0x16bb5a=_0x16bb5a-0x0;var _0x88acab=a70_0x1e68[_0x16bb5a];return _0x88acab;};'use strict';var __importDefault=this&&this[a70_0x1f80('0x0')]||function(_0x530351){return _0x530351&&_0x530351[a70_0x1f80('0x1')]?_0x530351:{'default':_0x530351};};Object['defineProperty'](exports,a70_0x1f80('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a70_0x1f80('0x2')));class PlayersModel{constructor(_0x2dd144,_0x34a424,_0x480795){const _0x5aef2e=function(_0x2dd144,_0x19c40c){const _0x5aef2e=_0x2dd144['define'](_0x34a424,{'id':{'type':sequelize_1[a70_0x1f80('0x3')][a70_0x1f80('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a70_0x1f80('0x3')][a70_0x1f80('0x5')],'defaultValue':sequelize_1[a70_0x1f80('0x3')][a70_0x1f80('0x6')]},'user_id':{'type':_0x19c40c[a70_0x1f80('0x4')],'references':{'model':_0x480795,'key':'id'}},'title':{'type':sequelize_1[a70_0x1f80('0x3')][a70_0x1f80('0x7')]},'short_desc':{'type':sequelize_1[a70_0x1f80('0x3')][a70_0x1f80('0x7')]},'thumb':{'type':sequelize_1[a70_0x1f80('0x3')]['STRING']},'created_at':{'type':_0x19c40c['DATE'],'allowNull':![]},'updated_at':_0x19c40c[a70_0x1f80('0x8')],'deleted_at':_0x19c40c['DATE']},{'paranoid':!![],'underscored':!![]});return _0x5aef2e;};const _0x5c813d=_0x2dd144[a70_0x1f80('0x9')](_0x34a424,_0x5aef2e);return _0x5c813d;}}exports['default']=PlayersModel;