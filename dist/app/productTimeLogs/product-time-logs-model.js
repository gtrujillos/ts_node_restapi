var a101_0x464f=['sync','then','count','__esModule','sequelize','../../infrastructure/model-base','default','timeLogsModel','INTEGER','productsModel','getEntity','associate','belongsTo','product_id','import'];(function(_0x4cdcef,_0x87192){var _0xc0e542=function(_0x3c006b){while(--_0x3c006b){_0x4cdcef['push'](_0x4cdcef['shift']());}};_0xc0e542(++_0x87192);}(a101_0x464f,0xb7));var a101_0xe481=function(_0x47323b,_0x4b3277){_0x47323b=_0x47323b-0x0;var _0x3934ad=a101_0x464f[_0x47323b];return _0x3934ad;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x52f766){return _0x52f766&&_0x52f766[a101_0xe481('0x0')]?_0x52f766:{'default':_0x52f766};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a101_0xe481('0x1')));const model_base_1=__importDefault(require(a101_0xe481('0x2')));class ProductTimeLogsModel extends model_base_1[a101_0xe481('0x3')]{constructor(_0x52b746,_0x118ad5,_0x2adae1){super(_0x2adae1);const _0x328c35=function(_0x52b746){const _0x5f30b5={'time_log_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x2adae1[a101_0xe481('0x4')],'key':'id'}},'product_id':{'type':sequelize_1[a101_0xe481('0x3')][a101_0xe481('0x5')],'references':{'model':_0x2adae1[a101_0xe481('0x6')],'key':'id'}}};const _0x328c35=this[a101_0xe481('0x7')](_0x52b746,_0x118ad5,_0x5f30b5);_0x328c35[a101_0xe481('0x8')]=function(_0x2adae1){_0x328c35['belongsTo'](_0x2adae1['timeLogsModel'],{'foreignKey':'time_log_id'});_0x328c35[a101_0xe481('0x9')](_0x2adae1['productsModel'],{'foreignKey':a101_0xe481('0xa')});};return _0x328c35;}['bind'](this);const _0x1d62c4=_0x52b746[a101_0xe481('0xb')](_0x118ad5,_0x328c35);_0x1d62c4[a101_0xe481('0xc')]()[a101_0xe481('0xd')](()=>{_0x1d62c4[a101_0xe481('0xe')]()[a101_0xe481('0xd')](_0x3337c8=>{if(_0x3337c8==0x0){}});});return _0x1d62c4;}}exports['default']=ProductTimeLogsModel;