var a9_0x256c=['email','password','then','errorResponse','usernameNotFoundError','toJSON','sign','secret','token','successResponse','passwordNotMatchError','catch','stack','generateHash','create','default','defineProperty','jsonwebtoken','i18n','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','model','login','bind','createAccount','findOne','body','username','first_name','last_name'];(function(_0x2a5340,_0x1ae6af){var _0x5776d2=function(_0x2bf323){while(--_0x2bf323){_0x2a5340['push'](_0x2a5340['shift']());}};_0x5776d2(++_0x1ae6af);}(a9_0x256c,0xca));var a9_0x2ace=function(_0x486e8c,_0x2c8167){_0x486e8c=_0x486e8c-0x0;var _0x4fa863=a9_0x256c[_0x486e8c];return _0x4fa863;};'use strict';Object[a9_0x2ace('0x0')](exports,'__esModule',{'value':!![]});const jwt=require(a9_0x2ace('0x1'));const i18n=require(a9_0x2ace('0x2'));const configJwt=require('../../config/jwt.js');const authUtils=require(a9_0x2ace('0x3'));const responseUtils=require(a9_0x2ace('0x4'));const LocaleStrings=require(a9_0x2ace('0x5'));class AuthConstroller{constructor(_0x5593a7){this[a9_0x2ace('0x6')]=_0x5593a7;this[a9_0x2ace('0x7')]=this[a9_0x2ace('0x7')][a9_0x2ace('0x8')](this);this[a9_0x2ace('0x9')]=this['createAccount'][a9_0x2ace('0x8')](this);}[a9_0x2ace('0x7')](_0x446a98,_0x36dd5b,_0x466fb2){this[a9_0x2ace('0x6')][a9_0x2ace('0xa')]({'where':{'username':_0x446a98[a9_0x2ace('0xb')][a9_0x2ace('0xc')]},'attributes':['id',a9_0x2ace('0xd'),a9_0x2ace('0xe'),a9_0x2ace('0xf'),a9_0x2ace('0xc'),a9_0x2ace('0x10')]})[a9_0x2ace('0x11')](_0x58437a=>{if(!_0x58437a){return responseUtils[a9_0x2ace('0x12')](_0x36dd5b,LocaleStrings[a9_0x2ace('0x13')],0x193);}if(authUtils['validPassword'](_0x446a98[a9_0x2ace('0xb')][a9_0x2ace('0x10')],_0x58437a[a9_0x2ace('0x10')])){_0x58437a=_0x58437a[a9_0x2ace('0x14')]();const _0x232140={'id':_0x58437a['id']};const _0x417e88=jwt[a9_0x2ace('0x15')](_0x232140,configJwt[a9_0x2ace('0x16')]);delete _0x58437a['password'];_0x58437a[a9_0x2ace('0x17')]=_0x417e88;return responseUtils[a9_0x2ace('0x18')](_0x36dd5b,_0x58437a,0xc8);}else{return responseUtils[a9_0x2ace('0x12')](_0x36dd5b,_0x36dd5b['__'](LocaleStrings[a9_0x2ace('0x19')]),0x193);}})[a9_0x2ace('0x1a')](_0xc0fb67=>{return responseUtils[a9_0x2ace('0x12')](_0x36dd5b,_0xc0fb67[a9_0x2ace('0x1b')],0x1f4);});}[a9_0x2ace('0x9')](_0x5f2295,_0x30d75c,_0x4ef942){this[a9_0x2ace('0x6')][a9_0x2ace('0xa')]({'where':{'username':_0x5f2295['body'][a9_0x2ace('0xc')]}})[a9_0x2ace('0x11')](function(_0x2258ea){if(_0x2258ea){return responseUtils['errorResponse'](_0x30d75c,_0x30d75c['__'](LocaleStrings['usernameTakenError'],_0x5f2295[a9_0x2ace('0xb')][a9_0x2ace('0xc')]),0x193);}else{_0x5f2295['body'][a9_0x2ace('0xf')]=_0x5f2295[a9_0x2ace('0xb')][a9_0x2ace('0xc')];const _0x552370={'username':_0x5f2295['body'][a9_0x2ace('0xc')],'password':authUtils[a9_0x2ace('0x1c')](_0x5f2295[a9_0x2ace('0xb')][a9_0x2ace('0x10')])};this[a9_0x2ace('0x6')][a9_0x2ace('0x1d')](_0x552370)[a9_0x2ace('0x11')](function(_0x1749d0,_0xa266b6){return responseUtils[a9_0x2ace('0x18')](_0x30d75c,_0x1749d0,0xc8);})[a9_0x2ace('0x1a')](_0x3b4241=>{return responseUtils[a9_0x2ace('0x12')](_0x30d75c,_0x3b4241[a9_0x2ace('0x1b')],0x1f4);});}})[a9_0x2ace('0x1a')](_0xa5ebaf=>{return responseUtils['errorResponse'](_0x30d75c,_0xa5ebaf[a9_0x2ace('0x1b')],0x1f4);});}}exports[a9_0x2ace('0x1e')]=AuthConstroller;