var a91_0x3a47=['then','Connection\x20has\x20been\x20established\x20successfully.','catch','error','Unable\x20to\x20connect\x20to\x20the\x20database:','__importDefault','defineProperty','__esModule','sequelize','env','DATABASE_NAME','DATABASE_HOST','default','mysql','authenticate'];(function(_0x3a2b82,_0x25a902){var _0x227b55=function(_0x2f5420){while(--_0x2f5420){_0x3a2b82['push'](_0x3a2b82['shift']());}};_0x227b55(++_0x25a902);}(a91_0x3a47,0x8c));var a91_0x2961=function(_0xb479be,_0x4bb6ab){_0xb479be=_0xb479be-0x0;var _0x44c2ed=a91_0x3a47[_0xb479be];return _0x44c2ed;};'use strict';var __importDefault=this&&this[a91_0x2961('0x0')]||function(_0x20d2c9){return _0x20d2c9&&_0x20d2c9['__esModule']?_0x20d2c9:{'default':_0x20d2c9};};Object[a91_0x2961('0x1')](exports,a91_0x2961('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a91_0x2961('0x3')));const databaseName=process[a91_0x2961('0x4')][a91_0x2961('0x5')];const databaseHost=process['env'][a91_0x2961('0x6')];const databaseUser=process[a91_0x2961('0x4')]['DATABASE_USER'];const databasePassword=process['env']['DATABASE_PASSWORD'];const sequelize=new sequelize_1[(a91_0x2961('0x7'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a91_0x2961('0x8'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a91_0x2961('0x9')]()[a91_0x2961('0xa')](()=>{console['log'](a91_0x2961('0xb'));})[a91_0x2961('0xc')](_0x234995=>{console[a91_0x2961('0xd')](a91_0x2961('0xe'),_0x234995);});exports['default']=sequelize;