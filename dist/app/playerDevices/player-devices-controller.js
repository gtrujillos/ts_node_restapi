var a118_0x3fd8=['log','__importDefault','__esModule','defineProperty','../../infrastructure/sequelize-utils','devicesController','playersController','register','bind','reportStatus','getStatus','device_uuid','body','network_info','then','updateOrCreate','player_id','status','playlist','json','find','user_uuid','default','models','usersModel','playerDevicesModel'];(function(_0x29211a,_0x55d946){var _0x1b1147=function(_0x249b42){while(--_0x249b42){_0x29211a['push'](_0x29211a['shift']());}};_0x1b1147(++_0x55d946);}(a118_0x3fd8,0x139));var a118_0x41c2=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a118_0x3fd8[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a118_0x41c2('0x0')]||function(_0x452ea8){return _0x452ea8&&_0x452ea8[a118_0x41c2('0x1')]?_0x452ea8:{'default':_0x452ea8};};Object[a118_0x41c2('0x2')](exports,'__esModule',{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const sequelize_utils_1=__importDefault(require(a118_0x41c2('0x3')));const responseUtils=require('../../infrastructure/response-utils');class PlayerDevicesController extends controller_utils_1['default']{constructor(_0x535e96,_0x2663df,_0x41b649){super(_0x535e96,null);this[a118_0x41c2('0x4')]=_0x2663df;this[a118_0x41c2('0x5')]=_0x41b649;this[a118_0x41c2('0x6')]=this[a118_0x41c2('0x6')][a118_0x41c2('0x7')](this);this[a118_0x41c2('0x8')]=this[a118_0x41c2('0x8')][a118_0x41c2('0x7')](this);this['getStatus']=this[a118_0x41c2('0x9')][a118_0x41c2('0x7')](this);}[a118_0x41c2('0x6')](_0x349b6d,_0x5ca17d,_0x286111){return this[a118_0x41c2('0x4')]['updateOrCreate']({'params':{'uuid':_0x349b6d['body'][a118_0x41c2('0xa')]},'body':{'uuid':_0x349b6d[a118_0x41c2('0xb')][a118_0x41c2('0xa')],'network_info':_0x349b6d['body'][a118_0x41c2('0xc')],'firmware_info':_0x349b6d[a118_0x41c2('0xb')]['firmware_info']}},null,_0x286111,!![])[a118_0x41c2('0xd')](_0x686085=>{return this[a118_0x41c2('0xe')]({'params':{'device_id':_0x686085['id'],'player_id':_0x349b6d[a118_0x41c2('0xb')][a118_0x41c2('0xf')]},'body':{'device_id':_0x686085['id'],'player_id':_0x349b6d[a118_0x41c2('0xb')][a118_0x41c2('0xf')],'status':_0x349b6d[a118_0x41c2('0xb')][a118_0x41c2('0x10')],'playlist':_0x349b6d[a118_0x41c2('0xb')][a118_0x41c2('0x11')],'reported_at':new Date()}},null,_0x286111)[a118_0x41c2('0xd')](_0x2e0de7=>{delete _0x686085['id'];return _0x5ca17d[a118_0x41c2('0x12')]({'success':!![],'data':_0x686085});});});}[a118_0x41c2('0x8')](_0x25b680,_0x5099ac,_0x525a17){return this[a118_0x41c2('0x4')][a118_0x41c2('0xe')]({'params':{'uuid':_0x25b680[a118_0x41c2('0xb')][a118_0x41c2('0xa')]},'body':{'uuid':_0x25b680[a118_0x41c2('0xb')][a118_0x41c2('0xa')]}},null,_0x525a17,!![])[a118_0x41c2('0xd')](_0x3a998f=>{return this[a118_0x41c2('0xe')]({'params':{'device_id':_0x3a998f['id'],'player_id':_0x25b680[a118_0x41c2('0xb')]['player_id']},'body':{'device_id':_0x3a998f['id'],'player_id':_0x25b680[a118_0x41c2('0xb')][a118_0x41c2('0xf')],'playing_item':_0x25b680[a118_0x41c2('0xb')]['playing_item'],'status':_0x25b680[a118_0x41c2('0xb')][a118_0x41c2('0x10')],'reported_at':new Date()}},null,_0x525a17)[a118_0x41c2('0xd')](_0x152f91=>{delete _0x3a998f['id'];return _0x5099ac[a118_0x41c2('0x12')]({'success':!![],'data':_0x152f91});});});}[a118_0x41c2('0x9')](_0xc3e833,_0x119ebb,_0x2f824f){return this[a118_0x41c2('0x5')][a118_0x41c2('0x13')]({'params':{'$user.uuid$':_0xc3e833['params'][a118_0x41c2('0x14')]}},null,_0x2f824f,!![],[sequelize_utils_1[a118_0x41c2('0x15')][a118_0x41c2('0x16')][a118_0x41c2('0x17')],sequelize_utils_1[a118_0x41c2('0x15')]['models'][a118_0x41c2('0x18')]])[a118_0x41c2('0xd')](_0x152910=>{console[a118_0x41c2('0x19')](_0x152910);return _0x119ebb[a118_0x41c2('0x12')]({'success':!![],'data':_0x152910});});}}exports[a118_0x41c2('0x15')]=PlayerDevicesController;