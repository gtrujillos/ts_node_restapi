var a96_0x3c82=['exports','authenticate','jwt','user','genSaltSync','passport','bcrypt-nodejs'];(function(_0x418981,_0x312418){var _0x513c8c=function(_0x4f86ee){while(--_0x4f86ee){_0x418981['push'](_0x418981['shift']());}};_0x513c8c(++_0x312418);}(a96_0x3c82,0x12b));var a96_0xa087=function(_0x44409b,_0x465e5e){_0x44409b=_0x44409b-0x0;var _0xf2ab43=a96_0x3c82[_0x44409b];return _0xf2ab43;};let passport=require(a96_0xa087('0x0'));let bcrypt=require(a96_0xa087('0x1'));module[a96_0xa087('0x2')]={'isLoggedIn':function(_0x6e77c2,_0x230109,_0x4c9db8){passport[a96_0xa087('0x3')](a96_0xa087('0x4'),function(_0x16d43f,_0x3e08c5,_0x296519){if(_0x16d43f){return _0x4c9db8(_0x16d43f);}if(_0x3e08c5){_0x6e77c2[a96_0xa087('0x5')]=_0x3e08c5;}return _0x4c9db8(null,_0x3e08c5);})(_0x6e77c2,_0x230109,_0x4c9db8);},'generateHash':function(_0x306cc8){return bcrypt['hashSync'](_0x306cc8,bcrypt[a96_0xa087('0x6')](0x8),null);},'validPassword':function(_0x35bc5f,_0x1dcb08){return bcrypt['compareSync'](_0x35bc5f,_0x1dcb08);}};