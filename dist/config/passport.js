var a286_0x156a=['findAll','then','length','dataValues','catch','use','email','password','nextTick','local-login','__importDefault','__esModule','defineProperty','./jwtConfig','passport-local','Strategy','passport-jwt','ExtractJwt','jwtFromRequest','secretOrKey','default'];(function(_0x1d39f1,_0x24266a){var _0x2e4658=function(_0x4840a3){while(--_0x4840a3){_0x1d39f1['push'](_0x1d39f1['shift']());}};_0x2e4658(++_0x24266a);}(a286_0x156a,0xc7));var a286_0x2471=function(_0x4627be,_0xc987c1){_0x4627be=_0x4627be-0x0;var _0x225e1b=a286_0x156a[_0x4627be];return _0x225e1b;};'use strict';// config/passport.js
var __importDefault=this&&this[a286_0x2471('0x0')]||function(_0x5aba04){return _0x5aba04&&_0x5aba04[a286_0x2471('0x1')]?_0x5aba04:{'default':_0x5aba04};};Object[a286_0x2471('0x2')](exports,a286_0x2471('0x1'),{'value':!![]});const jwtConfig_1=__importDefault(require(a286_0x2471('0x3')));const LocalStrategy=require(a286_0x2471('0x4'))[a286_0x2471('0x5')];const passportJWT=require(a286_0x2471('0x6'));module['exports']=function(_0x562ff3,_0x57ffe6){_0x562ff3['serializeUser'](function(_0x1a3486,_0x2ff975){_0x2ff975(null,_0x1a3486['id']);});const _0x16d5f4=passportJWT[a286_0x2471('0x7')];const _0x5a1076=passportJWT[a286_0x2471('0x5')];const _0x3ec841={'jwtFromRequest':'','secretOrKey':''};_0x3ec841[a286_0x2471('0x8')]=_0x16d5f4['fromAuthHeaderAsBearerToken']();_0x3ec841[a286_0x2471('0x9')]=jwtConfig_1[a286_0x2471('0xa')]['secret'];const _0x17acd1=new _0x5a1076(_0x3ec841,function(_0x38d7ab,_0x46c947){_0x57ffe6[a286_0x2471('0xb')]({'where':{'id':_0x38d7ab['id']}})[a286_0x2471('0xc')](_0x3884cb=>{if(!_0x3884cb){return _0x46c947(null,null);}let _0x5482e0=null;if(_0x3884cb&&_0x3884cb[a286_0x2471('0xd')]>0x0){_0x5482e0=_0x3884cb[0x0][a286_0x2471('0xe')];}return _0x46c947(null,_0x5482e0);})[a286_0x2471('0xf')](_0x1efe0d=>{return _0x46c947(_0x1efe0d,null);});});_0x562ff3[a286_0x2471('0x10')](_0x17acd1);_0x562ff3[a286_0x2471('0x10')]('local-signup',new LocalStrategy({'usernameField':a286_0x2471('0x11'),'passwordField':a286_0x2471('0x12'),'passReqToCallback':!![]},function(_0xeab68,_0x2c833b,_0x4d5911,_0x2d5baf){process[a286_0x2471('0x13')](function(){});}));_0x562ff3['use'](a286_0x2471('0x14'),new LocalStrategy({'usernameField':a286_0x2471('0x11'),'passwordField':a286_0x2471('0x12'),'passReqToCallback':!![]},function(_0x395f9b,_0x5a3303,_0x526047,_0x48ab9f){}));};