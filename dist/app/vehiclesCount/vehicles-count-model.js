var a92_0x185f=['DATE','import','__importDefault','__esModule','default','INTEGER','UUIDV4'];(function(_0x2c3856,_0x285848){var _0x5ce6bf=function(_0x38c366){while(--_0x38c366){_0x2c3856['push'](_0x2c3856['shift']());}};_0x5ce6bf(++_0x285848);}(a92_0x185f,0x10c));var a92_0x4998=function(_0x156acd,_0x354298){_0x156acd=_0x156acd-0x0;var _0x389843=a92_0x185f[_0x156acd];return _0x389843;};'use strict';var __importDefault=this&&this[a92_0x4998('0x0')]||function(_0x3483c0){return _0x3483c0&&_0x3483c0[a92_0x4998('0x1')]?_0x3483c0:{'default':_0x3483c0};};Object['defineProperty'](exports,a92_0x4998('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class VehiclesCountModel{constructor(_0xdbef21,_0x167a6e,_0x22328f){const _0x151609=function(_0xdbef21,_0x1a2044){const _0x151609=_0xdbef21['define'](_0x167a6e,{'id':{'type':sequelize_1[a92_0x4998('0x2')][a92_0x4998('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a92_0x4998('0x2')]['UUID'],'defaultValue':sequelize_1[a92_0x4998('0x2')][a92_0x4998('0x4')]},'vehicle_id':{'type':sequelize_1[a92_0x4998('0x2')][a92_0x4998('0x3')],'references':{'model':_0x22328f,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1[a92_0x4998('0x2')]['DOUBLE']},'reported_at':{'type':_0x1a2044[a92_0x4998('0x5')],'allowNull':![]},'created_at':{'type':_0x1a2044[a92_0x4998('0x5')],'allowNull':![]},'updated_at':_0x1a2044['DATE'],'deleted_at':_0x1a2044[a92_0x4998('0x5')]},{'paranoid':!![],'underscored':!![]});return _0x151609;};const _0x226e2d=_0xdbef21[a92_0x4998('0x6')](_0x167a6e,_0x151609);return _0x226e2d;}}exports[a92_0x4998('0x2')]=VehiclesCountModel;