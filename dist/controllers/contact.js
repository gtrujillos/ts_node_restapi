var a92_0x5706=['getContact','contact','Contact','postContact','name','notEmpty','assert','email','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','validationErrors','flash','redirect','body','sendMail','errors','__esModule','defineProperty','nodemailer','default','createTransport','SendGrid','SENDGRID_USER','SENDGRID_PASSWORD'];(function(_0xeb308d,_0x43f918){var _0x398c8c=function(_0x5ce0ed){while(--_0x5ce0ed){_0xeb308d['push'](_0xeb308d['shift']());}};_0x398c8c(++_0x43f918);}(a92_0x5706,0x116));var a92_0x35b2=function(_0xa4bf6b,_0x480cf0){_0xa4bf6b=_0xa4bf6b-0x0;var _0x44b4e5=a92_0x5706[_0xa4bf6b];return _0x44b4e5;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x462e49){return _0x462e49&&_0x462e49[a92_0x35b2('0x0')]?_0x462e49:{'default':_0x462e49};};Object[a92_0x35b2('0x1')](exports,a92_0x35b2('0x0'),{'value':!![]});const nodemailer_1=__importDefault(require(a92_0x35b2('0x2')));const transporter=nodemailer_1[a92_0x35b2('0x3')][a92_0x35b2('0x4')]({'service':a92_0x35b2('0x5'),'auth':{'user':process['env'][a92_0x35b2('0x6')],'pass':process['env'][a92_0x35b2('0x7')]}});exports[a92_0x35b2('0x8')]=(_0xe161f6,_0x59ab00)=>{_0x59ab00['render'](a92_0x35b2('0x9'),{'title':a92_0x35b2('0xa')});};exports[a92_0x35b2('0xb')]=(_0x5e56dc,_0x2ba531)=>{_0x5e56dc['assert'](a92_0x35b2('0xc'),'Name\x20cannot\x20be\x20blank')[a92_0x35b2('0xd')]();_0x5e56dc[a92_0x35b2('0xe')](a92_0x35b2('0xf'),a92_0x35b2('0x10'))[a92_0x35b2('0x11')]();_0x5e56dc[a92_0x35b2('0xe')](a92_0x35b2('0x12'),a92_0x35b2('0x13'))['notEmpty']();const _0x9e3dce=_0x5e56dc[a92_0x35b2('0x14')]();if(_0x9e3dce){_0x5e56dc[a92_0x35b2('0x15')]('errors',_0x9e3dce);return _0x2ba531[a92_0x35b2('0x16')]('/contact');}const _0xd86a1f={'to':'your@email.com','from':_0x5e56dc[a92_0x35b2('0x17')][a92_0x35b2('0xc')]+'\x20<'+_0x5e56dc[a92_0x35b2('0x17')][a92_0x35b2('0xf')]+'>','subject':'Contact\x20Form','text':_0x5e56dc[a92_0x35b2('0x17')][a92_0x35b2('0x12')]};transporter[a92_0x35b2('0x18')](_0xd86a1f,_0x1cc2cd=>{if(_0x1cc2cd){_0x5e56dc[a92_0x35b2('0x15')](a92_0x35b2('0x19'),{'msg':_0x1cc2cd['message']});return _0x2ba531['redirect']('/contact');}_0x5e56dc[a92_0x35b2('0x15')]('success',{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0x2ba531[a92_0x35b2('0x16')]('/contact');});};