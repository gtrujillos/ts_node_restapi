var a140_0x37f2=['Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','/contact','your@email.com','body','email','Contact\x20Form','sendMail','redirect','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','defineProperty','nodemailer','default','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','getContact','render','contact','Contact','postContact','assert','name','notEmpty','Email\x20is\x20not\x20valid','isEmail','message'];(function(_0x33ddd7,_0x33f4c6){var _0x1b9249=function(_0x194636){while(--_0x194636){_0x33ddd7['push'](_0x33ddd7['shift']());}};_0x1b9249(++_0x33f4c6);}(a140_0x37f2,0xb7));var a140_0x32fc=function(_0x3cf96e,_0x2b1e03){_0x3cf96e=_0x3cf96e-0x0;var _0x3aedb1=a140_0x37f2[_0x3cf96e];return _0x3aedb1;};'use strict';var __importDefault=this&&this[a140_0x32fc('0x0')]||function(_0x285695){return _0x285695&&_0x285695[a140_0x32fc('0x1')]?_0x285695:{'default':_0x285695};};Object[a140_0x32fc('0x2')](exports,'__esModule',{'value':!![]});const nodemailer_1=__importDefault(require(a140_0x32fc('0x3')));const transporter=nodemailer_1[a140_0x32fc('0x4')][a140_0x32fc('0x5')]({'service':a140_0x32fc('0x6'),'auth':{'user':process[a140_0x32fc('0x7')][a140_0x32fc('0x8')],'pass':process[a140_0x32fc('0x7')][a140_0x32fc('0x9')]}});exports[a140_0x32fc('0xa')]=(_0x33bc21,_0xd16d61)=>{_0xd16d61[a140_0x32fc('0xb')](a140_0x32fc('0xc'),{'title':a140_0x32fc('0xd')});};exports[a140_0x32fc('0xe')]=(_0x15373b,_0x2b30c2)=>{_0x15373b[a140_0x32fc('0xf')](a140_0x32fc('0x10'),'Name\x20cannot\x20be\x20blank')[a140_0x32fc('0x11')]();_0x15373b[a140_0x32fc('0xf')]('email',a140_0x32fc('0x12'))[a140_0x32fc('0x13')]();_0x15373b[a140_0x32fc('0xf')](a140_0x32fc('0x14'),a140_0x32fc('0x15'))[a140_0x32fc('0x11')]();const _0x553680=_0x15373b[a140_0x32fc('0x16')]();if(_0x553680){_0x15373b[a140_0x32fc('0x17')](a140_0x32fc('0x18'),_0x553680);return _0x2b30c2['redirect'](a140_0x32fc('0x19'));}const _0x184a07={'to':a140_0x32fc('0x1a'),'from':_0x15373b['body']['name']+'\x20<'+_0x15373b[a140_0x32fc('0x1b')][a140_0x32fc('0x1c')]+'>','subject':a140_0x32fc('0x1d'),'text':_0x15373b[a140_0x32fc('0x1b')][a140_0x32fc('0x14')]};transporter[a140_0x32fc('0x1e')](_0x184a07,_0x419ede=>{if(_0x419ede){_0x15373b[a140_0x32fc('0x17')](a140_0x32fc('0x18'),{'msg':_0x419ede[a140_0x32fc('0x14')]});return _0x2b30c2[a140_0x32fc('0x1f')]('/contact');}_0x15373b[a140_0x32fc('0x17')](a140_0x32fc('0x20'),{'msg':a140_0x32fc('0x21')});_0x2b30c2[a140_0x32fc('0x1f')](a140_0x32fc('0x19'));});};