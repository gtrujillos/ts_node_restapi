var a9_0x2c2a=['username','first_name','last_name','password','errorResponse','usernameNotFoundError','validPassword','toJSON','sign','secret','token','successResponse','catch','stack','then','usernameTakenError','email','generateHash','create','defineProperty','__esModule','i18n','../../config/jwt.js','../../infrastructure/auth-utils','../../resources/locale-strings','model','login','createAccount','bind','findOne','body'];(function(_0x48335e,_0x4b3aee){var _0x1a0641=function(_0x5a724f){while(--_0x5a724f){_0x48335e['push'](_0x48335e['shift']());}};_0x1a0641(++_0x4b3aee);}(a9_0x2c2a,0x1a6));var a9_0x50a5=function(_0x456f33,_0x385a6b){_0x456f33=_0x456f33-0x0;var _0x1e0170=a9_0x2c2a[_0x456f33];return _0x1e0170;};'use strict';Object[a9_0x50a5('0x0')](exports,a9_0x50a5('0x1'),{'value':!![]});const jwt=require('jsonwebtoken');const i18n=require(a9_0x50a5('0x2'));const configJwt=require(a9_0x50a5('0x3'));const authUtils=require(a9_0x50a5('0x4'));const responseUtils=require('../../infrastructure/response-utils');const LocaleStrings=require(a9_0x50a5('0x5'));class AuthConstroller{constructor(_0x41fd2a){this[a9_0x50a5('0x6')]=_0x41fd2a;this[a9_0x50a5('0x7')]=this[a9_0x50a5('0x7')]['bind'](this);this[a9_0x50a5('0x8')]=this[a9_0x50a5('0x8')][a9_0x50a5('0x9')](this);}[a9_0x50a5('0x7')](_0x3d723f,_0x545adb,_0x4f2d5f){this['model'][a9_0x50a5('0xa')]({'where':{'username':_0x3d723f[a9_0x50a5('0xb')][a9_0x50a5('0xc')]},'attributes':['id',a9_0x50a5('0xd'),a9_0x50a5('0xe'),'email','username',a9_0x50a5('0xf')]})['then'](_0x3027db=>{if(!_0x3027db){return responseUtils[a9_0x50a5('0x10')](_0x545adb,LocaleStrings[a9_0x50a5('0x11')],0x193);}if(authUtils[a9_0x50a5('0x12')](_0x3d723f[a9_0x50a5('0xb')][a9_0x50a5('0xf')],_0x3027db[a9_0x50a5('0xf')])){_0x3027db=_0x3027db[a9_0x50a5('0x13')]();const _0x3f7885={'id':_0x3027db['id']};const _0x2b717c=jwt[a9_0x50a5('0x14')](_0x3f7885,configJwt[a9_0x50a5('0x15')]);delete _0x3027db[a9_0x50a5('0xf')];_0x3027db[a9_0x50a5('0x16')]=_0x2b717c;return responseUtils[a9_0x50a5('0x17')](_0x545adb,_0x3027db,0xc8);}else{return responseUtils[a9_0x50a5('0x10')](_0x545adb,_0x545adb['__'](LocaleStrings['passwordNotMatchError']),0x193);}})[a9_0x50a5('0x18')](_0x28609e=>{return responseUtils[a9_0x50a5('0x10')](_0x545adb,_0x28609e[a9_0x50a5('0x19')],0x1f4);});}[a9_0x50a5('0x8')](_0x43b36a,_0x2fc2d0,_0x1cc414){this['model'][a9_0x50a5('0xa')]({'where':{'username':_0x43b36a['body']['username']}})[a9_0x50a5('0x1a')](function(_0x24eb10){if(_0x24eb10){return responseUtils[a9_0x50a5('0x10')](_0x2fc2d0,_0x2fc2d0['__'](LocaleStrings[a9_0x50a5('0x1b')],_0x43b36a[a9_0x50a5('0xb')]['username']),0x193);}else{_0x43b36a[a9_0x50a5('0xb')][a9_0x50a5('0x1c')]=_0x43b36a[a9_0x50a5('0xb')][a9_0x50a5('0xc')];const _0x190a1a={'username':_0x43b36a[a9_0x50a5('0xb')][a9_0x50a5('0xc')],'password':authUtils[a9_0x50a5('0x1d')](_0x43b36a[a9_0x50a5('0xb')][a9_0x50a5('0xf')])};this[a9_0x50a5('0x6')][a9_0x50a5('0x1e')](_0x190a1a)[a9_0x50a5('0x1a')](function(_0x297f53,_0x1b20ce){return responseUtils[a9_0x50a5('0x17')](_0x2fc2d0,_0x297f53,0xc8);})[a9_0x50a5('0x18')](_0x113474=>{return responseUtils['errorResponse'](_0x2fc2d0,_0x113474[a9_0x50a5('0x19')],0x1f4);});}})[a9_0x50a5('0x18')](_0x36e5bd=>{return responseUtils[a9_0x50a5('0x10')](_0x2fc2d0,_0x36e5bd[a9_0x50a5('0x19')],0x1f4);});}}exports['default']=AuthConstroller;