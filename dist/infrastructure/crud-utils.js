var a207_0xea09=['query','offset','authentication\x20failed','created_by_user_id','model','updated_by_user_id','deleted_by_user_id','then','i18n','default','toJSONLocalizedOnly','headers','lang','toJSON','encryptId','decryptId','findByPk','dataValues','IMAGE_FILES_FOLDER','images/','.jpg','env','.png','parse','stringify','created_at','updated_at','deleted_at','status','findByUuid','uuid','base64Sync','save','body','findOneAndUpdate','create','password','hashPassword','saveImageFile','bind','findUuidAndUpdate','length','log','findOne','updateOrCreate','update','findOrCreate','remove','destroy','image_data','match','png','jpg','ensureDirSync','name','fileName','writeFile','base64','__importDefault','__esModule','./crypt-utils','../infrastructure/auth-utils','fs-extra','base64-img','../infrastructure/response-utils','count','user','errorResponse','params','json','catch','send','stack','find'];(function(_0x30d808,_0x468ebb){var _0x567612=function(_0x11ee7d){while(--_0x11ee7d){_0x30d808['push'](_0x30d808['shift']());}};_0x567612(++_0x468ebb);}(a207_0xea09,0x84));var a207_0x31e5=function(_0x1196c6,_0x44e6fa){_0x1196c6=_0x1196c6-0x0;var _0x18d0d0=a207_0xea09[_0x1196c6];return _0x18d0d0;};'use strict';var __importDefault=this&&this[a207_0x31e5('0x0')]||function(_0x14ec90){return _0x14ec90&&_0x14ec90['__esModule']?_0x14ec90:{'default':_0x14ec90};};Object['defineProperty'](exports,a207_0x31e5('0x1'),{'value':!![]});const sequelize_utils_1=__importDefault(require('./sequelize-utils'));const crypt_utils_1=__importDefault(require(a207_0x31e5('0x2')));const authUtils=require(a207_0x31e5('0x3'));const fsExtra=require(a207_0x31e5('0x4'));const base64Img=require(a207_0x31e5('0x5'));const responseUtils=require(a207_0x31e5('0x6'));class CrudUtils{constructor(_0xa0f359,_0x4b6ef4){this['model']=_0xa0f359;this['i18n']=_0x4b6ef4;}[a207_0x31e5('0x7')](_0x14412a,_0x5addb2,_0x61d290){if(!_0x14412a[a207_0x31e5('0x8')]){return responseUtils[a207_0x31e5('0x9')](_0x5addb2,'authentication\x20failed',0x191);}return this['model'][a207_0x31e5('0x7')]({'where':_0x14412a[a207_0x31e5('0xa')]})['then'](_0x19f835=>{const _0x5ccbd4=_0x19f835;if(_0x5addb2){return _0x5addb2[a207_0x31e5('0xb')]({'success':!![],'data':{'total':_0x19f835}});}else{return _0x5ccbd4;}})[a207_0x31e5('0xc')](_0x24123e=>{if(_0x5addb2){return _0x5addb2['status'](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x24123e[a207_0x31e5('0xe')]});}else{return _0x24123e['stack'];}});}[a207_0x31e5('0xf')](_0x55adad,_0x6d1e25,_0x1b9d94,_0x2aedad=![],_0x4b5f98=[],_0x526c16=null,_0x5deef4=![]){const _0x37960e=_0x55adad[a207_0x31e5('0x10')][a207_0x31e5('0x11')]?Number(_0x55adad[a207_0x31e5('0x10')]['offset']):null;const _0xa23768=_0x55adad[a207_0x31e5('0x10')]['limit']?Number(_0x55adad['query']['limit']):null;if(!_0x55adad[a207_0x31e5('0x8')]){return responseUtils[a207_0x31e5('0x9')](_0x6d1e25,a207_0x31e5('0x12'),0x191);}if(!_0x5deef4){_0x55adad[a207_0x31e5('0xa')][a207_0x31e5('0x13')]=_0x55adad['user']['id'];}return this[a207_0x31e5('0x14')]['findAll']({'attributes':{'exclude':_0x2aedad?[]:[a207_0x31e5('0x13'),a207_0x31e5('0x15'),a207_0x31e5('0x16'),'created_at','updated_at','deleted_at']},'where':_0x55adad['params'],'offset':_0x37960e,'limit':_0xa23768,'include':_0x4b5f98,'order':_0x526c16})[a207_0x31e5('0x17')](_0xd83f3b=>{let _0x4b0cb2=this[a207_0x31e5('0x18')]?sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1a')](_0xd83f3b,_0x55adad[a207_0x31e5('0x1b')][a207_0x31e5('0x1c')]):sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1d')](_0xd83f3b);_0x4b0cb2=sequelize_utils_1['default'][a207_0x31e5('0x1e')](_0x4b0cb2);if(_0x6d1e25){return responseUtils['successResponse'](_0x6d1e25,_0x4b0cb2,0xc8);}else{return _0x4b0cb2;}})[a207_0x31e5('0xc')](_0x3b76fa=>{if(_0x6d1e25){return responseUtils[a207_0x31e5('0x9')](_0x6d1e25,_0x3b76fa['stack'],0x1f4);}else{return _0x3b76fa['stack'];}});}['findById'](_0xc8ae46,_0x8dccff,_0x51ee14){if(!_0xc8ae46[a207_0x31e5('0x8')]){return responseUtils['errorResponse'](_0x8dccff,'authentication\x20failed',0x191);}_0xc8ae46[a207_0x31e5('0xa')]['id']=sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1f')](_0xc8ae46[a207_0x31e5('0xa')]['id']);this[a207_0x31e5('0x14')][a207_0x31e5('0x20')](_0xc8ae46[a207_0x31e5('0xa')]['id'])[a207_0x31e5('0x17')](_0x5becf3=>{let _0x224454=this['i18n']?sequelize_utils_1['default'][a207_0x31e5('0x1a')](_0x5becf3,_0xc8ae46[a207_0x31e5('0x1b')]['lang']):_0x5becf3;if(_0x224454){_0x224454=_0x224454[a207_0x31e5('0x21')];_0x224454=sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1e')](_0x224454);let _0x2ae60f=process['env'][a207_0x31e5('0x22')]+a207_0x31e5('0x23')+this[a207_0x31e5('0x14')]['name']+'_'+_0x224454['id']+a207_0x31e5('0x24');if(!fsExtra['existsSync'](_0x2ae60f)){_0x2ae60f=process[a207_0x31e5('0x25')][a207_0x31e5('0x22')]+a207_0x31e5('0x23')+this[a207_0x31e5('0x14')]['name']+'_'+_0x224454['id']+a207_0x31e5('0x26');}let _0x4c508c=null;if(fsExtra['existsSync'](_0x2ae60f)){_0x4c508c=base64Img['base64Sync'](_0x2ae60f);_0x224454=JSON[a207_0x31e5('0x27')](JSON[a207_0x31e5('0x28')](_0x224454));_0x224454['image_data']=_0x4c508c;}delete _0x224454[a207_0x31e5('0x13')];delete _0x224454[a207_0x31e5('0x15')];delete _0x224454[a207_0x31e5('0x16')];delete _0x224454[a207_0x31e5('0x29')];delete _0x224454[a207_0x31e5('0x2a')];delete _0x224454[a207_0x31e5('0x2b')];delete _0x224454['password'];}return _0x8dccff[a207_0x31e5('0xb')]({'success':!![],'data':_0x224454});})[a207_0x31e5('0xc')](_0x395a87=>{return _0x8dccff[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x395a87['stack']});});}[a207_0x31e5('0x2d')](_0xd42d33,_0x434970,_0x1d9b48){if(!_0xd42d33[a207_0x31e5('0x8')]){}this[a207_0x31e5('0x14')]['findOne']({'attributes':{'exclude':['created_by_user_id','updated_by_user_id',a207_0x31e5('0x16'),a207_0x31e5('0x29'),'updated_at',a207_0x31e5('0x2b')]},'where':{'uuid':_0xd42d33['params'][a207_0x31e5('0x2e')]}})[a207_0x31e5('0x17')](_0x198856=>{let _0xc91293=this[a207_0x31e5('0x18')]?sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1a')](_0x198856,_0xd42d33['headers'][a207_0x31e5('0x1c')]):_0x198856;if(_0xc91293){const _0x296af2=process[a207_0x31e5('0x25')][a207_0x31e5('0x22')]+a207_0x31e5('0x23')+_0xc91293[a207_0x31e5('0x2e')]+'.jpg';let _0x44b1b4=null;if(fsExtra['existsSync'](_0x296af2)){_0x44b1b4=base64Img[a207_0x31e5('0x2f')](_0x296af2);_0xc91293=JSON[a207_0x31e5('0x27')](JSON[a207_0x31e5('0x28')](_0xc91293));_0xc91293['image_data']=_0x44b1b4;}}return _0x434970[a207_0x31e5('0xb')]({'success':!![],'data':_0xc91293});})[a207_0x31e5('0xc')](_0x426f89=>{return _0x434970[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x426f89['stack']});});}[a207_0x31e5('0x30')](_0x395938,_0x43b3de,_0x58aa5a){if(!_0x395938[a207_0x31e5('0x8')]){return responseUtils['errorResponse'](_0x43b3de,a207_0x31e5('0x12'),0x191);}if(_0x395938['body']['id']&&_0x395938[a207_0x31e5('0x31')]['id']!=''){return this[a207_0x31e5('0x32')](_0x395938,_0x43b3de,_0x58aa5a);}else{return this[a207_0x31e5('0x33')](_0x395938,_0x43b3de);}}[a207_0x31e5('0x33')](_0x159171,_0x7a8cc1){if(!_0x159171[a207_0x31e5('0x8')]){return responseUtils[a207_0x31e5('0x9')](_0x7a8cc1,'authentication\x20failed',0x191);}_0x159171['body']=sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1f')](_0x159171[a207_0x31e5('0x31')]);_0x159171['body']['created_by_user_id']=_0x159171[a207_0x31e5('0x8')]['id'];if(_0x159171['body'][a207_0x31e5('0x34')]&&_0x159171[a207_0x31e5('0x31')][a207_0x31e5('0x34')]!=''){_0x159171[a207_0x31e5('0x31')]['password']=crypt_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x35')](_0x159171[a207_0x31e5('0x31')][a207_0x31e5('0x34')]);}return this[a207_0x31e5('0x14')]['create'](_0x159171[a207_0x31e5('0x31')],this[a207_0x31e5('0x18')]?{'language_id':_0x159171[a207_0x31e5('0x1b')]['lang']}:{})[a207_0x31e5('0x17')](_0x494e32=>{const _0x2d8aab=this[a207_0x31e5('0x18')]?sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1a')](_0x494e32,_0x159171[a207_0x31e5('0x1b')][a207_0x31e5('0x1c')]):_0x494e32;this[a207_0x31e5('0x36')](_0x159171,_0x2d8aab);delete _0x2d8aab[a207_0x31e5('0x21')]['id'];delete _0x2d8aab[a207_0x31e5('0x21')][a207_0x31e5('0x13')];delete _0x2d8aab[a207_0x31e5('0x21')][a207_0x31e5('0x15')];delete _0x2d8aab[a207_0x31e5('0x21')][a207_0x31e5('0x16')];delete _0x2d8aab[a207_0x31e5('0x21')]['created_at'];delete _0x2d8aab['dataValues'][a207_0x31e5('0x2a')];delete _0x2d8aab[a207_0x31e5('0x21')]['deleted_at'];delete _0x2d8aab[a207_0x31e5('0x21')]['password'];if(_0x7a8cc1){return _0x7a8cc1['json']({'success':!![],'data':_0x2d8aab});}else{return _0x2d8aab;}})[a207_0x31e5('0xc')](_0x5703fb=>{if(_0x7a8cc1){return _0x7a8cc1[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x5703fb[a207_0x31e5('0xe')]});}else{return _0x5703fb[a207_0x31e5('0xe')];}});}[a207_0x31e5('0x32')](_0x1e6cf1,_0x431a80,_0x14fefc){if(!_0x1e6cf1[a207_0x31e5('0x8')]){return responseUtils[a207_0x31e5('0x9')](_0x431a80,a207_0x31e5('0x12'),0x191);}_0x1e6cf1[a207_0x31e5('0x31')]=sequelize_utils_1['default'][a207_0x31e5('0x1f')](_0x1e6cf1[a207_0x31e5('0x31')]);_0x1e6cf1[a207_0x31e5('0x31')][a207_0x31e5('0x15')]=_0x1e6cf1['user']['id'];if(_0x1e6cf1[a207_0x31e5('0x31')][a207_0x31e5('0x34')]&&_0x1e6cf1[a207_0x31e5('0x31')][a207_0x31e5('0x34')]!=''){_0x1e6cf1[a207_0x31e5('0x31')][a207_0x31e5('0x34')]=crypt_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x35')](_0x1e6cf1['body']['password']);}this['model']['findByPk'](_0x1e6cf1['body']['id'])['then'](_0x2fb6bc=>{if(_0x2fb6bc==null)return _0x431a80['json']({'success':!![],'data':_0x2fb6bc});_0x2fb6bc['update'](_0x1e6cf1['body'],{'language_id':_0x1e6cf1['headers'][a207_0x31e5('0x1c')]})[a207_0x31e5('0x17')](function(_0x339119){const _0x4755be=this['i18n']?sequelize_utils_1['default'][a207_0x31e5('0x1a')](_0x2fb6bc,_0x1e6cf1[a207_0x31e5('0x1b')][a207_0x31e5('0x1c')]):_0x2fb6bc;this['saveImageFile'](_0x1e6cf1,_0x4755be);delete _0x4755be[a207_0x31e5('0x21')]['id'];delete _0x4755be[a207_0x31e5('0x21')][a207_0x31e5('0x13')];delete _0x4755be[a207_0x31e5('0x21')][a207_0x31e5('0x15')];delete _0x4755be[a207_0x31e5('0x21')][a207_0x31e5('0x16')];delete _0x4755be['dataValues']['created_at'];delete _0x4755be['dataValues'][a207_0x31e5('0x2a')];delete _0x4755be[a207_0x31e5('0x21')][a207_0x31e5('0x2b')];delete _0x4755be[a207_0x31e5('0x21')][a207_0x31e5('0x34')];return _0x431a80[a207_0x31e5('0xb')]({'success':!![],'data':_0x4755be});}[a207_0x31e5('0x37')](this))[a207_0x31e5('0xc')](_0x59e555=>{return _0x431a80[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x59e555[a207_0x31e5('0xe')]});});})[a207_0x31e5('0xc')](_0xfe9c80=>{return _0x431a80[a207_0x31e5('0x2c')](0x1f4)['send']({'success':![],'data':_0xfe9c80['stack']});});}[a207_0x31e5('0x38')](_0x53622e,_0x26e807,_0x3d9e94){if(!_0x53622e[a207_0x31e5('0x8')]){return _0x26e807['status'](0x191)[a207_0x31e5('0xd')]({'success':![],'data':a207_0x31e5('0x12')});}if(_0x53622e[a207_0x31e5('0x8')]&&_0x53622e[a207_0x31e5('0x8')][a207_0x31e5('0x39')]>0x0){}console[a207_0x31e5('0x3a')](_0x53622e['params']);const _0x18f050=_0x53622e['body']['uuid']&&_0x53622e[a207_0x31e5('0x31')][a207_0x31e5('0x2e')]!=''?_0x53622e['body'][a207_0x31e5('0x2e')]:_0x53622e[a207_0x31e5('0xa')][a207_0x31e5('0x2e')];this['model'][a207_0x31e5('0x3b')]({'where':{'uuid':_0x18f050}})[a207_0x31e5('0x17')](_0x323f3a=>{if(_0x323f3a==null)return _0x26e807['json']({'success':!![],'data':_0x323f3a});_0x323f3a['update'](_0x53622e[a207_0x31e5('0x31')],{'language_id':_0x53622e[a207_0x31e5('0x1b')][a207_0x31e5('0x1c')]})[a207_0x31e5('0x17')](function(_0x54177f){const _0x29b70e=this['i18n']?sequelize_utils_1['default'][a207_0x31e5('0x1a')](_0x323f3a,_0x53622e[a207_0x31e5('0x1b')]['lang']):_0x323f3a;this[a207_0x31e5('0x36')](_0x53622e,_0x29b70e);return _0x26e807['json']({'success':!![],'data':_0x29b70e});}['bind'](this))[a207_0x31e5('0xc')](_0x4c6f1a=>{return _0x26e807[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x4c6f1a[a207_0x31e5('0xe')]});});})['catch'](_0x2b0f76=>{return _0x26e807['status'](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x2b0f76['stack']});});}[a207_0x31e5('0x3c')](_0x7f9285,_0x43f74e,_0x34efae,_0x29ca4a=![]){if(!_0x7f9285[a207_0x31e5('0x8')]){return _0x43f74e[a207_0x31e5('0x2c')](0x191)['send']({'success':![],'data':a207_0x31e5('0x12')});}if(_0x7f9285[a207_0x31e5('0x8')]&&_0x7f9285[a207_0x31e5('0x8')][a207_0x31e5('0x39')]>0x0){}return this[a207_0x31e5('0x14')][a207_0x31e5('0x3b')]({'where':_0x7f9285['params']})[a207_0x31e5('0x17')](function(_0x3abef6){if(_0x3abef6){return _0x3abef6[a207_0x31e5('0x3d')](_0x7f9285[a207_0x31e5('0x31')])['then'](function(_0x19c6f7){const _0x5749d0=_0x19c6f7[a207_0x31e5('0x21')];if(_0x29ca4a){delete _0x5749d0['id'];}if(_0x43f74e){return _0x43f74e[a207_0x31e5('0xb')]({'success':!![],'data':_0x5749d0});}else{return _0x5749d0;}}[a207_0x31e5('0x37')](this));}else{return this[a207_0x31e5('0x14')]['create'](_0x7f9285[a207_0x31e5('0x31')])[a207_0x31e5('0x17')](function(_0x4e25c3){if(_0x43f74e){return _0x43f74e[a207_0x31e5('0xb')]({'success':!![],'data':_0x4e25c3['toJSON']()});}else{return _0x4e25c3;}});}}[a207_0x31e5('0x37')](this))['catch'](_0xb02b12=>{if(_0x43f74e){return _0x43f74e['status'](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0xb02b12[a207_0x31e5('0xe')]});}else{return _0xb02b12[a207_0x31e5('0xe')];}});}[a207_0x31e5('0x3e')](_0x3c21af,_0x16d1d8,_0x3e7049){if(!_0x3c21af[a207_0x31e5('0x8')]){return _0x16d1d8['status'](0x191)['send']({'success':![],'data':'authentication\x20failed'});}_0x3c21af[a207_0x31e5('0x31')]['created_by_user_id']=_0x3c21af[a207_0x31e5('0x8')]['id'];return this[a207_0x31e5('0x14')][a207_0x31e5('0x3e')]({'where':{'uuid':_0x3c21af[a207_0x31e5('0x31')][a207_0x31e5('0x2e')]},'defaults':_0x3c21af['body']})[a207_0x31e5('0x17')]((_0xac9fb7,_0xe9cc97)=>{if(_0xe9cc97){}else{}return _0x16d1d8[a207_0x31e5('0xb')]({'success':!![],'data':_0xac9fb7});})['catch'](_0x3a9bc7=>{return _0x16d1d8[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x3a9bc7[a207_0x31e5('0xe')]});});}[a207_0x31e5('0x3f')](_0x46db9d,_0x3da3c2,_0x4d57f3){if(!_0x46db9d[a207_0x31e5('0x8')]||_0x46db9d['user'][a207_0x31e5('0x39')]==0x0){return _0x3da3c2[a207_0x31e5('0x2c')](0x191)[a207_0x31e5('0xd')]({'success':![],'data':'authentication\x20failed'});}_0x46db9d[a207_0x31e5('0xa')]['id']=sequelize_utils_1['default'][a207_0x31e5('0x1f')](_0x46db9d[a207_0x31e5('0xa')]['id']);this[a207_0x31e5('0x14')][a207_0x31e5('0x20')](_0x46db9d['params']['id'])[a207_0x31e5('0x17')](_0x3d908d=>{if(_0x3d908d==null)return _0x3da3c2[a207_0x31e5('0xb')]({'success':!![],'data':_0x3d908d});_0x3d908d[a207_0x31e5('0x3d')]({'deleted_by_user_id':_0x46db9d['user']['id']},{'language_id':_0x46db9d[a207_0x31e5('0x1b')][a207_0x31e5('0x1c')]})[a207_0x31e5('0x17')](function(_0x2b669d){_0x3d908d[a207_0x31e5('0x40')]()[a207_0x31e5('0x17')](function(_0x3d908d){return _0x3da3c2[a207_0x31e5('0xb')]({'success':!![],'data':_0x3d908d});})[a207_0x31e5('0xc')](_0x2d56b=>{return _0x3da3c2[a207_0x31e5('0x2c')](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x2d56b[a207_0x31e5('0xe')]});});}['bind'](this))[a207_0x31e5('0xc')](_0x8152c6=>{return _0x3da3c2['status'](0x1f4)[a207_0x31e5('0xd')]({'success':![],'data':_0x8152c6[a207_0x31e5('0xe')]});});})[a207_0x31e5('0xc')](_0x2b87b1=>{return _0x3da3c2['status'](0x1f4)['send']({'success':![],'data':_0x2b87b1[a207_0x31e5('0xe')]});});}[a207_0x31e5('0x36')](_0x6ccc93,_0x41309b){if(_0x6ccc93['body'][a207_0x31e5('0x41')]&&_0x6ccc93[a207_0x31e5('0x31')]['image_data']!=''){const _0x3b8957=process[a207_0x31e5('0x25')][a207_0x31e5('0x22')]+a207_0x31e5('0x23');const _0x3417ab=_0x6ccc93[a207_0x31e5('0x31')][a207_0x31e5('0x41')];let _0x36bd22='';const _0x23211e=_0x3417ab['replace'](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x3417ab[a207_0x31e5('0x42')](/^data:image\/png;base64,/,'')){_0x36bd22=a207_0x31e5('0x43');}else if(_0x3417ab[a207_0x31e5('0x42')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x36bd22=a207_0x31e5('0x44');}const _0x35c7d8=sequelize_utils_1[a207_0x31e5('0x19')][a207_0x31e5('0x1e')](_0x41309b['dataValues']['id']);fsExtra[a207_0x31e5('0x45')](_0x3b8957);const _0x85b0b1=''+_0x3b8957+this[a207_0x31e5('0x14')][a207_0x31e5('0x46')]+'_'+_0x35c7d8+'.'+_0x36bd22;console[a207_0x31e5('0x3a')](a207_0x31e5('0x47'),_0x85b0b1);fsExtra[a207_0x31e5('0x48')](_0x85b0b1,_0x23211e,a207_0x31e5('0x49'),function(_0x2b70fe){console[a207_0x31e5('0x3a')]('err:',_0x2b70fe);});}}}exports['default']=CrudUtils;