var a167_0x1261=['existsSync','sendFile','__importDefault','__esModule','defineProperty','../../infrastructure/sequelize-utils','../../infrastructure/base-controller','../shared/models/crudOptions','../controllers','../models','../../infrastructure/response-utils','fs-extra','../../resources/locale-strings','default','featured','bind','countFeatured','countRelationships','activities','getUserProfile','updateUserProfile','getUserProfileImage','public','params','shared','count','relationships','getInstance','userRelationshipsController','include','usersModel','first_name','last_name','nickname','find','user','errorResponse','://','get','created_by_user_id','updated_by_user_id','deleted_by_user_id','status','created_at','updated_at','deleted_at','image_url','successResponse','authentication\x20failed','model','findOne','body','email','then','emailTakenError','encryptId','username','save','catch','stack','updateUserProfileImage','parse','path','users/','ensureDirSync','rename','decryptId','env','.jpg'];(function(_0x2f7e89,_0x213d1e){var _0x5272b2=function(_0x361d61){while(--_0x361d61){_0x2f7e89['push'](_0x2f7e89['shift']());}};_0x5272b2(++_0x213d1e);}(a167_0x1261,0x116));var a167_0x3bbd=function(_0x48bc51,_0x3cd8fd){_0x48bc51=_0x48bc51-0x0;var _0x41029c=a167_0x1261[_0x48bc51];return _0x41029c;};'use strict';var __importDefault=this&&this[a167_0x3bbd('0x0')]||function(_0x29aefc){return _0x29aefc&&_0x29aefc[a167_0x3bbd('0x1')]?_0x29aefc:{'default':_0x29aefc};};Object[a167_0x3bbd('0x2')](exports,a167_0x3bbd('0x1'),{'value':!![]});const sequelize_utils_1=__importDefault(require(a167_0x3bbd('0x3')));const base_controller_1=__importDefault(require(a167_0x3bbd('0x4')));const crudOptions_1=__importDefault(require(a167_0x3bbd('0x5')));const controllers_1=__importDefault(require(a167_0x3bbd('0x6')));const models_1=__importDefault(require(a167_0x3bbd('0x7')));const format=require('string-format');const responseUtils=require(a167_0x3bbd('0x8'));const fsExtra=require(a167_0x3bbd('0x9'));const formidable=require('formidable');const LocaleStrings=require(a167_0x3bbd('0xa'));class UsersController extends base_controller_1[a167_0x3bbd('0xb')]{constructor(_0x2b77ad){super(_0x2b77ad,null);this[a167_0x3bbd('0xc')]=this['featured'][a167_0x3bbd('0xd')](this);this[a167_0x3bbd('0xe')]=this[a167_0x3bbd('0xe')][a167_0x3bbd('0xd')](this);this[a167_0x3bbd('0xf')]=this['countRelationships'][a167_0x3bbd('0xd')](this);this['relationships']=this['relationships']['bind'](this);this['activities']=this[a167_0x3bbd('0x10')]['bind'](this);this[a167_0x3bbd('0x11')]=this[a167_0x3bbd('0x11')][a167_0x3bbd('0xd')](this);this['updateUserProfile']=this[a167_0x3bbd('0x12')][a167_0x3bbd('0xd')](this);this[a167_0x3bbd('0x13')]=this[a167_0x3bbd('0x13')][a167_0x3bbd('0xd')](this);}[a167_0x3bbd('0xc')](_0x1b901b,_0x2eb9d8,_0x333056){_0x1b901b['params']={'is_private':![]};const _0x151221=new crudOptions_1[(a167_0x3bbd('0xb'))]();_0x151221[a167_0x3bbd('0x14')]=!![];_0x151221['shared']=!![];return this['find'](_0x1b901b,_0x2eb9d8,_0x333056,_0x151221);}[a167_0x3bbd('0xe')](_0x5ac79e,_0x520076,_0x17a3ee){_0x5ac79e[a167_0x3bbd('0x15')]={'is_private':![]};const _0x30a06c=new crudOptions_1[(a167_0x3bbd('0xb'))]();_0x30a06c[a167_0x3bbd('0x14')]=!![];_0x30a06c[a167_0x3bbd('0x16')]=!![];return this[a167_0x3bbd('0x17')](_0x5ac79e,_0x520076,_0x17a3ee,_0x30a06c);}[a167_0x3bbd('0x18')](_0x49b38c,_0xf0fbe4,_0x5d419f){const _0x460960=controllers_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x19')]()[a167_0x3bbd('0x1a')];const _0x5bf205=new crudOptions_1['default']();_0x5bf205[a167_0x3bbd('0x14')]=!![];_0x5bf205[a167_0x3bbd('0x16')]=!![];_0x5bf205[a167_0x3bbd('0x1b')]=[{'model':models_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x19')]()[a167_0x3bbd('0x1c')],'attributes':['id',a167_0x3bbd('0x1d'),a167_0x3bbd('0x1e'),a167_0x3bbd('0x1f')]}];return _0x460960['find'](_0x49b38c,_0xf0fbe4,_0x5d419f,_0x5bf205);}[a167_0x3bbd('0xf')](_0x113391,_0x1fd1e1,_0x2ff820){const _0x479b74=controllers_1['default'][a167_0x3bbd('0x19')]()[a167_0x3bbd('0x1a')];const _0x44fdc3=new crudOptions_1[(a167_0x3bbd('0xb'))]();_0x44fdc3[a167_0x3bbd('0x14')]=!![];_0x44fdc3[a167_0x3bbd('0x16')]=!![];return _0x479b74['count'](_0x113391,_0x1fd1e1,_0x2ff820,_0x44fdc3);}[a167_0x3bbd('0x10')](_0x25ef6d,_0x52d850,_0x52b886){const _0x581b31=controllers_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x19')]()[a167_0x3bbd('0x1a')];const _0x12605f=new crudOptions_1[(a167_0x3bbd('0xb'))]();_0x12605f[a167_0x3bbd('0x14')]=!![];_0x12605f[a167_0x3bbd('0x16')]=!![];_0x12605f[a167_0x3bbd('0x1b')]=[{'model':models_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x19')]()['usersModel']}];return _0x581b31[a167_0x3bbd('0x20')](_0x25ef6d,_0x52d850,_0x52b886,_0x12605f);}[a167_0x3bbd('0x11')](_0x374b6e,_0x16d8a8,_0x2274df){if(!_0x374b6e[a167_0x3bbd('0x21')]){return responseUtils[a167_0x3bbd('0x22')](_0x374b6e,_0x16d8a8,'authentication\x20failed',0x191);}const _0x539804=_0x374b6e['protocol']+a167_0x3bbd('0x23')+_0x374b6e[a167_0x3bbd('0x24')]('host');const _0x1d2d80=sequelize_utils_1['default']['encryptId'](Object['assign']({},_0x374b6e[a167_0x3bbd('0x21')],{}));delete _0x1d2d80[a167_0x3bbd('0x25')];delete _0x1d2d80[a167_0x3bbd('0x26')];delete _0x1d2d80[a167_0x3bbd('0x27')];delete _0x1d2d80['password'];delete _0x1d2d80[a167_0x3bbd('0x28')];delete _0x1d2d80[a167_0x3bbd('0x29')];delete _0x1d2d80[a167_0x3bbd('0x2a')];delete _0x1d2d80[a167_0x3bbd('0x2b')];_0x1d2d80[a167_0x3bbd('0x2c')]=_0x539804+'/users/profile_image/'+_0x1d2d80['id'];return responseUtils[a167_0x3bbd('0x2d')](_0x374b6e,_0x16d8a8,_0x1d2d80,0xc8);}[a167_0x3bbd('0x12')](_0xada52,_0x24541b,_0x424412){if(!_0xada52[a167_0x3bbd('0x21')]){return responseUtils[a167_0x3bbd('0x22')](_0xada52,_0x24541b,a167_0x3bbd('0x2e'),0x191);}this[a167_0x3bbd('0x2f')][a167_0x3bbd('0x30')]({'where':{'email':_0xada52[a167_0x3bbd('0x31')][a167_0x3bbd('0x32')]}})[a167_0x3bbd('0x33')](_0x2d9fcf=>{if(_0x2d9fcf){if(_0x2d9fcf['id']!=_0xada52[a167_0x3bbd('0x21')]['id']){return responseUtils[a167_0x3bbd('0x22')](_0xada52,_0x24541b,format(LocaleStrings[a167_0x3bbd('0x34')],_0xada52['body'][a167_0x3bbd('0x32')]),0x193);}}_0xada52[a167_0x3bbd('0x31')]['id']=sequelize_utils_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x35')](_0xada52['user']['id']);_0xada52[a167_0x3bbd('0x31')][a167_0x3bbd('0x36')]=_0xada52[a167_0x3bbd('0x31')]['email'];return this[a167_0x3bbd('0x37')](_0xada52,null,null)[a167_0x3bbd('0x33')](function(_0x46a260,_0x97b967){return responseUtils[a167_0x3bbd('0x2d')](_0xada52,_0x24541b,!![],0xc8);})[a167_0x3bbd('0x38')](_0x51bec8=>{return responseUtils['errorResponse'](_0xada52,_0x24541b,_0x51bec8[a167_0x3bbd('0x39')],0x1f4);});})[a167_0x3bbd('0x38')](_0x878c9=>{return responseUtils[a167_0x3bbd('0x22')](_0xada52,_0x24541b,_0x878c9[a167_0x3bbd('0x39')],0x1f4);});}[a167_0x3bbd('0x3a')](_0x4ea35f,_0xea7eee,_0x4f3664){if(!_0x4ea35f[a167_0x3bbd('0x21')]){return responseUtils[a167_0x3bbd('0x22')](_0x4ea35f,_0xea7eee,'authentication\x20failed',0x191);}const _0xded261=formidable({'multiples':!![]});_0xded261[a167_0x3bbd('0x3b')](_0x4ea35f,(_0x55fc67,_0x432b42,_0x397e2e)=>{if(_0x55fc67){return responseUtils[a167_0x3bbd('0x22')](_0xea7eee,_0x55fc67[a167_0x3bbd('0x39')],0x1f4);}const _0x2d0e4a=_0x4ea35f['user'];const _0xf7340c=_0x397e2e['image'][a167_0x3bbd('0x3c')];const _0x34dbd3=process['env']['FILES_FOLDER']+a167_0x3bbd('0x3d');fsExtra[a167_0x3bbd('0x3e')](_0x34dbd3);const _0x185787=_0x34dbd3+_0x2d0e4a['id']+'.jpg';fsExtra[a167_0x3bbd('0x3f')](_0xf7340c,_0x185787,function(_0x55fc67){if(_0x55fc67)throw _0x55fc67;return responseUtils[a167_0x3bbd('0x2d')](_0x4ea35f,_0xea7eee,!![],0xc8);});});}[a167_0x3bbd('0x13')](_0x8be0a8,_0xda68c2,_0x10bd1d){const _0x2f3812=sequelize_utils_1[a167_0x3bbd('0xb')][a167_0x3bbd('0x40')](_0x8be0a8['params']['id']);const _0x5e6b66=process[a167_0x3bbd('0x41')]['FILES_FOLDER']+a167_0x3bbd('0x3d')+_0x2f3812+a167_0x3bbd('0x42');if(fsExtra[a167_0x3bbd('0x43')](_0x5e6b66)){_0xda68c2[a167_0x3bbd('0x44')](_0x5e6b66);}else{return responseUtils['errorResponse'](_0x8be0a8,_0xda68c2,null,0x194);}}}exports[a167_0x3bbd('0xb')]=UsersController;