var a52_0x46bf=['UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID'];(function(_0x43d8dd,_0x482241){var _0x1c4005=function(_0x3a8358){while(--_0x3a8358){_0x43d8dd['push'](_0x43d8dd['shift']());}};_0x1c4005(++_0x482241);}(a52_0x46bf,0x1e4));var a52_0x2901=function(_0x164242,_0x2d2743){_0x164242=_0x164242-0x0;var _0x5630a6=a52_0x46bf[_0x164242];return _0x5630a6;};'use strict';var __importDefault=this&&this[a52_0x2901('0x0')]||function(_0x40c30b){return _0x40c30b&&_0x40c30b[a52_0x2901('0x1')]?_0x40c30b:{'default':_0x40c30b};};Object[a52_0x2901('0x2')](exports,a52_0x2901('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a52_0x2901('0x3')));class AlarmsModel{constructor(_0x100be2,_0x177e86,_0x555c7f){const _0x4daaa7=function(_0x100be2,_0x57eba0){const _0x4daaa7=_0x100be2[a52_0x2901('0x4')](_0x177e86,{'id':{'type':sequelize_1[a52_0x2901('0x5')][a52_0x2901('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0x2901('0x5')][a52_0x2901('0x7')],'defaultValue':sequelize_1[a52_0x2901('0x5')][a52_0x2901('0x8')]},'device_id':{'type':_0x57eba0[a52_0x2901('0x6')],'references':{'model':_0x555c7f,'key':'id'}},'lat':{'type':sequelize_1[a52_0x2901('0x5')][a52_0x2901('0x9')]},'lon':{'type':sequelize_1['default'][a52_0x2901('0x9')]},'status':{'type':sequelize_1[a52_0x2901('0x5')][a52_0x2901('0x6')]},'reported_at':{'type':_0x57eba0['DATE'],'allowNull':![]},'created_at':{'type':_0x57eba0[a52_0x2901('0xa')],'allowNull':![]},'updated_at':_0x57eba0['DATE'],'deleted_at':_0x57eba0['DATE']},{'paranoid':!![],'underscored':!![]});return _0x4daaa7;};const _0x2829df=_0x100be2[a52_0x2901('0xb')](_0x177e86,_0x4daaa7);return _0x2829df;}}exports[a52_0x2901('0x5')]=AlarmsModel;