var a184_0x47ed=['../config/jwtConfig','passport','exports','authenticate','jwt','sign','default','options','__importDefault','__esModule','defineProperty'];(function(_0x17ded7,_0x580bc8){var _0x52e1a4=function(_0x59b072){while(--_0x59b072){_0x17ded7['push'](_0x17ded7['shift']());}};_0x52e1a4(++_0x580bc8);}(a184_0x47ed,0x189));var a184_0x49e1=function(_0x30fe1d,_0x198a8e){_0x30fe1d=_0x30fe1d-0x0;var _0xa3f9b8=a184_0x47ed[_0x30fe1d];return _0xa3f9b8;};'use strict';var __importDefault=this&&this[a184_0x49e1('0x0')]||function(_0x20dcd0){return _0x20dcd0&&_0x20dcd0[a184_0x49e1('0x1')]?_0x20dcd0:{'default':_0x20dcd0};};Object[a184_0x49e1('0x2')](exports,a184_0x49e1('0x1'),{'value':!![]});const jwtConfig_1=__importDefault(require(a184_0x49e1('0x3')));const jwt=require('jsonwebtoken');const passport=require(a184_0x49e1('0x4'));module[a184_0x49e1('0x5')]={'isLoggedIn':function(_0x41964d,_0x502848,_0x105c4f){passport[a184_0x49e1('0x6')](a184_0x49e1('0x7'),function(_0x20924e,_0x199923,_0x4a7a78){if(_0x20924e){return _0x105c4f(_0x20924e);}if(_0x199923){_0x41964d['user']=_0x199923;}return _0x105c4f(null,_0x199923);})(_0x41964d,_0x502848,_0x105c4f);},'generateJWT':function(_0x38f590){try{const _0x381eab={'id':_0x38f590['id']};const _0xccf365=jwt[a184_0x49e1('0x8')](_0x381eab,jwtConfig_1[a184_0x49e1('0x9')]['secret'],jwtConfig_1[a184_0x49e1('0x9')][a184_0x49e1('0xa')]);return _0xccf365;}catch(_0x424740){return _0x424740;}}};