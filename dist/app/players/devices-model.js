var a61_0x596c=['defineProperty','sequelize','default','UUID','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule'];(function(_0x4fb800,_0x3afdae){var _0x3fcfe5=function(_0x302f4){while(--_0x302f4){_0x4fb800['push'](_0x4fb800['shift']());}};_0x3fcfe5(++_0x3afdae);}(a61_0x596c,0x15e));var a61_0x3a2c=function(_0x2973e4,_0x49dd9f){_0x2973e4=_0x2973e4-0x0;var _0x98efbf=a61_0x596c[_0x2973e4];return _0x98efbf;};'use strict';var __importDefault=this&&this[a61_0x3a2c('0x0')]||function(_0x35e6a8){return _0x35e6a8&&_0x35e6a8[a61_0x3a2c('0x1')]?_0x35e6a8:{'default':_0x35e6a8};};Object[a61_0x3a2c('0x2')](exports,a61_0x3a2c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a61_0x3a2c('0x3')));class DevicesModel{constructor(_0xe2d62d,_0x1b8b94,_0x46ed79,_0x272388){const _0x601277=function(_0xe2d62d,_0x3dd3d1){const _0x601277=_0xe2d62d['define'](_0x1b8b94,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a61_0x3a2c('0x4')][a61_0x3a2c('0x5')],'defaultValue':sequelize_1['default'][a61_0x3a2c('0x6')]},'device_type_id':{'type':_0x3dd3d1[a61_0x3a2c('0x7')],'references':{'model':_0x46ed79,'key':'id'}},'brand_id':{'type':_0x3dd3d1[a61_0x3a2c('0x7')],'references':{'model':_0x272388,'key':'id'}},'name':{'type':sequelize_1['default'][a61_0x3a2c('0x8')]},'internal_ip':{'type':sequelize_1[a61_0x3a2c('0x4')][a61_0x3a2c('0x8')]},'external_ip':{'type':sequelize_1[a61_0x3a2c('0x4')][a61_0x3a2c('0x8')]},'created_at':{'type':_0x3dd3d1[a61_0x3a2c('0x9')],'allowNull':![]},'updated_at':_0x3dd3d1['DATE'],'deleted_at':_0x3dd3d1[a61_0x3a2c('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x601277;};const _0x1b0cf4=_0xe2d62d[a61_0x3a2c('0xa')](_0x1b8b94,_0x601277);return _0x1b0cf4;}}exports['default']=DevicesModel;