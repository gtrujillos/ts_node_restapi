var a85_0x25b3=['json','__esModule','defineProperty','../../infrastructure/controller-utils','default','vehicleController','report','bind','body','infoplate','updateOrCreate','Plate','DateHour','save','then'];(function(_0x1d8fbe,_0x589daa){var _0x34267c=function(_0x4d12f2){while(--_0x4d12f2){_0x1d8fbe['push'](_0x1d8fbe['shift']());}};_0x34267c(++_0x589daa);}(a85_0x25b3,0x178));var a85_0x50a1=function(_0x136313,_0xcb259a){_0x136313=_0x136313-0x0;var _0x24a920=a85_0x25b3[_0x136313];return _0x24a920;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5e5a70){return _0x5e5a70&&_0x5e5a70[a85_0x50a1('0x0')]?_0x5e5a70:{'default':_0x5e5a70};};Object[a85_0x50a1('0x1')](exports,a85_0x50a1('0x0'),{'value':!![]});const controller_utils_1=__importDefault(require(a85_0x50a1('0x2')));const responseUtils=require('../../infrastructure/response-utils');class VehiclesCountController extends controller_utils_1[a85_0x50a1('0x3')]{constructor(_0x5e2fc3,_0x33e4d2){super(_0x5e2fc3,null);this[a85_0x50a1('0x4')]=_0x33e4d2;this['report']=this[a85_0x50a1('0x5')][a85_0x50a1('0x6')](this);}[a85_0x50a1('0x5')](_0x2535b3,_0x191f4f,_0x511d44){const _0x569d60=_0x2535b3[a85_0x50a1('0x7')][a85_0x50a1('0x8')];return this[a85_0x50a1('0x4')][a85_0x50a1('0x9')]({'params':{'plate':_0x569d60[a85_0x50a1('0xa')]},'body':{'plate':_0x569d60[a85_0x50a1('0xa')]}},null,_0x511d44,!![])['then'](_0xdc9532=>{_0x2535b3['body']={'vehicle_id':_0xdc9532['id'],'reported_at':_0x569d60[a85_0x50a1('0xb')]};return this[a85_0x50a1('0xc')](_0x2535b3,_0x191f4f,_0x511d44)[a85_0x50a1('0xd')](_0x401a98=>{if(_0x191f4f){return _0x191f4f[a85_0x50a1('0xe')]({'success':!![],'data':_0x401a98});}else{return _0x401a98;}});});}}exports['default']=VehiclesCountController;