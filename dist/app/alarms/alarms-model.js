var a1_0x52f3=['INTEGER','UUID','DOUBLE','DATE','__importDefault','__esModule','defineProperty','sequelize','default'];(function(_0x45b6c4,_0x4590c6){var _0x9aa5b6=function(_0x56e4f9){while(--_0x56e4f9){_0x45b6c4['push'](_0x45b6c4['shift']());}};_0x9aa5b6(++_0x4590c6);}(a1_0x52f3,0xb8));var a1_0x24c8=function(_0x4bd822,_0x2bd6f7){_0x4bd822=_0x4bd822-0x0;var _0xb4bdb3=a1_0x52f3[_0x4bd822];return _0xb4bdb3;};'use strict';var __importDefault=this&&this[a1_0x24c8('0x0')]||function(_0x32b6b1){return _0x32b6b1&&_0x32b6b1[a1_0x24c8('0x1')]?_0x32b6b1:{'default':_0x32b6b1};};Object[a1_0x24c8('0x2')](exports,a1_0x24c8('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x24c8('0x3')));class AlarmsModel{constructor(_0x1b56bf,_0x5856e4,_0x3bc648){const _0x4ba6a8=function(_0x1b56bf,_0x1c0a1f){const _0x4ba6a8=_0x1b56bf['define'](_0x5856e4,{'id':{'type':sequelize_1[a1_0x24c8('0x4')][a1_0x24c8('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a1_0x24c8('0x6')],'defaultValue':sequelize_1[a1_0x24c8('0x4')]['UUIDV4']},'device_id':{'type':_0x1c0a1f[a1_0x24c8('0x5')],'references':{'model':_0x3bc648,'key':'id'}},'lat':{'type':sequelize_1[a1_0x24c8('0x4')][a1_0x24c8('0x7')]},'lon':{'type':sequelize_1[a1_0x24c8('0x4')][a1_0x24c8('0x7')]},'status':{'type':sequelize_1[a1_0x24c8('0x4')][a1_0x24c8('0x5')]},'reported_at':{'type':_0x1c0a1f[a1_0x24c8('0x8')],'allowNull':![]},'created_at':{'type':_0x1c0a1f[a1_0x24c8('0x8')],'allowNull':![]},'updated_at':_0x1c0a1f[a1_0x24c8('0x8')],'deleted_at':_0x1c0a1f[a1_0x24c8('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x4ba6a8;};const _0x46987b=_0x1b56bf['import'](_0x5856e4,_0x4ba6a8);return _0x46987b;}}exports['default']=AlarmsModel;