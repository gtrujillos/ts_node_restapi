var a22_0x4626=['filesModel','INTEGER','getEntity','associate','activitiesModel','activity_id','bind','import','then','count','__importDefault','__esModule','defineProperty','sequelize','default'];(function(_0x1c8629,_0x9e1f27){var _0x31a0a6=function(_0x492f64){while(--_0x492f64){_0x1c8629['push'](_0x1c8629['shift']());}};_0x31a0a6(++_0x9e1f27);}(a22_0x4626,0x163));var a22_0x586c=function(_0x4f516b,_0x379906){_0x4f516b=_0x4f516b-0x0;var _0x51f8f4=a22_0x4626[_0x4f516b];return _0x51f8f4;};'use strict';var __importDefault=this&&this[a22_0x586c('0x0')]||function(_0x246163){return _0x246163&&_0x246163[a22_0x586c('0x1')]?_0x246163:{'default':_0x246163};};Object[a22_0x586c('0x2')](exports,a22_0x586c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a22_0x586c('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class ActivityFilesModel extends model_base_1[a22_0x586c('0x4')]{constructor(_0x4cfa8e,_0x3d11bc,_0x1f8fb9){super(_0x1f8fb9);const _0x598334=function(_0x4cfa8e){const _0x50fc48={'file_id':{'type':sequelize_1[a22_0x586c('0x4')]['INTEGER'],'references':{'model':_0x1f8fb9[a22_0x586c('0x5')],'key':'id'}},'activity_id':{'type':sequelize_1['default'][a22_0x586c('0x6')],'references':{'model':_0x1f8fb9['activitiesModel'],'key':'id'}}};const _0x598334=this[a22_0x586c('0x7')](_0x4cfa8e,_0x3d11bc,_0x50fc48);_0x598334[a22_0x586c('0x8')]=function(_0x1f8fb9){_0x598334['belongsTo'](_0x1f8fb9[a22_0x586c('0x5')],{'foreignKey':'file_id'});_0x598334['belongsTo'](_0x1f8fb9[a22_0x586c('0x9')],{'foreignKey':a22_0x586c('0xa')});};return _0x598334;}[a22_0x586c('0xb')](this);const _0x4dea87=_0x4cfa8e[a22_0x586c('0xc')](_0x3d11bc,_0x598334);_0x4dea87['sync']()[a22_0x586c('0xd')](()=>{_0x4dea87[a22_0x586c('0xe')]()[a22_0x586c('0xd')](_0x46e9dd=>{if(_0x46e9dd==0x0){}});});return _0x4dea87;}}exports[a22_0x586c('0x4')]=ActivityFilesModel;