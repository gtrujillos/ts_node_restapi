var a49_0x38da=['import','__importDefault','__esModule','defineProperty','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE'];(function(_0x1196c6,_0x44e6fa){var _0x18d0d0=function(_0x300794){while(--_0x300794){_0x1196c6['push'](_0x1196c6['shift']());}};_0x18d0d0(++_0x44e6fa);}(a49_0x38da,0x141));var a49_0x4dfe=function(_0x2dd866,_0x322fe8){_0x2dd866=_0x2dd866-0x0;var _0x1a5603=a49_0x38da[_0x2dd866];return _0x1a5603;};'use strict';var __importDefault=this&&this[a49_0x4dfe('0x0')]||function(_0x30206e){return _0x30206e&&_0x30206e[a49_0x4dfe('0x1')]?_0x30206e:{'default':_0x30206e};};Object[a49_0x4dfe('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x3937ff,_0x104f5f,_0x258329){const _0x4bb85b=function(_0x3937ff,_0x22452f){const _0x4bb85b=_0x3937ff['define'](_0x104f5f,{'id':{'type':sequelize_1[a49_0x4dfe('0x3')][a49_0x4dfe('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a49_0x4dfe('0x3')][a49_0x4dfe('0x5')],'defaultValue':sequelize_1[a49_0x4dfe('0x3')][a49_0x4dfe('0x6')]},'device_id':{'type':_0x22452f[a49_0x4dfe('0x4')],'references':{'model':_0x258329,'key':'id'}},'lat':{'type':sequelize_1['default'][a49_0x4dfe('0x7')]},'lon':{'type':sequelize_1[a49_0x4dfe('0x3')][a49_0x4dfe('0x7')]},'status':{'type':sequelize_1[a49_0x4dfe('0x3')]['INTEGER']},'reported_at':{'type':_0x22452f[a49_0x4dfe('0x8')],'allowNull':![]},'created_at':{'type':_0x22452f['DATE'],'allowNull':![]},'updated_at':_0x22452f[a49_0x4dfe('0x8')],'deleted_at':_0x22452f['DATE']},{'paranoid':!![],'underscored':!![]});return _0x4bb85b;};const _0x6680e0=_0x3937ff[a49_0x4dfe('0x9')](_0x104f5f,_0x4bb85b);return _0x6680e0;}}exports[a49_0x4dfe('0x3')]=AlarmsModel;