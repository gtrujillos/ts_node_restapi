var a89_0x3e2c=['models','name','reported_at','desc','defineProperty','__esModule','../../infrastructure/router-utils','express','default','Router','post','/report_event','reportEvent','vehiclesModel','plate'];(function(_0x4f1616,_0x23adc1){var _0x444cfc=function(_0x78918d){while(--_0x78918d){_0x4f1616['push'](_0x4f1616['shift']());}};_0x444cfc(++_0x23adc1);}(a89_0x3e2c,0x15d));var a89_0x4a8b=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a89_0x3e2c[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x33be2e){return _0x33be2e&&_0x33be2e['__esModule']?_0x33be2e:{'default':_0x33be2e};};Object[a89_0x4a8b('0x0')](exports,a89_0x4a8b('0x1'),{'value':!![]});const router_utils_1=__importDefault(require(a89_0x4a8b('0x2')));const express_1=__importDefault(require(a89_0x4a8b('0x3')));const sequelize_utils_1=__importDefault(require('../../infrastructure/sequelize-utils'));const router=express_1[a89_0x4a8b('0x4')][a89_0x4a8b('0x5')]();class EventsRoute{constructor(_0x5d3cd5){router[a89_0x4a8b('0x6')](a89_0x4a8b('0x7'),_0x5d3cd5[a89_0x4a8b('0x8')]);const _0x43cee0=new router_utils_1[(a89_0x4a8b('0x4'))](_0x5d3cd5,router,null,[{'model':sequelize_utils_1['default']['models'][a89_0x4a8b('0x9')],'attributes':['id',a89_0x4a8b('0xa')]},{'model':sequelize_utils_1[a89_0x4a8b('0x4')][a89_0x4a8b('0xb')]['eventTypesModel'],'attributes':['id','name']},{'model':sequelize_utils_1[a89_0x4a8b('0x4')][a89_0x4a8b('0xb')]['eventStatusModel'],'attributes':['id',a89_0x4a8b('0xc')]}],[[a89_0x4a8b('0xd'),a89_0x4a8b('0xe')]]);return router;}}exports[a89_0x4a8b('0x4')]=EventsRoute;