var a54_0x5e38=['DOUBLE','DATE','import','__importDefault','__esModule','sequelize','define','default','INTEGER','UUID','UUIDV4'];(function(_0x50ec34,_0x785450){var _0x863351=function(_0x121875){while(--_0x121875){_0x50ec34['push'](_0x50ec34['shift']());}};_0x863351(++_0x785450);}(a54_0x5e38,0x116));var a54_0x2d4a=function(_0x132a4b,_0xdbabdb){_0x132a4b=_0x132a4b-0x0;var _0x3f900d=a54_0x5e38[_0x132a4b];return _0x3f900d;};'use strict';var __importDefault=this&&this[a54_0x2d4a('0x0')]||function(_0x21de40){return _0x21de40&&_0x21de40[a54_0x2d4a('0x1')]?_0x21de40:{'default':_0x21de40};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a54_0x2d4a('0x2')));class AlarmsModel{constructor(_0x3318b2,_0x30de4d,_0x2d928e){const _0x1b25dd=function(_0x3318b2,_0x5404f1){const _0x1b25dd=_0x3318b2[a54_0x2d4a('0x3')](_0x30de4d,{'id':{'type':sequelize_1[a54_0x2d4a('0x4')][a54_0x2d4a('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a54_0x2d4a('0x4')][a54_0x2d4a('0x6')],'defaultValue':sequelize_1['default'][a54_0x2d4a('0x7')]},'device_id':{'type':_0x5404f1[a54_0x2d4a('0x5')],'references':{'model':_0x2d928e,'key':'id'}},'lat':{'type':sequelize_1[a54_0x2d4a('0x4')][a54_0x2d4a('0x8')]},'lon':{'type':sequelize_1[a54_0x2d4a('0x4')]['DOUBLE']},'status':{'type':sequelize_1[a54_0x2d4a('0x4')][a54_0x2d4a('0x5')]},'reported_at':{'type':_0x5404f1[a54_0x2d4a('0x9')],'allowNull':![]},'created_at':{'type':_0x5404f1[a54_0x2d4a('0x9')],'allowNull':![]},'updated_at':_0x5404f1[a54_0x2d4a('0x9')],'deleted_at':_0x5404f1[a54_0x2d4a('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1b25dd;};const _0x1878a0=_0x3318b2[a54_0x2d4a('0xa')](_0x30de4d,_0x1b25dd);return _0x1878a0;}}exports[a54_0x2d4a('0x4')]=AlarmsModel;