var a93_0x1736=['render','contact','Contact','assert','name','Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','message','Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','redirect','/contact','body','Contact\x20Form','sendMail','success','__esModule','defineProperty','nodemailer','default','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD'];(function(_0x31cef6,_0x409d80){var _0x53a062=function(_0x520967){while(--_0x520967){_0x31cef6['push'](_0x31cef6['shift']());}};_0x53a062(++_0x409d80);}(a93_0x1736,0xd8));var a93_0x24f6=function(_0x895a49,_0x5a6d0c){_0x895a49=_0x895a49-0x0;var _0xf6f868=a93_0x1736[_0x895a49];return _0xf6f868;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x56ecc6){return _0x56ecc6&&_0x56ecc6[a93_0x24f6('0x0')]?_0x56ecc6:{'default':_0x56ecc6};};Object[a93_0x24f6('0x1')](exports,a93_0x24f6('0x0'),{'value':!![]});const nodemailer_1=__importDefault(require(a93_0x24f6('0x2')));const transporter=nodemailer_1[a93_0x24f6('0x3')][a93_0x24f6('0x4')]({'service':'SendGrid','auth':{'user':process[a93_0x24f6('0x5')][a93_0x24f6('0x6')],'pass':process[a93_0x24f6('0x5')][a93_0x24f6('0x7')]}});exports['getContact']=(_0xe1cfd4,_0x42b1b9)=>{_0x42b1b9[a93_0x24f6('0x8')](a93_0x24f6('0x9'),{'title':a93_0x24f6('0xa')});};exports['postContact']=(_0x47fcf1,_0x41a6de)=>{_0x47fcf1[a93_0x24f6('0xb')](a93_0x24f6('0xc'),a93_0x24f6('0xd'))[a93_0x24f6('0xe')]();_0x47fcf1[a93_0x24f6('0xb')](a93_0x24f6('0xf'),a93_0x24f6('0x10'))['isEmail']();_0x47fcf1['assert'](a93_0x24f6('0x11'),a93_0x24f6('0x12'))['notEmpty']();const _0xddb51d=_0x47fcf1[a93_0x24f6('0x13')]();if(_0xddb51d){_0x47fcf1[a93_0x24f6('0x14')](a93_0x24f6('0x15'),_0xddb51d);return _0x41a6de[a93_0x24f6('0x16')](a93_0x24f6('0x17'));}const _0x5a8bba={'to':'your@email.com','from':_0x47fcf1[a93_0x24f6('0x18')][a93_0x24f6('0xc')]+'\x20<'+_0x47fcf1[a93_0x24f6('0x18')][a93_0x24f6('0xf')]+'>','subject':a93_0x24f6('0x19'),'text':_0x47fcf1[a93_0x24f6('0x18')][a93_0x24f6('0x11')]};transporter[a93_0x24f6('0x1a')](_0x5a8bba,_0x3ca7cf=>{if(_0x3ca7cf){_0x47fcf1[a93_0x24f6('0x14')](a93_0x24f6('0x15'),{'msg':_0x3ca7cf[a93_0x24f6('0x11')]});return _0x41a6de[a93_0x24f6('0x16')](a93_0x24f6('0x17'));}_0x47fcf1[a93_0x24f6('0x14')](a93_0x24f6('0x1b'),{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0x41a6de[a93_0x24f6('0x16')](a93_0x24f6('0x17'));});};