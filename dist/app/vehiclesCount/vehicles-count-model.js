var a92_0x2ea0=['__importDefault','__esModule','sequelize','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE','import'];(function(_0x53d6fb,_0x417e18){var _0x53bbb9=function(_0x502af4){while(--_0x502af4){_0x53d6fb['push'](_0x53d6fb['shift']());}};_0x53bbb9(++_0x417e18);}(a92_0x2ea0,0x6e));var a92_0x59b8=function(_0x26911f,_0x42ef24){_0x26911f=_0x26911f-0x0;var _0x3703e8=a92_0x2ea0[_0x26911f];return _0x3703e8;};'use strict';var __importDefault=this&&this[a92_0x59b8('0x0')]||function(_0x2de9cd){return _0x2de9cd&&_0x2de9cd[a92_0x59b8('0x1')]?_0x2de9cd:{'default':_0x2de9cd};};Object['defineProperty'](exports,a92_0x59b8('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a92_0x59b8('0x2')));class VehiclesCountModel{constructor(_0x179730,_0x24a24c,_0x1b7c46){const _0x324149=function(_0x179730,_0x5a4e9a){const _0x324149=_0x179730['define'](_0x24a24c,{'id':{'type':sequelize_1[a92_0x59b8('0x3')][a92_0x59b8('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a92_0x59b8('0x3')][a92_0x59b8('0x5')],'defaultValue':sequelize_1['default'][a92_0x59b8('0x6')]},'vehicle_id':{'type':sequelize_1[a92_0x59b8('0x3')]['INTEGER'],'references':{'model':_0x1b7c46,'key':'id'}},'lat':{'type':sequelize_1[a92_0x59b8('0x3')][a92_0x59b8('0x7')]},'lon':{'type':sequelize_1['default'][a92_0x59b8('0x7')]},'reported_at':{'type':_0x5a4e9a[a92_0x59b8('0x8')],'allowNull':![]},'created_at':{'type':_0x5a4e9a[a92_0x59b8('0x8')],'allowNull':![]},'updated_at':_0x5a4e9a[a92_0x59b8('0x8')],'deleted_at':_0x5a4e9a[a92_0x59b8('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x324149;};const _0x9da9df=_0x179730[a92_0x59b8('0x9')](_0x24a24c,_0x324149);return _0x9da9df;}}exports['default']=VehiclesCountModel;