var a130_0x1a6a=['json','__esModule','defineProperty','../../infrastructure/sequelize-utils','moment','fs-extra','base64-img','default','getByUser','bind','getByVehicle','decryptId','vehicle_id','params','start_date','end_date','gte','toDate','ASC','forEach','env','IMAGE_FILES_FOLDER','images/','models','name','user_id','.jpg','base64Sync','image_data'];(function(_0xfcd282,_0x59e7c5){var _0x669b24=function(_0x20f159){while(--_0x20f159){_0xfcd282['push'](_0xfcd282['shift']());}};_0x669b24(++_0x59e7c5);}(a130_0x1a6a,0x106));var a130_0x4372=function(_0x595bdf,_0x44026c){_0x595bdf=_0x595bdf-0x0;var _0x293d53=a130_0x1a6a[_0x595bdf];return _0x293d53;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x22dd14){return _0x22dd14&&_0x22dd14[a130_0x4372('0x0')]?_0x22dd14:{'default':_0x22dd14};};Object[a130_0x4372('0x1')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const sequelize_utils_1=__importDefault(require(a130_0x4372('0x2')));const moment=require(a130_0x4372('0x3'));const sequelize_1=require('sequelize');const fsExtra=require(a130_0x4372('0x4'));const base64Img=require(a130_0x4372('0x5'));class RouteSchedulesController extends controller_utils_1[a130_0x4372('0x6')]{constructor(_0x16caed){super(_0x16caed,null);this[a130_0x4372('0x7')]=this[a130_0x4372('0x7')][a130_0x4372('0x8')](this);this[a130_0x4372('0x9')]=this[a130_0x4372('0x9')][a130_0x4372('0x8')](this);}['getByVehicle'](_0x3e96ee,_0x19a7ab,_0x8fb8a3){_0x3e96ee['params']['vehicle_id']=sequelize_utils_1[a130_0x4372('0x6')][a130_0x4372('0xa')](_0x3e96ee['params'][a130_0x4372('0xb')]);_0x3e96ee[a130_0x4372('0xc')][a130_0x4372('0xd')]={[sequelize_1['Op']['lte']]:moment()['toDate']()};_0x3e96ee[a130_0x4372('0xc')][a130_0x4372('0xe')]={[sequelize_1['Op'][a130_0x4372('0xf')]]:moment()[a130_0x4372('0x10')]()};return this['find'](_0x3e96ee,null,_0x8fb8a3,![],null,[[a130_0x4372('0xd'),a130_0x4372('0x11')]],!![])['then'](_0x18601c=>{if(_0x18601c){_0x18601c[a130_0x4372('0x12')](_0x52caf2=>{const _0x37a1de=process[a130_0x4372('0x13')][a130_0x4372('0x14')]+a130_0x4372('0x15')+sequelize_utils_1[a130_0x4372('0x6')][a130_0x4372('0x16')]['usersModel'][a130_0x4372('0x17')]+'_'+_0x52caf2[a130_0x4372('0x18')]+a130_0x4372('0x19');let _0x46545d=null;if(fsExtra['existsSync'](_0x37a1de)){_0x46545d=base64Img[a130_0x4372('0x1a')](_0x37a1de);_0x52caf2[a130_0x4372('0x1b')]=_0x46545d;}});}return _0x19a7ab[a130_0x4372('0x1c')]({'success':!![],'data':_0x18601c});});}[a130_0x4372('0x7')](_0xa6e4b3,_0x2ede34,_0x241932){_0xa6e4b3[a130_0x4372('0xc')][a130_0x4372('0x18')]=sequelize_utils_1[a130_0x4372('0x6')][a130_0x4372('0xa')](_0xa6e4b3[a130_0x4372('0xc')][a130_0x4372('0x18')]);return this['find'](_0xa6e4b3,_0x2ede34,_0x241932,![],null,null,!![]);}}exports[a130_0x4372('0x6')]=RouteSchedulesController;