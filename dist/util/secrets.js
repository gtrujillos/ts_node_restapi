var a113_0x314e=['MONGODB_URI','env','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__esModule','defineProperty','./logger','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','production','SESSION_SECRET'];(function(_0x131014,_0x237c59){var _0x24bc31=function(_0x1b0948){while(--_0x1b0948){_0x131014['push'](_0x131014['shift']());}};_0x24bc31(++_0x237c59);}(a113_0x314e,0x1c0));var a113_0xb708=function(_0x36ea98,_0x10cda2){_0x36ea98=_0x36ea98-0x0;var _0x4ce57a=a113_0x314e[_0x36ea98];return _0x4ce57a;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3ebae6){return _0x3ebae6&&_0x3ebae6[a113_0xb708('0x0')]?_0x3ebae6:{'default':_0x3ebae6};};Object[a113_0xb708('0x1')](exports,a113_0xb708('0x0'),{'value':!![]});const logger_1=__importDefault(require(a113_0xb708('0x2')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a113_0xb708('0x3')][a113_0xb708('0x4')](a113_0xb708('0x5'))){logger_1[a113_0xb708('0x3')][a113_0xb708('0x6')](a113_0xb708('0x7'));dotenv_1['default'][a113_0xb708('0x8')]({'path':'.env'});}else{logger_1[a113_0xb708('0x3')]['debug'](a113_0xb708('0x9'));dotenv_1['default'][a113_0xb708('0x8')]({'path':a113_0xb708('0xa')});}exports[a113_0xb708('0xb')]=process['env']['NODE_ENV'];const prod=exports[a113_0xb708('0xb')]===a113_0xb708('0xc');exports[a113_0xb708('0xd')]=process['env'][a113_0xb708('0xd')];exports[a113_0xb708('0xe')]=prod?process[a113_0xb708('0xf')][a113_0xb708('0xe')]:process[a113_0xb708('0xf')][a113_0xb708('0x10')];if(!exports[a113_0xb708('0xd')]){logger_1['default'][a113_0xb708('0x11')](a113_0xb708('0x12'));process[a113_0xb708('0x13')](0x1);}if(!exports[a113_0xb708('0xe')]){logger_1[a113_0xb708('0x3')][a113_0xb708('0x11')](a113_0xb708('0x14'));process[a113_0xb708('0x13')](0x1);}