var a210_0x1775=['defineProperty','__esModule','sequelize','basicField','default','INTEGER','usersModelName','assign'];(function(_0x520022,_0x4136a3){var _0x4a92eb=function(_0x11e60d){while(--_0x11e60d){_0x520022['push'](_0x520022['shift']());}};_0x4a92eb(++_0x4136a3);}(a210_0x1775,0xd0));var a210_0x183c=function(_0x50e73b,_0x746770){_0x50e73b=_0x50e73b-0x0;var _0x3b6ec2=a210_0x1775[_0x50e73b];return _0x3b6ec2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5e8127){return _0x5e8127&&_0x5e8127['__esModule']?_0x5e8127:{'default':_0x5e8127};};Object[a210_0x183c('0x0')](exports,a210_0x183c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a210_0x183c('0x2')));class ModelBase{constructor(_0x50ba50){this[a210_0x183c('0x3')]={};this[a210_0x183c('0x3')]={'id':{'type':sequelize_1[a210_0x183c('0x4')][a210_0x183c('0x5')],'primaryKey':!![],'autoIncrement':!![]},'created_by_user_id':{'type':sequelize_1[a210_0x183c('0x4')]['INTEGER'],'references':{'model':_0x50ba50[a210_0x183c('0x6')],'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a210_0x183c('0x4')][a210_0x183c('0x5')],'references':{'model':_0x50ba50[a210_0x183c('0x6')],'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a210_0x183c('0x4')][a210_0x183c('0x5')],'references':{'model':_0x50ba50[a210_0x183c('0x6')],'key':'id'}}};}['getEntity'](_0x320b32,_0x59901b,_0x2df88d){const _0x42676d={};Object[a210_0x183c('0x7')](_0x42676d,this[a210_0x183c('0x3')],_0x2df88d);return _0x320b32['define'](_0x59901b,_0x42676d,{'paranoid':!![],'underscored':!![]});}}exports['default']=ModelBase;