var a166_0xe7cb=['UUIDV4','STRING','DATE','import','__importDefault','sequelize','default','INTEGER'];(function(_0x4bdea2,_0x50e277){var _0x4ea33d=function(_0x55b758){while(--_0x55b758){_0x4bdea2['push'](_0x4bdea2['shift']());}};_0x4ea33d(++_0x50e277);}(a166_0xe7cb,0x14c));var a166_0x3cae=function(_0xef448d,_0x2fbfc4){_0xef448d=_0xef448d-0x0;var _0x9aa0ae=a166_0xe7cb[_0xef448d];return _0x9aa0ae;};'use strict';var __importDefault=this&&this[a166_0x3cae('0x0')]||function(_0x21a4c4){return _0x21a4c4&&_0x21a4c4['__esModule']?_0x21a4c4:{'default':_0x21a4c4};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a166_0x3cae('0x1')));class PlayerDevicesModel{constructor(_0x3e5121,_0x4049e7,_0x5d767f,_0x5a4d43){const _0x2391db=function(_0x3e5121,_0x4d57fe){const _0x2391db=_0x3e5121['define'](_0x4049e7,{'id':{'type':sequelize_1[a166_0x3cae('0x2')][a166_0x3cae('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a166_0x3cae('0x2')]['UUID'],'defaultValue':sequelize_1[a166_0x3cae('0x2')][a166_0x3cae('0x4')]},'device_id':{'type':_0x4d57fe[a166_0x3cae('0x3')],'references':{'model':_0x5d767f,'key':'id'}},'player_id':{'type':_0x4d57fe[a166_0x3cae('0x3')],'references':{'model':_0x5a4d43,'key':'id'}},'playing_item':{'type':sequelize_1[a166_0x3cae('0x2')]['STRING']},'playlist':{'type':sequelize_1[a166_0x3cae('0x2')][a166_0x3cae('0x5')]},'status':{'type':sequelize_1[a166_0x3cae('0x2')][a166_0x3cae('0x3')]},'reported_at':{'type':_0x4d57fe['DATE'],'allowNull':![]},'created_at':{'type':_0x4d57fe['DATE'],'allowNull':![]},'updated_at':_0x4d57fe[a166_0x3cae('0x6')],'deleted_at':_0x4d57fe[a166_0x3cae('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x2391db;};const _0x3a5b28=_0x3e5121[a166_0x3cae('0x7')](_0x4049e7,_0x2391db);return _0x3a5b28;}}exports[a166_0x3cae('0x2')]=PlayerDevicesModel;