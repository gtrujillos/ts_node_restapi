var a226_0x2dce=['SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','default','existsSync','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','env','NODE_ENV','production'];(function(_0x5f4e65,_0x272948){var _0x419de9=function(_0xda8160){while(--_0xda8160){_0x5f4e65['push'](_0x5f4e65['shift']());}};_0x419de9(++_0x272948);}(a226_0x2dce,0x1c0));var a226_0x193f=function(_0x6d98cd,_0x21e8a6){_0x6d98cd=_0x6d98cd-0x0;var _0x253d02=a226_0x2dce[_0x6d98cd];return _0x253d02;};'use strict';var __importDefault=this&&this[a226_0x193f('0x0')]||function(_0xe0020f){return _0xe0020f&&_0xe0020f[a226_0x193f('0x1')]?_0xe0020f:{'default':_0xe0020f};};Object[a226_0x193f('0x2')](exports,a226_0x193f('0x1'),{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a226_0x193f('0x3')][a226_0x193f('0x4')]('.env')){logger_1[a226_0x193f('0x3')][a226_0x193f('0x5')](a226_0x193f('0x6'));dotenv_1[a226_0x193f('0x3')][a226_0x193f('0x7')]({'path':'.env'});}else{logger_1[a226_0x193f('0x3')][a226_0x193f('0x5')](a226_0x193f('0x8'));dotenv_1[a226_0x193f('0x3')][a226_0x193f('0x7')]({'path':a226_0x193f('0x9')});}exports[a226_0x193f('0xa')]=process[a226_0x193f('0xb')][a226_0x193f('0xc')];const prod=exports[a226_0x193f('0xa')]===a226_0x193f('0xd');exports[a226_0x193f('0xe')]=process[a226_0x193f('0xb')][a226_0x193f('0xe')];exports[a226_0x193f('0xf')]=prod?process[a226_0x193f('0xb')][a226_0x193f('0xf')]:process[a226_0x193f('0xb')][a226_0x193f('0x10')];if(!exports[a226_0x193f('0xe')]){logger_1[a226_0x193f('0x3')][a226_0x193f('0x11')](a226_0x193f('0x12'));process[a226_0x193f('0x13')](0x1);}if(!exports['MONGODB_URI']){logger_1['default'][a226_0x193f('0x11')](a226_0x193f('0x14'));process[a226_0x193f('0x13')](0x1);}