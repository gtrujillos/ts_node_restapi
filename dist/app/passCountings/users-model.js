var a40_0x56fd=['import','__importDefault','__esModule','defineProperty','sequelize','define','UUIDV4','default','STRING','INTEGER','DATE'];(function(_0x4425a8,_0x53192f){var _0x3b4689=function(_0x4a816d){while(--_0x4a816d){_0x4425a8['push'](_0x4425a8['shift']());}};_0x3b4689(++_0x53192f);}(a40_0x56fd,0xe8));var a40_0x5f43=function(_0x24ec5d,_0xff77d7){_0x24ec5d=_0x24ec5d-0x0;var _0x1187eb=a40_0x56fd[_0x24ec5d];return _0x1187eb;};'use strict';var __importDefault=this&&this[a40_0x5f43('0x0')]||function(_0x4c07af){return _0x4c07af&&_0x4c07af[a40_0x5f43('0x1')]?_0x4c07af:{'default':_0x4c07af};};Object[a40_0x5f43('0x2')](exports,a40_0x5f43('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a40_0x5f43('0x3')));class UserModel{constructor(_0x572114,_0xe7ec7d){const _0x4dd10e=function(_0x572114,_0x5ceba3){const _0x4dd10e=_0x572114[a40_0x5f43('0x4')](_0xe7ec7d,{'id':{'type':_0x5ceba3['UUID'],'primaryKey':!![],'defaultValue':_0x5ceba3[a40_0x5f43('0x5')]},'first_name':{'type':sequelize_1['default']['STRING']},'last_name':{'type':sequelize_1[a40_0x5f43('0x6')][a40_0x5f43('0x7')]},'email':{'type':sequelize_1['default'][a40_0x5f43('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a40_0x5f43('0x6')][a40_0x5f43('0x7')],'unique':!![]},'username':{'type':sequelize_1[a40_0x5f43('0x6')][a40_0x5f43('0x7')],'unique':!![]},'password':{'type':sequelize_1[a40_0x5f43('0x6')][a40_0x5f43('0x7')]},'status':{'type':sequelize_1[a40_0x5f43('0x6')][a40_0x5f43('0x8')],'defaultValue':0x0},'created_at':{'type':_0x5ceba3[a40_0x5f43('0x9')],'allowNull':![]},'updated_at':_0x5ceba3[a40_0x5f43('0x9')],'deleted_at':_0x5ceba3[a40_0x5f43('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x4dd10e;};const _0x292bcb=_0x572114[a40_0x5f43('0xa')](_0xe7ec7d,_0x4dd10e);return _0x292bcb;}}exports[a40_0x5f43('0x6')]=UserModel;