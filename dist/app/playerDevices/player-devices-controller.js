var a63_0x7466=['player_id','status','playing_item','json','find','user_uuid','models','usersModel','playerDevicesModel','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','../../infrastructure/response-utils','default','devicesController','register','bind','getStatus','updateOrCreate','body','device_uuid','network_info','firmware_info','then'];(function(_0x2d3681,_0x3d44c2){var _0x311c73=function(_0x48f287){while(--_0x48f287){_0x2d3681['push'](_0x2d3681['shift']());}};_0x311c73(++_0x3d44c2);}(a63_0x7466,0xea));var a63_0x28b1=function(_0x17995b,_0x3d77c4){_0x17995b=_0x17995b-0x0;var _0x1e5803=a63_0x7466[_0x17995b];return _0x1e5803;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x61da31){return _0x61da31&&_0x61da31[a63_0x28b1('0x0')]?_0x61da31:{'default':_0x61da31};};Object[a63_0x28b1('0x1')](exports,a63_0x28b1('0x0'),{'value':!![]});const controller_utils_1=__importDefault(require(a63_0x28b1('0x2')));const sequelize_utils_1=__importDefault(require(a63_0x28b1('0x3')));const responseUtils=require(a63_0x28b1('0x4'));class PlayerDevicesController extends controller_utils_1[a63_0x28b1('0x5')]{constructor(_0x4c7a99,_0x1a0366,_0x1a1ec3){super(_0x4c7a99,null);this[a63_0x28b1('0x6')]=_0x1a0366;this['playersController']=_0x1a1ec3;this[a63_0x28b1('0x7')]=this[a63_0x28b1('0x7')]['bind'](this);this['reportStatus']=this['reportStatus'][a63_0x28b1('0x8')](this);this['getStatus']=this[a63_0x28b1('0x9')]['bind'](this);}[a63_0x28b1('0x7')](_0x36e023,_0x51c29f,_0x1daaca){return this[a63_0x28b1('0x6')][a63_0x28b1('0xa')]({'params':{'uuid':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0xc')]},'body':{'uuid':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0xc')],'network_info':_0x36e023['body'][a63_0x28b1('0xd')],'firmware_info':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0xe')]}},null,_0x1daaca,!![])[a63_0x28b1('0xf')](_0xa81af5=>{return this[a63_0x28b1('0xa')]({'params':{'device_id':_0xa81af5['id'],'player_id':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0x10')]},'body':{'device_id':_0xa81af5['id'],'player_id':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0x10')],'status':_0x36e023[a63_0x28b1('0xb')][a63_0x28b1('0x11')],'playlist':_0x36e023['body']['playlist'],'reported_at':new Date()}},null,_0x1daaca)['then'](_0x266d14=>{delete _0xa81af5['id'];return _0x51c29f['json']({'success':!![],'data':_0xa81af5});});});}['reportStatus'](_0x4ee6d3,_0x407570,_0x1f24a6){return this[a63_0x28b1('0x6')][a63_0x28b1('0xa')]({'params':{'uuid':_0x4ee6d3[a63_0x28b1('0xb')][a63_0x28b1('0xc')]},'body':{'uuid':_0x4ee6d3['body'][a63_0x28b1('0xc')]}},null,_0x1f24a6,!![])[a63_0x28b1('0xf')](_0x331121=>{return this[a63_0x28b1('0xa')]({'params':{'device_id':_0x331121['id'],'player_id':_0x4ee6d3[a63_0x28b1('0xb')][a63_0x28b1('0x10')]},'body':{'device_id':_0x331121['id'],'player_id':_0x4ee6d3[a63_0x28b1('0xb')][a63_0x28b1('0x10')],'playing_item':_0x4ee6d3[a63_0x28b1('0xb')][a63_0x28b1('0x12')],'status':_0x4ee6d3[a63_0x28b1('0xb')][a63_0x28b1('0x11')],'reported_at':new Date()}},null,_0x1f24a6)['then'](_0x45e34a=>{delete _0x331121['id'];return _0x407570[a63_0x28b1('0x13')]({'success':!![],'data':_0x45e34a});});});}[a63_0x28b1('0x9')](_0x4327bb,_0x5bf162,_0x87c3b5){return this['playersController'][a63_0x28b1('0x14')]({'params':{'$user.uuid$':_0x4327bb['params'][a63_0x28b1('0x15')]}},null,_0x87c3b5,!![],[sequelize_utils_1[a63_0x28b1('0x5')][a63_0x28b1('0x16')][a63_0x28b1('0x17')],sequelize_utils_1[a63_0x28b1('0x5')][a63_0x28b1('0x16')][a63_0x28b1('0x18')]])[a63_0x28b1('0xf')](_0x10f84c=>{console['log'](_0x10f84c);return _0x5bf162[a63_0x28b1('0x13')]({'success':!![],'data':_0x10f84c});});}}exports[a63_0x28b1('0x5')]=PlayerDevicesController;