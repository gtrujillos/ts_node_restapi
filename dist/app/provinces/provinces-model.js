var a116_0xff5b=['default','INTEGER','countriesModel','getEntity','import','then','count','create','Antioquia','log','ProvincesModel\x20populated','__esModule','defineProperty','sequelize'];(function(_0xbd2844,_0x128962){var _0x11a5f2=function(_0x3053ad){while(--_0x3053ad){_0xbd2844['push'](_0xbd2844['shift']());}};_0x11a5f2(++_0x128962);}(a116_0xff5b,0x1cb));var a116_0x5504=function(_0x3e42c9,_0x464618){_0x3e42c9=_0x3e42c9-0x0;var _0x4d5e1d=a116_0xff5b[_0x3e42c9];return _0x4d5e1d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2d9d20){return _0x2d9d20&&_0x2d9d20[a116_0x5504('0x0')]?_0x2d9d20:{'default':_0x2d9d20};};Object[a116_0x5504('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a116_0x5504('0x2')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class ProvincesModel extends model_base_1[a116_0x5504('0x3')]{constructor(_0x5562f4,_0x1c6e99,_0x316ac8){super(_0x316ac8);const _0x1c0f25=function(_0x5562f4,_0x55bff6){const _0x4ea651={'country_id':{'type':_0x55bff6[a116_0x5504('0x4')],'references':{'model':_0x316ac8[a116_0x5504('0x5')],'key':'id'}},'name':{'type':sequelize_1['default']['STRING']}};const _0x1c0f25=this[a116_0x5504('0x6')](_0x5562f4,_0x1c6e99,_0x4ea651);return _0x1c0f25;}['bind'](this);const _0x5d5792=_0x5562f4[a116_0x5504('0x7')](_0x1c6e99,_0x1c0f25);_0x5d5792['sync']()[a116_0x5504('0x8')](()=>{_0x5d5792[a116_0x5504('0x9')]()['then'](_0x5dde40=>{if(_0x5dde40==0x0){_0x5d5792[a116_0x5504('0xa')]({'country_id':0x1,'name':a116_0x5504('0xb')});console[a116_0x5504('0xc')](a116_0x5504('0xd'));}});});return _0x5d5792;}}exports[a116_0x5504('0x3')]=ProvincesModel;