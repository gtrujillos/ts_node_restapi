var a7_0x3750=['sequelize','define','default','INTEGER','UUID','DOUBLE','DATE','import','defineProperty','__esModule'];(function(_0x2c5d9e,_0x433610){var _0x19db21=function(_0x21ed2b){while(--_0x21ed2b){_0x2c5d9e['push'](_0x2c5d9e['shift']());}};_0x19db21(++_0x433610);}(a7_0x3750,0xf8));var a7_0x246c=function(_0xf42b48,_0x263ebf){_0xf42b48=_0xf42b48-0x0;var _0x93910e=a7_0x3750[_0xf42b48];return _0x93910e;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x135100){return _0x135100&&_0x135100['__esModule']?_0x135100:{'default':_0x135100};};Object[a7_0x246c('0x0')](exports,a7_0x246c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a7_0x246c('0x2')));class AlarmsModel{constructor(_0x115b6d,_0x6da43d,_0x2c3982){const _0x18d9b5=function(_0x115b6d,_0x43df42){const _0x18d9b5=_0x115b6d[a7_0x246c('0x3')](_0x6da43d,{'id':{'type':sequelize_1[a7_0x246c('0x4')][a7_0x246c('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0x246c('0x4')][a7_0x246c('0x6')],'defaultValue':sequelize_1[a7_0x246c('0x4')]['UUIDV4']},'device_id':{'type':_0x43df42[a7_0x246c('0x5')],'references':{'model':_0x2c3982,'key':'id'}},'lat':{'type':sequelize_1[a7_0x246c('0x4')][a7_0x246c('0x7')]},'lon':{'type':sequelize_1[a7_0x246c('0x4')]['DOUBLE']},'status':{'type':sequelize_1['default'][a7_0x246c('0x5')]},'reported_at':{'type':_0x43df42[a7_0x246c('0x8')],'allowNull':![]},'created_at':{'type':_0x43df42[a7_0x246c('0x8')],'allowNull':![]},'updated_at':_0x43df42[a7_0x246c('0x8')],'deleted_at':_0x43df42[a7_0x246c('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x18d9b5;};const _0x7c7f22=_0x115b6d[a7_0x246c('0x9')](_0x6da43d,_0x18d9b5);return _0x7c7f22;}}exports[a7_0x246c('0x4')]=AlarmsModel;