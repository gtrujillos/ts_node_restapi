var a185_0x17fe=['catch','stack','__esModule','defineProperty','express','./crud-utils','./sequelize-utils','default','Router','include','orderBy','model','i18n','crudUtils','find','bind','findById','findByUuid','save','findOneAndUpdate','remove','count','featured','featuredLogged','featuredTotal','featuredLoggedTotal','shared','length','findUuidAndUpdate','update','findOrCreate','updateOrCreate','params','public','updated_at','DESC','details','includeAll','errorResponse','deleted_by_user_id','deleted_at','password','is_private','user','decryptId','created_by_user_id','successResponse','authentication\x20failed'];(function(_0x117aeb,_0x2c2a30){var _0x5853c3=function(_0xecb51b){while(--_0xecb51b){_0x117aeb['push'](_0x117aeb['shift']());}};_0x5853c3(++_0x2c2a30);}(a185_0x17fe,0x182));var a185_0x2a25=function(_0x4a0892,_0xbf9c73){_0x4a0892=_0x4a0892-0x0;var _0x1f8399=a185_0x17fe[_0x4a0892];return _0x1f8399;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x355e56){return _0x355e56&&_0x355e56[a185_0x2a25('0x0')]?_0x355e56:{'default':_0x355e56};};Object[a185_0x2a25('0x1')](exports,a185_0x2a25('0x0'),{'value':!![]});const express_1=__importDefault(require(a185_0x2a25('0x2')));const crud_utils_1=__importDefault(require(a185_0x2a25('0x3')));const crudOptions_1=__importDefault(require('../app/shared/models/crudOptions'));const sequelize_utils_1=__importDefault(require(a185_0x2a25('0x4')));const router=express_1[a185_0x2a25('0x5')][a185_0x2a25('0x6')]();const responseUtils=require('../infrastructure/response-utils');class BaseController{constructor(_0x2be2b7,_0x3755ca,_0x4c6c04=![]){this[a185_0x2a25('0x7')]=[];this[a185_0x2a25('0x8')]=[];this[a185_0x2a25('0x9')]=_0x2be2b7;this[a185_0x2a25('0xa')]=_0x3755ca;this[a185_0x2a25('0xb')]=new crud_utils_1[(a185_0x2a25('0x5'))](_0x2be2b7,_0x3755ca);this['shared']=_0x4c6c04;this[a185_0x2a25('0xc')]=this['find'][a185_0x2a25('0xd')](this);this[a185_0x2a25('0xe')]=this[a185_0x2a25('0xe')][a185_0x2a25('0xd')](this);this[a185_0x2a25('0xf')]=this[a185_0x2a25('0xf')][a185_0x2a25('0xd')](this);this['save']=this[a185_0x2a25('0x10')][a185_0x2a25('0xd')](this);this['findOneAndUpdate']=this[a185_0x2a25('0x11')][a185_0x2a25('0xd')](this);this['remove']=this[a185_0x2a25('0x12')][a185_0x2a25('0xd')](this);this[a185_0x2a25('0x13')]=this[a185_0x2a25('0x13')][a185_0x2a25('0xd')](this);this[a185_0x2a25('0x14')]=this[a185_0x2a25('0x14')][a185_0x2a25('0xd')](this);this[a185_0x2a25('0x15')]=this[a185_0x2a25('0x15')]['bind'](this);this['featuredTotal']=this[a185_0x2a25('0x16')][a185_0x2a25('0xd')](this);this[a185_0x2a25('0x17')]=this[a185_0x2a25('0x17')][a185_0x2a25('0xd')](this);this['details']=this['details']['bind'](this);}[a185_0x2a25('0x13')](_0x795abc,_0x1866db,_0x176b7f,_0x318db4=new crudOptions_1['default']()){if(_0x318db4){_0x318db4['shared']=_0x318db4['shared']||this[a185_0x2a25('0x18')];}return this[a185_0x2a25('0xb')][a185_0x2a25('0x13')](_0x795abc,_0x1866db,_0x176b7f,_0x318db4);}[a185_0x2a25('0xc')](_0x3864d0,_0x2e34cd,_0x3a8f04,_0x1079fc=new crudOptions_1[(a185_0x2a25('0x5'))]()){if(_0x1079fc){if(_0x1079fc[a185_0x2a25('0x7')]&&_0x1079fc[a185_0x2a25('0x7')][a185_0x2a25('0x19')]==0x0&&this[a185_0x2a25('0x7')][a185_0x2a25('0x19')]>0x0){_0x1079fc[a185_0x2a25('0x7')]=this['include'];}_0x1079fc[a185_0x2a25('0x8')]=_0x1079fc[a185_0x2a25('0x8')]!=null&&_0x1079fc['orderBy'][a185_0x2a25('0x19')]>0x0?_0x1079fc[a185_0x2a25('0x8')]:this['orderBy'];_0x1079fc['shared']=_0x1079fc[a185_0x2a25('0x18')]||this[a185_0x2a25('0x18')];}return this[a185_0x2a25('0xb')][a185_0x2a25('0xc')](_0x3864d0,_0x2e34cd,_0x3a8f04,_0x1079fc);}['findById'](_0x3c0cf4,_0x5948c9,_0x5dc57e){return this[a185_0x2a25('0xb')][a185_0x2a25('0xe')](_0x3c0cf4,_0x5948c9,_0x5dc57e);}[a185_0x2a25('0xf')](_0x385e5a,_0xcd4c1f,_0x2a3424){return this[a185_0x2a25('0xb')][a185_0x2a25('0xf')](_0x385e5a,_0xcd4c1f,_0x2a3424);}[a185_0x2a25('0x10')](_0x188514,_0x46b8aa,_0x388be4){return this[a185_0x2a25('0xb')]['save'](_0x188514,_0x46b8aa,_0x388be4);}[a185_0x2a25('0x11')](_0x52c87e,_0x553904,_0x3251b5){return this['crudUtils']['findOneAndUpdate'](_0x52c87e,_0x553904,_0x3251b5);}[a185_0x2a25('0x1a')](_0x37359c,_0x5b487d,_0x469d6){return this[a185_0x2a25('0xb')]['findUuidAndUpdate'](_0x37359c,_0x5b487d,_0x469d6);}[a185_0x2a25('0x1b')](_0x3cd5ad,_0x4fcd15,_0x3c0c63){return this[a185_0x2a25('0xb')][a185_0x2a25('0x11')](_0x3cd5ad,_0x4fcd15,_0x3c0c63);}['findOrCreate'](_0x253291,_0x6499ff,_0x5bcd6){return this[a185_0x2a25('0xb')][a185_0x2a25('0x1c')](_0x253291,_0x6499ff,_0x5bcd6);}[a185_0x2a25('0x1d')](_0x12c896,_0x42ac51,_0x1264bb,_0x4aa317=![],_0x36a839=![]){return this[a185_0x2a25('0xb')][a185_0x2a25('0x1d')](_0x12c896,_0x42ac51,_0x1264bb,_0x4aa317,_0x36a839);}[a185_0x2a25('0x12')](_0x5bb3ba,_0x20798e,_0x30676c){return this[a185_0x2a25('0xb')][a185_0x2a25('0x12')](_0x5bb3ba,_0x20798e,_0x30676c);}[a185_0x2a25('0x14')](_0x4a3ce1,_0x445538,_0x5be7eb){_0x4a3ce1[a185_0x2a25('0x1e')]={'is_private':![]};const _0x27a5b9=new crudOptions_1[(a185_0x2a25('0x5'))]();_0x27a5b9[a185_0x2a25('0x1f')]=!![];_0x27a5b9[a185_0x2a25('0x18')]=!![];_0x27a5b9[a185_0x2a25('0x8')]=[[a185_0x2a25('0x20'),a185_0x2a25('0x21')]];return this[a185_0x2a25('0xc')](_0x4a3ce1,_0x445538,_0x5be7eb,_0x27a5b9);}[a185_0x2a25('0x15')](_0x586bd0,_0x4f5a2c,_0x149c0c){const _0x515e52=new crudOptions_1[(a185_0x2a25('0x5'))]();_0x515e52[a185_0x2a25('0x8')]=[[a185_0x2a25('0x20'),'DESC']];return this[a185_0x2a25('0xc')](_0x586bd0,_0x4f5a2c,_0x149c0c,_0x515e52);}['featuredLoggedTotal'](_0x353a38,_0x4f7c5a,_0x56283f){const _0xa4bc06=new crudOptions_1[(a185_0x2a25('0x5'))]();return this[a185_0x2a25('0x13')](_0x353a38,_0x4f7c5a,_0x56283f,_0xa4bc06);}[a185_0x2a25('0x16')](_0x37ac9b,_0x25e511,_0x196958){_0x37ac9b[a185_0x2a25('0x1e')]={'is_private':![]};const _0x2b86f5=new crudOptions_1[(a185_0x2a25('0x5'))]();_0x2b86f5['public']=!![];_0x2b86f5['shared']=!![];return this[a185_0x2a25('0x13')](_0x37ac9b,_0x25e511,_0x196958,_0x2b86f5);}[a185_0x2a25('0x22')](_0x110199,_0x242682,_0x24d7f2){const _0x194afb=new crudOptions_1['default']();_0x194afb[a185_0x2a25('0x1f')]=!![];_0x194afb['shared']=!![];_0x194afb[a185_0x2a25('0x23')]=!![];this[a185_0x2a25('0xb')]['findById'](_0x110199,null,_0x24d7f2,_0x194afb)['then'](_0x14a2a5=>{if(_0x14a2a5==null){return responseUtils[a185_0x2a25('0x24')](_0x110199,_0x242682,'authentication\x20failed',0x191);}delete _0x14a2a5['updated_by_user_id'];delete _0x14a2a5[a185_0x2a25('0x25')];delete _0x14a2a5['created_at'];delete _0x14a2a5[a185_0x2a25('0x20')];delete _0x14a2a5[a185_0x2a25('0x26')];delete _0x14a2a5[a185_0x2a25('0x27')];if(_0x14a2a5[a185_0x2a25('0x28')]){if(_0x110199[a185_0x2a25('0x29')]){if(_0x110199[a185_0x2a25('0x29')]['id']==sequelize_utils_1[a185_0x2a25('0x5')][a185_0x2a25('0x2a')](_0x14a2a5['created_by_user_id'])){delete _0x14a2a5[a185_0x2a25('0x2b')];return responseUtils[a185_0x2a25('0x2c')](_0x110199,_0x242682,_0x14a2a5,0xc8);}else{return responseUtils[a185_0x2a25('0x24')](_0x110199,_0x242682,a185_0x2a25('0x2d'),0x191);}}else{return responseUtils[a185_0x2a25('0x24')](_0x110199,_0x242682,a185_0x2a25('0x2d'),0x191);}}else{delete _0x14a2a5[a185_0x2a25('0x2b')];return responseUtils[a185_0x2a25('0x2c')](_0x110199,_0x242682,_0x14a2a5,0xc8);}})[a185_0x2a25('0x2e')](_0x971867=>{return responseUtils['errorResponse'](_0x242682,_0x971867[a185_0x2a25('0x2f')],0x1f4);});}}exports[a185_0x2a25('0x5')]=BaseController;