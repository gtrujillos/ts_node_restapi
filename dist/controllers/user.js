var a88_0x2252=['confirm','Passwords\x20must\x20match.','params','token','back','passwordResetToken','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','account/forgot','postForgot','waterfall','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','hackathon@starter.com','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','async','crypto','passport','../models/User','express-validator','user','redirect','render','account/login','Login','postLogin','assert','email','Email\x20is\x20not\x20valid','password','normalizeEmail','validationErrors','errors','/login','default','authenticate','flash','logIn','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','account/signup','Create\x20Account','postSignup','isEmail','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','sanitize','/signup','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','Account\x20Management','/account','findById','profile','name','gender','location','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Password\x20has\x20been\x20changed.','postDeleteAccount','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','tokens','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','findOne','where','passwordResetExpires','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.'];(function(_0x4c9875,_0x1e3091){var _0x478feb=function(_0x30670f){while(--_0x30670f){_0x4c9875['push'](_0x4c9875['shift']());}};_0x478feb(++_0x1e3091);}(a88_0x2252,0x15b));var a88_0x3bf7=function(_0x1b7a02,_0x1bf407){_0x1b7a02=_0x1b7a02-0x0;var _0x595bc7=a88_0x2252[_0x1b7a02];return _0x595bc7;};'use strict';var __importDefault=this&&this[a88_0x3bf7('0x0')]||function(_0x30bfa7){return _0x30bfa7&&_0x30bfa7[a88_0x3bf7('0x1')]?_0x30bfa7:{'default':_0x30bfa7};};Object[a88_0x3bf7('0x2')](exports,a88_0x3bf7('0x1'),{'value':!![]});const async_1=__importDefault(require(a88_0x3bf7('0x3')));const crypto_1=__importDefault(require(a88_0x3bf7('0x4')));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a88_0x3bf7('0x5')));const User_1=__importDefault(require(a88_0x3bf7('0x6')));const request=require(a88_0x3bf7('0x7'));exports['getLogin']=(_0x190cc1,_0x1158f4)=>{if(_0x190cc1[a88_0x3bf7('0x8')]){return _0x1158f4[a88_0x3bf7('0x9')]('/');}_0x1158f4[a88_0x3bf7('0xa')](a88_0x3bf7('0xb'),{'title':a88_0x3bf7('0xc')});};exports[a88_0x3bf7('0xd')]=(_0xf3e2f7,_0x579052,_0x3adce1)=>{_0xf3e2f7[a88_0x3bf7('0xe')](a88_0x3bf7('0xf'),a88_0x3bf7('0x10'))['isEmail']();_0xf3e2f7[a88_0x3bf7('0xe')](a88_0x3bf7('0x11'),'Password\x20cannot\x20be\x20blank')['notEmpty']();_0xf3e2f7['sanitize'](a88_0x3bf7('0xf'))[a88_0x3bf7('0x12')]({'gmail_remove_dots':![]});const _0x5723c8=_0xf3e2f7[a88_0x3bf7('0x13')]();if(_0x5723c8){_0xf3e2f7['flash'](a88_0x3bf7('0x14'),_0x5723c8);return _0x579052[a88_0x3bf7('0x9')](a88_0x3bf7('0x15'));}passport_1[a88_0x3bf7('0x16')][a88_0x3bf7('0x17')]('local',(_0x3873c8,_0x1af800,_0x446c16)=>{if(_0x3873c8){return _0x3adce1(_0x3873c8);}if(!_0x1af800){_0xf3e2f7[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),_0x446c16['message']);return _0x579052[a88_0x3bf7('0x9')](a88_0x3bf7('0x15'));}_0xf3e2f7[a88_0x3bf7('0x19')](_0x1af800,_0x3873c8=>{if(_0x3873c8){return _0x3adce1(_0x3873c8);}_0xf3e2f7['flash'](a88_0x3bf7('0x1a'),{'msg':a88_0x3bf7('0x1b')});_0x579052[a88_0x3bf7('0x9')](_0xf3e2f7[a88_0x3bf7('0x1c')][a88_0x3bf7('0x1d')]||'/');});})(_0xf3e2f7,_0x579052,_0x3adce1);};exports[a88_0x3bf7('0x1e')]=(_0x498b0b,_0x2f49a1)=>{_0x498b0b['logout']();_0x2f49a1[a88_0x3bf7('0x9')]('/');};exports[a88_0x3bf7('0x1f')]=(_0x2595c3,_0x31d610)=>{if(_0x2595c3['user']){return _0x31d610[a88_0x3bf7('0x9')]('/');}_0x31d610[a88_0x3bf7('0xa')](a88_0x3bf7('0x20'),{'title':a88_0x3bf7('0x21')});};exports[a88_0x3bf7('0x22')]=(_0x15ab82,_0x350431,_0x124e22)=>{_0x15ab82[a88_0x3bf7('0xe')](a88_0x3bf7('0xf'),a88_0x3bf7('0x10'))[a88_0x3bf7('0x23')]();_0x15ab82[a88_0x3bf7('0xe')](a88_0x3bf7('0x11'),a88_0x3bf7('0x24'))[a88_0x3bf7('0x25')]({'min':0x4});_0x15ab82[a88_0x3bf7('0xe')](a88_0x3bf7('0x26'),a88_0x3bf7('0x27'))[a88_0x3bf7('0x28')](_0x15ab82[a88_0x3bf7('0x29')]['password']);_0x15ab82[a88_0x3bf7('0x2a')](a88_0x3bf7('0xf'))[a88_0x3bf7('0x12')]({'gmail_remove_dots':![]});const _0x1a6f61=_0x15ab82[a88_0x3bf7('0x13')]();if(_0x1a6f61){_0x15ab82['flash']('errors',_0x1a6f61);return _0x350431[a88_0x3bf7('0x9')](a88_0x3bf7('0x2b'));}const _0xaacf8f=new User_1['default']({'email':_0x15ab82[a88_0x3bf7('0x29')][a88_0x3bf7('0xf')],'password':_0x15ab82['body'][a88_0x3bf7('0x11')]});User_1['default']['findOne']({'email':_0x15ab82[a88_0x3bf7('0x29')][a88_0x3bf7('0xf')]},(_0x2bb73e,_0x1e4ab6)=>{if(_0x2bb73e){return _0x124e22(_0x2bb73e);}if(_0x1e4ab6){_0x15ab82[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),{'msg':a88_0x3bf7('0x2c')});return _0x350431[a88_0x3bf7('0x9')](a88_0x3bf7('0x2b'));}_0xaacf8f[a88_0x3bf7('0x2d')](_0x2bb73e=>{if(_0x2bb73e){return _0x124e22(_0x2bb73e);}_0x15ab82[a88_0x3bf7('0x19')](_0xaacf8f,_0x2bb73e=>{if(_0x2bb73e){return _0x124e22(_0x2bb73e);}_0x350431['redirect']('/');});});});};exports['getAccount']=(_0x445810,_0x15445e)=>{_0x15445e['render']('account/profile',{'title':a88_0x3bf7('0x2e')});};exports['postUpdateProfile']=(_0x2d6dc9,_0x5ddcb4,_0x5bab3c)=>{_0x2d6dc9[a88_0x3bf7('0xe')](a88_0x3bf7('0xf'),'Please\x20enter\x20a\x20valid\x20email\x20address.')['isEmail']();_0x2d6dc9['sanitize'](a88_0x3bf7('0xf'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x3b2ffe=_0x2d6dc9['validationErrors']();if(_0x3b2ffe){_0x2d6dc9[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),_0x3b2ffe);return _0x5ddcb4[a88_0x3bf7('0x9')](a88_0x3bf7('0x2f'));}User_1[a88_0x3bf7('0x16')][a88_0x3bf7('0x30')](_0x2d6dc9['user']['id'],(_0x1c5cf8,_0x41145a)=>{if(_0x1c5cf8){return _0x5bab3c(_0x1c5cf8);}_0x41145a[a88_0x3bf7('0xf')]=_0x2d6dc9[a88_0x3bf7('0x29')]['email']||'';_0x41145a[a88_0x3bf7('0x31')]['name']=_0x2d6dc9[a88_0x3bf7('0x29')][a88_0x3bf7('0x32')]||'';_0x41145a['profile']['gender']=_0x2d6dc9[a88_0x3bf7('0x29')][a88_0x3bf7('0x33')]||'';_0x41145a[a88_0x3bf7('0x31')][a88_0x3bf7('0x34')]=_0x2d6dc9[a88_0x3bf7('0x29')][a88_0x3bf7('0x34')]||'';_0x41145a[a88_0x3bf7('0x31')]['website']=_0x2d6dc9['body']['website']||'';_0x41145a['save'](_0x1c5cf8=>{if(_0x1c5cf8){if(_0x1c5cf8[a88_0x3bf7('0x35')]===0x2af8){_0x2d6dc9[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),{'msg':a88_0x3bf7('0x36')});return _0x5ddcb4[a88_0x3bf7('0x9')](a88_0x3bf7('0x2f'));}return _0x5bab3c(_0x1c5cf8);}_0x2d6dc9[a88_0x3bf7('0x18')](a88_0x3bf7('0x1a'),{'msg':a88_0x3bf7('0x37')});_0x5ddcb4[a88_0x3bf7('0x9')]('/account');});});};exports[a88_0x3bf7('0x38')]=(_0x253969,_0x4f1f2e,_0x357877)=>{_0x253969['assert'](a88_0x3bf7('0x11'),a88_0x3bf7('0x24'))['len']({'min':0x4});_0x253969[a88_0x3bf7('0xe')](a88_0x3bf7('0x26'),a88_0x3bf7('0x27'))[a88_0x3bf7('0x28')](_0x253969[a88_0x3bf7('0x29')]['password']);const _0x1d36b1=_0x253969['validationErrors']();if(_0x1d36b1){_0x253969[a88_0x3bf7('0x18')]('errors',_0x1d36b1);return _0x4f1f2e[a88_0x3bf7('0x9')]('/account');}User_1['default'][a88_0x3bf7('0x30')](_0x253969['user']['id'],(_0x4a103e,_0x58ac7e)=>{if(_0x4a103e){return _0x357877(_0x4a103e);}_0x58ac7e[a88_0x3bf7('0x11')]=_0x253969[a88_0x3bf7('0x29')][a88_0x3bf7('0x11')];_0x58ac7e[a88_0x3bf7('0x2d')](_0x4a103e=>{if(_0x4a103e){return _0x357877(_0x4a103e);}_0x253969[a88_0x3bf7('0x18')](a88_0x3bf7('0x1a'),{'msg':a88_0x3bf7('0x39')});_0x4f1f2e[a88_0x3bf7('0x9')](a88_0x3bf7('0x2f'));});});};exports[a88_0x3bf7('0x3a')]=(_0x35266c,_0x892ab5,_0x1d82c3)=>{User_1[a88_0x3bf7('0x16')]['remove']({'_id':_0x35266c[a88_0x3bf7('0x8')]['id']},_0x4e6195=>{if(_0x4e6195){return _0x1d82c3(_0x4e6195);}_0x35266c['logout']();_0x35266c['flash'](a88_0x3bf7('0x3b'),{'msg':a88_0x3bf7('0x3c')});_0x892ab5[a88_0x3bf7('0x9')]('/');});};exports[a88_0x3bf7('0x3d')]=(_0x58f0c9,_0x496088,_0x4a8bd8)=>{const _0x2bf856=_0x58f0c9['params']['provider'];User_1['default'][a88_0x3bf7('0x30')](_0x58f0c9[a88_0x3bf7('0x8')]['id'],(_0x254b09,_0x17d921)=>{if(_0x254b09){return _0x4a8bd8(_0x254b09);}_0x17d921[_0x2bf856]=undefined;_0x17d921[a88_0x3bf7('0x3e')]=_0x17d921['tokens']['filter'](_0x1c7fb1=>_0x1c7fb1['kind']!==_0x2bf856);_0x17d921['save'](_0x254b09=>{if(_0x254b09){return _0x4a8bd8(_0x254b09);}_0x58f0c9[a88_0x3bf7('0x18')](a88_0x3bf7('0x3b'),{'msg':_0x2bf856+a88_0x3bf7('0x3f')});_0x496088['redirect'](a88_0x3bf7('0x2f'));});});};exports[a88_0x3bf7('0x40')]=(_0x22d165,_0x4f9f7a,_0xfd784f)=>{if(_0x22d165[a88_0x3bf7('0x41')]()){return _0x4f9f7a[a88_0x3bf7('0x9')]('/');}User_1['default'][a88_0x3bf7('0x42')]({'passwordResetToken':_0x22d165['params']['token']})[a88_0x3bf7('0x43')](a88_0x3bf7('0x44'))['gt'](Date[a88_0x3bf7('0x45')]())[a88_0x3bf7('0x46')]((_0x2508f0,_0x58bfe2)=>{if(_0x2508f0){return _0xfd784f(_0x2508f0);}if(!_0x58bfe2){_0x22d165[a88_0x3bf7('0x18')]('errors',{'msg':a88_0x3bf7('0x47')});return _0x4f9f7a[a88_0x3bf7('0x9')](a88_0x3bf7('0x48'));}_0x4f9f7a[a88_0x3bf7('0xa')](a88_0x3bf7('0x49'),{'title':a88_0x3bf7('0x4a')});});};exports[a88_0x3bf7('0x4b')]=(_0x3e55b1,_0x38037a,_0x337907)=>{_0x3e55b1[a88_0x3bf7('0xe')](a88_0x3bf7('0x11'),a88_0x3bf7('0x4c'))[a88_0x3bf7('0x25')]({'min':0x4});_0x3e55b1[a88_0x3bf7('0xe')](a88_0x3bf7('0x4d'),a88_0x3bf7('0x4e'))[a88_0x3bf7('0x28')](_0x3e55b1[a88_0x3bf7('0x29')]['password']);const _0x21b0b2=_0x3e55b1['validationErrors']();if(_0x21b0b2){_0x3e55b1[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),_0x21b0b2);return _0x38037a[a88_0x3bf7('0x9')]('back');}async_1[a88_0x3bf7('0x16')]['waterfall']([function resetPassword(_0x292750){User_1[a88_0x3bf7('0x16')]['findOne']({'passwordResetToken':_0x3e55b1[a88_0x3bf7('0x4f')][a88_0x3bf7('0x50')]})[a88_0x3bf7('0x43')](a88_0x3bf7('0x44'))['gt'](Date[a88_0x3bf7('0x45')]())[a88_0x3bf7('0x46')]((_0x2715aa,_0x26a033)=>{if(_0x2715aa){return _0x337907(_0x2715aa);}if(!_0x26a033){_0x3e55b1[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),{'msg':a88_0x3bf7('0x47')});return _0x38037a[a88_0x3bf7('0x9')](a88_0x3bf7('0x51'));}_0x26a033[a88_0x3bf7('0x11')]=_0x3e55b1[a88_0x3bf7('0x29')][a88_0x3bf7('0x11')];_0x26a033[a88_0x3bf7('0x52')]=undefined;_0x26a033[a88_0x3bf7('0x44')]=undefined;_0x26a033['save'](_0x2715aa=>{if(_0x2715aa){return _0x337907(_0x2715aa);}_0x3e55b1[a88_0x3bf7('0x19')](_0x26a033,_0x2715aa=>{_0x292750(_0x2715aa,_0x26a033);});});});},function sendResetPasswordEmail(_0x54ee3d,_0x5801ec){const _0x5d53c0=nodemailer_1[a88_0x3bf7('0x16')][a88_0x3bf7('0x53')]({'service':'SendGrid','auth':{'user':process[a88_0x3bf7('0x54')][a88_0x3bf7('0x55')],'pass':process[a88_0x3bf7('0x54')][a88_0x3bf7('0x56')]}});const _0x584873={'to':_0x54ee3d[a88_0x3bf7('0xf')],'from':a88_0x3bf7('0x57'),'subject':a88_0x3bf7('0x58'),'text':a88_0x3bf7('0x59')+_0x54ee3d[a88_0x3bf7('0xf')]+'\x20has\x20just\x20been\x20changed.\x0a'};_0x5d53c0[a88_0x3bf7('0x5a')](_0x584873,_0x53b698=>{_0x3e55b1[a88_0x3bf7('0x18')]('success',{'msg':a88_0x3bf7('0x5b')});_0x5801ec(_0x53b698);});}],_0x5259a6=>{if(_0x5259a6){return _0x337907(_0x5259a6);}_0x38037a[a88_0x3bf7('0x9')]('/');});};exports[a88_0x3bf7('0x5c')]=(_0x3700c8,_0x5cab99)=>{if(_0x3700c8[a88_0x3bf7('0x41')]()){return _0x5cab99[a88_0x3bf7('0x9')]('/');}_0x5cab99[a88_0x3bf7('0xa')](a88_0x3bf7('0x5d'),{'title':'Forgot\x20Password'});};exports[a88_0x3bf7('0x5e')]=(_0x12b54f,_0x40c1d4,_0x2ef74c)=>{_0x12b54f['assert']('email','Please\x20enter\x20a\x20valid\x20email\x20address.')[a88_0x3bf7('0x23')]();_0x12b54f[a88_0x3bf7('0x2a')](a88_0x3bf7('0xf'))[a88_0x3bf7('0x12')]({'gmail_remove_dots':![]});const _0x5cc1fb=_0x12b54f[a88_0x3bf7('0x13')]();if(_0x5cc1fb){_0x12b54f[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),_0x5cc1fb);return _0x40c1d4[a88_0x3bf7('0x9')](a88_0x3bf7('0x48'));}async_1[a88_0x3bf7('0x16')][a88_0x3bf7('0x5f')]([function createRandomToken(_0x4a4d67){crypto_1[a88_0x3bf7('0x16')]['randomBytes'](0x10,(_0x4b9d9e,_0x307edc)=>{const _0xdf40d3=_0x307edc[a88_0x3bf7('0x60')](a88_0x3bf7('0x61'));_0x4a4d67(_0x4b9d9e,_0xdf40d3);});},function setRandomToken(_0x23e9ef,_0x88d56b){User_1['default'][a88_0x3bf7('0x42')]({'email':_0x12b54f[a88_0x3bf7('0x29')][a88_0x3bf7('0xf')]},(_0x59393b,_0x3b0d5a)=>{if(_0x59393b){return _0x88d56b(_0x59393b);}if(!_0x3b0d5a){_0x12b54f[a88_0x3bf7('0x18')](a88_0x3bf7('0x14'),{'msg':a88_0x3bf7('0x62')});return _0x40c1d4['redirect'](a88_0x3bf7('0x48'));}_0x3b0d5a[a88_0x3bf7('0x52')]=_0x23e9ef;_0x3b0d5a['passwordResetExpires']=Date[a88_0x3bf7('0x45')]()+0x36ee80;_0x3b0d5a[a88_0x3bf7('0x2d')](_0x59393b=>{_0x88d56b(_0x59393b,_0x23e9ef,_0x3b0d5a);});});},function sendForgotPasswordEmail(_0x33badf,_0x150d95,_0xdc60b7){const _0x319009=nodemailer_1[a88_0x3bf7('0x16')][a88_0x3bf7('0x53')]({'service':'SendGrid','auth':{'user':process[a88_0x3bf7('0x54')][a88_0x3bf7('0x55')],'pass':process['env'][a88_0x3bf7('0x56')]}});const _0x5ce87d={'to':_0x150d95[a88_0x3bf7('0xf')],'from':a88_0x3bf7('0x63'),'subject':'Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','text':a88_0x3bf7('0x64')+_0x12b54f[a88_0x3bf7('0x65')][a88_0x3bf7('0x66')]+'/reset/'+_0x33badf+a88_0x3bf7('0x67')};_0x319009['sendMail'](_0x5ce87d,_0xda65d6=>{_0x12b54f[a88_0x3bf7('0x18')](a88_0x3bf7('0x3b'),{'msg':a88_0x3bf7('0x68')+_0x150d95[a88_0x3bf7('0xf')]+a88_0x3bf7('0x69')});_0xdc60b7(_0xda65d6);});}],_0x2cc03c=>{if(_0x2cc03c){return _0x2ef74c(_0x2cc03c);}_0x40c1d4[a88_0x3bf7('0x9')](a88_0x3bf7('0x48'));});};