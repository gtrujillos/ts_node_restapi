var a7_0x3205=['INTEGER','default','DOUBLE','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define'];(function(_0x33ab11,_0x2794b6){var _0x34073c=function(_0x1dd9dc){while(--_0x1dd9dc){_0x33ab11['push'](_0x33ab11['shift']());}};_0x34073c(++_0x2794b6);}(a7_0x3205,0xd7));var a7_0x28cb=function(_0x5aa54a,_0x4f1556){_0x5aa54a=_0x5aa54a-0x0;var _0x3b7167=a7_0x3205[_0x5aa54a];return _0x3b7167;};'use strict';var __importDefault=this&&this[a7_0x28cb('0x0')]||function(_0x2beecb){return _0x2beecb&&_0x2beecb['__esModule']?_0x2beecb:{'default':_0x2beecb};};Object[a7_0x28cb('0x1')](exports,a7_0x28cb('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a7_0x28cb('0x3')));class AlarmsModel{constructor(_0x48e39a,_0x1a6425,_0x56a830){const _0x1de462=function(_0x48e39a,_0x492c13){const _0x1de462=_0x48e39a[a7_0x28cb('0x4')](_0x1a6425,{'id':{'type':sequelize_1['default'][a7_0x28cb('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0x28cb('0x6')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'device_id':{'type':_0x492c13[a7_0x28cb('0x5')],'references':{'model':_0x56a830,'key':'id'}},'lat':{'type':sequelize_1['default'][a7_0x28cb('0x7')]},'lon':{'type':sequelize_1[a7_0x28cb('0x6')][a7_0x28cb('0x7')]},'status':{'type':sequelize_1[a7_0x28cb('0x6')]['INTEGER']},'reported_at':{'type':_0x492c13[a7_0x28cb('0x8')],'allowNull':![]},'created_at':{'type':_0x492c13[a7_0x28cb('0x8')],'allowNull':![]},'updated_at':_0x492c13[a7_0x28cb('0x8')],'deleted_at':_0x492c13[a7_0x28cb('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x1de462;};const _0x1fafb0=_0x48e39a[a7_0x28cb('0x9')](_0x1a6425,_0x1de462);return _0x1fafb0;}}exports['default']=AlarmsModel;