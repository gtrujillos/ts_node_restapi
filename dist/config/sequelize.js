var a97_0x1b92=['then','Connection\x20has\x20been\x20established\x20successfully.','catch','error','__importDefault','defineProperty','sequelize','env','DATABASE_NAME','DATABASE_HOST','default','authenticate'];(function(_0x4ee7fc,_0x51956e){var _0x4f8247=function(_0x1be522){while(--_0x1be522){_0x4ee7fc['push'](_0x4ee7fc['shift']());}};_0x4f8247(++_0x51956e);}(a97_0x1b92,0x1d8));var a97_0x1312=function(_0x1d75c7,_0x3440e1){_0x1d75c7=_0x1d75c7-0x0;var _0x51b376=a97_0x1b92[_0x1d75c7];return _0x51b376;};'use strict';var __importDefault=this&&this[a97_0x1312('0x0')]||function(_0xeae10){return _0xeae10&&_0xeae10['__esModule']?_0xeae10:{'default':_0xeae10};};Object[a97_0x1312('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a97_0x1312('0x2')));const databaseName=process[a97_0x1312('0x3')][a97_0x1312('0x4')];const databaseHost=process['env'][a97_0x1312('0x5')];const databaseUser=process[a97_0x1312('0x3')]['DATABASE_USER'];const databasePassword=process['env']['DATABASE_PASSWORD'];const sequelize=new sequelize_1[(a97_0x1312('0x6'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':'mysql','operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a97_0x1312('0x7')]()[a97_0x1312('0x8')](()=>{console['log'](a97_0x1312('0x9'));})[a97_0x1312('0xa')](_0x289aec=>{console[a97_0x1312('0xb')]('Unable\x20to\x20connect\x20to\x20the\x20database:',_0x289aec);});exports[a97_0x1312('0x6')]=sequelize;