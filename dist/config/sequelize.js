var a91_0x296c=['__importDefault','__esModule','defineProperty','sequelize','env','DATABASE_NAME','DATABASE_HOST','DATABASE_PASSWORD','mysql','authenticate','then','log','Connection\x20has\x20been\x20established\x20successfully.','catch','Unable\x20to\x20connect\x20to\x20the\x20database:'];(function(_0x38435c,_0x3b611e){var _0x3d0790=function(_0x29af1d){while(--_0x29af1d){_0x38435c['push'](_0x38435c['shift']());}};_0x3d0790(++_0x3b611e);}(a91_0x296c,0xd2));var a91_0x4003=function(_0xcb381c,_0x4777c9){_0xcb381c=_0xcb381c-0x0;var _0x577645=a91_0x296c[_0xcb381c];return _0x577645;};'use strict';var __importDefault=this&&this[a91_0x4003('0x0')]||function(_0x1b23b5){return _0x1b23b5&&_0x1b23b5[a91_0x4003('0x1')]?_0x1b23b5:{'default':_0x1b23b5};};Object[a91_0x4003('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a91_0x4003('0x3')));const databaseName=process[a91_0x4003('0x4')][a91_0x4003('0x5')];const databaseHost=process[a91_0x4003('0x4')][a91_0x4003('0x6')];const databaseUser=process[a91_0x4003('0x4')]['DATABASE_USER'];const databasePassword=process['env'][a91_0x4003('0x7')];const sequelize=new sequelize_1['default'](databaseName,databaseUser,databasePassword,{'host':databaseHost,'dialect':a91_0x4003('0x8'),'operatorsAliases':![],'logging':![],'pool':{'max':0x5,'min':0x0,'acquire':0x7530,'idle':0x2710}});sequelize[a91_0x4003('0x9')]()[a91_0x4003('0xa')](()=>{console[a91_0x4003('0xb')](a91_0x4003('0xc'));})[a91_0x4003('0xd')](_0x57d93f=>{console['error'](a91_0x4003('0xe'),_0x57d93f);});exports['default']=sequelize;