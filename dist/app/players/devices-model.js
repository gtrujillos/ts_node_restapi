var a61_0x41b5=['STRING','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define','default','INTEGER'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a61_0x41b5,0x14d));var a61_0xc944=function(_0x4915ef,_0x1719fa){_0x4915ef=_0x4915ef-0x0;var _0x21dac2=a61_0x41b5[_0x4915ef];return _0x21dac2;};'use strict';var __importDefault=this&&this[a61_0xc944('0x0')]||function(_0x3b4741){return _0x3b4741&&_0x3b4741['__esModule']?_0x3b4741:{'default':_0x3b4741};};Object[a61_0xc944('0x1')](exports,a61_0xc944('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a61_0xc944('0x3')));class DevicesModel{constructor(_0x4b6cd3,_0x2b2cb0,_0x3805ba,_0x64d02b){const _0x640364=function(_0x4b6cd3,_0x40be7f){const _0x640364=_0x4b6cd3[a61_0xc944('0x4')](_0x2b2cb0,{'id':{'type':sequelize_1[a61_0xc944('0x5')][a61_0xc944('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a61_0xc944('0x5')]['UUID'],'defaultValue':sequelize_1[a61_0xc944('0x5')]['UUIDV4']},'device_type_id':{'type':_0x40be7f[a61_0xc944('0x6')],'references':{'model':_0x3805ba,'key':'id'}},'brand_id':{'type':_0x40be7f['INTEGER'],'references':{'model':_0x64d02b,'key':'id'}},'name':{'type':sequelize_1[a61_0xc944('0x5')][a61_0xc944('0x7')]},'internal_ip':{'type':sequelize_1[a61_0xc944('0x5')][a61_0xc944('0x7')]},'external_ip':{'type':sequelize_1[a61_0xc944('0x5')]['STRING']},'created_at':{'type':_0x40be7f[a61_0xc944('0x8')],'allowNull':![]},'updated_at':_0x40be7f[a61_0xc944('0x8')],'deleted_at':_0x40be7f[a61_0xc944('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x640364;};const _0x4c6119=_0x4b6cd3[a61_0xc944('0x9')](_0x2b2cb0,_0x640364);return _0x4c6119;}}exports[a61_0xc944('0x5')]=DevicesModel;