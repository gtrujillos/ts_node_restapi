var a1_0x48cb=['DOUBLE','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define','INTEGER','default','UUID','UUIDV4'];(function(_0x51fc6b,_0x4acfde){var _0x30c944=function(_0x20dc44){while(--_0x20dc44){_0x51fc6b['push'](_0x51fc6b['shift']());}};_0x30c944(++_0x4acfde);}(a1_0x48cb,0xdb));var a1_0x5f4d=function(_0x41d548,_0x4dbc1a){_0x41d548=_0x41d548-0x0;var _0x5d023b=a1_0x48cb[_0x41d548];return _0x5d023b;};'use strict';var __importDefault=this&&this[a1_0x5f4d('0x0')]||function(_0x1eb725){return _0x1eb725&&_0x1eb725['__esModule']?_0x1eb725:{'default':_0x1eb725};};Object[a1_0x5f4d('0x1')](exports,a1_0x5f4d('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x5f4d('0x3')));class AlarmsModel{constructor(_0xd4d7e4,_0x27aaaa,_0x440c36){const _0x1ca34a=function(_0xd4d7e4,_0x4e1478){const _0x1ca34a=_0xd4d7e4[a1_0x5f4d('0x4')](_0x27aaaa,{'id':{'type':sequelize_1['default'][a1_0x5f4d('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a1_0x5f4d('0x6')][a1_0x5f4d('0x7')],'defaultValue':sequelize_1['default'][a1_0x5f4d('0x8')]},'device_id':{'type':_0x4e1478[a1_0x5f4d('0x5')],'references':{'model':_0x440c36,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1['default'][a1_0x5f4d('0x9')]},'status':{'type':sequelize_1[a1_0x5f4d('0x6')][a1_0x5f4d('0x5')]},'reported_at':{'type':_0x4e1478[a1_0x5f4d('0xa')],'allowNull':![]},'created_at':{'type':_0x4e1478[a1_0x5f4d('0xa')],'allowNull':![]},'updated_at':_0x4e1478[a1_0x5f4d('0xa')],'deleted_at':_0x4e1478[a1_0x5f4d('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x1ca34a;};const _0x3d204a=_0xd4d7e4[a1_0x5f4d('0xb')](_0x27aaaa,_0x1ca34a);return _0x3d204a;}}exports['default']=AlarmsModel;