var a103_0x3838=['Console','env','NODE_ENV','production','error','debug','default','transports','debug.log','Logging\x20initialized\x20at\x20debug\x20level','__importDefault','__esModule','defineProperty','winston','Logger'];(function(_0x208d94,_0xc58311){var _0x336d1d=function(_0x3e5fee){while(--_0x3e5fee){_0x208d94['push'](_0x208d94['shift']());}};_0x336d1d(++_0xc58311);}(a103_0x3838,0xbe));var a103_0x260e=function(_0x3e6f89,_0x5e8875){_0x3e6f89=_0x3e6f89-0x0;var _0x130ee0=a103_0x3838[_0x3e6f89];return _0x130ee0;};'use strict';var __importDefault=this&&this[a103_0x260e('0x0')]||function(_0x1e432c){return _0x1e432c&&_0x1e432c[a103_0x260e('0x1')]?_0x1e432c:{'default':_0x1e432c};};Object[a103_0x260e('0x2')](exports,'__esModule',{'value':!![]});const winston_1=__importDefault(require(a103_0x260e('0x3')));const winston_2=require('winston');const logger=new winston_2[(a103_0x260e('0x4'))]({'transports':[new winston_1['default']['transports'][(a103_0x260e('0x5'))]({'level':process[a103_0x260e('0x6')][a103_0x260e('0x7')]===a103_0x260e('0x8')?a103_0x260e('0x9'):a103_0x260e('0xa')}),new winston_1[(a103_0x260e('0xb'))][(a103_0x260e('0xc'))]['File']({'filename':a103_0x260e('0xd'),'level':a103_0x260e('0xa')})]});if(process[a103_0x260e('0x6')][a103_0x260e('0x7')]!=='production'){logger[a103_0x260e('0xa')](a103_0x260e('0xe'));}exports['default']=logger;