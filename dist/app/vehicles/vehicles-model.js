var a83_0x4158=['STRING','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define','default','UUID','UUIDV4'];(function(_0xaa7fa1,_0x189f6c){var _0x476c0a=function(_0x3a1132){while(--_0x3a1132){_0xaa7fa1['push'](_0xaa7fa1['shift']());}};_0x476c0a(++_0x189f6c);}(a83_0x4158,0x10b));var a83_0x5d8a=function(_0x33c932,_0x3526c8){_0x33c932=_0x33c932-0x0;var _0x1dd070=a83_0x4158[_0x33c932];return _0x1dd070;};'use strict';var __importDefault=this&&this[a83_0x5d8a('0x0')]||function(_0x12fbc6){return _0x12fbc6&&_0x12fbc6['__esModule']?_0x12fbc6:{'default':_0x12fbc6};};Object[a83_0x5d8a('0x1')](exports,a83_0x5d8a('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a83_0x5d8a('0x3')));class VehiclesModel{constructor(_0xb911db,_0x276d72,_0xe0d245,_0x5ddf2c){const _0x1bc31a=function(_0xb911db){const _0x1bc31a=_0xb911db[a83_0x5d8a('0x4')](_0x276d72,{'id':{'type':sequelize_1[a83_0x5d8a('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a83_0x5d8a('0x6')],'defaultValue':sequelize_1[a83_0x5d8a('0x5')][a83_0x5d8a('0x7')]},'brand_id':{'type':sequelize_1[a83_0x5d8a('0x5')]['INTEGER'],'references':{'model':_0x5ddf2c,'key':'id'}},'company_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0xe0d245,'key':'id'}},'plate':{'type':sequelize_1['default'][a83_0x5d8a('0x8')]},'model':{'type':sequelize_1[a83_0x5d8a('0x5')][a83_0x5d8a('0x8')]},'created_at':{'type':sequelize_1[a83_0x5d8a('0x5')][a83_0x5d8a('0x9')],'allowNull':![]},'updated_at':sequelize_1[a83_0x5d8a('0x5')][a83_0x5d8a('0x9')],'deleted_at':sequelize_1['default'][a83_0x5d8a('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1bc31a;};const _0x186101=_0xb911db[a83_0x5d8a('0xa')](_0x276d72,_0x1bc31a);return _0x186101;}}exports[a83_0x5d8a('0x5')]=VehiclesModel;