var a225_0x25f6=['__esModule','defineProperty','winston','transports','Console','NODE_ENV','production','debug','default','File','debug.log','env','Logging\x20initialized\x20at\x20debug\x20level'];(function(_0x28ef23,_0x18117f){var _0x5bef69=function(_0x42f666){while(--_0x42f666){_0x28ef23['push'](_0x28ef23['shift']());}};_0x5bef69(++_0x18117f);}(a225_0x25f6,0x82));var a225_0x42e8=function(_0x4f62fc,_0x4e0de6){_0x4f62fc=_0x4f62fc-0x0;var _0x298cae=a225_0x25f6[_0x4f62fc];return _0x298cae;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3b7b6c){return _0x3b7b6c&&_0x3b7b6c[a225_0x42e8('0x0')]?_0x3b7b6c:{'default':_0x3b7b6c};};Object[a225_0x42e8('0x1')](exports,a225_0x42e8('0x0'),{'value':!![]});const winston_1=__importDefault(require(a225_0x42e8('0x2')));const winston_2=require(a225_0x42e8('0x2'));const logger=new winston_2['Logger']({'transports':[new winston_1['default'][(a225_0x42e8('0x3'))][(a225_0x42e8('0x4'))]({'level':process['env'][a225_0x42e8('0x5')]===a225_0x42e8('0x6')?'error':a225_0x42e8('0x7')}),new winston_1[(a225_0x42e8('0x8'))][(a225_0x42e8('0x3'))][(a225_0x42e8('0x9'))]({'filename':a225_0x42e8('0xa'),'level':a225_0x42e8('0x7')})]});if(process[a225_0x42e8('0xb')][a225_0x42e8('0x5')]!=='production'){logger[a225_0x42e8('0x7')](a225_0x42e8('0xc'));}exports[a225_0x42e8('0x8')]=logger;