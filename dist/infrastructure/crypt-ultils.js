var a208_0x3674=['defineProperty','__esModule','crypto','encrypt','createCipher','update','hex','createDecipher','utf8','hashPassword','validPassword'];(function(_0x151408,_0x18e524){var _0x22a1b7=function(_0x1b570a){while(--_0x1b570a){_0x151408['push'](_0x151408['shift']());}};_0x22a1b7(++_0x18e524);}(a208_0x3674,0x134));var a208_0x1979=function(_0x1bcfa4,_0x5af46f){_0x1bcfa4=_0x1bcfa4-0x0;var _0x4fc2b2=a208_0x3674[_0x1bcfa4];return _0x4fc2b2;};'use strict';Object[a208_0x1979('0x0')](exports,a208_0x1979('0x1'),{'value':!![]});const crypto=require(a208_0x1979('0x2')),algorithm='aes192',password='W\x22GT6toXTn-1G<Qw+=zey;vB';const bcrypt=require('bcrypt');class CryptUtils{static[a208_0x1979('0x3')](_0x33d9ae){const _0x30558d=crypto[a208_0x1979('0x4')](algorithm,password);let _0x464e49=_0x30558d[a208_0x1979('0x5')](_0x33d9ae,'utf8',a208_0x1979('0x6'));_0x464e49+=_0x30558d['final'](a208_0x1979('0x6'));return _0x464e49;}static['decrypt'](_0xa644a2){const _0x1f39d3=crypto[a208_0x1979('0x7')](algorithm,password);let _0x11b6b8=_0x1f39d3['update'](_0xa644a2,a208_0x1979('0x6'),a208_0x1979('0x8'));_0x11b6b8+=_0x1f39d3['final']('utf8');return _0x11b6b8;}static[a208_0x1979('0x9')](_0x417bc4){const _0x5e5b46=bcrypt['hashSync'](_0x417bc4);return _0x5e5b46;}static[a208_0x1979('0xa')](_0x2e2933,_0x2ed6ec){return bcrypt['compareSync'](_0x2ed6ec,_0x2e2933);}}exports['default']=CryptUtils;