var a97_0x3c82=['exports','authenticate','jwt','user','genSaltSync','passport','bcrypt-nodejs'];(function(_0x45658b,_0xa6ed42){var _0x51c273=function(_0x5a2c04){while(--_0x5a2c04){_0x45658b['push'](_0x45658b['shift']());}};_0x51c273(++_0xa6ed42);}(a97_0x3c82,0x12b));var a97_0xa087=function(_0x4d6132,_0x208412){_0x4d6132=_0x4d6132-0x0;var _0xd90d16=a97_0x3c82[_0x4d6132];return _0xd90d16;};let passport=require(a97_0xa087('0x0'));let bcrypt=require(a97_0xa087('0x1'));module[a97_0xa087('0x2')]={'isLoggedIn':function(_0x6e77c2,_0x230109,_0x4c9db8){passport[a97_0xa087('0x3')](a97_0xa087('0x4'),function(_0x16d43f,_0x3e08c5,_0x296519){if(_0x16d43f){return _0x4c9db8(_0x16d43f);}if(_0x3e08c5){_0x6e77c2[a97_0xa087('0x5')]=_0x3e08c5;}return _0x4c9db8(null,_0x3e08c5);})(_0x6e77c2,_0x230109,_0x4c9db8);},'generateHash':function(_0x306cc8){return bcrypt['hashSync'](_0x306cc8,bcrypt[a97_0xa087('0x6')](0x8),null);},'validPassword':function(_0x35bc5f,_0x1dcb08){return bcrypt['compareSync'](_0x35bc5f,_0x1dcb08);}};