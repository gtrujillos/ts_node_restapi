var a191_0x1ea3=['__esModule','../../infrastructure/controller-utils','default','vehicleController','report','updateOrCreate','Plate','then','body','DateHour','json','getList','models','vehiclesModel','created_at','__importDefault'];(function(_0x24f431,_0xa19180){var _0x291775=function(_0x33fd12){while(--_0x33fd12){_0x24f431['push'](_0x24f431['shift']());}};_0x291775(++_0xa19180);}(a191_0x1ea3,0x7f));var a191_0x5954=function(_0x584749,_0x125eb5){_0x584749=_0x584749-0x0;var _0x1fb443=a191_0x1ea3[_0x584749];return _0x1fb443;};'use strict';var __importDefault=this&&this[a191_0x5954('0x0')]||function(_0x542f8a){return _0x542f8a&&_0x542f8a['__esModule']?_0x542f8a:{'default':_0x542f8a};};Object['defineProperty'](exports,a191_0x5954('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a191_0x5954('0x2')));const sequelize_utils_1=__importDefault(require('../../infrastructure/sequelize-utils'));const responseUtils=require('../../infrastructure/response-utils');class VehiclesCountController extends controller_utils_1[a191_0x5954('0x3')]{constructor(_0x584ba9,_0x1f7ce8){super(_0x584ba9,null);this[a191_0x5954('0x4')]=_0x1f7ce8;this[a191_0x5954('0x5')]=this[a191_0x5954('0x5')]['bind'](this);this['getList']=this['getList']['bind'](this);}[a191_0x5954('0x5')](_0x5e8543,_0x58d8a8,_0x1e32a1){const _0x1757c8=_0x5e8543['body']['infoplate'];return this['vehicleController'][a191_0x5954('0x6')]({'params':{'plate':_0x1757c8['Plate']},'body':{'plate':_0x1757c8[a191_0x5954('0x7')]}},null,_0x1e32a1,!![])[a191_0x5954('0x8')](_0x508dff=>{_0x5e8543[a191_0x5954('0x9')]={'vehicle_id':_0x508dff['id'],'reported_at':_0x1757c8[a191_0x5954('0xa')]};return this['save'](_0x5e8543,_0x58d8a8,_0x1e32a1)[a191_0x5954('0x8')](_0x1bd238=>{if(_0x58d8a8){return _0x58d8a8[a191_0x5954('0xb')]({'success':!![],'data':_0x1bd238});}else{return _0x1bd238;}});});}[a191_0x5954('0xc')](_0xdbc119,_0x4089c6,_0x181426){return this['find'](_0xdbc119,_0x4089c6,_0x181426,!![],[sequelize_utils_1[a191_0x5954('0x3')][a191_0x5954('0xd')][a191_0x5954('0xe')]],[[a191_0x5954('0xf'),'DESC']])[a191_0x5954('0x8')](_0xcb8096=>{});}}exports['default']=VehiclesCountController;