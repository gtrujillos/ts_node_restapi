var a42_0x1936=['sequelize','default','citiesModelName','STRING','INTEGER','getEntity','import','__importDefault','__esModule'];(function(_0x44409b,_0x465e5e){var _0xf2ab43=function(_0x22380a){while(--_0x22380a){_0x44409b['push'](_0x44409b['shift']());}};_0xf2ab43(++_0x465e5e);}(a42_0x1936,0x11e));var a42_0xd11c=function(_0x29ab52,_0x207105){_0x29ab52=_0x29ab52-0x0;var _0x5840a5=a42_0x1936[_0x29ab52];return _0x5840a5;};'use strict';var __importDefault=this&&this[a42_0xd11c('0x0')]||function(_0x4976ed){return _0x4976ed&&_0x4976ed['__esModule']?_0x4976ed:{'default':_0x4976ed};};Object['defineProperty'](exports,a42_0xd11c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a42_0xd11c('0x2')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class CompaniesModel extends model_base_1[a42_0xd11c('0x3')]{constructor(_0x51cb0e,_0x432905,_0x54063d){super(_0x54063d);const _0x5870db=function(_0x51cb0e){const _0x102150={'city_id':{'type':sequelize_1[a42_0xd11c('0x3')]['INTEGER'],'references':{'model':_0x54063d[a42_0xd11c('0x4')],'key':'id'}},'name':{'type':sequelize_1[a42_0xd11c('0x3')][a42_0xd11c('0x5')]},'document':{'type':sequelize_1['default']['STRING']},'email':{'type':sequelize_1[a42_0xd11c('0x3')][a42_0xd11c('0x5')],'unique':!![]},'phone':{'type':sequelize_1[a42_0xd11c('0x3')]['STRING']},'status':{'type':sequelize_1['default'][a42_0xd11c('0x6')]}};const _0x5870db=this[a42_0xd11c('0x7')](_0x51cb0e,_0x432905,_0x102150);return _0x5870db;}['bind'](this);const _0x705887=_0x51cb0e[a42_0xd11c('0x8')](_0x432905,_0x5870db);return _0x705887;}}exports[a42_0xd11c('0x3')]=CompaniesModel;