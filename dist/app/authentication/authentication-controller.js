var a11_0x9ccd=['login','model','findOne','username','uuid','email','password','then','errorResponse','usernameNotFoundError','body','validPassword','toJSON','sign','secret','options','token','successResponse','passwordNotMatchError','first_name','last_name','status','dataValues','updated_at','created_at','stack','catch','default','defineProperty','__esModule','jsonwebtoken','../../config/jwt.js','../../infrastructure/response-utils','../../resources/locale-strings','string-format','bind','createAccount'];(function(_0x1b3d46,_0x3dee0e){var _0x20be90=function(_0x51d97d){while(--_0x51d97d){_0x1b3d46['push'](_0x1b3d46['shift']());}};_0x20be90(++_0x3dee0e);}(a11_0x9ccd,0xfa));var a11_0x46dc=function(_0x1d2076,_0x2a7e5a){_0x1d2076=_0x1d2076-0x0;var _0x6ffefc=a11_0x9ccd[_0x1d2076];return _0x6ffefc;};'use strict';Object[a11_0x46dc('0x0')](exports,a11_0x46dc('0x1'),{'value':!![]});const jwt=require(a11_0x46dc('0x2'));const i18n=require('i18n');const configJwt=require(a11_0x46dc('0x3'));const authUtils=require('../../infrastructure/auth-utils');const responseUtils=require(a11_0x46dc('0x4'));const LocaleStrings=require(a11_0x46dc('0x5'));const format=require(a11_0x46dc('0x6'));class AuthenticationController{constructor(_0x24d975){this['model']=_0x24d975;this['login']=this['login'][a11_0x46dc('0x7')](this);this[a11_0x46dc('0x8')]=this[a11_0x46dc('0x8')]['bind'](this);}[a11_0x46dc('0x9')](_0x3450ea,_0x4f78ba,_0x3505fc){this[a11_0x46dc('0xa')][a11_0x46dc('0xb')]({'where':{'username':_0x3450ea['body'][a11_0x46dc('0xc')]},'attributes':[a11_0x46dc('0xd'),'first_name','last_name',a11_0x46dc('0xe'),a11_0x46dc('0xc'),a11_0x46dc('0xf')]})[a11_0x46dc('0x10')](_0x2689b2=>{if(!_0x2689b2){return responseUtils[a11_0x46dc('0x11')](_0x4f78ba,format(LocaleStrings[a11_0x46dc('0x12')],_0x3450ea[a11_0x46dc('0x13')]['username']),0x193);}if(authUtils[a11_0x46dc('0x14')](_0x3450ea[a11_0x46dc('0x13')][a11_0x46dc('0xf')],_0x2689b2[a11_0x46dc('0xf')])){_0x2689b2=_0x2689b2[a11_0x46dc('0x15')]();const _0x1511d3={'uuid':_0x2689b2[a11_0x46dc('0xd')]};const _0x425d3f=jwt[a11_0x46dc('0x16')](_0x1511d3,configJwt[a11_0x46dc('0x17')],configJwt[a11_0x46dc('0x18')]);delete _0x2689b2[a11_0x46dc('0xf')];_0x2689b2[a11_0x46dc('0x19')]=_0x425d3f;return responseUtils[a11_0x46dc('0x1a')](_0x4f78ba,_0x2689b2,0xc8);}else{return responseUtils['errorResponse'](_0x4f78ba,format(LocaleStrings[a11_0x46dc('0x1b')]),0x193);}})['catch'](_0x47518b=>{return responseUtils[a11_0x46dc('0x11')](_0x4f78ba,_0x47518b['stack'],0x1f4);});}[a11_0x46dc('0x8')](_0x4279b7,_0x3dfdc7,_0x44b34f){this['model'][a11_0x46dc('0xb')]({'where':{'username':_0x4279b7['body'][a11_0x46dc('0xc')]}})[a11_0x46dc('0x10')](_0x70e85a=>{if(_0x70e85a){return responseUtils[a11_0x46dc('0x11')](_0x3dfdc7,format(LocaleStrings['usernameTakenError'],_0x4279b7['body'][a11_0x46dc('0xc')]),0x193);}else{_0x4279b7[a11_0x46dc('0x13')]['email']=_0x4279b7[a11_0x46dc('0x13')][a11_0x46dc('0xc')];const _0x3523c5={'first_name':_0x4279b7[a11_0x46dc('0x13')][a11_0x46dc('0x1c')],'last_name':_0x4279b7[a11_0x46dc('0x13')][a11_0x46dc('0x1d')],'email':_0x4279b7['body'][a11_0x46dc('0xe')],'username':_0x4279b7[a11_0x46dc('0x13')][a11_0x46dc('0xc')],'password':authUtils['generateHash'](_0x4279b7[a11_0x46dc('0x13')][a11_0x46dc('0xf')])};this['model']['create'](_0x3523c5)['then'](function(_0x6280e0,_0x395d41){delete _0x6280e0['dataValues']['id'];delete _0x6280e0['dataValues'][a11_0x46dc('0x1e')];delete _0x6280e0[a11_0x46dc('0x1f')]['password'];delete _0x6280e0[a11_0x46dc('0x1f')][a11_0x46dc('0x20')];delete _0x6280e0[a11_0x46dc('0x1f')][a11_0x46dc('0x21')];const _0x21ac71={'uuid':_0x6280e0[a11_0x46dc('0xd')]};const _0x49cc96=jwt[a11_0x46dc('0x16')](_0x21ac71,configJwt[a11_0x46dc('0x17')],configJwt['options']);_0x6280e0['dataValues'][a11_0x46dc('0x19')]=_0x49cc96;return responseUtils[a11_0x46dc('0x1a')](_0x3dfdc7,_0x6280e0,0xc8);})['catch'](_0x56a053=>{return responseUtils[a11_0x46dc('0x11')](_0x3dfdc7,_0x56a053[a11_0x46dc('0x22')],0x1f4);});}})[a11_0x46dc('0x23')](_0x2f55a6=>{return responseUtils[a11_0x46dc('0x11')](_0x3dfdc7,_0x2f55a6[a11_0x46dc('0x22')],0x1f4);});}}exports[a11_0x46dc('0x24')]=AuthenticationController;