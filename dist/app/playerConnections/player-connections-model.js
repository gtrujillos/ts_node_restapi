var a113_0x4f8b=['DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','UUIDV4','INTEGER','DOUBLE'];(function(_0x57f668,_0x54bed0){var _0x120733=function(_0x1e39c1){while(--_0x1e39c1){_0x57f668['push'](_0x57f668['shift']());}};_0x120733(++_0x54bed0);}(a113_0x4f8b,0x1ee));var a113_0x1495=function(_0x1987b4,_0x156fe7){_0x1987b4=_0x1987b4-0x0;var _0x1b90d5=a113_0x4f8b[_0x1987b4];return _0x1b90d5;};'use strict';var __importDefault=this&&this[a113_0x1495('0x0')]||function(_0x4c61c){return _0x4c61c&&_0x4c61c[a113_0x1495('0x1')]?_0x4c61c:{'default':_0x4c61c};};Object[a113_0x1495('0x2')](exports,a113_0x1495('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a113_0x1495('0x3')));class AlarmsModel{constructor(_0x14c6a8,_0xe91ea9,_0x5c7653){const _0x132bc8=function(_0x14c6a8,_0x44bc11){const _0x132bc8=_0x14c6a8[a113_0x1495('0x4')](_0xe91ea9,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a113_0x1495('0x5')][a113_0x1495('0x6')],'defaultValue':sequelize_1[a113_0x1495('0x5')][a113_0x1495('0x7')]},'device_id':{'type':_0x44bc11[a113_0x1495('0x8')],'references':{'model':_0x5c7653,'key':'id'}},'lat':{'type':sequelize_1[a113_0x1495('0x5')][a113_0x1495('0x9')]},'lon':{'type':sequelize_1[a113_0x1495('0x5')][a113_0x1495('0x9')]},'status':{'type':sequelize_1['default'][a113_0x1495('0x8')]},'reported_at':{'type':_0x44bc11['DATE'],'allowNull':![]},'created_at':{'type':_0x44bc11[a113_0x1495('0xa')],'allowNull':![]},'updated_at':_0x44bc11[a113_0x1495('0xa')],'deleted_at':_0x44bc11[a113_0x1495('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x132bc8;};const _0x1d307e=_0x14c6a8[a113_0x1495('0xb')](_0xe91ea9,_0x132bc8);return _0x1d307e;}}exports[a113_0x1495('0x5')]=AlarmsModel;