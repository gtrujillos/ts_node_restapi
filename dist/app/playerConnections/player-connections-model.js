var a52_0x5571=['DATE','import','defineProperty','__esModule','sequelize','define','INTEGER','default','UUIDV4','DOUBLE'];(function(_0xa1bc01,_0x40aba3){var _0x5a19dc=function(_0x4602ca){while(--_0x4602ca){_0xa1bc01['push'](_0xa1bc01['shift']());}};_0x5a19dc(++_0x40aba3);}(a52_0x5571,0x16a));var a52_0x5b7f=function(_0xb8ed76,_0x8de7e2){_0xb8ed76=_0xb8ed76-0x0;var _0x4aa8c0=a52_0x5571[_0xb8ed76];return _0x4aa8c0;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x57415a){return _0x57415a&&_0x57415a['__esModule']?_0x57415a:{'default':_0x57415a};};Object[a52_0x5b7f('0x0')](exports,a52_0x5b7f('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a52_0x5b7f('0x2')));class AlarmsModel{constructor(_0x364a6f,_0x24258f,_0x552a68){const _0x301d8f=function(_0x364a6f,_0x4670a4){const _0x301d8f=_0x364a6f[a52_0x5b7f('0x3')](_0x24258f,{'id':{'type':sequelize_1['default'][a52_0x5b7f('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0x5b7f('0x5')]['UUID'],'defaultValue':sequelize_1[a52_0x5b7f('0x5')][a52_0x5b7f('0x6')]},'device_id':{'type':_0x4670a4[a52_0x5b7f('0x4')],'references':{'model':_0x552a68,'key':'id'}},'lat':{'type':sequelize_1[a52_0x5b7f('0x5')]['DOUBLE']},'lon':{'type':sequelize_1[a52_0x5b7f('0x5')][a52_0x5b7f('0x7')]},'status':{'type':sequelize_1[a52_0x5b7f('0x5')]['INTEGER']},'reported_at':{'type':_0x4670a4[a52_0x5b7f('0x8')],'allowNull':![]},'created_at':{'type':_0x4670a4['DATE'],'allowNull':![]},'updated_at':_0x4670a4[a52_0x5b7f('0x8')],'deleted_at':_0x4670a4['DATE']},{'paranoid':!![],'underscored':!![]});return _0x301d8f;};const _0x30b1eb=_0x364a6f[a52_0x5b7f('0x9')](_0x24258f,_0x301d8f);return _0x30b1eb;}}exports['default']=AlarmsModel;