var a4_0x13c1=['import','__importDefault','defineProperty','__esModule','sequelize','define','default','INTEGER','STRING','DATE'];(function(_0xf30b97,_0x283e6f){var _0x36226d=function(_0x3242d8){while(--_0x3242d8){_0xf30b97['push'](_0xf30b97['shift']());}};_0x36226d(++_0x283e6f);}(a4_0x13c1,0x19b));var a4_0x84f6=function(_0x54fa4c,_0x7a6713){_0x54fa4c=_0x54fa4c-0x0;var _0x534e12=a4_0x13c1[_0x54fa4c];return _0x534e12;};'use strict';var __importDefault=this&&this[a4_0x84f6('0x0')]||function(_0x40bd93){return _0x40bd93&&_0x40bd93['__esModule']?_0x40bd93:{'default':_0x40bd93};};Object[a4_0x84f6('0x1')](exports,a4_0x84f6('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a4_0x84f6('0x3')));class DevicesModel{constructor(_0x5612dd,_0x58196e,_0x432aee,_0x529ed5){const _0x5814cc=function(_0x5612dd,_0x5e9f02){const _0x5814cc=_0x5612dd[a4_0x84f6('0x4')](_0x58196e,{'id':{'type':sequelize_1[a4_0x84f6('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a4_0x84f6('0x5')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'device_type_id':{'type':_0x5e9f02[a4_0x84f6('0x6')],'references':{'model':_0x432aee,'key':'id'}},'brand_id':{'type':_0x5e9f02[a4_0x84f6('0x6')],'references':{'model':_0x529ed5,'key':'id'}},'name':{'type':sequelize_1[a4_0x84f6('0x5')][a4_0x84f6('0x7')]},'internal_ip':{'type':sequelize_1['default'][a4_0x84f6('0x7')]},'external_ip':{'type':sequelize_1[a4_0x84f6('0x5')][a4_0x84f6('0x7')]},'created_at':{'type':_0x5e9f02[a4_0x84f6('0x8')],'allowNull':![]},'updated_at':_0x5e9f02[a4_0x84f6('0x8')],'deleted_at':_0x5e9f02[a4_0x84f6('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x5814cc;};const _0x55ca36=_0x5612dd[a4_0x84f6('0x9')](_0x58196e,_0x5814cc);return _0x55ca36;}}exports[a4_0x84f6('0x5')]=DevicesModel;