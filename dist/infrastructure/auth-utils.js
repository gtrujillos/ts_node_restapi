var a97_0x2850=['user','hashSync','genSaltSync','passport','bcrypt-nodejs','exports','authenticate'];(function(_0x35d7f9,_0x18b669){var _0x2ae351=function(_0x547bf6){while(--_0x547bf6){_0x35d7f9['push'](_0x35d7f9['shift']());}};_0x2ae351(++_0x18b669);}(a97_0x2850,0x184));var a97_0x50b8=function(_0x4737b7,_0x27cdf2){_0x4737b7=_0x4737b7-0x0;var _0x2d24fc=a97_0x2850[_0x4737b7];return _0x2d24fc;};let passport=require(a97_0x50b8('0x0'));let bcrypt=require(a97_0x50b8('0x1'));module[a97_0x50b8('0x2')]={'isLoggedIn':function(_0x4663e3,_0x5c299b,_0x380281){passport[a97_0x50b8('0x3')]('jwt',function(_0x300a6a,_0x1b3896,_0x1cb4ed){if(_0x300a6a){return _0x380281(_0x300a6a);}if(_0x1b3896){_0x4663e3[a97_0x50b8('0x4')]=_0x1b3896;}return _0x380281(null,_0x1b3896);})(_0x4663e3,_0x5c299b,_0x380281);},'generateHash':function(_0x48f3af){return bcrypt[a97_0x50b8('0x5')](_0x48f3af,bcrypt[a97_0x50b8('0x6')](0x8),null);},'validPassword':function(_0x4a457e,_0x5c03c3){return bcrypt['compareSync'](_0x4a457e,_0x5c03c3);}};