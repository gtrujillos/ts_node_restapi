var a48_0x4bbe=['__esModule','sequelize','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','__importDefault'];(function(_0x5368d2,_0x5609b0){var _0x1e4008=function(_0x252e0a){while(--_0x252e0a){_0x5368d2['push'](_0x5368d2['shift']());}};_0x1e4008(++_0x5609b0);}(a48_0x4bbe,0x18f));var a48_0x4227=function(_0x50f501,_0x29f33f){_0x50f501=_0x50f501-0x0;var _0x426803=a48_0x4bbe[_0x50f501];return _0x426803;};'use strict';var __importDefault=this&&this[a48_0x4227('0x0')]||function(_0x30f09a){return _0x30f09a&&_0x30f09a[a48_0x4227('0x1')]?_0x30f09a:{'default':_0x30f09a};};Object['defineProperty'](exports,a48_0x4227('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a48_0x4227('0x2')));class AlarmsModel{constructor(_0x3649ea,_0x21f625,_0x2c7575){const _0x55b232=function(_0x3649ea,_0x57d261){const _0x55b232=_0x3649ea['define'](_0x21f625,{'id':{'type':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x5')],'defaultValue':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x6')]},'device_id':{'type':_0x57d261[a48_0x4227('0x4')],'references':{'model':_0x2c7575,'key':'id'}},'lat':{'type':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x7')]},'lon':{'type':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x7')]},'status':{'type':sequelize_1[a48_0x4227('0x3')][a48_0x4227('0x4')]},'reported_at':{'type':_0x57d261[a48_0x4227('0x8')],'allowNull':![]},'created_at':{'type':_0x57d261[a48_0x4227('0x8')],'allowNull':![]},'updated_at':_0x57d261['DATE'],'deleted_at':_0x57d261[a48_0x4227('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x55b232;};const _0xc16527=_0x3649ea[a48_0x4227('0x9')](_0x21f625,_0x55b232);return _0xc16527;}}exports[a48_0x4227('0x3')]=AlarmsModel;