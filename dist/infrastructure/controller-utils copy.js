var a204_0x3846=['express','default','Router','../infrastructure/crud-utils','include','model','i18n','crudUtils','find','bind','findById','findByUuid','save','findOneAndUpdate','remove','count','length','findUuidAndUpdate','update','updateOrCreate','__importDefault','__esModule','defineProperty'];(function(_0x2ae8ac,_0x3b00c7){var _0x28ddf3=function(_0x4e376b){while(--_0x4e376b){_0x2ae8ac['push'](_0x2ae8ac['shift']());}};_0x28ddf3(++_0x3b00c7);}(a204_0x3846,0x1c9));var a204_0x4283=function(_0x1b5106,_0x314c5a){_0x1b5106=_0x1b5106-0x0;var _0x255d71=a204_0x3846[_0x1b5106];return _0x255d71;};'use strict';var __importDefault=this&&this[a204_0x4283('0x0')]||function(_0x2eaff8){return _0x2eaff8&&_0x2eaff8[a204_0x4283('0x1')]?_0x2eaff8:{'default':_0x2eaff8};};Object[a204_0x4283('0x2')](exports,a204_0x4283('0x1'),{'value':!![]});const express_1=__importDefault(require(a204_0x4283('0x3')));const router=express_1[a204_0x4283('0x4')][a204_0x4283('0x5')]();const crud_utils_1=__importDefault(require(a204_0x4283('0x6')));class ControllerUtils{constructor(_0x49bf1a,_0x91ca32){this[a204_0x4283('0x7')]=[];this[a204_0x4283('0x8')]=_0x49bf1a;this[a204_0x4283('0x9')]=_0x91ca32;this[a204_0x4283('0xa')]=new crud_utils_1[(a204_0x4283('0x4'))](_0x49bf1a,_0x91ca32);this[a204_0x4283('0xb')]=this[a204_0x4283('0xb')][a204_0x4283('0xc')](this);this[a204_0x4283('0xd')]=this['findById'][a204_0x4283('0xc')](this);this[a204_0x4283('0xe')]=this['findByUuid']['bind'](this);this[a204_0x4283('0xf')]=this['save']['bind'](this);this[a204_0x4283('0x10')]=this['findOneAndUpdate'][a204_0x4283('0xc')](this);this[a204_0x4283('0x11')]=this[a204_0x4283('0x11')]['bind'](this);this[a204_0x4283('0x12')]=this[a204_0x4283('0x12')][a204_0x4283('0xc')](this);}[a204_0x4283('0x12')](_0x2ecf92,_0x336f53,_0x271e61){return this[a204_0x4283('0xa')][a204_0x4283('0x12')](_0x2ecf92,_0x336f53,_0x271e61);}[a204_0x4283('0xb')](_0x5669d5,_0x591bf6,_0x2b13f1,_0x3d4766=![],_0x3daa89=[],_0x9703c=null){if(_0x3daa89['length']==0x0&&this['include'][a204_0x4283('0x13')]>0x0){_0x3daa89=this['include'];}return this[a204_0x4283('0xa')]['find'](_0x5669d5,_0x591bf6,_0x2b13f1,_0x3d4766,_0x3daa89,_0x9703c);}['findById'](_0x17c861,_0xa2dd70,_0x7eda9b){return this['crudUtils'][a204_0x4283('0xd')](_0x17c861,_0xa2dd70,_0x7eda9b);}['findByUuid'](_0x8226d5,_0xf29bdd,_0x2c6c25){return this[a204_0x4283('0xa')][a204_0x4283('0xe')](_0x8226d5,_0xf29bdd,_0x2c6c25);}[a204_0x4283('0xf')](_0x527346,_0x92542c,_0x4a8b7b){return this[a204_0x4283('0xa')][a204_0x4283('0xf')](_0x527346,_0x92542c,_0x4a8b7b);}['findOneAndUpdate'](_0x45f359,_0x4edbac,_0x69dbb6){return this[a204_0x4283('0xa')]['findOneAndUpdate'](_0x45f359,_0x4edbac,_0x69dbb6);}[a204_0x4283('0x14')](_0x35c9cd,_0x5af689,_0x4ed7c1){return this[a204_0x4283('0xa')][a204_0x4283('0x14')](_0x35c9cd,_0x5af689,_0x4ed7c1);}[a204_0x4283('0x15')](_0xd65918,_0x5bc029,_0x29ce97){return this[a204_0x4283('0xa')][a204_0x4283('0x10')](_0xd65918,_0x5bc029,_0x29ce97);}['findOrCreate'](_0x1ba37c,_0xb71b4b,_0x324d23){return this[a204_0x4283('0xa')]['findOrCreate'](_0x1ba37c,_0xb71b4b,_0x324d23);}[a204_0x4283('0x16')](_0x82069c,_0x2dcc5c,_0x5e89e8,_0x58df79=![]){return this[a204_0x4283('0xa')][a204_0x4283('0x16')](_0x82069c,_0x2dcc5c,_0x5e89e8);}[a204_0x4283('0x11')](_0x53a39f,_0x1db450,_0x5e36df){return this[a204_0x4283('0xa')]['remove'](_0x53a39f,_0x1db450,_0x5e36df);}}exports['default']=ControllerUtils;