var a28_0x45a1=['generateHash','create','then','default','defineProperty','jsonwebtoken','i18n','../../config/jwt.js','../../infrastructure/response-utils','../../resources/locale-strings','model','login','bind','createAccount','findOne','body','username','first_name','last_name','email','password','errorResponse','usernameNotFoundError','validPassword','toJSON','secret','token','successResponse','passwordNotMatchError','catch','stack','usernameTakenError'];(function(_0x3c2487,_0x1e6b18){var _0x1650ad=function(_0x47d39b){while(--_0x47d39b){_0x3c2487['push'](_0x3c2487['shift']());}};_0x1650ad(++_0x1e6b18);}(a28_0x45a1,0x1a4));var a28_0x4c14=function(_0x3e67a8,_0x200680){_0x3e67a8=_0x3e67a8-0x0;var _0x2ba5a0=a28_0x45a1[_0x3e67a8];return _0x2ba5a0;};'use strict';Object[a28_0x4c14('0x0')](exports,'__esModule',{'value':!![]});const jwt=require(a28_0x4c14('0x1'));const i18n=require(a28_0x4c14('0x2'));const configJwt=require(a28_0x4c14('0x3'));const authUtils=require('../../infrastructure/auth-utils');const responseUtils=require(a28_0x4c14('0x4'));const LocaleStrings=require(a28_0x4c14('0x5'));class AuthConstroller{constructor(_0x420bd5){this[a28_0x4c14('0x6')]=_0x420bd5;this[a28_0x4c14('0x7')]=this[a28_0x4c14('0x7')][a28_0x4c14('0x8')](this);this[a28_0x4c14('0x9')]=this['createAccount'][a28_0x4c14('0x8')](this);}[a28_0x4c14('0x7')](_0x216832,_0x1110d6,_0x469550){this[a28_0x4c14('0x6')][a28_0x4c14('0xa')]({'where':{'username':_0x216832[a28_0x4c14('0xb')][a28_0x4c14('0xc')]},'attributes':['id',a28_0x4c14('0xd'),a28_0x4c14('0xe'),a28_0x4c14('0xf'),a28_0x4c14('0xc'),a28_0x4c14('0x10')]})['then'](_0x5afaeb=>{if(!_0x5afaeb){return responseUtils[a28_0x4c14('0x11')](_0x1110d6,LocaleStrings[a28_0x4c14('0x12')],0x193);}if(authUtils[a28_0x4c14('0x13')](_0x216832[a28_0x4c14('0xb')][a28_0x4c14('0x10')],_0x5afaeb[a28_0x4c14('0x10')])){_0x5afaeb=_0x5afaeb[a28_0x4c14('0x14')]();const _0x4519f4={'id':_0x5afaeb['id']};const _0x14613c=jwt['sign'](_0x4519f4,configJwt[a28_0x4c14('0x15')]);delete _0x5afaeb['password'];_0x5afaeb[a28_0x4c14('0x16')]=_0x14613c;return responseUtils[a28_0x4c14('0x17')](_0x1110d6,_0x5afaeb,0xc8);}else{return responseUtils[a28_0x4c14('0x11')](_0x1110d6,_0x1110d6['__'](LocaleStrings[a28_0x4c14('0x18')]),0x193);}})[a28_0x4c14('0x19')](_0x4d3f20=>{return responseUtils[a28_0x4c14('0x11')](_0x1110d6,_0x4d3f20[a28_0x4c14('0x1a')],0x1f4);});}[a28_0x4c14('0x9')](_0x4dcb9c,_0x4ce4e5,_0x4f0b35){this['model'][a28_0x4c14('0xa')]({'where':{'username':_0x4dcb9c[a28_0x4c14('0xb')][a28_0x4c14('0xc')]}})['then'](function(_0x14b425){if(_0x14b425){return responseUtils['errorResponse'](_0x4ce4e5,_0x4ce4e5['__'](LocaleStrings[a28_0x4c14('0x1b')],_0x4dcb9c[a28_0x4c14('0xb')][a28_0x4c14('0xc')]),0x193);}else{_0x4dcb9c[a28_0x4c14('0xb')]['email']=_0x4dcb9c[a28_0x4c14('0xb')][a28_0x4c14('0xc')];const _0x51bc9e={'username':_0x4dcb9c['body'][a28_0x4c14('0xc')],'password':authUtils[a28_0x4c14('0x1c')](_0x4dcb9c[a28_0x4c14('0xb')][a28_0x4c14('0x10')])};this[a28_0x4c14('0x6')][a28_0x4c14('0x1d')](_0x51bc9e)[a28_0x4c14('0x1e')](function(_0x3a402e,_0x29baa2){return responseUtils[a28_0x4c14('0x17')](_0x4ce4e5,_0x3a402e,0xc8);})[a28_0x4c14('0x19')](_0x59be2c=>{return responseUtils['errorResponse'](_0x4ce4e5,_0x59be2c['stack'],0x1f4);});}})[a28_0x4c14('0x19')](_0x4fde87=>{return responseUtils[a28_0x4c14('0x11')](_0x4ce4e5,_0x4fde87[a28_0x4c14('0x1a')],0x1f4);});}}exports[a28_0x4c14('0x1f')]=AuthConstroller;