var a88_0x5740=['headers','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','defineProperty','__esModule','async','crypto','nodemailer','passport','../models/User','express-validator','getLogin','user','redirect','render','Login','postLogin','assert','email','Email\x20is\x20not\x20valid','isEmail','sanitize','normalizeEmail','flash','errors','/login','default','authenticate','local','message','logIn','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','account/signup','Create\x20Account','postSignup','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','equals','body','password','validationErrors','/signup','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','getAccount','account/profile','Account\x20Management','Please\x20enter\x20a\x20valid\x20email\x20address.','findById','profile','name','gender','location','/account','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','save','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','provider','tokens','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','params','token','where','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','len','confirm','back','passwordResetToken','createTransport','SendGrid','env','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','getForgot','account/forgot','Forgot\x20Password','postForgot','waterfall','randomBytes','toString','hex','SENDGRID_USER','hackathon@starter.com','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://'];(function(_0x1bedd3,_0x119bb3){var _0x23f794=function(_0x4b44fb){while(--_0x4b44fb){_0x1bedd3['push'](_0x1bedd3['shift']());}};_0x23f794(++_0x119bb3);}(a88_0x5740,0x73));var a88_0x5833=function(_0x117919,_0x58ea59){_0x117919=_0x117919-0x0;var _0x529b05=a88_0x5740[_0x117919];return _0x529b05;};'use strict';var __importDefault=this&&this[a88_0x5833('0x0')]||function(_0x2cd38d){return _0x2cd38d&&_0x2cd38d['__esModule']?_0x2cd38d:{'default':_0x2cd38d};};Object[a88_0x5833('0x1')](exports,a88_0x5833('0x2'),{'value':!![]});const async_1=__importDefault(require(a88_0x5833('0x3')));const crypto_1=__importDefault(require(a88_0x5833('0x4')));const nodemailer_1=__importDefault(require(a88_0x5833('0x5')));const passport_1=__importDefault(require(a88_0x5833('0x6')));const User_1=__importDefault(require(a88_0x5833('0x7')));const request=require(a88_0x5833('0x8'));exports[a88_0x5833('0x9')]=(_0xbe9035,_0x24f443)=>{if(_0xbe9035[a88_0x5833('0xa')]){return _0x24f443[a88_0x5833('0xb')]('/');}_0x24f443[a88_0x5833('0xc')]('account/login',{'title':a88_0x5833('0xd')});};exports[a88_0x5833('0xe')]=(_0x35bd3a,_0x58e235,_0x911665)=>{_0x35bd3a[a88_0x5833('0xf')](a88_0x5833('0x10'),a88_0x5833('0x11'))[a88_0x5833('0x12')]();_0x35bd3a['assert']('password','Password\x20cannot\x20be\x20blank')['notEmpty']();_0x35bd3a[a88_0x5833('0x13')](a88_0x5833('0x10'))[a88_0x5833('0x14')]({'gmail_remove_dots':![]});const _0x568d50=_0x35bd3a['validationErrors']();if(_0x568d50){_0x35bd3a[a88_0x5833('0x15')](a88_0x5833('0x16'),_0x568d50);return _0x58e235['redirect'](a88_0x5833('0x17'));}passport_1[a88_0x5833('0x18')][a88_0x5833('0x19')](a88_0x5833('0x1a'),(_0x6c5af3,_0x3051ee,_0xe5c948)=>{if(_0x6c5af3){return _0x911665(_0x6c5af3);}if(!_0x3051ee){_0x35bd3a[a88_0x5833('0x15')](a88_0x5833('0x16'),_0xe5c948[a88_0x5833('0x1b')]);return _0x58e235[a88_0x5833('0xb')](a88_0x5833('0x17'));}_0x35bd3a[a88_0x5833('0x1c')](_0x3051ee,_0x6c5af3=>{if(_0x6c5af3){return _0x911665(_0x6c5af3);}_0x35bd3a[a88_0x5833('0x15')](a88_0x5833('0x1d'),{'msg':a88_0x5833('0x1e')});_0x58e235[a88_0x5833('0xb')](_0x35bd3a[a88_0x5833('0x1f')][a88_0x5833('0x20')]||'/');});})(_0x35bd3a,_0x58e235,_0x911665);};exports['logout']=(_0x3ab8a6,_0x152056)=>{_0x3ab8a6[a88_0x5833('0x21')]();_0x152056[a88_0x5833('0xb')]('/');};exports[a88_0x5833('0x22')]=(_0x24fa4d,_0x3f5004)=>{if(_0x24fa4d['user']){return _0x3f5004[a88_0x5833('0xb')]('/');}_0x3f5004[a88_0x5833('0xc')](a88_0x5833('0x23'),{'title':a88_0x5833('0x24')});};exports[a88_0x5833('0x25')]=(_0x4b2615,_0x54a237,_0x254eef)=>{_0x4b2615[a88_0x5833('0xf')](a88_0x5833('0x10'),'Email\x20is\x20not\x20valid')[a88_0x5833('0x12')]();_0x4b2615['assert']('password',a88_0x5833('0x26'))['len']({'min':0x4});_0x4b2615[a88_0x5833('0xf')](a88_0x5833('0x27'),'Passwords\x20do\x20not\x20match')[a88_0x5833('0x28')](_0x4b2615[a88_0x5833('0x29')][a88_0x5833('0x2a')]);_0x4b2615[a88_0x5833('0x13')]('email')[a88_0x5833('0x14')]({'gmail_remove_dots':![]});const _0x305119=_0x4b2615[a88_0x5833('0x2b')]();if(_0x305119){_0x4b2615['flash'](a88_0x5833('0x16'),_0x305119);return _0x54a237[a88_0x5833('0xb')](a88_0x5833('0x2c'));}const _0x3223eb=new User_1[(a88_0x5833('0x18'))]({'email':_0x4b2615[a88_0x5833('0x29')][a88_0x5833('0x10')],'password':_0x4b2615[a88_0x5833('0x29')][a88_0x5833('0x2a')]});User_1[a88_0x5833('0x18')][a88_0x5833('0x2d')]({'email':_0x4b2615[a88_0x5833('0x29')][a88_0x5833('0x10')]},(_0x2ccce4,_0x4e09f3)=>{if(_0x2ccce4){return _0x254eef(_0x2ccce4);}if(_0x4e09f3){_0x4b2615[a88_0x5833('0x15')](a88_0x5833('0x16'),{'msg':a88_0x5833('0x2e')});return _0x54a237[a88_0x5833('0xb')]('/signup');}_0x3223eb['save'](_0x2ccce4=>{if(_0x2ccce4){return _0x254eef(_0x2ccce4);}_0x4b2615[a88_0x5833('0x1c')](_0x3223eb,_0x2ccce4=>{if(_0x2ccce4){return _0x254eef(_0x2ccce4);}_0x54a237[a88_0x5833('0xb')]('/');});});});};exports[a88_0x5833('0x2f')]=(_0x579ee5,_0x414680)=>{_0x414680[a88_0x5833('0xc')](a88_0x5833('0x30'),{'title':a88_0x5833('0x31')});};exports['postUpdateProfile']=(_0x4b3e40,_0x5b7681,_0x2faa0b)=>{_0x4b3e40[a88_0x5833('0xf')](a88_0x5833('0x10'),a88_0x5833('0x32'))[a88_0x5833('0x12')]();_0x4b3e40[a88_0x5833('0x13')](a88_0x5833('0x10'))[a88_0x5833('0x14')]({'gmail_remove_dots':![]});const _0x5a58cd=_0x4b3e40['validationErrors']();if(_0x5a58cd){_0x4b3e40['flash'](a88_0x5833('0x16'),_0x5a58cd);return _0x5b7681['redirect']('/account');}User_1[a88_0x5833('0x18')][a88_0x5833('0x33')](_0x4b3e40[a88_0x5833('0xa')]['id'],(_0x526598,_0x37774d)=>{if(_0x526598){return _0x2faa0b(_0x526598);}_0x37774d['email']=_0x4b3e40[a88_0x5833('0x29')][a88_0x5833('0x10')]||'';_0x37774d[a88_0x5833('0x34')]['name']=_0x4b3e40[a88_0x5833('0x29')][a88_0x5833('0x35')]||'';_0x37774d['profile'][a88_0x5833('0x36')]=_0x4b3e40['body'][a88_0x5833('0x36')]||'';_0x37774d['profile'][a88_0x5833('0x37')]=_0x4b3e40[a88_0x5833('0x29')][a88_0x5833('0x37')]||'';_0x37774d['profile']['website']=_0x4b3e40[a88_0x5833('0x29')]['website']||'';_0x37774d['save'](_0x526598=>{if(_0x526598){if(_0x526598['code']===0x2af8){_0x4b3e40[a88_0x5833('0x15')](a88_0x5833('0x16'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x5b7681[a88_0x5833('0xb')](a88_0x5833('0x38'));}return _0x2faa0b(_0x526598);}_0x4b3e40['flash'](a88_0x5833('0x1d'),{'msg':a88_0x5833('0x39')});_0x5b7681['redirect'](a88_0x5833('0x38'));});});};exports[a88_0x5833('0x3a')]=(_0x30efd8,_0x3459a4,_0x246527)=>{_0x30efd8[a88_0x5833('0xf')](a88_0x5833('0x2a'),a88_0x5833('0x26'))['len']({'min':0x4});_0x30efd8[a88_0x5833('0xf')]('confirmPassword','Passwords\x20do\x20not\x20match')[a88_0x5833('0x28')](_0x30efd8[a88_0x5833('0x29')][a88_0x5833('0x2a')]);const _0x465598=_0x30efd8[a88_0x5833('0x2b')]();if(_0x465598){_0x30efd8['flash'](a88_0x5833('0x16'),_0x465598);return _0x3459a4['redirect']('/account');}User_1[a88_0x5833('0x18')][a88_0x5833('0x33')](_0x30efd8[a88_0x5833('0xa')]['id'],(_0x30c289,_0x122ce3)=>{if(_0x30c289){return _0x246527(_0x30c289);}_0x122ce3['password']=_0x30efd8[a88_0x5833('0x29')][a88_0x5833('0x2a')];_0x122ce3[a88_0x5833('0x3b')](_0x30c289=>{if(_0x30c289){return _0x246527(_0x30c289);}_0x30efd8['flash'](a88_0x5833('0x1d'),{'msg':a88_0x5833('0x3c')});_0x3459a4['redirect']('/account');});});};exports[a88_0x5833('0x3d')]=(_0x40d8a1,_0x1e703f,_0x51a7eb)=>{User_1['default'][a88_0x5833('0x3e')]({'_id':_0x40d8a1[a88_0x5833('0xa')]['id']},_0x543234=>{if(_0x543234){return _0x51a7eb(_0x543234);}_0x40d8a1[a88_0x5833('0x21')]();_0x40d8a1['flash'](a88_0x5833('0x3f'),{'msg':a88_0x5833('0x40')});_0x1e703f[a88_0x5833('0xb')]('/');});};exports[a88_0x5833('0x41')]=(_0x1c88d4,_0x3b3aac,_0x3ae845)=>{const _0x334277=_0x1c88d4['params'][a88_0x5833('0x42')];User_1[a88_0x5833('0x18')][a88_0x5833('0x33')](_0x1c88d4[a88_0x5833('0xa')]['id'],(_0x3398c6,_0x2903ba)=>{if(_0x3398c6){return _0x3ae845(_0x3398c6);}_0x2903ba[_0x334277]=undefined;_0x2903ba['tokens']=_0x2903ba[a88_0x5833('0x43')]['filter'](_0x27368e=>_0x27368e[a88_0x5833('0x44')]!==_0x334277);_0x2903ba['save'](_0x3398c6=>{if(_0x3398c6){return _0x3ae845(_0x3398c6);}_0x1c88d4[a88_0x5833('0x15')](a88_0x5833('0x3f'),{'msg':_0x334277+a88_0x5833('0x45')});_0x3b3aac[a88_0x5833('0xb')]('/account');});});};exports[a88_0x5833('0x46')]=(_0x21e8a7,_0x4b6b77,_0x55cb77)=>{if(_0x21e8a7[a88_0x5833('0x47')]()){return _0x4b6b77[a88_0x5833('0xb')]('/');}User_1[a88_0x5833('0x18')]['findOne']({'passwordResetToken':_0x21e8a7[a88_0x5833('0x48')][a88_0x5833('0x49')]})[a88_0x5833('0x4a')]('passwordResetExpires')['gt'](Date[a88_0x5833('0x4b')]())[a88_0x5833('0x4c')]((_0x5b4881,_0x5787a5)=>{if(_0x5b4881){return _0x55cb77(_0x5b4881);}if(!_0x5787a5){_0x21e8a7[a88_0x5833('0x15')]('errors',{'msg':a88_0x5833('0x4d')});return _0x4b6b77[a88_0x5833('0xb')](a88_0x5833('0x4e'));}_0x4b6b77['render']('account/reset',{'title':'Password\x20Reset'});});};exports[a88_0x5833('0x4f')]=(_0x50bf71,_0x40d0cd,_0x1ae3ed)=>{_0x50bf71[a88_0x5833('0xf')](a88_0x5833('0x2a'),a88_0x5833('0x50'))[a88_0x5833('0x51')]({'min':0x4});_0x50bf71[a88_0x5833('0xf')](a88_0x5833('0x52'),'Passwords\x20must\x20match.')['equals'](_0x50bf71[a88_0x5833('0x29')][a88_0x5833('0x2a')]);const _0x4c3e40=_0x50bf71[a88_0x5833('0x2b')]();if(_0x4c3e40){_0x50bf71['flash'](a88_0x5833('0x16'),_0x4c3e40);return _0x40d0cd[a88_0x5833('0xb')](a88_0x5833('0x53'));}async_1[a88_0x5833('0x18')]['waterfall']([function resetPassword(_0x4773f4){User_1[a88_0x5833('0x18')]['findOne']({'passwordResetToken':_0x50bf71[a88_0x5833('0x48')][a88_0x5833('0x49')]})[a88_0x5833('0x4a')]('passwordResetExpires')['gt'](Date[a88_0x5833('0x4b')]())[a88_0x5833('0x4c')]((_0x519d05,_0x344d49)=>{if(_0x519d05){return _0x1ae3ed(_0x519d05);}if(!_0x344d49){_0x50bf71[a88_0x5833('0x15')]('errors',{'msg':a88_0x5833('0x4d')});return _0x40d0cd[a88_0x5833('0xb')](a88_0x5833('0x53'));}_0x344d49[a88_0x5833('0x2a')]=_0x50bf71[a88_0x5833('0x29')][a88_0x5833('0x2a')];_0x344d49[a88_0x5833('0x54')]=undefined;_0x344d49['passwordResetExpires']=undefined;_0x344d49[a88_0x5833('0x3b')](_0x519d05=>{if(_0x519d05){return _0x1ae3ed(_0x519d05);}_0x50bf71[a88_0x5833('0x1c')](_0x344d49,_0x519d05=>{_0x4773f4(_0x519d05,_0x344d49);});});});},function sendResetPasswordEmail(_0x2bddd6,_0x4ce4c7){const _0x30e144=nodemailer_1[a88_0x5833('0x18')][a88_0x5833('0x55')]({'service':a88_0x5833('0x56'),'auth':{'user':process[a88_0x5833('0x57')]['SENDGRID_USER'],'pass':process[a88_0x5833('0x57')][a88_0x5833('0x58')]}});const _0x5f4c34={'to':_0x2bddd6['email'],'from':a88_0x5833('0x59'),'subject':a88_0x5833('0x5a'),'text':a88_0x5833('0x5b')+_0x2bddd6['email']+a88_0x5833('0x5c')};_0x30e144[a88_0x5833('0x5d')](_0x5f4c34,_0x4a7bc9=>{_0x50bf71['flash'](a88_0x5833('0x1d'),{'msg':'Success!\x20Your\x20password\x20has\x20been\x20changed.'});_0x4ce4c7(_0x4a7bc9);});}],_0x5b7704=>{if(_0x5b7704){return _0x1ae3ed(_0x5b7704);}_0x40d0cd['redirect']('/');});};exports[a88_0x5833('0x5e')]=(_0x5e3e8f,_0x4f576f)=>{if(_0x5e3e8f[a88_0x5833('0x47')]()){return _0x4f576f[a88_0x5833('0xb')]('/');}_0x4f576f['render'](a88_0x5833('0x5f'),{'title':a88_0x5833('0x60')});};exports[a88_0x5833('0x61')]=(_0x42d29f,_0x595640,_0xbdeb6e)=>{_0x42d29f['assert'](a88_0x5833('0x10'),a88_0x5833('0x32'))['isEmail']();_0x42d29f[a88_0x5833('0x13')](a88_0x5833('0x10'))[a88_0x5833('0x14')]({'gmail_remove_dots':![]});const _0x332551=_0x42d29f[a88_0x5833('0x2b')]();if(_0x332551){_0x42d29f['flash']('errors',_0x332551);return _0x595640['redirect']('/forgot');}async_1[a88_0x5833('0x18')][a88_0x5833('0x62')]([function createRandomToken(_0x2c3635){crypto_1[a88_0x5833('0x18')][a88_0x5833('0x63')](0x10,(_0x3f4597,_0x36f68a)=>{const _0x496e37=_0x36f68a[a88_0x5833('0x64')](a88_0x5833('0x65'));_0x2c3635(_0x3f4597,_0x496e37);});},function setRandomToken(_0x186b88,_0x47832c){User_1['default']['findOne']({'email':_0x42d29f[a88_0x5833('0x29')][a88_0x5833('0x10')]},(_0x3d0b83,_0x1ac651)=>{if(_0x3d0b83){return _0x47832c(_0x3d0b83);}if(!_0x1ac651){_0x42d29f[a88_0x5833('0x15')](a88_0x5833('0x16'),{'msg':'Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.'});return _0x595640[a88_0x5833('0xb')]('/forgot');}_0x1ac651['passwordResetToken']=_0x186b88;_0x1ac651['passwordResetExpires']=Date[a88_0x5833('0x4b')]()+0x36ee80;_0x1ac651[a88_0x5833('0x3b')](_0x3d0b83=>{_0x47832c(_0x3d0b83,_0x186b88,_0x1ac651);});});},function sendForgotPasswordEmail(_0x4cb345,_0x77293a,_0xd327a9){const _0x49cd10=nodemailer_1[a88_0x5833('0x18')][a88_0x5833('0x55')]({'service':'SendGrid','auth':{'user':process[a88_0x5833('0x57')][a88_0x5833('0x66')],'pass':process[a88_0x5833('0x57')][a88_0x5833('0x58')]}});const _0x1ff0b8={'to':_0x77293a[a88_0x5833('0x10')],'from':a88_0x5833('0x67'),'subject':'Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','text':a88_0x5833('0x68')+_0x42d29f[a88_0x5833('0x69')]['host']+a88_0x5833('0x6a')+_0x4cb345+a88_0x5833('0x6b')};_0x49cd10[a88_0x5833('0x5d')](_0x1ff0b8,_0x39452c=>{_0x42d29f[a88_0x5833('0x15')](a88_0x5833('0x3f'),{'msg':a88_0x5833('0x6c')+_0x77293a[a88_0x5833('0x10')]+a88_0x5833('0x6d')});_0xd327a9(_0x39452c);});}],_0x365f5e=>{if(_0x365f5e){return _0xbdeb6e(_0x365f5e);}_0x595640[a88_0x5833('0xb')](a88_0x5833('0x4e'));});};