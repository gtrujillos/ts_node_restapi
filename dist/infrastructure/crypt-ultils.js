var a208_0x4252=['default','defineProperty','__esModule','crypto','aes192','W\x22GT6toXTn-1G<Qw+=zey;vB','bcrypt','encrypt','update','utf8','final','decrypt','createDecipher','hex','hashPassword','hashSync','validPassword','compareSync'];(function(_0x3614fe,_0x2bb4a9){var _0x34897d=function(_0x5301c4){while(--_0x5301c4){_0x3614fe['push'](_0x3614fe['shift']());}};_0x34897d(++_0x2bb4a9);}(a208_0x4252,0xd9));var a208_0x2041=function(_0xfefb46,_0xd50379){_0xfefb46=_0xfefb46-0x0;var _0x200d5c=a208_0x4252[_0xfefb46];return _0x200d5c;};'use strict';Object[a208_0x2041('0x0')](exports,a208_0x2041('0x1'),{'value':!![]});const crypto=require(a208_0x2041('0x2')),algorithm=a208_0x2041('0x3'),password=a208_0x2041('0x4');const bcrypt=require(a208_0x2041('0x5'));class CryptUtils{static[a208_0x2041('0x6')](_0x45475b){const _0x229d79=crypto['createCipher'](algorithm,password);let _0x31679f=_0x229d79[a208_0x2041('0x7')](_0x45475b,a208_0x2041('0x8'),'hex');_0x31679f+=_0x229d79[a208_0x2041('0x9')]('hex');return _0x31679f;}static[a208_0x2041('0xa')](_0xf26e2d){const _0x523833=crypto[a208_0x2041('0xb')](algorithm,password);let _0x3b71e5=_0x523833['update'](_0xf26e2d,a208_0x2041('0xc'),a208_0x2041('0x8'));_0x3b71e5+=_0x523833['final'](a208_0x2041('0x8'));return _0x3b71e5;}static[a208_0x2041('0xd')](_0x800850){const _0x33e00a=bcrypt[a208_0x2041('0xe')](_0x800850);return _0x33e00a;}static[a208_0x2041('0xf')](_0x356ad8,_0x2cd27d){return bcrypt[a208_0x2041('0x10')](_0x2cd27d,_0x356ad8);}}exports[a208_0x2041('0x11')]=CryptUtils;