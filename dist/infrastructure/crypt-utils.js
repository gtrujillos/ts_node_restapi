var a187_0x5b78=['final','decrypt','createDecipher','replace','salt','hashSync','validPassword','compareSync','defineProperty','__esModule','crypto','aes192','W\x22GT6toXTn-1G<Qw+=zey;vB','bcryptjs','encrypt','update','utf8','hex'];(function(_0x3d72e1,_0x450ef3){var _0x4264ae=function(_0x8d90ec){while(--_0x8d90ec){_0x3d72e1['push'](_0x3d72e1['shift']());}};_0x4264ae(++_0x450ef3);}(a187_0x5b78,0xbc));var a187_0x48b3=function(_0x1a96c4,_0x31305f){_0x1a96c4=_0x1a96c4-0x0;var _0x3694ce=a187_0x5b78[_0x1a96c4];return _0x3694ce;};'use strict';Object[a187_0x48b3('0x0')](exports,a187_0x48b3('0x1'),{'value':!![]});const crypto=require(a187_0x48b3('0x2')),algorithm=a187_0x48b3('0x3'),password=a187_0x48b3('0x4');const bcrypt=require(a187_0x48b3('0x5'));const saltRounds=0xa;class CryptUtils{static[a187_0x48b3('0x6')](_0x50bbab){try{const _0x457838=crypto['createCipher'](algorithm,password);let _0x429467=_0x457838[a187_0x48b3('0x7')](_0x50bbab+CryptUtils['salt'],a187_0x48b3('0x8'),a187_0x48b3('0x9'));_0x429467+=_0x457838[a187_0x48b3('0xa')]('hex');return _0x429467;}catch(_0x2f6513){return null;}}static[a187_0x48b3('0xb')](_0xdd8afa){try{const _0x3156f8=crypto[a187_0x48b3('0xc')](algorithm,password);let _0x9c50d9=_0x3156f8[a187_0x48b3('0x7')](_0xdd8afa,a187_0x48b3('0x9'),'utf8');_0x9c50d9+=_0x3156f8['final'](a187_0x48b3('0x8'));_0x9c50d9=_0x9c50d9[a187_0x48b3('0xd')](CryptUtils[a187_0x48b3('0xe')],'');return _0x9c50d9;}catch(_0x142141){return null;}}static['hashPassword'](_0x5dbcb8){const _0x13acd7=bcrypt[a187_0x48b3('0xf')](_0x5dbcb8,saltRounds);return _0x13acd7;}static[a187_0x48b3('0x10')](_0x4bc1b1,_0x2e7d21){return _0x2e7d21==''&&_0x4bc1b1==_0x2e7d21?!![]:bcrypt[a187_0x48b3('0x11')](_0x4bc1b1,_0x2e7d21);}}exports['default']=CryptUtils;CryptUtils[a187_0x48b3('0xe')]='';