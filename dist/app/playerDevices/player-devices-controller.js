var a43_0x1d90=['uuid','json','updateOrCreate','player_id','playing_item','playersController','find','params','user_uuid','__esModule','defineProperty','default','devicesController','register','bind','getStatus','body','device_uuid','network_info','firmware_info','then','status','playlist'];(function(_0x2237f1,_0xf9d64f){var _0x470c0b=function(_0xc7fe10){while(--_0xc7fe10){_0x2237f1['push'](_0x2237f1['shift']());}};_0x470c0b(++_0xf9d64f);}(a43_0x1d90,0x65));var a43_0x3e5d=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a43_0x1d90[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x6ea667){return _0x6ea667&&_0x6ea667[a43_0x3e5d('0x0')]?_0x6ea667:{'default':_0x6ea667};};Object[a43_0x3e5d('0x1')](exports,'__esModule',{'value':!![]});const base_controller_1=__importDefault(require('../../infrastructure/base-controller'));const responseUtils=require('../../infrastructure/response-utils');class PlayerDevicesController extends base_controller_1[a43_0x3e5d('0x2')]{constructor(_0x30914d,_0x5edca,_0x3872cf){super(_0x30914d,null);this[a43_0x3e5d('0x3')]=_0x5edca;this['playersController']=_0x3872cf;this['register']=this[a43_0x3e5d('0x4')][a43_0x3e5d('0x5')](this);this['reportStatus']=this['reportStatus'][a43_0x3e5d('0x5')](this);this[a43_0x3e5d('0x6')]=this[a43_0x3e5d('0x6')][a43_0x3e5d('0x5')](this);}[a43_0x3e5d('0x4')](_0x52632f,_0x491148,_0x1a7d6f){return this[a43_0x3e5d('0x3')]['updateOrCreate']({'params':{'uuid':_0x52632f['body']['device_uuid']},'body':{'uuid':_0x52632f[a43_0x3e5d('0x7')][a43_0x3e5d('0x8')],'network_info':_0x52632f[a43_0x3e5d('0x7')][a43_0x3e5d('0x9')],'firmware_info':_0x52632f['body'][a43_0x3e5d('0xa')]}},null,_0x1a7d6f,!![],!![])[a43_0x3e5d('0xb')](_0x4b8e6c=>{return this['updateOrCreate']({'params':{'device_id':_0x4b8e6c['id'],'player_id':_0x52632f['body']['player_id']},'body':{'device_id':_0x4b8e6c['id'],'player_id':_0x52632f[a43_0x3e5d('0x7')]['player_id'],'status':_0x52632f['body'][a43_0x3e5d('0xc')],'playlist':_0x52632f[a43_0x3e5d('0x7')][a43_0x3e5d('0xd')],'reported_at':new Date()}},null,_0x1a7d6f,![],!![])[a43_0x3e5d('0xb')](_0x46e2b4=>{const _0x475016={'uuid':_0x46e2b4[a43_0x3e5d('0xe')]};return _0x491148[a43_0x3e5d('0xf')]({'success':!![],'data':_0x475016});});});}['reportStatus'](_0x5aa6c4,_0x15d4d7,_0xa48e1c){return this[a43_0x3e5d('0x3')][a43_0x3e5d('0x10')]({'params':{'uuid':_0x5aa6c4[a43_0x3e5d('0x7')][a43_0x3e5d('0x8')]},'body':{'uuid':_0x5aa6c4['body'][a43_0x3e5d('0x8')]}},null,_0xa48e1c,!![],!![])[a43_0x3e5d('0xb')](_0xffa2bb=>{return this['updateOrCreate']({'params':{'device_id':_0xffa2bb['id'],'player_id':_0x5aa6c4[a43_0x3e5d('0x7')][a43_0x3e5d('0x11')]},'body':{'device_id':_0xffa2bb['id'],'player_id':_0x5aa6c4[a43_0x3e5d('0x7')][a43_0x3e5d('0x11')],'playing_item':_0x5aa6c4[a43_0x3e5d('0x7')][a43_0x3e5d('0x12')],'status':_0x5aa6c4[a43_0x3e5d('0x7')][a43_0x3e5d('0xc')],'reported_at':new Date()}},null,_0xa48e1c,![],!![])[a43_0x3e5d('0xb')](_0x1e5dc1=>{const _0x1714ec={'uuid':_0x1e5dc1[a43_0x3e5d('0xe')]};return _0x15d4d7['json']({'success':!![],'data':_0x1714ec});});});}[a43_0x3e5d('0x6')](_0x2f4951,_0x5438d2,_0x28d255){return this[a43_0x3e5d('0x13')][a43_0x3e5d('0x14')]({'params':{'$user.uuid$':_0x2f4951[a43_0x3e5d('0x15')][a43_0x3e5d('0x16')]}},null,_0x28d255)['then'](_0x15af9f=>{console['log'](_0x15af9f);return _0x5438d2[a43_0x3e5d('0xf')]({'success':!![],'data':_0x15af9f});});}}exports[a43_0x3e5d('0x2')]=PlayerDevicesController;