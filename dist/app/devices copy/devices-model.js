var a27_0x5ee4=['UUIDV4','STRING','DATE','__importDefault','__esModule','sequelize','define','default','INTEGER','UUID'];(function(_0x4e4b10,_0x543b7e){var _0x1d4769=function(_0xf9005d){while(--_0xf9005d){_0x4e4b10['push'](_0x4e4b10['shift']());}};_0x1d4769(++_0x543b7e);}(a27_0x5ee4,0x111));var a27_0xbf5d=function(_0x48e387,_0x3f6288){_0x48e387=_0x48e387-0x0;var _0x4c7ea3=a27_0x5ee4[_0x48e387];return _0x4c7ea3;};'use strict';var __importDefault=this&&this[a27_0xbf5d('0x0')]||function(_0x2179d2){return _0x2179d2&&_0x2179d2[a27_0xbf5d('0x1')]?_0x2179d2:{'default':_0x2179d2};};Object['defineProperty'](exports,a27_0xbf5d('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a27_0xbf5d('0x2')));class DevicesModel{constructor(_0x3aa810,_0x5262d1,_0xb7b2de,_0x3ac574){const _0x43a2b4=function(_0x3aa810,_0x2fd410){const _0x43a2b4=_0x3aa810[a27_0xbf5d('0x3')](_0x5262d1,{'id':{'type':sequelize_1[a27_0xbf5d('0x4')][a27_0xbf5d('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a27_0xbf5d('0x4')][a27_0xbf5d('0x6')],'defaultValue':sequelize_1[a27_0xbf5d('0x4')][a27_0xbf5d('0x7')]},'device_type_id':{'type':_0x2fd410['INTEGER'],'references':{'model':_0xb7b2de,'key':'id'}},'brand_id':{'type':_0x2fd410[a27_0xbf5d('0x5')],'references':{'model':_0x3ac574,'key':'id'}},'name':{'type':sequelize_1['default'][a27_0xbf5d('0x8')]},'internal_ip':{'type':sequelize_1['default'][a27_0xbf5d('0x8')]},'external_ip':{'type':sequelize_1[a27_0xbf5d('0x4')][a27_0xbf5d('0x8')]},'created_at':{'type':_0x2fd410[a27_0xbf5d('0x9')],'allowNull':![]},'updated_at':_0x2fd410[a27_0xbf5d('0x9')],'deleted_at':_0x2fd410[a27_0xbf5d('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x43a2b4;};const _0x1c4207=_0x3aa810['import'](_0x5262d1,_0x43a2b4);return _0x1c4207;}}exports[a27_0xbf5d('0x4')]=DevicesModel;