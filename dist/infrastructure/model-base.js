var a210_0xa50b=['usersModelName','assign','__importDefault','__esModule','basicField','INTEGER','default'];(function(_0x524baa,_0x3c1d99){var _0x33551c=function(_0x4b567a){while(--_0x4b567a){_0x524baa['push'](_0x524baa['shift']());}};_0x33551c(++_0x3c1d99);}(a210_0xa50b,0x19f));var a210_0x3d4b=function(_0x4e805d,_0xb7a8a4){_0x4e805d=_0x4e805d-0x0;var _0x880471=a210_0xa50b[_0x4e805d];return _0x880471;};'use strict';var __importDefault=this&&this[a210_0x3d4b('0x0')]||function(_0x33694d){return _0x33694d&&_0x33694d['__esModule']?_0x33694d:{'default':_0x33694d};};Object['defineProperty'](exports,a210_0x3d4b('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class ModelBase{constructor(_0x801e24){this[a210_0x3d4b('0x2')]={};this[a210_0x3d4b('0x2')]={'id':{'type':sequelize_1['default'][a210_0x3d4b('0x3')],'primaryKey':!![],'autoIncrement':!![]},'created_by_user_id':{'type':sequelize_1[a210_0x3d4b('0x4')]['INTEGER'],'references':{'model':_0x801e24[a210_0x3d4b('0x5')],'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a210_0x3d4b('0x4')]['INTEGER'],'references':{'model':_0x801e24[a210_0x3d4b('0x5')],'key':'id'}},'deleted_by_user_id':{'type':sequelize_1['default'][a210_0x3d4b('0x3')],'references':{'model':_0x801e24[a210_0x3d4b('0x5')],'key':'id'}}};}['getEntity'](_0x58c7f3,_0x675eb6,_0x51f4e7){const _0x3423cf={};Object[a210_0x3d4b('0x6')](_0x3423cf,this[a210_0x3d4b('0x2')],_0x51f4e7);return _0x58c7f3['define'](_0x675eb6,_0x3423cf,{'paranoid':!![],'underscored':!![]});}}exports['default']=ModelBase;