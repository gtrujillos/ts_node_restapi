var a52_0xb5f7=['DATE','import','__importDefault','defineProperty','__esModule','sequelize','default','INTEGER','UUID','UUIDV4','DOUBLE'];(function(_0x31113b,_0x521bf4){var _0x29e350=function(_0x5dd5d0){while(--_0x5dd5d0){_0x31113b['push'](_0x31113b['shift']());}};_0x29e350(++_0x521bf4);}(a52_0xb5f7,0x199));var a52_0xa6fc=function(_0x38900c,_0x3d0668){_0x38900c=_0x38900c-0x0;var _0x14e173=a52_0xb5f7[_0x38900c];return _0x14e173;};'use strict';var __importDefault=this&&this[a52_0xa6fc('0x0')]||function(_0x125007){return _0x125007&&_0x125007['__esModule']?_0x125007:{'default':_0x125007};};Object[a52_0xa6fc('0x1')](exports,a52_0xa6fc('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a52_0xa6fc('0x3')));class AlarmsModel{constructor(_0x3c04d0,_0x338cbe,_0x22e8a2){const _0x33c8fb=function(_0x3c04d0,_0x15fdf6){const _0x33c8fb=_0x3c04d0['define'](_0x338cbe,{'id':{'type':sequelize_1[a52_0xa6fc('0x4')][a52_0xa6fc('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0xa6fc('0x4')][a52_0xa6fc('0x6')],'defaultValue':sequelize_1[a52_0xa6fc('0x4')][a52_0xa6fc('0x7')]},'device_id':{'type':_0x15fdf6[a52_0xa6fc('0x5')],'references':{'model':_0x22e8a2,'key':'id'}},'lat':{'type':sequelize_1[a52_0xa6fc('0x4')]['DOUBLE']},'lon':{'type':sequelize_1[a52_0xa6fc('0x4')][a52_0xa6fc('0x8')]},'status':{'type':sequelize_1[a52_0xa6fc('0x4')][a52_0xa6fc('0x5')]},'reported_at':{'type':_0x15fdf6['DATE'],'allowNull':![]},'created_at':{'type':_0x15fdf6['DATE'],'allowNull':![]},'updated_at':_0x15fdf6[a52_0xa6fc('0x9')],'deleted_at':_0x15fdf6[a52_0xa6fc('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x33c8fb;};const _0x3121d3=_0x3c04d0[a52_0xa6fc('0xa')](_0x338cbe,_0x33c8fb);return _0x3121d3;}}exports[a52_0xa6fc('0x4')]=AlarmsModel;