var a13_0x145e=['../../infrastructure/model-base','default','INTEGER','associate','belongsTo','product_id','activity_id','bind','sync','then','__importDefault','defineProperty','sequelize'];(function(_0x20f2c1,_0x3ade95){var _0x4813b6=function(_0x503f1f){while(--_0x503f1f){_0x20f2c1['push'](_0x20f2c1['shift']());}};_0x4813b6(++_0x3ade95);}(a13_0x145e,0x135));var a13_0x4f4f=function(_0xe8f439,_0x139d9b){_0xe8f439=_0xe8f439-0x0;var _0x54429d=a13_0x145e[_0xe8f439];return _0x54429d;};'use strict';var __importDefault=this&&this[a13_0x4f4f('0x0')]||function(_0x359c75){return _0x359c75&&_0x359c75['__esModule']?_0x359c75:{'default':_0x359c75};};Object[a13_0x4f4f('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a13_0x4f4f('0x2')));const model_base_1=__importDefault(require(a13_0x4f4f('0x3')));class ActivityProductsModel extends model_base_1[a13_0x4f4f('0x4')]{constructor(_0x5c6a75,_0x5a31f0,_0x58692d){super(_0x58692d);const _0x10bfff=function(_0x5c6a75){const _0xf85c06={'product_id':{'type':sequelize_1[a13_0x4f4f('0x4')][a13_0x4f4f('0x5')],'references':{'model':_0x58692d['productsModel'],'key':'id'}},'activity_id':{'type':sequelize_1[a13_0x4f4f('0x4')]['INTEGER'],'references':{'model':_0x58692d['activitiesModel'],'key':'id'}}};const _0x10bfff=this['getEntity'](_0x5c6a75,_0x5a31f0,_0xf85c06);_0x10bfff[a13_0x4f4f('0x6')]=function(_0x58692d){_0x10bfff[a13_0x4f4f('0x7')](_0x58692d['productsModel'],{'foreignKey':a13_0x4f4f('0x8')});_0x10bfff[a13_0x4f4f('0x7')](_0x58692d['activitiesModel'],{'foreignKey':a13_0x4f4f('0x9')});};return _0x10bfff;}[a13_0x4f4f('0xa')](this);const _0x1ae137=_0x5c6a75['import'](_0x5a31f0,_0x10bfff);_0x1ae137[a13_0x4f4f('0xb')]()[a13_0x4f4f('0xc')](()=>{_0x1ae137['count']()[a13_0x4f4f('0xc')](_0x37cabd=>{if(_0x37cabd==0x0){}});});return _0x1ae137;}}exports['default']=ActivityProductsModel;