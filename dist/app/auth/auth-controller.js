var a9_0xd690=['stack','usernameTakenError','create','catch','default','defineProperty','__esModule','jsonwebtoken','i18n','../../infrastructure/response-utils','../../resources/locale-strings','login','createAccount','bind','model','findOne','username','first_name','last_name','email','password','then','usernameNotFoundError','body','toJSON','sign','token','successResponse','errorResponse','passwordNotMatchError'];(function(_0x2d0eaa,_0x22ea16){var _0x3eef08=function(_0x3f2546){while(--_0x3f2546){_0x2d0eaa['push'](_0x2d0eaa['shift']());}};_0x3eef08(++_0x22ea16);}(a9_0xd690,0x9b));var a9_0x3a86=function(_0xadf0f7,_0x92b00e){_0xadf0f7=_0xadf0f7-0x0;var _0x5eea6e=a9_0xd690[_0xadf0f7];return _0x5eea6e;};'use strict';Object[a9_0x3a86('0x0')](exports,a9_0x3a86('0x1'),{'value':!![]});const jwt=require(a9_0x3a86('0x2'));const i18n=require(a9_0x3a86('0x3'));const configJwt=require('../../config/jwt.js');const authUtils=require('../../infrastructure/auth-utils');const responseUtils=require(a9_0x3a86('0x4'));const LocaleStrings=require(a9_0x3a86('0x5'));class AuthConstroller{constructor(_0x594d31){this['model']=_0x594d31;this[a9_0x3a86('0x6')]=this['login']['bind'](this);this[a9_0x3a86('0x7')]=this['createAccount'][a9_0x3a86('0x8')](this);}[a9_0x3a86('0x6')](_0x2ff93a,_0x3b7f19,_0x51e2b4){this[a9_0x3a86('0x9')][a9_0x3a86('0xa')]({'where':{'username':_0x2ff93a['body'][a9_0x3a86('0xb')]},'attributes':['id',a9_0x3a86('0xc'),a9_0x3a86('0xd'),a9_0x3a86('0xe'),a9_0x3a86('0xb'),a9_0x3a86('0xf')]})[a9_0x3a86('0x10')](_0x1f250a=>{if(!_0x1f250a){return responseUtils['errorResponse'](_0x3b7f19,LocaleStrings[a9_0x3a86('0x11')],0x193);}if(authUtils['validPassword'](_0x2ff93a[a9_0x3a86('0x12')]['password'],_0x1f250a[a9_0x3a86('0xf')])){_0x1f250a=_0x1f250a[a9_0x3a86('0x13')]();const _0x340309={'id':_0x1f250a['id']};const _0x501517=jwt[a9_0x3a86('0x14')](_0x340309,configJwt['secret']);delete _0x1f250a[a9_0x3a86('0xf')];_0x1f250a[a9_0x3a86('0x15')]=_0x501517;return responseUtils[a9_0x3a86('0x16')](_0x3b7f19,_0x1f250a,0xc8);}else{return responseUtils[a9_0x3a86('0x17')](_0x3b7f19,_0x3b7f19['__'](LocaleStrings[a9_0x3a86('0x18')]),0x193);}})['catch'](_0x331ae5=>{return responseUtils['errorResponse'](_0x3b7f19,_0x331ae5[a9_0x3a86('0x19')],0x1f4);});}[a9_0x3a86('0x7')](_0x3343e6,_0x4df510,_0x451c83){this[a9_0x3a86('0x9')][a9_0x3a86('0xa')]({'where':{'username':_0x3343e6[a9_0x3a86('0x12')][a9_0x3a86('0xb')]}})[a9_0x3a86('0x10')](function(_0x36c85f){if(_0x36c85f){return responseUtils[a9_0x3a86('0x17')](_0x4df510,_0x4df510['__'](LocaleStrings[a9_0x3a86('0x1a')],_0x3343e6['body']['username']),0x193);}else{_0x3343e6[a9_0x3a86('0x12')][a9_0x3a86('0xe')]=_0x3343e6[a9_0x3a86('0x12')][a9_0x3a86('0xb')];const _0x4ca47a={'username':_0x3343e6[a9_0x3a86('0x12')][a9_0x3a86('0xb')],'password':authUtils['generateHash'](_0x3343e6['body'][a9_0x3a86('0xf')])};this[a9_0x3a86('0x9')][a9_0x3a86('0x1b')](_0x4ca47a)[a9_0x3a86('0x10')](function(_0x431a8f,_0x12fc6b){return responseUtils[a9_0x3a86('0x16')](_0x4df510,_0x431a8f,0xc8);})[a9_0x3a86('0x1c')](_0x45bd4b=>{return responseUtils[a9_0x3a86('0x17')](_0x4df510,_0x45bd4b[a9_0x3a86('0x19')],0x1f4);});}})[a9_0x3a86('0x1c')](_0x1cc099=>{return responseUtils[a9_0x3a86('0x17')](_0x4df510,_0x1cc099[a9_0x3a86('0x19')],0x1f4);});}}exports[a9_0x3a86('0x1d')]=AuthConstroller;