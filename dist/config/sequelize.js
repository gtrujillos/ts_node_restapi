var a197_0x3684=['catch','error','Unable\x20to\x20connect\x20to\x20the\x20database:','__importDefault','__esModule','defineProperty','DATABASE_NAME','env','DATABASE_HOST','DATABASE_USER','DATABASE_PASSWORD','default','mysql','authenticate','then','log'];(function(_0x194a32,_0x1095be){var _0x4f07b9=function(_0x314ad6){while(--_0x314ad6){_0x194a32['push'](_0x194a32['shift']());}};_0x4f07b9(++_0x1095be);}(a197_0x3684,0x83));var a197_0x12d4=function(_0x141196,_0x102029){_0x141196=_0x141196-0x0;var _0x2a6843=a197_0x3684[_0x141196];return _0x2a6843;};'use strict';var __importDefault=this&&this[a197_0x12d4('0x0')]||function(_0x272ceb){return _0x272ceb&&_0x272ceb[a197_0x12d4('0x1')]?_0x272ceb:{'default':_0x272ceb};};Object[a197_0x12d4('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const databaseName=process['env'][a197_0x12d4('0x3')];const databaseHost=process[a197_0x12d4('0x4')][a197_0x12d4('0x5')];const databaseUser=process[a197_0x12d4('0x4')][a197_0x12d4('0x6')];const databasePassword=process[a197_0x12d4('0x4')][a197_0x12d4('0x7')];const sequelize=new sequelize_1[(a197_0x12d4('0x8'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a197_0x12d4('0x9'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a197_0x12d4('0xa')]()[a197_0x12d4('0xb')](()=>{console[a197_0x12d4('0xc')]('Connection\x20has\x20been\x20established\x20successfully.');})[a197_0x12d4('0xd')](_0x1b34d7=>{console[a197_0x12d4('0xe')](a197_0x12d4('0xf'),_0x1b34d7);});exports[a197_0x12d4('0x8')]=sequelize;