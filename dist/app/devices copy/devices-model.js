var a30_0x4601=['default','INTEGER','UUIDV4','STRING','DATE','import','__importDefault','__esModule','define'];(function(_0x38a99b,_0x3d1fe5){var _0x11e5d2=function(_0x2b25b5){while(--_0x2b25b5){_0x38a99b['push'](_0x38a99b['shift']());}};_0x11e5d2(++_0x3d1fe5);}(a30_0x4601,0xe7));var a30_0xaace=function(_0x985512,_0x5acb46){_0x985512=_0x985512-0x0;var _0x2e8f94=a30_0x4601[_0x985512];return _0x2e8f94;};'use strict';var __importDefault=this&&this[a30_0xaace('0x0')]||function(_0x30d575){return _0x30d575&&_0x30d575[a30_0xaace('0x1')]?_0x30d575:{'default':_0x30d575};};Object['defineProperty'](exports,a30_0xaace('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x4d36a1,_0x3445e9,_0x4e30a9,_0x8f56e3){const _0x42244e=function(_0x4d36a1,_0x595067){const _0x42244e=_0x4d36a1[a30_0xaace('0x2')](_0x3445e9,{'id':{'type':sequelize_1[a30_0xaace('0x3')][a30_0xaace('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a30_0xaace('0x3')]['UUID'],'defaultValue':sequelize_1[a30_0xaace('0x3')][a30_0xaace('0x5')]},'device_type_id':{'type':_0x595067[a30_0xaace('0x4')],'references':{'model':_0x4e30a9,'key':'id'}},'brand_id':{'type':_0x595067[a30_0xaace('0x4')],'references':{'model':_0x8f56e3,'key':'id'}},'name':{'type':sequelize_1[a30_0xaace('0x3')][a30_0xaace('0x6')]},'internal_ip':{'type':sequelize_1['default'][a30_0xaace('0x6')]},'external_ip':{'type':sequelize_1[a30_0xaace('0x3')][a30_0xaace('0x6')]},'created_at':{'type':_0x595067[a30_0xaace('0x7')],'allowNull':![]},'updated_at':_0x595067['DATE'],'deleted_at':_0x595067[a30_0xaace('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x42244e;};const _0x1223d8=_0x4d36a1[a30_0xaace('0x8')](_0x3445e9,_0x42244e);return _0x1223d8;}}exports['default']=DevicesModel;