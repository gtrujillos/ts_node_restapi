var a91_0x1dec=['\x20with\x20further\x20instructions.','__esModule','defineProperty','async','crypto','nodemailer','../models/User','express-validator','getLogin','user','redirect','render','account/login','Login','Email\x20is\x20not\x20valid','isEmail','assert','password','Password\x20cannot\x20be\x20blank','sanitize','email','errors','/login','default','authenticate','message','flash','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','account/signup','Create\x20Account','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','normalizeEmail','/signup','findOne','logIn','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','validationErrors','/account','findById','name','gender','profile','location','website','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','tokens','filter','kind','save','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','len','confirm','Passwords\x20must\x20match.','back','token','passwordResetToken','passwordResetExpires','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','account/forgot','Forgot\x20Password','postForgot','waterfall','randomBytes','hex','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20'];(function(_0x4b96ba,_0x1fee3b){var _0x255382=function(_0x306edd){while(--_0x306edd){_0x4b96ba['push'](_0x4b96ba['shift']());}};_0x255382(++_0x1fee3b);}(a91_0x1dec,0x1bd));var a91_0x1eb8=function(_0x542804,_0x22ab11){_0x542804=_0x542804-0x0;var _0x157cf4=a91_0x1dec[_0x542804];return _0x157cf4;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x281db1){return _0x281db1&&_0x281db1[a91_0x1eb8('0x0')]?_0x281db1:{'default':_0x281db1};};Object[a91_0x1eb8('0x1')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a91_0x1eb8('0x2')));const crypto_1=__importDefault(require(a91_0x1eb8('0x3')));const nodemailer_1=__importDefault(require(a91_0x1eb8('0x4')));const passport_1=__importDefault(require('passport'));const User_1=__importDefault(require(a91_0x1eb8('0x5')));const request=require(a91_0x1eb8('0x6'));exports[a91_0x1eb8('0x7')]=(_0x2b1d72,_0xadf768)=>{if(_0x2b1d72[a91_0x1eb8('0x8')]){return _0xadf768[a91_0x1eb8('0x9')]('/');}_0xadf768[a91_0x1eb8('0xa')](a91_0x1eb8('0xb'),{'title':a91_0x1eb8('0xc')});};exports['postLogin']=(_0x2c3735,_0x520355,_0x21cdaf)=>{_0x2c3735['assert']('email',a91_0x1eb8('0xd'))[a91_0x1eb8('0xe')]();_0x2c3735[a91_0x1eb8('0xf')](a91_0x1eb8('0x10'),a91_0x1eb8('0x11'))['notEmpty']();_0x2c3735[a91_0x1eb8('0x12')](a91_0x1eb8('0x13'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x591b90=_0x2c3735['validationErrors']();if(_0x591b90){_0x2c3735['flash'](a91_0x1eb8('0x14'),_0x591b90);return _0x520355[a91_0x1eb8('0x9')](a91_0x1eb8('0x15'));}passport_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x17')]('local',(_0x59bfdc,_0x9b8a1c,_0x5bd72b)=>{if(_0x59bfdc){return _0x21cdaf(_0x59bfdc);}if(!_0x9b8a1c){_0x2c3735['flash'](a91_0x1eb8('0x14'),_0x5bd72b[a91_0x1eb8('0x18')]);return _0x520355[a91_0x1eb8('0x9')](a91_0x1eb8('0x15'));}_0x2c3735['logIn'](_0x9b8a1c,_0x59bfdc=>{if(_0x59bfdc){return _0x21cdaf(_0x59bfdc);}_0x2c3735[a91_0x1eb8('0x19')](a91_0x1eb8('0x1a'),{'msg':a91_0x1eb8('0x1b')});_0x520355[a91_0x1eb8('0x9')](_0x2c3735[a91_0x1eb8('0x1c')][a91_0x1eb8('0x1d')]||'/');});})(_0x2c3735,_0x520355,_0x21cdaf);};exports['logout']=(_0x469d8f,_0x38cb30)=>{_0x469d8f[a91_0x1eb8('0x1e')]();_0x38cb30[a91_0x1eb8('0x9')]('/');};exports[a91_0x1eb8('0x1f')]=(_0x571ab9,_0x3ef015)=>{if(_0x571ab9[a91_0x1eb8('0x8')]){return _0x3ef015[a91_0x1eb8('0x9')]('/');}_0x3ef015[a91_0x1eb8('0xa')](a91_0x1eb8('0x20'),{'title':a91_0x1eb8('0x21')});};exports['postSignup']=(_0x54b1a4,_0x21bb70,_0x54a6ac)=>{_0x54b1a4[a91_0x1eb8('0xf')](a91_0x1eb8('0x13'),a91_0x1eb8('0xd'))[a91_0x1eb8('0xe')]();_0x54b1a4[a91_0x1eb8('0xf')](a91_0x1eb8('0x10'),a91_0x1eb8('0x22'))['len']({'min':0x4});_0x54b1a4[a91_0x1eb8('0xf')](a91_0x1eb8('0x23'),a91_0x1eb8('0x24'))[a91_0x1eb8('0x25')](_0x54b1a4[a91_0x1eb8('0x26')][a91_0x1eb8('0x10')]);_0x54b1a4[a91_0x1eb8('0x12')](a91_0x1eb8('0x13'))[a91_0x1eb8('0x27')]({'gmail_remove_dots':![]});const _0x11aa6c=_0x54b1a4['validationErrors']();if(_0x11aa6c){_0x54b1a4[a91_0x1eb8('0x19')]('errors',_0x11aa6c);return _0x21bb70[a91_0x1eb8('0x9')](a91_0x1eb8('0x28'));}const _0x23bd5e=new User_1[(a91_0x1eb8('0x16'))]({'email':_0x54b1a4[a91_0x1eb8('0x26')][a91_0x1eb8('0x13')],'password':_0x54b1a4['body'][a91_0x1eb8('0x10')]});User_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x29')]({'email':_0x54b1a4[a91_0x1eb8('0x26')]['email']},(_0xb1c42b,_0x57d363)=>{if(_0xb1c42b){return _0x54a6ac(_0xb1c42b);}if(_0x57d363){_0x54b1a4[a91_0x1eb8('0x19')](a91_0x1eb8('0x14'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x21bb70[a91_0x1eb8('0x9')](a91_0x1eb8('0x28'));}_0x23bd5e['save'](_0xb1c42b=>{if(_0xb1c42b){return _0x54a6ac(_0xb1c42b);}_0x54b1a4[a91_0x1eb8('0x2a')](_0x23bd5e,_0xb1c42b=>{if(_0xb1c42b){return _0x54a6ac(_0xb1c42b);}_0x21bb70[a91_0x1eb8('0x9')]('/');});});});};exports['getAccount']=(_0x151cc8,_0x208ac8)=>{_0x208ac8[a91_0x1eb8('0xa')]('account/profile',{'title':'Account\x20Management'});};exports[a91_0x1eb8('0x2b')]=(_0x4ba5ab,_0x2eb465,_0x10b560)=>{_0x4ba5ab['assert'](a91_0x1eb8('0x13'),a91_0x1eb8('0x2c'))[a91_0x1eb8('0xe')]();_0x4ba5ab[a91_0x1eb8('0x12')](a91_0x1eb8('0x13'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x4118ef=_0x4ba5ab[a91_0x1eb8('0x2d')]();if(_0x4118ef){_0x4ba5ab['flash'](a91_0x1eb8('0x14'),_0x4118ef);return _0x2eb465['redirect'](a91_0x1eb8('0x2e'));}User_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x2f')](_0x4ba5ab[a91_0x1eb8('0x8')]['id'],(_0xc6b59d,_0x1a1566)=>{if(_0xc6b59d){return _0x10b560(_0xc6b59d);}_0x1a1566[a91_0x1eb8('0x13')]=_0x4ba5ab[a91_0x1eb8('0x26')][a91_0x1eb8('0x13')]||'';_0x1a1566['profile'][a91_0x1eb8('0x30')]=_0x4ba5ab['body'][a91_0x1eb8('0x30')]||'';_0x1a1566['profile']['gender']=_0x4ba5ab[a91_0x1eb8('0x26')][a91_0x1eb8('0x31')]||'';_0x1a1566[a91_0x1eb8('0x32')][a91_0x1eb8('0x33')]=_0x4ba5ab[a91_0x1eb8('0x26')][a91_0x1eb8('0x33')]||'';_0x1a1566[a91_0x1eb8('0x32')][a91_0x1eb8('0x34')]=_0x4ba5ab[a91_0x1eb8('0x26')][a91_0x1eb8('0x34')]||'';_0x1a1566['save'](_0xc6b59d=>{if(_0xc6b59d){if(_0xc6b59d['code']===0x2af8){_0x4ba5ab['flash'](a91_0x1eb8('0x14'),{'msg':a91_0x1eb8('0x35')});return _0x2eb465['redirect'](a91_0x1eb8('0x2e'));}return _0x10b560(_0xc6b59d);}_0x4ba5ab[a91_0x1eb8('0x19')](a91_0x1eb8('0x1a'),{'msg':a91_0x1eb8('0x36')});_0x2eb465[a91_0x1eb8('0x9')](a91_0x1eb8('0x2e'));});});};exports[a91_0x1eb8('0x37')]=(_0x332137,_0x4c271d,_0xe0b7f3)=>{_0x332137[a91_0x1eb8('0xf')](a91_0x1eb8('0x10'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')['len']({'min':0x4});_0x332137['assert'](a91_0x1eb8('0x23'),a91_0x1eb8('0x24'))[a91_0x1eb8('0x25')](_0x332137['body'][a91_0x1eb8('0x10')]);const _0x2183c6=_0x332137[a91_0x1eb8('0x2d')]();if(_0x2183c6){_0x332137[a91_0x1eb8('0x19')]('errors',_0x2183c6);return _0x4c271d[a91_0x1eb8('0x9')](a91_0x1eb8('0x2e'));}User_1['default'][a91_0x1eb8('0x2f')](_0x332137['user']['id'],(_0xdbb96a,_0xbffb30)=>{if(_0xdbb96a){return _0xe0b7f3(_0xdbb96a);}_0xbffb30[a91_0x1eb8('0x10')]=_0x332137[a91_0x1eb8('0x26')][a91_0x1eb8('0x10')];_0xbffb30['save'](_0xdbb96a=>{if(_0xdbb96a){return _0xe0b7f3(_0xdbb96a);}_0x332137[a91_0x1eb8('0x19')](a91_0x1eb8('0x1a'),{'msg':a91_0x1eb8('0x38')});_0x4c271d[a91_0x1eb8('0x9')](a91_0x1eb8('0x2e'));});});};exports[a91_0x1eb8('0x39')]=(_0x2df0a4,_0x1e8ffa,_0x4f0fe1)=>{User_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x3a')]({'_id':_0x2df0a4[a91_0x1eb8('0x8')]['id']},_0x58e1e0=>{if(_0x58e1e0){return _0x4f0fe1(_0x58e1e0);}_0x2df0a4['logout']();_0x2df0a4[a91_0x1eb8('0x19')](a91_0x1eb8('0x3b'),{'msg':a91_0x1eb8('0x3c')});_0x1e8ffa['redirect']('/');});};exports[a91_0x1eb8('0x3d')]=(_0x5a470f,_0x3ee8ce,_0x77469d)=>{const _0x5e5a8c=_0x5a470f[a91_0x1eb8('0x3e')][a91_0x1eb8('0x3f')];User_1[a91_0x1eb8('0x16')]['findById'](_0x5a470f['user']['id'],(_0x3f6327,_0x16ee1f)=>{if(_0x3f6327){return _0x77469d(_0x3f6327);}_0x16ee1f[_0x5e5a8c]=undefined;_0x16ee1f[a91_0x1eb8('0x40')]=_0x16ee1f[a91_0x1eb8('0x40')][a91_0x1eb8('0x41')](_0x52c48a=>_0x52c48a[a91_0x1eb8('0x42')]!==_0x5e5a8c);_0x16ee1f[a91_0x1eb8('0x43')](_0x3f6327=>{if(_0x3f6327){return _0x77469d(_0x3f6327);}_0x5a470f['flash'](a91_0x1eb8('0x3b'),{'msg':_0x5e5a8c+a91_0x1eb8('0x44')});_0x3ee8ce[a91_0x1eb8('0x9')](a91_0x1eb8('0x2e'));});});};exports[a91_0x1eb8('0x45')]=(_0x368791,_0x165c7f,_0x916249)=>{if(_0x368791[a91_0x1eb8('0x46')]()){return _0x165c7f['redirect']('/');}User_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x29')]({'passwordResetToken':_0x368791[a91_0x1eb8('0x3e')]['token']})['where']('passwordResetExpires')['gt'](Date['now']())[a91_0x1eb8('0x47')]((_0x19fdee,_0x23a94e)=>{if(_0x19fdee){return _0x916249(_0x19fdee);}if(!_0x23a94e){_0x368791[a91_0x1eb8('0x19')]('errors',{'msg':a91_0x1eb8('0x48')});return _0x165c7f['redirect'](a91_0x1eb8('0x49'));}_0x165c7f[a91_0x1eb8('0xa')](a91_0x1eb8('0x4a'),{'title':a91_0x1eb8('0x4b')});});};exports[a91_0x1eb8('0x4c')]=(_0x3c8182,_0x44faef,_0xbc3352)=>{_0x3c8182[a91_0x1eb8('0xf')]('password',a91_0x1eb8('0x4d'))[a91_0x1eb8('0x4e')]({'min':0x4});_0x3c8182[a91_0x1eb8('0xf')](a91_0x1eb8('0x4f'),a91_0x1eb8('0x50'))[a91_0x1eb8('0x25')](_0x3c8182[a91_0x1eb8('0x26')][a91_0x1eb8('0x10')]);const _0x28a7e6=_0x3c8182['validationErrors']();if(_0x28a7e6){_0x3c8182['flash']('errors',_0x28a7e6);return _0x44faef['redirect'](a91_0x1eb8('0x51'));}async_1[a91_0x1eb8('0x16')]['waterfall']([function resetPassword(_0x50421a){User_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x29')]({'passwordResetToken':_0x3c8182[a91_0x1eb8('0x3e')][a91_0x1eb8('0x52')]})['where']('passwordResetExpires')['gt'](Date['now']())[a91_0x1eb8('0x47')]((_0x1dd642,_0x1de9b1)=>{if(_0x1dd642){return _0xbc3352(_0x1dd642);}if(!_0x1de9b1){_0x3c8182['flash']('errors',{'msg':a91_0x1eb8('0x48')});return _0x44faef[a91_0x1eb8('0x9')](a91_0x1eb8('0x51'));}_0x1de9b1[a91_0x1eb8('0x10')]=_0x3c8182[a91_0x1eb8('0x26')]['password'];_0x1de9b1[a91_0x1eb8('0x53')]=undefined;_0x1de9b1[a91_0x1eb8('0x54')]=undefined;_0x1de9b1[a91_0x1eb8('0x43')](_0x1dd642=>{if(_0x1dd642){return _0xbc3352(_0x1dd642);}_0x3c8182[a91_0x1eb8('0x2a')](_0x1de9b1,_0x1dd642=>{_0x50421a(_0x1dd642,_0x1de9b1);});});});},function sendResetPasswordEmail(_0x1d9d03,_0x35eeed){const _0x2e3c5a=nodemailer_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x55')]({'service':a91_0x1eb8('0x56'),'auth':{'user':process[a91_0x1eb8('0x57')][a91_0x1eb8('0x58')],'pass':process['env'][a91_0x1eb8('0x59')]}});const _0x1f881b={'to':_0x1d9d03[a91_0x1eb8('0x13')],'from':a91_0x1eb8('0x5a'),'subject':a91_0x1eb8('0x5b'),'text':'Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20'+_0x1d9d03[a91_0x1eb8('0x13')]+a91_0x1eb8('0x5c')};_0x2e3c5a[a91_0x1eb8('0x5d')](_0x1f881b,_0x4a9ed8=>{_0x3c8182['flash'](a91_0x1eb8('0x1a'),{'msg':a91_0x1eb8('0x5e')});_0x35eeed(_0x4a9ed8);});}],_0xee8301=>{if(_0xee8301){return _0xbc3352(_0xee8301);}_0x44faef[a91_0x1eb8('0x9')]('/');});};exports[a91_0x1eb8('0x5f')]=(_0x1b30d3,_0x32584a)=>{if(_0x1b30d3[a91_0x1eb8('0x46')]()){return _0x32584a['redirect']('/');}_0x32584a[a91_0x1eb8('0xa')](a91_0x1eb8('0x60'),{'title':a91_0x1eb8('0x61')});};exports[a91_0x1eb8('0x62')]=(_0x118e33,_0x57e037,_0x3c4f53)=>{_0x118e33[a91_0x1eb8('0xf')](a91_0x1eb8('0x13'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a91_0x1eb8('0xe')]();_0x118e33['sanitize'](a91_0x1eb8('0x13'))[a91_0x1eb8('0x27')]({'gmail_remove_dots':![]});const _0x3a42d7=_0x118e33['validationErrors']();if(_0x3a42d7){_0x118e33['flash']('errors',_0x3a42d7);return _0x57e037[a91_0x1eb8('0x9')]('/forgot');}async_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x63')]([function createRandomToken(_0x2c0d7b){crypto_1[a91_0x1eb8('0x16')][a91_0x1eb8('0x64')](0x10,(_0x292d8d,_0x17e265)=>{const _0x47153f=_0x17e265['toString'](a91_0x1eb8('0x65'));_0x2c0d7b(_0x292d8d,_0x47153f);});},function setRandomToken(_0xa4fded,_0x50df8b){User_1['default'][a91_0x1eb8('0x29')]({'email':_0x118e33[a91_0x1eb8('0x26')][a91_0x1eb8('0x13')]},(_0x34e6df,_0xcaf1e2)=>{if(_0x34e6df){return _0x50df8b(_0x34e6df);}if(!_0xcaf1e2){_0x118e33[a91_0x1eb8('0x19')](a91_0x1eb8('0x14'),{'msg':'Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.'});return _0x57e037[a91_0x1eb8('0x9')]('/forgot');}_0xcaf1e2['passwordResetToken']=_0xa4fded;_0xcaf1e2[a91_0x1eb8('0x54')]=Date['now']()+0x36ee80;_0xcaf1e2[a91_0x1eb8('0x43')](_0x34e6df=>{_0x50df8b(_0x34e6df,_0xa4fded,_0xcaf1e2);});});},function sendForgotPasswordEmail(_0x303df,_0x1576be,_0x2ec83e){const _0x4cc0e0=nodemailer_1['default'][a91_0x1eb8('0x55')]({'service':a91_0x1eb8('0x56'),'auth':{'user':process[a91_0x1eb8('0x57')]['SENDGRID_USER'],'pass':process[a91_0x1eb8('0x57')][a91_0x1eb8('0x59')]}});const _0x489fe9={'to':_0x1576be[a91_0x1eb8('0x13')],'from':a91_0x1eb8('0x66'),'subject':a91_0x1eb8('0x67'),'text':a91_0x1eb8('0x68')+_0x118e33[a91_0x1eb8('0x69')][a91_0x1eb8('0x6a')]+a91_0x1eb8('0x6b')+_0x303df+a91_0x1eb8('0x6c')};_0x4cc0e0['sendMail'](_0x489fe9,_0x2d9a4d=>{_0x118e33[a91_0x1eb8('0x19')](a91_0x1eb8('0x3b'),{'msg':a91_0x1eb8('0x6d')+_0x1576be[a91_0x1eb8('0x13')]+a91_0x1eb8('0x6e')});_0x2ec83e(_0x2d9a4d);});}],_0x37f0aa=>{if(_0x37f0aa){return _0x3c4f53(_0x37f0aa);}_0x57e037[a91_0x1eb8('0x9')](a91_0x1eb8('0x49'));});};