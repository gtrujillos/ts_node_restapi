var a45_0x38b1=['import','__importDefault','defineProperty','__esModule','define','default','UUID','DATE'];(function(_0x4b315c,_0x2d152c){var _0x35a9d1=function(_0x151d7f){while(--_0x151d7f){_0x4b315c['push'](_0x4b315c['shift']());}};_0x35a9d1(++_0x2d152c);}(a45_0x38b1,0x191));var a45_0x31f8=function(_0xf1226e,_0x123aea){_0xf1226e=_0xf1226e-0x0;var _0x5da9ab=a45_0x38b1[_0xf1226e];return _0x5da9ab;};'use strict';var __importDefault=this&&this[a45_0x31f8('0x0')]||function(_0x2a847c){return _0x2a847c&&_0x2a847c['__esModule']?_0x2a847c:{'default':_0x2a847c};};Object[a45_0x31f8('0x1')](exports,a45_0x31f8('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlatesModel{constructor(_0x25fc86,_0x2c62fb){const _0x362050=function(_0x25fc86,_0xe656be){const _0x362050=_0x25fc86[a45_0x31f8('0x3')](_0x2c62fb,{'id':{'type':sequelize_1[a45_0x31f8('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a45_0x31f8('0x4')][a45_0x31f8('0x5')],'defaultValue':sequelize_1[a45_0x31f8('0x4')]['UUIDV4']},'plate':{'type':sequelize_1[a45_0x31f8('0x4')]['STRING']},'reported_at':{'type':_0xe656be[a45_0x31f8('0x6')],'allowNull':![]},'created_at':{'type':_0xe656be['DATE'],'allowNull':![]},'updated_at':_0xe656be[a45_0x31f8('0x6')],'deleted_at':_0xe656be[a45_0x31f8('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x362050;};const _0x3692b2=_0x25fc86[a45_0x31f8('0x7')](_0x2c62fb,_0x362050);return _0x3692b2;}}exports[a45_0x31f8('0x4')]=PlatesModel;