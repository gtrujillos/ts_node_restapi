var a91_0x3978=['sequelize','env','DATABASE_NAME','DATABASE_HOST','DATABASE_USER','DATABASE_PASSWORD','mysql','then','log','Unable\x20to\x20connect\x20to\x20the\x20database:','default','__importDefault','__esModule','defineProperty'];(function(_0x3ddfb3,_0x2c1e38){var _0x9aca57=function(_0x51f241){while(--_0x51f241){_0x3ddfb3['push'](_0x3ddfb3['shift']());}};_0x9aca57(++_0x2c1e38);}(a91_0x3978,0x123));var a91_0x1d16=function(_0x317374,_0x553b4a){_0x317374=_0x317374-0x0;var _0x5245e7=a91_0x3978[_0x317374];return _0x5245e7;};'use strict';var __importDefault=this&&this[a91_0x1d16('0x0')]||function(_0xbfe5b4){return _0xbfe5b4&&_0xbfe5b4[a91_0x1d16('0x1')]?_0xbfe5b4:{'default':_0xbfe5b4};};Object[a91_0x1d16('0x2')](exports,a91_0x1d16('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a91_0x1d16('0x3')));const databaseName=process[a91_0x1d16('0x4')][a91_0x1d16('0x5')];const databaseHost=process[a91_0x1d16('0x4')][a91_0x1d16('0x6')];const databaseUser=process[a91_0x1d16('0x4')][a91_0x1d16('0x7')];const databasePassword=process[a91_0x1d16('0x4')][a91_0x1d16('0x8')];const sequelize=new sequelize_1['default'](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a91_0x1d16('0x9'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize['authenticate']()[a91_0x1d16('0xa')](()=>{console[a91_0x1d16('0xb')]('Connection\x20has\x20been\x20established\x20successfully.');})['catch'](_0xb365f3=>{console['error'](a91_0x1d16('0xc'),_0xb365f3);});exports[a91_0x1d16('0xd')]=sequelize;