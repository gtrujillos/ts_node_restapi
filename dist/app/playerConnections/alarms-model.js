var a110_0x2261=['defineProperty','INTEGER','default','DOUBLE','DATE','import','__importDefault','__esModule'];(function(_0x41b830,_0x592ae8){var _0x5ab6dd=function(_0x554ad0){while(--_0x554ad0){_0x41b830['push'](_0x41b830['shift']());}};_0x5ab6dd(++_0x592ae8);}(a110_0x2261,0xe6));var a110_0x361b=function(_0x183f26,_0x7988d3){_0x183f26=_0x183f26-0x0;var _0x58886e=a110_0x2261[_0x183f26];return _0x58886e;};'use strict';var __importDefault=this&&this[a110_0x361b('0x0')]||function(_0x41f2f4){return _0x41f2f4&&_0x41f2f4[a110_0x361b('0x1')]?_0x41f2f4:{'default':_0x41f2f4};};Object[a110_0x361b('0x2')](exports,a110_0x361b('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x47c6b0,_0x31b178,_0x1270fa){const _0x5e329b=function(_0x47c6b0,_0x4cac34){const _0x5e329b=_0x47c6b0['define'](_0x31b178,{'id':{'type':sequelize_1['default'][a110_0x361b('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a110_0x361b('0x4')]['UUID'],'defaultValue':sequelize_1[a110_0x361b('0x4')]['UUIDV4']},'device_id':{'type':_0x4cac34['INTEGER'],'references':{'model':_0x1270fa,'key':'id'}},'lat':{'type':sequelize_1[a110_0x361b('0x4')]['DOUBLE']},'lon':{'type':sequelize_1[a110_0x361b('0x4')][a110_0x361b('0x5')]},'status':{'type':sequelize_1[a110_0x361b('0x4')][a110_0x361b('0x3')]},'reported_at':{'type':_0x4cac34[a110_0x361b('0x6')],'allowNull':![]},'created_at':{'type':_0x4cac34[a110_0x361b('0x6')],'allowNull':![]},'updated_at':_0x4cac34[a110_0x361b('0x6')],'deleted_at':_0x4cac34[a110_0x361b('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x5e329b;};const _0x25b1eb=_0x47c6b0[a110_0x361b('0x7')](_0x31b178,_0x5e329b);return _0x25b1eb;}}exports[a110_0x361b('0x4')]=AlarmsModel;