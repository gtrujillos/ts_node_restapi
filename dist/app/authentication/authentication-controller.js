var a3_0x26fa=['deleted_by_user_id','created_at','updated_at','deleted_at','parse','log','fields','files','params','code','__importDefault','__esModule','../../infrastructure/sequelize-utils','jsonwebtoken','i18n','../../infrastructure/auth-utils','../../infrastructure/response-utils','../../resources/locale-strings','string-format','formidable','fs-extra','login','bind','logout','usernameExist','createUserProfile','getUserProfile','updateUserProfile','model','findOne','username','first_name','email','password','then','errorResponse','body','toJSON','generateJWT','successResponse','passwordNotMatchError','catch','stack','default','hashPassword','user','authentication\x20failed','encryptId','assign','created_by_user_id','updated_by_user_id'];(function(_0x211aaf,_0x421bba){var _0x156048=function(_0xc03798){while(--_0xc03798){_0x211aaf['push'](_0x211aaf['shift']());}};_0x156048(++_0x421bba);}(a3_0x26fa,0x13c));var a3_0x5a0a=function(_0x19925b,_0x3d5045){_0x19925b=_0x19925b-0x0;var _0x42c087=a3_0x26fa[_0x19925b];return _0x42c087;};'use strict';var __importDefault=this&&this[a3_0x5a0a('0x0')]||function(_0x2c9b33){return _0x2c9b33&&_0x2c9b33['__esModule']?_0x2c9b33:{'default':_0x2c9b33};};Object['defineProperty'](exports,a3_0x5a0a('0x1'),{'value':!![]});const sequelize_utils_1=__importDefault(require(a3_0x5a0a('0x2')));const crypt_utils_1=__importDefault(require('../../infrastructure/crypt-utils'));const jwt=require(a3_0x5a0a('0x3'));const i18n=require(a3_0x5a0a('0x4'));const authUtils=require(a3_0x5a0a('0x5'));const responseUtils=require(a3_0x5a0a('0x6'));const LocaleStrings=require(a3_0x5a0a('0x7'));const format=require(a3_0x5a0a('0x8'));const formidable=require(a3_0x5a0a('0x9'));const fsExtra=require(a3_0x5a0a('0xa'));class AuthenticationController{constructor(_0x43f6ca){this['model']=_0x43f6ca;this['login']=this[a3_0x5a0a('0xb')][a3_0x5a0a('0xc')](this);this[a3_0x5a0a('0xd')]=this[a3_0x5a0a('0xd')][a3_0x5a0a('0xc')](this);this[a3_0x5a0a('0xe')]=this[a3_0x5a0a('0xe')]['bind'](this);this[a3_0x5a0a('0xf')]=this[a3_0x5a0a('0xf')][a3_0x5a0a('0xc')](this);this[a3_0x5a0a('0x10')]=this[a3_0x5a0a('0x10')][a3_0x5a0a('0xc')](this);this['updateUserProfile']=this[a3_0x5a0a('0x11')][a3_0x5a0a('0xc')](this);}[a3_0x5a0a('0xb')](_0x5247eb,_0x3728c2,_0x204563){this[a3_0x5a0a('0x12')][a3_0x5a0a('0x13')]({'where':{'username':_0x5247eb['body'][a3_0x5a0a('0x14')]},'attributes':['id',a3_0x5a0a('0x15'),'last_name',a3_0x5a0a('0x16'),a3_0x5a0a('0x14'),a3_0x5a0a('0x17')]})[a3_0x5a0a('0x18')](_0x2b6ebd=>{if(!_0x2b6ebd){return responseUtils[a3_0x5a0a('0x19')](_0x5247eb,_0x3728c2,format(LocaleStrings['usernameNotFoundError'],_0x5247eb[a3_0x5a0a('0x1a')][a3_0x5a0a('0x14')]),0x193);}if(crypt_utils_1['default']['validPassword'](_0x5247eb[a3_0x5a0a('0x1a')][a3_0x5a0a('0x17')],_0x2b6ebd[a3_0x5a0a('0x17')]==null?'':_0x2b6ebd[a3_0x5a0a('0x17')])){_0x2b6ebd=_0x2b6ebd[a3_0x5a0a('0x1b')]();const _0x48737d=authUtils[a3_0x5a0a('0x1c')](_0x2b6ebd);const _0x38a367={'token':_0x48737d};return responseUtils[a3_0x5a0a('0x1d')](_0x5247eb,_0x3728c2,_0x38a367,0xc8);}else{return responseUtils[a3_0x5a0a('0x19')](_0x5247eb,_0x3728c2,format(LocaleStrings[a3_0x5a0a('0x1e')]),0x193);}})[a3_0x5a0a('0x1f')](_0x1ce163=>{return responseUtils['errorResponse'](_0x5247eb,_0x3728c2,_0x1ce163,0x1f4);});}[a3_0x5a0a('0xd')](_0x5d5b8e,_0x59ff3b,_0x40e968){}['usernameExist'](_0x3584ed,_0x436214,_0x1f2b52){this['model'][a3_0x5a0a('0x13')]({'where':{'username':_0x3584ed[a3_0x5a0a('0x1a')][a3_0x5a0a('0x14')]}})['then'](_0x2444e1=>{let _0x2e28c8=![];if(_0x2444e1){_0x2e28c8=!![];}return responseUtils[a3_0x5a0a('0x1d')](_0x3584ed,_0x436214,{'exist':_0x2e28c8},0xc8);})[a3_0x5a0a('0x1f')](_0x1516d9=>{return responseUtils[a3_0x5a0a('0x19')](_0x3584ed,_0x436214,_0x1516d9[a3_0x5a0a('0x20')],0x1f4);});}['createUserProfile'](_0x5e66c1,_0x1c9783,_0x24feed){this['model'][a3_0x5a0a('0x13')]({'where':{'username':_0x5e66c1['body'][a3_0x5a0a('0x14')]}})['then'](_0x5c829c=>{if(_0x5c829c){return responseUtils[a3_0x5a0a('0x19')](_0x5e66c1,_0x1c9783,format(LocaleStrings['usernameTakenError'],_0x5e66c1[a3_0x5a0a('0x1a')]['username']),0x193);}else{_0x5e66c1[a3_0x5a0a('0x1a')][a3_0x5a0a('0x16')]=_0x5e66c1[a3_0x5a0a('0x1a')][a3_0x5a0a('0x14')];const _0x318ef6={'first_name':_0x5e66c1[a3_0x5a0a('0x1a')]['first_name'],'last_name':_0x5e66c1[a3_0x5a0a('0x1a')]['last_name'],'email':_0x5e66c1[a3_0x5a0a('0x1a')][a3_0x5a0a('0x16')],'username':_0x5e66c1[a3_0x5a0a('0x1a')][a3_0x5a0a('0x14')],'password':crypt_utils_1[a3_0x5a0a('0x21')][a3_0x5a0a('0x22')](_0x5e66c1['body'][a3_0x5a0a('0x17')])};this[a3_0x5a0a('0x12')]['create'](_0x318ef6)[a3_0x5a0a('0x18')](function(_0x38a4e5,_0x225c19){const _0x23c72e=authUtils[a3_0x5a0a('0x1c')](_0x38a4e5);const _0x2409fd={'token':_0x23c72e};return responseUtils[a3_0x5a0a('0x1d')](_0x5e66c1,_0x1c9783,_0x2409fd,0xc8);})[a3_0x5a0a('0x1f')](_0x3524fb=>{return responseUtils[a3_0x5a0a('0x19')](_0x5e66c1,_0x1c9783,_0x3524fb['stack'],0x1f4);});}})['catch'](_0x542d5f=>{return responseUtils[a3_0x5a0a('0x19')](_0x5e66c1,_0x1c9783,_0x542d5f[a3_0x5a0a('0x20')],0x1f4);});}[a3_0x5a0a('0x10')](_0x46c83e,_0x5a0000,_0x30eb1d){if(!_0x46c83e[a3_0x5a0a('0x23')]){return responseUtils[a3_0x5a0a('0x19')](_0x46c83e,_0x5a0000,a3_0x5a0a('0x24'),0x191);}const _0x8f007c=sequelize_utils_1[a3_0x5a0a('0x21')][a3_0x5a0a('0x25')](Object[a3_0x5a0a('0x26')]({},_0x46c83e[a3_0x5a0a('0x23')],{}));delete _0x8f007c[a3_0x5a0a('0x27')];delete _0x8f007c[a3_0x5a0a('0x28')];delete _0x8f007c[a3_0x5a0a('0x29')];delete _0x8f007c[a3_0x5a0a('0x17')];delete _0x8f007c['status'];delete _0x8f007c[a3_0x5a0a('0x2a')];delete _0x8f007c[a3_0x5a0a('0x2b')];delete _0x8f007c[a3_0x5a0a('0x2c')];return responseUtils[a3_0x5a0a('0x1d')](_0x46c83e,_0x5a0000,_0x8f007c,0xc8);}[a3_0x5a0a('0x11')](_0x2a2984,_0x297893,_0x5c33c7){}['updateUserProfileImage'](_0x133422,_0x26fd0b,_0x22a24f){const _0x1ed756=formidable({'multiples':!![]});_0x1ed756[a3_0x5a0a('0x2d')](_0x133422,(_0x894baf,_0x1a4e76,_0x5e8f6e)=>{console[a3_0x5a0a('0x2e')](a3_0x5a0a('0x2f'),_0x1a4e76);console[a3_0x5a0a('0x2e')](a3_0x5a0a('0x30'),_0x5e8f6e);if(_0x894baf){return responseUtils[a3_0x5a0a('0x19')](_0x26fd0b,_0x894baf['stack'],0x1f4);}_0x133422[a3_0x5a0a('0x31')]={'code':_0x1a4e76[a3_0x5a0a('0x32')]};return responseUtils[a3_0x5a0a('0x1d')](_0x133422,_0x26fd0b,{},0xc8);});}}exports['default']=AuthenticationController;