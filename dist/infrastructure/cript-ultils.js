var a206_0x5239=['encrypt','createCipher','update','utf8','hex','final','decrypt','aes-256-ctr'];(function(_0x4160a7,_0x33389a){var _0xbf97d9=function(_0x43fce0){while(--_0x43fce0){_0x4160a7['push'](_0x4160a7['shift']());}};_0xbf97d9(++_0x33389a);}(a206_0x5239,0x157));var a206_0x2b31=function(_0x55bd2c,_0x319a2d){_0x55bd2c=_0x55bd2c-0x0;var _0x25e8d2=a206_0x5239[_0x55bd2c];return _0x25e8d2;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const crypto=require('crypto'),algorithm=a206_0x2b31('0x0'),password='d6F3Efeq';class CryptUtils{[a206_0x2b31('0x1')](_0x10188e){const _0x2ab4f9=crypto[a206_0x2b31('0x2')](algorithm,password);let _0x4df6ed=_0x2ab4f9[a206_0x2b31('0x3')](_0x10188e,a206_0x2b31('0x4'),a206_0x2b31('0x5'));_0x4df6ed+=_0x2ab4f9[a206_0x2b31('0x6')](a206_0x2b31('0x5'));return _0x4df6ed;}[a206_0x2b31('0x7')](_0x4dc4a0){const _0x5db215=crypto['createDecipher'](algorithm,password);let _0x17257d=_0x5db215['update'](_0x4dc4a0,'hex',a206_0x2b31('0x4'));_0x17257d+=_0x5db215['final'](a206_0x2b31('0x4'));return _0x17257d;}}exports['default']=CryptUtils;