var a91_0x3a19=['import','__importDefault','__esModule','defineProperty','sequelize','define','UUID','UUIDV4','default','DOUBLE','DATE'];(function(_0x16ea7d,_0x360af0){var _0x4adaa4=function(_0x4c4ef9){while(--_0x4c4ef9){_0x16ea7d['push'](_0x16ea7d['shift']());}};_0x4adaa4(++_0x360af0);}(a91_0x3a19,0xdd));var a91_0x5917=function(_0x36cc6e,_0x509ed3){_0x36cc6e=_0x36cc6e-0x0;var _0x2b416f=a91_0x3a19[_0x36cc6e];return _0x2b416f;};'use strict';var __importDefault=this&&this[a91_0x5917('0x0')]||function(_0x21eb7a){return _0x21eb7a&&_0x21eb7a[a91_0x5917('0x1')]?_0x21eb7a:{'default':_0x21eb7a};};Object[a91_0x5917('0x2')](exports,a91_0x5917('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a91_0x5917('0x3')));class LocationPointsModel{constructor(_0x2367ea,_0x5cc1f9,_0x584a17){const _0x21a4cc=function(_0x2367ea,_0x2c3b92){const _0x21a4cc=_0x2367ea[a91_0x5917('0x4')](_0x5cc1f9,{'id':{'type':_0x2c3b92[a91_0x5917('0x5')],'primaryKey':!![],'defaultValue':_0x2c3b92[a91_0x5917('0x6')]},'device_id':{'type':_0x2c3b92['INTEGER'],'references':{'model':_0x584a17,'key':'id'}},'lat':{'type':sequelize_1[a91_0x5917('0x7')][a91_0x5917('0x8')]},'lon':{'type':sequelize_1[a91_0x5917('0x7')][a91_0x5917('0x8')]},'alt':{'type':sequelize_1[a91_0x5917('0x7')][a91_0x5917('0x8')]},'hdop':{'type':sequelize_1[a91_0x5917('0x7')]['DOUBLE']},'pdop':{'type':sequelize_1['default'][a91_0x5917('0x8')]},'vdop':{'type':sequelize_1[a91_0x5917('0x7')][a91_0x5917('0x8')]},'tracked_at':_0x2c3b92[a91_0x5917('0x9')],'created_at':{'type':_0x2c3b92[a91_0x5917('0x9')],'allowNull':![]},'updated_at':_0x2c3b92[a91_0x5917('0x9')],'deleted_at':_0x2c3b92['DATE']},{'paranoid':!![],'underscored':!![]});return _0x21a4cc;};const _0x4865a8=_0x2367ea[a91_0x5917('0xa')](_0x5cc1f9,_0x21a4cc);return _0x4865a8;}}exports[a91_0x5917('0x7')]=LocationPointsModel;