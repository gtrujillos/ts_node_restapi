var a29_0x1e8c=['define','UUIDV4','INTEGER','default','DOUBLE','DATE','import','__esModule','sequelize'];(function(_0x333395,_0x1cf0e9){var _0x2be569=function(_0x542fe8){while(--_0x542fe8){_0x333395['push'](_0x333395['shift']());}};_0x2be569(++_0x1cf0e9);}(a29_0x1e8c,0x193));var a29_0x3fc8=function(_0x484408,_0x1c5023){_0x484408=_0x484408-0x0;var _0x5c8749=a29_0x1e8c[_0x484408];return _0x5c8749;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1039bd){return _0x1039bd&&_0x1039bd[a29_0x3fc8('0x0')]?_0x1039bd:{'default':_0x1039bd};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a29_0x3fc8('0x1')));class LocationPointsModel{constructor(_0x44773f,_0x3311c0,_0x25415e){const _0x54e36f=function(_0x44773f,_0x1177c3){const _0x54e36f=_0x44773f[a29_0x3fc8('0x2')](_0x3311c0,{'id':{'type':_0x1177c3['UUID'],'primaryKey':!![],'defaultValue':_0x1177c3[a29_0x3fc8('0x3')]},'device_id':{'type':_0x1177c3[a29_0x3fc8('0x4')],'references':{'model':_0x25415e,'key':'id'}},'lat':{'type':sequelize_1[a29_0x3fc8('0x5')]['DOUBLE']},'lon':{'type':sequelize_1[a29_0x3fc8('0x5')][a29_0x3fc8('0x6')]},'alt':{'type':sequelize_1[a29_0x3fc8('0x5')]['DOUBLE']},'hdop':{'type':sequelize_1[a29_0x3fc8('0x5')]['DOUBLE']},'pdop':{'type':sequelize_1[a29_0x3fc8('0x5')][a29_0x3fc8('0x6')]},'vdop':{'type':sequelize_1[a29_0x3fc8('0x5')][a29_0x3fc8('0x6')]},'tracked_at':_0x1177c3['DATE'],'created_at':{'type':_0x1177c3['DATE'],'allowNull':![]},'updated_at':_0x1177c3[a29_0x3fc8('0x7')],'deleted_at':_0x1177c3[a29_0x3fc8('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x54e36f;};const _0x47794c=_0x44773f[a29_0x3fc8('0x8')](_0x3311c0,_0x54e36f);return _0x47794c;}}exports[a29_0x3fc8('0x5')]=LocationPointsModel;