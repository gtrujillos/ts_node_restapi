var a88_0x6d14=['__esModule','defineProperty','../../infrastructure/model-base','default','INTEGER','companiesModel','eventTypesModel','vehiclesModel','devicesModel','DOUBLE','DATE','getEntity','bind','import','__importDefault'];(function(_0x3fe3b1,_0x1aa375){var _0x1130c6=function(_0x46c063){while(--_0x46c063){_0x3fe3b1['push'](_0x3fe3b1['shift']());}};_0x1130c6(++_0x1aa375);}(a88_0x6d14,0x158));var a88_0x512c=function(_0x6f660f,_0x56bf0f){_0x6f660f=_0x6f660f-0x0;var _0x32ecc6=a88_0x6d14[_0x6f660f];return _0x32ecc6;};'use strict';var __importDefault=this&&this[a88_0x512c('0x0')]||function(_0x99118f){return _0x99118f&&_0x99118f[a88_0x512c('0x1')]?_0x99118f:{'default':_0x99118f};};Object[a88_0x512c('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a88_0x512c('0x3')));class EventsModel extends model_base_1[a88_0x512c('0x4')]{constructor(_0x370fdf,_0x3de088,_0x20408c){super(_0x20408c);const _0x35cddd=function(_0x370fdf){const _0x196409={'company_id':{'type':sequelize_1['default'][a88_0x512c('0x5')],'references':{'model':_0x20408c[a88_0x512c('0x6')],'key':'id'}},'event_type_id':{'type':sequelize_1[a88_0x512c('0x4')][a88_0x512c('0x5')],'references':{'model':_0x20408c[a88_0x512c('0x7')],'key':'id'}},'user_id':{'type':sequelize_1[a88_0x512c('0x4')][a88_0x512c('0x5')],'references':{'model':_0x20408c['usersModel'],'key':'id'}},'vehicle_id':{'type':sequelize_1[a88_0x512c('0x4')]['INTEGER'],'references':{'model':_0x20408c[a88_0x512c('0x8')],'key':'id'}},'device_id':{'type':sequelize_1['default'][a88_0x512c('0x5')],'references':{'model':_0x20408c[a88_0x512c('0x9')],'key':'id'}},'event_status_id':{'type':sequelize_1[a88_0x512c('0x4')][a88_0x512c('0x5')],'references':{'model':_0x20408c[a88_0x512c('0x7')],'key':'id'},'defaultValue':0x1},'latitude':{'type':sequelize_1[a88_0x512c('0x4')][a88_0x512c('0xa')]},'longitude':{'type':sequelize_1['default']['DOUBLE']},'description':{'type':sequelize_1[a88_0x512c('0x4')]['TEXT']},'reported_at':sequelize_1[a88_0x512c('0x4')][a88_0x512c('0xb')]};const _0x35cddd=this[a88_0x512c('0xc')](_0x370fdf,_0x3de088,_0x196409);return _0x35cddd;}[a88_0x512c('0xd')](this);const _0x2efc0f=_0x370fdf[a88_0x512c('0xe')](_0x3de088,_0x35cddd);return _0x2efc0f;}}exports[a88_0x512c('0x4')]=EventsModel;