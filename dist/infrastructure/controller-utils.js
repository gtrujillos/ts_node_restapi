var a96_0x4797=['express','default','Router','../infrastructure/crud-utils','model','i18n','crudUtils','find','findById','bind','save','findOneAndUpdate','remove','findByUUId','update','findOrCreate','updateOrCreate','__importDefault','__esModule','defineProperty'];(function(_0x402a90,_0x8b6519){var _0x2ec3c9=function(_0x1d1462){while(--_0x1d1462){_0x402a90['push'](_0x402a90['shift']());}};_0x2ec3c9(++_0x8b6519);}(a96_0x4797,0xd9));var a96_0x51bf=function(_0x5b8052,_0x321697){_0x5b8052=_0x5b8052-0x0;var _0x50f7fb=a96_0x4797[_0x5b8052];return _0x50f7fb;};'use strict';var __importDefault=this&&this[a96_0x51bf('0x0')]||function(_0x538631){return _0x538631&&_0x538631[a96_0x51bf('0x1')]?_0x538631:{'default':_0x538631};};Object[a96_0x51bf('0x2')](exports,a96_0x51bf('0x1'),{'value':!![]});const express_1=__importDefault(require(a96_0x51bf('0x3')));const router=express_1[a96_0x51bf('0x4')][a96_0x51bf('0x5')]();const crud_utils_1=__importDefault(require(a96_0x51bf('0x6')));class ControllerUtils{constructor(_0x5abeb6,_0x49cda0){this[a96_0x51bf('0x7')]=_0x5abeb6;this[a96_0x51bf('0x8')]=_0x49cda0;this[a96_0x51bf('0x9')]=new crud_utils_1[(a96_0x51bf('0x4'))](_0x5abeb6,_0x49cda0);this[a96_0x51bf('0xa')]=this['find']['bind'](this);this[a96_0x51bf('0xb')]=this['findById'][a96_0x51bf('0xc')](this);this[a96_0x51bf('0xd')]=this['save'][a96_0x51bf('0xc')](this);this[a96_0x51bf('0xe')]=this[a96_0x51bf('0xe')][a96_0x51bf('0xc')](this);this[a96_0x51bf('0xf')]=this['remove']['bind'](this);}['find'](_0x27afd4,_0x115b93,_0x29af76,_0x3d7af4=![]){return this['crudUtils'][a96_0x51bf('0xa')](_0x27afd4,_0x115b93,_0x29af76,_0x3d7af4);}[a96_0x51bf('0xb')](_0x24c2e4,_0x12eda1,_0x488e0c){return this[a96_0x51bf('0x9')]['findById'](_0x24c2e4,_0x12eda1,_0x488e0c);}[a96_0x51bf('0x10')](_0x4f03c4,_0x56ea6d,_0x300461){return this[a96_0x51bf('0x9')][a96_0x51bf('0x10')](_0x4f03c4,_0x56ea6d,_0x300461);}[a96_0x51bf('0xd')](_0x5a2d51,_0xba481e,_0x13a763){return this[a96_0x51bf('0x9')]['save'](_0x5a2d51,_0xba481e,_0x13a763);}[a96_0x51bf('0xe')](_0x2cb7c1,_0x351c6d,_0x1fd37c){return this[a96_0x51bf('0x9')][a96_0x51bf('0xe')](_0x2cb7c1,_0x351c6d,_0x1fd37c);}[a96_0x51bf('0x11')](_0x406ffe,_0x463503,_0x12e7ff){return this['crudUtils'][a96_0x51bf('0xe')](_0x406ffe,_0x463503,_0x12e7ff);}[a96_0x51bf('0x12')](_0x2c36b8,_0x4ffd00,_0x525b3d){return this['crudUtils'][a96_0x51bf('0x12')](_0x2c36b8,_0x4ffd00,_0x525b3d);}[a96_0x51bf('0x13')](_0x18da9e,_0x31b9cc,_0x5d2231,_0x39807c=![]){return this[a96_0x51bf('0x9')][a96_0x51bf('0x13')](_0x18da9e,_0x31b9cc,_0x5d2231);}[a96_0x51bf('0xf')](_0x5b3c79,_0x1d9797,_0x1d5df0){return this[a96_0x51bf('0x9')][a96_0x51bf('0xf')](_0x5b3c79,_0x1d9797,_0x1d5df0);}}exports[a96_0x51bf('0x4')]=ControllerUtils;