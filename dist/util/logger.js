var a112_0x427e=['Logging\x20initialized\x20at\x20debug\x20level','__importDefault','__esModule','defineProperty','winston','Logger','default','env','production','error','debug','File','NODE_ENV'];(function(_0x1442fc,_0x55f963){var _0x55fb81=function(_0x15ed6b){while(--_0x15ed6b){_0x1442fc['push'](_0x1442fc['shift']());}};_0x55fb81(++_0x55f963);}(a112_0x427e,0xd1));var a112_0x3da6=function(_0x1d432a,_0x3b1686){_0x1d432a=_0x1d432a-0x0;var _0x152e58=a112_0x427e[_0x1d432a];return _0x152e58;};'use strict';var __importDefault=this&&this[a112_0x3da6('0x0')]||function(_0x1b4368){return _0x1b4368&&_0x1b4368[a112_0x3da6('0x1')]?_0x1b4368:{'default':_0x1b4368};};Object[a112_0x3da6('0x2')](exports,a112_0x3da6('0x1'),{'value':!![]});const winston_1=__importDefault(require('winston'));const winston_2=require(a112_0x3da6('0x3'));const logger=new winston_2[(a112_0x3da6('0x4'))]({'transports':[new winston_1[(a112_0x3da6('0x5'))]['transports']['Console']({'level':process[a112_0x3da6('0x6')]['NODE_ENV']===a112_0x3da6('0x7')?a112_0x3da6('0x8'):a112_0x3da6('0x9')}),new winston_1[(a112_0x3da6('0x5'))]['transports'][(a112_0x3da6('0xa'))]({'filename':'debug.log','level':a112_0x3da6('0x9')})]});if(process[a112_0x3da6('0x6')][a112_0x3da6('0xb')]!==a112_0x3da6('0x7')){logger[a112_0x3da6('0x9')](a112_0x3da6('0xc'));}exports['default']=logger;