var a91_0x2ff1=['success','logout','getSignup','user','account/signup','Create\x20Account','postSignup','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','Passwords\x20do\x20not\x20match','equals','body','sanitize','/signup','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','account/profile','/account','findById','name','profile','gender','location','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','confirmPassword','remove','info','Your\x20account\x20has\x20been\x20deleted.','tokens','kind','\x20account\x20has\x20been\x20unlinked.','getReset','params','token','where','passwordResetExpires','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','confirm','Passwords\x20must\x20match.','waterfall','back','SendGrid','env','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','isAuthenticated','account/forgot','Forgot\x20Password','postForgot','Please\x20enter\x20a\x20valid\x20email\x20address.','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','passwordResetToken','now','createTransport','SENDGRID_USER','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','crypto','nodemailer','passport','../models/User','express-validator','getLogin','redirect','render','account/login','postLogin','assert','email','Email\x20is\x20not\x20valid','isEmail','password','Password\x20cannot\x20be\x20blank','normalizeEmail','validationErrors','default','local','flash','errors','message','/login','logIn'];(function(_0x3562b5,_0x22dabc){var _0x54d52d=function(_0x27bd3d){while(--_0x27bd3d){_0x3562b5['push'](_0x3562b5['shift']());}};_0x54d52d(++_0x22dabc);}(a91_0x2ff1,0x128));var a91_0x5653=function(_0x7ed301,_0x869153){_0x7ed301=_0x7ed301-0x0;var _0x3f96eb=a91_0x2ff1[_0x7ed301];return _0x3f96eb;};'use strict';var __importDefault=this&&this[a91_0x5653('0x0')]||function(_0x22350a){return _0x22350a&&_0x22350a[a91_0x5653('0x1')]?_0x22350a:{'default':_0x22350a};};Object[a91_0x5653('0x2')](exports,a91_0x5653('0x1'),{'value':!![]});const async_1=__importDefault(require('async'));const crypto_1=__importDefault(require(a91_0x5653('0x3')));const nodemailer_1=__importDefault(require(a91_0x5653('0x4')));const passport_1=__importDefault(require(a91_0x5653('0x5')));const User_1=__importDefault(require(a91_0x5653('0x6')));const request=require(a91_0x5653('0x7'));exports[a91_0x5653('0x8')]=(_0x4422ad,_0x50c337)=>{if(_0x4422ad['user']){return _0x50c337[a91_0x5653('0x9')]('/');}_0x50c337[a91_0x5653('0xa')](a91_0x5653('0xb'),{'title':'Login'});};exports[a91_0x5653('0xc')]=(_0x5cb262,_0x152e64,_0x47c6ec)=>{_0x5cb262[a91_0x5653('0xd')](a91_0x5653('0xe'),a91_0x5653('0xf'))[a91_0x5653('0x10')]();_0x5cb262['assert'](a91_0x5653('0x11'),a91_0x5653('0x12'))['notEmpty']();_0x5cb262['sanitize'](a91_0x5653('0xe'))[a91_0x5653('0x13')]({'gmail_remove_dots':![]});const _0x480abd=_0x5cb262[a91_0x5653('0x14')]();if(_0x480abd){_0x5cb262['flash']('errors',_0x480abd);return _0x152e64[a91_0x5653('0x9')]('/login');}passport_1[a91_0x5653('0x15')]['authenticate'](a91_0x5653('0x16'),(_0x48b3c9,_0x344add,_0x1f7492)=>{if(_0x48b3c9){return _0x47c6ec(_0x48b3c9);}if(!_0x344add){_0x5cb262[a91_0x5653('0x17')](a91_0x5653('0x18'),_0x1f7492[a91_0x5653('0x19')]);return _0x152e64[a91_0x5653('0x9')](a91_0x5653('0x1a'));}_0x5cb262[a91_0x5653('0x1b')](_0x344add,_0x48b3c9=>{if(_0x48b3c9){return _0x47c6ec(_0x48b3c9);}_0x5cb262[a91_0x5653('0x17')](a91_0x5653('0x1c'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x152e64[a91_0x5653('0x9')](_0x5cb262['session']['returnTo']||'/');});})(_0x5cb262,_0x152e64,_0x47c6ec);};exports['logout']=(_0x55d7b7,_0x2db5a2)=>{_0x55d7b7[a91_0x5653('0x1d')]();_0x2db5a2[a91_0x5653('0x9')]('/');};exports[a91_0x5653('0x1e')]=(_0x3b47db,_0x115cb8)=>{if(_0x3b47db[a91_0x5653('0x1f')]){return _0x115cb8[a91_0x5653('0x9')]('/');}_0x115cb8[a91_0x5653('0xa')](a91_0x5653('0x20'),{'title':a91_0x5653('0x21')});};exports[a91_0x5653('0x22')]=(_0x11b251,_0x3b13c6,_0x4cb1e5)=>{_0x11b251[a91_0x5653('0xd')]('email',a91_0x5653('0xf'))[a91_0x5653('0x10')]();_0x11b251[a91_0x5653('0xd')](a91_0x5653('0x11'),a91_0x5653('0x23'))[a91_0x5653('0x24')]({'min':0x4});_0x11b251[a91_0x5653('0xd')]('confirmPassword',a91_0x5653('0x25'))[a91_0x5653('0x26')](_0x11b251[a91_0x5653('0x27')][a91_0x5653('0x11')]);_0x11b251[a91_0x5653('0x28')](a91_0x5653('0xe'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x497ff=_0x11b251[a91_0x5653('0x14')]();if(_0x497ff){_0x11b251[a91_0x5653('0x17')](a91_0x5653('0x18'),_0x497ff);return _0x3b13c6[a91_0x5653('0x9')](a91_0x5653('0x29'));}const _0x246ddc=new User_1['default']({'email':_0x11b251[a91_0x5653('0x27')][a91_0x5653('0xe')],'password':_0x11b251[a91_0x5653('0x27')][a91_0x5653('0x11')]});User_1[a91_0x5653('0x15')][a91_0x5653('0x2a')]({'email':_0x11b251[a91_0x5653('0x27')][a91_0x5653('0xe')]},(_0x4ff255,_0x244c38)=>{if(_0x4ff255){return _0x4cb1e5(_0x4ff255);}if(_0x244c38){_0x11b251[a91_0x5653('0x17')](a91_0x5653('0x18'),{'msg':a91_0x5653('0x2b')});return _0x3b13c6['redirect'](a91_0x5653('0x29'));}_0x246ddc[a91_0x5653('0x2c')](_0x4ff255=>{if(_0x4ff255){return _0x4cb1e5(_0x4ff255);}_0x11b251[a91_0x5653('0x1b')](_0x246ddc,_0x4ff255=>{if(_0x4ff255){return _0x4cb1e5(_0x4ff255);}_0x3b13c6['redirect']('/');});});});};exports['getAccount']=(_0x28617c,_0xc92bda)=>{_0xc92bda[a91_0x5653('0xa')](a91_0x5653('0x2d'),{'title':'Account\x20Management'});};exports['postUpdateProfile']=(_0x437139,_0x41bb3d,_0x3d7d2c)=>{_0x437139['assert'](a91_0x5653('0xe'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a91_0x5653('0x10')]();_0x437139[a91_0x5653('0x28')](a91_0x5653('0xe'))[a91_0x5653('0x13')]({'gmail_remove_dots':![]});const _0x3767f7=_0x437139[a91_0x5653('0x14')]();if(_0x3767f7){_0x437139[a91_0x5653('0x17')](a91_0x5653('0x18'),_0x3767f7);return _0x41bb3d[a91_0x5653('0x9')](a91_0x5653('0x2e'));}User_1[a91_0x5653('0x15')][a91_0x5653('0x2f')](_0x437139['user']['id'],(_0x38502d,_0x50919d)=>{if(_0x38502d){return _0x3d7d2c(_0x38502d);}_0x50919d[a91_0x5653('0xe')]=_0x437139[a91_0x5653('0x27')]['email']||'';_0x50919d['profile'][a91_0x5653('0x30')]=_0x437139[a91_0x5653('0x27')][a91_0x5653('0x30')]||'';_0x50919d[a91_0x5653('0x31')][a91_0x5653('0x32')]=_0x437139['body'][a91_0x5653('0x32')]||'';_0x50919d[a91_0x5653('0x31')][a91_0x5653('0x33')]=_0x437139['body'][a91_0x5653('0x33')]||'';_0x50919d[a91_0x5653('0x31')]['website']=_0x437139['body']['website']||'';_0x50919d[a91_0x5653('0x2c')](_0x38502d=>{if(_0x38502d){if(_0x38502d[a91_0x5653('0x34')]===0x2af8){_0x437139[a91_0x5653('0x17')](a91_0x5653('0x18'),{'msg':a91_0x5653('0x35')});return _0x41bb3d[a91_0x5653('0x9')](a91_0x5653('0x2e'));}return _0x3d7d2c(_0x38502d);}_0x437139[a91_0x5653('0x17')]('success',{'msg':a91_0x5653('0x36')});_0x41bb3d[a91_0x5653('0x9')]('/account');});});};exports[a91_0x5653('0x37')]=(_0x4a7375,_0xc00efa,_0x4c1e3a)=>{_0x4a7375[a91_0x5653('0xd')](a91_0x5653('0x11'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')[a91_0x5653('0x24')]({'min':0x4});_0x4a7375['assert'](a91_0x5653('0x38'),a91_0x5653('0x25'))[a91_0x5653('0x26')](_0x4a7375[a91_0x5653('0x27')]['password']);const _0xf4b147=_0x4a7375[a91_0x5653('0x14')]();if(_0xf4b147){_0x4a7375[a91_0x5653('0x17')](a91_0x5653('0x18'),_0xf4b147);return _0xc00efa[a91_0x5653('0x9')]('/account');}User_1['default'][a91_0x5653('0x2f')](_0x4a7375[a91_0x5653('0x1f')]['id'],(_0x291a93,_0x167455)=>{if(_0x291a93){return _0x4c1e3a(_0x291a93);}_0x167455[a91_0x5653('0x11')]=_0x4a7375[a91_0x5653('0x27')][a91_0x5653('0x11')];_0x167455[a91_0x5653('0x2c')](_0x291a93=>{if(_0x291a93){return _0x4c1e3a(_0x291a93);}_0x4a7375[a91_0x5653('0x17')]('success',{'msg':'Password\x20has\x20been\x20changed.'});_0xc00efa['redirect']('/account');});});};exports['postDeleteAccount']=(_0x3ab909,_0x2bc362,_0x1aa799)=>{User_1[a91_0x5653('0x15')][a91_0x5653('0x39')]({'_id':_0x3ab909[a91_0x5653('0x1f')]['id']},_0x1bbb0d=>{if(_0x1bbb0d){return _0x1aa799(_0x1bbb0d);}_0x3ab909[a91_0x5653('0x1d')]();_0x3ab909[a91_0x5653('0x17')](a91_0x5653('0x3a'),{'msg':a91_0x5653('0x3b')});_0x2bc362[a91_0x5653('0x9')]('/');});};exports['getOauthUnlink']=(_0x526313,_0x2232f8,_0x5988d9)=>{const _0x4f2003=_0x526313['params']['provider'];User_1[a91_0x5653('0x15')][a91_0x5653('0x2f')](_0x526313['user']['id'],(_0x523b29,_0x1b2def)=>{if(_0x523b29){return _0x5988d9(_0x523b29);}_0x1b2def[_0x4f2003]=undefined;_0x1b2def[a91_0x5653('0x3c')]=_0x1b2def[a91_0x5653('0x3c')]['filter'](_0x14cb06=>_0x14cb06[a91_0x5653('0x3d')]!==_0x4f2003);_0x1b2def['save'](_0x523b29=>{if(_0x523b29){return _0x5988d9(_0x523b29);}_0x526313[a91_0x5653('0x17')](a91_0x5653('0x3a'),{'msg':_0x4f2003+a91_0x5653('0x3e')});_0x2232f8[a91_0x5653('0x9')](a91_0x5653('0x2e'));});});};exports[a91_0x5653('0x3f')]=(_0x14acbd,_0x1e5add,_0x492502)=>{if(_0x14acbd['isAuthenticated']()){return _0x1e5add[a91_0x5653('0x9')]('/');}User_1[a91_0x5653('0x15')][a91_0x5653('0x2a')]({'passwordResetToken':_0x14acbd[a91_0x5653('0x40')][a91_0x5653('0x41')]})[a91_0x5653('0x42')](a91_0x5653('0x43'))['gt'](Date['now']())[a91_0x5653('0x44')]((_0x26decc,_0x1cf8a6)=>{if(_0x26decc){return _0x492502(_0x26decc);}if(!_0x1cf8a6){_0x14acbd[a91_0x5653('0x17')]('errors',{'msg':a91_0x5653('0x45')});return _0x1e5add[a91_0x5653('0x9')](a91_0x5653('0x46'));}_0x1e5add['render'](a91_0x5653('0x47'),{'title':a91_0x5653('0x48')});});};exports[a91_0x5653('0x49')]=(_0x5b9319,_0x25fe73,_0x2fbcc2)=>{_0x5b9319[a91_0x5653('0xd')](a91_0x5653('0x11'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')['len']({'min':0x4});_0x5b9319['assert'](a91_0x5653('0x4a'),a91_0x5653('0x4b'))[a91_0x5653('0x26')](_0x5b9319[a91_0x5653('0x27')][a91_0x5653('0x11')]);const _0x319090=_0x5b9319['validationErrors']();if(_0x319090){_0x5b9319[a91_0x5653('0x17')](a91_0x5653('0x18'),_0x319090);return _0x25fe73[a91_0x5653('0x9')]('back');}async_1[a91_0x5653('0x15')][a91_0x5653('0x4c')]([function resetPassword(_0x3575d1){User_1[a91_0x5653('0x15')][a91_0x5653('0x2a')]({'passwordResetToken':_0x5b9319[a91_0x5653('0x40')][a91_0x5653('0x41')]})[a91_0x5653('0x42')](a91_0x5653('0x43'))['gt'](Date['now']())[a91_0x5653('0x44')]((_0x123610,_0x91cf0b)=>{if(_0x123610){return _0x2fbcc2(_0x123610);}if(!_0x91cf0b){_0x5b9319['flash']('errors',{'msg':a91_0x5653('0x45')});return _0x25fe73[a91_0x5653('0x9')](a91_0x5653('0x4d'));}_0x91cf0b[a91_0x5653('0x11')]=_0x5b9319[a91_0x5653('0x27')][a91_0x5653('0x11')];_0x91cf0b['passwordResetToken']=undefined;_0x91cf0b[a91_0x5653('0x43')]=undefined;_0x91cf0b['save'](_0x123610=>{if(_0x123610){return _0x2fbcc2(_0x123610);}_0x5b9319[a91_0x5653('0x1b')](_0x91cf0b,_0x123610=>{_0x3575d1(_0x123610,_0x91cf0b);});});});},function sendResetPasswordEmail(_0x107ba0,_0x107748){const _0x1f25a1=nodemailer_1['default']['createTransport']({'service':a91_0x5653('0x4e'),'auth':{'user':process[a91_0x5653('0x4f')]['SENDGRID_USER'],'pass':process[a91_0x5653('0x4f')]['SENDGRID_PASSWORD']}});const _0x7538a6={'to':_0x107ba0[a91_0x5653('0xe')],'from':a91_0x5653('0x50'),'subject':a91_0x5653('0x51'),'text':a91_0x5653('0x52')+_0x107ba0[a91_0x5653('0xe')]+a91_0x5653('0x53')};_0x1f25a1[a91_0x5653('0x54')](_0x7538a6,_0x4f3d60=>{_0x5b9319[a91_0x5653('0x17')](a91_0x5653('0x1c'),{'msg':a91_0x5653('0x55')});_0x107748(_0x4f3d60);});}],_0x272c5f=>{if(_0x272c5f){return _0x2fbcc2(_0x272c5f);}_0x25fe73[a91_0x5653('0x9')]('/');});};exports[a91_0x5653('0x56')]=(_0x2e2b63,_0x53591d)=>{if(_0x2e2b63[a91_0x5653('0x57')]()){return _0x53591d[a91_0x5653('0x9')]('/');}_0x53591d[a91_0x5653('0xa')](a91_0x5653('0x58'),{'title':a91_0x5653('0x59')});};exports[a91_0x5653('0x5a')]=(_0x45aca2,_0x47d51,_0x6424d1)=>{_0x45aca2['assert'](a91_0x5653('0xe'),a91_0x5653('0x5b'))[a91_0x5653('0x10')]();_0x45aca2[a91_0x5653('0x28')](a91_0x5653('0xe'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x854309=_0x45aca2[a91_0x5653('0x14')]();if(_0x854309){_0x45aca2['flash'](a91_0x5653('0x18'),_0x854309);return _0x47d51[a91_0x5653('0x9')](a91_0x5653('0x46'));}async_1['default'][a91_0x5653('0x4c')]([function createRandomToken(_0x305b30){crypto_1[a91_0x5653('0x15')][a91_0x5653('0x5c')](0x10,(_0x14683c,_0x45753a)=>{const _0x55ab97=_0x45753a[a91_0x5653('0x5d')](a91_0x5653('0x5e'));_0x305b30(_0x14683c,_0x55ab97);});},function setRandomToken(_0x3e77bc,_0x435ee6){User_1['default'][a91_0x5653('0x2a')]({'email':_0x45aca2[a91_0x5653('0x27')][a91_0x5653('0xe')]},(_0x51eb98,_0x4ea48e)=>{if(_0x51eb98){return _0x435ee6(_0x51eb98);}if(!_0x4ea48e){_0x45aca2[a91_0x5653('0x17')](a91_0x5653('0x18'),{'msg':a91_0x5653('0x5f')});return _0x47d51[a91_0x5653('0x9')]('/forgot');}_0x4ea48e[a91_0x5653('0x60')]=_0x3e77bc;_0x4ea48e[a91_0x5653('0x43')]=Date[a91_0x5653('0x61')]()+0x36ee80;_0x4ea48e[a91_0x5653('0x2c')](_0x51eb98=>{_0x435ee6(_0x51eb98,_0x3e77bc,_0x4ea48e);});});},function sendForgotPasswordEmail(_0xe7f858,_0x29cf60,_0x4031a7){const _0x27b6c4=nodemailer_1[a91_0x5653('0x15')][a91_0x5653('0x62')]({'service':a91_0x5653('0x4e'),'auth':{'user':process[a91_0x5653('0x4f')][a91_0x5653('0x63')],'pass':process['env']['SENDGRID_PASSWORD']}});const _0x3e2446={'to':_0x29cf60['email'],'from':a91_0x5653('0x64'),'subject':a91_0x5653('0x65'),'text':a91_0x5653('0x66')+_0x45aca2[a91_0x5653('0x67')][a91_0x5653('0x68')]+a91_0x5653('0x69')+_0xe7f858+a91_0x5653('0x6a')};_0x27b6c4[a91_0x5653('0x54')](_0x3e2446,_0x1da937=>{_0x45aca2[a91_0x5653('0x17')](a91_0x5653('0x3a'),{'msg':'An\x20e-mail\x20has\x20been\x20sent\x20to\x20'+_0x29cf60['email']+a91_0x5653('0x6b')});_0x4031a7(_0x1da937);});}],_0x6fcfde=>{if(_0x6fcfde){return _0x6424d1(_0x6fcfde);}_0x47d51['redirect'](a91_0x5653('0x46'));});};