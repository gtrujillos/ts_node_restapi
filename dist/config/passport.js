var a86_0x1369=['Strategy','passport-jwt','../config/jwt.js','exports','serializeUser','ExtractJwt','jwtFromRequest','fromHeader','token','secretOrKey','secret','then','catch','email','nextTick','use','local-login','password','passport-local'];(function(_0x546a53,_0x3f720e){var _0x440369=function(_0x2e1b64){while(--_0x2e1b64){_0x546a53['push'](_0x546a53['shift']());}};_0x440369(++_0x3f720e);}(a86_0x1369,0x11c));var a86_0xf0b4=function(_0x1a7cd7,_0x2aecd1){_0x1a7cd7=_0x1a7cd7-0x0;var _0x228eeb=a86_0x1369[_0x1a7cd7];return _0x228eeb;};let LocalStrategy=require(a86_0xf0b4('0x0'))[a86_0xf0b4('0x1')];let passportJWT=require(a86_0xf0b4('0x2'));let configJwt=require(a86_0xf0b4('0x3'));module[a86_0xf0b4('0x4')]=function(_0x24013c,_0x2c6899){_0x24013c[a86_0xf0b4('0x5')](function(_0x56ada5,_0x1d9079){_0x1d9079(null,_0x56ada5['id']);});const _0x1d714e=passportJWT[a86_0xf0b4('0x6')];const _0x4c8a43=passportJWT['Strategy'];const _0x38aa9f={'jwtFromRequest':'','secretOrKey':''};_0x38aa9f[a86_0xf0b4('0x7')]=_0x1d714e[a86_0xf0b4('0x8')](a86_0xf0b4('0x9'));_0x38aa9f[a86_0xf0b4('0xa')]=configJwt[a86_0xf0b4('0xb')];const _0x4c676c=new _0x4c8a43(_0x38aa9f,function(_0x566722,_0x8c42c3){_0x2c6899['findAll']({'where':{'uuid':_0x566722['uuid']}})[a86_0xf0b4('0xc')](_0x1cb0ec=>{if(!_0x1cb0ec){return _0x8c42c3(null,null);}return _0x8c42c3(null,_0x1cb0ec);})[a86_0xf0b4('0xd')](_0x221ca9=>{return _0x8c42c3(_0x221ca9,null);});});_0x24013c['use'](_0x4c676c);_0x24013c['use']('local-signup',new LocalStrategy({'usernameField':a86_0xf0b4('0xe'),'passwordField':'password','passReqToCallback':!![]},function(_0x49b3a6,_0x2c1a07,_0x1d78af,_0x8eb4ce){process[a86_0xf0b4('0xf')](function(){});}));_0x24013c[a86_0xf0b4('0x10')](a86_0xf0b4('0x11'),new LocalStrategy({'usernameField':a86_0xf0b4('0xe'),'passwordField':a86_0xf0b4('0x12'),'passReqToCallback':!![]},function(_0x5167dd,_0x5ccf67,_0x275dfb,_0x134b15){}));};