var a27_0x5c27=['sequelize','define','INTEGER','default','UUIDV4','STRING','DATE','__importDefault','__esModule','defineProperty'];(function(_0x474c99,_0x1fa0e2){var _0xb6ead7=function(_0x13e6f7){while(--_0x13e6f7){_0x474c99['push'](_0x474c99['shift']());}};_0xb6ead7(++_0x1fa0e2);}(a27_0x5c27,0x15b));var a27_0x3444=function(_0x620e0f,_0x3ed6e8){_0x620e0f=_0x620e0f-0x0;var _0x396038=a27_0x5c27[_0x620e0f];return _0x396038;};'use strict';var __importDefault=this&&this[a27_0x3444('0x0')]||function(_0x5a4b81){return _0x5a4b81&&_0x5a4b81[a27_0x3444('0x1')]?_0x5a4b81:{'default':_0x5a4b81};};Object[a27_0x3444('0x2')](exports,a27_0x3444('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a27_0x3444('0x3')));class DevicesModel{constructor(_0x50b3d0,_0x5f5860,_0x58ec24,_0xcb3168){const _0xa3b4a1=function(_0x50b3d0,_0x359513){const _0xa3b4a1=_0x50b3d0[a27_0x3444('0x4')](_0x5f5860,{'id':{'type':sequelize_1['default'][a27_0x3444('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a27_0x3444('0x6')]['UUID'],'defaultValue':sequelize_1[a27_0x3444('0x6')][a27_0x3444('0x7')]},'device_type_id':{'type':_0x359513['INTEGER'],'references':{'model':_0x58ec24,'key':'id'}},'brand_id':{'type':_0x359513[a27_0x3444('0x5')],'references':{'model':_0xcb3168,'key':'id'}},'name':{'type':sequelize_1[a27_0x3444('0x6')][a27_0x3444('0x8')]},'internal_ip':{'type':sequelize_1[a27_0x3444('0x6')][a27_0x3444('0x8')]},'external_ip':{'type':sequelize_1['default'][a27_0x3444('0x8')]},'created_at':{'type':_0x359513[a27_0x3444('0x9')],'allowNull':![]},'updated_at':_0x359513[a27_0x3444('0x9')],'deleted_at':_0x359513[a27_0x3444('0x9')]},{'paranoid':!![],'underscored':!![]});return _0xa3b4a1;};const _0x52815e=_0x50b3d0['import'](_0x5f5860,_0xa3b4a1);return _0x52815e;}}exports['default']=DevicesModel;