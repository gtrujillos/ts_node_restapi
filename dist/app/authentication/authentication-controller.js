var a11_0x3428=['secret','default','defineProperty','jsonwebtoken','i18n','../../config/jwt.js','../../infrastructure/auth-utils','string-format','model','login','bind','createAccount','findOne','body','username','uuid','last_name','password','then','errorResponse','usernameNotFoundError','sign','token','successResponse','catch','stack','usernameTakenError','first_name','email','generateHash','dataValues','status','created_at'];(function(_0x162a84,_0x3cb4f3){var _0x68d0f=function(_0x507abb){while(--_0x507abb){_0x162a84['push'](_0x162a84['shift']());}};_0x68d0f(++_0x3cb4f3);}(a11_0x3428,0x12b));var a11_0xcd3d=function(_0x5a39b8,_0x4c0158){_0x5a39b8=_0x5a39b8-0x0;var _0x164617=a11_0x3428[_0x5a39b8];return _0x164617;};'use strict';Object[a11_0xcd3d('0x0')](exports,'__esModule',{'value':!![]});const jwt=require(a11_0xcd3d('0x1'));const i18n=require(a11_0xcd3d('0x2'));const configJwt=require(a11_0xcd3d('0x3'));const authUtils=require(a11_0xcd3d('0x4'));const responseUtils=require('../../infrastructure/response-utils');const LocaleStrings=require('../../resources/locale-strings');const format=require(a11_0xcd3d('0x5'));class AuthenticationController{constructor(_0x4f544e){this[a11_0xcd3d('0x6')]=_0x4f544e;this['login']=this[a11_0xcd3d('0x7')][a11_0xcd3d('0x8')](this);this[a11_0xcd3d('0x9')]=this['createAccount']['bind'](this);}['login'](_0x5dd3d7,_0x10d03c,_0x169bc0){this[a11_0xcd3d('0x6')][a11_0xcd3d('0xa')]({'where':{'username':_0x5dd3d7[a11_0xcd3d('0xb')][a11_0xcd3d('0xc')]},'attributes':[a11_0xcd3d('0xd'),'first_name',a11_0xcd3d('0xe'),'email',a11_0xcd3d('0xc'),a11_0xcd3d('0xf')]})[a11_0xcd3d('0x10')](_0x4f2ed8=>{if(!_0x4f2ed8){return responseUtils[a11_0xcd3d('0x11')](_0x10d03c,format(LocaleStrings[a11_0xcd3d('0x12')],_0x5dd3d7['body'][a11_0xcd3d('0xc')]),0x193);}if(authUtils['validPassword'](_0x5dd3d7[a11_0xcd3d('0xb')][a11_0xcd3d('0xf')],_0x4f2ed8['password'])){_0x4f2ed8=_0x4f2ed8['toJSON']();const _0x8e6700={'uuid':_0x4f2ed8['uuid']};const _0x57ec65=jwt[a11_0xcd3d('0x13')](_0x8e6700,configJwt['secret'],configJwt['options']);delete _0x4f2ed8[a11_0xcd3d('0xf')];_0x4f2ed8[a11_0xcd3d('0x14')]=_0x57ec65;return responseUtils[a11_0xcd3d('0x15')](_0x10d03c,_0x4f2ed8,0xc8);}else{return responseUtils['errorResponse'](_0x10d03c,format(LocaleStrings['passwordNotMatchError']),0x193);}})[a11_0xcd3d('0x16')](_0x224aaf=>{return responseUtils[a11_0xcd3d('0x11')](_0x10d03c,_0x224aaf[a11_0xcd3d('0x17')],0x1f4);});}[a11_0xcd3d('0x9')](_0x281ed9,_0x282c0c,_0x4ce335){this[a11_0xcd3d('0x6')][a11_0xcd3d('0xa')]({'where':{'username':_0x281ed9[a11_0xcd3d('0xb')][a11_0xcd3d('0xc')]}})[a11_0xcd3d('0x10')](_0x5a7c7d=>{if(_0x5a7c7d){return responseUtils[a11_0xcd3d('0x11')](_0x282c0c,format(LocaleStrings[a11_0xcd3d('0x18')],_0x281ed9[a11_0xcd3d('0xb')][a11_0xcd3d('0xc')]),0x193);}else{_0x281ed9[a11_0xcd3d('0xb')]['email']=_0x281ed9['body'][a11_0xcd3d('0xc')];const _0x476752={'first_name':_0x281ed9[a11_0xcd3d('0xb')][a11_0xcd3d('0x19')],'last_name':_0x281ed9['body']['last_name'],'email':_0x281ed9[a11_0xcd3d('0xb')][a11_0xcd3d('0x1a')],'username':_0x281ed9['body'][a11_0xcd3d('0xc')],'password':authUtils[a11_0xcd3d('0x1b')](_0x281ed9[a11_0xcd3d('0xb')]['password'])};this[a11_0xcd3d('0x6')]['create'](_0x476752)[a11_0xcd3d('0x10')](function(_0x1aa583,_0x4fa9ea){delete _0x1aa583[a11_0xcd3d('0x1c')]['id'];delete _0x1aa583[a11_0xcd3d('0x1c')][a11_0xcd3d('0x1d')];delete _0x1aa583[a11_0xcd3d('0x1c')]['password'];delete _0x1aa583['dataValues']['updated_at'];delete _0x1aa583[a11_0xcd3d('0x1c')][a11_0xcd3d('0x1e')];const _0x1199e7={'uuid':_0x1aa583[a11_0xcd3d('0xd')]};const _0x2eaeb9=jwt[a11_0xcd3d('0x13')](_0x1199e7,configJwt[a11_0xcd3d('0x1f')],configJwt['options']);_0x1aa583[a11_0xcd3d('0x1c')][a11_0xcd3d('0x14')]=_0x2eaeb9;return responseUtils[a11_0xcd3d('0x15')](_0x282c0c,_0x1aa583,0xc8);})[a11_0xcd3d('0x16')](_0x3bde56=>{return responseUtils['errorResponse'](_0x282c0c,_0x3bde56[a11_0xcd3d('0x17')],0x1f4);});}})[a11_0xcd3d('0x16')](_0x505819=>{return responseUtils['errorResponse'](_0x282c0c,_0x505819[a11_0xcd3d('0x17')],0x1f4);});}}exports[a11_0xcd3d('0x20')]=AuthenticationController;