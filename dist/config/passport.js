var a90_0xe4bd=['../config/jwt.js','exports','serializeUser','ExtractJwt','jwtFromRequest','token','secretOrKey','secret','then','catch','use','email','password','nextTick','local-login','Strategy','passport-jwt'];(function(_0x323e47,_0x10aea3){var _0x55f925=function(_0x16c8f4){while(--_0x16c8f4){_0x323e47['push'](_0x323e47['shift']());}};_0x55f925(++_0x10aea3);}(a90_0xe4bd,0x86));var a90_0x4715=function(_0x2e3c61,_0x3004f7){_0x2e3c61=_0x2e3c61-0x0;var _0x494ebc=a90_0xe4bd[_0x2e3c61];return _0x494ebc;};let LocalStrategy=require('passport-local')[a90_0x4715('0x0')];let passportJWT=require(a90_0x4715('0x1'));let configJwt=require(a90_0x4715('0x2'));module[a90_0x4715('0x3')]=function(_0x3305d5,_0x3f7f37){_0x3305d5[a90_0x4715('0x4')](function(_0x566cbc,_0x236cc4){_0x236cc4(null,_0x566cbc['id']);});const _0x411a3d=passportJWT[a90_0x4715('0x5')];const _0x3746a0=passportJWT[a90_0x4715('0x0')];const _0x174ec5={'jwtFromRequest':'','secretOrKey':''};_0x174ec5[a90_0x4715('0x6')]=_0x411a3d['fromHeader'](a90_0x4715('0x7'));_0x174ec5[a90_0x4715('0x8')]=configJwt[a90_0x4715('0x9')];const _0x481368=new _0x3746a0(_0x174ec5,function(_0x14f594,_0x1f5a34){_0x3f7f37['findAll']({'where':{'uuid':_0x14f594['uuid']}})[a90_0x4715('0xa')](_0x3c1f00=>{if(!_0x3c1f00){return _0x1f5a34(null,null);}return _0x1f5a34(null,_0x3c1f00);})[a90_0x4715('0xb')](_0x4cafe9=>{return _0x1f5a34(_0x4cafe9,null);});});_0x3305d5[a90_0x4715('0xc')](_0x481368);_0x3305d5[a90_0x4715('0xc')]('local-signup',new LocalStrategy({'usernameField':a90_0x4715('0xd'),'passwordField':a90_0x4715('0xe'),'passReqToCallback':!![]},function(_0x3d01f0,_0x4a2f02,_0xe7d2df,_0x56f23c){process[a90_0x4715('0xf')](function(){});}));_0x3305d5[a90_0x4715('0xc')](a90_0x4715('0x10'),new LocalStrategy({'usernameField':a90_0x4715('0xd'),'passwordField':a90_0x4715('0xe'),'passReqToCallback':!![]},function(_0x3e8ceb,_0x4c986c,_0xe151e3,_0x59acc9){}));};