var a172_0x2752=['__esModule','defineProperty','sequelize','define','INTEGER','default','UUIDV4','DATE','import'];(function(_0x1d8ffb,_0x35bb14){var _0x56bf04=function(_0x54aa9e){while(--_0x54aa9e){_0x1d8ffb['push'](_0x1d8ffb['shift']());}};_0x56bf04(++_0x35bb14);}(a172_0x2752,0x183));var a172_0x58ba=function(_0xbc0ec7,_0x4ca960){_0xbc0ec7=_0xbc0ec7-0x0;var _0x5d12a2=a172_0x2752[_0xbc0ec7];return _0x5d12a2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5b965e){return _0x5b965e&&_0x5b965e[a172_0x58ba('0x0')]?_0x5b965e:{'default':_0x5b965e};};Object[a172_0x58ba('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a172_0x58ba('0x2')));class UserCompaniesModel{constructor(_0x12defa,_0xc15614,_0xd6b458,_0x40bb69){const _0x4f58a2=function(_0x12defa,_0x1a1b48){const _0x4f58a2=_0x12defa[a172_0x58ba('0x3')](_0xc15614,{'id':{'type':sequelize_1['default'][a172_0x58ba('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a172_0x58ba('0x5')][a172_0x58ba('0x6')]},'user_id':{'type':_0x1a1b48[a172_0x58ba('0x4')],'references':{'model':_0xd6b458,'key':'id'}},'company_id':{'type':_0x1a1b48[a172_0x58ba('0x4')],'references':{'model':_0x40bb69,'key':'id'}},'created_at':{'type':_0x1a1b48[a172_0x58ba('0x7')],'allowNull':![]},'updated_at':_0x1a1b48[a172_0x58ba('0x7')],'deleted_at':_0x1a1b48[a172_0x58ba('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x4f58a2;};const _0x798cd6=_0x12defa[a172_0x58ba('0x8')](_0xc15614,_0x4f58a2);return _0x798cd6;}}exports[a172_0x58ba('0x5')]=UserCompaniesModel;