var a58_0x5c50=['sequelize','define','default','INTEGER','UUID','UUIDV4','DATE','import','__importDefault','defineProperty','__esModule'];(function(_0x574848,_0x43b95a){var _0x566b30=function(_0x1bca26){while(--_0x1bca26){_0x574848['push'](_0x574848['shift']());}};_0x566b30(++_0x43b95a);}(a58_0x5c50,0x76));var a58_0x4023=function(_0x586afc,_0x4b3e59){_0x586afc=_0x586afc-0x0;var _0x597b20=a58_0x5c50[_0x586afc];return _0x597b20;};'use strict';var __importDefault=this&&this[a58_0x4023('0x0')]||function(_0x164ca9){return _0x164ca9&&_0x164ca9['__esModule']?_0x164ca9:{'default':_0x164ca9};};Object[a58_0x4023('0x1')](exports,a58_0x4023('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a58_0x4023('0x3')));class PlayerDevicesModel{constructor(_0x3feedb,_0xdb3eed,_0x2cdd25,_0x3f4e4d){const _0x2f91cd=function(_0x3feedb,_0x5c67ac){const _0x2f91cd=_0x3feedb[a58_0x4023('0x4')](_0xdb3eed,{'id':{'type':sequelize_1[a58_0x4023('0x5')][a58_0x4023('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a58_0x4023('0x5')][a58_0x4023('0x7')],'defaultValue':sequelize_1['default'][a58_0x4023('0x8')]},'device_id':{'type':_0x5c67ac['INTEGER'],'references':{'model':_0x2cdd25,'key':'id'}},'player_id':{'type':_0x5c67ac[a58_0x4023('0x6')],'references':{'model':_0x3f4e4d,'key':'id'}},'status':{'type':sequelize_1['default'][a58_0x4023('0x6')]},'created_at':{'type':_0x5c67ac['DATE'],'allowNull':![]},'updated_at':_0x5c67ac[a58_0x4023('0x9')],'deleted_at':_0x5c67ac[a58_0x4023('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x2f91cd;};const _0x4039e4=_0x3feedb[a58_0x4023('0xa')](_0xdb3eed,_0x2f91cd);return _0x4039e4;}}exports['default']=PlayerDevicesModel;