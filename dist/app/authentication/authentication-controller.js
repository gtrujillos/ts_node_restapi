var a39_0x4e63=['../../infrastructure/crypt-utils','jsonwebtoken','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','string-format','formidable','model','login','logout','usernameExist','bind','createAccount','findOne','body','username','last_name','email','password','then','errorResponse','default','generateJWT','encryptId','passwordNotMatchError','catch','successResponse','usernameTakenError','first_name','hashPassword','create','stack','__importDefault','defineProperty','__esModule','../../infrastructure/sequelize-utils'];(function(_0x5de4a7,_0x1279ef){var _0x3e5c60=function(_0x108ebe){while(--_0x108ebe){_0x5de4a7['push'](_0x5de4a7['shift']());}};_0x3e5c60(++_0x1279ef);}(a39_0x4e63,0x140));var a39_0x4841=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a39_0x4e63[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a39_0x4841('0x0')]||function(_0x43f34c){return _0x43f34c&&_0x43f34c['__esModule']?_0x43f34c:{'default':_0x43f34c};};Object[a39_0x4841('0x1')](exports,a39_0x4841('0x2'),{'value':!![]});const sequelize_utils_1=__importDefault(require(a39_0x4841('0x3')));const crypt_utils_1=__importDefault(require(a39_0x4841('0x4')));const jwt=require(a39_0x4841('0x5'));const i18n=require('i18n');const authUtils=require(a39_0x4841('0x6'));const responseUtils=require(a39_0x4841('0x7'));const LocaleStrings=require(a39_0x4841('0x8'));const format=require(a39_0x4841('0x9'));const formidable=require(a39_0x4841('0xa'));const fsExtra=require('fs-extra');class AuthenticationController{constructor(_0x384e3a){this[a39_0x4841('0xb')]=_0x384e3a;this[a39_0x4841('0xc')]=this[a39_0x4841('0xc')]['bind'](this);this[a39_0x4841('0xd')]=this['logout']['bind'](this);this[a39_0x4841('0xe')]=this[a39_0x4841('0xe')][a39_0x4841('0xf')](this);this[a39_0x4841('0x10')]=this['createAccount'][a39_0x4841('0xf')](this);}['login'](_0x506b1e,_0x847819,_0x49d640){this['model'][a39_0x4841('0x11')]({'where':{'username':_0x506b1e[a39_0x4841('0x12')][a39_0x4841('0x13')]},'attributes':['id','first_name',a39_0x4841('0x14'),a39_0x4841('0x15'),a39_0x4841('0x13'),a39_0x4841('0x16')]})[a39_0x4841('0x17')](_0x3676d9=>{if(!_0x3676d9){return responseUtils[a39_0x4841('0x18')](_0x506b1e,_0x847819,format(LocaleStrings['usernameNotFoundError'],_0x506b1e['body'][a39_0x4841('0x13')]),0x193);}if(crypt_utils_1[a39_0x4841('0x19')]['validPassword'](_0x506b1e['body'][a39_0x4841('0x16')],_0x3676d9[a39_0x4841('0x16')]==null?'':_0x3676d9['password'])){_0x3676d9=_0x3676d9['toJSON']();const _0x13dfb8=authUtils[a39_0x4841('0x1a')](_0x3676d9);const _0x33f5df={'token':_0x13dfb8,'id':sequelize_utils_1[a39_0x4841('0x19')][a39_0x4841('0x1b')](_0x3676d9['id'])};return responseUtils['successResponse'](_0x506b1e,_0x847819,_0x33f5df,0xc8);}else{return responseUtils[a39_0x4841('0x18')](_0x506b1e,_0x847819,format(LocaleStrings[a39_0x4841('0x1c')]),0x193);}})[a39_0x4841('0x1d')](_0x5caeea=>{return responseUtils['errorResponse'](_0x506b1e,_0x847819,_0x5caeea,0x1f4);});}['logout'](_0x6a4721,_0xf62f5b,_0x57c303){return responseUtils[a39_0x4841('0x1e')](_0x6a4721,_0xf62f5b,!![],0xc8);}[a39_0x4841('0xe')](_0x3a5233,_0x56f250,_0x5f3867){this[a39_0x4841('0xb')][a39_0x4841('0x11')]({'where':{'username':_0x3a5233[a39_0x4841('0x12')][a39_0x4841('0x13')]}})['then'](_0x19e9e8=>{let _0x24d7ba=![];if(_0x19e9e8){_0x24d7ba=!![];}return responseUtils[a39_0x4841('0x1e')](_0x3a5233,_0x56f250,{'exist':_0x24d7ba},0xc8);})['catch'](_0x237608=>{return responseUtils['errorResponse'](_0x3a5233,_0x56f250,_0x237608['stack'],0x1f4);});}[a39_0x4841('0x10')](_0x1559e5,_0x15a26e,_0x21e7fa){this['model'][a39_0x4841('0x11')]({'where':{'username':_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x13')]}})[a39_0x4841('0x17')](_0x46fa1d=>{if(_0x46fa1d){return responseUtils[a39_0x4841('0x18')](_0x1559e5,_0x15a26e,format(LocaleStrings[a39_0x4841('0x1f')],_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x13')]),0x193);}else{_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x15')]=_0x1559e5['body'][a39_0x4841('0x13')];const _0x294231={'first_name':_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x20')],'last_name':_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x14')],'email':_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x15')],'username':_0x1559e5[a39_0x4841('0x12')][a39_0x4841('0x13')],'password':crypt_utils_1[a39_0x4841('0x19')][a39_0x4841('0x21')](_0x1559e5[a39_0x4841('0x12')]['password'])};this[a39_0x4841('0xb')][a39_0x4841('0x22')](_0x294231)['then'](function(_0x4fcdf1,_0x4f184e){const _0x4a81cc=authUtils['generateJWT'](_0x4fcdf1);const _0x52bfe4={'token':_0x4a81cc,'id':sequelize_utils_1['default']['encryptId'](_0x4fcdf1['id'])};return responseUtils['successResponse'](_0x1559e5,_0x15a26e,_0x52bfe4,0xc8);})[a39_0x4841('0x1d')](_0x5f0024=>{return responseUtils['errorResponse'](_0x1559e5,_0x15a26e,_0x5f0024[a39_0x4841('0x23')],0x1f4);});}})[a39_0x4841('0x1d')](_0x4d0261=>{return responseUtils[a39_0x4841('0x18')](_0x1559e5,_0x15a26e,_0x4d0261['stack'],0x1f4);});}}exports[a39_0x4841('0x19')]=AuthenticationController;