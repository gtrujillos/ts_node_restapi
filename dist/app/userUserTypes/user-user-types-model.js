var a182_0x40e2=['sequelize','default','INTEGER','UUID','UUIDV4','DATE','import','__importDefault','__esModule','defineProperty'];(function(_0x542eff,_0x3d8b28){var _0x2248fb=function(_0x531a98){while(--_0x531a98){_0x542eff['push'](_0x542eff['shift']());}};_0x2248fb(++_0x3d8b28);}(a182_0x40e2,0xcf));var a182_0x32d4=function(_0x58d44d,_0x49597f){_0x58d44d=_0x58d44d-0x0;var _0x1fe42c=a182_0x40e2[_0x58d44d];return _0x1fe42c;};'use strict';var __importDefault=this&&this[a182_0x32d4('0x0')]||function(_0x77fe73){return _0x77fe73&&_0x77fe73[a182_0x32d4('0x1')]?_0x77fe73:{'default':_0x77fe73};};Object[a182_0x32d4('0x2')](exports,a182_0x32d4('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a182_0x32d4('0x3')));class UserUserTypesModel{constructor(_0x3c7c86,_0x431561,_0xf34ba5,_0x7e1e5b){const _0x41066f=function(_0x3c7c86,_0x38aaab){const _0x41066f=_0x3c7c86['define'](_0x431561,{'id':{'type':sequelize_1[a182_0x32d4('0x4')][a182_0x32d4('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a182_0x32d4('0x4')][a182_0x32d4('0x6')],'defaultValue':sequelize_1[a182_0x32d4('0x4')][a182_0x32d4('0x7')]},'user_id':{'type':_0x38aaab[a182_0x32d4('0x5')],'references':{'model':_0xf34ba5,'key':'id'}},'user_type_id':{'type':_0x38aaab['INTEGER'],'references':{'model':_0x7e1e5b,'key':'id'}},'created_at':{'type':_0x38aaab[a182_0x32d4('0x8')],'allowNull':![]},'updated_at':_0x38aaab[a182_0x32d4('0x8')],'deleted_at':_0x38aaab[a182_0x32d4('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x41066f;};const _0x4bed10=_0x3c7c86[a182_0x32d4('0x9')](_0x431561,_0x41066f);return _0x4bed10;}}exports['default']=UserUserTypesModel;