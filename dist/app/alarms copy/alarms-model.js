var a7_0x4a3e=['UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','define','default','INTEGER'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a7_0x4a3e,0x68));var a7_0x1d8a=function(_0x4f58b7,_0x42b29c){_0x4f58b7=_0x4f58b7-0x0;var _0x2a2ca6=a7_0x4a3e[_0x4f58b7];return _0x2a2ca6;};'use strict';var __importDefault=this&&this[a7_0x1d8a('0x0')]||function(_0x3ccb77){return _0x3ccb77&&_0x3ccb77[a7_0x1d8a('0x1')]?_0x3ccb77:{'default':_0x3ccb77};};Object[a7_0x1d8a('0x2')](exports,a7_0x1d8a('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0xc0240b,_0x191c51,_0x299d36){const _0x55f201=function(_0xc0240b,_0x54686e){const _0x55f201=_0xc0240b[a7_0x1d8a('0x3')](_0x191c51,{'id':{'type':sequelize_1[a7_0x1d8a('0x4')][a7_0x1d8a('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a7_0x1d8a('0x4')][a7_0x1d8a('0x6')]},'device_id':{'type':_0x54686e[a7_0x1d8a('0x5')],'references':{'model':_0x299d36,'key':'id'}},'lat':{'type':sequelize_1[a7_0x1d8a('0x4')][a7_0x1d8a('0x7')]},'lon':{'type':sequelize_1['default']['DOUBLE']},'status':{'type':sequelize_1['default'][a7_0x1d8a('0x5')]},'reported_at':{'type':_0x54686e[a7_0x1d8a('0x8')],'allowNull':![]},'created_at':{'type':_0x54686e[a7_0x1d8a('0x8')],'allowNull':![]},'updated_at':_0x54686e[a7_0x1d8a('0x8')],'deleted_at':_0x54686e['DATE']},{'paranoid':!![],'underscored':!![]});return _0x55f201;};const _0x1e2577=_0xc0240b[a7_0x1d8a('0x9')](_0x191c51,_0x55f201);return _0x1e2577;}}exports[a7_0x1d8a('0x4')]=AlarmsModel;