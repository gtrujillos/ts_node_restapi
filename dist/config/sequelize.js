var a188_0x13b3=['defineProperty','sequelize','env','DATABASE_NAME','DATABASE_HOST','DATABASE_USER','DATABASE_PASSWORD','Sequelize','mysql','authenticate','then','catch','error','Unable\x20to\x20connect\x20to\x20the\x20database:','default'];(function(_0x3a034e,_0x42782b){var _0x57a9e8=function(_0x82727e){while(--_0x82727e){_0x3a034e['push'](_0x3a034e['shift']());}};_0x57a9e8(++_0x42782b);}(a188_0x13b3,0x186));var a188_0x469c=function(_0x406024,_0x41ca5c){_0x406024=_0x406024-0x0;var _0x269b69=a188_0x13b3[_0x406024];return _0x269b69;};'use strict';Object[a188_0x469c('0x0')](exports,'__esModule',{'value':!![]});const sequelize_1=require(a188_0x469c('0x1'));const databaseName=process[a188_0x469c('0x2')][a188_0x469c('0x3')];const databaseHost=process['env'][a188_0x469c('0x4')];const databaseUser=process[a188_0x469c('0x2')][a188_0x469c('0x5')];const databasePassword=process['env'][a188_0x469c('0x6')];const sequelize=new sequelize_1[(a188_0x469c('0x7'))](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a188_0x469c('0x8'),'logging':(..._0x180a44)=>{},'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a188_0x469c('0x9')]()[a188_0x469c('0xa')](()=>{console['log']('Connection\x20has\x20been\x20established\x20successfully.');})[a188_0x469c('0xb')](_0x2d9bd5=>{console[a188_0x469c('0xc')](a188_0x469c('0xd'),_0x2d9bd5);});exports[a188_0x469c('0xe')]=sequelize;