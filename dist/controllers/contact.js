var a86_0x191a=['__importDefault','__esModule','defineProperty','nodemailer','createTransport','SendGrid','env','getContact','contact','Contact','postContact','assert','Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','Message\x20cannot\x20be\x20blank','validationErrors','errors','/contact','body','message','flash','success','Email\x20has\x20been\x20sent\x20successfully!','redirect'];(function(_0x11628e,_0x2d2190){var _0x215588=function(_0x52fa96){while(--_0x52fa96){_0x11628e['push'](_0x11628e['shift']());}};_0x215588(++_0x2d2190);}(a86_0x191a,0x15f));var a86_0x3836=function(_0x59ccc7,_0x2d2112){_0x59ccc7=_0x59ccc7-0x0;var _0x5e3d94=a86_0x191a[_0x59ccc7];return _0x5e3d94;};'use strict';var __importDefault=this&&this[a86_0x3836('0x0')]||function(_0x41f0a5){return _0x41f0a5&&_0x41f0a5[a86_0x3836('0x1')]?_0x41f0a5:{'default':_0x41f0a5};};Object[a86_0x3836('0x2')](exports,'__esModule',{'value':!![]});const nodemailer_1=__importDefault(require(a86_0x3836('0x3')));const transporter=nodemailer_1['default'][a86_0x3836('0x4')]({'service':a86_0x3836('0x5'),'auth':{'user':process[a86_0x3836('0x6')]['SENDGRID_USER'],'pass':process[a86_0x3836('0x6')]['SENDGRID_PASSWORD']}});exports[a86_0x3836('0x7')]=(_0x2c8bbe,_0x305895)=>{_0x305895['render'](a86_0x3836('0x8'),{'title':a86_0x3836('0x9')});};exports[a86_0x3836('0xa')]=(_0x45a0e7,_0x57d5a4)=>{_0x45a0e7[a86_0x3836('0xb')]('name',a86_0x3836('0xc'))[a86_0x3836('0xd')]();_0x45a0e7['assert'](a86_0x3836('0xe'),a86_0x3836('0xf'))[a86_0x3836('0x10')]();_0x45a0e7[a86_0x3836('0xb')]('message',a86_0x3836('0x11'))['notEmpty']();const _0x7bf6b0=_0x45a0e7[a86_0x3836('0x12')]();if(_0x7bf6b0){_0x45a0e7['flash'](a86_0x3836('0x13'),_0x7bf6b0);return _0x57d5a4['redirect'](a86_0x3836('0x14'));}const _0x536066={'to':'your@email.com','from':_0x45a0e7[a86_0x3836('0x15')]['name']+'\x20<'+_0x45a0e7['body'][a86_0x3836('0xe')]+'>','subject':'Contact\x20Form','text':_0x45a0e7[a86_0x3836('0x15')][a86_0x3836('0x16')]};transporter['sendMail'](_0x536066,_0x167718=>{if(_0x167718){_0x45a0e7[a86_0x3836('0x17')](a86_0x3836('0x13'),{'msg':_0x167718['message']});return _0x57d5a4['redirect'](a86_0x3836('0x14'));}_0x45a0e7[a86_0x3836('0x17')](a86_0x3836('0x18'),{'msg':a86_0x3836('0x19')});_0x57d5a4[a86_0x3836('0x1a')]('/contact');});};