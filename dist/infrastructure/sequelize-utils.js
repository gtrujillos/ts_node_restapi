var a120_0xe623=['forEach','transformObject','push','constructor','default','encrypt','decryptId','decrypt','toString','endsWith','_id','toJSON','map','lenght','get_i18n','Model','name','_i18n','__importDefault','__esModule','defineProperty','./crypt-utils','encryptId','length','isArray'];(function(_0x3fa1a3,_0x583133){var _0xfd2ece=function(_0x1d6486){while(--_0x1d6486){_0x3fa1a3['push'](_0x3fa1a3['shift']());}};_0xfd2ece(++_0x583133);}(a120_0xe623,0xa8));var a120_0x3d73=function(_0x1a52eb,_0x369e0f){_0x1a52eb=_0x1a52eb-0x0;var _0x306934=a120_0xe623[_0x1a52eb];return _0x306934;};'use strict';var __importDefault=this&&this[a120_0x3d73('0x0')]||function(_0x12b2b1){return _0x12b2b1&&_0x12b2b1[a120_0x3d73('0x1')]?_0x12b2b1:{'default':_0x12b2b1};};Object[a120_0x3d73('0x2')](exports,a120_0x3d73('0x1'),{'value':!![]});const crypt_utils_1=__importDefault(require(a120_0x3d73('0x3')));class SequelizeUtil{static[a120_0x3d73('0x4')](_0x1b39b0){if(_0x1b39b0==null||_0x1b39b0[a120_0x3d73('0x5')]==0x0)return[];if(Array[a120_0x3d73('0x6')](_0x1b39b0)){const _0x513539=[];_0x1b39b0[a120_0x3d73('0x7')](_0x43cc56=>{_0x43cc56=SequelizeUtil[a120_0x3d73('0x8')](_0x43cc56,!![]);_0x513539[a120_0x3d73('0x9')](_0x43cc56);});return _0x513539;}else if({}['constructor']===_0x1b39b0[a120_0x3d73('0xa')]){_0x1b39b0=SequelizeUtil[a120_0x3d73('0x8')](_0x1b39b0,!![]);return _0x1b39b0;}else{_0x1b39b0=crypt_utils_1[a120_0x3d73('0xb')][a120_0x3d73('0xc')](_0x1b39b0['toString']());return _0x1b39b0;}}static[a120_0x3d73('0xd')](_0xc3e81f){if(_0xc3e81f==null||_0xc3e81f[a120_0x3d73('0x5')]==0x0)return[];if(Array[a120_0x3d73('0x6')](_0xc3e81f)){const _0xb768fd=[];_0xc3e81f['forEach'](_0x108304=>{_0x108304=SequelizeUtil[a120_0x3d73('0x8')](_0x108304,![]);_0xb768fd[a120_0x3d73('0x9')](_0x108304);});return _0xb768fd;}else if({}['constructor']===_0xc3e81f['constructor']){_0xc3e81f=SequelizeUtil[a120_0x3d73('0x8')](_0xc3e81f,![]);return _0xc3e81f;}else{_0xc3e81f=crypt_utils_1[a120_0x3d73('0xb')][a120_0x3d73('0xe')](_0xc3e81f[a120_0x3d73('0xf')]());return _0xc3e81f;}}static[a120_0x3d73('0x8')](_0x535324,_0x29bd28){for(const _0x45c2c5 in _0x535324){if(_0x535324[_0x45c2c5]!=null){if({}[a120_0x3d73('0xa')]===_0x535324[_0x45c2c5]['constructor']){_0x535324[_0x45c2c5]=SequelizeUtil[a120_0x3d73('0x8')](_0x535324[_0x45c2c5],_0x29bd28);}else{if(_0x45c2c5=='id'||_0x45c2c5[a120_0x3d73('0x10')](a120_0x3d73('0x11'))){_0x535324[_0x45c2c5]=_0x29bd28?crypt_utils_1[a120_0x3d73('0xb')]['encrypt'](_0x535324[_0x45c2c5][a120_0x3d73('0xf')]()):crypt_utils_1[a120_0x3d73('0xb')][a120_0x3d73('0xe')](_0x535324[_0x45c2c5][a120_0x3d73('0xf')]());}}}}return _0x535324;}static[a120_0x3d73('0x12')](_0xc432bf){const _0x566640=_0xc432bf[a120_0x3d73('0x13')](function(_0xc432bf){return _0xc432bf['toJSON']();});return _0x566640;}static['toJSONLocalizedOnly'](_0x397ab9,_0x3c8cb1){if(_0x397ab9==null||_0x397ab9[a120_0x3d73('0x14')]==0x0)return[];const _0x3eaa88=[];if(Array[a120_0x3d73('0x6')](_0x397ab9)){_0x397ab9[a120_0x3d73('0x7')](_0x313d7e=>{const _0x2bdf35=_0x313d7e[a120_0x3d73('0x15')](_0x3c8cb1,{})[a120_0x3d73('0x12')]();delete _0x2bdf35[_0x313d7e[a120_0x3d73('0x16')][a120_0x3d73('0x17')]+a120_0x3d73('0x18')];_0x3eaa88[a120_0x3d73('0x9')](_0x2bdf35);});}else{const _0x2ebf91=_0x397ab9[a120_0x3d73('0x15')](_0x3c8cb1)[a120_0x3d73('0x12')]();delete _0x2ebf91[_0x397ab9['Model'][a120_0x3d73('0x17')]+'_i18n'];_0x3eaa88[a120_0x3d73('0x9')](_0x2ebf91);}return _0x3eaa88;}}exports['default']=SequelizeUtil;