var a103_0x3c82=['exports','authenticate','jwt','user','genSaltSync','passport','bcrypt-nodejs'];(function(_0x120697,_0x48cf3a){var _0x37cac6=function(_0x2b2460){while(--_0x2b2460){_0x120697['push'](_0x120697['shift']());}};_0x37cac6(++_0x48cf3a);}(a103_0x3c82,0x12b));var a103_0xa087=function(_0x1fe358,_0x3b8c1a){_0x1fe358=_0x1fe358-0x0;var _0x4941e2=a103_0x3c82[_0x1fe358];return _0x4941e2;};let passport=require(a103_0xa087('0x0'));let bcrypt=require(a103_0xa087('0x1'));module[a103_0xa087('0x2')]={'isLoggedIn':function(_0x6e77c2,_0x230109,_0x4c9db8){passport[a103_0xa087('0x3')](a103_0xa087('0x4'),function(_0x16d43f,_0x3e08c5,_0x296519){if(_0x16d43f){return _0x4c9db8(_0x16d43f);}if(_0x3e08c5){_0x6e77c2[a103_0xa087('0x5')]=_0x3e08c5;}return _0x4c9db8(null,_0x3e08c5);})(_0x6e77c2,_0x230109,_0x4c9db8);},'generateHash':function(_0x306cc8){return bcrypt['hashSync'](_0x306cc8,bcrypt[a103_0xa087('0x6')](0x8),null);},'validPassword':function(_0x35bc5f,_0x1dcb08){return bcrypt['compareSync'](_0x35bc5f,_0x1dcb08);}};