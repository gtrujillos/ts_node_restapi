var a7_0x5bc1=['define','default','INTEGER','UUID','UUIDV4','DOUBLE','import','__esModule','defineProperty','sequelize'];(function(_0x1711e7,_0x359e70){var _0x3022c9=function(_0x221ae5){while(--_0x221ae5){_0x1711e7['push'](_0x1711e7['shift']());}};_0x3022c9(++_0x359e70);}(a7_0x5bc1,0xb1));var a7_0x737d=function(_0x48257a,_0x17d03){_0x48257a=_0x48257a-0x0;var _0x5639a7=a7_0x5bc1[_0x48257a];return _0x5639a7;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4040a2){return _0x4040a2&&_0x4040a2[a7_0x737d('0x0')]?_0x4040a2:{'default':_0x4040a2};};Object[a7_0x737d('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a7_0x737d('0x2')));class AlarmsModel{constructor(_0x582a4f,_0x45e44f,_0x29a901){const _0x542c3c=function(_0x582a4f,_0x31536d){const _0x542c3c=_0x582a4f[a7_0x737d('0x3')](_0x45e44f,{'id':{'type':sequelize_1[a7_0x737d('0x4')][a7_0x737d('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0x737d('0x4')][a7_0x737d('0x6')],'defaultValue':sequelize_1[a7_0x737d('0x4')][a7_0x737d('0x7')]},'device_id':{'type':_0x31536d[a7_0x737d('0x5')],'references':{'model':_0x29a901,'key':'id'}},'lat':{'type':sequelize_1[a7_0x737d('0x4')]['DOUBLE']},'lon':{'type':sequelize_1[a7_0x737d('0x4')][a7_0x737d('0x8')]},'status':{'type':sequelize_1[a7_0x737d('0x4')][a7_0x737d('0x5')]},'reported_at':{'type':_0x31536d['DATE'],'allowNull':![]},'created_at':{'type':_0x31536d['DATE'],'allowNull':![]},'updated_at':_0x31536d['DATE'],'deleted_at':_0x31536d['DATE']},{'paranoid':!![],'underscored':!![]});return _0x542c3c;};const _0x1a5790=_0x582a4f[a7_0x737d('0x9')](_0x45e44f,_0x542c3c);return _0x1a5790;}}exports[a7_0x737d('0x4')]=AlarmsModel;