var a17_0x3e75=['__importDefault','__esModule','defineProperty','sequelize','default','INTEGER','DATE'];(function(_0x554e89,_0x1850df){var _0x440619=function(_0x1c6c5b){while(--_0x1c6c5b){_0x554e89['push'](_0x554e89['shift']());}};_0x440619(++_0x1850df);}(a17_0x3e75,0x1c0));var a17_0x5acc=function(_0x330174,_0x4a6175){_0x330174=_0x330174-0x0;var _0x2e3243=a17_0x3e75[_0x330174];return _0x2e3243;};'use strict';var __importDefault=this&&this[a17_0x5acc('0x0')]||function(_0x33d863){return _0x33d863&&_0x33d863[a17_0x5acc('0x1')]?_0x33d863:{'default':_0x33d863};};Object[a17_0x5acc('0x2')](exports,a17_0x5acc('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a17_0x5acc('0x3')));class CompaniesModel{constructor(_0x510d55,_0x4d6fc8,_0x493e51){const _0x5cea88=function(_0x510d55){const _0x5cea88=_0x510d55['define'](_0x4d6fc8,{'id':{'type':sequelize_1[a17_0x5acc('0x4')][a17_0x5acc('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a17_0x5acc('0x4')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'name':{'type':sequelize_1[a17_0x5acc('0x4')]['STRING']},'created_by_user_id':{'type':sequelize_1[a17_0x5acc('0x4')]['INTEGER'],'references':{'model':_0x493e51,'key':'id'}},'updated_by_user_id':{'type':sequelize_1['default'][a17_0x5acc('0x5')],'references':{'model':_0x493e51,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a17_0x5acc('0x4')][a17_0x5acc('0x5')],'references':{'model':_0x493e51,'key':'id'}},'created_at':{'type':sequelize_1[a17_0x5acc('0x4')][a17_0x5acc('0x6')],'allowNull':![]},'updated_at':sequelize_1[a17_0x5acc('0x4')][a17_0x5acc('0x6')],'deleted_at':sequelize_1['default'][a17_0x5acc('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x5cea88;};const _0x1b4eb4=_0x510d55['import'](_0x4d6fc8,_0x5cea88);return _0x1b4eb4;}}exports['default']=CompaniesModel;