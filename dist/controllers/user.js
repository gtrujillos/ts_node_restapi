var a95_0x1e0c=['/login','local','errors','message','logIn','flash','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','Create\x20Account','Email\x20is\x20not\x20valid','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','findOne','/signup','getAccount','render','account/profile','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','default','findById','user','name','gender','profile','location','website','save','code','/account','postUpdatePassword','len','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','getOauthUnlink','params','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','passwordResetExpires','now','exec','/forgot','account/reset','Password\x20Reset','postReset','confirm','Passwords\x20must\x20match.','back','waterfall','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','createTransport','SendGrid','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','account/forgot','Forgot\x20Password','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','passwordResetToken','env','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','/reset/','info','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','defineProperty','passport','../models/User','express-validator','getLogin','redirect','account/login','Login','postLogin','assert','email','isEmail','password','Password\x20cannot\x20be\x20blank','sanitize','normalizeEmail','validationErrors'];(function(_0x339b28,_0xbb0d43){var _0x121b63=function(_0x21575a){while(--_0x21575a){_0x339b28['push'](_0x339b28['shift']());}};_0x121b63(++_0xbb0d43);}(a95_0x1e0c,0x19b));var a95_0x19ef=function(_0x31d348,_0x316401){_0x31d348=_0x31d348-0x0;var _0x11a713=a95_0x1e0c[_0x31d348];return _0x11a713;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x214181){return _0x214181&&_0x214181['__esModule']?_0x214181:{'default':_0x214181};};Object[a95_0x19ef('0x0')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require('async'));const crypto_1=__importDefault(require('crypto'));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a95_0x19ef('0x1')));const User_1=__importDefault(require(a95_0x19ef('0x2')));const request=require(a95_0x19ef('0x3'));exports[a95_0x19ef('0x4')]=(_0x3ccb1a,_0x46ef2a)=>{if(_0x3ccb1a['user']){return _0x46ef2a[a95_0x19ef('0x5')]('/');}_0x46ef2a['render'](a95_0x19ef('0x6'),{'title':a95_0x19ef('0x7')});};exports[a95_0x19ef('0x8')]=(_0x3130bf,_0x5c9399,_0xb56146)=>{_0x3130bf[a95_0x19ef('0x9')](a95_0x19ef('0xa'),'Email\x20is\x20not\x20valid')[a95_0x19ef('0xb')]();_0x3130bf[a95_0x19ef('0x9')](a95_0x19ef('0xc'),a95_0x19ef('0xd'))['notEmpty']();_0x3130bf[a95_0x19ef('0xe')](a95_0x19ef('0xa'))[a95_0x19ef('0xf')]({'gmail_remove_dots':![]});const _0x3f1e1d=_0x3130bf[a95_0x19ef('0x10')]();if(_0x3f1e1d){_0x3130bf['flash']('errors',_0x3f1e1d);return _0x5c9399[a95_0x19ef('0x5')](a95_0x19ef('0x11'));}passport_1['default']['authenticate'](a95_0x19ef('0x12'),(_0x164462,_0x3bcaf6,_0x3f2a42)=>{if(_0x164462){return _0xb56146(_0x164462);}if(!_0x3bcaf6){_0x3130bf['flash'](a95_0x19ef('0x13'),_0x3f2a42[a95_0x19ef('0x14')]);return _0x5c9399[a95_0x19ef('0x5')](a95_0x19ef('0x11'));}_0x3130bf[a95_0x19ef('0x15')](_0x3bcaf6,_0x164462=>{if(_0x164462){return _0xb56146(_0x164462);}_0x3130bf[a95_0x19ef('0x16')](a95_0x19ef('0x17'),{'msg':a95_0x19ef('0x18')});_0x5c9399[a95_0x19ef('0x5')](_0x3130bf[a95_0x19ef('0x19')][a95_0x19ef('0x1a')]||'/');});})(_0x3130bf,_0x5c9399,_0xb56146);};exports[a95_0x19ef('0x1b')]=(_0x4f6e0c,_0x48d2bb)=>{_0x4f6e0c[a95_0x19ef('0x1b')]();_0x48d2bb[a95_0x19ef('0x5')]('/');};exports[a95_0x19ef('0x1c')]=(_0x2e0ec5,_0x4d0e13)=>{if(_0x2e0ec5['user']){return _0x4d0e13['redirect']('/');}_0x4d0e13['render']('account/signup',{'title':a95_0x19ef('0x1d')});};exports['postSignup']=(_0x509c1c,_0x59a368,_0x3bebdd)=>{_0x509c1c[a95_0x19ef('0x9')](a95_0x19ef('0xa'),a95_0x19ef('0x1e'))[a95_0x19ef('0xb')]();_0x509c1c[a95_0x19ef('0x9')](a95_0x19ef('0xc'),a95_0x19ef('0x1f'))['len']({'min':0x4});_0x509c1c[a95_0x19ef('0x9')](a95_0x19ef('0x20'),a95_0x19ef('0x21'))[a95_0x19ef('0x22')](_0x509c1c['body'][a95_0x19ef('0xc')]);_0x509c1c[a95_0x19ef('0xe')](a95_0x19ef('0xa'))[a95_0x19ef('0xf')]({'gmail_remove_dots':![]});const _0xb7a221=_0x509c1c[a95_0x19ef('0x10')]();if(_0xb7a221){_0x509c1c[a95_0x19ef('0x16')](a95_0x19ef('0x13'),_0xb7a221);return _0x59a368[a95_0x19ef('0x5')]('/signup');}const _0x5e4de3=new User_1['default']({'email':_0x509c1c['body'][a95_0x19ef('0xa')],'password':_0x509c1c[a95_0x19ef('0x23')][a95_0x19ef('0xc')]});User_1['default'][a95_0x19ef('0x24')]({'email':_0x509c1c[a95_0x19ef('0x23')][a95_0x19ef('0xa')]},(_0xc89be6,_0x4db213)=>{if(_0xc89be6){return _0x3bebdd(_0xc89be6);}if(_0x4db213){_0x509c1c[a95_0x19ef('0x16')](a95_0x19ef('0x13'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x59a368[a95_0x19ef('0x5')](a95_0x19ef('0x25'));}_0x5e4de3['save'](_0xc89be6=>{if(_0xc89be6){return _0x3bebdd(_0xc89be6);}_0x509c1c[a95_0x19ef('0x15')](_0x5e4de3,_0xc89be6=>{if(_0xc89be6){return _0x3bebdd(_0xc89be6);}_0x59a368[a95_0x19ef('0x5')]('/');});});});};exports[a95_0x19ef('0x26')]=(_0x1ee7b1,_0x41eb62)=>{_0x41eb62[a95_0x19ef('0x27')](a95_0x19ef('0x28'),{'title':'Account\x20Management'});};exports[a95_0x19ef('0x29')]=(_0x542f12,_0x4b1ce9,_0x339dc5)=>{_0x542f12[a95_0x19ef('0x9')](a95_0x19ef('0xa'),a95_0x19ef('0x2a'))[a95_0x19ef('0xb')]();_0x542f12[a95_0x19ef('0xe')](a95_0x19ef('0xa'))[a95_0x19ef('0xf')]({'gmail_remove_dots':![]});const _0x3e992b=_0x542f12[a95_0x19ef('0x10')]();if(_0x3e992b){_0x542f12[a95_0x19ef('0x16')](a95_0x19ef('0x13'),_0x3e992b);return _0x4b1ce9['redirect']('/account');}User_1[a95_0x19ef('0x2b')][a95_0x19ef('0x2c')](_0x542f12[a95_0x19ef('0x2d')]['id'],(_0x4b1509,_0x573823)=>{if(_0x4b1509){return _0x339dc5(_0x4b1509);}_0x573823[a95_0x19ef('0xa')]=_0x542f12[a95_0x19ef('0x23')][a95_0x19ef('0xa')]||'';_0x573823['profile'][a95_0x19ef('0x2e')]=_0x542f12[a95_0x19ef('0x23')]['name']||'';_0x573823['profile'][a95_0x19ef('0x2f')]=_0x542f12['body'][a95_0x19ef('0x2f')]||'';_0x573823[a95_0x19ef('0x30')][a95_0x19ef('0x31')]=_0x542f12['body'][a95_0x19ef('0x31')]||'';_0x573823[a95_0x19ef('0x30')][a95_0x19ef('0x32')]=_0x542f12['body'][a95_0x19ef('0x32')]||'';_0x573823[a95_0x19ef('0x33')](_0x4b1509=>{if(_0x4b1509){if(_0x4b1509[a95_0x19ef('0x34')]===0x2af8){_0x542f12[a95_0x19ef('0x16')](a95_0x19ef('0x13'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x4b1ce9[a95_0x19ef('0x5')](a95_0x19ef('0x35'));}return _0x339dc5(_0x4b1509);}_0x542f12[a95_0x19ef('0x16')](a95_0x19ef('0x17'),{'msg':'Profile\x20information\x20has\x20been\x20updated.'});_0x4b1ce9['redirect'](a95_0x19ef('0x35'));});});};exports[a95_0x19ef('0x36')]=(_0x1b05a1,_0x10d8b9,_0x3d9157)=>{_0x1b05a1[a95_0x19ef('0x9')](a95_0x19ef('0xc'),a95_0x19ef('0x1f'))[a95_0x19ef('0x37')]({'min':0x4});_0x1b05a1[a95_0x19ef('0x9')](a95_0x19ef('0x20'),'Passwords\x20do\x20not\x20match')[a95_0x19ef('0x22')](_0x1b05a1[a95_0x19ef('0x23')]['password']);const _0x3e3f77=_0x1b05a1[a95_0x19ef('0x10')]();if(_0x3e3f77){_0x1b05a1[a95_0x19ef('0x16')](a95_0x19ef('0x13'),_0x3e3f77);return _0x10d8b9[a95_0x19ef('0x5')](a95_0x19ef('0x35'));}User_1['default'][a95_0x19ef('0x2c')](_0x1b05a1[a95_0x19ef('0x2d')]['id'],(_0x5b2fd9,_0x15e3b5)=>{if(_0x5b2fd9){return _0x3d9157(_0x5b2fd9);}_0x15e3b5[a95_0x19ef('0xc')]=_0x1b05a1[a95_0x19ef('0x23')][a95_0x19ef('0xc')];_0x15e3b5[a95_0x19ef('0x33')](_0x5b2fd9=>{if(_0x5b2fd9){return _0x3d9157(_0x5b2fd9);}_0x1b05a1[a95_0x19ef('0x16')](a95_0x19ef('0x17'),{'msg':a95_0x19ef('0x38')});_0x10d8b9[a95_0x19ef('0x5')](a95_0x19ef('0x35'));});});};exports[a95_0x19ef('0x39')]=(_0x4f0e1a,_0x3a3175,_0x41a9cf)=>{User_1[a95_0x19ef('0x2b')][a95_0x19ef('0x3a')]({'_id':_0x4f0e1a['user']['id']},_0x18c668=>{if(_0x18c668){return _0x41a9cf(_0x18c668);}_0x4f0e1a[a95_0x19ef('0x1b')]();_0x4f0e1a[a95_0x19ef('0x16')]('info',{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0x3a3175['redirect']('/');});};exports[a95_0x19ef('0x3b')]=(_0x1d6a07,_0x3e0143,_0x23c94f)=>{const _0x4ecb98=_0x1d6a07[a95_0x19ef('0x3c')]['provider'];User_1[a95_0x19ef('0x2b')][a95_0x19ef('0x2c')](_0x1d6a07[a95_0x19ef('0x2d')]['id'],(_0x9dbeb9,_0x2926cb)=>{if(_0x9dbeb9){return _0x23c94f(_0x9dbeb9);}_0x2926cb[_0x4ecb98]=undefined;_0x2926cb['tokens']=_0x2926cb[a95_0x19ef('0x3d')][a95_0x19ef('0x3e')](_0x5ec6f3=>_0x5ec6f3[a95_0x19ef('0x3f')]!==_0x4ecb98);_0x2926cb['save'](_0x9dbeb9=>{if(_0x9dbeb9){return _0x23c94f(_0x9dbeb9);}_0x1d6a07[a95_0x19ef('0x16')]('info',{'msg':_0x4ecb98+a95_0x19ef('0x40')});_0x3e0143[a95_0x19ef('0x5')](a95_0x19ef('0x35'));});});};exports[a95_0x19ef('0x41')]=(_0x43d455,_0x1d795a,_0x3b9b43)=>{if(_0x43d455[a95_0x19ef('0x42')]()){return _0x1d795a[a95_0x19ef('0x5')]('/');}User_1['default']['findOne']({'passwordResetToken':_0x43d455[a95_0x19ef('0x3c')][a95_0x19ef('0x43')]})[a95_0x19ef('0x44')](a95_0x19ef('0x45'))['gt'](Date[a95_0x19ef('0x46')]())[a95_0x19ef('0x47')]((_0x5ad837,_0x1e348d)=>{if(_0x5ad837){return _0x3b9b43(_0x5ad837);}if(!_0x1e348d){_0x43d455[a95_0x19ef('0x16')](a95_0x19ef('0x13'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x1d795a[a95_0x19ef('0x5')](a95_0x19ef('0x48'));}_0x1d795a[a95_0x19ef('0x27')](a95_0x19ef('0x49'),{'title':a95_0x19ef('0x4a')});});};exports[a95_0x19ef('0x4b')]=(_0x34492a,_0x50215a,_0x58ebed)=>{_0x34492a['assert'](a95_0x19ef('0xc'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a95_0x19ef('0x37')]({'min':0x4});_0x34492a['assert'](a95_0x19ef('0x4c'),a95_0x19ef('0x4d'))['equals'](_0x34492a[a95_0x19ef('0x23')][a95_0x19ef('0xc')]);const _0x15a3e0=_0x34492a[a95_0x19ef('0x10')]();if(_0x15a3e0){_0x34492a[a95_0x19ef('0x16')]('errors',_0x15a3e0);return _0x50215a[a95_0x19ef('0x5')](a95_0x19ef('0x4e'));}async_1['default'][a95_0x19ef('0x4f')]([function resetPassword(_0x1d507d){User_1[a95_0x19ef('0x2b')][a95_0x19ef('0x24')]({'passwordResetToken':_0x34492a[a95_0x19ef('0x3c')][a95_0x19ef('0x43')]})[a95_0x19ef('0x44')](a95_0x19ef('0x45'))['gt'](Date['now']())[a95_0x19ef('0x47')]((_0x2b38eb,_0x4f69da)=>{if(_0x2b38eb){return _0x58ebed(_0x2b38eb);}if(!_0x4f69da){_0x34492a[a95_0x19ef('0x16')](a95_0x19ef('0x13'),{'msg':a95_0x19ef('0x50')});return _0x50215a[a95_0x19ef('0x5')](a95_0x19ef('0x4e'));}_0x4f69da[a95_0x19ef('0xc')]=_0x34492a[a95_0x19ef('0x23')][a95_0x19ef('0xc')];_0x4f69da['passwordResetToken']=undefined;_0x4f69da[a95_0x19ef('0x45')]=undefined;_0x4f69da['save'](_0x2b38eb=>{if(_0x2b38eb){return _0x58ebed(_0x2b38eb);}_0x34492a[a95_0x19ef('0x15')](_0x4f69da,_0x2b38eb=>{_0x1d507d(_0x2b38eb,_0x4f69da);});});});},function sendResetPasswordEmail(_0xe2e0f2,_0x45f365){const _0x4d175a=nodemailer_1[a95_0x19ef('0x2b')][a95_0x19ef('0x51')]({'service':a95_0x19ef('0x52'),'auth':{'user':process['env'][a95_0x19ef('0x53')],'pass':process['env'][a95_0x19ef('0x54')]}});const _0x1d360d={'to':_0xe2e0f2['email'],'from':a95_0x19ef('0x55'),'subject':a95_0x19ef('0x56'),'text':a95_0x19ef('0x57')+_0xe2e0f2[a95_0x19ef('0xa')]+a95_0x19ef('0x58')};_0x4d175a[a95_0x19ef('0x59')](_0x1d360d,_0x1e4501=>{_0x34492a['flash'](a95_0x19ef('0x17'),{'msg':a95_0x19ef('0x5a')});_0x45f365(_0x1e4501);});}],_0x284936=>{if(_0x284936){return _0x58ebed(_0x284936);}_0x50215a['redirect']('/');});};exports['getForgot']=(_0x3fb3dd,_0x31e3a6)=>{if(_0x3fb3dd['isAuthenticated']()){return _0x31e3a6[a95_0x19ef('0x5')]('/');}_0x31e3a6['render'](a95_0x19ef('0x5b'),{'title':a95_0x19ef('0x5c')});};exports['postForgot']=(_0x373c1b,_0x12d579,_0x412482)=>{_0x373c1b[a95_0x19ef('0x9')]('email',a95_0x19ef('0x2a'))[a95_0x19ef('0xb')]();_0x373c1b['sanitize'](a95_0x19ef('0xa'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x4db707=_0x373c1b[a95_0x19ef('0x10')]();if(_0x4db707){_0x373c1b[a95_0x19ef('0x16')]('errors',_0x4db707);return _0x12d579[a95_0x19ef('0x5')](a95_0x19ef('0x48'));}async_1[a95_0x19ef('0x2b')][a95_0x19ef('0x4f')]([function createRandomToken(_0x17c29a){crypto_1['default'][a95_0x19ef('0x5d')](0x10,(_0x5448a8,_0x2236d7)=>{const _0x296a93=_0x2236d7[a95_0x19ef('0x5e')](a95_0x19ef('0x5f'));_0x17c29a(_0x5448a8,_0x296a93);});},function setRandomToken(_0x5c8a38,_0x165f76){User_1[a95_0x19ef('0x2b')][a95_0x19ef('0x24')]({'email':_0x373c1b[a95_0x19ef('0x23')][a95_0x19ef('0xa')]},(_0x6cec04,_0x31243c)=>{if(_0x6cec04){return _0x165f76(_0x6cec04);}if(!_0x31243c){_0x373c1b[a95_0x19ef('0x16')](a95_0x19ef('0x13'),{'msg':a95_0x19ef('0x60')});return _0x12d579['redirect'](a95_0x19ef('0x48'));}_0x31243c[a95_0x19ef('0x61')]=_0x5c8a38;_0x31243c[a95_0x19ef('0x45')]=Date['now']()+0x36ee80;_0x31243c[a95_0x19ef('0x33')](_0x6cec04=>{_0x165f76(_0x6cec04,_0x5c8a38,_0x31243c);});});},function sendForgotPasswordEmail(_0x1679ec,_0x2c71ee,_0x5d3969){const _0x3253b4=nodemailer_1[a95_0x19ef('0x2b')]['createTransport']({'service':'SendGrid','auth':{'user':process[a95_0x19ef('0x62')]['SENDGRID_USER'],'pass':process[a95_0x19ef('0x62')][a95_0x19ef('0x54')]}});const _0x443184={'to':_0x2c71ee['email'],'from':a95_0x19ef('0x63'),'subject':a95_0x19ef('0x64'),'text':a95_0x19ef('0x65')+_0x373c1b[a95_0x19ef('0x66')]['host']+a95_0x19ef('0x67')+_0x1679ec+'\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a'};_0x3253b4[a95_0x19ef('0x59')](_0x443184,_0x2871c7=>{_0x373c1b[a95_0x19ef('0x16')](a95_0x19ef('0x68'),{'msg':a95_0x19ef('0x69')+_0x2c71ee[a95_0x19ef('0xa')]+a95_0x19ef('0x6a')});_0x5d3969(_0x2871c7);});}],_0x98fa5e=>{if(_0x98fa5e){return _0x412482(_0x98fa5e);}_0x12d579[a95_0x19ef('0x5')](a95_0x19ef('0x48'));});};