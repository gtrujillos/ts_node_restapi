var a88_0x4e7a=['name','profile','gender','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','success','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','equals','findById','save','Password\x20has\x20been\x20changed.','remove','info','params','provider','tokens','kind','getReset','isAuthenticated','where','passwordResetExpires','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','back','token','passwordResetToken','createTransport','SendGrid','SENDGRID_USER','env','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','account/forgot','Forgot\x20Password','waterfall','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','__importDefault','__esModule','async','crypto','nodemailer','passport','../models/User','express-validator','user','redirect','render','account/login','postLogin','assert','email','Email\x20is\x20not\x20valid','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','validationErrors','flash','/login','default','authenticate','local','errors','message','logIn','Success!\x20You\x20are\x20logged\x20in.','returnTo','logout','postSignup','isEmail','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','body','normalizeEmail','/signup','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','getAccount','account/profile','Account\x20Management','Please\x20enter\x20a\x20valid\x20email\x20address.','/account'];(function(_0x13b97d,_0x56c77b){var _0x1c43b5=function(_0xf1b7bd){while(--_0xf1b7bd){_0x13b97d['push'](_0x13b97d['shift']());}};_0x1c43b5(++_0x56c77b);}(a88_0x4e7a,0x1e2));var a88_0x3570=function(_0x203dbf,_0x20650b){_0x203dbf=_0x203dbf-0x0;var _0x121a8d=a88_0x4e7a[_0x203dbf];return _0x121a8d;};'use strict';var __importDefault=this&&this[a88_0x3570('0x0')]||function(_0x35222d){return _0x35222d&&_0x35222d[a88_0x3570('0x1')]?_0x35222d:{'default':_0x35222d};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a88_0x3570('0x2')));const crypto_1=__importDefault(require(a88_0x3570('0x3')));const nodemailer_1=__importDefault(require(a88_0x3570('0x4')));const passport_1=__importDefault(require(a88_0x3570('0x5')));const User_1=__importDefault(require(a88_0x3570('0x6')));const request=require(a88_0x3570('0x7'));exports['getLogin']=(_0x59e7eb,_0x2467a2)=>{if(_0x59e7eb[a88_0x3570('0x8')]){return _0x2467a2[a88_0x3570('0x9')]('/');}_0x2467a2[a88_0x3570('0xa')](a88_0x3570('0xb'),{'title':'Login'});};exports[a88_0x3570('0xc')]=(_0x4a436d,_0x4d29c4,_0x40c9a7)=>{_0x4a436d[a88_0x3570('0xd')](a88_0x3570('0xe'),a88_0x3570('0xf'))['isEmail']();_0x4a436d[a88_0x3570('0xd')](a88_0x3570('0x10'),a88_0x3570('0x11'))[a88_0x3570('0x12')]();_0x4a436d[a88_0x3570('0x13')]('email')['normalizeEmail']({'gmail_remove_dots':![]});const _0x150b36=_0x4a436d[a88_0x3570('0x14')]();if(_0x150b36){_0x4a436d[a88_0x3570('0x15')]('errors',_0x150b36);return _0x4d29c4[a88_0x3570('0x9')](a88_0x3570('0x16'));}passport_1[a88_0x3570('0x17')][a88_0x3570('0x18')](a88_0x3570('0x19'),(_0x3fe202,_0x188fbb,_0x450d7a)=>{if(_0x3fe202){return _0x40c9a7(_0x3fe202);}if(!_0x188fbb){_0x4a436d[a88_0x3570('0x15')](a88_0x3570('0x1a'),_0x450d7a[a88_0x3570('0x1b')]);return _0x4d29c4[a88_0x3570('0x9')](a88_0x3570('0x16'));}_0x4a436d[a88_0x3570('0x1c')](_0x188fbb,_0x3fe202=>{if(_0x3fe202){return _0x40c9a7(_0x3fe202);}_0x4a436d[a88_0x3570('0x15')]('success',{'msg':a88_0x3570('0x1d')});_0x4d29c4[a88_0x3570('0x9')](_0x4a436d['session'][a88_0x3570('0x1e')]||'/');});})(_0x4a436d,_0x4d29c4,_0x40c9a7);};exports[a88_0x3570('0x1f')]=(_0x32049d,_0x5d6422)=>{_0x32049d[a88_0x3570('0x1f')]();_0x5d6422[a88_0x3570('0x9')]('/');};exports['getSignup']=(_0x4c0bba,_0x308646)=>{if(_0x4c0bba[a88_0x3570('0x8')]){return _0x308646[a88_0x3570('0x9')]('/');}_0x308646[a88_0x3570('0xa')]('account/signup',{'title':'Create\x20Account'});};exports[a88_0x3570('0x20')]=(_0x21435e,_0xb3eca9,_0x4ebf55)=>{_0x21435e[a88_0x3570('0xd')]('email',a88_0x3570('0xf'))[a88_0x3570('0x21')]();_0x21435e[a88_0x3570('0xd')](a88_0x3570('0x10'),a88_0x3570('0x22'))[a88_0x3570('0x23')]({'min':0x4});_0x21435e[a88_0x3570('0xd')](a88_0x3570('0x24'),a88_0x3570('0x25'))['equals'](_0x21435e[a88_0x3570('0x26')][a88_0x3570('0x10')]);_0x21435e['sanitize'](a88_0x3570('0xe'))[a88_0x3570('0x27')]({'gmail_remove_dots':![]});const _0x5eda32=_0x21435e['validationErrors']();if(_0x5eda32){_0x21435e['flash'](a88_0x3570('0x1a'),_0x5eda32);return _0xb3eca9[a88_0x3570('0x9')](a88_0x3570('0x28'));}const _0x2299b1=new User_1['default']({'email':_0x21435e[a88_0x3570('0x26')][a88_0x3570('0xe')],'password':_0x21435e['body'][a88_0x3570('0x10')]});User_1[a88_0x3570('0x17')][a88_0x3570('0x29')]({'email':_0x21435e['body']['email']},(_0x45a801,_0x339e1b)=>{if(_0x45a801){return _0x4ebf55(_0x45a801);}if(_0x339e1b){_0x21435e[a88_0x3570('0x15')](a88_0x3570('0x1a'),{'msg':a88_0x3570('0x2a')});return _0xb3eca9[a88_0x3570('0x9')](a88_0x3570('0x28'));}_0x2299b1['save'](_0x45a801=>{if(_0x45a801){return _0x4ebf55(_0x45a801);}_0x21435e['logIn'](_0x2299b1,_0x45a801=>{if(_0x45a801){return _0x4ebf55(_0x45a801);}_0xb3eca9[a88_0x3570('0x9')]('/');});});});};exports[a88_0x3570('0x2b')]=(_0xfbc08e,_0x2dd4da)=>{_0x2dd4da[a88_0x3570('0xa')](a88_0x3570('0x2c'),{'title':a88_0x3570('0x2d')});};exports['postUpdateProfile']=(_0x245285,_0x2eb931,_0x3de053)=>{_0x245285[a88_0x3570('0xd')](a88_0x3570('0xe'),a88_0x3570('0x2e'))[a88_0x3570('0x21')]();_0x245285['sanitize'](a88_0x3570('0xe'))[a88_0x3570('0x27')]({'gmail_remove_dots':![]});const _0x4941b2=_0x245285['validationErrors']();if(_0x4941b2){_0x245285[a88_0x3570('0x15')](a88_0x3570('0x1a'),_0x4941b2);return _0x2eb931[a88_0x3570('0x9')](a88_0x3570('0x2f'));}User_1[a88_0x3570('0x17')]['findById'](_0x245285[a88_0x3570('0x8')]['id'],(_0x1abc2d,_0x24c555)=>{if(_0x1abc2d){return _0x3de053(_0x1abc2d);}_0x24c555[a88_0x3570('0xe')]=_0x245285[a88_0x3570('0x26')][a88_0x3570('0xe')]||'';_0x24c555['profile'][a88_0x3570('0x30')]=_0x245285[a88_0x3570('0x26')][a88_0x3570('0x30')]||'';_0x24c555[a88_0x3570('0x31')][a88_0x3570('0x32')]=_0x245285['body'][a88_0x3570('0x32')]||'';_0x24c555[a88_0x3570('0x31')][a88_0x3570('0x33')]=_0x245285[a88_0x3570('0x26')][a88_0x3570('0x33')]||'';_0x24c555[a88_0x3570('0x31')][a88_0x3570('0x34')]=_0x245285['body']['website']||'';_0x24c555['save'](_0x1abc2d=>{if(_0x1abc2d){if(_0x1abc2d[a88_0x3570('0x35')]===0x2af8){_0x245285[a88_0x3570('0x15')](a88_0x3570('0x1a'),{'msg':a88_0x3570('0x36')});return _0x2eb931[a88_0x3570('0x9')]('/account');}return _0x3de053(_0x1abc2d);}_0x245285[a88_0x3570('0x15')](a88_0x3570('0x37'),{'msg':a88_0x3570('0x38')});_0x2eb931[a88_0x3570('0x9')](a88_0x3570('0x2f'));});});};exports[a88_0x3570('0x39')]=(_0x159573,_0x56c149,_0x576266)=>{_0x159573[a88_0x3570('0xd')](a88_0x3570('0x10'),a88_0x3570('0x22'))['len']({'min':0x4});_0x159573[a88_0x3570('0xd')](a88_0x3570('0x24'),a88_0x3570('0x25'))[a88_0x3570('0x3a')](_0x159573[a88_0x3570('0x26')][a88_0x3570('0x10')]);const _0x46656f=_0x159573['validationErrors']();if(_0x46656f){_0x159573[a88_0x3570('0x15')](a88_0x3570('0x1a'),_0x46656f);return _0x56c149[a88_0x3570('0x9')](a88_0x3570('0x2f'));}User_1[a88_0x3570('0x17')][a88_0x3570('0x3b')](_0x159573[a88_0x3570('0x8')]['id'],(_0x38738b,_0x25018b)=>{if(_0x38738b){return _0x576266(_0x38738b);}_0x25018b[a88_0x3570('0x10')]=_0x159573[a88_0x3570('0x26')][a88_0x3570('0x10')];_0x25018b[a88_0x3570('0x3c')](_0x38738b=>{if(_0x38738b){return _0x576266(_0x38738b);}_0x159573[a88_0x3570('0x15')](a88_0x3570('0x37'),{'msg':a88_0x3570('0x3d')});_0x56c149[a88_0x3570('0x9')](a88_0x3570('0x2f'));});});};exports['postDeleteAccount']=(_0x150251,_0x40e5e1,_0x63349e)=>{User_1[a88_0x3570('0x17')][a88_0x3570('0x3e')]({'_id':_0x150251[a88_0x3570('0x8')]['id']},_0x474787=>{if(_0x474787){return _0x63349e(_0x474787);}_0x150251['logout']();_0x150251[a88_0x3570('0x15')](a88_0x3570('0x3f'),{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0x40e5e1[a88_0x3570('0x9')]('/');});};exports['getOauthUnlink']=(_0x31a691,_0x392c5a,_0x4ecb08)=>{const _0x223ad1=_0x31a691[a88_0x3570('0x40')][a88_0x3570('0x41')];User_1['default'][a88_0x3570('0x3b')](_0x31a691['user']['id'],(_0x242977,_0x1f5ff4)=>{if(_0x242977){return _0x4ecb08(_0x242977);}_0x1f5ff4[_0x223ad1]=undefined;_0x1f5ff4[a88_0x3570('0x42')]=_0x1f5ff4[a88_0x3570('0x42')]['filter'](_0x2711e4=>_0x2711e4[a88_0x3570('0x43')]!==_0x223ad1);_0x1f5ff4[a88_0x3570('0x3c')](_0x242977=>{if(_0x242977){return _0x4ecb08(_0x242977);}_0x31a691[a88_0x3570('0x15')](a88_0x3570('0x3f'),{'msg':_0x223ad1+'\x20account\x20has\x20been\x20unlinked.'});_0x392c5a[a88_0x3570('0x9')](a88_0x3570('0x2f'));});});};exports[a88_0x3570('0x44')]=(_0x2f17d2,_0xa2850e,_0x1d49e3)=>{if(_0x2f17d2[a88_0x3570('0x45')]()){return _0xa2850e[a88_0x3570('0x9')]('/');}User_1[a88_0x3570('0x17')][a88_0x3570('0x29')]({'passwordResetToken':_0x2f17d2['params']['token']})[a88_0x3570('0x46')](a88_0x3570('0x47'))['gt'](Date[a88_0x3570('0x48')]())[a88_0x3570('0x49')]((_0x5611b0,_0x1e181a)=>{if(_0x5611b0){return _0x1d49e3(_0x5611b0);}if(!_0x1e181a){_0x2f17d2[a88_0x3570('0x15')](a88_0x3570('0x1a'),{'msg':a88_0x3570('0x4a')});return _0xa2850e['redirect'](a88_0x3570('0x4b'));}_0xa2850e[a88_0x3570('0xa')](a88_0x3570('0x4c'),{'title':a88_0x3570('0x4d')});});};exports['postReset']=(_0x1830a4,_0x2ea296,_0xccb1af)=>{_0x1830a4[a88_0x3570('0xd')](a88_0x3570('0x10'),a88_0x3570('0x4e'))[a88_0x3570('0x23')]({'min':0x4});_0x1830a4[a88_0x3570('0xd')](a88_0x3570('0x4f'),a88_0x3570('0x50'))[a88_0x3570('0x3a')](_0x1830a4['body'][a88_0x3570('0x10')]);const _0x439394=_0x1830a4[a88_0x3570('0x14')]();if(_0x439394){_0x1830a4[a88_0x3570('0x15')]('errors',_0x439394);return _0x2ea296[a88_0x3570('0x9')](a88_0x3570('0x51'));}async_1['default']['waterfall']([function resetPassword(_0x21d925){User_1[a88_0x3570('0x17')][a88_0x3570('0x29')]({'passwordResetToken':_0x1830a4[a88_0x3570('0x40')][a88_0x3570('0x52')]})[a88_0x3570('0x46')](a88_0x3570('0x47'))['gt'](Date[a88_0x3570('0x48')]())[a88_0x3570('0x49')]((_0x438fcf,_0x1301e7)=>{if(_0x438fcf){return _0xccb1af(_0x438fcf);}if(!_0x1301e7){_0x1830a4['flash'](a88_0x3570('0x1a'),{'msg':a88_0x3570('0x4a')});return _0x2ea296[a88_0x3570('0x9')](a88_0x3570('0x51'));}_0x1301e7[a88_0x3570('0x10')]=_0x1830a4['body'][a88_0x3570('0x10')];_0x1301e7[a88_0x3570('0x53')]=undefined;_0x1301e7['passwordResetExpires']=undefined;_0x1301e7[a88_0x3570('0x3c')](_0x438fcf=>{if(_0x438fcf){return _0xccb1af(_0x438fcf);}_0x1830a4[a88_0x3570('0x1c')](_0x1301e7,_0x438fcf=>{_0x21d925(_0x438fcf,_0x1301e7);});});});},function sendResetPasswordEmail(_0x96ef8f,_0x2bb3a7){const _0x176704=nodemailer_1[a88_0x3570('0x17')][a88_0x3570('0x54')]({'service':a88_0x3570('0x55'),'auth':{'user':process['env'][a88_0x3570('0x56')],'pass':process[a88_0x3570('0x57')][a88_0x3570('0x58')]}});const _0x1931d0={'to':_0x96ef8f[a88_0x3570('0xe')],'from':a88_0x3570('0x59'),'subject':a88_0x3570('0x5a'),'text':a88_0x3570('0x5b')+_0x96ef8f['email']+'\x20has\x20just\x20been\x20changed.\x0a'};_0x176704[a88_0x3570('0x5c')](_0x1931d0,_0xb807e2=>{_0x1830a4['flash'](a88_0x3570('0x37'),{'msg':a88_0x3570('0x5d')});_0x2bb3a7(_0xb807e2);});}],_0x2f9c90=>{if(_0x2f9c90){return _0xccb1af(_0x2f9c90);}_0x2ea296[a88_0x3570('0x9')]('/');});};exports['getForgot']=(_0x4b09b6,_0x125240)=>{if(_0x4b09b6[a88_0x3570('0x45')]()){return _0x125240[a88_0x3570('0x9')]('/');}_0x125240[a88_0x3570('0xa')](a88_0x3570('0x5e'),{'title':a88_0x3570('0x5f')});};exports['postForgot']=(_0x24d01d,_0x29f5d3,_0x24b1ff)=>{_0x24d01d[a88_0x3570('0xd')]('email','Please\x20enter\x20a\x20valid\x20email\x20address.')[a88_0x3570('0x21')]();_0x24d01d[a88_0x3570('0x13')]('email')[a88_0x3570('0x27')]({'gmail_remove_dots':![]});const _0x997dd7=_0x24d01d[a88_0x3570('0x14')]();if(_0x997dd7){_0x24d01d[a88_0x3570('0x15')]('errors',_0x997dd7);return _0x29f5d3[a88_0x3570('0x9')]('/forgot');}async_1[a88_0x3570('0x17')][a88_0x3570('0x60')]([function createRandomToken(_0x3e51af){crypto_1[a88_0x3570('0x17')]['randomBytes'](0x10,(_0x1d4745,_0x3ad6fd)=>{const _0x3ad434=_0x3ad6fd['toString'](a88_0x3570('0x61'));_0x3e51af(_0x1d4745,_0x3ad434);});},function setRandomToken(_0x308d0b,_0x476baf){User_1[a88_0x3570('0x17')][a88_0x3570('0x29')]({'email':_0x24d01d[a88_0x3570('0x26')]['email']},(_0xe9231a,_0x3b7e9c)=>{if(_0xe9231a){return _0x476baf(_0xe9231a);}if(!_0x3b7e9c){_0x24d01d[a88_0x3570('0x15')](a88_0x3570('0x1a'),{'msg':a88_0x3570('0x62')});return _0x29f5d3['redirect'](a88_0x3570('0x4b'));}_0x3b7e9c[a88_0x3570('0x53')]=_0x308d0b;_0x3b7e9c['passwordResetExpires']=Date[a88_0x3570('0x48')]()+0x36ee80;_0x3b7e9c[a88_0x3570('0x3c')](_0xe9231a=>{_0x476baf(_0xe9231a,_0x308d0b,_0x3b7e9c);});});},function sendForgotPasswordEmail(_0xa3b30f,_0xbae288,_0x2a73de){const _0x59be11=nodemailer_1[a88_0x3570('0x17')][a88_0x3570('0x54')]({'service':'SendGrid','auth':{'user':process[a88_0x3570('0x57')]['SENDGRID_USER'],'pass':process['env']['SENDGRID_PASSWORD']}});const _0x246de5={'to':_0xbae288['email'],'from':a88_0x3570('0x63'),'subject':a88_0x3570('0x64'),'text':a88_0x3570('0x65')+_0x24d01d[a88_0x3570('0x66')][a88_0x3570('0x67')]+'/reset/'+_0xa3b30f+a88_0x3570('0x68')};_0x59be11['sendMail'](_0x246de5,_0x1c3c48=>{_0x24d01d[a88_0x3570('0x15')](a88_0x3570('0x3f'),{'msg':a88_0x3570('0x69')+_0xbae288['email']+'\x20with\x20further\x20instructions.'});_0x2a73de(_0x1c3c48);});}],_0x18425f=>{if(_0x18425f){return _0x24b1ff(_0x18425f);}_0x29f5d3[a88_0x3570('0x9')](a88_0x3570('0x4b'));});};