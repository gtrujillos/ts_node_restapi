var a83_0x31e5=['STRING','DATE','import','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','UUIDV4'];(function(_0x4bbdeb,_0x425c46){var _0x41d3c0=function(_0x2f2e6c){while(--_0x2f2e6c){_0x4bbdeb['push'](_0x4bbdeb['shift']());}};_0x41d3c0(++_0x425c46);}(a83_0x31e5,0x184));var a83_0x5ba8=function(_0x366bfb,_0x484493){_0x366bfb=_0x366bfb-0x0;var _0x53a406=a83_0x31e5[_0x366bfb];return _0x53a406;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4a1234){return _0x4a1234&&_0x4a1234[a83_0x5ba8('0x0')]?_0x4a1234:{'default':_0x4a1234};};Object[a83_0x5ba8('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a83_0x5ba8('0x2')));class VehiclesModel{constructor(_0xef7fb6,_0x2ff457,_0xb131c8,_0x5ef1ee){const _0x3e5ee8=function(_0xef7fb6){const _0x3e5ee8=_0xef7fb6[a83_0x5ba8('0x3')](_0x2ff457,{'id':{'type':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a83_0x5ba8('0x6')],'defaultValue':sequelize_1['default'][a83_0x5ba8('0x7')]},'brand_id':{'type':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x5')],'references':{'model':_0x5ef1ee,'key':'id'}},'company_id':{'type':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x5')],'references':{'model':_0xb131c8,'key':'id'}},'plate':{'type':sequelize_1['default'][a83_0x5ba8('0x8')]},'model':{'type':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x8')]},'created_at':{'type':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x9')],'allowNull':![]},'updated_at':sequelize_1['default'][a83_0x5ba8('0x9')],'deleted_at':sequelize_1[a83_0x5ba8('0x4')][a83_0x5ba8('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x3e5ee8;};const _0x4b505f=_0xef7fb6[a83_0x5ba8('0xa')](_0x2ff457,_0x3e5ee8);return _0x4b505f;}}exports[a83_0x5ba8('0x4')]=VehiclesModel;