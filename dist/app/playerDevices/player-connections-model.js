var a55_0x2172=['DOUBLE','DATE','import','defineProperty','__esModule','sequelize','define','default','INTEGER','UUID','UUIDV4'];(function(_0x44d847,_0x47b816){var _0x25f6e4=function(_0x71bb11){while(--_0x71bb11){_0x44d847['push'](_0x44d847['shift']());}};_0x25f6e4(++_0x47b816);}(a55_0x2172,0x116));var a55_0x4040=function(_0x346b60,_0x580373){_0x346b60=_0x346b60-0x0;var _0x8ea0c0=a55_0x2172[_0x346b60];return _0x8ea0c0;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x32d926){return _0x32d926&&_0x32d926['__esModule']?_0x32d926:{'default':_0x32d926};};Object[a55_0x4040('0x0')](exports,a55_0x4040('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a55_0x4040('0x2')));class AlarmsModel{constructor(_0x43b01e,_0x1275a1,_0x3b11b8){const _0x3bea66=function(_0x43b01e,_0x479537){const _0x3bea66=_0x43b01e[a55_0x4040('0x3')](_0x1275a1,{'id':{'type':sequelize_1[a55_0x4040('0x4')][a55_0x4040('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a55_0x4040('0x6')],'defaultValue':sequelize_1[a55_0x4040('0x4')][a55_0x4040('0x7')]},'device_id':{'type':_0x479537['INTEGER'],'references':{'model':_0x3b11b8,'key':'id'}},'lat':{'type':sequelize_1['default'][a55_0x4040('0x8')]},'lon':{'type':sequelize_1[a55_0x4040('0x4')][a55_0x4040('0x8')]},'status':{'type':sequelize_1[a55_0x4040('0x4')][a55_0x4040('0x5')]},'reported_at':{'type':_0x479537[a55_0x4040('0x9')],'allowNull':![]},'created_at':{'type':_0x479537[a55_0x4040('0x9')],'allowNull':![]},'updated_at':_0x479537['DATE'],'deleted_at':_0x479537['DATE']},{'paranoid':!![],'underscored':!![]});return _0x3bea66;};const _0x5e76a1=_0x43b01e[a55_0x4040('0xa')](_0x1275a1,_0x3bea66);return _0x5e76a1;}}exports[a55_0x4040('0x4')]=AlarmsModel;