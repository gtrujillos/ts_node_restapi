var a64_0x4409=['defineProperty','define','default','INTEGER','STRING','DATE','import','__importDefault','__esModule'];(function(_0x430ef9,_0x388138){var _0xa0fb5f=function(_0x3db78a){while(--_0x3db78a){_0x430ef9['push'](_0x430ef9['shift']());}};_0xa0fb5f(++_0x388138);}(a64_0x4409,0x1a5));var a64_0x2cf4=function(_0xb2dd4d,_0x10664c){_0xb2dd4d=_0xb2dd4d-0x0;var _0xc29769=a64_0x4409[_0xb2dd4d];return _0xc29769;};'use strict';var __importDefault=this&&this[a64_0x2cf4('0x0')]||function(_0x4e6e82){return _0x4e6e82&&_0x4e6e82[a64_0x2cf4('0x1')]?_0x4e6e82:{'default':_0x4e6e82};};Object[a64_0x2cf4('0x2')](exports,a64_0x2cf4('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x1ff219,_0x52f99a,_0x5c16c3,_0x3ffe0b){const _0x4b7d92=function(_0x1ff219,_0x1546f6){const _0x4b7d92=_0x1ff219[a64_0x2cf4('0x3')](_0x52f99a,{'id':{'type':sequelize_1[a64_0x2cf4('0x4')][a64_0x2cf4('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a64_0x2cf4('0x4')]['UUIDV4']},'device_id':{'type':_0x1546f6['INTEGER'],'references':{'model':_0x5c16c3,'key':'id'}},'player_id':{'type':_0x1546f6[a64_0x2cf4('0x5')],'references':{'model':_0x3ffe0b,'key':'id'}},'playing_item':{'type':sequelize_1[a64_0x2cf4('0x4')]['STRING']},'playlist':{'type':sequelize_1[a64_0x2cf4('0x4')][a64_0x2cf4('0x6')]},'status':{'type':sequelize_1[a64_0x2cf4('0x4')][a64_0x2cf4('0x5')]},'reported_at':{'type':_0x1546f6['DATE'],'allowNull':![]},'created_at':{'type':_0x1546f6['DATE'],'allowNull':![]},'updated_at':_0x1546f6[a64_0x2cf4('0x7')],'deleted_at':_0x1546f6[a64_0x2cf4('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x4b7d92;};const _0x14a307=_0x1ff219[a64_0x2cf4('0x8')](_0x52f99a,_0x4b7d92);return _0x14a307;}}exports['default']=PlayerDevicesModel;