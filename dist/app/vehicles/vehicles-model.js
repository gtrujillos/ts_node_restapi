var a189_0x103d=['sequelize','default','INTEGER','brandsModelName','STRING','getEntity','bind','__importDefault','defineProperty','__esModule'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(a189_0x103d,0x165));var a189_0x5af6=function(_0x2aa59e,_0x3bae01){_0x2aa59e=_0x2aa59e-0x0;var _0x266bdf=a189_0x103d[_0x2aa59e];return _0x266bdf;};'use strict';var __importDefault=this&&this[a189_0x5af6('0x0')]||function(_0x206985){return _0x206985&&_0x206985['__esModule']?_0x206985:{'default':_0x206985};};Object[a189_0x5af6('0x1')](exports,a189_0x5af6('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a189_0x5af6('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class VehiclesModel extends model_base_1[a189_0x5af6('0x4')]{constructor(_0x1bbfcb,_0x55527e,_0x323735){super(_0x323735);const _0x5eb4f4=function(_0x1bbfcb){const _0x3c965f={'brand_id':{'type':sequelize_1[a189_0x5af6('0x4')][a189_0x5af6('0x5')],'references':{'model':_0x323735[a189_0x5af6('0x6')],'key':'id'}},'company_id':{'type':sequelize_1['default'][a189_0x5af6('0x5')],'references':{'model':_0x323735['companiesModel'],'key':'id'}},'plate':{'type':sequelize_1[a189_0x5af6('0x4')][a189_0x5af6('0x7')]},'model':{'type':sequelize_1['default']['STRING']}};const _0x5eb4f4=this[a189_0x5af6('0x8')](_0x1bbfcb,_0x55527e,_0x3c965f);return _0x5eb4f4;}[a189_0x5af6('0x9')](this);const _0x262c09=_0x1bbfcb['import'](_0x55527e,_0x5eb4f4);return _0x262c09;}}exports[a189_0x5af6('0x4')]=VehiclesModel;