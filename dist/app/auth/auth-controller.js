var a28_0x3b84=['generateHash','create','stack','default','defineProperty','jsonwebtoken','../../config/jwt.js','../../infrastructure/auth-utils','model','login','bind','createAccount','body','username','last_name','email','password','usernameNotFoundError','toJSON','sign','secret','token','errorResponse','catch','then'];(function(_0x125f91,_0x91ba4e){var _0x51d695=function(_0x25b4dd){while(--_0x25b4dd){_0x125f91['push'](_0x125f91['shift']());}};_0x51d695(++_0x91ba4e);}(a28_0x3b84,0xfe));var a28_0x362f=function(_0x530894,_0x22cef7){_0x530894=_0x530894-0x0;var _0x396e61=a28_0x3b84[_0x530894];return _0x396e61;};'use strict';Object[a28_0x362f('0x0')](exports,'__esModule',{'value':!![]});const jwt=require(a28_0x362f('0x1'));const i18n=require('i18n');const configJwt=require(a28_0x362f('0x2'));const authUtils=require(a28_0x362f('0x3'));const responseUtils=require('../../infrastructure/response-utils');const LocaleStrings=require('../../resources/locale-strings');class AuthConstroller{constructor(_0x55dd11){this[a28_0x362f('0x4')]=_0x55dd11;this[a28_0x362f('0x5')]=this[a28_0x362f('0x5')][a28_0x362f('0x6')](this);this[a28_0x362f('0x7')]=this[a28_0x362f('0x7')][a28_0x362f('0x6')](this);}[a28_0x362f('0x5')](_0x2bdf24,_0x24c19e,_0x35592d){this[a28_0x362f('0x4')]['findOne']({'where':{'username':_0x2bdf24[a28_0x362f('0x8')][a28_0x362f('0x9')]},'attributes':['id','first_name',a28_0x362f('0xa'),a28_0x362f('0xb'),a28_0x362f('0x9'),a28_0x362f('0xc')]})['then'](_0x5d6b56=>{if(!_0x5d6b56){return responseUtils['errorResponse'](_0x24c19e,LocaleStrings[a28_0x362f('0xd')],0x193);}if(authUtils['validPassword'](_0x2bdf24[a28_0x362f('0x8')][a28_0x362f('0xc')],_0x5d6b56[a28_0x362f('0xc')])){_0x5d6b56=_0x5d6b56[a28_0x362f('0xe')]();const _0x4a16fc={'id':_0x5d6b56['id']};const _0x42f80a=jwt[a28_0x362f('0xf')](_0x4a16fc,configJwt[a28_0x362f('0x10')]);delete _0x5d6b56['password'];_0x5d6b56[a28_0x362f('0x11')]=_0x42f80a;return responseUtils['successResponse'](_0x24c19e,_0x5d6b56,0xc8);}else{return responseUtils[a28_0x362f('0x12')](_0x24c19e,_0x24c19e['__'](LocaleStrings['passwordNotMatchError']),0x193);}})[a28_0x362f('0x13')](_0xe8c083=>{return responseUtils[a28_0x362f('0x12')](_0x24c19e,_0xe8c083['stack'],0x1f4);});}['createAccount'](_0x5286a7,_0x4caa7a,_0x2efa99){this[a28_0x362f('0x4')]['findOne']({'where':{'username':_0x5286a7[a28_0x362f('0x8')][a28_0x362f('0x9')]}})[a28_0x362f('0x14')](function(_0x3192c3){if(_0x3192c3){return responseUtils[a28_0x362f('0x12')](_0x4caa7a,_0x4caa7a['__'](LocaleStrings['usernameTakenError'],_0x5286a7[a28_0x362f('0x8')]['username']),0x193);}else{_0x5286a7[a28_0x362f('0x8')][a28_0x362f('0xb')]=_0x5286a7[a28_0x362f('0x8')]['username'];const _0x12f95c={'username':_0x5286a7[a28_0x362f('0x8')][a28_0x362f('0x9')],'password':authUtils[a28_0x362f('0x15')](_0x5286a7[a28_0x362f('0x8')]['password'])};this['model'][a28_0x362f('0x16')](_0x12f95c)[a28_0x362f('0x14')](function(_0x22ca1e,_0x58c51a){return responseUtils['successResponse'](_0x4caa7a,_0x22ca1e,0xc8);})[a28_0x362f('0x13')](_0xe02769=>{return responseUtils[a28_0x362f('0x12')](_0x4caa7a,_0xe02769[a28_0x362f('0x17')],0x1f4);});}})[a28_0x362f('0x13')](_0xc87a01=>{return responseUtils[a28_0x362f('0x12')](_0x4caa7a,_0xc87a01[a28_0x362f('0x17')],0x1f4);});}}exports[a28_0x362f('0x18')]=AuthConstroller;