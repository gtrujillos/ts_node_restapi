var a186_0xd0c1=['created_at','password','save','body','findOneAndUpdate','create','decryptId','hashPassword','create\x20req.body:\x20','saveImageFile','updateOrCreate','length','findOne','update','bind','send','uuid','remove','replace','match','png','jpg','ensureDirSync','fileName','base64','log','findByUuid','updated_at','existsSync','findUuidAndUpdate','__importDefault','__esModule','defineProperty','./crypt-utils','../app/shared/models/crudOptions','../infrastructure/auth-utils','fs-extra','base64-img','../infrastructure/response-utils','model','i18n','count','public','user','authentication\x20failed','params','created_by_user_id','then','json','status','stack','query','page_size','page_index','errorResponse','attributes','includeAll','updated_by_user_id','deleted_by_user_id','updatedAt','deletedAt','include','orderBy','default','toJSONLocalizedOnly','lang','toJSON','encryptId','successResponse','catch','shared','findByPk','headers','dataValues','FILES_FOLDER','images/','name','.jpg','env','base64Sync','image_data'];(function(_0x49847a,_0xe351fe){var _0x2f576f=function(_0x3aeb08){while(--_0x3aeb08){_0x49847a['push'](_0x49847a['shift']());}};_0x2f576f(++_0xe351fe);}(a186_0xd0c1,0x162));var a186_0x442b=function(_0x4e2a83,_0x904fd3){_0x4e2a83=_0x4e2a83-0x0;var _0x474c2e=a186_0xd0c1[_0x4e2a83];return _0x474c2e;};'use strict';var __importDefault=this&&this[a186_0x442b('0x0')]||function(_0xe50a08){return _0xe50a08&&_0xe50a08[a186_0x442b('0x1')]?_0xe50a08:{'default':_0xe50a08};};Object[a186_0x442b('0x2')](exports,'__esModule',{'value':!![]});const sequelize_utils_1=__importDefault(require('./sequelize-utils'));const crypt_utils_1=__importDefault(require(a186_0x442b('0x3')));const crudOptions_1=__importDefault(require(a186_0x442b('0x4')));const authUtils=require(a186_0x442b('0x5'));const fsExtra=require(a186_0x442b('0x6'));const base64Img=require(a186_0x442b('0x7'));const responseUtils=require(a186_0x442b('0x8'));class CrudUtils{constructor(_0x4a3c37,_0x1102e5){this[a186_0x442b('0x9')]=_0x4a3c37;this[a186_0x442b('0xa')]=_0x1102e5;}[a186_0x442b('0xb')](_0x2f1edd,_0x326c39,_0x48625c,_0x108630=new crudOptions_1['default']()){if(!_0x108630[a186_0x442b('0xc')]){if(!_0x2f1edd[a186_0x442b('0xd')]){return responseUtils['errorResponse'](_0x2f1edd,_0x326c39,a186_0x442b('0xe'),0x191);}}if(!_0x108630['shared']){if(_0x2f1edd[a186_0x442b('0xd')]){_0x2f1edd[a186_0x442b('0xf')][a186_0x442b('0x10')]=_0x2f1edd[a186_0x442b('0xd')]['id'];}}return this[a186_0x442b('0x9')][a186_0x442b('0xb')]({'where':_0x2f1edd[a186_0x442b('0xf')]})[a186_0x442b('0x11')](_0x1e9814=>{const _0x30cafd=_0x1e9814;if(_0x326c39){return _0x326c39[a186_0x442b('0x12')]({'success':!![],'data':{'total':_0x1e9814}});}else{return _0x30cafd;}})['catch'](_0x285d01=>{if(_0x326c39){return _0x326c39[a186_0x442b('0x13')](0x1f4)['send']({'success':![],'data':_0x285d01[a186_0x442b('0x14')]});}else{return _0x285d01['stack'];}});}['find'](_0x387db7,_0x5f27ba,_0x1f579e,_0x5881d3=new crudOptions_1['default']()){let _0x3126aa=_0x387db7[a186_0x442b('0x15')][a186_0x442b('0x16')]?Number(_0x387db7[a186_0x442b('0x15')]['page_size']):null;if(_0x3126aa==null||_0x3126aa>0x64){_0x3126aa=0x64;}let _0x3eb755=_0x387db7[a186_0x442b('0x15')][a186_0x442b('0x17')]&&_0x3126aa!=null?Number(_0x387db7['query'][a186_0x442b('0x17')])*_0x3126aa:null;if(_0x3eb755==null){_0x3eb755=0x0;}if(!_0x5881d3[a186_0x442b('0xc')]){if(!_0x387db7['user']){return responseUtils[a186_0x442b('0x18')](_0x387db7,_0x5f27ba,a186_0x442b('0xe'),0x191);}}if(!_0x5881d3['shared']){if(_0x387db7[a186_0x442b('0xd')]){_0x387db7[a186_0x442b('0xf')][a186_0x442b('0x10')]=_0x387db7[a186_0x442b('0xd')]['id'];}}return this[a186_0x442b('0x9')]['findAll']({'attributes':_0x5881d3['attributes']?_0x5881d3[a186_0x442b('0x19')]:{'exclude':_0x5881d3[a186_0x442b('0x1a')]?[]:[a186_0x442b('0x10'),a186_0x442b('0x1b'),a186_0x442b('0x1c'),'created_at','updated_at','deleted_at','createdAt',a186_0x442b('0x1d'),a186_0x442b('0x1e')]},'where':_0x387db7[a186_0x442b('0xf')],'offset':_0x3eb755,'limit':_0x3126aa,'include':_0x5881d3[a186_0x442b('0x1f')],'order':_0x5881d3[a186_0x442b('0x20')]})[a186_0x442b('0x11')](_0x24ce8b=>{let _0x1ba9b6=this[a186_0x442b('0xa')]?sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x22')](_0x24ce8b,_0x387db7['headers'][a186_0x442b('0x23')]):sequelize_utils_1['default'][a186_0x442b('0x24')](_0x24ce8b);_0x1ba9b6=sequelize_utils_1['default'][a186_0x442b('0x25')](_0x1ba9b6);if(_0x5f27ba){return responseUtils[a186_0x442b('0x26')](_0x387db7,_0x5f27ba,_0x1ba9b6,0xc8);}else{return _0x1ba9b6;}})[a186_0x442b('0x27')](_0x5cb0e3=>{if(_0x5f27ba){return responseUtils[a186_0x442b('0x18')](_0x387db7,_0x5f27ba,_0x5cb0e3[a186_0x442b('0x14')],0x1f4);}else{return _0x5cb0e3[a186_0x442b('0x14')];}});}['findById'](_0x53efcd,_0x3ffc3b,_0x374c6f,_0x5a03d7=new crudOptions_1[(a186_0x442b('0x21'))]()){if(!_0x5a03d7[a186_0x442b('0xc')]){if(!_0x53efcd['user']){return responseUtils[a186_0x442b('0x18')](_0x53efcd,_0x3ffc3b,'authentication\x20failed',0x191);}}if(!_0x5a03d7[a186_0x442b('0x28')]){if(_0x53efcd[a186_0x442b('0xd')]){_0x53efcd[a186_0x442b('0xf')]['created_by_user_id']=_0x53efcd[a186_0x442b('0xd')]['id'];}}_0x53efcd[a186_0x442b('0xf')]['id']=sequelize_utils_1[a186_0x442b('0x21')]['decryptId'](_0x53efcd[a186_0x442b('0xf')]['id']);return this['model'][a186_0x442b('0x29')](_0x53efcd[a186_0x442b('0xf')]['id'])[a186_0x442b('0x11')](_0x16c4e1=>{let _0x4a8c38=this['i18n']?sequelize_utils_1['default']['toJSONLocalizedOnly'](_0x16c4e1,_0x53efcd[a186_0x442b('0x2a')]['lang']):_0x16c4e1;if(_0x4a8c38){_0x4a8c38=_0x4a8c38[a186_0x442b('0x2b')];_0x4a8c38=sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x25')](_0x4a8c38);let _0x1dde11=process['env'][a186_0x442b('0x2c')]+a186_0x442b('0x2d')+this[a186_0x442b('0x9')][a186_0x442b('0x2e')]+'_'+_0x4a8c38['id']+a186_0x442b('0x2f');if(!fsExtra['existsSync'](_0x1dde11)){_0x1dde11=process[a186_0x442b('0x30')][a186_0x442b('0x2c')]+a186_0x442b('0x2d')+this[a186_0x442b('0x9')]['name']+'_'+_0x4a8c38['id']+'.png';}let _0x3319f5=null;if(fsExtra['existsSync'](_0x1dde11)){_0x3319f5=base64Img[a186_0x442b('0x31')](_0x1dde11);_0x4a8c38=JSON['parse'](JSON['stringify'](_0x4a8c38));_0x4a8c38[a186_0x442b('0x32')]=_0x3319f5;}if(!_0x5a03d7['includeAll']){delete _0x4a8c38[a186_0x442b('0x10')];delete _0x4a8c38[a186_0x442b('0x1b')];delete _0x4a8c38[a186_0x442b('0x1c')];delete _0x4a8c38[a186_0x442b('0x33')];delete _0x4a8c38['updated_at'];delete _0x4a8c38['deleted_at'];delete _0x4a8c38[a186_0x442b('0x34')];}}if(_0x3ffc3b){return responseUtils[a186_0x442b('0x26')](_0x53efcd,_0x3ffc3b,_0x4a8c38,0xc8);}else{return _0x4a8c38;}})['catch'](_0x289744=>{if(_0x3ffc3b){return responseUtils[a186_0x442b('0x18')](_0x53efcd,_0x3ffc3b,_0x289744[a186_0x442b('0x14')],0x1f4);}else{return _0x289744[a186_0x442b('0x14')];}});}[a186_0x442b('0x35')](_0x5ce9b4,_0x2b81f2,_0x30d55d){if(!_0x5ce9b4[a186_0x442b('0xd')]){return responseUtils['errorResponse'](_0x5ce9b4,_0x2b81f2,a186_0x442b('0xe'),0x191);}if(_0x5ce9b4[a186_0x442b('0x36')]['id']&&_0x5ce9b4[a186_0x442b('0x36')]['id']!=''){return this[a186_0x442b('0x37')](_0x5ce9b4,_0x2b81f2,_0x30d55d);}else{return this[a186_0x442b('0x38')](_0x5ce9b4,_0x2b81f2);}}[a186_0x442b('0x38')](_0x1b2b64,_0x1f0602){if(!_0x1b2b64['user']){return responseUtils[a186_0x442b('0x18')](_0x1b2b64,_0x1f0602,a186_0x442b('0xe'),0x191);}_0x1b2b64['body']=sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x39')](_0x1b2b64[a186_0x442b('0x36')]);_0x1b2b64[a186_0x442b('0x36')][a186_0x442b('0x10')]=_0x1b2b64[a186_0x442b('0xd')]['id'];if(_0x1b2b64[a186_0x442b('0x36')][a186_0x442b('0x34')]&&_0x1b2b64[a186_0x442b('0x36')][a186_0x442b('0x34')]!=''){_0x1b2b64[a186_0x442b('0x36')]['password']=crypt_utils_1[a186_0x442b('0x21')][a186_0x442b('0x3a')](_0x1b2b64[a186_0x442b('0x36')][a186_0x442b('0x34')]);}console['log'](a186_0x442b('0x3b'),_0x1b2b64[a186_0x442b('0x36')]);return this[a186_0x442b('0x9')][a186_0x442b('0x38')](_0x1b2b64[a186_0x442b('0x36')],this[a186_0x442b('0xa')]?{'language_id':_0x1b2b64[a186_0x442b('0x2a')][a186_0x442b('0x23')]}:{})[a186_0x442b('0x11')](_0x39c551=>{const _0x158b48=this['i18n']?sequelize_utils_1['default'][a186_0x442b('0x22')](_0x39c551,_0x1b2b64[a186_0x442b('0x2a')][a186_0x442b('0x23')]):_0x39c551;this['saveImageFile'](_0x1b2b64,_0x158b48);const _0x7e256={'id':sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x25')](_0x158b48[a186_0x442b('0x2b')]['id'])};if(_0x1f0602){return responseUtils[a186_0x442b('0x26')](_0x1b2b64,_0x1f0602,_0x7e256,0xc8);}else{return _0x158b48;}})[a186_0x442b('0x27')](_0x13149b=>{if(_0x1f0602){return responseUtils[a186_0x442b('0x18')](_0x1b2b64,_0x1f0602,_0x13149b[a186_0x442b('0x14')],0x1f4);}else{return _0x13149b[a186_0x442b('0x14')];}});}['findOneAndUpdate'](_0x4476c0,_0x9912bd,_0x274b09,_0x5d693e=new crudOptions_1['default']()){if(!_0x4476c0[a186_0x442b('0xd')]){return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,a186_0x442b('0xe'),0x191);}_0x4476c0[a186_0x442b('0x36')]=sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x39')](_0x4476c0[a186_0x442b('0x36')]);let _0x34b23f=null;if(_0x4476c0[a186_0x442b('0xf')]['id']){_0x34b23f=sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x39')](_0x4476c0[a186_0x442b('0xf')]['id']);}else if(_0x4476c0[a186_0x442b('0x36')]['id']){_0x34b23f=_0x4476c0['body']['id'];}else{return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,null,0x190);}if(_0x34b23f==null){if(_0x9912bd){return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,null,0x194);}else{return null;}}_0x4476c0['body'][a186_0x442b('0x1b')]=_0x4476c0[a186_0x442b('0xd')]['id'];if(_0x4476c0['body'][a186_0x442b('0x34')]&&_0x4476c0['body'][a186_0x442b('0x34')]!=''){_0x4476c0[a186_0x442b('0x36')]['password']=crypt_utils_1['default'][a186_0x442b('0x3a')](_0x4476c0[a186_0x442b('0x36')]['password']);}return this[a186_0x442b('0x9')][a186_0x442b('0x29')](_0x34b23f)[a186_0x442b('0x11')](_0x1bcd90=>{if(_0x1bcd90==null||_0x1bcd90[a186_0x442b('0x2b')]['created_by_user_id']!=_0x4476c0[a186_0x442b('0xd')]['id']){return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,null,0x194);}return _0x1bcd90['update'](_0x4476c0[a186_0x442b('0x36')],{'language_id':_0x4476c0['headers']['lang']})[a186_0x442b('0x11')](function(_0x515f11){const _0x37d6ba=this[a186_0x442b('0xa')]?sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x22')](_0x515f11,_0x4476c0[a186_0x442b('0x2a')][a186_0x442b('0x23')]):_0x515f11;this[a186_0x442b('0x3c')](_0x4476c0,_0x37d6ba);const _0x48a742={'id':sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x25')](_0x37d6ba[a186_0x442b('0x2b')]['id'])};if(_0x9912bd){return responseUtils[a186_0x442b('0x26')](_0x4476c0,_0x9912bd,_0x48a742,0xc8);}else{return _0x37d6ba;}}['bind'](this))['catch'](_0x4f93d5=>{if(_0x9912bd){return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,_0x4f93d5['stack'],0x1f4);}else{return _0x4f93d5['stack'];}});})[a186_0x442b('0x27')](_0x39a9e9=>{if(_0x9912bd){return responseUtils[a186_0x442b('0x18')](_0x4476c0,_0x9912bd,_0x39a9e9[a186_0x442b('0x14')],0x1f4);}else{return _0x39a9e9[a186_0x442b('0x14')];}});}[a186_0x442b('0x3d')](_0x283118,_0x2a4bf3,_0x49314f,_0x2bcc91=![],_0x4c73b9=![]){if(!_0x283118[a186_0x442b('0xd')]&&!_0x4c73b9){return responseUtils[a186_0x442b('0x18')](_0x283118,_0x2a4bf3,a186_0x442b('0xe'),0x191);}if(_0x283118[a186_0x442b('0xd')]&&_0x283118['user'][a186_0x442b('0x3e')]>0x0){}return this[a186_0x442b('0x9')][a186_0x442b('0x3f')]({'where':_0x283118['params']})[a186_0x442b('0x11')](function(_0x5cdf24){if(_0x5cdf24){return _0x5cdf24[a186_0x442b('0x40')](_0x283118[a186_0x442b('0x36')])[a186_0x442b('0x11')](function(_0x10d9d7){const _0x14446b=_0x10d9d7[a186_0x442b('0x2b')];if(!_0x2bcc91){delete _0x14446b['id'];}if(_0x2a4bf3){return _0x2a4bf3[a186_0x442b('0x12')]({'success':!![],'data':_0x14446b});}else{return _0x14446b;}}[a186_0x442b('0x41')](this));}else{return this[a186_0x442b('0x9')][a186_0x442b('0x38')](_0x283118[a186_0x442b('0x36')])[a186_0x442b('0x11')](function(_0x3bc716){if(_0x2a4bf3){return _0x2a4bf3[a186_0x442b('0x12')]({'success':!![],'data':_0x3bc716[a186_0x442b('0x24')]()});}else{return _0x3bc716;}});}}[a186_0x442b('0x41')](this))[a186_0x442b('0x27')](_0x533cc3=>{if(_0x2a4bf3){return _0x2a4bf3[a186_0x442b('0x13')](0x1f4)['send']({'success':![],'data':_0x533cc3[a186_0x442b('0x14')]});}else{return _0x533cc3[a186_0x442b('0x14')];}});}['findOrCreate'](_0x41c098,_0x55c3aa,_0x5d99e4){if(!_0x41c098[a186_0x442b('0xd')]){return _0x55c3aa['status'](0x191)[a186_0x442b('0x42')]({'success':![],'data':a186_0x442b('0xe')});}_0x41c098[a186_0x442b('0x36')][a186_0x442b('0x10')]=_0x41c098[a186_0x442b('0xd')]['id'];return this[a186_0x442b('0x9')]['findOrCreate']({'where':{'uuid':_0x41c098[a186_0x442b('0x36')][a186_0x442b('0x43')]},'defaults':_0x41c098['body']})[a186_0x442b('0x11')]((_0x57aaa5,_0x1b00e3)=>{if(_0x1b00e3){}else{}return _0x55c3aa[a186_0x442b('0x12')]({'success':!![],'data':_0x57aaa5});})[a186_0x442b('0x27')](_0x721cf6=>{return _0x55c3aa[a186_0x442b('0x13')](0x1f4)['send']({'success':![],'data':_0x721cf6[a186_0x442b('0x14')]});});}[a186_0x442b('0x44')](_0x12fd1b,_0x1e3eaf,_0x1b2d89){if(!_0x12fd1b[a186_0x442b('0xd')]){return responseUtils[a186_0x442b('0x18')](_0x12fd1b,_0x1e3eaf,a186_0x442b('0xe'),0x191);}let _0x5910a6=null;if(_0x12fd1b['params']['id']){_0x5910a6=sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x39')](_0x12fd1b['params']['id']);}else{return responseUtils[a186_0x442b('0x18')](_0x12fd1b,_0x1e3eaf,null,0x190);}if(_0x5910a6==null){if(_0x1e3eaf){return responseUtils['errorResponse'](_0x12fd1b,_0x1e3eaf,null,0x194);}else{return null;}}this[a186_0x442b('0x9')][a186_0x442b('0x29')](_0x5910a6)[a186_0x442b('0x11')](_0x434e91=>{if(_0x434e91==null||_0x434e91[a186_0x442b('0x2b')][a186_0x442b('0x10')]!=_0x12fd1b['user']['id']){return responseUtils['errorResponse'](_0x12fd1b,_0x1e3eaf,null,0x194);}_0x434e91[a186_0x442b('0x40')]({'deleted_by_user_id':_0x12fd1b[a186_0x442b('0xd')]['id']},{'language_id':_0x12fd1b[a186_0x442b('0x2a')][a186_0x442b('0x23')]})[a186_0x442b('0x11')](function(_0xb86fc){_0x434e91['destroy']()['then'](function(_0x434e91){if(_0x1e3eaf){return responseUtils[a186_0x442b('0x26')](_0x12fd1b,_0x1e3eaf,null,0xc8);}else{return _0x434e91;}})[a186_0x442b('0x27')](_0xdaf146=>{return responseUtils[a186_0x442b('0x18')](_0x12fd1b,_0x1e3eaf,_0xdaf146[a186_0x442b('0x14')],0x1f4);});}[a186_0x442b('0x41')](this))[a186_0x442b('0x27')](_0x4ee6d7=>{return responseUtils['errorResponse'](_0x12fd1b,_0x1e3eaf,_0x4ee6d7[a186_0x442b('0x14')],0x1f4);});})[a186_0x442b('0x27')](_0x20ed87=>{return responseUtils[a186_0x442b('0x18')](_0x12fd1b,_0x1e3eaf,_0x20ed87[a186_0x442b('0x14')],0x1f4);});}[a186_0x442b('0x3c')](_0x3df9d0,_0x5d6a87){if(_0x3df9d0[a186_0x442b('0x36')][a186_0x442b('0x32')]&&_0x3df9d0[a186_0x442b('0x36')][a186_0x442b('0x32')]!=''){const _0x109a94=process[a186_0x442b('0x30')]['FILES_FOLDER']+'images/';const _0x576052=_0x3df9d0[a186_0x442b('0x36')]['image_data'];let _0x39843b='';const _0x1963b2=_0x576052[a186_0x442b('0x45')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x576052[a186_0x442b('0x46')](/^data:image\/png;base64,/,'')){_0x39843b=a186_0x442b('0x47');}else if(_0x576052['match'](/^data:image\/(jpg|jpeg);base64,/,'')){_0x39843b=a186_0x442b('0x48');}const _0x2908d2=sequelize_utils_1['default'][a186_0x442b('0x25')](_0x5d6a87['dataValues']['id']);fsExtra[a186_0x442b('0x49')](_0x109a94);const _0x2a015e=''+_0x109a94+this[a186_0x442b('0x9')]['name']+'_'+_0x2908d2+'.'+_0x39843b;console['log'](a186_0x442b('0x4a'),_0x2a015e);fsExtra['writeFile'](_0x2a015e,_0x1963b2,a186_0x442b('0x4b'),function(_0x203662){console[a186_0x442b('0x4c')]('err:',_0x203662);});}}[a186_0x442b('0x4d')](_0x5ab6d7,_0x3318a1,_0x170709){if(!_0x5ab6d7['user']){}this[a186_0x442b('0x9')]['findOne']({'attributes':{'exclude':[a186_0x442b('0x10'),a186_0x442b('0x1b'),a186_0x442b('0x1c'),a186_0x442b('0x33'),a186_0x442b('0x4e'),'deleted_at']},'where':{'uuid':_0x5ab6d7[a186_0x442b('0xf')][a186_0x442b('0x43')]}})['then'](_0x3d862e=>{let _0xbb722c=this[a186_0x442b('0xa')]?sequelize_utils_1[a186_0x442b('0x21')][a186_0x442b('0x22')](_0x3d862e,_0x5ab6d7[a186_0x442b('0x2a')][a186_0x442b('0x23')]):_0x3d862e;if(_0xbb722c){const _0xdb240d=process[a186_0x442b('0x30')][a186_0x442b('0x2c')]+'images/'+_0xbb722c['uuid']+a186_0x442b('0x2f');let _0x4513d0=null;if(fsExtra[a186_0x442b('0x4f')](_0xdb240d)){_0x4513d0=base64Img['base64Sync'](_0xdb240d);_0xbb722c=JSON['parse'](JSON['stringify'](_0xbb722c));_0xbb722c[a186_0x442b('0x32')]=_0x4513d0;}}return _0x3318a1[a186_0x442b('0x12')]({'success':!![],'data':_0xbb722c});})[a186_0x442b('0x27')](_0x31c53e=>{return _0x3318a1[a186_0x442b('0x13')](0x1f4)[a186_0x442b('0x42')]({'success':![],'data':_0x31c53e[a186_0x442b('0x14')]});});}[a186_0x442b('0x50')](_0x37e91a,_0x47dc9a,_0x49adfd){if(!_0x37e91a[a186_0x442b('0xd')]){return _0x47dc9a[a186_0x442b('0x13')](0x191)[a186_0x442b('0x42')]({'success':![],'data':a186_0x442b('0xe')});}if(_0x37e91a[a186_0x442b('0xd')]&&_0x37e91a['user']['length']>0x0){}console[a186_0x442b('0x4c')](_0x37e91a[a186_0x442b('0xf')]);const _0x3ed756=_0x37e91a[a186_0x442b('0x36')][a186_0x442b('0x43')]&&_0x37e91a['body'][a186_0x442b('0x43')]!=''?_0x37e91a[a186_0x442b('0x36')][a186_0x442b('0x43')]:_0x37e91a[a186_0x442b('0xf')][a186_0x442b('0x43')];this['model']['findOne']({'where':{'uuid':_0x3ed756}})[a186_0x442b('0x11')](_0x59499c=>{if(_0x59499c==null)return _0x47dc9a[a186_0x442b('0x12')]({'success':!![],'data':_0x59499c});_0x59499c['update'](_0x37e91a[a186_0x442b('0x36')],{'language_id':_0x37e91a[a186_0x442b('0x2a')][a186_0x442b('0x23')]})[a186_0x442b('0x11')](function(_0x5034b7){const _0x2aa024=this['i18n']?sequelize_utils_1[a186_0x442b('0x21')]['toJSONLocalizedOnly'](_0x59499c,_0x37e91a[a186_0x442b('0x2a')][a186_0x442b('0x23')]):_0x59499c;this[a186_0x442b('0x3c')](_0x37e91a,_0x2aa024);return _0x47dc9a[a186_0x442b('0x12')]({'success':!![],'data':_0x2aa024});}[a186_0x442b('0x41')](this))['catch'](_0x552260=>{return _0x47dc9a[a186_0x442b('0x13')](0x1f4)[a186_0x442b('0x42')]({'success':![],'data':_0x552260[a186_0x442b('0x14')]});});})['catch'](_0x1943a5=>{return _0x47dc9a[a186_0x442b('0x13')](0x1f4)[a186_0x442b('0x42')]({'success':![],'data':_0x1943a5[a186_0x442b('0x14')]});});}}exports[a186_0x442b('0x21')]=CrudUtils;