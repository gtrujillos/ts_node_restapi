var a206_0xe11e=['default','defineProperty','__esModule','crypto','aes-256-ctr','d6F3Efeq','encrypt','createCipher','utf8','hex','final','createDecipher','update'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a206_0xe11e,0x1a1));var a206_0x317f=function(_0x351e94,_0x81b7de){_0x351e94=_0x351e94-0x0;var _0x151cf7=a206_0xe11e[_0x351e94];return _0x151cf7;};'use strict';Object[a206_0x317f('0x0')](exports,a206_0x317f('0x1'),{'value':!![]});const crypto=require(a206_0x317f('0x2')),algorithm=a206_0x317f('0x3'),password=a206_0x317f('0x4');class CryptUtils{[a206_0x317f('0x5')](_0x5467c3){const _0x173226=crypto[a206_0x317f('0x6')](algorithm,password);let _0x53025a=_0x173226['update'](_0x5467c3,a206_0x317f('0x7'),a206_0x317f('0x8'));_0x53025a+=_0x173226[a206_0x317f('0x9')]('hex');return _0x53025a;}['decrypt'](_0x3b7998){const _0x2a5655=crypto[a206_0x317f('0xa')](algorithm,password);let _0x355ebf=_0x2a5655[a206_0x317f('0xb')](_0x3b7998,a206_0x317f('0x8'),'utf8');_0x355ebf+=_0x2a5655['final'](a206_0x317f('0x7'));return _0x355ebf;}}exports[a206_0x317f('0xc')]=CryptUtils;