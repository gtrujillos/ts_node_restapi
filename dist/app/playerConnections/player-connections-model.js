var a52_0x5eae=['UUID','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER'];(function(_0x47504f,_0x555d6a){var _0xc70bb9=function(_0x5344b2){while(--_0x5344b2){_0x47504f['push'](_0x47504f['shift']());}};_0xc70bb9(++_0x555d6a);}(a52_0x5eae,0xca));var a52_0x39ba=function(_0x5e87f8,_0x5be8a2){_0x5e87f8=_0x5e87f8-0x0;var _0x8317f8=a52_0x5eae[_0x5e87f8];return _0x8317f8;};'use strict';var __importDefault=this&&this[a52_0x39ba('0x0')]||function(_0x17b6a4){return _0x17b6a4&&_0x17b6a4[a52_0x39ba('0x1')]?_0x17b6a4:{'default':_0x17b6a4};};Object[a52_0x39ba('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a52_0x39ba('0x3')));class AlarmsModel{constructor(_0x3e4834,_0xe6c2a3,_0x20e039){const _0x50a1e4=function(_0x3e4834,_0x4a2ef3){const _0x50a1e4=_0x3e4834[a52_0x39ba('0x4')](_0xe6c2a3,{'id':{'type':sequelize_1[a52_0x39ba('0x5')][a52_0x39ba('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0x39ba('0x5')][a52_0x39ba('0x7')],'defaultValue':sequelize_1['default']['UUIDV4']},'device_id':{'type':_0x4a2ef3[a52_0x39ba('0x6')],'references':{'model':_0x20e039,'key':'id'}},'lat':{'type':sequelize_1[a52_0x39ba('0x5')][a52_0x39ba('0x8')]},'lon':{'type':sequelize_1['default'][a52_0x39ba('0x8')]},'status':{'type':sequelize_1['default'][a52_0x39ba('0x6')]},'reported_at':{'type':_0x4a2ef3['DATE'],'allowNull':![]},'created_at':{'type':_0x4a2ef3[a52_0x39ba('0x9')],'allowNull':![]},'updated_at':_0x4a2ef3[a52_0x39ba('0x9')],'deleted_at':_0x4a2ef3['DATE']},{'paranoid':!![],'underscored':!![]});return _0x50a1e4;};const _0xe73da2=_0x3e4834[a52_0x39ba('0xa')](_0xe6c2a3,_0x50a1e4);return _0xe73da2;}}exports[a52_0x39ba('0x5')]=AlarmsModel;