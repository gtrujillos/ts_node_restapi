var a209_0x5e90=['decrypt','createDecipher','utf8','hashPassword','hashSync','compareSync','defineProperty','crypto','aes192','bcryptjs','encrypt','createCipher','update'];(function(_0x323e47,_0x10aea3){var _0x55f925=function(_0x16c8f4){while(--_0x16c8f4){_0x323e47['push'](_0x323e47['shift']());}};_0x55f925(++_0x10aea3);}(a209_0x5e90,0x117));var a209_0x43c4=function(_0x558c90,_0x267c49){_0x558c90=_0x558c90-0x0;var _0x43c629=a209_0x5e90[_0x558c90];return _0x43c629;};'use strict';Object[a209_0x43c4('0x0')](exports,'__esModule',{'value':!![]});const crypto=require(a209_0x43c4('0x1')),algorithm=a209_0x43c4('0x2'),password='W\x22GT6toXTn-1G<Qw+=zey;vB';const bcrypt=require(a209_0x43c4('0x3'));const saltRounds=0xa;class CryptUtils{static[a209_0x43c4('0x4')](_0x5d3c0b){const _0x25088e=crypto[a209_0x43c4('0x5')](algorithm,password);let _0x1ef80f=_0x25088e[a209_0x43c4('0x6')](_0x5d3c0b,'utf8','hex');_0x1ef80f+=_0x25088e['final']('hex');return _0x1ef80f;}static[a209_0x43c4('0x7')](_0x5715b3){const _0x183cc9=crypto[a209_0x43c4('0x8')](algorithm,password);let _0x546b7c=_0x183cc9[a209_0x43c4('0x6')](_0x5715b3,'hex',a209_0x43c4('0x9'));_0x546b7c+=_0x183cc9['final'](a209_0x43c4('0x9'));return _0x546b7c;}static[a209_0x43c4('0xa')](_0x4f424f){const _0x4eb497=bcrypt[a209_0x43c4('0xb')](_0x4f424f,saltRounds);return _0x4eb497;}static['validPassword'](_0xc0fccf,_0x403095){return bcrypt[a209_0x43c4('0xc')](_0xc0fccf,_0x403095);}}exports['default']=CryptUtils;