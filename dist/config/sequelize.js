var a197_0x141f=['DATABASE_USER','DATABASE_PASSWORD','default','mysql','authenticate','then','log','Connection\x20has\x20been\x20established\x20successfully.','catch','Unable\x20to\x20connect\x20to\x20the\x20database:','__importDefault','__esModule','env','DATABASE_NAME','DATABASE_HOST'];(function(_0x5a9d7f,_0x14d30b){var _0x38b178=function(_0x49827f){while(--_0x49827f){_0x5a9d7f['push'](_0x5a9d7f['shift']());}};_0x38b178(++_0x14d30b);}(a197_0x141f,0x1cc));var a197_0x59ec=function(_0x5358ff,_0x1bd67b){_0x5358ff=_0x5358ff-0x0;var _0x548f0e=a197_0x141f[_0x5358ff];return _0x548f0e;};'use strict';var __importDefault=this&&this[a197_0x59ec('0x0')]||function(_0x3bcdc3){return _0x3bcdc3&&_0x3bcdc3['__esModule']?_0x3bcdc3:{'default':_0x3bcdc3};};Object['defineProperty'](exports,a197_0x59ec('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const databaseName=process[a197_0x59ec('0x2')][a197_0x59ec('0x3')];const databaseHost=process[a197_0x59ec('0x2')][a197_0x59ec('0x4')];const databaseUser=process[a197_0x59ec('0x2')][a197_0x59ec('0x5')];const databasePassword=process[a197_0x59ec('0x2')][a197_0x59ec('0x6')];const sequelize=new sequelize_1[(a197_0x59ec('0x7'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a197_0x59ec('0x8'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a197_0x59ec('0x9')]()[a197_0x59ec('0xa')](()=>{console[a197_0x59ec('0xb')](a197_0x59ec('0xc'));})[a197_0x59ec('0xd')](_0x12c1b3=>{console['error'](a197_0x59ec('0xe'),_0x12c1b3);});exports[a197_0x59ec('0x7')]=sequelize;