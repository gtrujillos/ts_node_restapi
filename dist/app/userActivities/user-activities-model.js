var a219_0x1c8d=['__esModule','defineProperty','../../infrastructure/model-base','default','INTEGER','projectsModel','BOOLEAN','getEntity','associate','import','sync','then','count','__importDefault'];(function(_0x3eaa3f,_0x23dd71){var _0x462fdb=function(_0x33c4bf){while(--_0x33c4bf){_0x3eaa3f['push'](_0x3eaa3f['shift']());}};_0x462fdb(++_0x23dd71);}(a219_0x1c8d,0x117));var a219_0x2b03=function(_0x31f37e,_0x3d6e69){_0x31f37e=_0x31f37e-0x0;var _0x1f47e1=a219_0x1c8d[_0x31f37e];return _0x1f47e1;};'use strict';var __importDefault=this&&this[a219_0x2b03('0x0')]||function(_0x6e8bcb){return _0x6e8bcb&&_0x6e8bcb[a219_0x2b03('0x1')]?_0x6e8bcb:{'default':_0x6e8bcb};};Object[a219_0x2b03('0x2')](exports,a219_0x2b03('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a219_0x2b03('0x3')));class UserActivitiesModel extends model_base_1[a219_0x2b03('0x4')]{constructor(_0x2cec43,_0x1b9ae2,_0x371ad1){super(_0x371ad1);const _0x14b9d5=function(_0x2cec43){const _0x481085={'user_id':{'type':sequelize_1[a219_0x2b03('0x4')][a219_0x2b03('0x5')],'references':{'model':_0x371ad1[a219_0x2b03('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1['default'][a219_0x2b03('0x5')],'references':{'model':_0x371ad1['activitiesModel'],'key':'id'}},'is_private':{'type':sequelize_1[a219_0x2b03('0x4')][a219_0x2b03('0x7')],'allowNull':![],'defaultValue':!![]}};const _0x14b9d5=this[a219_0x2b03('0x8')](_0x2cec43,_0x1b9ae2,_0x481085);_0x14b9d5[a219_0x2b03('0x9')]=function(_0x371ad1){};return _0x14b9d5;}['bind'](this);const _0x1c09da=_0x2cec43[a219_0x2b03('0xa')](_0x1b9ae2,_0x14b9d5);_0x1c09da[a219_0x2b03('0xb')]()[a219_0x2b03('0xc')](()=>{_0x1c09da[a219_0x2b03('0xd')]()[a219_0x2b03('0xc')](_0x4927fc=>{if(_0x4927fc==0x0){}});});return _0x1c09da;}}exports[a219_0x2b03('0x4')]=UserActivitiesModel;