var a204_0x51c8=['i18n','crudUtils','find','bind','findById','findByUuid','save','findOneAndUpdate','remove','count','length','findUuidAndUpdate','update','findOrCreate','updateOrCreate','__importDefault','__esModule','defineProperty','express','default','Router','../infrastructure/crud-utils','include','model'];(function(_0x42b813,_0x392920){var _0x112a4b=function(_0x55ce86){while(--_0x55ce86){_0x42b813['push'](_0x42b813['shift']());}};_0x112a4b(++_0x392920);}(a204_0x51c8,0x1a7));var a204_0x340c=function(_0x5e1e7b,_0x54b5bc){_0x5e1e7b=_0x5e1e7b-0x0;var _0x5f1b52=a204_0x51c8[_0x5e1e7b];return _0x5f1b52;};'use strict';var __importDefault=this&&this[a204_0x340c('0x0')]||function(_0x3ff629){return _0x3ff629&&_0x3ff629[a204_0x340c('0x1')]?_0x3ff629:{'default':_0x3ff629};};Object[a204_0x340c('0x2')](exports,a204_0x340c('0x1'),{'value':!![]});const express_1=__importDefault(require(a204_0x340c('0x3')));const router=express_1[a204_0x340c('0x4')][a204_0x340c('0x5')]();const crud_utils_1=__importDefault(require(a204_0x340c('0x6')));class ControllerUtils{constructor(_0xd65cd8,_0x4e4de8){this[a204_0x340c('0x7')]=[];this[a204_0x340c('0x8')]=_0xd65cd8;this[a204_0x340c('0x9')]=_0x4e4de8;this[a204_0x340c('0xa')]=new crud_utils_1['default'](_0xd65cd8,_0x4e4de8);this[a204_0x340c('0xb')]=this[a204_0x340c('0xb')][a204_0x340c('0xc')](this);this[a204_0x340c('0xd')]=this['findById'][a204_0x340c('0xc')](this);this[a204_0x340c('0xe')]=this[a204_0x340c('0xe')]['bind'](this);this[a204_0x340c('0xf')]=this[a204_0x340c('0xf')][a204_0x340c('0xc')](this);this[a204_0x340c('0x10')]=this['findOneAndUpdate'][a204_0x340c('0xc')](this);this[a204_0x340c('0x11')]=this[a204_0x340c('0x11')]['bind'](this);this['count']=this[a204_0x340c('0x12')][a204_0x340c('0xc')](this);}[a204_0x340c('0x12')](_0x5f2d4c,_0x30ebc3,_0x56ed6d){return this[a204_0x340c('0xa')]['count'](_0x5f2d4c,_0x30ebc3,_0x56ed6d);}['find'](_0x3fdf0a,_0x34385c,_0x2e0f95,_0x1ab8ae=![],_0x26b40f=[],_0x41d63f=null){if(_0x26b40f[a204_0x340c('0x13')]==0x0&&this[a204_0x340c('0x7')][a204_0x340c('0x13')]>0x0){_0x26b40f=this['include'];}return this[a204_0x340c('0xa')][a204_0x340c('0xb')](_0x3fdf0a,_0x34385c,_0x2e0f95,_0x1ab8ae,_0x26b40f,_0x41d63f);}[a204_0x340c('0xd')](_0x596430,_0x1d4216,_0x3be888){return this['crudUtils'][a204_0x340c('0xd')](_0x596430,_0x1d4216,_0x3be888);}[a204_0x340c('0xe')](_0x15f457,_0x4e01fa,_0x15bd81){return this[a204_0x340c('0xa')]['findByUuid'](_0x15f457,_0x4e01fa,_0x15bd81);}[a204_0x340c('0xf')](_0x16cd7c,_0x50199f,_0x532662){return this[a204_0x340c('0xa')]['save'](_0x16cd7c,_0x50199f,_0x532662);}[a204_0x340c('0x10')](_0x2d0b3a,_0x438902,_0x5d6ff4){return this[a204_0x340c('0xa')]['findOneAndUpdate'](_0x2d0b3a,_0x438902,_0x5d6ff4);}[a204_0x340c('0x14')](_0x436081,_0x24c66b,_0x26b1a8){return this['crudUtils']['findUuidAndUpdate'](_0x436081,_0x24c66b,_0x26b1a8);}[a204_0x340c('0x15')](_0x38705c,_0x3fa519,_0x2d0371){return this[a204_0x340c('0xa')][a204_0x340c('0x10')](_0x38705c,_0x3fa519,_0x2d0371);}[a204_0x340c('0x16')](_0x4e0b81,_0x1d192c,_0x4fa3c5){return this['crudUtils'][a204_0x340c('0x16')](_0x4e0b81,_0x1d192c,_0x4fa3c5);}[a204_0x340c('0x17')](_0x265d86,_0x4a277c,_0x1536f1,_0x1d0556=![]){return this[a204_0x340c('0xa')]['updateOrCreate'](_0x265d86,_0x4a277c,_0x1536f1);}[a204_0x340c('0x11')](_0x512437,_0x4587c5,_0xd16da5){return this[a204_0x340c('0xa')][a204_0x340c('0x11')](_0x512437,_0x4587c5,_0xd16da5);}}exports[a204_0x340c('0x4')]=ControllerUtils;