var a9_0x2584=['stack','findOne','usernameTakenError','generateHash','catch','default','__esModule','jsonwebtoken','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','model','login','bind','createAccount','body','first_name','last_name','email','username','password','then','errorResponse','usernameNotFoundError','validPassword','toJSON','sign','secret','passwordNotMatchError'];(function(_0x15e709,_0x5c5bcc){var _0x1847de=function(_0x26cfef){while(--_0x26cfef){_0x15e709['push'](_0x15e709['shift']());}};_0x1847de(++_0x5c5bcc);}(a9_0x2584,0x162));var a9_0x31c6=function(_0x37b118,_0x512a50){_0x37b118=_0x37b118-0x0;var _0x163dc1=a9_0x2584[_0x37b118];return _0x163dc1;};'use strict';Object['defineProperty'](exports,a9_0x31c6('0x0'),{'value':!![]});const jwt=require(a9_0x31c6('0x1'));const i18n=require('i18n');const configJwt=require('../../config/jwt.js');const authUtils=require(a9_0x31c6('0x2'));const responseUtils=require(a9_0x31c6('0x3'));const LocaleStrings=require(a9_0x31c6('0x4'));class AuthConstroller{constructor(_0x4c538e){this[a9_0x31c6('0x5')]=_0x4c538e;this[a9_0x31c6('0x6')]=this[a9_0x31c6('0x6')][a9_0x31c6('0x7')](this);this['createAccount']=this[a9_0x31c6('0x8')][a9_0x31c6('0x7')](this);}[a9_0x31c6('0x6')](_0x3819e1,_0x123e3f,_0x1ef424){this[a9_0x31c6('0x5')]['findOne']({'where':{'username':_0x3819e1[a9_0x31c6('0x9')]['username']},'attributes':['id',a9_0x31c6('0xa'),a9_0x31c6('0xb'),a9_0x31c6('0xc'),a9_0x31c6('0xd'),a9_0x31c6('0xe')]})[a9_0x31c6('0xf')](_0x3a434d=>{if(!_0x3a434d){return responseUtils[a9_0x31c6('0x10')](_0x123e3f,LocaleStrings[a9_0x31c6('0x11')],0x193);}if(authUtils[a9_0x31c6('0x12')](_0x3819e1[a9_0x31c6('0x9')]['password'],_0x3a434d['password'])){_0x3a434d=_0x3a434d[a9_0x31c6('0x13')]();const _0xc5351a={'id':_0x3a434d['id']};const _0x56beca=jwt[a9_0x31c6('0x14')](_0xc5351a,configJwt[a9_0x31c6('0x15')]);delete _0x3a434d[a9_0x31c6('0xe')];_0x3a434d['token']=_0x56beca;return responseUtils['successResponse'](_0x123e3f,_0x3a434d,0xc8);}else{return responseUtils['errorResponse'](_0x123e3f,_0x123e3f['__'](LocaleStrings[a9_0x31c6('0x16')]),0x193);}})['catch'](_0xf0786f=>{return responseUtils['errorResponse'](_0x123e3f,_0xf0786f[a9_0x31c6('0x17')],0x1f4);});}[a9_0x31c6('0x8')](_0x4a5040,_0x2636fd,_0x1f5ae9){this['model'][a9_0x31c6('0x18')]({'where':{'username':_0x4a5040[a9_0x31c6('0x9')][a9_0x31c6('0xd')]}})[a9_0x31c6('0xf')](function(_0x1b5934){if(_0x1b5934){return responseUtils['errorResponse'](_0x2636fd,_0x2636fd['__'](LocaleStrings[a9_0x31c6('0x19')],_0x4a5040[a9_0x31c6('0x9')][a9_0x31c6('0xd')]),0x193);}else{_0x4a5040[a9_0x31c6('0x9')][a9_0x31c6('0xc')]=_0x4a5040['body']['username'];const _0x466d74={'username':_0x4a5040[a9_0x31c6('0x9')][a9_0x31c6('0xd')],'password':authUtils[a9_0x31c6('0x1a')](_0x4a5040[a9_0x31c6('0x9')]['password'])};this[a9_0x31c6('0x5')]['create'](_0x466d74)[a9_0x31c6('0xf')](function(_0x1438a1,_0x4bb0e9){return responseUtils['successResponse'](_0x2636fd,_0x1438a1,0xc8);})[a9_0x31c6('0x1b')](_0x1ad080=>{return responseUtils[a9_0x31c6('0x10')](_0x2636fd,_0x1ad080[a9_0x31c6('0x17')],0x1f4);});}})['catch'](_0x1ad901=>{return responseUtils[a9_0x31c6('0x10')](_0x2636fd,_0x1ad901['stack'],0x1f4);});}}exports[a9_0x31c6('0x1c')]=AuthConstroller;