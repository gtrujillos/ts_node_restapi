var a30_0x42fc=['string-format','model','login','bind','createAccount','findOne','username','first_name','email','password','errorResponse','usernameNotFoundError','body','default','validPassword','toJSON','sign','options','successResponse','passwordNotMatchError','then','usernameTakenError','last_name','create','dataValues','secret','stack','catch','__importDefault','defineProperty','../../infrastructure/crypt-utils','jsonwebtoken','i18n','../../config/jwt.js','../../infrastructure/auth-utils','../../infrastructure/response-utils'];(function(_0x9a39f0,_0x37e8ef){var _0x4e4f76=function(_0x34fbf5){while(--_0x34fbf5){_0x9a39f0['push'](_0x9a39f0['shift']());}};_0x4e4f76(++_0x37e8ef);}(a30_0x42fc,0x1cc));var a30_0x7796=function(_0x242c6b,_0x12c6eb){_0x242c6b=_0x242c6b-0x0;var _0x108d68=a30_0x42fc[_0x242c6b];return _0x108d68;};'use strict';var __importDefault=this&&this[a30_0x7796('0x0')]||function(_0xc65c75){return _0xc65c75&&_0xc65c75['__esModule']?_0xc65c75:{'default':_0xc65c75};};Object[a30_0x7796('0x1')](exports,'__esModule',{'value':!![]});const crypt_utils_1=__importDefault(require(a30_0x7796('0x2')));const jwt=require(a30_0x7796('0x3'));const i18n=require(a30_0x7796('0x4'));const configJwt=require(a30_0x7796('0x5'));const authUtils=require(a30_0x7796('0x6'));const responseUtils=require(a30_0x7796('0x7'));const LocaleStrings=require('../../resources/locale-strings');const format=require(a30_0x7796('0x8'));class AuthenticationController{constructor(_0x5dd286){this[a30_0x7796('0x9')]=_0x5dd286;this[a30_0x7796('0xa')]=this['login'][a30_0x7796('0xb')](this);this[a30_0x7796('0xc')]=this[a30_0x7796('0xc')][a30_0x7796('0xb')](this);}[a30_0x7796('0xa')](_0xd21a7e,_0x143053,_0x5832e2){this[a30_0x7796('0x9')][a30_0x7796('0xd')]({'where':{'username':_0xd21a7e['body'][a30_0x7796('0xe')]},'attributes':['id',a30_0x7796('0xf'),'last_name',a30_0x7796('0x10'),a30_0x7796('0xe'),a30_0x7796('0x11')]})['then'](_0x3b8ce4=>{if(!_0x3b8ce4){return responseUtils[a30_0x7796('0x12')](_0x143053,format(LocaleStrings[a30_0x7796('0x13')],_0xd21a7e[a30_0x7796('0x14')][a30_0x7796('0xe')]),0x193);}if(crypt_utils_1[a30_0x7796('0x15')][a30_0x7796('0x16')](_0xd21a7e[a30_0x7796('0x14')]['password'],_0x3b8ce4[a30_0x7796('0x11')])){_0x3b8ce4=_0x3b8ce4[a30_0x7796('0x17')]();const _0x3a0663={'id':_0x3b8ce4['id']};const _0x1a8ed1=jwt[a30_0x7796('0x18')](_0x3a0663,configJwt['secret'],configJwt[a30_0x7796('0x19')]);const _0xbfd67a={'token':_0x1a8ed1};return responseUtils[a30_0x7796('0x1a')](_0x143053,_0xbfd67a,0xc8);}else{return responseUtils[a30_0x7796('0x12')](_0x143053,format(LocaleStrings[a30_0x7796('0x1b')]),0x193);}})['catch'](_0x41453c=>{return responseUtils['errorResponse'](_0x143053,_0x41453c,0x1f4);});}[a30_0x7796('0xc')](_0x4b2603,_0x29750c,_0x31b3ba){this[a30_0x7796('0x9')][a30_0x7796('0xd')]({'where':{'username':_0x4b2603[a30_0x7796('0x14')][a30_0x7796('0xe')]}})[a30_0x7796('0x1c')](_0x3db241=>{if(_0x3db241){return responseUtils[a30_0x7796('0x12')](_0x29750c,format(LocaleStrings[a30_0x7796('0x1d')],_0x4b2603[a30_0x7796('0x14')]['username']),0x193);}else{_0x4b2603[a30_0x7796('0x14')][a30_0x7796('0x10')]=_0x4b2603[a30_0x7796('0x14')]['username'];const _0x242922={'first_name':_0x4b2603[a30_0x7796('0x14')]['first_name'],'last_name':_0x4b2603[a30_0x7796('0x14')][a30_0x7796('0x1e')],'email':_0x4b2603[a30_0x7796('0x14')]['email'],'username':_0x4b2603['body'][a30_0x7796('0xe')],'password':crypt_utils_1['default']['hashPassword'](_0x4b2603[a30_0x7796('0x14')]['password'])};this[a30_0x7796('0x9')][a30_0x7796('0x1f')](_0x242922)['then'](function(_0x4cf0d5,_0x38bb68){const _0x56ac55={'id':_0x4cf0d5[a30_0x7796('0x20')]['id']};const _0x5e3e70=jwt[a30_0x7796('0x18')](_0x56ac55,configJwt[a30_0x7796('0x21')],configJwt[a30_0x7796('0x19')]);const _0x43256d={'token':_0x5e3e70};return responseUtils[a30_0x7796('0x1a')](_0x29750c,_0x43256d,0xc8);})['catch'](_0x17037d=>{return responseUtils[a30_0x7796('0x12')](_0x29750c,_0x17037d[a30_0x7796('0x22')],0x1f4);});}})[a30_0x7796('0x23')](_0x398b24=>{return responseUtils['errorResponse'](_0x29750c,_0x398b24['stack'],0x1f4);});}}exports[a30_0x7796('0x15')]=AuthenticationController;