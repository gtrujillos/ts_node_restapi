var a88_0x82e9=['usersModel','vehiclesModel','devicesModel','DOUBLE','TEXT','DATE','import','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','INTEGER','companiesModel','eventTypesModel'];(function(_0x1a2628,_0x528615){var _0x4025a2=function(_0x2a0bf2){while(--_0x2a0bf2){_0x1a2628['push'](_0x1a2628['shift']());}};_0x4025a2(++_0x528615);}(a88_0x82e9,0x7f));var a88_0x5536=function(_0x22210f,_0x12ab8c){_0x22210f=_0x22210f-0x0;var _0x25e319=a88_0x82e9[_0x22210f];return _0x25e319;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1dc7ec){return _0x1dc7ec&&_0x1dc7ec[a88_0x5536('0x0')]?_0x1dc7ec:{'default':_0x1dc7ec};};Object[a88_0x5536('0x1')](exports,a88_0x5536('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a88_0x5536('0x2')));const model_base_1=__importDefault(require(a88_0x5536('0x3')));class EventsModel extends model_base_1[a88_0x5536('0x4')]{constructor(_0x46364a,_0x39fabc,_0x5f55f7){super(_0x5f55f7);const _0x42a239=function(_0x46364a){const _0x203635={'company_id':{'type':sequelize_1['default'][a88_0x5536('0x5')],'references':{'model':_0x5f55f7[a88_0x5536('0x6')],'key':'id'}},'event_type_id':{'type':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0x5')],'references':{'model':_0x5f55f7[a88_0x5536('0x7')],'key':'id'}},'user_id':{'type':sequelize_1[a88_0x5536('0x4')]['INTEGER'],'references':{'model':_0x5f55f7[a88_0x5536('0x8')],'key':'id'}},'vehicle_id':{'type':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0x5')],'references':{'model':_0x5f55f7[a88_0x5536('0x9')],'key':'id'}},'device_id':{'type':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0x5')],'references':{'model':_0x5f55f7[a88_0x5536('0xa')],'key':'id'}},'event_status_id':{'type':sequelize_1['default'][a88_0x5536('0x5')],'references':{'model':_0x5f55f7[a88_0x5536('0x7')],'key':'id'},'defaultValue':0x1},'latitude':{'type':sequelize_1['default']['DOUBLE']},'longitude':{'type':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0xb')]},'description':{'type':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0xc')]},'reported_at':sequelize_1[a88_0x5536('0x4')][a88_0x5536('0xd')]};const _0x42a239=this['getEntity'](_0x46364a,_0x39fabc,_0x203635);return _0x42a239;}['bind'](this);const _0x5cc745=_0x46364a[a88_0x5536('0xe')](_0x39fabc,_0x42a239);return _0x5cc745;}}exports[a88_0x5536('0x4')]=EventsModel;