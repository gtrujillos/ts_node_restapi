var a52_0x3beb=['INTEGER','UUID','DOUBLE','DATE','import','__importDefault','define','default'];(function(_0x6ca734,_0x4edab8){var _0xab236a=function(_0x3f70af){while(--_0x3f70af){_0x6ca734['push'](_0x6ca734['shift']());}};_0xab236a(++_0x4edab8);}(a52_0x3beb,0x15d));var a52_0x2e29=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=a52_0x3beb[_0x2699a9];return _0x5b6c40;};'use strict';var __importDefault=this&&this[a52_0x2e29('0x0')]||function(_0x507ed4){return _0x507ed4&&_0x507ed4['__esModule']?_0x507ed4:{'default':_0x507ed4};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x53d4b0,_0x514969,_0x3d9798){const _0x20394d=function(_0x53d4b0,_0x3e65d3){const _0x20394d=_0x53d4b0[a52_0x2e29('0x1')](_0x514969,{'id':{'type':sequelize_1[a52_0x2e29('0x2')][a52_0x2e29('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0x2e29('0x2')][a52_0x2e29('0x4')],'defaultValue':sequelize_1[a52_0x2e29('0x2')]['UUIDV4']},'device_id':{'type':_0x3e65d3[a52_0x2e29('0x3')],'references':{'model':_0x3d9798,'key':'id'}},'lat':{'type':sequelize_1[a52_0x2e29('0x2')]['DOUBLE']},'lon':{'type':sequelize_1['default'][a52_0x2e29('0x5')]},'status':{'type':sequelize_1['default']['INTEGER']},'reported_at':{'type':_0x3e65d3['DATE'],'allowNull':![]},'created_at':{'type':_0x3e65d3['DATE'],'allowNull':![]},'updated_at':_0x3e65d3[a52_0x2e29('0x6')],'deleted_at':_0x3e65d3[a52_0x2e29('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x20394d;};const _0x54498e=_0x53d4b0[a52_0x2e29('0x7')](_0x514969,_0x20394d);return _0x54498e;}}exports[a52_0x2e29('0x2')]=AlarmsModel;