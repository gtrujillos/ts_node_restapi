var a113_0x5e24=['MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','./logger','default','existsSync','.env','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','ENVIRONMENT','env','production','SESSION_SECRET'];(function(_0xa1a877,_0x308cea){var _0x3a7be2=function(_0x12df22){while(--_0x12df22){_0xa1a877['push'](_0xa1a877['shift']());}};_0x3a7be2(++_0x308cea);}(a113_0x5e24,0x92));var a113_0x59ad=function(_0x475d6e,_0x3f09a1){_0x475d6e=_0x475d6e-0x0;var _0x5310a4=a113_0x5e24[_0x475d6e];return _0x5310a4;};'use strict';var __importDefault=this&&this[a113_0x59ad('0x0')]||function(_0x495918){return _0x495918&&_0x495918[a113_0x59ad('0x1')]?_0x495918:{'default':_0x495918};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a113_0x59ad('0x2')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a113_0x59ad('0x3')][a113_0x59ad('0x4')](a113_0x59ad('0x5'))){logger_1[a113_0x59ad('0x3')][a113_0x59ad('0x6')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a113_0x59ad('0x3')]['config']({'path':a113_0x59ad('0x5')});}else{logger_1['default'][a113_0x59ad('0x6')](a113_0x59ad('0x7'));dotenv_1[a113_0x59ad('0x3')][a113_0x59ad('0x8')]({'path':a113_0x59ad('0x9')});}exports[a113_0x59ad('0xa')]=process[a113_0x59ad('0xb')]['NODE_ENV'];const prod=exports[a113_0x59ad('0xa')]===a113_0x59ad('0xc');exports[a113_0x59ad('0xd')]=process[a113_0x59ad('0xb')][a113_0x59ad('0xd')];exports[a113_0x59ad('0xe')]=prod?process[a113_0x59ad('0xb')][a113_0x59ad('0xe')]:process[a113_0x59ad('0xb')][a113_0x59ad('0xf')];if(!exports['SESSION_SECRET']){logger_1['default'][a113_0x59ad('0x10')](a113_0x59ad('0x11'));process[a113_0x59ad('0x12')](0x1);}if(!exports['MONGODB_URI']){logger_1[a113_0x59ad('0x3')][a113_0x59ad('0x10')](a113_0x59ad('0x13'));process[a113_0x59ad('0x12')](0x1);}