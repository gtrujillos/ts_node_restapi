var a9_0x2990=['createAccount','bind','login','findOne','username','last_name','email','then','errorResponse','usernameNotFoundError','body','password','toJSON','sign','token','successResponse','passwordNotMatchError','catch','stack','usernameTakenError','generateHash','create','default','defineProperty','__esModule','jsonwebtoken','../../infrastructure/response-utils','model'];(function(_0x1dbe14,_0x11dfc7){var _0x28ffb3=function(_0x1369d1){while(--_0x1369d1){_0x1dbe14['push'](_0x1dbe14['shift']());}};_0x28ffb3(++_0x11dfc7);}(a9_0x2990,0x87));var a9_0x2b69=function(_0x38688c,_0x30ca72){_0x38688c=_0x38688c-0x0;var _0x36c59a=a9_0x2990[_0x38688c];return _0x36c59a;};'use strict';Object[a9_0x2b69('0x0')](exports,a9_0x2b69('0x1'),{'value':!![]});const jwt=require(a9_0x2b69('0x2'));const i18n=require('i18n');const configJwt=require('../../config/jwt.js');const authUtils=require('../../infrastructure/auth-utils');const responseUtils=require(a9_0x2b69('0x3'));const LocaleStrings=require('../../resources/locale-strings');class AuthConstroller{constructor(_0x4121f4){this[a9_0x2b69('0x4')]=_0x4121f4;this['login']=this['login']['bind'](this);this['createAccount']=this[a9_0x2b69('0x5')][a9_0x2b69('0x6')](this);}[a9_0x2b69('0x7')](_0xc5f5a0,_0x1970d6,_0x3fc4db){this[a9_0x2b69('0x4')][a9_0x2b69('0x8')]({'where':{'username':_0xc5f5a0['body'][a9_0x2b69('0x9')]},'attributes':['id','first_name',a9_0x2b69('0xa'),a9_0x2b69('0xb'),a9_0x2b69('0x9'),'password']})[a9_0x2b69('0xc')](_0x1ad869=>{if(!_0x1ad869){return responseUtils[a9_0x2b69('0xd')](_0x1970d6,LocaleStrings[a9_0x2b69('0xe')],0x193);}if(authUtils['validPassword'](_0xc5f5a0[a9_0x2b69('0xf')][a9_0x2b69('0x10')],_0x1ad869[a9_0x2b69('0x10')])){_0x1ad869=_0x1ad869[a9_0x2b69('0x11')]();const _0x2bb49b={'id':_0x1ad869['id']};const _0x350196=jwt[a9_0x2b69('0x12')](_0x2bb49b,configJwt['secret']);delete _0x1ad869[a9_0x2b69('0x10')];_0x1ad869[a9_0x2b69('0x13')]=_0x350196;return responseUtils[a9_0x2b69('0x14')](_0x1970d6,_0x1ad869,0xc8);}else{return responseUtils[a9_0x2b69('0xd')](_0x1970d6,_0x1970d6['__'](LocaleStrings[a9_0x2b69('0x15')]),0x193);}})[a9_0x2b69('0x16')](_0x430a96=>{return responseUtils[a9_0x2b69('0xd')](_0x1970d6,_0x430a96[a9_0x2b69('0x17')],0x1f4);});}[a9_0x2b69('0x5')](_0x52e3b2,_0x2ba73e,_0x236a7b){this[a9_0x2b69('0x4')]['findOne']({'where':{'username':_0x52e3b2[a9_0x2b69('0xf')][a9_0x2b69('0x9')]}})[a9_0x2b69('0xc')](function(_0x22f80b){if(_0x22f80b){return responseUtils[a9_0x2b69('0xd')](_0x2ba73e,_0x2ba73e['__'](LocaleStrings[a9_0x2b69('0x18')],_0x52e3b2['body'][a9_0x2b69('0x9')]),0x193);}else{_0x52e3b2[a9_0x2b69('0xf')]['email']=_0x52e3b2['body'][a9_0x2b69('0x9')];const _0x4de6b9={'username':_0x52e3b2['body'][a9_0x2b69('0x9')],'password':authUtils[a9_0x2b69('0x19')](_0x52e3b2[a9_0x2b69('0xf')][a9_0x2b69('0x10')])};this[a9_0x2b69('0x4')][a9_0x2b69('0x1a')](_0x4de6b9)[a9_0x2b69('0xc')](function(_0x2fc97e,_0x568ddc){return responseUtils[a9_0x2b69('0x14')](_0x2ba73e,_0x2fc97e,0xc8);})[a9_0x2b69('0x16')](_0x5dbe5f=>{return responseUtils['errorResponse'](_0x2ba73e,_0x5dbe5f[a9_0x2b69('0x17')],0x1f4);});}})[a9_0x2b69('0x16')](_0x11975e=>{return responseUtils['errorResponse'](_0x2ba73e,_0x11975e[a9_0x2b69('0x17')],0x1f4);});}}exports[a9_0x2b69('0x1b')]=AuthConstroller;