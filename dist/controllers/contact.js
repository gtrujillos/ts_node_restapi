var a199_0x2655=['redirect','/contact','body','name','email','Contact\x20Form','sendMail','flash','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','defineProperty','default','SendGrid','env','SENDGRID_PASSWORD','getContact','render','Contact','assert','Name\x20cannot\x20be\x20blank','notEmpty','isEmail','message','Message\x20cannot\x20be\x20blank','validationErrors','errors'];(function(_0x5e4925,_0x4de1d5){var _0x5f50ad=function(_0x238143){while(--_0x238143){_0x5e4925['push'](_0x5e4925['shift']());}};_0x5f50ad(++_0x4de1d5);}(a199_0x2655,0x192));var a199_0x5e9f=function(_0x7a00a9,_0x4aac79){_0x7a00a9=_0x7a00a9-0x0;var _0x316846=a199_0x2655[_0x7a00a9];return _0x316846;};'use strict';var __importDefault=this&&this[a199_0x5e9f('0x0')]||function(_0x20dcf8){return _0x20dcf8&&_0x20dcf8[a199_0x5e9f('0x1')]?_0x20dcf8:{'default':_0x20dcf8};};Object[a199_0x5e9f('0x2')](exports,a199_0x5e9f('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require('nodemailer'));const transporter=nodemailer_1[a199_0x5e9f('0x3')]['createTransport']({'service':a199_0x5e9f('0x4'),'auth':{'user':process[a199_0x5e9f('0x5')]['SENDGRID_USER'],'pass':process[a199_0x5e9f('0x5')][a199_0x5e9f('0x6')]}});exports[a199_0x5e9f('0x7')]=(_0x5d9869,_0x569f13)=>{_0x569f13[a199_0x5e9f('0x8')]('contact',{'title':a199_0x5e9f('0x9')});};exports['postContact']=(_0x58c4c7,_0x4e1590)=>{_0x58c4c7[a199_0x5e9f('0xa')]('name',a199_0x5e9f('0xb'))[a199_0x5e9f('0xc')]();_0x58c4c7[a199_0x5e9f('0xa')]('email','Email\x20is\x20not\x20valid')[a199_0x5e9f('0xd')]();_0x58c4c7[a199_0x5e9f('0xa')](a199_0x5e9f('0xe'),a199_0x5e9f('0xf'))[a199_0x5e9f('0xc')]();const _0x213651=_0x58c4c7[a199_0x5e9f('0x10')]();if(_0x213651){_0x58c4c7['flash'](a199_0x5e9f('0x11'),_0x213651);return _0x4e1590[a199_0x5e9f('0x12')](a199_0x5e9f('0x13'));}const _0x5f1966={'to':'your@email.com','from':_0x58c4c7[a199_0x5e9f('0x14')][a199_0x5e9f('0x15')]+'\x20<'+_0x58c4c7[a199_0x5e9f('0x14')][a199_0x5e9f('0x16')]+'>','subject':a199_0x5e9f('0x17'),'text':_0x58c4c7[a199_0x5e9f('0x14')][a199_0x5e9f('0xe')]};transporter[a199_0x5e9f('0x18')](_0x5f1966,_0x4c9fff=>{if(_0x4c9fff){_0x58c4c7[a199_0x5e9f('0x19')](a199_0x5e9f('0x11'),{'msg':_0x4c9fff['message']});return _0x4e1590[a199_0x5e9f('0x12')](a199_0x5e9f('0x13'));}_0x58c4c7[a199_0x5e9f('0x19')](a199_0x5e9f('0x1a'),{'msg':a199_0x5e9f('0x1b')});_0x4e1590[a199_0x5e9f('0x12')](a199_0x5e9f('0x13'));});};