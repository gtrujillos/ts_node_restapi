var a184_0x2f82=['jwt','user','default','secret','options','__esModule','defineProperty','../config/jwtConfig','jsonwebtoken','passport'];(function(_0x4e3199,_0x3cccb3){var _0x58ed1d=function(_0x2e8405){while(--_0x2e8405){_0x4e3199['push'](_0x4e3199['shift']());}};_0x58ed1d(++_0x3cccb3);}(a184_0x2f82,0x18b));var a184_0x506b=function(_0x50c54c,_0x145459){_0x50c54c=_0x50c54c-0x0;var _0x19119c=a184_0x2f82[_0x50c54c];return _0x19119c;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x267615){return _0x267615&&_0x267615[a184_0x506b('0x0')]?_0x267615:{'default':_0x267615};};Object[a184_0x506b('0x1')](exports,a184_0x506b('0x0'),{'value':!![]});const jwtConfig_1=__importDefault(require(a184_0x506b('0x2')));const jwt=require(a184_0x506b('0x3'));const passport=require(a184_0x506b('0x4'));module['exports']={'isLoggedIn':function(_0x4bb589,_0x59181c,_0x419a2b){passport['authenticate'](a184_0x506b('0x5'),function(_0x1539bf,_0x4ff01a,_0x43c08b){if(_0x1539bf){return _0x419a2b(_0x1539bf);}if(_0x4ff01a){_0x4bb589[a184_0x506b('0x6')]=_0x4ff01a;}return _0x419a2b(null,_0x4ff01a);})(_0x4bb589,_0x59181c,_0x419a2b);},'generateJWT':function(_0x4ac1c0){try{const _0x599e2b={'id':_0x4ac1c0['id']};const _0x3eae1a=jwt['sign'](_0x599e2b,jwtConfig_1[a184_0x506b('0x7')][a184_0x506b('0x8')],jwtConfig_1[a184_0x506b('0x7')][a184_0x506b('0x9')]);return _0x3eae1a;}catch(_0x104962){return _0x104962;}}};