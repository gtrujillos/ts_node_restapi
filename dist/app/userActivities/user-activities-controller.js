var a155_0x3019=['shared','__esModule','../../infrastructure/base-controller','../shared/models/crudOptions','default','latest','bind','latestByUser','params','public'];(function(_0x3da4a1,_0x162f2d){var _0x531d74=function(_0x36b9cc){while(--_0x36b9cc){_0x3da4a1['push'](_0x3da4a1['shift']());}};_0x531d74(++_0x162f2d);}(a155_0x3019,0x17d));var a155_0x5672=function(_0x1f3a90,_0x1679e2){_0x1f3a90=_0x1f3a90-0x0;var _0xe7cbb4=a155_0x3019[_0x1f3a90];return _0xe7cbb4;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3a04b3){return _0x3a04b3&&_0x3a04b3[a155_0x5672('0x0')]?_0x3a04b3:{'default':_0x3a04b3};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const base_controller_1=__importDefault(require(a155_0x5672('0x1')));const crudOptions_1=__importDefault(require(a155_0x5672('0x2')));const responseUtils=require('../../infrastructure/response-utils');class UserActivitiesController extends base_controller_1[a155_0x5672('0x3')]{constructor(_0x2455a7){super(_0x2455a7,null);this[a155_0x5672('0x4')]=this[a155_0x5672('0x4')][a155_0x5672('0x5')](this);this[a155_0x5672('0x6')]=this['latestByUser'][a155_0x5672('0x5')](this);}['latest'](_0x18ab39,_0x5a7ff0,_0x4d5064){_0x18ab39[a155_0x5672('0x7')]={'is_private':![]};const _0x4f37a9=new crudOptions_1[(a155_0x5672('0x3'))]();_0x4f37a9[a155_0x5672('0x8')]=!![];_0x4f37a9[a155_0x5672('0x9')]=!![];return this['find'](_0x18ab39,_0x5a7ff0,_0x4d5064,_0x4f37a9);}[a155_0x5672('0x6')](_0x55ffb3,_0x432e2d,_0x2f8895){const _0x3c3c0b=new crudOptions_1[(a155_0x5672('0x3'))]();return this['find'](_0x55ffb3,_0x432e2d,_0x2f8895,_0x3c3c0b);}}exports[a155_0x5672('0x3')]=UserActivitiesController;