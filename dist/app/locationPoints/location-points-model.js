var a30_0x32bc=['import','__esModule','defineProperty','sequelize','define','UUID','UUIDV4','INTEGER','default','DOUBLE','DATE'];(function(_0x1f4970,_0x2bda50){var _0x488918=function(_0x1124a0){while(--_0x1124a0){_0x1f4970['push'](_0x1f4970['shift']());}};_0x488918(++_0x2bda50);}(a30_0x32bc,0xf3));var a30_0x1e8a=function(_0xbb0264,_0x304f23){_0xbb0264=_0xbb0264-0x0;var _0x50ab27=a30_0x32bc[_0xbb0264];return _0x50ab27;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5d8ac6){return _0x5d8ac6&&_0x5d8ac6[a30_0x1e8a('0x0')]?_0x5d8ac6:{'default':_0x5d8ac6};};Object[a30_0x1e8a('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a30_0x1e8a('0x2')));class LocationPointsModel{constructor(_0x1232d6,_0x4221da,_0x115dc1){const _0x8fcef6=function(_0x1232d6,_0x47ca46){const _0x8fcef6=_0x1232d6[a30_0x1e8a('0x3')](_0x4221da,{'id':{'type':_0x47ca46[a30_0x1e8a('0x4')],'primaryKey':!![],'defaultValue':_0x47ca46[a30_0x1e8a('0x5')]},'device_id':{'type':_0x47ca46[a30_0x1e8a('0x6')],'references':{'model':_0x115dc1,'key':'id'}},'lat':{'type':sequelize_1[a30_0x1e8a('0x7')][a30_0x1e8a('0x8')]},'lon':{'type':sequelize_1['default'][a30_0x1e8a('0x8')]},'alt':{'type':sequelize_1[a30_0x1e8a('0x7')][a30_0x1e8a('0x8')]},'hdop':{'type':sequelize_1[a30_0x1e8a('0x7')][a30_0x1e8a('0x8')]},'pdop':{'type':sequelize_1[a30_0x1e8a('0x7')][a30_0x1e8a('0x8')]},'vdop':{'type':sequelize_1[a30_0x1e8a('0x7')]['DOUBLE']},'tracked_at':_0x47ca46[a30_0x1e8a('0x9')],'created_at':{'type':_0x47ca46[a30_0x1e8a('0x9')],'allowNull':![]},'updated_at':_0x47ca46['DATE'],'deleted_at':_0x47ca46[a30_0x1e8a('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x8fcef6;};const _0x4a4270=_0x1232d6[a30_0x1e8a('0xa')](_0x4221da,_0x8fcef6);return _0x4a4270;}}exports['default']=LocationPointsModel;