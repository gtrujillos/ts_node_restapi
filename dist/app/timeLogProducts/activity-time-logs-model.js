var a134_0x3aa6=['timeLogsModel','time_log_id','activity_id','bind','import','sync','then','count','__esModule','sequelize','../../infrastructure/model-base','default','INTEGER','activitiesModel','getEntity','associate','belongsTo'];(function(_0x423070,_0x7d0255){var _0xfef9d2=function(_0x2d6bbe){while(--_0x2d6bbe){_0x423070['push'](_0x423070['shift']());}};_0xfef9d2(++_0x7d0255);}(a134_0x3aa6,0x7f));var a134_0x5d9b=function(_0x203402,_0x29cdd7){_0x203402=_0x203402-0x0;var _0x3ea08b=a134_0x3aa6[_0x203402];return _0x3ea08b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2cb230){return _0x2cb230&&_0x2cb230[a134_0x5d9b('0x0')]?_0x2cb230:{'default':_0x2cb230};};Object['defineProperty'](exports,a134_0x5d9b('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a134_0x5d9b('0x1')));const model_base_1=__importDefault(require(a134_0x5d9b('0x2')));class ActivityTimeLogsModel extends model_base_1['default']{constructor(_0x28d80e,_0xa071eb,_0x510ed0){super(_0x510ed0);const _0x29f55f=function(_0x28d80e){const _0x2cf0ef={'time_log_id':{'type':sequelize_1[a134_0x5d9b('0x3')][a134_0x5d9b('0x4')],'references':{'model':_0x510ed0['timeLogsModel'],'key':'id'}},'activity_id':{'type':sequelize_1[a134_0x5d9b('0x3')]['INTEGER'],'references':{'model':_0x510ed0[a134_0x5d9b('0x5')],'key':'id'}}};const _0x29f55f=this[a134_0x5d9b('0x6')](_0x28d80e,_0xa071eb,_0x2cf0ef);_0x29f55f[a134_0x5d9b('0x7')]=function(_0x510ed0){_0x29f55f[a134_0x5d9b('0x8')](_0x510ed0[a134_0x5d9b('0x9')],{'foreignKey':a134_0x5d9b('0xa')});_0x29f55f[a134_0x5d9b('0x8')](_0x510ed0[a134_0x5d9b('0x5')],{'foreignKey':a134_0x5d9b('0xb')});};return _0x29f55f;}[a134_0x5d9b('0xc')](this);const _0x7c2c6b=_0x28d80e[a134_0x5d9b('0xd')](_0xa071eb,_0x29f55f);_0x7c2c6b[a134_0x5d9b('0xe')]()[a134_0x5d9b('0xf')](()=>{_0x7c2c6b[a134_0x5d9b('0x10')]()[a134_0x5d9b('0xf')](_0x4ddb6b=>{if(_0x4ddb6b==0x0){}});});return _0x7c2c6b;}}exports[a134_0x5d9b('0x3')]=ActivityTimeLogsModel;