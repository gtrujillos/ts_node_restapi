var a192_0x3822=['import','__importDefault','__esModule','defineProperty','define','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE'];(function(_0x458d4c,_0x5d46b8){var _0x4dc93a=function(_0x2eeeeb){while(--_0x2eeeeb){_0x458d4c['push'](_0x458d4c['shift']());}};_0x4dc93a(++_0x5d46b8);}(a192_0x3822,0x109));var a192_0x1bbf=function(_0x3a549c,_0x3b1cdb){_0x3a549c=_0x3a549c-0x0;var _0x49b3df=a192_0x3822[_0x3a549c];return _0x49b3df;};'use strict';var __importDefault=this&&this[a192_0x1bbf('0x0')]||function(_0x3ac4a4){return _0x3ac4a4&&_0x3ac4a4[a192_0x1bbf('0x1')]?_0x3ac4a4:{'default':_0x3ac4a4};};Object[a192_0x1bbf('0x2')](exports,a192_0x1bbf('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class VehiclesCountModel{constructor(_0x4183ee,_0x2b9929,_0x3e28ce){const _0x6c65=function(_0x4183ee,_0x35dd33){const _0x6c65=_0x4183ee[a192_0x1bbf('0x3')](_0x2b9929,{'id':{'type':sequelize_1[a192_0x1bbf('0x4')][a192_0x1bbf('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a192_0x1bbf('0x4')][a192_0x1bbf('0x6')],'defaultValue':sequelize_1[a192_0x1bbf('0x4')][a192_0x1bbf('0x7')]},'vehicle_id':{'type':sequelize_1[a192_0x1bbf('0x4')][a192_0x1bbf('0x5')],'references':{'model':_0x3e28ce,'key':'id'}},'lat':{'type':sequelize_1['default'][a192_0x1bbf('0x8')]},'lon':{'type':sequelize_1[a192_0x1bbf('0x4')][a192_0x1bbf('0x8')]},'reported_at':{'type':_0x35dd33[a192_0x1bbf('0x9')],'allowNull':![]},'created_at':{'type':_0x35dd33[a192_0x1bbf('0x9')],'allowNull':![]},'updated_at':_0x35dd33['DATE'],'deleted_at':_0x35dd33[a192_0x1bbf('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x6c65;};const _0x3c45b8=_0x4183ee[a192_0x1bbf('0xa')](_0x2b9929,_0x6c65);return _0x3c45b8;}}exports['default']=VehiclesCountModel;