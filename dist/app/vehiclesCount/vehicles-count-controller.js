var a91_0x69fa=['../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','../../infrastructure/response-utils','vehicleController','report','getList','bind','body','updateOrCreate','Plate','then','find','default','__importDefault','__esModule'];(function(_0x4ee672,_0x1db100){var _0x36969a=function(_0x3264c2){while(--_0x3264c2){_0x4ee672['push'](_0x4ee672['shift']());}};_0x36969a(++_0x1db100);}(a91_0x69fa,0xee));var a91_0x5bf4=function(_0x1de7c8,_0x3d059b){_0x1de7c8=_0x1de7c8-0x0;var _0x5b6b44=a91_0x69fa[_0x1de7c8];return _0x5b6b44;};'use strict';var __importDefault=this&&this[a91_0x5bf4('0x0')]||function(_0x261107){return _0x261107&&_0x261107['__esModule']?_0x261107:{'default':_0x261107};};Object['defineProperty'](exports,a91_0x5bf4('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a91_0x5bf4('0x2')));const sequelize_utils_1=__importDefault(require(a91_0x5bf4('0x3')));const responseUtils=require(a91_0x5bf4('0x4'));class VehiclesCountController extends controller_utils_1['default']{constructor(_0x5e3f1e,_0x34749d){super(_0x5e3f1e,null);this[a91_0x5bf4('0x5')]=_0x34749d;this['report']=this[a91_0x5bf4('0x6')]['bind'](this);this[a91_0x5bf4('0x7')]=this[a91_0x5bf4('0x7')][a91_0x5bf4('0x8')](this);}['report'](_0x54d164,_0x258ddd,_0x2f0420){const _0xefa26c=_0x54d164[a91_0x5bf4('0x9')]['infoplate'];return this[a91_0x5bf4('0x5')][a91_0x5bf4('0xa')]({'params':{'plate':_0xefa26c[a91_0x5bf4('0xb')]},'body':{'plate':_0xefa26c[a91_0x5bf4('0xb')]}},null,_0x2f0420,!![])[a91_0x5bf4('0xc')](_0x5e9945=>{_0x54d164['body']={'vehicle_id':_0x5e9945['id'],'reported_at':_0xefa26c['DateHour']};return this['save'](_0x54d164,_0x258ddd,_0x2f0420)[a91_0x5bf4('0xc')](_0x44db16=>{if(_0x258ddd){return _0x258ddd['json']({'success':!![],'data':_0x44db16});}else{return _0x44db16;}});});}['getList'](_0x29b3f5,_0x442623,_0x4909e0){return this[a91_0x5bf4('0xd')](_0x29b3f5,_0x442623,_0x4909e0,!![],[sequelize_utils_1[a91_0x5bf4('0xe')]['models']['vehiclesModel']],[['created_at','DESC']])[a91_0x5bf4('0xc')](_0x55cf4=>{});}}exports[a91_0x5bf4('0xe')]=VehiclesCountController;