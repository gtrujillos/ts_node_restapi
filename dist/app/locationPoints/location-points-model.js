var a30_0x39b2=['define','UUIDV4','INTEGER','default','DOUBLE','DATE','import','__esModule','defineProperty','sequelize'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a30_0x39b2,0x1e7));var a30_0x4e75=function(_0x2cd476,_0x39a92e){_0x2cd476=_0x2cd476-0x0;var _0x4a6cd4=a30_0x39b2[_0x2cd476];return _0x4a6cd4;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5c5549){return _0x5c5549&&_0x5c5549[a30_0x4e75('0x0')]?_0x5c5549:{'default':_0x5c5549};};Object[a30_0x4e75('0x1')](exports,a30_0x4e75('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a30_0x4e75('0x2')));class LocationPointsModel{constructor(_0x498cae,_0x20a55d,_0x107e7a){const _0x2efbef=function(_0x498cae,_0x1bca54){const _0x2efbef=_0x498cae[a30_0x4e75('0x3')](_0x20a55d,{'id':{'type':_0x1bca54['UUID'],'primaryKey':!![],'defaultValue':_0x1bca54[a30_0x4e75('0x4')]},'device_id':{'type':_0x1bca54[a30_0x4e75('0x5')],'references':{'model':_0x107e7a,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1[a30_0x4e75('0x6')][a30_0x4e75('0x7')]},'alt':{'type':sequelize_1['default'][a30_0x4e75('0x7')]},'hdop':{'type':sequelize_1[a30_0x4e75('0x6')]['DOUBLE']},'pdop':{'type':sequelize_1['default'][a30_0x4e75('0x7')]},'vdop':{'type':sequelize_1[a30_0x4e75('0x6')][a30_0x4e75('0x7')]},'tracked_at':_0x1bca54['DATE'],'created_at':{'type':_0x1bca54[a30_0x4e75('0x8')],'allowNull':![]},'updated_at':_0x1bca54[a30_0x4e75('0x8')],'deleted_at':_0x1bca54[a30_0x4e75('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2efbef;};const _0x1bd291=_0x498cae[a30_0x4e75('0x9')](_0x20a55d,_0x2efbef);return _0x1bd291;}}exports[a30_0x4e75('0x6')]=LocationPointsModel;