var a4_0x3366=['DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','INTEGER','STRING'];(function(_0x17b330,_0x549479){var _0x5c0ac1=function(_0x16bb92){while(--_0x16bb92){_0x17b330['push'](_0x17b330['shift']());}};_0x5c0ac1(++_0x549479);}(a4_0x3366,0xff));var a4_0x23ba=function(_0x79d585,_0x3329a1){_0x79d585=_0x79d585-0x0;var _0x298486=a4_0x3366[_0x79d585];return _0x298486;};'use strict';var __importDefault=this&&this[a4_0x23ba('0x0')]||function(_0x41187f){return _0x41187f&&_0x41187f[a4_0x23ba('0x1')]?_0x41187f:{'default':_0x41187f};};Object[a4_0x23ba('0x2')](exports,a4_0x23ba('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a4_0x23ba('0x3')));class DevicesModel{constructor(_0x525c49,_0x3c581c,_0x1324c9,_0x513cd2){const _0x37b835=function(_0x525c49,_0x4c16e7){const _0x37b835=_0x525c49[a4_0x23ba('0x4')](_0x3c581c,{'id':{'type':sequelize_1[a4_0x23ba('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a4_0x23ba('0x6')],'defaultValue':sequelize_1[a4_0x23ba('0x5')]['UUIDV4']},'device_type_id':{'type':_0x4c16e7[a4_0x23ba('0x7')],'references':{'model':_0x1324c9,'key':'id'}},'brand_id':{'type':_0x4c16e7['INTEGER'],'references':{'model':_0x513cd2,'key':'id'}},'name':{'type':sequelize_1[a4_0x23ba('0x5')][a4_0x23ba('0x8')]},'internal_ip':{'type':sequelize_1['default'][a4_0x23ba('0x8')]},'external_ip':{'type':sequelize_1[a4_0x23ba('0x5')][a4_0x23ba('0x8')]},'created_at':{'type':_0x4c16e7[a4_0x23ba('0x9')],'allowNull':![]},'updated_at':_0x4c16e7[a4_0x23ba('0x9')],'deleted_at':_0x4c16e7[a4_0x23ba('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x37b835;};const _0x181d50=_0x525c49[a4_0x23ba('0xa')](_0x3c581c,_0x37b835);return _0x181d50;}}exports[a4_0x23ba('0x5')]=DevicesModel;