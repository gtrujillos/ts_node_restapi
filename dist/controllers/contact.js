var a199_0xcd61=['Contact','postContact','assert','Name\x20cannot\x20be\x20blank','notEmpty','Email\x20is\x20not\x20valid','message','Message\x20cannot\x20be\x20blank','validationErrors','flash','redirect','your@email.com','body','name','email','sendMail','errors','/contact','__importDefault','__esModule','default','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD','getContact','render','contact'];(function(_0x44c302,_0x46570c){var _0x17c951=function(_0x462654){while(--_0x462654){_0x44c302['push'](_0x44c302['shift']());}};_0x17c951(++_0x46570c);}(a199_0xcd61,0x12a));var a199_0x2791=function(_0x546a53,_0x3f720e){_0x546a53=_0x546a53-0x0;var _0x440369=a199_0xcd61[_0x546a53];return _0x440369;};'use strict';var __importDefault=this&&this[a199_0x2791('0x0')]||function(_0x35a5fb){return _0x35a5fb&&_0x35a5fb['__esModule']?_0x35a5fb:{'default':_0x35a5fb};};Object['defineProperty'](exports,a199_0x2791('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require('nodemailer'));const transporter=nodemailer_1[a199_0x2791('0x2')][a199_0x2791('0x3')]({'service':'SendGrid','auth':{'user':process[a199_0x2791('0x4')][a199_0x2791('0x5')],'pass':process[a199_0x2791('0x4')][a199_0x2791('0x6')]}});exports[a199_0x2791('0x7')]=(_0x3d0ddb,_0x578f8b)=>{_0x578f8b[a199_0x2791('0x8')](a199_0x2791('0x9'),{'title':a199_0x2791('0xa')});};exports[a199_0x2791('0xb')]=(_0x3109d2,_0x40a65c)=>{_0x3109d2[a199_0x2791('0xc')]('name',a199_0x2791('0xd'))[a199_0x2791('0xe')]();_0x3109d2[a199_0x2791('0xc')]('email',a199_0x2791('0xf'))['isEmail']();_0x3109d2[a199_0x2791('0xc')](a199_0x2791('0x10'),a199_0x2791('0x11'))[a199_0x2791('0xe')]();const _0x140534=_0x3109d2[a199_0x2791('0x12')]();if(_0x140534){_0x3109d2[a199_0x2791('0x13')]('errors',_0x140534);return _0x40a65c[a199_0x2791('0x14')]('/contact');}const _0x50fa52={'to':a199_0x2791('0x15'),'from':_0x3109d2[a199_0x2791('0x16')][a199_0x2791('0x17')]+'\x20<'+_0x3109d2[a199_0x2791('0x16')][a199_0x2791('0x18')]+'>','subject':'Contact\x20Form','text':_0x3109d2[a199_0x2791('0x16')][a199_0x2791('0x10')]};transporter[a199_0x2791('0x19')](_0x50fa52,_0x1ddd2e=>{if(_0x1ddd2e){_0x3109d2['flash'](a199_0x2791('0x1a'),{'msg':_0x1ddd2e['message']});return _0x40a65c['redirect'](a199_0x2791('0x1b'));}_0x3109d2[a199_0x2791('0x13')]('success',{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0x40a65c[a199_0x2791('0x14')](a199_0x2791('0x1b'));});};