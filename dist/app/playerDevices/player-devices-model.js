var a67_0x29f7=['UUID','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule','defineProperty','define','default'];(function(_0x4c80a1,_0x8728e1){var _0x13cb73=function(_0x226019){while(--_0x226019){_0x4c80a1['push'](_0x4c80a1['shift']());}};_0x13cb73(++_0x8728e1);}(a67_0x29f7,0xed));var a67_0x5c55=function(_0x570b5b,_0x42ee6b){_0x570b5b=_0x570b5b-0x0;var _0x5e9cc0=a67_0x29f7[_0x570b5b];return _0x5e9cc0;};'use strict';var __importDefault=this&&this[a67_0x5c55('0x0')]||function(_0x5debd1){return _0x5debd1&&_0x5debd1[a67_0x5c55('0x1')]?_0x5debd1:{'default':_0x5debd1};};Object[a67_0x5c55('0x2')](exports,a67_0x5c55('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x242d79,_0x3791c3,_0x356701,_0x328094){const _0x524fc4=function(_0x242d79,_0x3033b1){const _0x524fc4=_0x242d79[a67_0x5c55('0x3')](_0x3791c3,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a67_0x5c55('0x4')][a67_0x5c55('0x5')],'defaultValue':sequelize_1['default'][a67_0x5c55('0x6')]},'device_id':{'type':_0x3033b1[a67_0x5c55('0x7')],'references':{'model':_0x356701,'key':'id'}},'player_id':{'type':_0x3033b1['INTEGER'],'references':{'model':_0x328094,'key':'id'}},'playing_item':{'type':sequelize_1['default'][a67_0x5c55('0x8')]},'playlist':{'type':sequelize_1[a67_0x5c55('0x4')][a67_0x5c55('0x8')]},'status':{'type':sequelize_1[a67_0x5c55('0x4')][a67_0x5c55('0x7')]},'reported_at':{'type':_0x3033b1['DATE'],'allowNull':![]},'created_at':{'type':_0x3033b1['DATE'],'allowNull':![]},'updated_at':_0x3033b1['DATE'],'deleted_at':_0x3033b1[a67_0x5c55('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x524fc4;};const _0x15bbaf=_0x242d79[a67_0x5c55('0xa')](_0x3791c3,_0x524fc4);return _0x15bbaf;}}exports['default']=PlayerDevicesModel;