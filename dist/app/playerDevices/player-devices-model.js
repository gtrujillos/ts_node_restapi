var a58_0x3575=['default','UUID','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule','defineProperty','define'];(function(_0x2a33fa,_0x2937e1){var _0x568f92=function(_0x395ce4){while(--_0x395ce4){_0x2a33fa['push'](_0x2a33fa['shift']());}};_0x568f92(++_0x2937e1);}(a58_0x3575,0x80));var a58_0x85de=function(_0x36e366,_0x2bcd62){_0x36e366=_0x36e366-0x0;var _0x2b3cc6=a58_0x3575[_0x36e366];return _0x2b3cc6;};'use strict';var __importDefault=this&&this[a58_0x85de('0x0')]||function(_0x438abd){return _0x438abd&&_0x438abd[a58_0x85de('0x1')]?_0x438abd:{'default':_0x438abd};};Object[a58_0x85de('0x2')](exports,a58_0x85de('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x52ab72,_0x13b836,_0x4755b2,_0x40e8b4){const _0x3b18ce=function(_0x52ab72,_0x5eea94){const _0x3b18ce=_0x52ab72[a58_0x85de('0x3')](_0x13b836,{'id':{'type':sequelize_1[a58_0x85de('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a58_0x85de('0x4')][a58_0x85de('0x5')],'defaultValue':sequelize_1['default'][a58_0x85de('0x6')]},'device_id':{'type':_0x5eea94['INTEGER'],'references':{'model':_0x4755b2,'key':'id'}},'player_id':{'type':_0x5eea94[a58_0x85de('0x7')],'references':{'model':_0x40e8b4,'key':'id'}},'playing_item':{'type':sequelize_1[a58_0x85de('0x4')][a58_0x85de('0x8')]},'playlist':{'type':sequelize_1[a58_0x85de('0x4')][a58_0x85de('0x8')]},'status':{'type':sequelize_1['default']['INTEGER']},'reported_at':{'type':_0x5eea94['DATE'],'allowNull':![]},'created_at':{'type':_0x5eea94[a58_0x85de('0x9')],'allowNull':![]},'updated_at':_0x5eea94[a58_0x85de('0x9')],'deleted_at':_0x5eea94[a58_0x85de('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x3b18ce;};const _0x5ca249=_0x52ab72[a58_0x85de('0xa')](_0x13b836,_0x3b18ce);return _0x5ca249;}}exports[a58_0x85de('0x4')]=PlayerDevicesModel;