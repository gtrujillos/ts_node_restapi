var a241_0x21ac=['models','usersModel','first_name','last_name','vehiclesModel','name','__esModule','defineProperty','../../infrastructure/router-utils','express','../../infrastructure/sequelize-utils','default','get','/get_by_user/:user_id'];(function(_0x85a212,_0x226c53){var _0x42fc1f=function(_0x14b3b9){while(--_0x14b3b9){_0x85a212['push'](_0x85a212['shift']());}};_0x42fc1f(++_0x226c53);}(a241_0x21ac,0x164));var a241_0x22cf=function(_0x351f22,_0x7dd46a){_0x351f22=_0x351f22-0x0;var _0x43ee44=a241_0x21ac[_0x351f22];return _0x43ee44;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x33646a){return _0x33646a&&_0x33646a[a241_0x22cf('0x0')]?_0x33646a:{'default':_0x33646a};};Object[a241_0x22cf('0x1')](exports,a241_0x22cf('0x0'),{'value':!![]});const router_utils_1=__importDefault(require(a241_0x22cf('0x2')));const express_1=__importDefault(require(a241_0x22cf('0x3')));const sequelize_utils_1=__importDefault(require(a241_0x22cf('0x4')));const router=express_1[a241_0x22cf('0x5')]['Router']();class UsersRelationshipsRoute{constructor(_0x2dcb63){router[a241_0x22cf('0x6')](a241_0x22cf('0x7'),_0x2dcb63['getByUser']);router['get']('/get_by_vehicle/:vehicle_id',_0x2dcb63['getByVehicle']);const _0xbbbf01=new router_utils_1['default'](_0x2dcb63,router,null,[{'model':sequelize_utils_1['default'][a241_0x22cf('0x8')][a241_0x22cf('0x9')],'attributes':['id',a241_0x22cf('0xa'),a241_0x22cf('0xb')]},{'model':sequelize_utils_1[a241_0x22cf('0x5')][a241_0x22cf('0x8')][a241_0x22cf('0xc')],'attributes':['id','plate']},{'model':sequelize_utils_1[a241_0x22cf('0x5')]['models']['routesModel'],'attributes':['id',a241_0x22cf('0xd')]}]);return router;}}exports[a241_0x22cf('0x5')]=UsersRelationshipsRoute;