var a191_0x4522=['DESC','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','default','vehicleController','report','bind','getList','body','infoplate','updateOrCreate','Plate','then','DateHour','json','models','created_at'];(function(_0x354409,_0x3c5a65){var _0x59f653=function(_0x2a0024){while(--_0x2a0024){_0x354409['push'](_0x354409['shift']());}};_0x59f653(++_0x3c5a65);}(a191_0x4522,0x73));var a191_0x42c8=function(_0x4ab86b,_0x308200){_0x4ab86b=_0x4ab86b-0x0;var _0x6e1232=a191_0x4522[_0x4ab86b];return _0x6e1232;};'use strict';var __importDefault=this&&this[a191_0x42c8('0x0')]||function(_0x506a3f){return _0x506a3f&&_0x506a3f[a191_0x42c8('0x1')]?_0x506a3f:{'default':_0x506a3f};};Object['defineProperty'](exports,a191_0x42c8('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a191_0x42c8('0x2')));const sequelize_utils_1=__importDefault(require(a191_0x42c8('0x3')));const responseUtils=require('../../infrastructure/response-utils');class VehiclesCountController extends controller_utils_1[a191_0x42c8('0x4')]{constructor(_0x3e73af,_0x517378){super(_0x3e73af,null);this[a191_0x42c8('0x5')]=_0x517378;this[a191_0x42c8('0x6')]=this[a191_0x42c8('0x6')][a191_0x42c8('0x7')](this);this[a191_0x42c8('0x8')]=this['getList'][a191_0x42c8('0x7')](this);}[a191_0x42c8('0x6')](_0xc77352,_0x69a0b3,_0x450f55){const _0x1fed0d=_0xc77352[a191_0x42c8('0x9')][a191_0x42c8('0xa')];return this[a191_0x42c8('0x5')][a191_0x42c8('0xb')]({'params':{'plate':_0x1fed0d['Plate']},'body':{'plate':_0x1fed0d[a191_0x42c8('0xc')]}},null,_0x450f55,!![])[a191_0x42c8('0xd')](_0x3f1f55=>{_0xc77352['body']={'vehicle_id':_0x3f1f55['id'],'reported_at':_0x1fed0d[a191_0x42c8('0xe')]};return this['save'](_0xc77352,_0x69a0b3,_0x450f55)['then'](_0x2efae0=>{if(_0x69a0b3){return _0x69a0b3[a191_0x42c8('0xf')]({'success':!![],'data':_0x2efae0});}else{return _0x2efae0;}});});}['getList'](_0x34c2cb,_0x3a70a9,_0x4ad760){return this['find'](_0x34c2cb,_0x3a70a9,_0x4ad760,!![],[sequelize_utils_1[a191_0x42c8('0x4')][a191_0x42c8('0x10')]['vehiclesModel']],[[a191_0x42c8('0x11'),a191_0x42c8('0x12')]])['then'](_0x4f64d0=>{});}}exports[a191_0x42c8('0x4')]=VehiclesCountController;