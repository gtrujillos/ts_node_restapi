var a42_0x52b7=['INTEGER','getEntity','import','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','citiesModelName','STRING'];(function(_0x22058f,_0x1f8462){var _0x503cff=function(_0x40d612){while(--_0x40d612){_0x22058f['push'](_0x22058f['shift']());}};_0x503cff(++_0x1f8462);}(a42_0x52b7,0x1b1));var a42_0x1c36=function(_0x8310f7,_0x25af36){_0x8310f7=_0x8310f7-0x0;var _0x2ca4db=a42_0x52b7[_0x8310f7];return _0x2ca4db;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5a97f2){return _0x5a97f2&&_0x5a97f2[a42_0x1c36('0x0')]?_0x5a97f2:{'default':_0x5a97f2};};Object[a42_0x1c36('0x1')](exports,a42_0x1c36('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a42_0x1c36('0x2')));const model_base_1=__importDefault(require(a42_0x1c36('0x3')));class CompaniesModel extends model_base_1[a42_0x1c36('0x4')]{constructor(_0x34a60e,_0x40b122,_0x4f55f0){super(_0x4f55f0);const _0x31fc00=function(_0x34a60e){const _0x281080={'city_id':{'type':sequelize_1[a42_0x1c36('0x4')]['INTEGER'],'references':{'model':_0x4f55f0[a42_0x1c36('0x5')],'key':'id'}},'name':{'type':sequelize_1[a42_0x1c36('0x4')][a42_0x1c36('0x6')]},'document':{'type':sequelize_1[a42_0x1c36('0x4')]['STRING']},'email':{'type':sequelize_1[a42_0x1c36('0x4')][a42_0x1c36('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a42_0x1c36('0x4')][a42_0x1c36('0x6')]},'status':{'type':sequelize_1[a42_0x1c36('0x4')][a42_0x1c36('0x7')]}};const _0x31fc00=this[a42_0x1c36('0x8')](_0x34a60e,_0x40b122,_0x281080);return _0x31fc00;}['bind'](this);const _0x4313ae=_0x34a60e[a42_0x1c36('0x9')](_0x40b122,_0x31fc00);return _0x4313ae;}}exports[a42_0x1c36('0x4')]=CompaniesModel;