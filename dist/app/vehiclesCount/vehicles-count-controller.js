var a85_0x5970=['vehicleController','report','bind','body','updateOrCreate','Plate','then','DateHour','save','json','default','__importDefault','__esModule','../../infrastructure/controller-utils','../../infrastructure/response-utils'];(function(_0x83958c,_0xc60544){var _0x45802b=function(_0x510b72){while(--_0x510b72){_0x83958c['push'](_0x83958c['shift']());}};_0x45802b(++_0xc60544);}(a85_0x5970,0x155));var a85_0x4ebe=function(_0x3590eb,_0x232e7b){_0x3590eb=_0x3590eb-0x0;var _0x1327f4=a85_0x5970[_0x3590eb];return _0x1327f4;};'use strict';var __importDefault=this&&this[a85_0x4ebe('0x0')]||function(_0x24aef5){return _0x24aef5&&_0x24aef5[a85_0x4ebe('0x1')]?_0x24aef5:{'default':_0x24aef5};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require(a85_0x4ebe('0x2')));const responseUtils=require(a85_0x4ebe('0x3'));class VehiclesCountController extends controller_utils_1['default']{constructor(_0x2fa771,_0x155b02){super(_0x2fa771,null);this[a85_0x4ebe('0x4')]=_0x155b02;this[a85_0x4ebe('0x5')]=this['report'][a85_0x4ebe('0x6')](this);}[a85_0x4ebe('0x5')](_0x18f649,_0x38a6d2,_0x40add6){const _0x5753db=_0x18f649[a85_0x4ebe('0x7')]['infoplate'];return this['vehicleController'][a85_0x4ebe('0x8')]({'params':{'plate':_0x5753db[a85_0x4ebe('0x9')]},'body':{'plate':_0x5753db['Plate']}},null,_0x40add6,!![])[a85_0x4ebe('0xa')](_0x242efe=>{_0x18f649['body']={'vehicle_id':_0x242efe['id'],'reported_at':_0x5753db[a85_0x4ebe('0xb')]};return this[a85_0x4ebe('0xc')](_0x18f649,_0x38a6d2,_0x40add6)['then'](_0x436b5c=>{if(_0x38a6d2){return _0x38a6d2[a85_0x4ebe('0xd')]({'success':!![],'data':_0x436b5c});}else{return _0x436b5c;}});});}}exports[a85_0x4ebe('0xe')]=VehiclesCountController;