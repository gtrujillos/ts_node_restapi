var a52_0x1b09=['INTEGER','UUID','default','DOUBLE','DATE','__importDefault','defineProperty','__esModule','define'];(function(_0x427f2b,_0x1b6f62){var _0x12fb70=function(_0x4fc3ac){while(--_0x4fc3ac){_0x427f2b['push'](_0x427f2b['shift']());}};_0x12fb70(++_0x1b6f62);}(a52_0x1b09,0xb9));var a52_0x1e63=function(_0x461e3c,_0x2de40a){_0x461e3c=_0x461e3c-0x0;var _0x1ad522=a52_0x1b09[_0x461e3c];return _0x1ad522;};'use strict';var __importDefault=this&&this[a52_0x1e63('0x0')]||function(_0x5aa0b2){return _0x5aa0b2&&_0x5aa0b2['__esModule']?_0x5aa0b2:{'default':_0x5aa0b2};};Object[a52_0x1e63('0x1')](exports,a52_0x1e63('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x3f7a48,_0x3deed9,_0x1ec8a4){const _0x36db2e=function(_0x3f7a48,_0x29964c){const _0x36db2e=_0x3f7a48[a52_0x1e63('0x3')](_0x3deed9,{'id':{'type':sequelize_1['default'][a52_0x1e63('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a52_0x1e63('0x5')],'defaultValue':sequelize_1[a52_0x1e63('0x6')]['UUIDV4']},'device_id':{'type':_0x29964c[a52_0x1e63('0x4')],'references':{'model':_0x1ec8a4,'key':'id'}},'lat':{'type':sequelize_1[a52_0x1e63('0x6')][a52_0x1e63('0x7')]},'lon':{'type':sequelize_1['default'][a52_0x1e63('0x7')]},'status':{'type':sequelize_1['default'][a52_0x1e63('0x4')]},'reported_at':{'type':_0x29964c[a52_0x1e63('0x8')],'allowNull':![]},'created_at':{'type':_0x29964c[a52_0x1e63('0x8')],'allowNull':![]},'updated_at':_0x29964c[a52_0x1e63('0x8')],'deleted_at':_0x29964c[a52_0x1e63('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x36db2e;};const _0x50e836=_0x3f7a48['import'](_0x3deed9,_0x36db2e);return _0x50e836;}}exports[a52_0x1e63('0x6')]=AlarmsModel;