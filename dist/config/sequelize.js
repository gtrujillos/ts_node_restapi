var a91_0x1ce0=['__importDefault','__esModule','env','DATABASE_NAME','DATABASE_HOST','DATABASE_USER','mysql','authenticate','then','log','Connection\x20has\x20been\x20established\x20successfully.','catch','error','default'];(function(_0x206f3a,_0xee30d2){var _0x370e10=function(_0x4554e2){while(--_0x4554e2){_0x206f3a['push'](_0x206f3a['shift']());}};_0x370e10(++_0xee30d2);}(a91_0x1ce0,0xd2));var a91_0x236c=function(_0x3d31d5,_0x586efc){_0x3d31d5=_0x3d31d5-0x0;var _0x51f23a=a91_0x1ce0[_0x3d31d5];return _0x51f23a;};'use strict';var __importDefault=this&&this[a91_0x236c('0x0')]||function(_0x428146){return _0x428146&&_0x428146['__esModule']?_0x428146:{'default':_0x428146};};Object['defineProperty'](exports,a91_0x236c('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const databaseName=process[a91_0x236c('0x2')][a91_0x236c('0x3')];const databaseHost=process[a91_0x236c('0x2')][a91_0x236c('0x4')];const databaseUser=process[a91_0x236c('0x2')][a91_0x236c('0x5')];const databasePassword=process[a91_0x236c('0x2')]['DATABASE_PASSWORD'];const sequelize=new sequelize_1['default'](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a91_0x236c('0x6'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a91_0x236c('0x7')]()[a91_0x236c('0x8')](()=>{console[a91_0x236c('0x9')](a91_0x236c('0xa'));})[a91_0x236c('0xb')](_0x2a530a=>{console[a91_0x236c('0xc')]('Unable\x20to\x20connect\x20to\x20the\x20database:',_0x2a530a);});exports[a91_0x236c('0xd')]=sequelize;