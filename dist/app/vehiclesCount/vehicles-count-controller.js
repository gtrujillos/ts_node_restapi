var a85_0x6f83=['vehicleController','report','bind','body','updateOrCreate','Plate','then','DateHour','save','__importDefault','__esModule','../../infrastructure/response-utils','default'];(function(_0x46a4e5,_0x177c72){var _0x3104ff=function(_0x1856ce){while(--_0x1856ce){_0x46a4e5['push'](_0x46a4e5['shift']());}};_0x3104ff(++_0x177c72);}(a85_0x6f83,0x134));var a85_0x5412=function(_0x223729,_0x2796cf){_0x223729=_0x223729-0x0;var _0x5cffeb=a85_0x6f83[_0x223729];return _0x5cffeb;};'use strict';var __importDefault=this&&this[a85_0x5412('0x0')]||function(_0xae108b){return _0xae108b&&_0xae108b[a85_0x5412('0x1')]?_0xae108b:{'default':_0xae108b};};Object['defineProperty'](exports,a85_0x5412('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const responseUtils=require(a85_0x5412('0x2'));class VehiclesCountController extends controller_utils_1[a85_0x5412('0x3')]{constructor(_0x53fd84,_0x51f78b){super(_0x53fd84,null);this[a85_0x5412('0x4')]=_0x51f78b;this['report']=this[a85_0x5412('0x5')][a85_0x5412('0x6')](this);}['report'](_0x3538ff,_0x343f7f,_0x1eb44d){const _0x2cdb15=_0x3538ff[a85_0x5412('0x7')]['infoplate'];return this['vehicleController'][a85_0x5412('0x8')]({'params':{'plate':_0x2cdb15[a85_0x5412('0x9')]},'body':{'plate':_0x2cdb15['Plate']}},null,_0x1eb44d,!![])[a85_0x5412('0xa')](_0x515bec=>{_0x3538ff[a85_0x5412('0x7')]={'vehicle_id':_0x515bec['id'],'reported_at':_0x2cdb15[a85_0x5412('0xb')]};return this[a85_0x5412('0xc')](_0x3538ff,_0x343f7f,_0x1eb44d)['then'](_0x51265e=>{if(_0x343f7f){return _0x343f7f['json']({'success':!![],'data':_0x51265e});}else{return _0x51265e;}});});}}exports[a85_0x5412('0x3')]=VehiclesCountController;