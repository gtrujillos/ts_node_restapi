var a55_0x448b=['DOUBLE','DATE','__esModule','defineProperty','sequelize','define','default','UUIDV4','INTEGER'];(function(_0x1e9eb0,_0x1d6577){var _0x5ba3c2=function(_0x54d230){while(--_0x54d230){_0x1e9eb0['push'](_0x1e9eb0['shift']());}};_0x5ba3c2(++_0x1d6577);}(a55_0x448b,0xda));var a55_0x3a34=function(_0x6ac7dc,_0x3d3c21){_0x6ac7dc=_0x6ac7dc-0x0;var _0x36be62=a55_0x448b[_0x6ac7dc];return _0x36be62;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xab723b){return _0xab723b&&_0xab723b[a55_0x3a34('0x0')]?_0xab723b:{'default':_0xab723b};};Object[a55_0x3a34('0x1')](exports,a55_0x3a34('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a55_0x3a34('0x2')));class AlarmsModel{constructor(_0x243518,_0x1d09b7,_0xef147d){const _0x28cc9a=function(_0x243518,_0x18bb1a){const _0x28cc9a=_0x243518[a55_0x3a34('0x3')](_0x1d09b7,{'id':{'type':sequelize_1[a55_0x3a34('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a55_0x3a34('0x4')]['UUID'],'defaultValue':sequelize_1[a55_0x3a34('0x4')][a55_0x3a34('0x5')]},'device_id':{'type':_0x18bb1a[a55_0x3a34('0x6')],'references':{'model':_0xef147d,'key':'id'}},'lat':{'type':sequelize_1['default'][a55_0x3a34('0x7')]},'lon':{'type':sequelize_1[a55_0x3a34('0x4')]['DOUBLE']},'status':{'type':sequelize_1[a55_0x3a34('0x4')][a55_0x3a34('0x6')]},'reported_at':{'type':_0x18bb1a[a55_0x3a34('0x8')],'allowNull':![]},'created_at':{'type':_0x18bb1a[a55_0x3a34('0x8')],'allowNull':![]},'updated_at':_0x18bb1a[a55_0x3a34('0x8')],'deleted_at':_0x18bb1a[a55_0x3a34('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x28cc9a;};const _0x19c192=_0x243518['import'](_0x1d09b7,_0x28cc9a);return _0x19c192;}}exports[a55_0x3a34('0x4')]=AlarmsModel;