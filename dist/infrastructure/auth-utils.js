var a97_0x314e=['jwt','user','genSaltSync','bcrypt-nodejs','exports'];(function(_0x2db45a,_0x3353d3){var _0x4766e1=function(_0x5315d4){while(--_0x5315d4){_0x2db45a['push'](_0x2db45a['shift']());}};_0x4766e1(++_0x3353d3);}(a97_0x314e,0x1c0));var a97_0xb708=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a97_0x314e[_0x2f3e31];return _0x2c6db2;};let passport=require('passport');let bcrypt=require(a97_0xb708('0x0'));module[a97_0xb708('0x1')]={'isLoggedIn':function(_0xbc4b31,_0x17e825,_0x7d3335){passport['authenticate'](a97_0xb708('0x2'),function(_0x3df5cd,_0x2c4df0,_0x4548da){if(_0x3df5cd){return _0x7d3335(_0x3df5cd);}if(_0x2c4df0){_0xbc4b31[a97_0xb708('0x3')]=_0x2c4df0;}return _0x7d3335(null,_0x2c4df0);})(_0xbc4b31,_0x17e825,_0x7d3335);},'generateHash':function(_0x14fedc){return bcrypt['hashSync'](_0x14fedc,bcrypt[a97_0xb708('0x4')](0x8),null);},'validPassword':function(_0x518dc6,_0x1b7cc7){return bcrypt['compareSync'](_0x518dc6,_0x1b7cc7);}};