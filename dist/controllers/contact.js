var a89_0x3ef7=['contact','Contact','postContact','assert','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','redirect','/contact','your@email.com','name','body','message','sendMail','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','defineProperty','nodemailer','default','createTransport','SendGrid','SENDGRID_USER','env','SENDGRID_PASSWORD','getContact','render'];(function(_0x483c58,_0x358429){var _0x55ecde=function(_0x4d850a){while(--_0x4d850a){_0x483c58['push'](_0x483c58['shift']());}};_0x55ecde(++_0x358429);}(a89_0x3ef7,0x15f));var a89_0x6f8a=function(_0x22d0b2,_0x1f4700){_0x22d0b2=_0x22d0b2-0x0;var _0x4946cc=a89_0x3ef7[_0x22d0b2];return _0x4946cc;};'use strict';var __importDefault=this&&this[a89_0x6f8a('0x0')]||function(_0x40110f){return _0x40110f&&_0x40110f[a89_0x6f8a('0x1')]?_0x40110f:{'default':_0x40110f};};Object[a89_0x6f8a('0x2')](exports,a89_0x6f8a('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a89_0x6f8a('0x3')));const transporter=nodemailer_1[a89_0x6f8a('0x4')][a89_0x6f8a('0x5')]({'service':a89_0x6f8a('0x6'),'auth':{'user':process['env'][a89_0x6f8a('0x7')],'pass':process[a89_0x6f8a('0x8')][a89_0x6f8a('0x9')]}});exports[a89_0x6f8a('0xa')]=(_0xba5469,_0x4d5683)=>{_0x4d5683[a89_0x6f8a('0xb')](a89_0x6f8a('0xc'),{'title':a89_0x6f8a('0xd')});};exports[a89_0x6f8a('0xe')]=(_0x5bf1d1,_0x34e4c8)=>{_0x5bf1d1[a89_0x6f8a('0xf')]('name','Name\x20cannot\x20be\x20blank')[a89_0x6f8a('0x10')]();_0x5bf1d1['assert'](a89_0x6f8a('0x11'),a89_0x6f8a('0x12'))[a89_0x6f8a('0x13')]();_0x5bf1d1[a89_0x6f8a('0xf')]('message',a89_0x6f8a('0x14'))[a89_0x6f8a('0x10')]();const _0x2da3d3=_0x5bf1d1[a89_0x6f8a('0x15')]();if(_0x2da3d3){_0x5bf1d1[a89_0x6f8a('0x16')](a89_0x6f8a('0x17'),_0x2da3d3);return _0x34e4c8[a89_0x6f8a('0x18')](a89_0x6f8a('0x19'));}const _0xf085b4={'to':a89_0x6f8a('0x1a'),'from':_0x5bf1d1['body'][a89_0x6f8a('0x1b')]+'\x20<'+_0x5bf1d1[a89_0x6f8a('0x1c')][a89_0x6f8a('0x11')]+'>','subject':'Contact\x20Form','text':_0x5bf1d1['body'][a89_0x6f8a('0x1d')]};transporter[a89_0x6f8a('0x1e')](_0xf085b4,_0x2d4c32=>{if(_0x2d4c32){_0x5bf1d1['flash'](a89_0x6f8a('0x17'),{'msg':_0x2d4c32[a89_0x6f8a('0x1d')]});return _0x34e4c8[a89_0x6f8a('0x18')](a89_0x6f8a('0x19'));}_0x5bf1d1['flash'](a89_0x6f8a('0x1f'),{'msg':a89_0x6f8a('0x20')});_0x34e4c8[a89_0x6f8a('0x18')](a89_0x6f8a('0x19'));});};