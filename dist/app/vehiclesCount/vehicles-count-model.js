var a85_0x24b7=['import','__esModule','defineProperty','sequelize','define','default','INTEGER','UUIDV4','DOUBLE','DATE'];(function(_0x401015,_0xeeadd5){var _0x2ad2ad=function(_0x31b7a1){while(--_0x31b7a1){_0x401015['push'](_0x401015['shift']());}};_0x2ad2ad(++_0xeeadd5);}(a85_0x24b7,0x1c3));var a85_0x5856=function(_0x500911,_0x20b981){_0x500911=_0x500911-0x0;var _0x19166d=a85_0x24b7[_0x500911];return _0x19166d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x438679){return _0x438679&&_0x438679[a85_0x5856('0x0')]?_0x438679:{'default':_0x438679};};Object[a85_0x5856('0x1')](exports,a85_0x5856('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a85_0x5856('0x2')));class VehiclesCountModel{constructor(_0x15e6e8,_0x2269dc,_0x3be906){const _0x5547a4=function(_0x15e6e8,_0x1ce4fa){const _0x5547a4=_0x15e6e8[a85_0x5856('0x3')](_0x2269dc,{'id':{'type':sequelize_1[a85_0x5856('0x4')][a85_0x5856('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1['default'][a85_0x5856('0x6')]},'vehicle_id':{'type':sequelize_1['default'][a85_0x5856('0x5')],'references':{'model':_0x3be906,'key':'id'}},'lat':{'type':sequelize_1[a85_0x5856('0x4')][a85_0x5856('0x7')]},'lon':{'type':sequelize_1[a85_0x5856('0x4')][a85_0x5856('0x7')]},'reported_at':{'type':_0x1ce4fa['DATE'],'allowNull':![]},'created_at':{'type':_0x1ce4fa[a85_0x5856('0x8')],'allowNull':![]},'updated_at':_0x1ce4fa[a85_0x5856('0x8')],'deleted_at':_0x1ce4fa[a85_0x5856('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x5547a4;};const _0x12f750=_0x15e6e8[a85_0x5856('0x9')](_0x2269dc,_0x5547a4);return _0x12f750;}}exports['default']=VehiclesCountModel;