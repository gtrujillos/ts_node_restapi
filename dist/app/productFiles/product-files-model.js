var a95_0xb3a5=['product_id','bind','import','sync','then','count','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','filesModel','INTEGER','getEntity','belongsTo','file_id','productsModel'];(function(_0x48f047,_0x4dba6d){var _0x3bc24a=function(_0x4a06c6){while(--_0x4a06c6){_0x48f047['push'](_0x48f047['shift']());}};_0x3bc24a(++_0x4dba6d);}(a95_0xb3a5,0x1af));var a95_0x77e7=function(_0x375236,_0x216ef5){_0x375236=_0x375236-0x0;var _0x52945d=a95_0xb3a5[_0x375236];return _0x52945d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x24c8f1){return _0x24c8f1&&_0x24c8f1[a95_0x77e7('0x0')]?_0x24c8f1:{'default':_0x24c8f1};};Object[a95_0x77e7('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a95_0x77e7('0x2')));const model_base_1=__importDefault(require(a95_0x77e7('0x3')));class ProductFilesModel extends model_base_1[a95_0x77e7('0x4')]{constructor(_0x3e5d6d,_0xd043c,_0x3a1519){super(_0x3a1519);const _0x364d8f=function(_0x3e5d6d){const _0x358ac4={'file_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x3a1519[a95_0x77e7('0x5')],'key':'id'}},'product_id':{'type':sequelize_1[a95_0x77e7('0x4')][a95_0x77e7('0x6')],'references':{'model':_0x3a1519['productsModel'],'key':'id'}}};const _0x364d8f=this[a95_0x77e7('0x7')](_0x3e5d6d,_0xd043c,_0x358ac4);_0x364d8f['associate']=function(_0x3a1519){_0x364d8f[a95_0x77e7('0x8')](_0x3a1519[a95_0x77e7('0x5')],{'foreignKey':a95_0x77e7('0x9')});_0x364d8f[a95_0x77e7('0x8')](_0x3a1519[a95_0x77e7('0xa')],{'foreignKey':a95_0x77e7('0xb')});};return _0x364d8f;}[a95_0x77e7('0xc')](this);const _0x670464=_0x3e5d6d[a95_0x77e7('0xd')](_0xd043c,_0x364d8f);_0x670464[a95_0x77e7('0xe')]()[a95_0x77e7('0xf')](()=>{_0x670464[a95_0x77e7('0x10')]()[a95_0x77e7('0xf')](_0x18e218=>{if(_0x18e218==0x0){}});});return _0x670464;}}exports['default']=ProductFilesModel;