var a86_0x4d74=['UUID','DOUBLE','DATE','import','__esModule','defineProperty','sequelize','INTEGER','default'];(function(_0x59fe7f,_0x5b97f8){var _0x5e966c=function(_0x135a22){while(--_0x135a22){_0x59fe7f['push'](_0x59fe7f['shift']());}};_0x5e966c(++_0x5b97f8);}(a86_0x4d74,0x100));var a86_0x1e3f=function(_0x45658b,_0xa6ed42){_0x45658b=_0x45658b-0x0;var _0x51c273=a86_0x4d74[_0x45658b];return _0x51c273;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x24839f){return _0x24839f&&_0x24839f[a86_0x1e3f('0x0')]?_0x24839f:{'default':_0x24839f};};Object[a86_0x1e3f('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a86_0x1e3f('0x2')));class VehiclesCountModel{constructor(_0x56b521,_0x410e60,_0x25a6aa){const _0x69b06b=function(_0x56b521,_0x59eedf){const _0x69b06b=_0x56b521['define'](_0x410e60,{'id':{'type':sequelize_1['default'][a86_0x1e3f('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a86_0x1e3f('0x4')][a86_0x1e3f('0x5')],'defaultValue':sequelize_1[a86_0x1e3f('0x4')]['UUIDV4']},'vehicle_id':{'type':sequelize_1[a86_0x1e3f('0x4')][a86_0x1e3f('0x3')],'references':{'model':_0x25a6aa,'key':'id'}},'lat':{'type':sequelize_1[a86_0x1e3f('0x4')]['DOUBLE']},'lon':{'type':sequelize_1['default'][a86_0x1e3f('0x6')]},'reported_at':{'type':_0x59eedf[a86_0x1e3f('0x7')],'allowNull':![]},'created_at':{'type':_0x59eedf['DATE'],'allowNull':![]},'updated_at':_0x59eedf[a86_0x1e3f('0x7')],'deleted_at':_0x59eedf[a86_0x1e3f('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x69b06b;};const _0x4a3755=_0x56b521[a86_0x1e3f('0x8')](_0x410e60,_0x69b06b);return _0x4a3755;}}exports[a86_0x1e3f('0x4')]=VehiclesCountModel;