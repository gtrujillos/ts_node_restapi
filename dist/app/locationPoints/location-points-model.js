var a30_0x1037=['__esModule','sequelize','define','UUID','UUIDV4','INTEGER','DOUBLE','default','DATE','import','__importDefault','defineProperty'];(function(_0x366c73,_0x1a9551){var _0x5dcdc2=function(_0x565752){while(--_0x565752){_0x366c73['push'](_0x366c73['shift']());}};_0x5dcdc2(++_0x1a9551);}(a30_0x1037,0xbe));var a30_0x3814=function(_0x24c440,_0x259249){_0x24c440=_0x24c440-0x0;var _0xbc0743=a30_0x1037[_0x24c440];return _0xbc0743;};'use strict';var __importDefault=this&&this[a30_0x3814('0x0')]||function(_0x17d5c1){return _0x17d5c1&&_0x17d5c1['__esModule']?_0x17d5c1:{'default':_0x17d5c1};};Object[a30_0x3814('0x1')](exports,a30_0x3814('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a30_0x3814('0x3')));class LocationPointsModel{constructor(_0x100d1b,_0x35d545,_0x62ce29){const _0x9b8993=function(_0x100d1b,_0x5aa58e){const _0x9b8993=_0x100d1b[a30_0x3814('0x4')](_0x35d545,{'id':{'type':_0x5aa58e[a30_0x3814('0x5')],'primaryKey':!![],'defaultValue':_0x5aa58e[a30_0x3814('0x6')]},'device_id':{'type':_0x5aa58e[a30_0x3814('0x7')],'references':{'model':_0x62ce29,'key':'id'}},'lat':{'type':sequelize_1['default'][a30_0x3814('0x8')]},'lon':{'type':sequelize_1['default'][a30_0x3814('0x8')]},'alt':{'type':sequelize_1['default']['DOUBLE']},'hdop':{'type':sequelize_1[a30_0x3814('0x9')][a30_0x3814('0x8')]},'pdop':{'type':sequelize_1[a30_0x3814('0x9')][a30_0x3814('0x8')]},'vdop':{'type':sequelize_1[a30_0x3814('0x9')][a30_0x3814('0x8')]},'tracked_at':_0x5aa58e[a30_0x3814('0xa')],'created_at':{'type':_0x5aa58e[a30_0x3814('0xa')],'allowNull':![]},'updated_at':_0x5aa58e[a30_0x3814('0xa')],'deleted_at':_0x5aa58e[a30_0x3814('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x9b8993;};const _0x5048ec=_0x100d1b[a30_0x3814('0xb')](_0x35d545,_0x9b8993);return _0x5048ec;}}exports[a30_0x3814('0x9')]=LocationPointsModel;