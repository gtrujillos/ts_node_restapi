var a4_0x2ae6=['INTEGER','STRING','DATE','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','UUIDV4'];(function(_0x2c7b54,_0xe437db){var _0x2fc239=function(_0x15054a){while(--_0x15054a){_0x2c7b54['push'](_0x2c7b54['shift']());}};_0x2fc239(++_0xe437db);}(a4_0x2ae6,0x14d));var a4_0x4904=function(_0x3e0911,_0x4babf8){_0x3e0911=_0x3e0911-0x0;var _0xc506b1=a4_0x2ae6[_0x3e0911];return _0xc506b1;};'use strict';var __importDefault=this&&this[a4_0x4904('0x0')]||function(_0x30660){return _0x30660&&_0x30660[a4_0x4904('0x1')]?_0x30660:{'default':_0x30660};};Object[a4_0x4904('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a4_0x4904('0x3')));class DevicesModel{constructor(_0x5c41bb,_0x162e2d,_0x16dce0,_0x3e08e5){const _0x39e07d=function(_0x5c41bb,_0x21ade1){const _0x39e07d=_0x5c41bb[a4_0x4904('0x4')](_0x162e2d,{'id':{'type':sequelize_1[a4_0x4904('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a4_0x4904('0x5')][a4_0x4904('0x6')],'defaultValue':sequelize_1[a4_0x4904('0x5')][a4_0x4904('0x7')]},'device_type_id':{'type':_0x21ade1[a4_0x4904('0x8')],'references':{'model':_0x16dce0,'key':'id'}},'brand_id':{'type':_0x21ade1[a4_0x4904('0x8')],'references':{'model':_0x3e08e5,'key':'id'}},'name':{'type':sequelize_1[a4_0x4904('0x5')][a4_0x4904('0x9')]},'internal_ip':{'type':sequelize_1[a4_0x4904('0x5')][a4_0x4904('0x9')]},'external_ip':{'type':sequelize_1['default'][a4_0x4904('0x9')]},'created_at':{'type':_0x21ade1[a4_0x4904('0xa')],'allowNull':![]},'updated_at':_0x21ade1[a4_0x4904('0xa')],'deleted_at':_0x21ade1[a4_0x4904('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x39e07d;};const _0x430721=_0x5c41bb['import'](_0x162e2d,_0x39e07d);return _0x430721;}}exports[a4_0x4904('0x5')]=DevicesModel;