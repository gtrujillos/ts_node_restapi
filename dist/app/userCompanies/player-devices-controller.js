var a221_0x50b6=['player_id','playing_item','status','find','user_uuid','models','usersModel','log','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/response-utils','default','playersController','register','bind','reportStatus','getStatus','devicesController','updateOrCreate','device_uuid','network_info','body','firmware_info','then'];(function(_0x1d88d5,_0x54a3ff){var _0x5f2acc=function(_0x158147){while(--_0x158147){_0x1d88d5['push'](_0x1d88d5['shift']());}};_0x5f2acc(++_0x54a3ff);}(a221_0x50b6,0x15a));var a221_0x3001=function(_0x5ea4f5,_0x31e481){_0x5ea4f5=_0x5ea4f5-0x0;var _0xa07d51=a221_0x50b6[_0x5ea4f5];return _0xa07d51;};'use strict';var __importDefault=this&&this[a221_0x3001('0x0')]||function(_0x229865){return _0x229865&&_0x229865[a221_0x3001('0x1')]?_0x229865:{'default':_0x229865};};Object[a221_0x3001('0x2')](exports,a221_0x3001('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a221_0x3001('0x3')));const sequelize_utils_1=__importDefault(require('../../infrastructure/sequelize-utils'));const responseUtils=require(a221_0x3001('0x4'));class PlayerDevicesController extends controller_utils_1[a221_0x3001('0x5')]{constructor(_0x5b5783,_0x488bf8,_0x3792e7){super(_0x5b5783,null);this['devicesController']=_0x488bf8;this[a221_0x3001('0x6')]=_0x3792e7;this['register']=this[a221_0x3001('0x7')][a221_0x3001('0x8')](this);this[a221_0x3001('0x9')]=this[a221_0x3001('0x9')][a221_0x3001('0x8')](this);this[a221_0x3001('0xa')]=this['getStatus']['bind'](this);}[a221_0x3001('0x7')](_0x1fe3b7,_0x37aac5,_0x45d49d){return this[a221_0x3001('0xb')][a221_0x3001('0xc')]({'params':{'uuid':_0x1fe3b7['body'][a221_0x3001('0xd')]},'body':{'uuid':_0x1fe3b7['body'][a221_0x3001('0xd')],'network_info':_0x1fe3b7['body'][a221_0x3001('0xe')],'firmware_info':_0x1fe3b7[a221_0x3001('0xf')][a221_0x3001('0x10')]}},null,_0x45d49d,!![])[a221_0x3001('0x11')](_0x10a0da=>{return this[a221_0x3001('0xc')]({'params':{'device_id':_0x10a0da['id'],'player_id':_0x1fe3b7[a221_0x3001('0xf')][a221_0x3001('0x12')]},'body':{'device_id':_0x10a0da['id'],'player_id':_0x1fe3b7[a221_0x3001('0xf')][a221_0x3001('0x12')],'status':_0x1fe3b7[a221_0x3001('0xf')]['status'],'playlist':_0x1fe3b7[a221_0x3001('0xf')]['playlist'],'reported_at':new Date()}},null,_0x45d49d)['then'](_0x3bbf9f=>{delete _0x10a0da['id'];return _0x37aac5['json']({'success':!![],'data':_0x10a0da});});});}['reportStatus'](_0x1d8c2d,_0x75ab6a,_0x2a4308){return this[a221_0x3001('0xb')]['updateOrCreate']({'params':{'uuid':_0x1d8c2d[a221_0x3001('0xf')][a221_0x3001('0xd')]},'body':{'uuid':_0x1d8c2d[a221_0x3001('0xf')][a221_0x3001('0xd')]}},null,_0x2a4308,!![])[a221_0x3001('0x11')](_0x13bf42=>{return this[a221_0x3001('0xc')]({'params':{'device_id':_0x13bf42['id'],'player_id':_0x1d8c2d[a221_0x3001('0xf')]['player_id']},'body':{'device_id':_0x13bf42['id'],'player_id':_0x1d8c2d['body'][a221_0x3001('0x12')],'playing_item':_0x1d8c2d[a221_0x3001('0xf')][a221_0x3001('0x13')],'status':_0x1d8c2d[a221_0x3001('0xf')][a221_0x3001('0x14')],'reported_at':new Date()}},null,_0x2a4308)[a221_0x3001('0x11')](_0x395431=>{delete _0x13bf42['id'];return _0x75ab6a['json']({'success':!![],'data':_0x395431});});});}['getStatus'](_0x3054f0,_0x4d9128,_0xda0388){return this['playersController'][a221_0x3001('0x15')]({'params':{'$user.uuid$':_0x3054f0['params'][a221_0x3001('0x16')]}},null,_0xda0388,!![],[sequelize_utils_1[a221_0x3001('0x5')][a221_0x3001('0x17')][a221_0x3001('0x18')],sequelize_utils_1[a221_0x3001('0x5')][a221_0x3001('0x17')]['playerDevicesModel']])[a221_0x3001('0x11')](_0x4819f2=>{console[a221_0x3001('0x19')](_0x4819f2);return _0x4d9128['json']({'success':!![],'data':_0x4819f2});});}}exports[a221_0x3001('0x5')]=PlayerDevicesController;