var a96_0x2850=['user','hashSync','genSaltSync','passport','bcrypt-nodejs','exports','authenticate'];(function(_0x49b16d,_0x3001f0){var _0x121bce=function(_0x1574f3){while(--_0x1574f3){_0x49b16d['push'](_0x49b16d['shift']());}};_0x121bce(++_0x3001f0);}(a96_0x2850,0x184));var a96_0x50b8=function(_0x51ad43,_0x37072b){_0x51ad43=_0x51ad43-0x0;var _0x54d002=a96_0x2850[_0x51ad43];return _0x54d002;};let passport=require(a96_0x50b8('0x0'));let bcrypt=require(a96_0x50b8('0x1'));module[a96_0x50b8('0x2')]={'isLoggedIn':function(_0x4663e3,_0x5c299b,_0x380281){passport[a96_0x50b8('0x3')]('jwt',function(_0x300a6a,_0x1b3896,_0x1cb4ed){if(_0x300a6a){return _0x380281(_0x300a6a);}if(_0x1b3896){_0x4663e3[a96_0x50b8('0x4')]=_0x1b3896;}return _0x380281(null,_0x1b3896);})(_0x4663e3,_0x5c299b,_0x380281);},'generateHash':function(_0x48f3af){return bcrypt[a96_0x50b8('0x5')](_0x48f3af,bcrypt[a96_0x50b8('0x6')](0x8),null);},'validPassword':function(_0x4a457e,_0x5c03c3){return bcrypt['compareSync'](_0x4a457e,_0x5c03c3);}};