var a119_0x16af=['__esModule','sequelize','define','default','INTEGER','UUID','STRING','DATE','import','__importDefault','defineProperty'];(function(_0x3b6f65,_0x39a65e){var _0x4f73cc=function(_0x41a1e3){while(--_0x41a1e3){_0x3b6f65['push'](_0x3b6f65['shift']());}};_0x4f73cc(++_0x39a65e);}(a119_0x16af,0x132));var a119_0x5b25=function(_0x450072,_0x26be2a){_0x450072=_0x450072-0x0;var _0x3a3255=a119_0x16af[_0x450072];return _0x3a3255;};'use strict';var __importDefault=this&&this[a119_0x5b25('0x0')]||function(_0x12436f){return _0x12436f&&_0x12436f['__esModule']?_0x12436f:{'default':_0x12436f};};Object[a119_0x5b25('0x1')](exports,a119_0x5b25('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a119_0x5b25('0x3')));class PlayerDevicesModel{constructor(_0x15f869,_0x410a1d,_0x1f6091,_0x3bddfa){const _0x23016d=function(_0x15f869,_0x4dad10){const _0x23016d=_0x15f869[a119_0x5b25('0x4')](_0x410a1d,{'id':{'type':sequelize_1[a119_0x5b25('0x5')][a119_0x5b25('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a119_0x5b25('0x5')][a119_0x5b25('0x7')],'defaultValue':sequelize_1[a119_0x5b25('0x5')]['UUIDV4']},'device_id':{'type':_0x4dad10[a119_0x5b25('0x6')],'references':{'model':_0x1f6091,'key':'id'}},'player_id':{'type':_0x4dad10[a119_0x5b25('0x6')],'references':{'model':_0x3bddfa,'key':'id'}},'playing_item':{'type':sequelize_1[a119_0x5b25('0x5')][a119_0x5b25('0x8')]},'playlist':{'type':sequelize_1[a119_0x5b25('0x5')][a119_0x5b25('0x8')]},'status':{'type':sequelize_1[a119_0x5b25('0x5')][a119_0x5b25('0x6')]},'reported_at':{'type':_0x4dad10['DATE'],'allowNull':![]},'created_at':{'type':_0x4dad10['DATE'],'allowNull':![]},'updated_at':_0x4dad10['DATE'],'deleted_at':_0x4dad10[a119_0x5b25('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x23016d;};const _0x4ecb28=_0x15f869[a119_0x5b25('0xa')](_0x410a1d,_0x23016d);return _0x4ecb28;}}exports['default']=PlayerDevicesModel;