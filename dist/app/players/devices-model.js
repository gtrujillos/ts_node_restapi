var a122_0x4de7=['define','default','INTEGER','UUID','STRING','DATE','import','__importDefault','defineProperty','__esModule','sequelize'];(function(_0x513bf6,_0x4d3bcd){var _0x441e59=function(_0x47b33c){while(--_0x47b33c){_0x513bf6['push'](_0x513bf6['shift']());}};_0x441e59(++_0x4d3bcd);}(a122_0x4de7,0xcd));var a122_0x1857=function(_0x30e304,_0x4b2cdc){_0x30e304=_0x30e304-0x0;var _0x597826=a122_0x4de7[_0x30e304];return _0x597826;};'use strict';var __importDefault=this&&this[a122_0x1857('0x0')]||function(_0xdc5b3e){return _0xdc5b3e&&_0xdc5b3e['__esModule']?_0xdc5b3e:{'default':_0xdc5b3e};};Object[a122_0x1857('0x1')](exports,a122_0x1857('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a122_0x1857('0x3')));class DevicesModel{constructor(_0x5798c0,_0x576d5a,_0x300a3a,_0x94a3d6){const _0x28aedb=function(_0x5798c0,_0x4a0404){const _0x28aedb=_0x5798c0[a122_0x1857('0x4')](_0x576d5a,{'id':{'type':sequelize_1[a122_0x1857('0x5')][a122_0x1857('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a122_0x1857('0x5')][a122_0x1857('0x7')],'defaultValue':sequelize_1[a122_0x1857('0x5')]['UUIDV4']},'device_type_id':{'type':_0x4a0404[a122_0x1857('0x6')],'references':{'model':_0x300a3a,'key':'id'}},'brand_id':{'type':_0x4a0404[a122_0x1857('0x6')],'references':{'model':_0x94a3d6,'key':'id'}},'name':{'type':sequelize_1[a122_0x1857('0x5')][a122_0x1857('0x8')]},'internal_ip':{'type':sequelize_1[a122_0x1857('0x5')]['STRING']},'external_ip':{'type':sequelize_1['default'][a122_0x1857('0x8')]},'created_at':{'type':_0x4a0404['DATE'],'allowNull':![]},'updated_at':_0x4a0404[a122_0x1857('0x9')],'deleted_at':_0x4a0404[a122_0x1857('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x28aedb;};const _0x3f279d=_0x5798c0[a122_0x1857('0xa')](_0x576d5a,_0x28aedb);return _0x3f279d;}}exports['default']=DevicesModel;