var a104_0x4684=['filesModel','belongsTo','product_id','bind','sync','then','count','__importDefault','defineProperty','__esModule','sequelize','../../infrastructure/model-base','default','INTEGER','productsModel','getEntity'];(function(_0x5ca094,_0x244fcd){var _0x415baa=function(_0x1e4f0c){while(--_0x1e4f0c){_0x5ca094['push'](_0x5ca094['shift']());}};_0x415baa(++_0x244fcd);}(a104_0x4684,0x97));var a104_0x2082=function(_0x26df25,_0x80c9d){_0x26df25=_0x26df25-0x0;var _0x4e37e4=a104_0x4684[_0x26df25];return _0x4e37e4;};'use strict';var __importDefault=this&&this[a104_0x2082('0x0')]||function(_0x42e7fb){return _0x42e7fb&&_0x42e7fb['__esModule']?_0x42e7fb:{'default':_0x42e7fb};};Object[a104_0x2082('0x1')](exports,a104_0x2082('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a104_0x2082('0x3')));const model_base_1=__importDefault(require(a104_0x2082('0x4')));class ProductFilesModel extends model_base_1[a104_0x2082('0x5')]{constructor(_0x3c2857,_0x51c069,_0x4fb1aa){super(_0x4fb1aa);const _0x44818c=function(_0x3c2857){const _0x552d22={'file_id':{'type':sequelize_1[a104_0x2082('0x5')][a104_0x2082('0x6')],'references':{'model':_0x4fb1aa['filesModel'],'key':'id'}},'product_id':{'type':sequelize_1[a104_0x2082('0x5')]['INTEGER'],'references':{'model':_0x4fb1aa[a104_0x2082('0x7')],'key':'id'}}};const _0x44818c=this[a104_0x2082('0x8')](_0x3c2857,_0x51c069,_0x552d22);_0x44818c['associate']=function(_0x4fb1aa){_0x44818c['belongsTo'](_0x4fb1aa[a104_0x2082('0x9')],{'foreignKey':'file_id'});_0x44818c[a104_0x2082('0xa')](_0x4fb1aa[a104_0x2082('0x7')],{'foreignKey':a104_0x2082('0xb')});};return _0x44818c;}[a104_0x2082('0xc')](this);const _0x2305d6=_0x3c2857['import'](_0x51c069,_0x44818c);_0x2305d6[a104_0x2082('0xd')]()[a104_0x2082('0xe')](()=>{_0x2305d6[a104_0x2082('0xf')]()[a104_0x2082('0xe')](_0x37ed1e=>{if(_0x37ed1e==0x0){}});});return _0x2305d6;}}exports[a104_0x2082('0x5')]=ProductFilesModel;