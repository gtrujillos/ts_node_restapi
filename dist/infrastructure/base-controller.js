var a113_0x54d9=['model','i18n','crudUtils','shared','find','findById','bind','findByUuid','save','findOneAndUpdate','remove','count','featured','featuredLogged','featuredTotal','featuredLoggedTotal','details','length','include','findUuidAndUpdate','findOrCreate','updateOrCreate','params','public','includeAll','then','errorResponse','authentication\x20failed','updated_by_user_id','deleted_by_user_id','updated_at','deleted_at','user','created_by_user_id','successResponse','__esModule','defineProperty','express','./crud-utils','../app/shared/models/crudOptions','./sequelize-utils','default','../infrastructure/response-utils','orderBy'];(function(_0x576305,_0x174173){var _0x3774f5=function(_0x115f39){while(--_0x115f39){_0x576305['push'](_0x576305['shift']());}};_0x3774f5(++_0x174173);}(a113_0x54d9,0x157));var a113_0x4482=function(_0x340ea2,_0x2dcc8e){_0x340ea2=_0x340ea2-0x0;var _0x4b9967=a113_0x54d9[_0x340ea2];return _0x4b9967;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x24b97e){return _0x24b97e&&_0x24b97e[a113_0x4482('0x0')]?_0x24b97e:{'default':_0x24b97e};};Object[a113_0x4482('0x1')](exports,a113_0x4482('0x0'),{'value':!![]});const express_1=__importDefault(require(a113_0x4482('0x2')));const crud_utils_1=__importDefault(require(a113_0x4482('0x3')));const crudOptions_1=__importDefault(require(a113_0x4482('0x4')));const sequelize_utils_1=__importDefault(require(a113_0x4482('0x5')));const router=express_1[a113_0x4482('0x6')]['Router']();const responseUtils=require(a113_0x4482('0x7'));class BaseController{constructor(_0x35cbb0,_0x354b98,_0x33b926=![]){this['include']=[];this[a113_0x4482('0x8')]=[];this[a113_0x4482('0x9')]=_0x35cbb0;this[a113_0x4482('0xa')]=_0x354b98;this[a113_0x4482('0xb')]=new crud_utils_1['default'](_0x35cbb0,_0x354b98);this[a113_0x4482('0xc')]=_0x33b926;this[a113_0x4482('0xd')]=this[a113_0x4482('0xd')]['bind'](this);this[a113_0x4482('0xe')]=this[a113_0x4482('0xe')][a113_0x4482('0xf')](this);this['findByUuid']=this[a113_0x4482('0x10')]['bind'](this);this[a113_0x4482('0x11')]=this[a113_0x4482('0x11')][a113_0x4482('0xf')](this);this[a113_0x4482('0x12')]=this[a113_0x4482('0x12')][a113_0x4482('0xf')](this);this[a113_0x4482('0x13')]=this[a113_0x4482('0x13')]['bind'](this);this[a113_0x4482('0x14')]=this[a113_0x4482('0x14')][a113_0x4482('0xf')](this);this['featured']=this[a113_0x4482('0x15')]['bind'](this);this[a113_0x4482('0x16')]=this['featuredLogged']['bind'](this);this[a113_0x4482('0x17')]=this[a113_0x4482('0x17')][a113_0x4482('0xf')](this);this[a113_0x4482('0x18')]=this[a113_0x4482('0x18')][a113_0x4482('0xf')](this);this['details']=this[a113_0x4482('0x19')][a113_0x4482('0xf')](this);}[a113_0x4482('0x14')](_0x1d3c26,_0x26682a,_0x53126b,_0x12f3a2=new crudOptions_1['default']()){if(_0x12f3a2){_0x12f3a2[a113_0x4482('0xc')]=_0x12f3a2[a113_0x4482('0xc')]||this['shared'];}return this['crudUtils'][a113_0x4482('0x14')](_0x1d3c26,_0x26682a,_0x53126b,_0x12f3a2);}[a113_0x4482('0xd')](_0x531496,_0x15bfbe,_0x1bd1cc,_0x4e940e=new crudOptions_1[(a113_0x4482('0x6'))]()){if(_0x4e940e){if(_0x4e940e['include']&&_0x4e940e['include']['length']==0x0&&this['include'][a113_0x4482('0x1a')]>0x0){_0x4e940e[a113_0x4482('0x1b')]=this['include'];}_0x4e940e[a113_0x4482('0x8')]=_0x4e940e[a113_0x4482('0x8')]!=null&&_0x4e940e[a113_0x4482('0x8')][a113_0x4482('0x1a')]>0x0?_0x4e940e['orderBy']:this[a113_0x4482('0x8')];_0x4e940e['shared']=_0x4e940e['shared']||this[a113_0x4482('0xc')];}return this[a113_0x4482('0xb')][a113_0x4482('0xd')](_0x531496,_0x15bfbe,_0x1bd1cc,_0x4e940e);}[a113_0x4482('0xe')](_0x1dae6b,_0x19fb63,_0x32053a){return this['crudUtils'][a113_0x4482('0xe')](_0x1dae6b,_0x19fb63,_0x32053a);}['findByUuid'](_0x3ed0d3,_0x18a928,_0x29f6cf){return this[a113_0x4482('0xb')][a113_0x4482('0x10')](_0x3ed0d3,_0x18a928,_0x29f6cf);}[a113_0x4482('0x11')](_0x179a3e,_0x5ccdba,_0x2f85ef){return this['crudUtils'][a113_0x4482('0x11')](_0x179a3e,_0x5ccdba,_0x2f85ef);}[a113_0x4482('0x12')](_0x5525fd,_0x15f093,_0xc798e5){return this[a113_0x4482('0xb')][a113_0x4482('0x12')](_0x5525fd,_0x15f093,_0xc798e5);}[a113_0x4482('0x1c')](_0x1ae36a,_0xcd18e8,_0x407978){return this['crudUtils']['findUuidAndUpdate'](_0x1ae36a,_0xcd18e8,_0x407978);}['update'](_0x951d4c,_0x324fc0,_0xefbef0){return this[a113_0x4482('0xb')][a113_0x4482('0x12')](_0x951d4c,_0x324fc0,_0xefbef0);}[a113_0x4482('0x1d')](_0x3cd2c5,_0xdb3c77,_0x9bb2f1){return this[a113_0x4482('0xb')]['findOrCreate'](_0x3cd2c5,_0xdb3c77,_0x9bb2f1);}[a113_0x4482('0x1e')](_0x2681f7,_0x3082be,_0x4e2483,_0x11b2d4=![],_0x4433ac=![]){return this[a113_0x4482('0xb')]['updateOrCreate'](_0x2681f7,_0x3082be,_0x4e2483,_0x11b2d4,_0x4433ac);}['remove'](_0x4b0ce7,_0x2765e9,_0x3e1ec6){return this[a113_0x4482('0xb')][a113_0x4482('0x13')](_0x4b0ce7,_0x2765e9,_0x3e1ec6);}[a113_0x4482('0x15')](_0x436f3e,_0x4f3b96,_0x49f592){_0x436f3e[a113_0x4482('0x1f')]={'is_private':![]};const _0x2dc2fb=new crudOptions_1[(a113_0x4482('0x6'))]();_0x2dc2fb[a113_0x4482('0x20')]=!![];_0x2dc2fb[a113_0x4482('0xc')]=!![];return this[a113_0x4482('0xd')](_0x436f3e,_0x4f3b96,_0x49f592,_0x2dc2fb);}[a113_0x4482('0x16')](_0x452f6f,_0x35a90e,_0x170d77){const _0x188c2f=new crudOptions_1[(a113_0x4482('0x6'))]();return this[a113_0x4482('0xd')](_0x452f6f,_0x35a90e,_0x170d77,_0x188c2f);}['featuredLoggedTotal'](_0x306608,_0x37a69e,_0x3172dc){const _0x1622e0=new crudOptions_1[(a113_0x4482('0x6'))]();return this[a113_0x4482('0x14')](_0x306608,_0x37a69e,_0x3172dc,_0x1622e0);}['featuredTotal'](_0x3cecf7,_0x58d67f,_0x16aaeb){_0x3cecf7['params']={'is_private':![]};const _0x3b78e5=new crudOptions_1[(a113_0x4482('0x6'))]();_0x3b78e5['public']=!![];_0x3b78e5[a113_0x4482('0xc')]=!![];return this[a113_0x4482('0x14')](_0x3cecf7,_0x58d67f,_0x16aaeb,_0x3b78e5);}[a113_0x4482('0x19')](_0x1d3d7f,_0x59f869,_0x13f294){const _0x24891=new crudOptions_1[(a113_0x4482('0x6'))]();_0x24891[a113_0x4482('0x20')]=!![];_0x24891['shared']=!![];_0x24891[a113_0x4482('0x21')]=!![];this[a113_0x4482('0xb')]['findById'](_0x1d3d7f,null,_0x13f294,_0x24891)[a113_0x4482('0x22')](_0x5c479e=>{if(_0x5c479e==null){return responseUtils[a113_0x4482('0x23')](_0x1d3d7f,_0x59f869,a113_0x4482('0x24'),0x191);}delete _0x5c479e[a113_0x4482('0x25')];delete _0x5c479e[a113_0x4482('0x26')];delete _0x5c479e['created_at'];delete _0x5c479e[a113_0x4482('0x27')];delete _0x5c479e[a113_0x4482('0x28')];delete _0x5c479e['password'];if(_0x5c479e['is_private']){if(_0x1d3d7f[a113_0x4482('0x29')]){if(_0x1d3d7f['user']['id']==sequelize_utils_1[a113_0x4482('0x6')]['decryptId'](_0x5c479e['created_by_user_id'])){delete _0x5c479e['created_by_user_id'];return responseUtils['successResponse'](_0x1d3d7f,_0x59f869,_0x5c479e,0xc8);}else{return responseUtils['errorResponse'](_0x1d3d7f,_0x59f869,a113_0x4482('0x24'),0x191);}}else{return responseUtils[a113_0x4482('0x23')](_0x1d3d7f,_0x59f869,'authentication\x20failed',0x191);}}else{delete _0x5c479e[a113_0x4482('0x2a')];return responseUtils[a113_0x4482('0x2b')](_0x1d3d7f,_0x59f869,_0x5c479e,0xc8);}})['catch'](_0xdf1f6f=>{return responseUtils[a113_0x4482('0x23')](_0x59f869,_0xdf1f6f['stack'],0x1f4);});}}exports['default']=BaseController;