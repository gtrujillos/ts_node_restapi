var a58_0x298e=['DATE','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUIDV4','STRING'];(function(_0x4f3c22,_0x3c2879){var _0x454080=function(_0x15f7fd){while(--_0x15f7fd){_0x4f3c22['push'](_0x4f3c22['shift']());}};_0x454080(++_0x3c2879);}(a58_0x298e,0xc9));var a58_0x5f98=function(_0x21f362,_0x3ac0cb){_0x21f362=_0x21f362-0x0;var _0x398544=a58_0x298e[_0x21f362];return _0x398544;};'use strict';var __importDefault=this&&this[a58_0x5f98('0x0')]||function(_0x3c0b6b){return _0x3c0b6b&&_0x3c0b6b[a58_0x5f98('0x1')]?_0x3c0b6b:{'default':_0x3c0b6b};};Object[a58_0x5f98('0x2')](exports,a58_0x5f98('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a58_0x5f98('0x3')));class PlayerDevicesModel{constructor(_0x4ddd3a,_0x15adea,_0x1a420c,_0x4a573c){const _0x44a059=function(_0x4ddd3a,_0x50a059){const _0x44a059=_0x4ddd3a[a58_0x5f98('0x4')](_0x15adea,{'id':{'type':sequelize_1[a58_0x5f98('0x5')][a58_0x5f98('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a58_0x5f98('0x5')]['UUID'],'defaultValue':sequelize_1['default'][a58_0x5f98('0x7')]},'device_id':{'type':_0x50a059['INTEGER'],'references':{'model':_0x1a420c,'key':'id'}},'player_id':{'type':_0x50a059[a58_0x5f98('0x6')],'references':{'model':_0x4a573c,'key':'id'}},'playing_item':{'type':sequelize_1[a58_0x5f98('0x5')][a58_0x5f98('0x8')]},'playlist':{'type':sequelize_1[a58_0x5f98('0x5')][a58_0x5f98('0x8')]},'status':{'type':sequelize_1[a58_0x5f98('0x5')][a58_0x5f98('0x6')]},'reported_at':{'type':_0x50a059['DATE'],'allowNull':![]},'created_at':{'type':_0x50a059[a58_0x5f98('0x9')],'allowNull':![]},'updated_at':_0x50a059[a58_0x5f98('0x9')],'deleted_at':_0x50a059[a58_0x5f98('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x44a059;};const _0x2d13a8=_0x4ddd3a['import'](_0x15adea,_0x44a059);return _0x2d13a8;}}exports['default']=PlayerDevicesModel;