var a90_0x3604=['__esModule','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','default','findLast','models','tracked_at','DESC','json','__importDefault'];(function(_0x5dc6df,_0x24f11d){var _0x87429c=function(_0x1eb120){while(--_0x1eb120){_0x5dc6df['push'](_0x5dc6df['shift']());}};_0x87429c(++_0x24f11d);}(a90_0x3604,0x1a3));var a90_0x59fe=function(_0x2abcc2,_0x29d0dc){_0x2abcc2=_0x2abcc2-0x0;var _0x1b50c5=a90_0x3604[_0x2abcc2];return _0x1b50c5;};'use strict';var __importDefault=this&&this[a90_0x59fe('0x0')]||function(_0x5d6c2b){return _0x5d6c2b&&_0x5d6c2b[a90_0x59fe('0x1')]?_0x5d6c2b:{'default':_0x5d6c2b};};Object['defineProperty'](exports,a90_0x59fe('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a90_0x59fe('0x2')));const sequelize_utils_1=__importDefault(require(a90_0x59fe('0x3')));class LocationPointsController extends controller_utils_1[a90_0x59fe('0x4')]{constructor(_0x2bdb4c){super(_0x2bdb4c,null);}[a90_0x59fe('0x5')](_0x5df873,_0x185cba){sequelize_utils_1[a90_0x59fe('0x4')][a90_0x59fe('0x6')]['locationPointsModel']['findAll']({'attributes':['lat','lon','tracked_at'],'offset':0x0,'limit':0xa,'where':{},'order':[[a90_0x59fe('0x7'),a90_0x59fe('0x8')]]})['then'](_0x4ac964=>{_0x185cba[a90_0x59fe('0x9')]({'data':_0x4ac964});});}}exports[a90_0x59fe('0x4')]=LocationPointsController;