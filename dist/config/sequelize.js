var a90_0x5321=['Connection\x20has\x20been\x20established\x20successfully.','error','Unable\x20to\x20connect\x20to\x20the\x20database:','__importDefault','defineProperty','__esModule','env','DATABASE_HOST','DATABASE_USER','DATABASE_PASSWORD','default','mysql','log'];(function(_0x3ef92e,_0x2d84b4){var _0x2baaff=function(_0x2212bd){while(--_0x2212bd){_0x3ef92e['push'](_0x3ef92e['shift']());}};_0x2baaff(++_0x2d84b4);}(a90_0x5321,0x16f));var a90_0x1d66=function(_0x4bcd60,_0x398254){_0x4bcd60=_0x4bcd60-0x0;var _0x357e98=a90_0x5321[_0x4bcd60];return _0x357e98;};'use strict';var __importDefault=this&&this[a90_0x1d66('0x0')]||function(_0x5e64d2){return _0x5e64d2&&_0x5e64d2['__esModule']?_0x5e64d2:{'default':_0x5e64d2};};Object[a90_0x1d66('0x1')](exports,a90_0x1d66('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const databaseName=process['env']['DATABASE_NAME'];const databaseHost=process[a90_0x1d66('0x3')][a90_0x1d66('0x4')];const databaseUser=process[a90_0x1d66('0x3')][a90_0x1d66('0x5')];const databasePassword=process[a90_0x1d66('0x3')][a90_0x1d66('0x6')];const sequelize=new sequelize_1[(a90_0x1d66('0x7'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a90_0x1d66('0x8'),'operatorsAliases':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize['authenticate']()['then'](()=>{console[a90_0x1d66('0x9')](a90_0x1d66('0xa'));})['catch'](_0x9f7422=>{console[a90_0x1d66('0xb')](a90_0x1d66('0xc'),_0x9f7422);});exports['default']=sequelize;