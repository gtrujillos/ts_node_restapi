var a110_0x3aec=['default','transports','env','NODE_ENV','production','error','debug','File','debug.log','Logging\x20initialized\x20at\x20debug\x20level','__importDefault','__esModule','winston','Logger'];(function(_0x147779,_0x15ca3a){var _0xb66e18=function(_0x3af634){while(--_0x3af634){_0x147779['push'](_0x147779['shift']());}};_0xb66e18(++_0x15ca3a);}(a110_0x3aec,0x15a));var a110_0x1e4e=function(_0x556662,_0x3b2f67){_0x556662=_0x556662-0x0;var _0xd0377f=a110_0x3aec[_0x556662];return _0xd0377f;};'use strict';var __importDefault=this&&this[a110_0x1e4e('0x0')]||function(_0x44f676){return _0x44f676&&_0x44f676[a110_0x1e4e('0x1')]?_0x44f676:{'default':_0x44f676};};Object['defineProperty'](exports,a110_0x1e4e('0x1'),{'value':!![]});const winston_1=__importDefault(require('winston'));const winston_2=require(a110_0x1e4e('0x2'));const logger=new winston_2[(a110_0x1e4e('0x3'))]({'transports':[new winston_1[(a110_0x1e4e('0x4'))][(a110_0x1e4e('0x5'))]['Console']({'level':process[a110_0x1e4e('0x6')][a110_0x1e4e('0x7')]===a110_0x1e4e('0x8')?a110_0x1e4e('0x9'):a110_0x1e4e('0xa')}),new winston_1['default'][(a110_0x1e4e('0x5'))][(a110_0x1e4e('0xb'))]({'filename':a110_0x1e4e('0xc'),'level':a110_0x1e4e('0xa')})]});if(process['env']['NODE_ENV']!=='production'){logger['debug'](a110_0x1e4e('0xd'));}exports['default']=logger;