var a16_0x3e9e=['bind','sync','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','INTEGER','productsModel','activitiesModel','getEntity','associate','belongsTo','product_id','activity_id'];(function(_0x33e1ce,_0x313a4e){var _0x1dd3dc=function(_0x2f9453){while(--_0x2f9453){_0x33e1ce['push'](_0x33e1ce['shift']());}};_0x1dd3dc(++_0x313a4e);}(a16_0x3e9e,0xf2));var a16_0xe30e=function(_0x16a30f,_0x1065c7){_0x16a30f=_0x16a30f-0x0;var _0x33fe66=a16_0x3e9e[_0x16a30f];return _0x33fe66;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x428ac5){return _0x428ac5&&_0x428ac5[a16_0xe30e('0x0')]?_0x428ac5:{'default':_0x428ac5};};Object[a16_0xe30e('0x1')](exports,a16_0xe30e('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a16_0xe30e('0x2')));const model_base_1=__importDefault(require(a16_0xe30e('0x3')));class ActivityProductsModel extends model_base_1['default']{constructor(_0x4556b2,_0x175978,_0x292b2d){super(_0x292b2d);const _0x130afb=function(_0x4556b2){const _0x4d0b98={'product_id':{'type':sequelize_1[a16_0xe30e('0x4')][a16_0xe30e('0x5')],'references':{'model':_0x292b2d[a16_0xe30e('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1[a16_0xe30e('0x4')]['INTEGER'],'references':{'model':_0x292b2d[a16_0xe30e('0x7')],'key':'id'}}};const _0x130afb=this[a16_0xe30e('0x8')](_0x4556b2,_0x175978,_0x4d0b98);_0x130afb[a16_0xe30e('0x9')]=function(_0x292b2d){_0x130afb[a16_0xe30e('0xa')](_0x292b2d[a16_0xe30e('0x6')],{'foreignKey':a16_0xe30e('0xb')});_0x130afb[a16_0xe30e('0xa')](_0x292b2d[a16_0xe30e('0x7')],{'foreignKey':a16_0xe30e('0xc')});};return _0x130afb;}[a16_0xe30e('0xd')](this);const _0x41b30c=_0x4556b2['import'](_0x175978,_0x130afb);_0x41b30c[a16_0xe30e('0xe')]()['then'](()=>{_0x41b30c['count']()['then'](_0x79621a=>{if(_0x79621a==0x0){}});});return _0x41b30c;}}exports[a16_0xe30e('0x4')]=ActivityProductsModel;