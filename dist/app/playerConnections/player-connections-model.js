var a113_0x3472=['DATE','import','__importDefault','__esModule','define','default','INTEGER','UUIDV4','DOUBLE'];(function(_0x2464d2,_0x28a080){var _0x541130=function(_0x234635){while(--_0x234635){_0x2464d2['push'](_0x2464d2['shift']());}};_0x541130(++_0x28a080);}(a113_0x3472,0x65));var a113_0x24ed=function(_0x36c536,_0x24667a){_0x36c536=_0x36c536-0x0;var _0x39515c=a113_0x3472[_0x36c536];return _0x39515c;};'use strict';var __importDefault=this&&this[a113_0x24ed('0x0')]||function(_0xb79a68){return _0xb79a68&&_0xb79a68[a113_0x24ed('0x1')]?_0xb79a68:{'default':_0xb79a68};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x1d3429,_0x52c028,_0x3e992d){const _0x42debd=function(_0x1d3429,_0x14abcf){const _0x42debd=_0x1d3429[a113_0x24ed('0x2')](_0x52c028,{'id':{'type':sequelize_1[a113_0x24ed('0x3')][a113_0x24ed('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a113_0x24ed('0x3')][a113_0x24ed('0x5')]},'device_id':{'type':_0x14abcf[a113_0x24ed('0x4')],'references':{'model':_0x3e992d,'key':'id'}},'lat':{'type':sequelize_1[a113_0x24ed('0x3')][a113_0x24ed('0x6')]},'lon':{'type':sequelize_1[a113_0x24ed('0x3')][a113_0x24ed('0x6')]},'status':{'type':sequelize_1[a113_0x24ed('0x3')]['INTEGER']},'reported_at':{'type':_0x14abcf[a113_0x24ed('0x7')],'allowNull':![]},'created_at':{'type':_0x14abcf[a113_0x24ed('0x7')],'allowNull':![]},'updated_at':_0x14abcf[a113_0x24ed('0x7')],'deleted_at':_0x14abcf[a113_0x24ed('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x42debd;};const _0x1ad6ab=_0x1d3429[a113_0x24ed('0x8')](_0x52c028,_0x42debd);return _0x1ad6ab;}}exports['default']=AlarmsModel;