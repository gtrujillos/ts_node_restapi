var a88_0x1646=['bind','import','__esModule','defineProperty','../../infrastructure/model-base','default','INTEGER','eventTypesModel','usersModel','vehiclesModel','devicesModel','DOUBLE','DATE','getEntity'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a88_0x1646,0xaa));var a88_0x34b8=function(_0x48b958,_0x184099){_0x48b958=_0x48b958-0x0;var _0x562a26=a88_0x1646[_0x48b958];return _0x562a26;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x48781b){return _0x48781b&&_0x48781b[a88_0x34b8('0x0')]?_0x48781b:{'default':_0x48781b};};Object[a88_0x34b8('0x1')](exports,a88_0x34b8('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a88_0x34b8('0x2')));class EventsModel extends model_base_1['default']{constructor(_0x59333c,_0x4db192,_0x358a22){super(_0x358a22);const _0x30165a=function(_0x59333c){const _0x3c80f0={'company_id':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x4')],'references':{'model':_0x358a22['companiesModel'],'key':'id'}},'event_type_id':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x4')],'references':{'model':_0x358a22[a88_0x34b8('0x5')],'key':'id'}},'user_id':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x4')],'references':{'model':_0x358a22[a88_0x34b8('0x6')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x4')],'references':{'model':_0x358a22[a88_0x34b8('0x7')],'key':'id'}},'device_id':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x4')],'references':{'model':_0x358a22[a88_0x34b8('0x8')],'key':'id'}},'event_status_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x358a22[a88_0x34b8('0x5')],'key':'id'},'defaultValue':0x1},'latitude':{'type':sequelize_1[a88_0x34b8('0x3')]['DOUBLE']},'longitude':{'type':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0x9')]},'description':{'type':sequelize_1[a88_0x34b8('0x3')]['TEXT']},'reported_at':sequelize_1[a88_0x34b8('0x3')][a88_0x34b8('0xa')]};const _0x30165a=this[a88_0x34b8('0xb')](_0x59333c,_0x4db192,_0x3c80f0);return _0x30165a;}[a88_0x34b8('0xc')](this);const _0x490a27=_0x59333c[a88_0x34b8('0xd')](_0x4db192,_0x30165a);return _0x490a27;}}exports[a88_0x34b8('0x3')]=EventsModel;