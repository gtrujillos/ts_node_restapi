var a170_0x47d7=['vehiclesModel','DATE','getEntity','import','__importDefault','__esModule','sequelize','../../infrastructure/model-base','default','companiesModel','INTEGER','usersModel','routesModel'];(function(_0xcafb83,_0x31a2b2){var _0x1cd028=function(_0x2e4ade){while(--_0x2e4ade){_0xcafb83['push'](_0xcafb83['shift']());}};_0x1cd028(++_0x31a2b2);}(a170_0x47d7,0xee));var a170_0x17f1=function(_0x331453,_0x440926){_0x331453=_0x331453-0x0;var _0x5334f6=a170_0x47d7[_0x331453];return _0x5334f6;};'use strict';var __importDefault=this&&this[a170_0x17f1('0x0')]||function(_0x13e135){return _0x13e135&&_0x13e135[a170_0x17f1('0x1')]?_0x13e135:{'default':_0x13e135};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a170_0x17f1('0x2')));const model_base_1=__importDefault(require(a170_0x17f1('0x3')));class RouteSchedulesModel extends model_base_1[a170_0x17f1('0x4')]{constructor(_0x9b7965,_0x2d716f,_0x145563){super(_0x145563);const _0x3c476b=function(_0x9b7965,_0x40fcaa){const _0x3a7553={'company_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x145563[a170_0x17f1('0x5')],'key':'id'}},'user_id':{'type':_0x40fcaa[a170_0x17f1('0x6')],'references':{'model':_0x145563[a170_0x17f1('0x7')],'key':'id'}},'route_id':{'type':_0x40fcaa[a170_0x17f1('0x6')],'references':{'model':_0x145563[a170_0x17f1('0x8')],'key':'id'}},'vehicle_id':{'type':_0x40fcaa[a170_0x17f1('0x6')],'references':{'model':_0x145563[a170_0x17f1('0x9')],'key':'id'}},'start_date':{'type':_0x40fcaa[a170_0x17f1('0xa')]},'end_date':{'type':_0x40fcaa['DATE']}};const _0x3c476b=this[a170_0x17f1('0xb')](_0x9b7965,_0x2d716f,_0x3a7553);return _0x3c476b;}['bind'](this);const _0x4fb491=_0x9b7965[a170_0x17f1('0xc')](_0x2d716f,_0x3c476b);return _0x4fb491;}}exports['default']=RouteSchedulesModel;