var a7_0x331d=['sequelize','define','INTEGER','default','UUID','UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty'];(function(_0x2c7b26,_0x1a0165){var _0x16451a=function(_0x8d739f){while(--_0x8d739f){_0x2c7b26['push'](_0x2c7b26['shift']());}};_0x16451a(++_0x1a0165);}(a7_0x331d,0x69));var a7_0x295c=function(_0x3f31ad,_0x4a079e){_0x3f31ad=_0x3f31ad-0x0;var _0x38483b=a7_0x331d[_0x3f31ad];return _0x38483b;};'use strict';var __importDefault=this&&this[a7_0x295c('0x0')]||function(_0x45aeb3){return _0x45aeb3&&_0x45aeb3[a7_0x295c('0x1')]?_0x45aeb3:{'default':_0x45aeb3};};Object[a7_0x295c('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a7_0x295c('0x3')));class AlarmsModel{constructor(_0x1b94f5,_0x454eaa,_0x546f87){const _0x2b147c=function(_0x1b94f5,_0x13e305){const _0x2b147c=_0x1b94f5[a7_0x295c('0x4')](_0x454eaa,{'id':{'type':sequelize_1['default'][a7_0x295c('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0x295c('0x6')][a7_0x295c('0x7')],'defaultValue':sequelize_1['default'][a7_0x295c('0x8')]},'device_id':{'type':_0x13e305[a7_0x295c('0x5')],'references':{'model':_0x546f87,'key':'id'}},'lat':{'type':sequelize_1[a7_0x295c('0x6')][a7_0x295c('0x9')]},'lon':{'type':sequelize_1[a7_0x295c('0x6')][a7_0x295c('0x9')]},'status':{'type':sequelize_1['default']['INTEGER']},'reported_at':{'type':_0x13e305[a7_0x295c('0xa')],'allowNull':![]},'created_at':{'type':_0x13e305[a7_0x295c('0xa')],'allowNull':![]},'updated_at':_0x13e305['DATE'],'deleted_at':_0x13e305[a7_0x295c('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x2b147c;};const _0x3b936e=_0x1b94f5[a7_0x295c('0xb')](_0x454eaa,_0x2b147c);return _0x3b936e;}}exports[a7_0x295c('0x6')]=AlarmsModel;