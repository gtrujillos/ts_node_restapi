var a273_0x13ca=['models','first_name','last_name','vehiclesModel','name','__esModule','defineProperty','../../infrastructure/router-utils','express','../../infrastructure/sequelize-utils','default','Router','get','/get_by_vehicle/:vehicle_id','getByVehicle'];(function(_0x2f9a1b,_0x5b4a3a){var _0x31b919=function(_0x345486){while(--_0x345486){_0x2f9a1b['push'](_0x2f9a1b['shift']());}};_0x31b919(++_0x5b4a3a);}(a273_0x13ca,0x7d));var a273_0x1020=function(_0x4f33f8,_0x296440){_0x4f33f8=_0x4f33f8-0x0;var _0x2166c3=a273_0x13ca[_0x4f33f8];return _0x2166c3;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a273_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a273_0x1020('0x1')](exports,'__esModule',{'value':!![]});const router_utils_1=__importDefault(require(a273_0x1020('0x2')));const express_1=__importDefault(require(a273_0x1020('0x3')));const sequelize_utils_1=__importDefault(require(a273_0x1020('0x4')));const router=express_1[a273_0x1020('0x5')][a273_0x1020('0x6')]();class UsersRelationshipsRoute{constructor(_0x1c61ef){router[a273_0x1020('0x7')]('/get_by_user/:user_id',_0x1c61ef['getByUser']);router[a273_0x1020('0x7')](a273_0x1020('0x8'),_0x1c61ef[a273_0x1020('0x9')]);const _0x22c4b8=new router_utils_1['default'](_0x1c61ef,router,null,[{'model':sequelize_utils_1[a273_0x1020('0x5')][a273_0x1020('0xa')]['usersModel'],'attributes':['id',a273_0x1020('0xb'),a273_0x1020('0xc')]},{'model':sequelize_utils_1['default'][a273_0x1020('0xa')][a273_0x1020('0xd')],'attributes':['id','plate']},{'model':sequelize_utils_1[a273_0x1020('0x5')][a273_0x1020('0xa')]['routesModel'],'attributes':['id',a273_0x1020('0xe')]}]);return router;}}exports['default']=UsersRelationshipsRoute;