var a7_0x39e4=['define','default','INTEGER','UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','sequelize'];(function(_0x4f0ee8,_0x55f8c3){var _0x45b5b8=function(_0x4db718){while(--_0x4db718){_0x4f0ee8['push'](_0x4f0ee8['shift']());}};_0x45b5b8(++_0x55f8c3);}(a7_0x39e4,0x7f));var a7_0x1651=function(_0x1074da,_0xf77a66){_0x1074da=_0x1074da-0x0;var _0x4d694a=a7_0x39e4[_0x1074da];return _0x4d694a;};'use strict';var __importDefault=this&&this[a7_0x1651('0x0')]||function(_0x37ea84){return _0x37ea84&&_0x37ea84['__esModule']?_0x37ea84:{'default':_0x37ea84};};Object['defineProperty'](exports,a7_0x1651('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a7_0x1651('0x2')));class AlarmsModel{constructor(_0xaee13e,_0x27dab4,_0x2569b3){const _0x142024=function(_0xaee13e,_0x44ae54){const _0x142024=_0xaee13e[a7_0x1651('0x3')](_0x27dab4,{'id':{'type':sequelize_1[a7_0x1651('0x4')][a7_0x1651('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0x1651('0x4')]['UUID'],'defaultValue':sequelize_1[a7_0x1651('0x4')][a7_0x1651('0x6')]},'device_id':{'type':_0x44ae54[a7_0x1651('0x5')],'references':{'model':_0x2569b3,'key':'id'}},'lat':{'type':sequelize_1['default'][a7_0x1651('0x7')]},'lon':{'type':sequelize_1[a7_0x1651('0x4')][a7_0x1651('0x7')]},'status':{'type':sequelize_1[a7_0x1651('0x4')]['INTEGER']},'reported_at':{'type':_0x44ae54['DATE'],'allowNull':![]},'created_at':{'type':_0x44ae54[a7_0x1651('0x8')],'allowNull':![]},'updated_at':_0x44ae54[a7_0x1651('0x8')],'deleted_at':_0x44ae54[a7_0x1651('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x142024;};const _0x1b041f=_0xaee13e[a7_0x1651('0x9')](_0x27dab4,_0x142024);return _0x1b041f;}}exports[a7_0x1651('0x4')]=AlarmsModel;