var a55_0x2337=['DATE','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','INTEGER','DOUBLE'];(function(_0x32a12a,_0x225de9){var _0x23cbda=function(_0x337184){while(--_0x337184){_0x32a12a['push'](_0x32a12a['shift']());}};_0x23cbda(++_0x225de9);}(a55_0x2337,0x79));var a55_0x3993=function(_0x18023b,_0x51ba33){_0x18023b=_0x18023b-0x0;var _0x4aff8c=a55_0x2337[_0x18023b];return _0x4aff8c;};'use strict';var __importDefault=this&&this[a55_0x3993('0x0')]||function(_0x24b52d){return _0x24b52d&&_0x24b52d[a55_0x3993('0x1')]?_0x24b52d:{'default':_0x24b52d};};Object[a55_0x3993('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a55_0x3993('0x3')));class AlarmsModel{constructor(_0x4ea5ff,_0x425f48,_0x138cd6){const _0x43305c=function(_0x4ea5ff,_0x3949d9){const _0x43305c=_0x4ea5ff[a55_0x3993('0x4')](_0x425f48,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a55_0x3993('0x5')][a55_0x3993('0x6')],'defaultValue':sequelize_1[a55_0x3993('0x5')]['UUIDV4']},'device_id':{'type':_0x3949d9[a55_0x3993('0x7')],'references':{'model':_0x138cd6,'key':'id'}},'lat':{'type':sequelize_1[a55_0x3993('0x5')][a55_0x3993('0x8')]},'lon':{'type':sequelize_1[a55_0x3993('0x5')][a55_0x3993('0x8')]},'status':{'type':sequelize_1['default']['INTEGER']},'reported_at':{'type':_0x3949d9['DATE'],'allowNull':![]},'created_at':{'type':_0x3949d9['DATE'],'allowNull':![]},'updated_at':_0x3949d9[a55_0x3993('0x9')],'deleted_at':_0x3949d9[a55_0x3993('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x43305c;};const _0x1e6d8e=_0x4ea5ff['import'](_0x425f48,_0x43305c);return _0x1e6d8e;}}exports[a55_0x3993('0x5')]=AlarmsModel;