var a106_0x422f=['email','password','nextTick','local-login','__importDefault','defineProperty','__esModule','./jwtConfig','passport-local','passport-jwt','exports','serializeUser','Strategy','jwtFromRequest','fromAuthHeaderAsBearerToken','secretOrKey','default','findAll','then','length','dataValues','catch','use','local-signup'];(function(_0x3562b5,_0x22dabc){var _0x54d52d=function(_0x27bd3d){while(--_0x27bd3d){_0x3562b5['push'](_0x3562b5['shift']());}};_0x54d52d(++_0x22dabc);}(a106_0x422f,0x124));var a106_0x55f6=function(_0x45caf3,_0x108dcb){_0x45caf3=_0x45caf3-0x0;var _0x43ada5=a106_0x422f[_0x45caf3];return _0x43ada5;};'use strict';// config/passport.js
var __importDefault=this&&this[a106_0x55f6('0x0')]||function(_0x322d41){return _0x322d41&&_0x322d41['__esModule']?_0x322d41:{'default':_0x322d41};};Object[a106_0x55f6('0x1')](exports,a106_0x55f6('0x2'),{'value':!![]});const jwtConfig_1=__importDefault(require(a106_0x55f6('0x3')));const LocalStrategy=require(a106_0x55f6('0x4'))['Strategy'];const passportJWT=require(a106_0x55f6('0x5'));module[a106_0x55f6('0x6')]=function(_0x5c3228,_0x31e136){_0x5c3228[a106_0x55f6('0x7')](function(_0x4ad7a4,_0x51fe8d){_0x51fe8d(null,_0x4ad7a4['id']);});const _0x14fce1=passportJWT['ExtractJwt'];const _0x78f89c=passportJWT[a106_0x55f6('0x8')];const _0x7d9bbe={'jwtFromRequest':'','secretOrKey':''};_0x7d9bbe[a106_0x55f6('0x9')]=_0x14fce1[a106_0x55f6('0xa')]();_0x7d9bbe[a106_0x55f6('0xb')]=jwtConfig_1[a106_0x55f6('0xc')]['secret'];const _0x50c247=new _0x78f89c(_0x7d9bbe,function(_0x5325da,_0x30db39){_0x31e136[a106_0x55f6('0xd')]({'where':{'id':_0x5325da['id']}})[a106_0x55f6('0xe')](_0x3b7286=>{if(!_0x3b7286){return _0x30db39(null,null);}let _0x5e46bf=null;if(_0x3b7286&&_0x3b7286[a106_0x55f6('0xf')]>0x0){_0x5e46bf=_0x3b7286[0x0][a106_0x55f6('0x10')];}return _0x30db39(null,_0x5e46bf);})[a106_0x55f6('0x11')](_0x5249df=>{return _0x30db39(_0x5249df,null);});});_0x5c3228['use'](_0x50c247);_0x5c3228[a106_0x55f6('0x12')](a106_0x55f6('0x13'),new LocalStrategy({'usernameField':a106_0x55f6('0x14'),'passwordField':a106_0x55f6('0x15'),'passReqToCallback':!![]},function(_0x22a8b1,_0x2bdfa2,_0x217c2d,_0x227333){process[a106_0x55f6('0x16')](function(){});}));_0x5c3228['use'](a106_0x55f6('0x17'),new LocalStrategy({'usernameField':a106_0x55f6('0x14'),'passwordField':'password','passReqToCallback':!![]},function(_0x177922,_0x1a549e,_0x3cd8e2,_0x498d9d){}));};