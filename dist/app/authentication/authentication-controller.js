var a11_0x14fe=['email','then','errorResponse','validPassword','password','toJSON','sign','options','token','successResponse','stack','usernameTakenError','generateHash','dataValues','created_at','secret','catch','default','defineProperty','__esModule','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','string-format','model','login','bind','createAccount','findOne','body','username','first_name','last_name'];(function(_0x425cbc,_0x5e0d59){var _0x140983=function(_0x55f4bf){while(--_0x55f4bf){_0x425cbc['push'](_0x425cbc['shift']());}};_0x140983(++_0x5e0d59);}(a11_0x14fe,0xb7));var a11_0x6fdc=function(_0x4bd822,_0x2bd6f7){_0x4bd822=_0x4bd822-0x0;var _0xb4bdb3=a11_0x14fe[_0x4bd822];return _0xb4bdb3;};'use strict';Object[a11_0x6fdc('0x0')](exports,a11_0x6fdc('0x1'),{'value':!![]});const jwt=require('jsonwebtoken');const i18n=require('i18n');const configJwt=require('../../config/jwt.js');const authUtils=require(a11_0x6fdc('0x2'));const responseUtils=require(a11_0x6fdc('0x3'));const LocaleStrings=require(a11_0x6fdc('0x4'));const format=require(a11_0x6fdc('0x5'));class AuthenticationController{constructor(_0x4ff776){this[a11_0x6fdc('0x6')]=_0x4ff776;this[a11_0x6fdc('0x7')]=this[a11_0x6fdc('0x7')][a11_0x6fdc('0x8')](this);this[a11_0x6fdc('0x9')]=this[a11_0x6fdc('0x9')][a11_0x6fdc('0x8')](this);}['login'](_0x127ebd,_0x3d689c,_0x1b4942){this[a11_0x6fdc('0x6')][a11_0x6fdc('0xa')]({'where':{'username':_0x127ebd[a11_0x6fdc('0xb')][a11_0x6fdc('0xc')]},'attributes':['uuid',a11_0x6fdc('0xd'),a11_0x6fdc('0xe'),a11_0x6fdc('0xf'),a11_0x6fdc('0xc'),'password']})[a11_0x6fdc('0x10')](_0x136dd4=>{if(!_0x136dd4){return responseUtils[a11_0x6fdc('0x11')](_0x3d689c,format(LocaleStrings['usernameNotFoundError'],_0x127ebd[a11_0x6fdc('0xb')][a11_0x6fdc('0xc')]),0x193);}if(authUtils[a11_0x6fdc('0x12')](_0x127ebd[a11_0x6fdc('0xb')][a11_0x6fdc('0x13')],_0x136dd4[a11_0x6fdc('0x13')])){_0x136dd4=_0x136dd4[a11_0x6fdc('0x14')]();const _0xf1850b={'uuid':_0x136dd4['uuid']};const _0x5cef04=jwt[a11_0x6fdc('0x15')](_0xf1850b,configJwt['secret'],configJwt[a11_0x6fdc('0x16')]);delete _0x136dd4[a11_0x6fdc('0x13')];_0x136dd4[a11_0x6fdc('0x17')]=_0x5cef04;return responseUtils[a11_0x6fdc('0x18')](_0x3d689c,_0x136dd4,0xc8);}else{return responseUtils[a11_0x6fdc('0x11')](_0x3d689c,format(LocaleStrings['passwordNotMatchError']),0x193);}})['catch'](_0x5d235a=>{return responseUtils[a11_0x6fdc('0x11')](_0x3d689c,_0x5d235a[a11_0x6fdc('0x19')],0x1f4);});}['createAccount'](_0x26d86d,_0x31cfbe,_0x22cbea){this[a11_0x6fdc('0x6')]['findOne']({'where':{'username':_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0xc')]}})[a11_0x6fdc('0x10')](_0x6d13b9=>{if(_0x6d13b9){return responseUtils[a11_0x6fdc('0x11')](_0x31cfbe,format(LocaleStrings[a11_0x6fdc('0x1a')],_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0xc')]),0x193);}else{_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0xf')]=_0x26d86d[a11_0x6fdc('0xb')]['username'];const _0x5a7c29={'first_name':_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0xd')],'last_name':_0x26d86d['body'][a11_0x6fdc('0xe')],'email':_0x26d86d['body'][a11_0x6fdc('0xf')],'username':_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0xc')],'password':authUtils[a11_0x6fdc('0x1b')](_0x26d86d[a11_0x6fdc('0xb')][a11_0x6fdc('0x13')])};this[a11_0x6fdc('0x6')]['create'](_0x5a7c29)['then'](function(_0x267e00,_0x175201){delete _0x267e00[a11_0x6fdc('0x1c')]['id'];delete _0x267e00['dataValues']['status'];delete _0x267e00[a11_0x6fdc('0x1c')][a11_0x6fdc('0x13')];delete _0x267e00[a11_0x6fdc('0x1c')]['updated_at'];delete _0x267e00['dataValues'][a11_0x6fdc('0x1d')];const _0x8e4ace={'uuid':_0x267e00['uuid']};const _0x373bc8=jwt[a11_0x6fdc('0x15')](_0x8e4ace,configJwt[a11_0x6fdc('0x1e')],configJwt[a11_0x6fdc('0x16')]);_0x267e00['dataValues']['token']=_0x373bc8;return responseUtils[a11_0x6fdc('0x18')](_0x31cfbe,_0x267e00,0xc8);})[a11_0x6fdc('0x1f')](_0x2c569f=>{return responseUtils[a11_0x6fdc('0x11')](_0x31cfbe,_0x2c569f[a11_0x6fdc('0x19')],0x1f4);});}})['catch'](_0x185122=>{return responseUtils['errorResponse'](_0x31cfbe,_0x185122[a11_0x6fdc('0x19')],0x1f4);});}}exports[a11_0x6fdc('0x20')]=AuthenticationController;