var a31_0x13ca=['INTEGER','activitiesModel','usersModel','getEntity','bind','import','sync','count','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default'];(function(_0x5c1327,_0x137811){var _0x39732b=function(_0x5a194f){while(--_0x5a194f){_0x5c1327['push'](_0x5c1327['shift']());}};_0x39732b(++_0x137811);}(a31_0x13ca,0x7d));var a31_0x1020=function(_0x53d3ba,_0x14ca7a){_0x53d3ba=_0x53d3ba-0x0;var _0x1a691f=a31_0x13ca[_0x53d3ba];return _0x1a691f;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a31_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a31_0x1020('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a31_0x1020('0x2')));const model_base_1=__importDefault(require(a31_0x1020('0x3')));class ActivityUsersModel extends model_base_1[a31_0x1020('0x4')]{constructor(_0x3aff67,_0x2498af,_0x1c61ef){super(_0x1c61ef);const _0x1b7110=function(_0x3aff67){const _0x4b2521={'activity_id':{'type':sequelize_1[a31_0x1020('0x4')][a31_0x1020('0x5')],'references':{'model':_0x1c61ef[a31_0x1020('0x6')],'key':'id'}},'user_id':{'type':sequelize_1[a31_0x1020('0x4')]['INTEGER'],'references':{'model':_0x1c61ef[a31_0x1020('0x7')],'key':'id'}},'is_private':{'type':sequelize_1[a31_0x1020('0x4')]['BOOLEAN'],'allowNull':![],'defaultValue':!![]}};const _0x1b7110=this[a31_0x1020('0x8')](_0x3aff67,_0x2498af,_0x4b2521);_0x1b7110['associate']=function(_0x1c61ef){};return _0x1b7110;}[a31_0x1020('0x9')](this);const _0x4ffe20=_0x3aff67[a31_0x1020('0xa')](_0x2498af,_0x1b7110);_0x4ffe20[a31_0x1020('0xb')]()['then'](()=>{_0x4ffe20[a31_0x1020('0xc')]()['then'](_0x567139=>{if(_0x567139==0x0){}});});return _0x4ffe20;}}exports[a31_0x1020('0x4')]=ActivityUsersModel;