var a28_0x5373=['then','usernameNotFoundError','toJSON','sign','token','passwordNotMatchError','catch','errorResponse','usernameTakenError','generateHash','create','successResponse','stack','default','defineProperty','__esModule','jsonwebtoken','i18n','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','model','login','bind','createAccount','findOne','body','username','first_name','email','password'];(function(_0x1dc5cc,_0x36e96b){var _0x3a3fe7=function(_0xd2180b){while(--_0xd2180b){_0x1dc5cc['push'](_0x1dc5cc['shift']());}};_0x3a3fe7(++_0x36e96b);}(a28_0x5373,0x1a1));var a28_0x440f=function(_0x5e6bff,_0x383fd1){_0x5e6bff=_0x5e6bff-0x0;var _0x3a4e12=a28_0x5373[_0x5e6bff];return _0x3a4e12;};'use strict';Object[a28_0x440f('0x0')](exports,a28_0x440f('0x1'),{'value':!![]});const jwt=require(a28_0x440f('0x2'));const i18n=require(a28_0x440f('0x3'));const configJwt=require('../../config/jwt.js');const authUtils=require(a28_0x440f('0x4'));const responseUtils=require(a28_0x440f('0x5'));const LocaleStrings=require(a28_0x440f('0x6'));class AuthConstroller{constructor(_0x3e93f1){this[a28_0x440f('0x7')]=_0x3e93f1;this[a28_0x440f('0x8')]=this[a28_0x440f('0x8')][a28_0x440f('0x9')](this);this['createAccount']=this[a28_0x440f('0xa')]['bind'](this);}[a28_0x440f('0x8')](_0xb6c1c4,_0x28b01a,_0x22fc1d){this['model'][a28_0x440f('0xb')]({'where':{'username':_0xb6c1c4[a28_0x440f('0xc')][a28_0x440f('0xd')]},'attributes':['id',a28_0x440f('0xe'),'last_name',a28_0x440f('0xf'),'username',a28_0x440f('0x10')]})[a28_0x440f('0x11')](_0x56c013=>{if(!_0x56c013){return responseUtils['errorResponse'](_0x28b01a,LocaleStrings[a28_0x440f('0x12')],0x193);}if(authUtils['validPassword'](_0xb6c1c4['body'][a28_0x440f('0x10')],_0x56c013[a28_0x440f('0x10')])){_0x56c013=_0x56c013[a28_0x440f('0x13')]();const _0x3ec3b5={'id':_0x56c013['id']};const _0x337489=jwt[a28_0x440f('0x14')](_0x3ec3b5,configJwt['secret']);delete _0x56c013[a28_0x440f('0x10')];_0x56c013[a28_0x440f('0x15')]=_0x337489;return responseUtils['successResponse'](_0x28b01a,_0x56c013,0xc8);}else{return responseUtils['errorResponse'](_0x28b01a,_0x28b01a['__'](LocaleStrings[a28_0x440f('0x16')]),0x193);}})[a28_0x440f('0x17')](_0x456e81=>{return responseUtils[a28_0x440f('0x18')](_0x28b01a,_0x456e81['stack'],0x1f4);});}[a28_0x440f('0xa')](_0x22a18e,_0x2ba05b,_0x2f032e){this['model'][a28_0x440f('0xb')]({'where':{'username':_0x22a18e[a28_0x440f('0xc')]['username']}})[a28_0x440f('0x11')](function(_0x58b7e1){if(_0x58b7e1){return responseUtils['errorResponse'](_0x2ba05b,_0x2ba05b['__'](LocaleStrings[a28_0x440f('0x19')],_0x22a18e[a28_0x440f('0xc')]['username']),0x193);}else{_0x22a18e[a28_0x440f('0xc')]['email']=_0x22a18e[a28_0x440f('0xc')]['username'];const _0x5b66b0={'username':_0x22a18e['body']['username'],'password':authUtils[a28_0x440f('0x1a')](_0x22a18e[a28_0x440f('0xc')]['password'])};this[a28_0x440f('0x7')][a28_0x440f('0x1b')](_0x5b66b0)[a28_0x440f('0x11')](function(_0x34607e,_0x496a09){return responseUtils[a28_0x440f('0x1c')](_0x2ba05b,_0x34607e,0xc8);})[a28_0x440f('0x17')](_0x212284=>{return responseUtils[a28_0x440f('0x18')](_0x2ba05b,_0x212284[a28_0x440f('0x1d')],0x1f4);});}})[a28_0x440f('0x17')](_0xee6cce=>{return responseUtils['errorResponse'](_0x2ba05b,_0xee6cce['stack'],0x1f4);});}}exports[a28_0x440f('0x1e')]=AuthConstroller;