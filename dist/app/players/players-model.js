var a73_0x5e22=['INTEGER','default','STRING','DATE','__importDefault','__esModule','defineProperty','sequelize','define'];(function(_0x173818,_0xd2c773){var _0x4d3f61=function(_0x4665e4){while(--_0x4665e4){_0x173818['push'](_0x173818['shift']());}};_0x4d3f61(++_0xd2c773);}(a73_0x5e22,0xb8));var a73_0x2f43=function(_0x2dc084,_0x502ec){_0x2dc084=_0x2dc084-0x0;var _0x2e10de=a73_0x5e22[_0x2dc084];return _0x2e10de;};'use strict';var __importDefault=this&&this[a73_0x2f43('0x0')]||function(_0x2f4a55){return _0x2f4a55&&_0x2f4a55[a73_0x2f43('0x1')]?_0x2f4a55:{'default':_0x2f4a55};};Object[a73_0x2f43('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a73_0x2f43('0x3')));class PlayersModel{constructor(_0x54eb7e,_0x591f15,_0x48ce34){const _0x49f933=function(_0x54eb7e,_0x287a46){const _0x49f933=_0x54eb7e[a73_0x2f43('0x4')](_0x591f15,{'id':{'type':sequelize_1['default'][a73_0x2f43('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a73_0x2f43('0x6')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'user_id':{'type':_0x287a46[a73_0x2f43('0x5')],'references':{'model':_0x48ce34,'key':'id'}},'title':{'type':sequelize_1['default'][a73_0x2f43('0x7')]},'short_desc':{'type':sequelize_1[a73_0x2f43('0x6')][a73_0x2f43('0x7')]},'thumb':{'type':sequelize_1[a73_0x2f43('0x6')][a73_0x2f43('0x7')]},'created_at':{'type':_0x287a46['DATE'],'allowNull':![]},'updated_at':_0x287a46[a73_0x2f43('0x8')],'deleted_at':_0x287a46[a73_0x2f43('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x49f933;};const _0x59cc6f=_0x54eb7e['import'](_0x591f15,_0x49f933);return _0x59cc6f;}}exports[a73_0x2f43('0x6')]=PlayersModel;