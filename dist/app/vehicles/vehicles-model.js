var a83_0x3a0f=['INTEGER','STRING','DATE','__esModule','defineProperty','sequelize','define','default','UUIDV4'];(function(_0x3f378a,_0x3be05c){var _0x343ed7=function(_0x47d0bf){while(--_0x47d0bf){_0x3f378a['push'](_0x3f378a['shift']());}};_0x343ed7(++_0x3be05c);}(a83_0x3a0f,0xc0));var a83_0x196f=function(_0x11c8e8,_0x1293b3){_0x11c8e8=_0x11c8e8-0x0;var _0x25d870=a83_0x3a0f[_0x11c8e8];return _0x25d870;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x526d12){return _0x526d12&&_0x526d12[a83_0x196f('0x0')]?_0x526d12:{'default':_0x526d12};};Object[a83_0x196f('0x1')](exports,a83_0x196f('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a83_0x196f('0x2')));class VehiclesModel{constructor(_0x2b25f9,_0x144f71,_0x26348a,_0x48f2cb){const _0x20224e=function(_0x2b25f9){const _0x20224e=_0x2b25f9[a83_0x196f('0x3')](_0x144f71,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x5')]},'brand_id':{'type':sequelize_1[a83_0x196f('0x4')]['INTEGER'],'references':{'model':_0x48f2cb,'key':'id'}},'company_id':{'type':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x6')],'references':{'model':_0x26348a,'key':'id'}},'plate':{'type':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x7')]},'model':{'type':sequelize_1['default'][a83_0x196f('0x7')]},'created_at':{'type':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x8')],'allowNull':![]},'updated_at':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x8')],'deleted_at':sequelize_1[a83_0x196f('0x4')][a83_0x196f('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x20224e;};const _0x260351=_0x2b25f9['import'](_0x144f71,_0x20224e);return _0x260351;}}exports[a83_0x196f('0x4')]=VehiclesModel;