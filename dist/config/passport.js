var a196_0x6371=['email','password','nextTick','local-login','Strategy','../config/jwt.js','exports','serializeUser','ExtractJwt','jwtFromRequest','secretOrKey','then','length','dataValues','use','local-signup'];(function(_0x4b2550,_0x52ca82){var _0x1bec53=function(_0x15b3ad){while(--_0x15b3ad){_0x4b2550['push'](_0x4b2550['shift']());}};_0x1bec53(++_0x52ca82);}(a196_0x6371,0x174));var a196_0x4f15=function(_0x264571,_0x4e0d74){_0x264571=_0x264571-0x0;var _0x15ac7c=a196_0x6371[_0x264571];return _0x15ac7c;};let LocalStrategy=require('passport-local')[a196_0x4f15('0x0')];let passportJWT=require('passport-jwt');let configJwt=require(a196_0x4f15('0x1'));module[a196_0x4f15('0x2')]=function(_0x20dc82,_0x1f3ec0){_0x20dc82[a196_0x4f15('0x3')](function(_0x275c4c,_0xe32465){_0xe32465(null,_0x275c4c['id']);});const _0x3270a9=passportJWT[a196_0x4f15('0x4')];const _0xfdd886=passportJWT[a196_0x4f15('0x0')];const _0x1fc377={'jwtFromRequest':'','secretOrKey':''};_0x1fc377[a196_0x4f15('0x5')]=_0x3270a9['fromAuthHeaderAsBearerToken']();_0x1fc377[a196_0x4f15('0x6')]=configJwt['secret'];const _0x19ca3d=new _0xfdd886(_0x1fc377,function(_0x4c1a05,_0xf2759c){_0x1f3ec0['findAll']({'where':{'id':_0x4c1a05['id']}})[a196_0x4f15('0x7')](_0x3a2a33=>{if(!_0x3a2a33){return _0xf2759c(null,null);}let _0x4ec5d9=null;if(_0x3a2a33&&_0x3a2a33[a196_0x4f15('0x8')]>0x0){_0x4ec5d9=_0x3a2a33[0x0][a196_0x4f15('0x9')];}return _0xf2759c(null,_0x4ec5d9);})['catch'](_0x22bd25=>{return _0xf2759c(_0x22bd25,null);});});_0x20dc82[a196_0x4f15('0xa')](_0x19ca3d);_0x20dc82[a196_0x4f15('0xa')](a196_0x4f15('0xb'),new LocalStrategy({'usernameField':a196_0x4f15('0xc'),'passwordField':a196_0x4f15('0xd'),'passReqToCallback':!![]},function(_0x3af572,_0x209bd6,_0x50d51f,_0x2357a8){process[a196_0x4f15('0xe')](function(){});}));_0x20dc82[a196_0x4f15('0xa')](a196_0x4f15('0xf'),new LocalStrategy({'usernameField':a196_0x4f15('0xc'),'passwordField':a196_0x4f15('0xd'),'passReqToCallback':!![]},function(_0x2bc3d8,_0x2248da,_0x148ecd,_0x16de72){}));};