var a119_0x2ef3=['DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','UUIDV4','STRING'];(function(_0x516d65,_0x59cc06){var _0x5a731e=function(_0x3d9273){while(--_0x3d9273){_0x516d65['push'](_0x516d65['shift']());}};_0x5a731e(++_0x59cc06);}(a119_0x2ef3,0x1be));var a119_0xb753=function(_0x4655a0,_0x65a72f){_0x4655a0=_0x4655a0-0x0;var _0xd3dbb2=a119_0x2ef3[_0x4655a0];return _0xd3dbb2;};'use strict';var __importDefault=this&&this[a119_0xb753('0x0')]||function(_0x2bd481){return _0x2bd481&&_0x2bd481[a119_0xb753('0x1')]?_0x2bd481:{'default':_0x2bd481};};Object[a119_0xb753('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a119_0xb753('0x3')));class PlayerDevicesModel{constructor(_0x163d7f,_0x5cd19b,_0x5d7e4a,_0x22e677){const _0x11a781=function(_0x163d7f,_0x15a82b){const _0x11a781=_0x163d7f[a119_0xb753('0x4')](_0x5cd19b,{'id':{'type':sequelize_1[a119_0xb753('0x5')][a119_0xb753('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a119_0xb753('0x5')][a119_0xb753('0x7')],'defaultValue':sequelize_1[a119_0xb753('0x5')][a119_0xb753('0x8')]},'device_id':{'type':_0x15a82b[a119_0xb753('0x6')],'references':{'model':_0x5d7e4a,'key':'id'}},'player_id':{'type':_0x15a82b[a119_0xb753('0x6')],'references':{'model':_0x22e677,'key':'id'}},'playing_item':{'type':sequelize_1['default']['STRING']},'playlist':{'type':sequelize_1[a119_0xb753('0x5')][a119_0xb753('0x9')]},'status':{'type':sequelize_1[a119_0xb753('0x5')][a119_0xb753('0x6')]},'reported_at':{'type':_0x15a82b[a119_0xb753('0xa')],'allowNull':![]},'created_at':{'type':_0x15a82b[a119_0xb753('0xa')],'allowNull':![]},'updated_at':_0x15a82b[a119_0xb753('0xa')],'deleted_at':_0x15a82b[a119_0xb753('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x11a781;};const _0x499f9b=_0x163d7f[a119_0xb753('0xb')](_0x5cd19b,_0x11a781);return _0x499f9b;}}exports['default']=PlayerDevicesModel;