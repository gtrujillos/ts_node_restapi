var a210_0x1955=['default','INTEGER','usersModelName','getEntity','define','__importDefault','__esModule','defineProperty','sequelize','basicField'];(function(_0xe6f70d,_0x1c391b){var _0x2488b4=function(_0x4ea687){while(--_0x4ea687){_0xe6f70d['push'](_0xe6f70d['shift']());}};_0x2488b4(++_0x1c391b);}(a210_0x1955,0x181));var a210_0x27b9=function(_0x243194,_0x2bc341){_0x243194=_0x243194-0x0;var _0x9de5ef=a210_0x1955[_0x243194];return _0x9de5ef;};'use strict';var __importDefault=this&&this[a210_0x27b9('0x0')]||function(_0x11ab37){return _0x11ab37&&_0x11ab37[a210_0x27b9('0x1')]?_0x11ab37:{'default':_0x11ab37};};Object[a210_0x27b9('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a210_0x27b9('0x3')));class ModelBase{constructor(_0x534870){this['basicField']={};this[a210_0x27b9('0x4')]={'id':{'type':sequelize_1[a210_0x27b9('0x5')][a210_0x27b9('0x6')],'primaryKey':!![],'autoIncrement':!![]},'created_by_user_id':{'type':sequelize_1[a210_0x27b9('0x5')][a210_0x27b9('0x6')],'references':{'model':_0x534870['usersModelName'],'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a210_0x27b9('0x5')][a210_0x27b9('0x6')],'references':{'model':_0x534870[a210_0x27b9('0x7')],'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a210_0x27b9('0x5')][a210_0x27b9('0x6')],'references':{'model':_0x534870[a210_0x27b9('0x7')],'key':'id'}}};}[a210_0x27b9('0x8')](_0x2fb755,_0x321ecd,_0x2f4be1){const _0x3fda31={};Object['assign'](_0x3fda31,this[a210_0x27b9('0x4')],_0x2f4be1);return _0x2fb755[a210_0x27b9('0x9')](_0x321ecd,_0x3fda31,{'paranoid':!![],'underscored':!![]});}}exports[a210_0x27b9('0x5')]=ModelBase;