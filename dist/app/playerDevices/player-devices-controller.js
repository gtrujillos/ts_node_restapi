var a57_0x1a63=['device_uuid','network_info','firmware_info','player_id','status','json','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils','../../infrastructure/response-utils','default','playersController','register','bind','devicesController','updateOrCreate','body'];(function(_0x31bc1d,_0x5d9b43){var _0x2af69d=function(_0x4a72f0){while(--_0x4a72f0){_0x31bc1d['push'](_0x31bc1d['shift']());}};_0x2af69d(++_0x5d9b43);}(a57_0x1a63,0x102));var a57_0x53fd=function(_0x847029,_0x2cd59a){_0x847029=_0x847029-0x0;var _0x50af52=a57_0x1a63[_0x847029];return _0x50af52;};'use strict';var __importDefault=this&&this[a57_0x53fd('0x0')]||function(_0x501ca7){return _0x501ca7&&_0x501ca7['__esModule']?_0x501ca7:{'default':_0x501ca7};};Object[a57_0x53fd('0x1')](exports,a57_0x53fd('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a57_0x53fd('0x3')));const responseUtils=require(a57_0x53fd('0x4'));class PlayerDevicesController extends controller_utils_1[a57_0x53fd('0x5')]{constructor(_0x1aace9,_0x4a3af0,_0x1437e3){super(_0x1aace9,null);this['devicesController']=_0x4a3af0;this[a57_0x53fd('0x6')]=_0x1437e3;this[a57_0x53fd('0x7')]=this[a57_0x53fd('0x7')][a57_0x53fd('0x8')](this);}[a57_0x53fd('0x7')](_0x3fc252,_0x2faeec,_0x1185d9){return this[a57_0x53fd('0x9')][a57_0x53fd('0xa')]({'params':{'uuid':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0xc')]},'body':{'uuid':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0xc')],'network_info':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0xd')],'firmware_info':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0xe')]}},null,_0x1185d9,!![])['then'](_0x585bc5=>{return this['updateOrCreate']({'params':{'device_id':_0x585bc5['id'],'player_id':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0xf')]},'body':{'device_id':_0x585bc5['id'],'player_id':_0x3fc252[a57_0x53fd('0xb')]['player_id'],'status':_0x3fc252[a57_0x53fd('0xb')][a57_0x53fd('0x10')]}},null,_0x1185d9)['then'](_0x2b3e2c=>{delete _0x585bc5['id'];return _0x2faeec[a57_0x53fd('0x11')]({'success':!![],'data':_0x585bc5});});});}}exports['default']=PlayerDevicesController;