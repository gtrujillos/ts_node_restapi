var a210_0x19aa=['default','usersModelName','getEntity','assign','define','__importDefault','__esModule','defineProperty','sequelize','basicField','INTEGER'];(function(_0x2bf972,_0xf19cc3){var _0x3277f9=function(_0x46d623){while(--_0x46d623){_0x2bf972['push'](_0x2bf972['shift']());}};_0x3277f9(++_0xf19cc3);}(a210_0x19aa,0x68));var a210_0x3c1a=function(_0x2b187b,_0x2eed08){_0x2b187b=_0x2b187b-0x0;var _0x41bfdc=a210_0x19aa[_0x2b187b];return _0x41bfdc;};'use strict';var __importDefault=this&&this[a210_0x3c1a('0x0')]||function(_0x5c5380){return _0x5c5380&&_0x5c5380[a210_0x3c1a('0x1')]?_0x5c5380:{'default':_0x5c5380};};Object[a210_0x3c1a('0x2')](exports,a210_0x3c1a('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a210_0x3c1a('0x3')));class ModelBase{constructor(_0x4ff65a){this[a210_0x3c1a('0x4')]={};this[a210_0x3c1a('0x4')]={'id':{'type':sequelize_1['default'][a210_0x3c1a('0x5')],'primaryKey':!![],'autoIncrement':!![]},'created_by_user_id':{'type':sequelize_1[a210_0x3c1a('0x6')]['INTEGER'],'references':{'model':_0x4ff65a[a210_0x3c1a('0x7')],'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a210_0x3c1a('0x6')][a210_0x3c1a('0x5')],'references':{'model':_0x4ff65a[a210_0x3c1a('0x7')],'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a210_0x3c1a('0x6')][a210_0x3c1a('0x5')],'references':{'model':_0x4ff65a[a210_0x3c1a('0x7')],'key':'id'}}};}[a210_0x3c1a('0x8')](_0x33ce03,_0x1a0a56,_0x333e51){const _0x20e253={};Object[a210_0x3c1a('0x9')](_0x20e253,this[a210_0x3c1a('0x4')],_0x333e51);return _0x33ce03[a210_0x3c1a('0xa')](_0x1a0a56,_0x20e253,{'paranoid':!![],'underscored':!![]});}}exports['default']=ModelBase;