var a51_0x30a0=['default','provincesModel','STRING','getEntity','bind','import','sync','then','count','log','CitiesModel\x20populated','__importDefault','__esModule','sequelize','../../infrastructure/model-base'];(function(_0x55612a,_0x3c2f07){var _0x4d4b25=function(_0x3503db){while(--_0x3503db){_0x55612a['push'](_0x55612a['shift']());}};_0x4d4b25(++_0x3c2f07);}(a51_0x30a0,0x164));var a51_0x319d=function(_0x538261,_0x35dc97){_0x538261=_0x538261-0x0;var _0x276161=a51_0x30a0[_0x538261];return _0x276161;};'use strict';var __importDefault=this&&this[a51_0x319d('0x0')]||function(_0x4ed715){return _0x4ed715&&_0x4ed715[a51_0x319d('0x1')]?_0x4ed715:{'default':_0x4ed715};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a51_0x319d('0x2')));const model_base_1=__importDefault(require(a51_0x319d('0x3')));class CitiesModel extends model_base_1['default']{constructor(_0x9fa8e0,_0x5e8af0,_0x1697cd){super(_0x1697cd);const _0x508cab=function(_0x9fa8e0){const _0x11747d={'province_id':{'type':sequelize_1[a51_0x319d('0x4')]['INTEGER'],'references':{'model':_0x1697cd[a51_0x319d('0x5')],'key':'id'}},'name':{'type':sequelize_1[a51_0x319d('0x4')][a51_0x319d('0x6')]}};const _0x508cab=this[a51_0x319d('0x7')](_0x9fa8e0,_0x5e8af0,_0x11747d);return _0x508cab;}[a51_0x319d('0x8')](this);const _0x8a6cb2=_0x9fa8e0[a51_0x319d('0x9')](_0x5e8af0,_0x508cab);_0x8a6cb2[a51_0x319d('0xa')]()[a51_0x319d('0xb')](()=>{_0x8a6cb2[a51_0x319d('0xc')]()['then'](_0x35ce5c=>{if(_0x35ce5c==0x0){_0x8a6cb2['create']({'country_id':0x1,'name':'Medellín'});console[a51_0x319d('0xd')](a51_0x319d('0xe'));}});});return _0x8a6cb2;}}exports[a51_0x319d('0x4')]=CitiesModel;