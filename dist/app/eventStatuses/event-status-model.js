var a76_0x5700=['__importDefault','defineProperty','__esModule','../../infrastructure/model-base','default','bind','import','then','create','Abierto','Cerrado','log'];(function(_0x45658b,_0xa6ed42){var _0x51c273=function(_0x5a2c04){while(--_0x5a2c04){_0x45658b['push'](_0x45658b['shift']());}};_0x51c273(++_0xa6ed42);}(a76_0x5700,0x108));var a76_0x5c8e=function(_0xf27b22,_0x1802eb){_0xf27b22=_0xf27b22-0x0;var _0x2c244d=a76_0x5700[_0xf27b22];return _0x2c244d;};'use strict';var __importDefault=this&&this[a76_0x5c8e('0x0')]||function(_0x4a7a36){return _0x4a7a36&&_0x4a7a36['__esModule']?_0x4a7a36:{'default':_0x4a7a36};};Object[a76_0x5c8e('0x1')](exports,a76_0x5c8e('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a76_0x5c8e('0x3')));class EventStatusModel extends model_base_1[a76_0x5c8e('0x4')]{constructor(_0xb41c52,_0x249158,_0x3aef71){super(_0x3aef71);const _0x18df1d=function(_0xb41c52){const _0x1edf91={'name':{'type':sequelize_1['default']['STRING']}};const _0x18df1d=this['getEntity'](_0xb41c52,_0x249158,_0x1edf91);return _0x18df1d;}[a76_0x5c8e('0x5')](this);const _0xe1da49=_0xb41c52[a76_0x5c8e('0x6')](_0x249158,_0x18df1d);_0xe1da49['count']()[a76_0x5c8e('0x7')](_0x48b978=>{if(_0x48b978==0x0){_0xe1da49['sync']()['then'](()=>{_0xe1da49[a76_0x5c8e('0x8')]({'name':a76_0x5c8e('0x9')});_0xe1da49[a76_0x5c8e('0x8')]({'name':a76_0x5c8e('0xa')});});console[a76_0x5c8e('0xb')]('Event\x20status\x20populated');}});return _0xe1da49;}}exports[a76_0x5c8e('0x4')]=EventStatusModel;