var a1_0x90d1=['UUIDV4','DOUBLE','INTEGER','DATE','__esModule','defineProperty','sequelize','define','default','UUID'];(function(_0x231bb0,_0x80c167){var _0xae12c7=function(_0x212448){while(--_0x212448){_0x231bb0['push'](_0x231bb0['shift']());}};_0xae12c7(++_0x80c167);}(a1_0x90d1,0xe0));var a1_0x3252=function(_0x5d61c3,_0x573b5a){_0x5d61c3=_0x5d61c3-0x0;var _0x4aacd5=a1_0x90d1[_0x5d61c3];return _0x4aacd5;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x107e91){return _0x107e91&&_0x107e91[a1_0x3252('0x0')]?_0x107e91:{'default':_0x107e91};};Object[a1_0x3252('0x1')](exports,a1_0x3252('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x3252('0x2')));class AlarmsModel{constructor(_0x13ab84,_0x1fd4a8,_0x113d73){const _0x1cd9ee=function(_0x13ab84,_0x4f0a4e){const _0x1cd9ee=_0x13ab84[a1_0x3252('0x3')](_0x1fd4a8,{'id':{'type':sequelize_1[a1_0x3252('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a1_0x3252('0x4')][a1_0x3252('0x5')],'defaultValue':sequelize_1['default'][a1_0x3252('0x6')]},'device_id':{'type':_0x4f0a4e['INTEGER'],'references':{'model':_0x113d73,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1['default'][a1_0x3252('0x7')]},'status':{'type':sequelize_1[a1_0x3252('0x4')][a1_0x3252('0x8')]},'reported_at':{'type':_0x4f0a4e['DATE'],'allowNull':![]},'created_at':{'type':_0x4f0a4e[a1_0x3252('0x9')],'allowNull':![]},'updated_at':_0x4f0a4e[a1_0x3252('0x9')],'deleted_at':_0x4f0a4e[a1_0x3252('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1cd9ee;};const _0x1e0ce3=_0x13ab84['import'](_0x1fd4a8,_0x1cd9ee);return _0x1e0ce3;}}exports[a1_0x3252('0x4')]=AlarmsModel;