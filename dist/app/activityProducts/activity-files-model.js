var a13_0x20fd=['activity_id','bind','import','sync','then','count','__importDefault','defineProperty','__esModule','sequelize','../../infrastructure/model-base','default','productsModel','INTEGER','getEntity','belongsTo','product_id','activitiesModel'];(function(_0x43bdd4,_0x21ee66){var _0x1b6504=function(_0x34a4a9){while(--_0x34a4a9){_0x43bdd4['push'](_0x43bdd4['shift']());}};_0x1b6504(++_0x21ee66);}(a13_0x20fd,0xa8));var a13_0x2627=function(_0x43f4e3,_0x799f1c){_0x43f4e3=_0x43f4e3-0x0;var _0x349106=a13_0x20fd[_0x43f4e3];return _0x349106;};'use strict';var __importDefault=this&&this[a13_0x2627('0x0')]||function(_0xa875c0){return _0xa875c0&&_0xa875c0['__esModule']?_0xa875c0:{'default':_0xa875c0};};Object[a13_0x2627('0x1')](exports,a13_0x2627('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a13_0x2627('0x3')));const model_base_1=__importDefault(require(a13_0x2627('0x4')));class ActivityProductsModel extends model_base_1['default']{constructor(_0x38b5e3,_0x8c7063,_0x35e1a9){super(_0x35e1a9);const _0xdc46c9=function(_0x38b5e3){const _0x4af239={'product_id':{'type':sequelize_1[a13_0x2627('0x5')]['INTEGER'],'references':{'model':_0x35e1a9[a13_0x2627('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1['default'][a13_0x2627('0x7')],'references':{'model':_0x35e1a9['activitiesModel'],'key':'id'}}};const _0xdc46c9=this[a13_0x2627('0x8')](_0x38b5e3,_0x8c7063,_0x4af239);_0xdc46c9['associate']=function(_0x35e1a9){_0xdc46c9[a13_0x2627('0x9')](_0x35e1a9[a13_0x2627('0x6')],{'foreignKey':a13_0x2627('0xa')});_0xdc46c9[a13_0x2627('0x9')](_0x35e1a9[a13_0x2627('0xb')],{'foreignKey':a13_0x2627('0xc')});};return _0xdc46c9;}[a13_0x2627('0xd')](this);const _0x12ec21=_0x38b5e3[a13_0x2627('0xe')](_0x8c7063,_0xdc46c9);_0x12ec21[a13_0x2627('0xf')]()[a13_0x2627('0x10')](()=>{_0x12ec21[a13_0x2627('0x11')]()['then'](_0x22d816=>{if(_0x22d816==0x0){}});});return _0x12ec21;}}exports['default']=ActivityProductsModel;