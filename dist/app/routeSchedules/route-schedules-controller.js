var a127_0x58ce=['params','vehicle_id','decryptId','start_date','lte','toDate','end_date','gte','find','forEach','env','FILES_FOLDER','images/','usersModel','user_id','base64Sync','image_data','json','__importDefault','__esModule','../../infrastructure/base-controller','moment','sequelize','fs-extra','base64-img','default','getByUser','bind','getByVehicle'];(function(_0x559266,_0x4ae352){var _0x1043a9=function(_0x364770){while(--_0x364770){_0x559266['push'](_0x559266['shift']());}};_0x1043a9(++_0x4ae352);}(a127_0x58ce,0x1e2));var a127_0x2266=function(_0x5ae23b,_0x47eefb){_0x5ae23b=_0x5ae23b-0x0;var _0x3d59eb=a127_0x58ce[_0x5ae23b];return _0x3d59eb;};'use strict';var __importDefault=this&&this[a127_0x2266('0x0')]||function(_0x473c78){return _0x473c78&&_0x473c78[a127_0x2266('0x1')]?_0x473c78:{'default':_0x473c78};};Object['defineProperty'](exports,a127_0x2266('0x1'),{'value':!![]});const base_controller_1=__importDefault(require(a127_0x2266('0x2')));const sequelize_utils_1=__importDefault(require('../../infrastructure/sequelize-utils'));const moment=require(a127_0x2266('0x3'));const sequelize_1=require(a127_0x2266('0x4'));const fsExtra=require(a127_0x2266('0x5'));const base64Img=require(a127_0x2266('0x6'));class RouteSchedulesController extends base_controller_1[a127_0x2266('0x7')]{constructor(_0x51c8f5){super(_0x51c8f5,null);this[a127_0x2266('0x8')]=this[a127_0x2266('0x8')][a127_0x2266('0x9')](this);this[a127_0x2266('0xa')]=this[a127_0x2266('0xa')][a127_0x2266('0x9')](this);}[a127_0x2266('0xa')](_0x4373d5,_0x43881c,_0x18d990){_0x4373d5[a127_0x2266('0xb')][a127_0x2266('0xc')]=sequelize_utils_1[a127_0x2266('0x7')][a127_0x2266('0xd')](_0x4373d5['params'][a127_0x2266('0xc')]);_0x4373d5[a127_0x2266('0xb')][a127_0x2266('0xe')]={[sequelize_1['Op'][a127_0x2266('0xf')]]:moment()[a127_0x2266('0x10')]()};_0x4373d5['params'][a127_0x2266('0x11')]={[sequelize_1['Op'][a127_0x2266('0x12')]]:moment()[a127_0x2266('0x10')]()};return this[a127_0x2266('0x13')](_0x4373d5,null,_0x18d990)['then'](_0xa4633d=>{if(_0xa4633d){_0xa4633d[a127_0x2266('0x14')](_0x4c22e9=>{const _0x1f57e9=process[a127_0x2266('0x15')][a127_0x2266('0x16')]+a127_0x2266('0x17')+sequelize_utils_1[a127_0x2266('0x7')]['models'][a127_0x2266('0x18')]['name']+'_'+_0x4c22e9[a127_0x2266('0x19')]+'.jpg';let _0x17950d=null;if(fsExtra['existsSync'](_0x1f57e9)){_0x17950d=base64Img[a127_0x2266('0x1a')](_0x1f57e9);_0x4c22e9[a127_0x2266('0x1b')]=_0x17950d;}});}return _0x43881c[a127_0x2266('0x1c')]({'success':!![],'data':_0xa4633d});});}['getByUser'](_0x23c9f2,_0x5da5fa,_0x18fb31){_0x23c9f2['params'][a127_0x2266('0x19')]=sequelize_utils_1[a127_0x2266('0x7')][a127_0x2266('0xd')](_0x23c9f2[a127_0x2266('0xb')][a127_0x2266('0x19')]);return this[a127_0x2266('0x13')](_0x23c9f2,_0x5da5fa,_0x18fb31);}}exports[a127_0x2266('0x7')]=RouteSchedulesController;