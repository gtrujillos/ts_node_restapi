var a83_0x30c9=['define','default','UUID','INTEGER','STRING','DATE','import','__esModule','defineProperty','sequelize'];(function(_0x431c1a,_0x327f0c){var _0x18d8e4=function(_0x3f28d0){while(--_0x3f28d0){_0x431c1a['push'](_0x431c1a['shift']());}};_0x18d8e4(++_0x327f0c);}(a83_0x30c9,0x18d));var a83_0x1bfe=function(_0x11e12d,_0x45a000){_0x11e12d=_0x11e12d-0x0;var _0x5c5af2=a83_0x30c9[_0x11e12d];return _0x5c5af2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5c1bee){return _0x5c1bee&&_0x5c1bee[a83_0x1bfe('0x0')]?_0x5c1bee:{'default':_0x5c1bee};};Object[a83_0x1bfe('0x1')](exports,a83_0x1bfe('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a83_0x1bfe('0x2')));class VehiclesModel{constructor(_0x1fcd9a,_0x17beeb,_0x2b2293,_0x4fe979){const _0x378673=function(_0x1fcd9a){const _0x378673=_0x1fcd9a[a83_0x1bfe('0x3')](_0x17beeb,{'id':{'type':sequelize_1[a83_0x1bfe('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a83_0x1bfe('0x4')][a83_0x1bfe('0x5')],'defaultValue':sequelize_1[a83_0x1bfe('0x4')]['UUIDV4']},'brand_id':{'type':sequelize_1[a83_0x1bfe('0x4')]['INTEGER'],'references':{'model':_0x4fe979,'key':'id'}},'company_id':{'type':sequelize_1['default'][a83_0x1bfe('0x6')],'references':{'model':_0x2b2293,'key':'id'}},'plate':{'type':sequelize_1[a83_0x1bfe('0x4')]['STRING']},'model':{'type':sequelize_1['default'][a83_0x1bfe('0x7')]},'created_at':{'type':sequelize_1[a83_0x1bfe('0x4')][a83_0x1bfe('0x8')],'allowNull':![]},'updated_at':sequelize_1[a83_0x1bfe('0x4')]['DATE'],'deleted_at':sequelize_1[a83_0x1bfe('0x4')]['DATE']},{'paranoid':!![],'underscored':!![]});return _0x378673;};const _0x51718e=_0x1fcd9a[a83_0x1bfe('0x9')](_0x17beeb,_0x378673);return _0x51718e;}}exports[a83_0x1bfe('0x4')]=VehiclesModel;