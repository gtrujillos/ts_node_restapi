var a147_0x56fb=['sync','then','count','__importDefault','__esModule','defineProperty','sequelize','default','INTEGER','projectsModel','activitiesModel','BOOLEAN','getEntity','bind'];(function(_0x33da56,_0x1f3112){var _0x5ea5b1=function(_0x40c41d){while(--_0x40c41d){_0x33da56['push'](_0x33da56['shift']());}};_0x5ea5b1(++_0x1f3112);}(a147_0x56fb,0x199));var a147_0x5901=function(_0x31611a,_0x57cf5b){_0x31611a=_0x31611a-0x0;var _0x3bd7ab=a147_0x56fb[_0x31611a];return _0x3bd7ab;};'use strict';var __importDefault=this&&this[a147_0x5901('0x0')]||function(_0x22c3cb){return _0x22c3cb&&_0x22c3cb[a147_0x5901('0x1')]?_0x22c3cb:{'default':_0x22c3cb};};Object[a147_0x5901('0x2')](exports,a147_0x5901('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a147_0x5901('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class UserActivitiesModel extends model_base_1['default']{constructor(_0xbf406e,_0x2443ea,_0x19e0e0){super(_0x19e0e0);const _0x48d464=function(_0xbf406e){const _0x4bfb2f={'user_id':{'type':sequelize_1[a147_0x5901('0x4')][a147_0x5901('0x5')],'references':{'model':_0x19e0e0[a147_0x5901('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1['default'][a147_0x5901('0x5')],'references':{'model':_0x19e0e0[a147_0x5901('0x7')],'key':'id'}},'is_private':{'type':sequelize_1[a147_0x5901('0x4')][a147_0x5901('0x8')],'allowNull':![],'defaultValue':!![]}};const _0x48d464=this[a147_0x5901('0x9')](_0xbf406e,_0x2443ea,_0x4bfb2f);_0x48d464['associate']=function(_0x19e0e0){};return _0x48d464;}[a147_0x5901('0xa')](this);const _0x51a61b=_0xbf406e['import'](_0x2443ea,_0x48d464);_0x51a61b[a147_0x5901('0xb')]()[a147_0x5901('0xc')](()=>{_0x51a61b[a147_0x5901('0xd')]()['then'](_0x385ea2=>{if(_0x385ea2==0x0){}});});return _0x51a61b;}}exports[a147_0x5901('0x4')]=UserActivitiesModel;