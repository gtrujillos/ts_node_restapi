var a11_0x1294=['successResponse','passwordNotMatchError','catch','generateHash','dataValues','status','updated_at','created_at','default','__esModule','jsonwebtoken','i18n','../../config/jwt.js','../../infrastructure/auth-utils','string-format','model','login','bind','createAccount','findOne','body','first_name','last_name','email','username','password','then','errorResponse','usernameNotFoundError','validPassword','toJSON','uuid','sign','secret','options','token'];(function(_0x2f7ae6,_0x1692a9){var _0x167c32=function(_0x5abda0){while(--_0x5abda0){_0x2f7ae6['push'](_0x2f7ae6['shift']());}};_0x167c32(++_0x1692a9);}(a11_0x1294,0x171));var a11_0x2adf=function(_0x3c03a3,_0x199a97){_0x3c03a3=_0x3c03a3-0x0;var _0x213fff=a11_0x1294[_0x3c03a3];return _0x213fff;};'use strict';Object['defineProperty'](exports,a11_0x2adf('0x0'),{'value':!![]});const jwt=require(a11_0x2adf('0x1'));const i18n=require(a11_0x2adf('0x2'));const configJwt=require(a11_0x2adf('0x3'));const authUtils=require(a11_0x2adf('0x4'));const responseUtils=require('../../infrastructure/response-utils');const LocaleStrings=require('../../resources/locale-strings');const format=require(a11_0x2adf('0x5'));class AuthenticationController{constructor(_0x5da431){this[a11_0x2adf('0x6')]=_0x5da431;this['login']=this[a11_0x2adf('0x7')][a11_0x2adf('0x8')](this);this[a11_0x2adf('0x9')]=this[a11_0x2adf('0x9')]['bind'](this);}[a11_0x2adf('0x7')](_0x55139c,_0x1feacf,_0x29a54e){this[a11_0x2adf('0x6')][a11_0x2adf('0xa')]({'where':{'username':_0x55139c[a11_0x2adf('0xb')]['username']},'attributes':['uuid',a11_0x2adf('0xc'),a11_0x2adf('0xd'),a11_0x2adf('0xe'),a11_0x2adf('0xf'),a11_0x2adf('0x10')]})[a11_0x2adf('0x11')](_0x3ce4ea=>{if(!_0x3ce4ea){return responseUtils[a11_0x2adf('0x12')](_0x1feacf,format(LocaleStrings[a11_0x2adf('0x13')],_0x55139c[a11_0x2adf('0xb')][a11_0x2adf('0xf')]),0x193);}if(authUtils[a11_0x2adf('0x14')](_0x55139c[a11_0x2adf('0xb')][a11_0x2adf('0x10')],_0x3ce4ea[a11_0x2adf('0x10')])){_0x3ce4ea=_0x3ce4ea[a11_0x2adf('0x15')]();const _0x2e9ee6={'uuid':_0x3ce4ea[a11_0x2adf('0x16')]};const _0x36debb=jwt[a11_0x2adf('0x17')](_0x2e9ee6,configJwt[a11_0x2adf('0x18')],configJwt[a11_0x2adf('0x19')]);delete _0x3ce4ea[a11_0x2adf('0x10')];_0x3ce4ea[a11_0x2adf('0x1a')]=_0x36debb;return responseUtils[a11_0x2adf('0x1b')](_0x1feacf,_0x3ce4ea,0xc8);}else{return responseUtils[a11_0x2adf('0x12')](_0x1feacf,format(LocaleStrings[a11_0x2adf('0x1c')]),0x193);}})[a11_0x2adf('0x1d')](_0x35cde9=>{return responseUtils[a11_0x2adf('0x12')](_0x1feacf,_0x35cde9['stack'],0x1f4);});}[a11_0x2adf('0x9')](_0x36d799,_0x3224ee,_0x34223d){this[a11_0x2adf('0x6')][a11_0x2adf('0xa')]({'where':{'username':_0x36d799[a11_0x2adf('0xb')][a11_0x2adf('0xf')]}})[a11_0x2adf('0x11')](_0x185f0c=>{if(_0x185f0c){return responseUtils[a11_0x2adf('0x12')](_0x3224ee,format(LocaleStrings['usernameTakenError'],_0x36d799[a11_0x2adf('0xb')]['username']),0x193);}else{_0x36d799['body'][a11_0x2adf('0xe')]=_0x36d799[a11_0x2adf('0xb')][a11_0x2adf('0xf')];const _0x63241d={'first_name':_0x36d799[a11_0x2adf('0xb')][a11_0x2adf('0xc')],'last_name':_0x36d799[a11_0x2adf('0xb')][a11_0x2adf('0xd')],'email':_0x36d799[a11_0x2adf('0xb')]['email'],'username':_0x36d799[a11_0x2adf('0xb')][a11_0x2adf('0xf')],'password':authUtils[a11_0x2adf('0x1e')](_0x36d799['body'][a11_0x2adf('0x10')])};this['model']['create'](_0x63241d)['then'](function(_0x8edcef,_0x59db82){delete _0x8edcef[a11_0x2adf('0x1f')]['id'];delete _0x8edcef[a11_0x2adf('0x1f')][a11_0x2adf('0x20')];delete _0x8edcef[a11_0x2adf('0x1f')][a11_0x2adf('0x10')];delete _0x8edcef[a11_0x2adf('0x1f')][a11_0x2adf('0x21')];delete _0x8edcef[a11_0x2adf('0x1f')][a11_0x2adf('0x22')];const _0x4103ba={'uuid':_0x8edcef[a11_0x2adf('0x16')]};const _0x429ec0=jwt[a11_0x2adf('0x17')](_0x4103ba,configJwt[a11_0x2adf('0x18')],configJwt['options']);_0x8edcef[a11_0x2adf('0x1f')][a11_0x2adf('0x1a')]=_0x429ec0;return responseUtils[a11_0x2adf('0x1b')](_0x3224ee,_0x8edcef,0xc8);})['catch'](_0x48d48e=>{return responseUtils[a11_0x2adf('0x12')](_0x3224ee,_0x48d48e['stack'],0x1f4);});}})[a11_0x2adf('0x1d')](_0x2f537f=>{return responseUtils['errorResponse'](_0x3224ee,_0x2f537f['stack'],0x1f4);});}}exports[a11_0x2adf('0x23')]=AuthenticationController;