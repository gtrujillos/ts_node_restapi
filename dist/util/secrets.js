var a226_0x48c7=['__esModule','defineProperty','./logger','dotenv','default','.env','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','NODE_ENV','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault'];(function(_0x1186d3,_0x1be8f4){var _0x21820a=function(_0xd266cc){while(--_0xd266cc){_0x1186d3['push'](_0x1186d3['shift']());}};_0x21820a(++_0x1be8f4);}(a226_0x48c7,0x71));var a226_0x1213=function(_0x1c6df9,_0x278e57){_0x1c6df9=_0x1c6df9-0x0;var _0x514ad5=a226_0x48c7[_0x1c6df9];return _0x514ad5;};'use strict';var __importDefault=this&&this[a226_0x1213('0x0')]||function(_0x37e7a3){return _0x37e7a3&&_0x37e7a3[a226_0x1213('0x1')]?_0x37e7a3:{'default':_0x37e7a3};};Object[a226_0x1213('0x2')](exports,a226_0x1213('0x1'),{'value':!![]});const logger_1=__importDefault(require(a226_0x1213('0x3')));const dotenv_1=__importDefault(require(a226_0x1213('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a226_0x1213('0x5')]['existsSync'](a226_0x1213('0x6'))){logger_1['default']['debug']('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a226_0x1213('0x5')][a226_0x1213('0x7')]({'path':'.env'});}else{logger_1['default']['debug'](a226_0x1213('0x8'));dotenv_1['default'][a226_0x1213('0x7')]({'path':a226_0x1213('0x9')});}exports['ENVIRONMENT']=process[a226_0x1213('0xa')][a226_0x1213('0xb')];const prod=exports['ENVIRONMENT']==='production';exports[a226_0x1213('0xc')]=process[a226_0x1213('0xa')][a226_0x1213('0xc')];exports[a226_0x1213('0xd')]=prod?process[a226_0x1213('0xa')][a226_0x1213('0xd')]:process[a226_0x1213('0xa')][a226_0x1213('0xe')];if(!exports[a226_0x1213('0xc')]){logger_1[a226_0x1213('0x5')][a226_0x1213('0xf')](a226_0x1213('0x10'));process['exit'](0x1);}if(!exports[a226_0x1213('0xd')]){logger_1[a226_0x1213('0x5')][a226_0x1213('0xf')](a226_0x1213('0x11'));process[a226_0x1213('0x12')](0x1);}