var a97_0x35ef=['catch','error','Unable\x20to\x20connect\x20to\x20the\x20database:','default','__importDefault','__esModule','defineProperty','sequelize','env','DATABASE_NAME','DATABASE_HOST','DATABASE_USER','DATABASE_PASSWORD','mysql','authenticate','log','Connection\x20has\x20been\x20established\x20successfully.'];(function(_0x4601eb,_0x2b7480){var _0x66cb9f=function(_0x5398fa){while(--_0x5398fa){_0x4601eb['push'](_0x4601eb['shift']());}};_0x66cb9f(++_0x2b7480);}(a97_0x35ef,0xf2));var a97_0x6925=function(_0x1c56ae,_0x4ffeee){_0x1c56ae=_0x1c56ae-0x0;var _0x28ce68=a97_0x35ef[_0x1c56ae];return _0x28ce68;};'use strict';var __importDefault=this&&this[a97_0x6925('0x0')]||function(_0x25bdd9){return _0x25bdd9&&_0x25bdd9[a97_0x6925('0x1')]?_0x25bdd9:{'default':_0x25bdd9};};Object[a97_0x6925('0x2')](exports,a97_0x6925('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a97_0x6925('0x3')));const databaseName=process[a97_0x6925('0x4')][a97_0x6925('0x5')];const databaseHost=process[a97_0x6925('0x4')][a97_0x6925('0x6')];const databaseUser=process[a97_0x6925('0x4')][a97_0x6925('0x7')];const databasePassword=process[a97_0x6925('0x4')][a97_0x6925('0x8')];const sequelize=new sequelize_1['default'](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a97_0x6925('0x9'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a97_0x6925('0xa')]()['then'](()=>{console[a97_0x6925('0xb')](a97_0x6925('0xc'));})[a97_0x6925('0xd')](_0x559cbb=>{console[a97_0x6925('0xe')](a97_0x6925('0xf'),_0x559cbb);});exports[a97_0x6925('0x10')]=sequelize;