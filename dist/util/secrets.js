var a110_0x3ca2=['.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','NODE_ENV','production','SESSION_SECRET','env','MONGODB_URI','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','defineProperty','__esModule','./logger','dotenv','default','existsSync'];(function(_0x53d3b5,_0x544b04){var _0x530581=function(_0x375422){while(--_0x375422){_0x53d3b5['push'](_0x53d3b5['shift']());}};_0x530581(++_0x544b04);}(a110_0x3ca2,0xf6));var a110_0x5ba1=function(_0x39ebb6,_0x317328){_0x39ebb6=_0x39ebb6-0x0;var _0x142e76=a110_0x3ca2[_0x39ebb6];return _0x142e76;};'use strict';var __importDefault=this&&this[a110_0x5ba1('0x0')]||function(_0x3be1d5){return _0x3be1d5&&_0x3be1d5['__esModule']?_0x3be1d5:{'default':_0x3be1d5};};Object[a110_0x5ba1('0x1')](exports,a110_0x5ba1('0x2'),{'value':!![]});const logger_1=__importDefault(require(a110_0x5ba1('0x3')));const dotenv_1=__importDefault(require(a110_0x5ba1('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a110_0x5ba1('0x5')][a110_0x5ba1('0x6')](a110_0x5ba1('0x7'))){logger_1['default'][a110_0x5ba1('0x8')](a110_0x5ba1('0x9'));dotenv_1[a110_0x5ba1('0x5')][a110_0x5ba1('0xa')]({'path':'.env'});}else{logger_1[a110_0x5ba1('0x5')][a110_0x5ba1('0x8')](a110_0x5ba1('0xb'));dotenv_1[a110_0x5ba1('0x5')]['config']({'path':a110_0x5ba1('0xc')});}exports[a110_0x5ba1('0xd')]=process['env'][a110_0x5ba1('0xe')];const prod=exports[a110_0x5ba1('0xd')]===a110_0x5ba1('0xf');exports[a110_0x5ba1('0x10')]=process[a110_0x5ba1('0x11')][a110_0x5ba1('0x10')];exports[a110_0x5ba1('0x12')]=prod?process[a110_0x5ba1('0x11')][a110_0x5ba1('0x12')]:process['env']['MONGODB_URI_LOCAL'];if(!exports['SESSION_SECRET']){logger_1['default'][a110_0x5ba1('0x13')](a110_0x5ba1('0x14'));process[a110_0x5ba1('0x15')](0x1);}if(!exports[a110_0x5ba1('0x12')]){logger_1[a110_0x5ba1('0x5')][a110_0x5ba1('0x13')](a110_0x5ba1('0x16'));process[a110_0x5ba1('0x15')](0x1);}