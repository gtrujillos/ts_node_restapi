var a113_0x260d=['UUID','UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','define','default','INTEGER'];(function(_0x469cc2,_0x39a822){var _0x51ccbd=function(_0x4b296a){while(--_0x4b296a){_0x469cc2['push'](_0x469cc2['shift']());}};_0x51ccbd(++_0x39a822);}(a113_0x260d,0x19c));var a113_0x3b99=function(_0x558fc9,_0x5aab20){_0x558fc9=_0x558fc9-0x0;var _0xc87eec=a113_0x260d[_0x558fc9];return _0xc87eec;};'use strict';var __importDefault=this&&this[a113_0x3b99('0x0')]||function(_0x4701d7){return _0x4701d7&&_0x4701d7[a113_0x3b99('0x1')]?_0x4701d7:{'default':_0x4701d7};};Object[a113_0x3b99('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x1064ef,_0xac67ac,_0x144d98){const _0x2fafcd=function(_0x1064ef,_0x2b946d){const _0x2fafcd=_0x1064ef[a113_0x3b99('0x3')](_0xac67ac,{'id':{'type':sequelize_1[a113_0x3b99('0x4')][a113_0x3b99('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a113_0x3b99('0x6')],'defaultValue':sequelize_1[a113_0x3b99('0x4')][a113_0x3b99('0x7')]},'device_id':{'type':_0x2b946d[a113_0x3b99('0x5')],'references':{'model':_0x144d98,'key':'id'}},'lat':{'type':sequelize_1[a113_0x3b99('0x4')]['DOUBLE']},'lon':{'type':sequelize_1[a113_0x3b99('0x4')][a113_0x3b99('0x8')]},'status':{'type':sequelize_1[a113_0x3b99('0x4')][a113_0x3b99('0x5')]},'reported_at':{'type':_0x2b946d[a113_0x3b99('0x9')],'allowNull':![]},'created_at':{'type':_0x2b946d[a113_0x3b99('0x9')],'allowNull':![]},'updated_at':_0x2b946d[a113_0x3b99('0x9')],'deleted_at':_0x2b946d[a113_0x3b99('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x2fafcd;};const _0x1cf182=_0x1064ef[a113_0x3b99('0xa')](_0xac67ac,_0x2fafcd);return _0x1cf182;}}exports[a113_0x3b99('0x4')]=AlarmsModel;