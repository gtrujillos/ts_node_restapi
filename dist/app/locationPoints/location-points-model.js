var a91_0x1c13=['UUID','UUIDV4','INTEGER','default','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define'];(function(_0x2f44a4,_0xfa558b){var _0x5290f0=function(_0xe65362){while(--_0xe65362){_0x2f44a4['push'](_0x2f44a4['shift']());}};_0x5290f0(++_0xfa558b);}(a91_0x1c13,0x11b));var a91_0x36ff=function(_0x40f17f,_0x53e585){_0x40f17f=_0x40f17f-0x0;var _0x3b3208=a91_0x1c13[_0x40f17f];return _0x3b3208;};'use strict';var __importDefault=this&&this[a91_0x36ff('0x0')]||function(_0x2d0160){return _0x2d0160&&_0x2d0160[a91_0x36ff('0x1')]?_0x2d0160:{'default':_0x2d0160};};Object[a91_0x36ff('0x2')](exports,a91_0x36ff('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a91_0x36ff('0x3')));class LocationPointsModel{constructor(_0x231445,_0x1ebb63,_0x53bd03){const _0x4b8282=function(_0x231445,_0x4bfb6a){const _0x4b8282=_0x231445[a91_0x36ff('0x4')](_0x1ebb63,{'id':{'type':_0x4bfb6a[a91_0x36ff('0x5')],'primaryKey':!![],'defaultValue':_0x4bfb6a[a91_0x36ff('0x6')]},'device_id':{'type':_0x4bfb6a[a91_0x36ff('0x7')],'references':{'model':_0x53bd03,'key':'id'}},'lat':{'type':sequelize_1[a91_0x36ff('0x8')][a91_0x36ff('0x9')]},'lon':{'type':sequelize_1[a91_0x36ff('0x8')]['DOUBLE']},'alt':{'type':sequelize_1[a91_0x36ff('0x8')][a91_0x36ff('0x9')]},'hdop':{'type':sequelize_1[a91_0x36ff('0x8')][a91_0x36ff('0x9')]},'pdop':{'type':sequelize_1['default'][a91_0x36ff('0x9')]},'vdop':{'type':sequelize_1[a91_0x36ff('0x8')]['DOUBLE']},'tracked_at':_0x4bfb6a[a91_0x36ff('0xa')],'created_at':{'type':_0x4bfb6a[a91_0x36ff('0xa')],'allowNull':![]},'updated_at':_0x4bfb6a[a91_0x36ff('0xa')],'deleted_at':_0x4bfb6a['DATE']},{'paranoid':!![],'underscored':!![]});return _0x4b8282;};const _0x7fa493=_0x231445[a91_0x36ff('0xb')](_0x1ebb63,_0x4b8282);return _0x7fa493;}}exports[a91_0x36ff('0x8')]=LocationPointsModel;