var a94_0x5165=['Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','sanitize','findById','user','name','profile','gender','location','website','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','/account','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','equals','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','waterfall','back','passwordResetToken','passwordResetExpires','SendGrid','SENDGRID_USER','env','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','account/forgot','postForgot','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','createTransport','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','/reset/','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','__importDefault','__esModule','async','crypto','nodemailer','passport','../models/User','express-validator','getLogin','render','Login','postLogin','assert','email','Email\x20is\x20not\x20valid','password','Password\x20cannot\x20be\x20blank','notEmpty','normalizeEmail','validationErrors','flash','errors','redirect','local','message','/login','logIn','success','returnTo','logout','getSignup','account/signup','postSignup','isEmail','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','body','/signup','default','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','getAccount','account/profile'];(function(_0x4564aa,_0x2b1c52){var _0x2a3869=function(_0x423f35){while(--_0x423f35){_0x4564aa['push'](_0x4564aa['shift']());}};_0x2a3869(++_0x2b1c52);}(a94_0x5165,0x125));var a94_0x4095=function(_0x143bfe,_0x3e631f){_0x143bfe=_0x143bfe-0x0;var _0x5879df=a94_0x5165[_0x143bfe];return _0x5879df;};'use strict';var __importDefault=this&&this[a94_0x4095('0x0')]||function(_0x418e71){return _0x418e71&&_0x418e71[a94_0x4095('0x1')]?_0x418e71:{'default':_0x418e71};};Object['defineProperty'](exports,a94_0x4095('0x1'),{'value':!![]});const async_1=__importDefault(require(a94_0x4095('0x2')));const crypto_1=__importDefault(require(a94_0x4095('0x3')));const nodemailer_1=__importDefault(require(a94_0x4095('0x4')));const passport_1=__importDefault(require(a94_0x4095('0x5')));const User_1=__importDefault(require(a94_0x4095('0x6')));const request=require(a94_0x4095('0x7'));exports[a94_0x4095('0x8')]=(_0x560d10,_0x5be2e5)=>{if(_0x560d10['user']){return _0x5be2e5['redirect']('/');}_0x5be2e5[a94_0x4095('0x9')]('account/login',{'title':a94_0x4095('0xa')});};exports[a94_0x4095('0xb')]=(_0x36a0d6,_0x2b8ebc,_0x4bb5b4)=>{_0x36a0d6[a94_0x4095('0xc')](a94_0x4095('0xd'),a94_0x4095('0xe'))['isEmail']();_0x36a0d6[a94_0x4095('0xc')](a94_0x4095('0xf'),a94_0x4095('0x10'))[a94_0x4095('0x11')]();_0x36a0d6['sanitize']('email')[a94_0x4095('0x12')]({'gmail_remove_dots':![]});const _0x28b6c9=_0x36a0d6[a94_0x4095('0x13')]();if(_0x28b6c9){_0x36a0d6[a94_0x4095('0x14')](a94_0x4095('0x15'),_0x28b6c9);return _0x2b8ebc[a94_0x4095('0x16')]('/login');}passport_1['default']['authenticate'](a94_0x4095('0x17'),(_0x57e16a,_0x56d18f,_0x1c17c9)=>{if(_0x57e16a){return _0x4bb5b4(_0x57e16a);}if(!_0x56d18f){_0x36a0d6[a94_0x4095('0x14')](a94_0x4095('0x15'),_0x1c17c9[a94_0x4095('0x18')]);return _0x2b8ebc[a94_0x4095('0x16')](a94_0x4095('0x19'));}_0x36a0d6[a94_0x4095('0x1a')](_0x56d18f,_0x57e16a=>{if(_0x57e16a){return _0x4bb5b4(_0x57e16a);}_0x36a0d6[a94_0x4095('0x14')](a94_0x4095('0x1b'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x2b8ebc[a94_0x4095('0x16')](_0x36a0d6['session'][a94_0x4095('0x1c')]||'/');});})(_0x36a0d6,_0x2b8ebc,_0x4bb5b4);};exports[a94_0x4095('0x1d')]=(_0x2e52a8,_0x2c88d2)=>{_0x2e52a8[a94_0x4095('0x1d')]();_0x2c88d2[a94_0x4095('0x16')]('/');};exports[a94_0x4095('0x1e')]=(_0x356d01,_0x3654fe)=>{if(_0x356d01['user']){return _0x3654fe[a94_0x4095('0x16')]('/');}_0x3654fe['render'](a94_0x4095('0x1f'),{'title':'Create\x20Account'});};exports[a94_0x4095('0x20')]=(_0x4c248e,_0x450822,_0x15f288)=>{_0x4c248e['assert'](a94_0x4095('0xd'),a94_0x4095('0xe'))[a94_0x4095('0x21')]();_0x4c248e[a94_0x4095('0xc')](a94_0x4095('0xf'),a94_0x4095('0x22'))[a94_0x4095('0x23')]({'min':0x4});_0x4c248e[a94_0x4095('0xc')](a94_0x4095('0x24'),a94_0x4095('0x25'))['equals'](_0x4c248e[a94_0x4095('0x26')][a94_0x4095('0xf')]);_0x4c248e['sanitize'](a94_0x4095('0xd'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x4e3cb7=_0x4c248e['validationErrors']();if(_0x4e3cb7){_0x4c248e['flash'](a94_0x4095('0x15'),_0x4e3cb7);return _0x450822[a94_0x4095('0x16')](a94_0x4095('0x27'));}const _0x34fbbf=new User_1['default']({'email':_0x4c248e['body'][a94_0x4095('0xd')],'password':_0x4c248e[a94_0x4095('0x26')][a94_0x4095('0xf')]});User_1[a94_0x4095('0x28')][a94_0x4095('0x29')]({'email':_0x4c248e[a94_0x4095('0x26')][a94_0x4095('0xd')]},(_0x3e7958,_0xa3b708)=>{if(_0x3e7958){return _0x15f288(_0x3e7958);}if(_0xa3b708){_0x4c248e[a94_0x4095('0x14')](a94_0x4095('0x15'),{'msg':a94_0x4095('0x2a')});return _0x450822[a94_0x4095('0x16')]('/signup');}_0x34fbbf[a94_0x4095('0x2b')](_0x3e7958=>{if(_0x3e7958){return _0x15f288(_0x3e7958);}_0x4c248e[a94_0x4095('0x1a')](_0x34fbbf,_0x3e7958=>{if(_0x3e7958){return _0x15f288(_0x3e7958);}_0x450822[a94_0x4095('0x16')]('/');});});});};exports[a94_0x4095('0x2c')]=(_0x394289,_0xf42b40)=>{_0xf42b40['render'](a94_0x4095('0x2d'),{'title':a94_0x4095('0x2e')});};exports[a94_0x4095('0x2f')]=(_0x121cfc,_0x4e0415,_0x22cb24)=>{_0x121cfc[a94_0x4095('0xc')](a94_0x4095('0xd'),a94_0x4095('0x30'))[a94_0x4095('0x21')]();_0x121cfc[a94_0x4095('0x31')]('email')[a94_0x4095('0x12')]({'gmail_remove_dots':![]});const _0x417b68=_0x121cfc[a94_0x4095('0x13')]();if(_0x417b68){_0x121cfc['flash']('errors',_0x417b68);return _0x4e0415[a94_0x4095('0x16')]('/account');}User_1['default'][a94_0x4095('0x32')](_0x121cfc[a94_0x4095('0x33')]['id'],(_0x1510fa,_0x106459)=>{if(_0x1510fa){return _0x22cb24(_0x1510fa);}_0x106459[a94_0x4095('0xd')]=_0x121cfc[a94_0x4095('0x26')][a94_0x4095('0xd')]||'';_0x106459['profile']['name']=_0x121cfc[a94_0x4095('0x26')][a94_0x4095('0x34')]||'';_0x106459[a94_0x4095('0x35')]['gender']=_0x121cfc['body'][a94_0x4095('0x36')]||'';_0x106459[a94_0x4095('0x35')][a94_0x4095('0x37')]=_0x121cfc['body'][a94_0x4095('0x37')]||'';_0x106459[a94_0x4095('0x35')][a94_0x4095('0x38')]=_0x121cfc['body'][a94_0x4095('0x38')]||'';_0x106459['save'](_0x1510fa=>{if(_0x1510fa){if(_0x1510fa['code']===0x2af8){_0x121cfc['flash']('errors',{'msg':a94_0x4095('0x39')});return _0x4e0415[a94_0x4095('0x16')](a94_0x4095('0x3a'));}return _0x22cb24(_0x1510fa);}_0x121cfc[a94_0x4095('0x14')](a94_0x4095('0x1b'),{'msg':a94_0x4095('0x3b')});_0x4e0415[a94_0x4095('0x16')](a94_0x4095('0x3a'));});});};exports[a94_0x4095('0x3c')]=(_0x1bbdb1,_0x547504,_0x3f2e23)=>{_0x1bbdb1[a94_0x4095('0xc')](a94_0x4095('0xf'),a94_0x4095('0x22'))[a94_0x4095('0x23')]({'min':0x4});_0x1bbdb1[a94_0x4095('0xc')](a94_0x4095('0x24'),'Passwords\x20do\x20not\x20match')[a94_0x4095('0x3d')](_0x1bbdb1[a94_0x4095('0x26')][a94_0x4095('0xf')]);const _0x148d21=_0x1bbdb1[a94_0x4095('0x13')]();if(_0x148d21){_0x1bbdb1[a94_0x4095('0x14')](a94_0x4095('0x15'),_0x148d21);return _0x547504[a94_0x4095('0x16')]('/account');}User_1[a94_0x4095('0x28')]['findById'](_0x1bbdb1['user']['id'],(_0x59634c,_0x3f2842)=>{if(_0x59634c){return _0x3f2e23(_0x59634c);}_0x3f2842['password']=_0x1bbdb1['body'][a94_0x4095('0xf')];_0x3f2842[a94_0x4095('0x2b')](_0x59634c=>{if(_0x59634c){return _0x3f2e23(_0x59634c);}_0x1bbdb1['flash']('success',{'msg':'Password\x20has\x20been\x20changed.'});_0x547504['redirect']('/account');});});};exports[a94_0x4095('0x3e')]=(_0x3f8fb8,_0x3ddb58,_0x3d4de6)=>{User_1['default'][a94_0x4095('0x3f')]({'_id':_0x3f8fb8[a94_0x4095('0x33')]['id']},_0x4373bd=>{if(_0x4373bd){return _0x3d4de6(_0x4373bd);}_0x3f8fb8[a94_0x4095('0x1d')]();_0x3f8fb8[a94_0x4095('0x14')](a94_0x4095('0x40'),{'msg':a94_0x4095('0x41')});_0x3ddb58[a94_0x4095('0x16')]('/');});};exports[a94_0x4095('0x42')]=(_0x574fee,_0x2912c3,_0x274e30)=>{const _0x31976b=_0x574fee[a94_0x4095('0x43')][a94_0x4095('0x44')];User_1['default'][a94_0x4095('0x32')](_0x574fee['user']['id'],(_0x55bed5,_0x5a4e9a)=>{if(_0x55bed5){return _0x274e30(_0x55bed5);}_0x5a4e9a[_0x31976b]=undefined;_0x5a4e9a['tokens']=_0x5a4e9a[a94_0x4095('0x45')][a94_0x4095('0x46')](_0xeea976=>_0xeea976[a94_0x4095('0x47')]!==_0x31976b);_0x5a4e9a['save'](_0x55bed5=>{if(_0x55bed5){return _0x274e30(_0x55bed5);}_0x574fee[a94_0x4095('0x14')](a94_0x4095('0x40'),{'msg':_0x31976b+a94_0x4095('0x48')});_0x2912c3['redirect']('/account');});});};exports[a94_0x4095('0x49')]=(_0x366d9c,_0x42e09,_0x1ca971)=>{if(_0x366d9c[a94_0x4095('0x4a')]()){return _0x42e09[a94_0x4095('0x16')]('/');}User_1['default'][a94_0x4095('0x29')]({'passwordResetToken':_0x366d9c['params'][a94_0x4095('0x4b')]})[a94_0x4095('0x4c')]('passwordResetExpires')['gt'](Date[a94_0x4095('0x4d')]())[a94_0x4095('0x4e')]((_0x3a85d1,_0x423bd0)=>{if(_0x3a85d1){return _0x1ca971(_0x3a85d1);}if(!_0x423bd0){_0x366d9c['flash']('errors',{'msg':a94_0x4095('0x4f')});return _0x42e09[a94_0x4095('0x16')](a94_0x4095('0x50'));}_0x42e09[a94_0x4095('0x9')](a94_0x4095('0x51'),{'title':a94_0x4095('0x52')});});};exports[a94_0x4095('0x53')]=(_0x38e717,_0x51536e,_0x201553)=>{_0x38e717[a94_0x4095('0xc')](a94_0x4095('0xf'),a94_0x4095('0x54'))[a94_0x4095('0x23')]({'min':0x4});_0x38e717['assert'](a94_0x4095('0x55'),a94_0x4095('0x56'))[a94_0x4095('0x3d')](_0x38e717[a94_0x4095('0x26')][a94_0x4095('0xf')]);const _0x5274db=_0x38e717['validationErrors']();if(_0x5274db){_0x38e717[a94_0x4095('0x14')](a94_0x4095('0x15'),_0x5274db);return _0x51536e[a94_0x4095('0x16')]('back');}async_1[a94_0x4095('0x28')][a94_0x4095('0x57')]([function resetPassword(_0x30a616){User_1[a94_0x4095('0x28')][a94_0x4095('0x29')]({'passwordResetToken':_0x38e717[a94_0x4095('0x43')][a94_0x4095('0x4b')]})['where']('passwordResetExpires')['gt'](Date[a94_0x4095('0x4d')]())[a94_0x4095('0x4e')]((_0x59e5a4,_0x252d96)=>{if(_0x59e5a4){return _0x201553(_0x59e5a4);}if(!_0x252d96){_0x38e717[a94_0x4095('0x14')]('errors',{'msg':a94_0x4095('0x4f')});return _0x51536e[a94_0x4095('0x16')](a94_0x4095('0x58'));}_0x252d96[a94_0x4095('0xf')]=_0x38e717['body'][a94_0x4095('0xf')];_0x252d96[a94_0x4095('0x59')]=undefined;_0x252d96[a94_0x4095('0x5a')]=undefined;_0x252d96[a94_0x4095('0x2b')](_0x59e5a4=>{if(_0x59e5a4){return _0x201553(_0x59e5a4);}_0x38e717['logIn'](_0x252d96,_0x59e5a4=>{_0x30a616(_0x59e5a4,_0x252d96);});});});},function sendResetPasswordEmail(_0xdfd37d,_0x48b223){const _0x4e743c=nodemailer_1['default']['createTransport']({'service':a94_0x4095('0x5b'),'auth':{'user':process['env'][a94_0x4095('0x5c')],'pass':process[a94_0x4095('0x5d')][a94_0x4095('0x5e')]}});const _0x283b42={'to':_0xdfd37d['email'],'from':a94_0x4095('0x5f'),'subject':a94_0x4095('0x60'),'text':a94_0x4095('0x61')+_0xdfd37d[a94_0x4095('0xd')]+a94_0x4095('0x62')};_0x4e743c[a94_0x4095('0x63')](_0x283b42,_0x51112b=>{_0x38e717['flash'](a94_0x4095('0x1b'),{'msg':a94_0x4095('0x64')});_0x48b223(_0x51112b);});}],_0x431b9c=>{if(_0x431b9c){return _0x201553(_0x431b9c);}_0x51536e['redirect']('/');});};exports[a94_0x4095('0x65')]=(_0x529597,_0x53dc97)=>{if(_0x529597[a94_0x4095('0x4a')]()){return _0x53dc97[a94_0x4095('0x16')]('/');}_0x53dc97[a94_0x4095('0x9')](a94_0x4095('0x66'),{'title':'Forgot\x20Password'});};exports[a94_0x4095('0x67')]=(_0x59690a,_0x1b54bd,_0x26c4c5)=>{_0x59690a[a94_0x4095('0xc')](a94_0x4095('0xd'),a94_0x4095('0x30'))[a94_0x4095('0x21')]();_0x59690a[a94_0x4095('0x31')](a94_0x4095('0xd'))[a94_0x4095('0x12')]({'gmail_remove_dots':![]});const _0x167a26=_0x59690a[a94_0x4095('0x13')]();if(_0x167a26){_0x59690a[a94_0x4095('0x14')]('errors',_0x167a26);return _0x1b54bd[a94_0x4095('0x16')]('/forgot');}async_1['default'][a94_0x4095('0x57')]([function createRandomToken(_0x143a7b){crypto_1[a94_0x4095('0x28')]['randomBytes'](0x10,(_0x35b110,_0x184097)=>{const _0x53e06b=_0x184097[a94_0x4095('0x68')](a94_0x4095('0x69'));_0x143a7b(_0x35b110,_0x53e06b);});},function setRandomToken(_0x1519f2,_0xca9f49){User_1[a94_0x4095('0x28')][a94_0x4095('0x29')]({'email':_0x59690a[a94_0x4095('0x26')][a94_0x4095('0xd')]},(_0xc22c28,_0x3836b7)=>{if(_0xc22c28){return _0xca9f49(_0xc22c28);}if(!_0x3836b7){_0x59690a[a94_0x4095('0x14')]('errors',{'msg':a94_0x4095('0x6a')});return _0x1b54bd[a94_0x4095('0x16')](a94_0x4095('0x50'));}_0x3836b7[a94_0x4095('0x59')]=_0x1519f2;_0x3836b7[a94_0x4095('0x5a')]=Date['now']()+0x36ee80;_0x3836b7['save'](_0xc22c28=>{_0xca9f49(_0xc22c28,_0x1519f2,_0x3836b7);});});},function sendForgotPasswordEmail(_0x336884,_0x11c73c,_0x326df1){const _0x260ef3=nodemailer_1[a94_0x4095('0x28')][a94_0x4095('0x6b')]({'service':a94_0x4095('0x5b'),'auth':{'user':process[a94_0x4095('0x5d')]['SENDGRID_USER'],'pass':process[a94_0x4095('0x5d')]['SENDGRID_PASSWORD']}});const _0xd4dccb={'to':_0x11c73c[a94_0x4095('0xd')],'from':'hackathon@starter.com','subject':'Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','text':a94_0x4095('0x6c')+_0x59690a[a94_0x4095('0x6d')][a94_0x4095('0x6e')]+a94_0x4095('0x6f')+_0x336884+'\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a'};_0x260ef3[a94_0x4095('0x63')](_0xd4dccb,_0x373837=>{_0x59690a[a94_0x4095('0x14')](a94_0x4095('0x40'),{'msg':a94_0x4095('0x70')+_0x11c73c['email']+'\x20with\x20further\x20instructions.'});_0x326df1(_0x373837);});}],_0x585dc8=>{if(_0x585dc8){return _0x26c4c5(_0x585dc8);}_0x1b54bd[a94_0x4095('0x16')](a94_0x4095('0x50'));});};