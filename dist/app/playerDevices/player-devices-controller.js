var a118_0x556e=['status','then','playing_item','json','playersController','find','user_uuid','models','usersModel','playerDevicesModel','log','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','../../infrastructure/response-utils','default','register','bind','reportStatus','getStatus','devicesController','updateOrCreate','body','device_uuid','network_info','firmware_info','player_id'];(function(_0x45e6d1,_0xce11c9){var _0x357791=function(_0x59703f){while(--_0x59703f){_0x45e6d1['push'](_0x45e6d1['shift']());}};_0x357791(++_0xce11c9);}(a118_0x556e,0x12d));var a118_0x5698=function(_0x20e910,_0x1b9e51){_0x20e910=_0x20e910-0x0;var _0x267150=a118_0x556e[_0x20e910];return _0x267150;};'use strict';var __importDefault=this&&this[a118_0x5698('0x0')]||function(_0x547e32){return _0x547e32&&_0x547e32['__esModule']?_0x547e32:{'default':_0x547e32};};Object[a118_0x5698('0x1')](exports,a118_0x5698('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a118_0x5698('0x3')));const sequelize_utils_1=__importDefault(require(a118_0x5698('0x4')));const responseUtils=require(a118_0x5698('0x5'));class PlayerDevicesController extends controller_utils_1[a118_0x5698('0x6')]{constructor(_0x1e8780,_0x5d2ef7,_0x31f76d){super(_0x1e8780,null);this['devicesController']=_0x5d2ef7;this['playersController']=_0x31f76d;this['register']=this[a118_0x5698('0x7')][a118_0x5698('0x8')](this);this[a118_0x5698('0x9')]=this[a118_0x5698('0x9')][a118_0x5698('0x8')](this);this[a118_0x5698('0xa')]=this[a118_0x5698('0xa')]['bind'](this);}['register'](_0x5be9bb,_0x1bc4a8,_0x4533e0){return this[a118_0x5698('0xb')][a118_0x5698('0xc')]({'params':{'uuid':_0x5be9bb[a118_0x5698('0xd')][a118_0x5698('0xe')]},'body':{'uuid':_0x5be9bb[a118_0x5698('0xd')]['device_uuid'],'network_info':_0x5be9bb['body'][a118_0x5698('0xf')],'firmware_info':_0x5be9bb[a118_0x5698('0xd')][a118_0x5698('0x10')]}},null,_0x4533e0,!![])['then'](_0x16e4a2=>{return this[a118_0x5698('0xc')]({'params':{'device_id':_0x16e4a2['id'],'player_id':_0x5be9bb[a118_0x5698('0xd')][a118_0x5698('0x11')]},'body':{'device_id':_0x16e4a2['id'],'player_id':_0x5be9bb[a118_0x5698('0xd')][a118_0x5698('0x11')],'status':_0x5be9bb[a118_0x5698('0xd')][a118_0x5698('0x12')],'playlist':_0x5be9bb[a118_0x5698('0xd')]['playlist'],'reported_at':new Date()}},null,_0x4533e0)[a118_0x5698('0x13')](_0x93d18a=>{delete _0x16e4a2['id'];return _0x1bc4a8['json']({'success':!![],'data':_0x16e4a2});});});}[a118_0x5698('0x9')](_0x467ccd,_0x4c7795,_0x27d490){return this[a118_0x5698('0xb')][a118_0x5698('0xc')]({'params':{'uuid':_0x467ccd[a118_0x5698('0xd')][a118_0x5698('0xe')]},'body':{'uuid':_0x467ccd[a118_0x5698('0xd')][a118_0x5698('0xe')]}},null,_0x27d490,!![])[a118_0x5698('0x13')](_0x20e56c=>{return this[a118_0x5698('0xc')]({'params':{'device_id':_0x20e56c['id'],'player_id':_0x467ccd[a118_0x5698('0xd')][a118_0x5698('0x11')]},'body':{'device_id':_0x20e56c['id'],'player_id':_0x467ccd['body']['player_id'],'playing_item':_0x467ccd['body'][a118_0x5698('0x14')],'status':_0x467ccd[a118_0x5698('0xd')]['status'],'reported_at':new Date()}},null,_0x27d490)[a118_0x5698('0x13')](_0x43080a=>{delete _0x20e56c['id'];return _0x4c7795[a118_0x5698('0x15')]({'success':!![],'data':_0x43080a});});});}[a118_0x5698('0xa')](_0x359aa5,_0x30f8bd,_0x6f34ee){return this[a118_0x5698('0x16')][a118_0x5698('0x17')]({'params':{'$user.uuid$':_0x359aa5['params'][a118_0x5698('0x18')]}},null,_0x6f34ee,!![],[sequelize_utils_1[a118_0x5698('0x6')][a118_0x5698('0x19')][a118_0x5698('0x1a')],sequelize_utils_1[a118_0x5698('0x6')][a118_0x5698('0x19')][a118_0x5698('0x1b')]])['then'](_0x46e526=>{console[a118_0x5698('0x1c')](_0x46e526);return _0x30f8bd[a118_0x5698('0x15')]({'success':!![],'data':_0x46e526});});}}exports[a118_0x5698('0x6')]=PlayerDevicesController;