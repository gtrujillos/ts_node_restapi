var a132_0x2a07=['first_name','last_name','vehiclesModel','routesModel','name','defineProperty','__esModule','../../infrastructure/router-utils','express','../../infrastructure/sequelize-utils','default','Router','get','getByUser','models','usersModel'];(function(_0x54277f,_0x3c9df8){var _0x1f92f=function(_0x50e49f){while(--_0x50e49f){_0x54277f['push'](_0x54277f['shift']());}};_0x1f92f(++_0x3c9df8);}(a132_0x2a07,0x155));var a132_0x36cf=function(_0x51d1f9,_0x8fdf04){_0x51d1f9=_0x51d1f9-0x0;var _0x3fe008=a132_0x2a07[_0x51d1f9];return _0x3fe008;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3dec39){return _0x3dec39&&_0x3dec39['__esModule']?_0x3dec39:{'default':_0x3dec39};};Object[a132_0x36cf('0x0')](exports,a132_0x36cf('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a132_0x36cf('0x2')));const express_1=__importDefault(require(a132_0x36cf('0x3')));const sequelize_utils_1=__importDefault(require(a132_0x36cf('0x4')));const router=express_1[a132_0x36cf('0x5')][a132_0x36cf('0x6')]();class RouteSchedulesRoute{constructor(_0x1cf2a4){router[a132_0x36cf('0x7')]('/get_by_user/:user_id',_0x1cf2a4[a132_0x36cf('0x8')]);router[a132_0x36cf('0x7')]('/get_by_vehicle/:vehicle_id',_0x1cf2a4['getByVehicle']);const _0x561bce=new router_utils_1[(a132_0x36cf('0x5'))](_0x1cf2a4,router,null,[{'model':sequelize_utils_1[a132_0x36cf('0x5')][a132_0x36cf('0x9')][a132_0x36cf('0xa')],'attributes':['id',a132_0x36cf('0xb'),a132_0x36cf('0xc')]},{'model':sequelize_utils_1[a132_0x36cf('0x5')]['models'][a132_0x36cf('0xd')],'attributes':['id','plate']},{'model':sequelize_utils_1['default'][a132_0x36cf('0x9')][a132_0x36cf('0xe')],'attributes':['id',a132_0x36cf('0xf')]}]);return router;}}exports[a132_0x36cf('0x5')]=RouteSchedulesRoute;