var a101_0x511a=['DATE','import','__esModule','defineProperty','sequelize','define','UUID','UUIDV4','default','STRING'];(function(_0x4b3ac9,_0x11620d){var _0xa1bce7=function(_0x55515c){while(--_0x55515c){_0x4b3ac9['push'](_0x4b3ac9['shift']());}};_0xa1bce7(++_0x11620d);}(a101_0x511a,0xb6));var a101_0x3ac4=function(_0x3882ec,_0x26ec68){_0x3882ec=_0x3882ec-0x0;var _0x453c8b=a101_0x511a[_0x3882ec];return _0x453c8b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x21e9a1){return _0x21e9a1&&_0x21e9a1[a101_0x3ac4('0x0')]?_0x21e9a1:{'default':_0x21e9a1};};Object[a101_0x3ac4('0x1')](exports,a101_0x3ac4('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a101_0x3ac4('0x2')));class UserModel{constructor(_0x10d471,_0x4c31b1){const _0x4ac15e=function(_0x10d471,_0x487d02){const _0x4ac15e=_0x10d471[a101_0x3ac4('0x3')](_0x4c31b1,{'id':{'type':_0x487d02[a101_0x3ac4('0x4')],'primaryKey':!![],'defaultValue':_0x487d02[a101_0x3ac4('0x5')]},'first_name':{'type':sequelize_1['default']['STRING']},'last_name':{'type':sequelize_1[a101_0x3ac4('0x6')][a101_0x3ac4('0x7')]},'email':{'type':sequelize_1['default'][a101_0x3ac4('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a101_0x3ac4('0x6')]['STRING'],'unique':!![]},'username':{'type':sequelize_1['default'][a101_0x3ac4('0x7')],'unique':!![]},'password':{'type':sequelize_1[a101_0x3ac4('0x6')][a101_0x3ac4('0x7')]},'status':{'type':sequelize_1['default']['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x487d02['DATE'],'allowNull':![]},'updated_at':_0x487d02[a101_0x3ac4('0x8')],'deleted_at':_0x487d02[a101_0x3ac4('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x4ac15e;};const _0x408099=_0x10d471[a101_0x3ac4('0x9')](_0x4c31b1,_0x4ac15e);return _0x408099;}}exports[a101_0x3ac4('0x6')]=UserModel;