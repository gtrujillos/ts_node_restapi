var a42_0x32f8=['default','INTEGER','citiesModelName','STRING','import','__esModule','defineProperty','sequelize','../../infrastructure/model-base'];(function(_0x4d5adb,_0x1f6dd2){var _0x3477ee=function(_0x487c8c){while(--_0x487c8c){_0x4d5adb['push'](_0x4d5adb['shift']());}};_0x3477ee(++_0x1f6dd2);}(a42_0x32f8,0x188));var a42_0x52ac=function(_0x1ff989,_0x49c6c1){_0x1ff989=_0x1ff989-0x0;var _0x2f7129=a42_0x32f8[_0x1ff989];return _0x2f7129;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2c34a2){return _0x2c34a2&&_0x2c34a2[a42_0x52ac('0x0')]?_0x2c34a2:{'default':_0x2c34a2};};Object[a42_0x52ac('0x1')](exports,a42_0x52ac('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a42_0x52ac('0x2')));const model_base_1=__importDefault(require(a42_0x52ac('0x3')));class CompaniesModel extends model_base_1[a42_0x52ac('0x4')]{constructor(_0xbdbba1,_0x1f7958,_0xb8ad2f){super(_0xb8ad2f);const _0xe35915=function(_0xbdbba1){const _0x3f3292={'city_id':{'type':sequelize_1[a42_0x52ac('0x4')][a42_0x52ac('0x5')],'references':{'model':_0xb8ad2f[a42_0x52ac('0x6')],'key':'id'}},'name':{'type':sequelize_1[a42_0x52ac('0x4')][a42_0x52ac('0x7')]},'document':{'type':sequelize_1['default'][a42_0x52ac('0x7')]},'email':{'type':sequelize_1[a42_0x52ac('0x4')][a42_0x52ac('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a42_0x52ac('0x4')][a42_0x52ac('0x7')]},'status':{'type':sequelize_1['default'][a42_0x52ac('0x5')]}};const _0xe35915=this['getEntity'](_0xbdbba1,_0x1f7958,_0x3f3292);return _0xe35915;}['bind'](this);const _0x50a150=_0xbdbba1[a42_0x52ac('0x8')](_0x1f7958,_0xe35915);return _0x50a150;}}exports[a42_0x52ac('0x4')]=CompaniesModel;