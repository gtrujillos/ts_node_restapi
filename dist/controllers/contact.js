var a199_0x4324=['success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','nodemailer','default','SendGrid','env','SENDGRID_PASSWORD','getContact','render','contact','Contact','postContact','assert','name','notEmpty','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','flash','errors','redirect','/contact','email','Contact\x20Form','body','sendMail'];(function(_0x1ed632,_0x3b9ee4){var _0x7777c0=function(_0x1c94dc){while(--_0x1c94dc){_0x1ed632['push'](_0x1ed632['shift']());}};_0x7777c0(++_0x3b9ee4);}(a199_0x4324,0x1ef));var a199_0x8514=function(_0xbc10c7,_0x38e947){_0xbc10c7=_0xbc10c7-0x0;var _0x18f2f5=a199_0x4324[_0xbc10c7];return _0x18f2f5;};'use strict';var __importDefault=this&&this[a199_0x8514('0x0')]||function(_0x4c023a){return _0x4c023a&&_0x4c023a[a199_0x8514('0x1')]?_0x4c023a:{'default':_0x4c023a};};Object['defineProperty'](exports,a199_0x8514('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a199_0x8514('0x2')));const transporter=nodemailer_1[a199_0x8514('0x3')]['createTransport']({'service':a199_0x8514('0x4'),'auth':{'user':process[a199_0x8514('0x5')]['SENDGRID_USER'],'pass':process[a199_0x8514('0x5')][a199_0x8514('0x6')]}});exports[a199_0x8514('0x7')]=(_0x5e1be0,_0x2956f2)=>{_0x2956f2[a199_0x8514('0x8')](a199_0x8514('0x9'),{'title':a199_0x8514('0xa')});};exports[a199_0x8514('0xb')]=(_0x450552,_0x10f77d)=>{_0x450552[a199_0x8514('0xc')](a199_0x8514('0xd'),'Name\x20cannot\x20be\x20blank')[a199_0x8514('0xe')]();_0x450552[a199_0x8514('0xc')]('email',a199_0x8514('0xf'))[a199_0x8514('0x10')]();_0x450552[a199_0x8514('0xc')](a199_0x8514('0x11'),a199_0x8514('0x12'))[a199_0x8514('0xe')]();const _0x2ce876=_0x450552['validationErrors']();if(_0x2ce876){_0x450552[a199_0x8514('0x13')](a199_0x8514('0x14'),_0x2ce876);return _0x10f77d[a199_0x8514('0x15')](a199_0x8514('0x16'));}const _0x2155dd={'to':'your@email.com','from':_0x450552['body'][a199_0x8514('0xd')]+'\x20<'+_0x450552['body'][a199_0x8514('0x17')]+'>','subject':a199_0x8514('0x18'),'text':_0x450552[a199_0x8514('0x19')][a199_0x8514('0x11')]};transporter[a199_0x8514('0x1a')](_0x2155dd,_0x27048d=>{if(_0x27048d){_0x450552[a199_0x8514('0x13')](a199_0x8514('0x14'),{'msg':_0x27048d[a199_0x8514('0x11')]});return _0x10f77d[a199_0x8514('0x15')](a199_0x8514('0x16'));}_0x450552['flash'](a199_0x8514('0x1b'),{'msg':a199_0x8514('0x1c')});_0x10f77d['redirect'](a199_0x8514('0x16'));});};