var a104_0x24c9=['.env.example','ENVIRONMENT','env','NODE_ENV','production','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault','defineProperty','__esModule','./logger','default','existsSync','debug','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables'];(function(_0x3d7dfe,_0x44b017){var _0x32a7a4=function(_0x31df57){while(--_0x31df57){_0x3d7dfe['push'](_0x3d7dfe['shift']());}};_0x32a7a4(++_0x44b017);}(a104_0x24c9,0x1ae));var a104_0x27cf=function(_0x2928f1,_0x390aa4){_0x2928f1=_0x2928f1-0x0;var _0x2add1a=a104_0x24c9[_0x2928f1];return _0x2add1a;};'use strict';var __importDefault=this&&this[a104_0x27cf('0x0')]||function(_0x42ade7){return _0x42ade7&&_0x42ade7['__esModule']?_0x42ade7:{'default':_0x42ade7};};Object[a104_0x27cf('0x1')](exports,a104_0x27cf('0x2'),{'value':!![]});const logger_1=__importDefault(require(a104_0x27cf('0x3')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a104_0x27cf('0x4')][a104_0x27cf('0x5')]('.env')){logger_1[a104_0x27cf('0x4')][a104_0x27cf('0x6')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default'][a104_0x27cf('0x7')]({'path':a104_0x27cf('0x8')});}else{logger_1[a104_0x27cf('0x4')][a104_0x27cf('0x6')](a104_0x27cf('0x9'));dotenv_1['default'][a104_0x27cf('0x7')]({'path':a104_0x27cf('0xa')});}exports[a104_0x27cf('0xb')]=process[a104_0x27cf('0xc')][a104_0x27cf('0xd')];const prod=exports[a104_0x27cf('0xb')]===a104_0x27cf('0xe');exports[a104_0x27cf('0xf')]=process[a104_0x27cf('0xc')][a104_0x27cf('0xf')];exports[a104_0x27cf('0x10')]=prod?process[a104_0x27cf('0xc')][a104_0x27cf('0x10')]:process['env'][a104_0x27cf('0x11')];if(!exports[a104_0x27cf('0xf')]){logger_1[a104_0x27cf('0x4')][a104_0x27cf('0x12')](a104_0x27cf('0x13'));process['exit'](0x1);}if(!exports[a104_0x27cf('0x10')]){logger_1[a104_0x27cf('0x4')][a104_0x27cf('0x12')](a104_0x27cf('0x14'));process[a104_0x27cf('0x15')](0x1);}