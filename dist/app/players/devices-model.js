var a61_0x4b2e=['UUID','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default'];(function(_0x21bc3b,_0x4155b6){var _0x414bb9=function(_0x37120d){while(--_0x37120d){_0x21bc3b['push'](_0x21bc3b['shift']());}};_0x414bb9(++_0x4155b6);}(a61_0x4b2e,0x16e));var a61_0x5d07=function(_0x1b6a49,_0x1fbfef){_0x1b6a49=_0x1b6a49-0x0;var _0x401e9d=a61_0x4b2e[_0x1b6a49];return _0x401e9d;};'use strict';var __importDefault=this&&this[a61_0x5d07('0x0')]||function(_0xb21b7d){return _0xb21b7d&&_0xb21b7d[a61_0x5d07('0x1')]?_0xb21b7d:{'default':_0xb21b7d};};Object[a61_0x5d07('0x2')](exports,a61_0x5d07('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a61_0x5d07('0x3')));class DevicesModel{constructor(_0x69a617,_0x1e5988,_0x5ec6b5,_0x51839e){const _0x3dc24e=function(_0x69a617,_0x4b90ea){const _0x3dc24e=_0x69a617[a61_0x5d07('0x4')](_0x1e5988,{'id':{'type':sequelize_1[a61_0x5d07('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a61_0x5d07('0x6')],'defaultValue':sequelize_1[a61_0x5d07('0x5')][a61_0x5d07('0x7')]},'device_type_id':{'type':_0x4b90ea[a61_0x5d07('0x8')],'references':{'model':_0x5ec6b5,'key':'id'}},'brand_id':{'type':_0x4b90ea['INTEGER'],'references':{'model':_0x51839e,'key':'id'}},'name':{'type':sequelize_1[a61_0x5d07('0x5')]['STRING']},'internal_ip':{'type':sequelize_1['default'][a61_0x5d07('0x9')]},'external_ip':{'type':sequelize_1['default']['STRING']},'created_at':{'type':_0x4b90ea['DATE'],'allowNull':![]},'updated_at':_0x4b90ea[a61_0x5d07('0xa')],'deleted_at':_0x4b90ea['DATE']},{'paranoid':!![],'underscored':!![]});return _0x3dc24e;};const _0x85ebb=_0x69a617[a61_0x5d07('0xb')](_0x1e5988,_0x3dc24e);return _0x85ebb;}}exports['default']=DevicesModel;