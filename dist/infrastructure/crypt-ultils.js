var a208_0x1995=['validPassword','compareSync','default','defineProperty','__esModule','aes192','bcrypt','encrypt','createCipher','update','utf8','hex','final','decrypt','createDecipher','hashPassword','hashSync'];(function(_0xe5948d,_0x2d7e09){var _0x43a3e3=function(_0x3b1843){while(--_0x3b1843){_0xe5948d['push'](_0xe5948d['shift']());}};_0x43a3e3(++_0x2d7e09);}(a208_0x1995,0xcf));var a208_0x1a9c=function(_0x292326,_0x2ac641){_0x292326=_0x292326-0x0;var _0x176d48=a208_0x1995[_0x292326];return _0x176d48;};'use strict';Object[a208_0x1a9c('0x0')](exports,a208_0x1a9c('0x1'),{'value':!![]});const crypto=require('crypto'),algorithm=a208_0x1a9c('0x2'),password='W\x22GT6toXTn-1G<Qw+=zey;vB';const bcrypt=require(a208_0x1a9c('0x3'));class CryptUtils{static[a208_0x1a9c('0x4')](_0x2ad587){const _0x342601=crypto[a208_0x1a9c('0x5')](algorithm,password);let _0x51d4ef=_0x342601[a208_0x1a9c('0x6')](_0x2ad587,a208_0x1a9c('0x7'),a208_0x1a9c('0x8'));_0x51d4ef+=_0x342601[a208_0x1a9c('0x9')]('hex');return _0x51d4ef;}static[a208_0x1a9c('0xa')](_0x827900){const _0x33e574=crypto[a208_0x1a9c('0xb')](algorithm,password);let _0x2012a1=_0x33e574[a208_0x1a9c('0x6')](_0x827900,a208_0x1a9c('0x8'),a208_0x1a9c('0x7'));_0x2012a1+=_0x33e574['final'](a208_0x1a9c('0x7'));return _0x2012a1;}static[a208_0x1a9c('0xc')](_0x14c3d2){const _0x593262=bcrypt[a208_0x1a9c('0xd')](_0x14c3d2);return _0x593262;}static[a208_0x1a9c('0xe')](_0x436d6c,_0x489233){return bcrypt[a208_0x1a9c('0xf')](_0x489233,_0x436d6c);}}exports[a208_0x1a9c('0x10')]=CryptUtils;