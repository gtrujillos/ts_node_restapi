var a226_0x34a7=['config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','SESSION_SECRET','env','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','__importDefault','__esModule','defineProperty','./logger','dotenv','.env','default','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables'];(function(_0x5598b7,_0x50d0b7){var _0x177988=function(_0x5a90b3){while(--_0x5a90b3){_0x5598b7['push'](_0x5598b7['shift']());}};_0x177988(++_0x50d0b7);}(a226_0x34a7,0x70));var a226_0x5370=function(_0x543878,_0x2226a5){_0x543878=_0x543878-0x0;var _0x128613=a226_0x34a7[_0x543878];return _0x128613;};'use strict';var __importDefault=this&&this[a226_0x5370('0x0')]||function(_0xc92123){return _0xc92123&&_0xc92123[a226_0x5370('0x1')]?_0xc92123:{'default':_0xc92123};};Object[a226_0x5370('0x2')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a226_0x5370('0x3')));const dotenv_1=__importDefault(require(a226_0x5370('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1['default']['existsSync'](a226_0x5370('0x5'))){logger_1[a226_0x5370('0x6')]['debug'](a226_0x5370('0x7'));dotenv_1[a226_0x5370('0x6')][a226_0x5370('0x8')]({'path':a226_0x5370('0x5')});}else{logger_1['default'][a226_0x5370('0x9')](a226_0x5370('0xa'));dotenv_1[a226_0x5370('0x6')][a226_0x5370('0x8')]({'path':a226_0x5370('0xb')});}exports[a226_0x5370('0xc')]=process['env']['NODE_ENV'];const prod=exports[a226_0x5370('0xc')]==='production';exports[a226_0x5370('0xd')]=process[a226_0x5370('0xe')][a226_0x5370('0xd')];exports[a226_0x5370('0xf')]=prod?process['env'][a226_0x5370('0xf')]:process[a226_0x5370('0xe')][a226_0x5370('0x10')];if(!exports['SESSION_SECRET']){logger_1[a226_0x5370('0x6')][a226_0x5370('0x11')](a226_0x5370('0x12'));process[a226_0x5370('0x13')](0x1);}if(!exports['MONGODB_URI']){logger_1[a226_0x5370('0x6')][a226_0x5370('0x11')]('No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.');process[a226_0x5370('0x13')](0x1);}