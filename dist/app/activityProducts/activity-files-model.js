var a13_0x434b=['productsModel','INTEGER','activitiesModel','getEntity','belongsTo','product_id','bind','then','__importDefault','defineProperty','__esModule','sequelize','../../infrastructure/model-base','default'];(function(_0x3b882e,_0x333a6c){var _0x115a9e=function(_0x3a115d){while(--_0x3a115d){_0x3b882e['push'](_0x3b882e['shift']());}};_0x115a9e(++_0x333a6c);}(a13_0x434b,0x1c8));var a13_0x195d=function(_0x24af33,_0x5b9d3f){_0x24af33=_0x24af33-0x0;var _0x347e5a=a13_0x434b[_0x24af33];return _0x347e5a;};'use strict';var __importDefault=this&&this[a13_0x195d('0x0')]||function(_0x33d43e){return _0x33d43e&&_0x33d43e['__esModule']?_0x33d43e:{'default':_0x33d43e};};Object[a13_0x195d('0x1')](exports,a13_0x195d('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a13_0x195d('0x3')));const model_base_1=__importDefault(require(a13_0x195d('0x4')));class ActivityProductsModel extends model_base_1[a13_0x195d('0x5')]{constructor(_0x269464,_0x2b757b,_0x1b6ba1){super(_0x1b6ba1);const _0x54b047=function(_0x269464){const _0x1fdc84={'product_id':{'type':sequelize_1[a13_0x195d('0x5')]['INTEGER'],'references':{'model':_0x1b6ba1[a13_0x195d('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1['default'][a13_0x195d('0x7')],'references':{'model':_0x1b6ba1[a13_0x195d('0x8')],'key':'id'}}};const _0x54b047=this[a13_0x195d('0x9')](_0x269464,_0x2b757b,_0x1fdc84);_0x54b047['associate']=function(_0x1b6ba1){_0x54b047[a13_0x195d('0xa')](_0x1b6ba1['productsModel'],{'foreignKey':a13_0x195d('0xb')});_0x54b047[a13_0x195d('0xa')](_0x1b6ba1[a13_0x195d('0x8')],{'foreignKey':'activity_id'});};return _0x54b047;}[a13_0x195d('0xc')](this);const _0x5baec3=_0x269464['import'](_0x2b757b,_0x54b047);_0x5baec3['sync']()[a13_0x195d('0xd')](()=>{_0x5baec3['count']()[a13_0x195d('0xd')](_0x56693a=>{if(_0x56693a==0x0){}});});return _0x5baec3;}}exports[a13_0x195d('0x5')]=ActivityProductsModel;