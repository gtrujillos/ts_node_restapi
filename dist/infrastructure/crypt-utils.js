var a209_0x2f66=['encrypt','utf8','hex','final','decrypt','createDecipher','update','hashPassword','hashSync','validPassword','compareSync','default','defineProperty','__esModule','crypto','W\x22GT6toXTn-1G<Qw+=zey;vB','bcrypt'];(function(_0x222859,_0x4eede1){var _0x152692=function(_0x257fb9){while(--_0x257fb9){_0x222859['push'](_0x222859['shift']());}};_0x152692(++_0x4eede1);}(a209_0x2f66,0xb6));var a209_0x4c71=function(_0x40f17f,_0x53e585){_0x40f17f=_0x40f17f-0x0;var _0x3b3208=a209_0x2f66[_0x40f17f];return _0x3b3208;};'use strict';Object[a209_0x4c71('0x0')](exports,a209_0x4c71('0x1'),{'value':!![]});const crypto=require(a209_0x4c71('0x2')),algorithm='aes192',password=a209_0x4c71('0x3');const bcrypt=require(a209_0x4c71('0x4'));const saltRounds=0xa;class CryptUtils{static[a209_0x4c71('0x5')](_0x5ee9b3){const _0x210e4e=crypto['createCipher'](algorithm,password);let _0x50173c=_0x210e4e['update'](_0x5ee9b3,a209_0x4c71('0x6'),a209_0x4c71('0x7'));_0x50173c+=_0x210e4e[a209_0x4c71('0x8')](a209_0x4c71('0x7'));return _0x50173c;}static[a209_0x4c71('0x9')](_0xe148c2){const _0x57408e=crypto[a209_0x4c71('0xa')](algorithm,password);let _0x199ee0=_0x57408e[a209_0x4c71('0xb')](_0xe148c2,a209_0x4c71('0x7'),a209_0x4c71('0x6'));_0x199ee0+=_0x57408e['final']('utf8');return _0x199ee0;}static[a209_0x4c71('0xc')](_0xf2f327){const _0x79c81b=bcrypt[a209_0x4c71('0xd')](_0xf2f327,saltRounds);return _0x79c81b;}static[a209_0x4c71('0xe')](_0x111631,_0x2b80aa){return bcrypt[a209_0x4c71('0xf')](_0x111631,_0x2b80aa);}}exports[a209_0x4c71('0x10')]=CryptUtils;