var a94_0x442e=['SENDGRID_USER','env','SENDGRID_PASSWORD','Your\x20password\x20has\x20been\x20changed','sendMail','success','getForgot','/forgot','randomBytes','toString','hex','createTransport','SendGrid','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','host','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','__importDefault','defineProperty','__esModule','async','crypto','passport','../models/User','express-validator','getLogin','user','redirect','render','account/login','Login','postLogin','assert','Email\x20is\x20not\x20valid','isEmail','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','normalizeEmail','validationErrors','flash','errors','/login','default','authenticate','message','logIn','Success!\x20You\x20are\x20logged\x20in.','session','logout','getSignup','account/signup','postSignup','email','password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','/signup','save','getAccount','account/profile','Account\x20Management','Please\x20enter\x20a\x20valid\x20email\x20address.','profile','name','gender','location','code','/account','postUpdatePassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','findById','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','isAuthenticated','findOne','token','passwordResetExpires','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','Password\x20Reset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','back','waterfall','where','now','passwordResetToken'];(function(_0x6798c7,_0x34266e){var _0x1d5284=function(_0x814f6f){while(--_0x814f6f){_0x6798c7['push'](_0x6798c7['shift']());}};_0x1d5284(++_0x34266e);}(a94_0x442e,0x7b));var a94_0x5c49=function(_0x3fc5af,_0x2c7094){_0x3fc5af=_0x3fc5af-0x0;var _0x349a90=a94_0x442e[_0x3fc5af];return _0x349a90;};'use strict';var __importDefault=this&&this[a94_0x5c49('0x0')]||function(_0x3482ca){return _0x3482ca&&_0x3482ca['__esModule']?_0x3482ca:{'default':_0x3482ca};};Object[a94_0x5c49('0x1')](exports,a94_0x5c49('0x2'),{'value':!![]});const async_1=__importDefault(require(a94_0x5c49('0x3')));const crypto_1=__importDefault(require(a94_0x5c49('0x4')));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a94_0x5c49('0x5')));const User_1=__importDefault(require(a94_0x5c49('0x6')));const request=require(a94_0x5c49('0x7'));exports[a94_0x5c49('0x8')]=(_0x44f685,_0x1bf9fb)=>{if(_0x44f685[a94_0x5c49('0x9')]){return _0x1bf9fb[a94_0x5c49('0xa')]('/');}_0x1bf9fb[a94_0x5c49('0xb')](a94_0x5c49('0xc'),{'title':a94_0x5c49('0xd')});};exports[a94_0x5c49('0xe')]=(_0x160e87,_0x384170,_0x3adda5)=>{_0x160e87[a94_0x5c49('0xf')]('email',a94_0x5c49('0x10'))[a94_0x5c49('0x11')]();_0x160e87[a94_0x5c49('0xf')]('password',a94_0x5c49('0x12'))[a94_0x5c49('0x13')]();_0x160e87[a94_0x5c49('0x14')]('email')[a94_0x5c49('0x15')]({'gmail_remove_dots':![]});const _0x2d4ea3=_0x160e87[a94_0x5c49('0x16')]();if(_0x2d4ea3){_0x160e87[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0x2d4ea3);return _0x384170[a94_0x5c49('0xa')](a94_0x5c49('0x19'));}passport_1[a94_0x5c49('0x1a')][a94_0x5c49('0x1b')]('local',(_0x3a3fcb,_0x38df07,_0x4562b5)=>{if(_0x3a3fcb){return _0x3adda5(_0x3a3fcb);}if(!_0x38df07){_0x160e87[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0x4562b5[a94_0x5c49('0x1c')]);return _0x384170[a94_0x5c49('0xa')]('/login');}_0x160e87[a94_0x5c49('0x1d')](_0x38df07,_0x3a3fcb=>{if(_0x3a3fcb){return _0x3adda5(_0x3a3fcb);}_0x160e87[a94_0x5c49('0x17')]('success',{'msg':a94_0x5c49('0x1e')});_0x384170[a94_0x5c49('0xa')](_0x160e87[a94_0x5c49('0x1f')]['returnTo']||'/');});})(_0x160e87,_0x384170,_0x3adda5);};exports[a94_0x5c49('0x20')]=(_0x31d230,_0x3378ab)=>{_0x31d230[a94_0x5c49('0x20')]();_0x3378ab[a94_0x5c49('0xa')]('/');};exports[a94_0x5c49('0x21')]=(_0x1bc853,_0x41b443)=>{if(_0x1bc853[a94_0x5c49('0x9')]){return _0x41b443[a94_0x5c49('0xa')]('/');}_0x41b443['render'](a94_0x5c49('0x22'),{'title':'Create\x20Account'});};exports[a94_0x5c49('0x23')]=(_0xcef135,_0x2318d5,_0x9ac5f8)=>{_0xcef135['assert'](a94_0x5c49('0x24'),a94_0x5c49('0x10'))[a94_0x5c49('0x11')]();_0xcef135[a94_0x5c49('0xf')](a94_0x5c49('0x25'),a94_0x5c49('0x26'))[a94_0x5c49('0x27')]({'min':0x4});_0xcef135['assert'](a94_0x5c49('0x28'),a94_0x5c49('0x29'))[a94_0x5c49('0x2a')](_0xcef135[a94_0x5c49('0x2b')]['password']);_0xcef135['sanitize']('email')[a94_0x5c49('0x15')]({'gmail_remove_dots':![]});const _0x819e76=_0xcef135['validationErrors']();if(_0x819e76){_0xcef135['flash'](a94_0x5c49('0x18'),_0x819e76);return _0x2318d5['redirect'](a94_0x5c49('0x2c'));}const _0x24618b=new User_1[(a94_0x5c49('0x1a'))]({'email':_0xcef135['body'][a94_0x5c49('0x24')],'password':_0xcef135[a94_0x5c49('0x2b')][a94_0x5c49('0x25')]});User_1[a94_0x5c49('0x1a')]['findOne']({'email':_0xcef135['body'][a94_0x5c49('0x24')]},(_0x65e939,_0x1a27df)=>{if(_0x65e939){return _0x9ac5f8(_0x65e939);}if(_0x1a27df){_0xcef135[a94_0x5c49('0x17')]('errors',{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x2318d5[a94_0x5c49('0xa')](a94_0x5c49('0x2c'));}_0x24618b[a94_0x5c49('0x2d')](_0x65e939=>{if(_0x65e939){return _0x9ac5f8(_0x65e939);}_0xcef135[a94_0x5c49('0x1d')](_0x24618b,_0x65e939=>{if(_0x65e939){return _0x9ac5f8(_0x65e939);}_0x2318d5[a94_0x5c49('0xa')]('/');});});});};exports[a94_0x5c49('0x2e')]=(_0x703356,_0x191cad)=>{_0x191cad[a94_0x5c49('0xb')](a94_0x5c49('0x2f'),{'title':a94_0x5c49('0x30')});};exports['postUpdateProfile']=(_0xf6f993,_0x1731b0,_0x318b9a)=>{_0xf6f993[a94_0x5c49('0xf')](a94_0x5c49('0x24'),a94_0x5c49('0x31'))['isEmail']();_0xf6f993['sanitize'](a94_0x5c49('0x24'))[a94_0x5c49('0x15')]({'gmail_remove_dots':![]});const _0x75c5f1=_0xf6f993[a94_0x5c49('0x16')]();if(_0x75c5f1){_0xf6f993[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0x75c5f1);return _0x1731b0[a94_0x5c49('0xa')]('/account');}User_1[a94_0x5c49('0x1a')]['findById'](_0xf6f993[a94_0x5c49('0x9')]['id'],(_0x17946c,_0x353d47)=>{if(_0x17946c){return _0x318b9a(_0x17946c);}_0x353d47['email']=_0xf6f993[a94_0x5c49('0x2b')]['email']||'';_0x353d47[a94_0x5c49('0x32')][a94_0x5c49('0x33')]=_0xf6f993[a94_0x5c49('0x2b')][a94_0x5c49('0x33')]||'';_0x353d47[a94_0x5c49('0x32')][a94_0x5c49('0x34')]=_0xf6f993[a94_0x5c49('0x2b')][a94_0x5c49('0x34')]||'';_0x353d47[a94_0x5c49('0x32')][a94_0x5c49('0x35')]=_0xf6f993[a94_0x5c49('0x2b')][a94_0x5c49('0x35')]||'';_0x353d47['profile']['website']=_0xf6f993[a94_0x5c49('0x2b')]['website']||'';_0x353d47[a94_0x5c49('0x2d')](_0x17946c=>{if(_0x17946c){if(_0x17946c[a94_0x5c49('0x36')]===0x2af8){_0xf6f993[a94_0x5c49('0x17')](a94_0x5c49('0x18'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x1731b0[a94_0x5c49('0xa')]('/account');}return _0x318b9a(_0x17946c);}_0xf6f993[a94_0x5c49('0x17')]('success',{'msg':'Profile\x20information\x20has\x20been\x20updated.'});_0x1731b0[a94_0x5c49('0xa')](a94_0x5c49('0x37'));});});};exports[a94_0x5c49('0x38')]=(_0x1baaf5,_0x448332,_0x2bb1dd)=>{_0x1baaf5['assert'](a94_0x5c49('0x25'),a94_0x5c49('0x26'))[a94_0x5c49('0x27')]({'min':0x4});_0x1baaf5[a94_0x5c49('0xf')](a94_0x5c49('0x28'),'Passwords\x20do\x20not\x20match')['equals'](_0x1baaf5[a94_0x5c49('0x2b')]['password']);const _0x4006a3=_0x1baaf5[a94_0x5c49('0x16')]();if(_0x4006a3){_0x1baaf5[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0x4006a3);return _0x448332[a94_0x5c49('0xa')]('/account');}User_1['default']['findById'](_0x1baaf5[a94_0x5c49('0x9')]['id'],(_0x22df78,_0x53bde6)=>{if(_0x22df78){return _0x2bb1dd(_0x22df78);}_0x53bde6['password']=_0x1baaf5[a94_0x5c49('0x2b')][a94_0x5c49('0x25')];_0x53bde6[a94_0x5c49('0x2d')](_0x22df78=>{if(_0x22df78){return _0x2bb1dd(_0x22df78);}_0x1baaf5[a94_0x5c49('0x17')]('success',{'msg':a94_0x5c49('0x39')});_0x448332['redirect'](a94_0x5c49('0x37'));});});};exports[a94_0x5c49('0x3a')]=(_0x316314,_0x53334a,_0x4b41fa)=>{User_1['default'][a94_0x5c49('0x3b')]({'_id':_0x316314[a94_0x5c49('0x9')]['id']},_0x321ff1=>{if(_0x321ff1){return _0x4b41fa(_0x321ff1);}_0x316314[a94_0x5c49('0x20')]();_0x316314[a94_0x5c49('0x17')](a94_0x5c49('0x3c'),{'msg':a94_0x5c49('0x3d')});_0x53334a[a94_0x5c49('0xa')]('/');});};exports[a94_0x5c49('0x3e')]=(_0x2b3a6d,_0x12bb89,_0x2ea70f)=>{const _0x4dd5de=_0x2b3a6d[a94_0x5c49('0x3f')][a94_0x5c49('0x40')];User_1[a94_0x5c49('0x1a')][a94_0x5c49('0x41')](_0x2b3a6d[a94_0x5c49('0x9')]['id'],(_0x2f6f7d,_0x56f1a0)=>{if(_0x2f6f7d){return _0x2ea70f(_0x2f6f7d);}_0x56f1a0[_0x4dd5de]=undefined;_0x56f1a0[a94_0x5c49('0x42')]=_0x56f1a0[a94_0x5c49('0x42')][a94_0x5c49('0x43')](_0x1c6f79=>_0x1c6f79[a94_0x5c49('0x44')]!==_0x4dd5de);_0x56f1a0[a94_0x5c49('0x2d')](_0x2f6f7d=>{if(_0x2f6f7d){return _0x2ea70f(_0x2f6f7d);}_0x2b3a6d['flash'](a94_0x5c49('0x3c'),{'msg':_0x4dd5de+a94_0x5c49('0x45')});_0x12bb89[a94_0x5c49('0xa')](a94_0x5c49('0x37'));});});};exports['getReset']=(_0x11824b,_0x69f919,_0x496649)=>{if(_0x11824b[a94_0x5c49('0x46')]()){return _0x69f919['redirect']('/');}User_1[a94_0x5c49('0x1a')][a94_0x5c49('0x47')]({'passwordResetToken':_0x11824b[a94_0x5c49('0x3f')][a94_0x5c49('0x48')]})['where'](a94_0x5c49('0x49'))['gt'](Date['now']())[a94_0x5c49('0x4a')]((_0x3de780,_0x4ed4c3)=>{if(_0x3de780){return _0x496649(_0x3de780);}if(!_0x4ed4c3){_0x11824b[a94_0x5c49('0x17')]('errors',{'msg':a94_0x5c49('0x4b')});return _0x69f919[a94_0x5c49('0xa')]('/forgot');}_0x69f919[a94_0x5c49('0xb')]('account/reset',{'title':a94_0x5c49('0x4c')});});};exports['postReset']=(_0x49f951,_0x18be14,_0x3e11d0)=>{_0x49f951[a94_0x5c49('0xf')]('password',a94_0x5c49('0x4d'))[a94_0x5c49('0x27')]({'min':0x4});_0x49f951[a94_0x5c49('0xf')]('confirm','Passwords\x20must\x20match.')[a94_0x5c49('0x2a')](_0x49f951[a94_0x5c49('0x2b')][a94_0x5c49('0x25')]);const _0x28ed9f=_0x49f951[a94_0x5c49('0x16')]();if(_0x28ed9f){_0x49f951[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0x28ed9f);return _0x18be14[a94_0x5c49('0xa')](a94_0x5c49('0x4e'));}async_1[a94_0x5c49('0x1a')][a94_0x5c49('0x4f')]([function resetPassword(_0x45e063){User_1['default']['findOne']({'passwordResetToken':_0x49f951['params'][a94_0x5c49('0x48')]})[a94_0x5c49('0x50')](a94_0x5c49('0x49'))['gt'](Date[a94_0x5c49('0x51')]())[a94_0x5c49('0x4a')]((_0x366391,_0x434930)=>{if(_0x366391){return _0x3e11d0(_0x366391);}if(!_0x434930){_0x49f951[a94_0x5c49('0x17')]('errors',{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x18be14[a94_0x5c49('0xa')](a94_0x5c49('0x4e'));}_0x434930[a94_0x5c49('0x25')]=_0x49f951['body'][a94_0x5c49('0x25')];_0x434930[a94_0x5c49('0x52')]=undefined;_0x434930[a94_0x5c49('0x49')]=undefined;_0x434930['save'](_0x366391=>{if(_0x366391){return _0x3e11d0(_0x366391);}_0x49f951[a94_0x5c49('0x1d')](_0x434930,_0x366391=>{_0x45e063(_0x366391,_0x434930);});});});},function sendResetPasswordEmail(_0x148926,_0x5f498b){const _0x9bd24b=nodemailer_1['default']['createTransport']({'service':'SendGrid','auth':{'user':process['env'][a94_0x5c49('0x53')],'pass':process[a94_0x5c49('0x54')][a94_0x5c49('0x55')]}});const _0x4ff167={'to':_0x148926[a94_0x5c49('0x24')],'from':'express-ts@starter.com','subject':a94_0x5c49('0x56'),'text':'Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20'+_0x148926['email']+'\x20has\x20just\x20been\x20changed.\x0a'};_0x9bd24b[a94_0x5c49('0x57')](_0x4ff167,_0xc6d3e8=>{_0x49f951['flash'](a94_0x5c49('0x58'),{'msg':'Success!\x20Your\x20password\x20has\x20been\x20changed.'});_0x5f498b(_0xc6d3e8);});}],_0x2f7714=>{if(_0x2f7714){return _0x3e11d0(_0x2f7714);}_0x18be14['redirect']('/');});};exports[a94_0x5c49('0x59')]=(_0x178521,_0x1ebb00)=>{if(_0x178521[a94_0x5c49('0x46')]()){return _0x1ebb00[a94_0x5c49('0xa')]('/');}_0x1ebb00[a94_0x5c49('0xb')]('account/forgot',{'title':'Forgot\x20Password'});};exports['postForgot']=(_0x4886d1,_0xbd1a7,_0x44fe52)=>{_0x4886d1['assert']('email',a94_0x5c49('0x31'))[a94_0x5c49('0x11')]();_0x4886d1['sanitize'](a94_0x5c49('0x24'))[a94_0x5c49('0x15')]({'gmail_remove_dots':![]});const _0xa78281=_0x4886d1[a94_0x5c49('0x16')]();if(_0xa78281){_0x4886d1[a94_0x5c49('0x17')](a94_0x5c49('0x18'),_0xa78281);return _0xbd1a7[a94_0x5c49('0xa')](a94_0x5c49('0x5a'));}async_1[a94_0x5c49('0x1a')][a94_0x5c49('0x4f')]([function createRandomToken(_0x287099){crypto_1[a94_0x5c49('0x1a')][a94_0x5c49('0x5b')](0x10,(_0x19e62d,_0x34dd78)=>{const _0x2fa3b5=_0x34dd78[a94_0x5c49('0x5c')](a94_0x5c49('0x5d'));_0x287099(_0x19e62d,_0x2fa3b5);});},function setRandomToken(_0x566807,_0x1098b6){User_1[a94_0x5c49('0x1a')][a94_0x5c49('0x47')]({'email':_0x4886d1[a94_0x5c49('0x2b')][a94_0x5c49('0x24')]},(_0xa26814,_0x37efc5)=>{if(_0xa26814){return _0x1098b6(_0xa26814);}if(!_0x37efc5){_0x4886d1[a94_0x5c49('0x17')](a94_0x5c49('0x18'),{'msg':'Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.'});return _0xbd1a7[a94_0x5c49('0xa')]('/forgot');}_0x37efc5[a94_0x5c49('0x52')]=_0x566807;_0x37efc5[a94_0x5c49('0x49')]=Date['now']()+0x36ee80;_0x37efc5[a94_0x5c49('0x2d')](_0xa26814=>{_0x1098b6(_0xa26814,_0x566807,_0x37efc5);});});},function sendForgotPasswordEmail(_0x454421,_0x129183,_0x3c8bad){const _0x4cd408=nodemailer_1[a94_0x5c49('0x1a')][a94_0x5c49('0x5e')]({'service':a94_0x5c49('0x5f'),'auth':{'user':process[a94_0x5c49('0x54')][a94_0x5c49('0x53')],'pass':process[a94_0x5c49('0x54')]['SENDGRID_PASSWORD']}});const _0x41f75d={'to':_0x129183[a94_0x5c49('0x24')],'from':a94_0x5c49('0x60'),'subject':a94_0x5c49('0x61'),'text':a94_0x5c49('0x62')+_0x4886d1['headers'][a94_0x5c49('0x63')]+a94_0x5c49('0x64')+_0x454421+a94_0x5c49('0x65')};_0x4cd408['sendMail'](_0x41f75d,_0x1f7334=>{_0x4886d1['flash'](a94_0x5c49('0x3c'),{'msg':a94_0x5c49('0x66')+_0x129183['email']+'\x20with\x20further\x20instructions.'});_0x3c8bad(_0x1f7334);});}],_0x3ae026=>{if(_0x3ae026){return _0x44fe52(_0x3ae026);}_0xbd1a7[a94_0x5c49('0xa')](a94_0x5c49('0x5a'));});};