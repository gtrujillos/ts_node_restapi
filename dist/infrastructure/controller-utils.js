var a104_0xc086=['findOrCreate','updateOrCreate','__importDefault','__esModule','defineProperty','express','default','../infrastructure/crud-utils','crudUtils','find','bind','findById','save','findOneAndUpdate','remove','count','findByUUId','update'];(function(_0x3e9d7e,_0x184b95){var _0x312741=function(_0x4152cf){while(--_0x4152cf){_0x3e9d7e['push'](_0x3e9d7e['shift']());}};_0x312741(++_0x184b95);}(a104_0xc086,0x1b2));var a104_0xc6ec=function(_0x4b219f,_0x2323db){_0x4b219f=_0x4b219f-0x0;var _0x25a9f1=a104_0xc086[_0x4b219f];return _0x25a9f1;};'use strict';var __importDefault=this&&this[a104_0xc6ec('0x0')]||function(_0x492b5a){return _0x492b5a&&_0x492b5a[a104_0xc6ec('0x1')]?_0x492b5a:{'default':_0x492b5a};};Object[a104_0xc6ec('0x2')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a104_0xc6ec('0x3')));const router=express_1[a104_0xc6ec('0x4')]['Router']();const crud_utils_1=__importDefault(require(a104_0xc6ec('0x5')));class ControllerUtils{constructor(_0x39d0ce,_0x42ed2c){this['model']=_0x39d0ce;this['i18n']=_0x42ed2c;this[a104_0xc6ec('0x6')]=new crud_utils_1[(a104_0xc6ec('0x4'))](_0x39d0ce,_0x42ed2c);this[a104_0xc6ec('0x7')]=this[a104_0xc6ec('0x7')][a104_0xc6ec('0x8')](this);this[a104_0xc6ec('0x9')]=this[a104_0xc6ec('0x9')][a104_0xc6ec('0x8')](this);this[a104_0xc6ec('0xa')]=this[a104_0xc6ec('0xa')][a104_0xc6ec('0x8')](this);this[a104_0xc6ec('0xb')]=this[a104_0xc6ec('0xb')][a104_0xc6ec('0x8')](this);this[a104_0xc6ec('0xc')]=this[a104_0xc6ec('0xc')]['bind'](this);this[a104_0xc6ec('0xd')]=this['count']['bind'](this);}[a104_0xc6ec('0xd')](_0x1a49fa,_0x5ac2f4,_0xa610b2){return this[a104_0xc6ec('0x6')][a104_0xc6ec('0xd')](_0x1a49fa,_0x5ac2f4,_0xa610b2);}[a104_0xc6ec('0x7')](_0x221756,_0x23493f,_0x1c4288,_0x1a35bc=![],_0x6647c4=[],_0x426773=null){return this['crudUtils']['find'](_0x221756,_0x23493f,_0x1c4288,_0x1a35bc,_0x6647c4,_0x426773);}[a104_0xc6ec('0x9')](_0x4d4d56,_0x16e608,_0x4fb3f2){return this[a104_0xc6ec('0x6')][a104_0xc6ec('0x9')](_0x4d4d56,_0x16e608,_0x4fb3f2);}[a104_0xc6ec('0xe')](_0x2f92aa,_0xaed1fd,_0x203330){return this[a104_0xc6ec('0x6')][a104_0xc6ec('0xe')](_0x2f92aa,_0xaed1fd,_0x203330);}[a104_0xc6ec('0xa')](_0x51cd2c,_0x1c1d2e,_0x53f9ec){return this[a104_0xc6ec('0x6')][a104_0xc6ec('0xa')](_0x51cd2c,_0x1c1d2e,_0x53f9ec);}[a104_0xc6ec('0xb')](_0x38eb1f,_0x5d99f1,_0x7556c4){return this[a104_0xc6ec('0x6')]['findOneAndUpdate'](_0x38eb1f,_0x5d99f1,_0x7556c4);}[a104_0xc6ec('0xf')](_0x276909,_0x4f0f6c,_0x377459){return this['crudUtils'][a104_0xc6ec('0xb')](_0x276909,_0x4f0f6c,_0x377459);}[a104_0xc6ec('0x10')](_0x5d4dfa,_0x4e66da,_0x14b716){return this[a104_0xc6ec('0x6')]['findOrCreate'](_0x5d4dfa,_0x4e66da,_0x14b716);}[a104_0xc6ec('0x11')](_0xa8e754,_0x3eef18,_0x1373b4,_0x4b0876=![]){return this[a104_0xc6ec('0x6')]['updateOrCreate'](_0xa8e754,_0x3eef18,_0x1373b4);}['remove'](_0x151ce2,_0x35a25b,_0x561c7d){return this[a104_0xc6ec('0x6')][a104_0xc6ec('0xc')](_0x151ce2,_0x35a25b,_0x561c7d);}}exports[a104_0xc6ec('0x4')]=ControllerUtils;