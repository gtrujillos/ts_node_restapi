var a145_0x6866=['findOrCreate','updateOrCreate','__importDefault','__esModule','defineProperty','default','Router','../infrastructure/crud-utils','model','i18n','find','bind','findById','findByUuid','save','findOneAndUpdate','remove','count','crudUtils','length','include','findUuidAndUpdate','update'];(function(_0x8ae02c,_0x16f374){var _0x41d6e8=function(_0x1bcdcc){while(--_0x1bcdcc){_0x8ae02c['push'](_0x8ae02c['shift']());}};_0x41d6e8(++_0x16f374);}(a145_0x6866,0x1ce));var a145_0x45ef=function(_0x1ef9d2,_0x319a88){_0x1ef9d2=_0x1ef9d2-0x0;var _0x3b65bb=a145_0x6866[_0x1ef9d2];return _0x3b65bb;};'use strict';var __importDefault=this&&this[a145_0x45ef('0x0')]||function(_0xb5e79b){return _0xb5e79b&&_0xb5e79b[a145_0x45ef('0x1')]?_0xb5e79b:{'default':_0xb5e79b};};Object[a145_0x45ef('0x2')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require('express'));const router=express_1[a145_0x45ef('0x3')][a145_0x45ef('0x4')]();const crud_utils_1=__importDefault(require(a145_0x45ef('0x5')));class ControllerUtils{constructor(_0x1f5a58,_0x30392f){this['include']=[];this[a145_0x45ef('0x6')]=_0x1f5a58;this[a145_0x45ef('0x7')]=_0x30392f;this['crudUtils']=new crud_utils_1[(a145_0x45ef('0x3'))](_0x1f5a58,_0x30392f);this[a145_0x45ef('0x8')]=this[a145_0x45ef('0x8')][a145_0x45ef('0x9')](this);this[a145_0x45ef('0xa')]=this['findById']['bind'](this);this[a145_0x45ef('0xb')]=this['findByUuid'][a145_0x45ef('0x9')](this);this[a145_0x45ef('0xc')]=this[a145_0x45ef('0xc')][a145_0x45ef('0x9')](this);this[a145_0x45ef('0xd')]=this[a145_0x45ef('0xd')][a145_0x45ef('0x9')](this);this[a145_0x45ef('0xe')]=this[a145_0x45ef('0xe')][a145_0x45ef('0x9')](this);this[a145_0x45ef('0xf')]=this['count'][a145_0x45ef('0x9')](this);}[a145_0x45ef('0xf')](_0x3551fc,_0x5034a2,_0x2cbc65){return this[a145_0x45ef('0x10')][a145_0x45ef('0xf')](_0x3551fc,_0x5034a2,_0x2cbc65);}['find'](_0x1c6800,_0x3379a9,_0x2068f6,_0x21f0e2=![],_0x202296=[],_0x5690b5=null){if(_0x202296[a145_0x45ef('0x11')]==0x0&&this[a145_0x45ef('0x12')][a145_0x45ef('0x11')]>0x0){_0x202296=this[a145_0x45ef('0x12')];}return this['crudUtils']['find'](_0x1c6800,_0x3379a9,_0x2068f6,_0x21f0e2,_0x202296,_0x5690b5);}[a145_0x45ef('0xa')](_0x27bf02,_0xf12782,_0x35669d){return this[a145_0x45ef('0x10')]['findById'](_0x27bf02,_0xf12782,_0x35669d);}[a145_0x45ef('0xb')](_0x529665,_0x1bebe0,_0x100ebe){return this[a145_0x45ef('0x10')][a145_0x45ef('0xb')](_0x529665,_0x1bebe0,_0x100ebe);}['save'](_0x48a44b,_0x2aae8c,_0x85c9b9){return this[a145_0x45ef('0x10')]['save'](_0x48a44b,_0x2aae8c,_0x85c9b9);}[a145_0x45ef('0xd')](_0x1a816f,_0x13c4bc,_0x157c21){return this[a145_0x45ef('0x10')][a145_0x45ef('0xd')](_0x1a816f,_0x13c4bc,_0x157c21);}[a145_0x45ef('0x13')](_0x1b0a88,_0x2766ba,_0x4393b9){return this[a145_0x45ef('0x10')][a145_0x45ef('0x13')](_0x1b0a88,_0x2766ba,_0x4393b9);}[a145_0x45ef('0x14')](_0x5be85c,_0x38bdf8,_0x44fa06){return this[a145_0x45ef('0x10')][a145_0x45ef('0xd')](_0x5be85c,_0x38bdf8,_0x44fa06);}[a145_0x45ef('0x15')](_0x1c781d,_0x3469fd,_0x2207b7){return this[a145_0x45ef('0x10')][a145_0x45ef('0x15')](_0x1c781d,_0x3469fd,_0x2207b7);}[a145_0x45ef('0x16')](_0x127a4b,_0x2887ba,_0x31e377,_0x36ba28=![]){return this[a145_0x45ef('0x10')]['updateOrCreate'](_0x127a4b,_0x2887ba,_0x31e377);}[a145_0x45ef('0xe')](_0x1fae9f,_0x32388a,_0x501574){return this[a145_0x45ef('0x10')][a145_0x45ef('0xe')](_0x1fae9f,_0x32388a,_0x501574);}}exports[a145_0x45ef('0x3')]=ControllerUtils;