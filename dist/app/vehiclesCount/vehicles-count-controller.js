var a85_0x3b18=['../../infrastructure/response-utils','default','report','body','vehicleController','updateOrCreate','Plate','then','DateHour','json','__importDefault','defineProperty','__esModule','../../infrastructure/controller-utils'];(function(_0x5db386,_0x461f43){var _0x575792=function(_0x43dd6c){while(--_0x43dd6c){_0x5db386['push'](_0x5db386['shift']());}};_0x575792(++_0x461f43);}(a85_0x3b18,0xa4));var a85_0x267c=function(_0x191ee4,_0xeecde5){_0x191ee4=_0x191ee4-0x0;var _0x316cb3=a85_0x3b18[_0x191ee4];return _0x316cb3;};'use strict';var __importDefault=this&&this[a85_0x267c('0x0')]||function(_0x4387ef){return _0x4387ef&&_0x4387ef['__esModule']?_0x4387ef:{'default':_0x4387ef};};Object[a85_0x267c('0x1')](exports,a85_0x267c('0x2'),{'value':!![]});const controller_utils_1=__importDefault(require(a85_0x267c('0x3')));const responseUtils=require(a85_0x267c('0x4'));class VehiclesCountController extends controller_utils_1[a85_0x267c('0x5')]{constructor(_0x150ccf,_0x538aa6){super(_0x150ccf,null);this['vehicleController']=_0x538aa6;this['report']=this[a85_0x267c('0x6')]['bind'](this);}[a85_0x267c('0x6')](_0x14e7e1,_0x5920a6,_0x51ce15){const _0x4d0a39=_0x14e7e1[a85_0x267c('0x7')]['infoplate'];return this[a85_0x267c('0x8')][a85_0x267c('0x9')]({'params':{'plate':_0x4d0a39['Plate']},'body':{'plate':_0x4d0a39[a85_0x267c('0xa')]}},null,_0x51ce15,!![])[a85_0x267c('0xb')](_0x174e30=>{_0x14e7e1['body']={'vehicle_id':_0x174e30['id'],'reported_at':_0x4d0a39[a85_0x267c('0xc')]};return this['save'](_0x14e7e1,_0x5920a6,_0x51ce15)[a85_0x267c('0xb')](_0x1eee26=>{if(_0x5920a6){return _0x5920a6[a85_0x267c('0xd')]({'success':!![],'data':_0x1eee26});}else{return _0x1eee26;}});});}}exports[a85_0x267c('0x5')]=VehiclesCountController;