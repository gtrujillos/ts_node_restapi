var a113_0x550c=['No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault','__esModule','defineProperty','dotenv','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','ENVIRONMENT','env','production','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error'];(function(_0x40f17f,_0x53e585){var _0x3b3208=function(_0x4aa583){while(--_0x4aa583){_0x40f17f['push'](_0x40f17f['shift']());}};_0x3b3208(++_0x53e585);}(a113_0x550c,0x1e6));var a113_0x56ae=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a113_0x550c[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a113_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a113_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a113_0x56ae('0x2')](exports,a113_0x56ae('0x1'),{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require(a113_0x56ae('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a113_0x56ae('0x4')][a113_0x56ae('0x5')](a113_0x56ae('0x6'))){logger_1['default'][a113_0x56ae('0x7')](a113_0x56ae('0x8'));dotenv_1[a113_0x56ae('0x4')][a113_0x56ae('0x9')]({'path':'.env'});}else{logger_1['default'][a113_0x56ae('0x7')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a113_0x56ae('0x4')][a113_0x56ae('0x9')]({'path':a113_0x56ae('0xa')});}exports[a113_0x56ae('0xb')]=process[a113_0x56ae('0xc')]['NODE_ENV'];const prod=exports[a113_0x56ae('0xb')]===a113_0x56ae('0xd');exports[a113_0x56ae('0xe')]=process['env']['SESSION_SECRET'];exports[a113_0x56ae('0xf')]=prod?process['env']['MONGODB_URI']:process[a113_0x56ae('0xc')][a113_0x56ae('0x10')];if(!exports[a113_0x56ae('0xe')]){logger_1[a113_0x56ae('0x4')][a113_0x56ae('0x11')](a113_0x56ae('0x12'));process['exit'](0x1);}if(!exports['MONGODB_URI']){logger_1['default']['error'](a113_0x56ae('0x13'));process[a113_0x56ae('0x14')](0x1);}