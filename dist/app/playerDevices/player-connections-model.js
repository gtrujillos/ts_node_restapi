var a116_0x26ff=['define','default','INTEGER','DOUBLE','DATE','__importDefault','__esModule'];(function(_0x3b7871,_0x2a34b6){var _0x35c19b=function(_0x5b28f4){while(--_0x5b28f4){_0x3b7871['push'](_0x3b7871['shift']());}};_0x35c19b(++_0x2a34b6);}(a116_0x26ff,0xbb));var a116_0x95a3=function(_0x16b774,_0x568099){_0x16b774=_0x16b774-0x0;var _0x38771d=a116_0x26ff[_0x16b774];return _0x38771d;};'use strict';var __importDefault=this&&this[a116_0x95a3('0x0')]||function(_0x55016c){return _0x55016c&&_0x55016c[a116_0x95a3('0x1')]?_0x55016c:{'default':_0x55016c};};Object['defineProperty'](exports,a116_0x95a3('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x582099,_0x9b4d16,_0x43be72){const _0x2e1a5c=function(_0x582099,_0x1c6c82){const _0x2e1a5c=_0x582099[a116_0x95a3('0x2')](_0x9b4d16,{'id':{'type':sequelize_1[a116_0x95a3('0x3')][a116_0x95a3('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a116_0x95a3('0x3')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'device_id':{'type':_0x1c6c82[a116_0x95a3('0x4')],'references':{'model':_0x43be72,'key':'id'}},'lat':{'type':sequelize_1[a116_0x95a3('0x3')][a116_0x95a3('0x5')]},'lon':{'type':sequelize_1[a116_0x95a3('0x3')][a116_0x95a3('0x5')]},'status':{'type':sequelize_1[a116_0x95a3('0x3')][a116_0x95a3('0x4')]},'reported_at':{'type':_0x1c6c82['DATE'],'allowNull':![]},'created_at':{'type':_0x1c6c82[a116_0x95a3('0x6')],'allowNull':![]},'updated_at':_0x1c6c82[a116_0x95a3('0x6')],'deleted_at':_0x1c6c82[a116_0x95a3('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x2e1a5c;};const _0xcd3080=_0x582099['import'](_0x9b4d16,_0x2e1a5c);return _0xcd3080;}}exports[a116_0x95a3('0x3')]=AlarmsModel;