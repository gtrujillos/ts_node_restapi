var a11_0x1fce=['password','then','errorResponse','usernameNotFoundError','validPassword','toJSON','sign','secret','options','token','successResponse','passwordNotMatchError','usernameTakenError','email','create','dataValues','status','updated_at','stack','catch','default','defineProperty','__esModule','jsonwebtoken','../../config/jwt.js','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','string-format','login','bind','createAccount','model','body','uuid','first_name','username'];(function(_0x45658b,_0xa6ed42){var _0x51c273=function(_0x5a2c04){while(--_0x5a2c04){_0x45658b['push'](_0x45658b['shift']());}};_0x51c273(++_0xa6ed42);}(a11_0x1fce,0x84));var a11_0x660e=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a11_0x1fce[_0x3562b5];return _0x54d52d;};'use strict';Object[a11_0x660e('0x0')](exports,a11_0x660e('0x1'),{'value':!![]});const jwt=require(a11_0x660e('0x2'));const i18n=require('i18n');const configJwt=require(a11_0x660e('0x3'));const authUtils=require(a11_0x660e('0x4'));const responseUtils=require(a11_0x660e('0x5'));const LocaleStrings=require(a11_0x660e('0x6'));const format=require(a11_0x660e('0x7'));class AuthenticationController{constructor(_0x10bb61){this['model']=_0x10bb61;this[a11_0x660e('0x8')]=this[a11_0x660e('0x8')][a11_0x660e('0x9')](this);this['createAccount']=this[a11_0x660e('0xa')]['bind'](this);}[a11_0x660e('0x8')](_0x304440,_0x5e7869,_0x51771b){this[a11_0x660e('0xb')]['findOne']({'where':{'username':_0x304440[a11_0x660e('0xc')]['username']},'attributes':[a11_0x660e('0xd'),a11_0x660e('0xe'),'last_name','email',a11_0x660e('0xf'),a11_0x660e('0x10')]})[a11_0x660e('0x11')](_0x363f8a=>{if(!_0x363f8a){return responseUtils[a11_0x660e('0x12')](_0x5e7869,format(LocaleStrings[a11_0x660e('0x13')],_0x304440['body'][a11_0x660e('0xf')]),0x193);}if(authUtils[a11_0x660e('0x14')](_0x304440[a11_0x660e('0xc')][a11_0x660e('0x10')],_0x363f8a[a11_0x660e('0x10')])){_0x363f8a=_0x363f8a[a11_0x660e('0x15')]();const _0x612543={'uuid':_0x363f8a[a11_0x660e('0xd')]};const _0x42adab=jwt[a11_0x660e('0x16')](_0x612543,configJwt[a11_0x660e('0x17')],configJwt[a11_0x660e('0x18')]);delete _0x363f8a['password'];_0x363f8a[a11_0x660e('0x19')]=_0x42adab;return responseUtils[a11_0x660e('0x1a')](_0x5e7869,_0x363f8a,0xc8);}else{return responseUtils[a11_0x660e('0x12')](_0x5e7869,format(LocaleStrings[a11_0x660e('0x1b')]),0x193);}})['catch'](_0x47c4f9=>{return responseUtils[a11_0x660e('0x12')](_0x5e7869,_0x47c4f9['stack'],0x1f4);});}[a11_0x660e('0xa')](_0x359dd6,_0x404849,_0xed2770){this[a11_0x660e('0xb')]['findOne']({'where':{'username':_0x359dd6[a11_0x660e('0xc')][a11_0x660e('0xf')]}})[a11_0x660e('0x11')](_0x233c3e=>{if(_0x233c3e){return responseUtils[a11_0x660e('0x12')](_0x404849,format(LocaleStrings[a11_0x660e('0x1c')],_0x359dd6['body']['username']),0x193);}else{_0x359dd6['body']['email']=_0x359dd6[a11_0x660e('0xc')][a11_0x660e('0xf')];const _0x5c1ea8={'first_name':_0x359dd6[a11_0x660e('0xc')][a11_0x660e('0xe')],'last_name':_0x359dd6[a11_0x660e('0xc')]['last_name'],'email':_0x359dd6[a11_0x660e('0xc')][a11_0x660e('0x1d')],'username':_0x359dd6['body']['username'],'password':authUtils['generateHash'](_0x359dd6['body'][a11_0x660e('0x10')])};this[a11_0x660e('0xb')][a11_0x660e('0x1e')](_0x5c1ea8)[a11_0x660e('0x11')](function(_0x30ec51,_0x513dc9){delete _0x30ec51['dataValues']['id'];delete _0x30ec51[a11_0x660e('0x1f')][a11_0x660e('0x20')];delete _0x30ec51[a11_0x660e('0x1f')][a11_0x660e('0x10')];delete _0x30ec51[a11_0x660e('0x1f')][a11_0x660e('0x21')];delete _0x30ec51['dataValues']['created_at'];const _0x616613={'uuid':_0x30ec51[a11_0x660e('0xd')]};const _0x46c07f=jwt['sign'](_0x616613,configJwt[a11_0x660e('0x17')],configJwt['options']);_0x30ec51[a11_0x660e('0x1f')][a11_0x660e('0x19')]=_0x46c07f;return responseUtils['successResponse'](_0x404849,_0x30ec51,0xc8);})['catch'](_0x25b2c5=>{return responseUtils['errorResponse'](_0x404849,_0x25b2c5[a11_0x660e('0x22')],0x1f4);});}})[a11_0x660e('0x23')](_0x1e70f4=>{return responseUtils[a11_0x660e('0x12')](_0x404849,_0x1e70f4['stack'],0x1f4);});}}exports[a11_0x660e('0x24')]=AuthenticationController;