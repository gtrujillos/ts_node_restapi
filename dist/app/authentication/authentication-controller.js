var a11_0x15f6=['model','login','bind','createAccount','findOne','body','username','first_name','last_name','email','password','errorResponse','usernameNotFoundError','validPassword','uuid','options','token','stack','then','usernameTakenError','generateHash','create','dataValues','status','created_at','sign','secret','catch','default','i18n','../../config/jwt.js','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','string-format'];(function(_0x54c0de,_0x2890ce){var _0x3c87d7=function(_0x5ab174){while(--_0x5ab174){_0x54c0de['push'](_0x54c0de['shift']());}};_0x3c87d7(++_0x2890ce);}(a11_0x15f6,0x1c1));var a11_0x4b9f=function(_0x2e5a44,_0x58613f){_0x2e5a44=_0x2e5a44-0x0;var _0xe2e97d=a11_0x15f6[_0x2e5a44];return _0xe2e97d;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const jwt=require('jsonwebtoken');const i18n=require(a11_0x4b9f('0x0'));const configJwt=require(a11_0x4b9f('0x1'));const authUtils=require(a11_0x4b9f('0x2'));const responseUtils=require(a11_0x4b9f('0x3'));const LocaleStrings=require(a11_0x4b9f('0x4'));const format=require(a11_0x4b9f('0x5'));class AuthenticationController{constructor(_0x3b30e3){this[a11_0x4b9f('0x6')]=_0x3b30e3;this[a11_0x4b9f('0x7')]=this[a11_0x4b9f('0x7')][a11_0x4b9f('0x8')](this);this[a11_0x4b9f('0x9')]=this[a11_0x4b9f('0x9')][a11_0x4b9f('0x8')](this);}[a11_0x4b9f('0x7')](_0x26d5e2,_0x35ac1b,_0x3cb3ce){this[a11_0x4b9f('0x6')][a11_0x4b9f('0xa')]({'where':{'username':_0x26d5e2[a11_0x4b9f('0xb')][a11_0x4b9f('0xc')]},'attributes':['uuid',a11_0x4b9f('0xd'),a11_0x4b9f('0xe'),a11_0x4b9f('0xf'),a11_0x4b9f('0xc'),a11_0x4b9f('0x10')]})['then'](_0x35c5f0=>{if(!_0x35c5f0){return responseUtils[a11_0x4b9f('0x11')](_0x35ac1b,format(LocaleStrings[a11_0x4b9f('0x12')],_0x26d5e2['body']['username']),0x193);}if(authUtils[a11_0x4b9f('0x13')](_0x26d5e2[a11_0x4b9f('0xb')][a11_0x4b9f('0x10')],_0x35c5f0[a11_0x4b9f('0x10')])){_0x35c5f0=_0x35c5f0['toJSON']();const _0x389b19={'uuid':_0x35c5f0[a11_0x4b9f('0x14')]};const _0x482804=jwt['sign'](_0x389b19,configJwt['secret'],configJwt[a11_0x4b9f('0x15')]);delete _0x35c5f0[a11_0x4b9f('0x10')];_0x35c5f0[a11_0x4b9f('0x16')]=_0x482804;return responseUtils['successResponse'](_0x35ac1b,_0x35c5f0,0xc8);}else{return responseUtils[a11_0x4b9f('0x11')](_0x35ac1b,format(LocaleStrings['passwordNotMatchError']),0x193);}})['catch'](_0x15cdf9=>{return responseUtils[a11_0x4b9f('0x11')](_0x35ac1b,_0x15cdf9[a11_0x4b9f('0x17')],0x1f4);});}[a11_0x4b9f('0x9')](_0x39aec2,_0x5b1a0e,_0xd8f003){this['model'][a11_0x4b9f('0xa')]({'where':{'username':_0x39aec2[a11_0x4b9f('0xb')][a11_0x4b9f('0xc')]}})[a11_0x4b9f('0x18')](_0x28b296=>{if(_0x28b296){return responseUtils[a11_0x4b9f('0x11')](_0x5b1a0e,format(LocaleStrings[a11_0x4b9f('0x19')],_0x39aec2[a11_0x4b9f('0xb')][a11_0x4b9f('0xc')]),0x193);}else{_0x39aec2['body'][a11_0x4b9f('0xf')]=_0x39aec2[a11_0x4b9f('0xb')][a11_0x4b9f('0xc')];const _0x330fc6={'first_name':_0x39aec2[a11_0x4b9f('0xb')][a11_0x4b9f('0xd')],'last_name':_0x39aec2['body'][a11_0x4b9f('0xe')],'email':_0x39aec2['body'][a11_0x4b9f('0xf')],'username':_0x39aec2['body'][a11_0x4b9f('0xc')],'password':authUtils[a11_0x4b9f('0x1a')](_0x39aec2['body']['password'])};this[a11_0x4b9f('0x6')][a11_0x4b9f('0x1b')](_0x330fc6)[a11_0x4b9f('0x18')](function(_0x2fdc94,_0x4d6646){delete _0x2fdc94[a11_0x4b9f('0x1c')]['id'];delete _0x2fdc94[a11_0x4b9f('0x1c')][a11_0x4b9f('0x1d')];delete _0x2fdc94[a11_0x4b9f('0x1c')][a11_0x4b9f('0x10')];delete _0x2fdc94['dataValues']['updated_at'];delete _0x2fdc94[a11_0x4b9f('0x1c')][a11_0x4b9f('0x1e')];const _0x1a09f2={'uuid':_0x2fdc94[a11_0x4b9f('0x14')]};const _0x647e2e=jwt[a11_0x4b9f('0x1f')](_0x1a09f2,configJwt[a11_0x4b9f('0x20')],configJwt[a11_0x4b9f('0x15')]);_0x2fdc94[a11_0x4b9f('0x1c')]['token']=_0x647e2e;return responseUtils['successResponse'](_0x5b1a0e,_0x2fdc94,0xc8);})[a11_0x4b9f('0x21')](_0x34b797=>{return responseUtils[a11_0x4b9f('0x11')](_0x5b1a0e,_0x34b797[a11_0x4b9f('0x17')],0x1f4);});}})[a11_0x4b9f('0x21')](_0x53030f=>{return responseUtils['errorResponse'](_0x5b1a0e,_0x53030f[a11_0x4b9f('0x17')],0x1f4);});}}exports[a11_0x4b9f('0x22')]=AuthenticationController;