var a159_0x46c1=['desc','__importDefault','__esModule','defineProperty','../../infrastructure/router-utils','../../infrastructure/sequelize-utils','Router','/report_event','reportEvent','default','models','plate','eventTypesModel','name','eventStatusModel','reported_at'];(function(_0x307505,_0x1a576d){var _0x129a97=function(_0x505ac6){while(--_0x505ac6){_0x307505['push'](_0x307505['shift']());}};_0x129a97(++_0x1a576d);}(a159_0x46c1,0x171));var a159_0x398b=function(_0x45658b,_0xa6ed42){_0x45658b=_0x45658b-0x0;var _0x51c273=a159_0x46c1[_0x45658b];return _0x51c273;};'use strict';var __importDefault=this&&this[a159_0x398b('0x0')]||function(_0x386ec2){return _0x386ec2&&_0x386ec2[a159_0x398b('0x1')]?_0x386ec2:{'default':_0x386ec2};};Object[a159_0x398b('0x2')](exports,a159_0x398b('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a159_0x398b('0x3')));const express_1=__importDefault(require('express'));const sequelize_utils_1=__importDefault(require(a159_0x398b('0x4')));const router=express_1['default'][a159_0x398b('0x5')]();class EventsRoute{constructor(_0x524eb9){router['post'](a159_0x398b('0x6'),_0x524eb9[a159_0x398b('0x7')]);const _0xb5012a=new router_utils_1[(a159_0x398b('0x8'))](_0x524eb9,router,null,[{'model':sequelize_utils_1[a159_0x398b('0x8')][a159_0x398b('0x9')]['vehiclesModel'],'attributes':['id',a159_0x398b('0xa')]},{'model':sequelize_utils_1[a159_0x398b('0x8')][a159_0x398b('0x9')][a159_0x398b('0xb')],'attributes':['id',a159_0x398b('0xc')]},{'model':sequelize_utils_1[a159_0x398b('0x8')][a159_0x398b('0x9')][a159_0x398b('0xd')],'attributes':['id',a159_0x398b('0xc')]}],[[a159_0x398b('0xe'),a159_0x398b('0xf')]]);return router;}}exports['default']=EventsRoute;