var a178_0x4200=['passport-local','Strategy','exports','serializeUser','jwtFromRequest','default','secret','findAll','then','dataValues','use','local-signup','email','nextTick','local-login','password','__importDefault','__esModule','./jwtConfig'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a178_0x4200,0x19f));var a178_0x44df=function(_0x5b11b9,_0x55df74){_0x5b11b9=_0x5b11b9-0x0;var _0x14c65a=a178_0x4200[_0x5b11b9];return _0x14c65a;};'use strict';// config/passport.js
var __importDefault=this&&this[a178_0x44df('0x0')]||function(_0x4c9b44){return _0x4c9b44&&_0x4c9b44[a178_0x44df('0x1')]?_0x4c9b44:{'default':_0x4c9b44};};Object['defineProperty'](exports,a178_0x44df('0x1'),{'value':!![]});const jwtConfig_1=__importDefault(require(a178_0x44df('0x2')));const LocalStrategy=require(a178_0x44df('0x3'))[a178_0x44df('0x4')];const passportJWT=require('passport-jwt');module[a178_0x44df('0x5')]=function(_0x3ea045,_0x47ca13){_0x3ea045[a178_0x44df('0x6')](function(_0x11048a,_0x46a8c3){_0x46a8c3(null,_0x11048a['id']);});const _0x2a9cb7=passportJWT['ExtractJwt'];const _0x3469cb=passportJWT[a178_0x44df('0x4')];const _0x1d0039={'jwtFromRequest':'','secretOrKey':''};_0x1d0039[a178_0x44df('0x7')]=_0x2a9cb7['fromAuthHeaderAsBearerToken']();_0x1d0039['secretOrKey']=jwtConfig_1[a178_0x44df('0x8')][a178_0x44df('0x9')];const _0x3f0ced=new _0x3469cb(_0x1d0039,function(_0x35064d,_0x545051){_0x47ca13[a178_0x44df('0xa')]({'where':{'id':_0x35064d['id']}})[a178_0x44df('0xb')](_0x493d8e=>{if(!_0x493d8e){return _0x545051(null,null);}let _0x512e5d=null;if(_0x493d8e&&_0x493d8e['length']>0x0){_0x512e5d=_0x493d8e[0x0][a178_0x44df('0xc')];}return _0x545051(null,_0x512e5d);})['catch'](_0x307f55=>{return _0x545051(_0x307f55,null);});});_0x3ea045[a178_0x44df('0xd')](_0x3f0ced);_0x3ea045[a178_0x44df('0xd')](a178_0x44df('0xe'),new LocalStrategy({'usernameField':a178_0x44df('0xf'),'passwordField':'password','passReqToCallback':!![]},function(_0x47bbc6,_0x5db047,_0x24131c,_0x319b63){process[a178_0x44df('0x10')](function(){});}));_0x3ea045[a178_0x44df('0xd')](a178_0x44df('0x11'),new LocalStrategy({'usernameField':'email','passwordField':a178_0x44df('0x12'),'passReqToCallback':!![]},function(_0x1eb498,_0x51b5e0,_0x1e07e7,_0x17f1d9){}));};