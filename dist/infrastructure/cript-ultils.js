var a206_0x382a=['createCipher','update','hex','decrypt','createDecipher','utf8','final','default','defineProperty','__esModule','aes-256-ctr','d6F3Efeq'];(function(_0x83f8ac,_0x8f4ca0){var _0x508b06=function(_0x287c3f){while(--_0x287c3f){_0x83f8ac['push'](_0x83f8ac['shift']());}};_0x508b06(++_0x8f4ca0);}(a206_0x382a,0x1ac));var a206_0x53af=function(_0x7424a3,_0x3c60f4){_0x7424a3=_0x7424a3-0x0;var _0x530f1b=a206_0x382a[_0x7424a3];return _0x530f1b;};'use strict';Object[a206_0x53af('0x0')](exports,a206_0x53af('0x1'),{'value':!![]});const crypto=require('crypto'),algorithm=a206_0x53af('0x2'),password=a206_0x53af('0x3');class CryptUtils{['encrypt'](_0x14c258){const _0x18a2c3=crypto[a206_0x53af('0x4')](algorithm,password);let _0x317d6d=_0x18a2c3[a206_0x53af('0x5')](_0x14c258,'utf8','hex');_0x317d6d+=_0x18a2c3['final'](a206_0x53af('0x6'));return _0x317d6d;}[a206_0x53af('0x7')](_0x4b5e27){const _0x449e10=crypto[a206_0x53af('0x8')](algorithm,password);let _0xeadc54=_0x449e10[a206_0x53af('0x5')](_0x4b5e27,'hex',a206_0x53af('0x9'));_0xeadc54+=_0x449e10[a206_0x53af('0xa')](a206_0x53af('0x9'));return _0xeadc54;}}exports[a206_0x53af('0xb')]=CryptUtils;