var a192_0x492a=['__esModule','define','default','UUID','UUIDV4','DOUBLE','DATE','import','__importDefault','defineProperty'];(function(_0x1645d3,_0x3bce2d){var _0x2a1e1d=function(_0x1d4e02){while(--_0x1d4e02){_0x1645d3['push'](_0x1645d3['shift']());}};_0x2a1e1d(++_0x3bce2d);}(a192_0x492a,0xbc));var a192_0x5045=function(_0x27ec4a,_0x58b333){_0x27ec4a=_0x27ec4a-0x0;var _0x3a9a9a=a192_0x492a[_0x27ec4a];return _0x3a9a9a;};'use strict';var __importDefault=this&&this[a192_0x5045('0x0')]||function(_0x2b13e7){return _0x2b13e7&&_0x2b13e7['__esModule']?_0x2b13e7:{'default':_0x2b13e7};};Object[a192_0x5045('0x1')](exports,a192_0x5045('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class VehiclesCountModel{constructor(_0x58ed44,_0x21b39c,_0x37d8b6){const _0x84bcaa=function(_0x58ed44,_0x434155){const _0x84bcaa=_0x58ed44[a192_0x5045('0x3')](_0x21b39c,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a192_0x5045('0x4')][a192_0x5045('0x5')],'defaultValue':sequelize_1[a192_0x5045('0x4')][a192_0x5045('0x6')]},'vehicle_id':{'type':sequelize_1[a192_0x5045('0x4')]['INTEGER'],'references':{'model':_0x37d8b6,'key':'id'}},'lat':{'type':sequelize_1[a192_0x5045('0x4')]['DOUBLE']},'lon':{'type':sequelize_1['default'][a192_0x5045('0x7')]},'reported_at':{'type':_0x434155[a192_0x5045('0x8')],'allowNull':![]},'created_at':{'type':_0x434155[a192_0x5045('0x8')],'allowNull':![]},'updated_at':_0x434155[a192_0x5045('0x8')],'deleted_at':_0x434155[a192_0x5045('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x84bcaa;};const _0x479fde=_0x58ed44[a192_0x5045('0x9')](_0x21b39c,_0x84bcaa);return _0x479fde;}}exports[a192_0x5045('0x4')]=VehiclesCountModel;