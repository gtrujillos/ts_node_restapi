var a197_0x21c6=['sequelize','env','DATABASE_NAME','DATABASE_HOST','DATABASE_PASSWORD','default','authenticate','then','log','catch','error','Unable\x20to\x20connect\x20to\x20the\x20database:','__importDefault','__esModule','defineProperty'];(function(_0x47154d,_0xff489){var _0x4370b3=function(_0x530c53){while(--_0x530c53){_0x47154d['push'](_0x47154d['shift']());}};_0x4370b3(++_0xff489);}(a197_0x21c6,0x11a));var a197_0x1384=function(_0x3e88c7,_0x1c4d1a){_0x3e88c7=_0x3e88c7-0x0;var _0x31aaad=a197_0x21c6[_0x3e88c7];return _0x31aaad;};'use strict';var __importDefault=this&&this[a197_0x1384('0x0')]||function(_0x326908){return _0x326908&&_0x326908[a197_0x1384('0x1')]?_0x326908:{'default':_0x326908};};Object[a197_0x1384('0x2')](exports,a197_0x1384('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a197_0x1384('0x3')));const databaseName=process[a197_0x1384('0x4')][a197_0x1384('0x5')];const databaseHost=process['env'][a197_0x1384('0x6')];const databaseUser=process['env']['DATABASE_USER'];const databasePassword=process[a197_0x1384('0x4')][a197_0x1384('0x7')];const sequelize=new sequelize_1[(a197_0x1384('0x8'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':'mysql','operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a197_0x1384('0x9')]()[a197_0x1384('0xa')](()=>{console[a197_0x1384('0xb')]('Connection\x20has\x20been\x20established\x20successfully.');})[a197_0x1384('0xc')](_0x36b296=>{console[a197_0x1384('0xd')](a197_0x1384('0xe'),_0x36b296);});exports[a197_0x1384('0x8')]=sequelize;