var a86_0x473a=['INTEGER','DOUBLE','DATE','__importDefault','__esModule','defineProperty','sequelize','define','UUID','default'];(function(_0x516d65,_0x59cc06){var _0x5a731e=function(_0x3d9273){while(--_0x3d9273){_0x516d65['push'](_0x516d65['shift']());}};_0x5a731e(++_0x59cc06);}(a86_0x473a,0x111));var a86_0x4a66=function(_0x351f9c,_0x3f29c8){_0x351f9c=_0x351f9c-0x0;var _0x4e6997=a86_0x473a[_0x351f9c];return _0x4e6997;};'use strict';var __importDefault=this&&this[a86_0x4a66('0x0')]||function(_0x52fe64){return _0x52fe64&&_0x52fe64[a86_0x4a66('0x1')]?_0x52fe64:{'default':_0x52fe64};};Object[a86_0x4a66('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a86_0x4a66('0x3')));class VehiclesCountModel{constructor(_0x4c41c9,_0x55991d,_0x555a73){const _0x5d05ae=function(_0x4c41c9,_0x35b477){const _0x5d05ae=_0x4c41c9[a86_0x4a66('0x4')](_0x55991d,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a86_0x4a66('0x5')],'defaultValue':sequelize_1['default']['UUIDV4']},'vehicle_id':{'type':sequelize_1[a86_0x4a66('0x6')][a86_0x4a66('0x7')],'references':{'model':_0x555a73,'key':'id'}},'lat':{'type':sequelize_1[a86_0x4a66('0x6')]['DOUBLE']},'lon':{'type':sequelize_1[a86_0x4a66('0x6')][a86_0x4a66('0x8')]},'reported_at':{'type':_0x35b477[a86_0x4a66('0x9')],'allowNull':![]},'created_at':{'type':_0x35b477[a86_0x4a66('0x9')],'allowNull':![]},'updated_at':_0x35b477[a86_0x4a66('0x9')],'deleted_at':_0x35b477[a86_0x4a66('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x5d05ae;};const _0x139268=_0x4c41c9['import'](_0x55991d,_0x5d05ae);return _0x139268;}}exports[a86_0x4a66('0x6')]=VehiclesCountModel;