var a132_0x4b9a=['../../infrastructure/sequelize-utils','default','Router','get','/get_by_user/:user_id','getByUser','/get_by_vehicle/:vehicle_id','models','usersModel','first_name','vehiclesModel','plate','routesModel','name','__importDefault','__esModule','defineProperty','express'];(function(_0x1356a6,_0x477621){var _0x24f31f=function(_0x4c8e2e){while(--_0x4c8e2e){_0x1356a6['push'](_0x1356a6['shift']());}};_0x24f31f(++_0x477621);}(a132_0x4b9a,0xe6));var a132_0x5602=function(_0x5c1cee,_0x176400){_0x5c1cee=_0x5c1cee-0x0;var _0x25399a=a132_0x4b9a[_0x5c1cee];return _0x25399a;};'use strict';var __importDefault=this&&this[a132_0x5602('0x0')]||function(_0x3b6370){return _0x3b6370&&_0x3b6370[a132_0x5602('0x1')]?_0x3b6370:{'default':_0x3b6370};};Object[a132_0x5602('0x2')](exports,a132_0x5602('0x1'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a132_0x5602('0x3')));const sequelize_utils_1=__importDefault(require(a132_0x5602('0x4')));const router=express_1[a132_0x5602('0x5')][a132_0x5602('0x6')]();class RouteSchedulesRoute{constructor(_0x5ef85b){router[a132_0x5602('0x7')](a132_0x5602('0x8'),_0x5ef85b[a132_0x5602('0x9')]);router[a132_0x5602('0x7')](a132_0x5602('0xa'),_0x5ef85b['getByVehicle']);const _0x5f3055=new router_utils_1['default'](_0x5ef85b,router,null,[{'model':sequelize_utils_1[a132_0x5602('0x5')][a132_0x5602('0xb')][a132_0x5602('0xc')],'attributes':['id',a132_0x5602('0xd'),'last_name']},{'model':sequelize_utils_1[a132_0x5602('0x5')][a132_0x5602('0xb')][a132_0x5602('0xe')],'attributes':['id',a132_0x5602('0xf')]},{'model':sequelize_utils_1[a132_0x5602('0x5')][a132_0x5602('0xb')][a132_0x5602('0x10')],'attributes':['id',a132_0x5602('0x11')]}]);return router;}}exports[a132_0x5602('0x5')]=RouteSchedulesRoute;