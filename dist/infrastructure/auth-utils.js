var a112_0x3e3a=['../config/jwtConfig','jsonwebtoken','passport','jwt','sign','default','secret','options','__importDefault','__esModule','defineProperty'];(function(_0x4f2e24,_0x1ca75f){var _0x1e4e4=function(_0x23e8da){while(--_0x23e8da){_0x4f2e24['push'](_0x4f2e24['shift']());}};_0x1e4e4(++_0x1ca75f);}(a112_0x3e3a,0xa2));var a112_0x51cb=function(_0x374995,_0x22a3da){_0x374995=_0x374995-0x0;var _0x46b224=a112_0x3e3a[_0x374995];return _0x46b224;};'use strict';var __importDefault=this&&this[a112_0x51cb('0x0')]||function(_0x3b9a14){return _0x3b9a14&&_0x3b9a14[a112_0x51cb('0x1')]?_0x3b9a14:{'default':_0x3b9a14};};Object[a112_0x51cb('0x2')](exports,a112_0x51cb('0x1'),{'value':!![]});const jwtConfig_1=__importDefault(require(a112_0x51cb('0x3')));const jwt=require(a112_0x51cb('0x4'));const passport=require(a112_0x51cb('0x5'));module['exports']={'isLoggedIn':function(_0x3e16e3,_0x18cdf5,_0x202752){passport['authenticate'](a112_0x51cb('0x6'),function(_0x56c5aa,_0x21d293,_0x32cf97){if(_0x56c5aa){return _0x202752(_0x56c5aa);}if(_0x21d293){_0x3e16e3['user']=_0x21d293;}return _0x202752(null,_0x21d293);})(_0x3e16e3,_0x18cdf5,_0x202752);},'generateJWT':function(_0x18f92b){try{const _0x5bdce0={'id':_0x18f92b['id']};const _0x16ae52=jwt[a112_0x51cb('0x7')](_0x5bdce0,jwtConfig_1[a112_0x51cb('0x8')][a112_0x51cb('0x9')],jwtConfig_1[a112_0x51cb('0x8')][a112_0x51cb('0xa')]);return _0x16ae52;}catch(_0xdeaf8f){return _0xdeaf8f;}}};