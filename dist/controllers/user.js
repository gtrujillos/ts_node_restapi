var a95_0x992e=['crypto','passport','../models/User','express-validator','getLogin','user','redirect','render','account/login','postLogin','assert','email','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','normalizeEmail','validationErrors','flash','errors','default','authenticate','local','message','/login','success','Success!\x20You\x20are\x20logged\x20in.','session','getSignup','Create\x20Account','postSignup','len','confirmPassword','Passwords\x20do\x20not\x20match','body','/signup','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','logIn','getAccount','account/profile','postUpdateProfile','isEmail','/account','findById','profile','name','gender','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','postUpdatePassword','equals','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','logout','info','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','isAuthenticated','findOne','token','where','passwordResetExpires','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','back','waterfall','passwordResetToken','createTransport','SendGrid','env','SENDGRID_USER','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','sendMail','getForgot','account/forgot','Forgot\x20Password','Please\x20enter\x20a\x20valid\x20email\x20address.','randomBytes','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','SENDGRID_PASSWORD','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','async'];(function(_0x22bfee,_0x19603f){var _0x3a7e01=function(_0x471199){while(--_0x471199){_0x22bfee['push'](_0x22bfee['shift']());}};_0x3a7e01(++_0x19603f);}(a95_0x992e,0x6a));var a95_0x3be7=function(_0x241b21,_0x429583){_0x241b21=_0x241b21-0x0;var _0x25cadb=a95_0x992e[_0x241b21];return _0x25cadb;};'use strict';var __importDefault=this&&this[a95_0x3be7('0x0')]||function(_0x83dc08){return _0x83dc08&&_0x83dc08[a95_0x3be7('0x1')]?_0x83dc08:{'default':_0x83dc08};};Object['defineProperty'](exports,a95_0x3be7('0x1'),{'value':!![]});const async_1=__importDefault(require(a95_0x3be7('0x2')));const crypto_1=__importDefault(require(a95_0x3be7('0x3')));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a95_0x3be7('0x4')));const User_1=__importDefault(require(a95_0x3be7('0x5')));const request=require(a95_0x3be7('0x6'));exports[a95_0x3be7('0x7')]=(_0x1384ba,_0x3aad1f)=>{if(_0x1384ba[a95_0x3be7('0x8')]){return _0x3aad1f[a95_0x3be7('0x9')]('/');}_0x3aad1f[a95_0x3be7('0xa')](a95_0x3be7('0xb'),{'title':'Login'});};exports[a95_0x3be7('0xc')]=(_0x389de6,_0x1dbeec,_0x44ff45)=>{_0x389de6[a95_0x3be7('0xd')](a95_0x3be7('0xe'),'Email\x20is\x20not\x20valid')['isEmail']();_0x389de6[a95_0x3be7('0xd')](a95_0x3be7('0xf'),a95_0x3be7('0x10'))[a95_0x3be7('0x11')]();_0x389de6[a95_0x3be7('0x12')](a95_0x3be7('0xe'))[a95_0x3be7('0x13')]({'gmail_remove_dots':![]});const _0x513d83=_0x389de6[a95_0x3be7('0x14')]();if(_0x513d83){_0x389de6[a95_0x3be7('0x15')](a95_0x3be7('0x16'),_0x513d83);return _0x1dbeec[a95_0x3be7('0x9')]('/login');}passport_1[a95_0x3be7('0x17')][a95_0x3be7('0x18')](a95_0x3be7('0x19'),(_0x26e78a,_0x550dcd,_0xc1a6f5)=>{if(_0x26e78a){return _0x44ff45(_0x26e78a);}if(!_0x550dcd){_0x389de6[a95_0x3be7('0x15')]('errors',_0xc1a6f5[a95_0x3be7('0x1a')]);return _0x1dbeec[a95_0x3be7('0x9')](a95_0x3be7('0x1b'));}_0x389de6['logIn'](_0x550dcd,_0x26e78a=>{if(_0x26e78a){return _0x44ff45(_0x26e78a);}_0x389de6['flash'](a95_0x3be7('0x1c'),{'msg':a95_0x3be7('0x1d')});_0x1dbeec[a95_0x3be7('0x9')](_0x389de6[a95_0x3be7('0x1e')]['returnTo']||'/');});})(_0x389de6,_0x1dbeec,_0x44ff45);};exports['logout']=(_0x3e1e0d,_0x1111a0)=>{_0x3e1e0d['logout']();_0x1111a0[a95_0x3be7('0x9')]('/');};exports[a95_0x3be7('0x1f')]=(_0x223334,_0x10c926)=>{if(_0x223334['user']){return _0x10c926[a95_0x3be7('0x9')]('/');}_0x10c926['render']('account/signup',{'title':a95_0x3be7('0x20')});};exports[a95_0x3be7('0x21')]=(_0x582592,_0x32bcc6,_0xffa316)=>{_0x582592[a95_0x3be7('0xd')](a95_0x3be7('0xe'),'Email\x20is\x20not\x20valid')['isEmail']();_0x582592[a95_0x3be7('0xd')](a95_0x3be7('0xf'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')[a95_0x3be7('0x22')]({'min':0x4});_0x582592[a95_0x3be7('0xd')](a95_0x3be7('0x23'),a95_0x3be7('0x24'))['equals'](_0x582592[a95_0x3be7('0x25')][a95_0x3be7('0xf')]);_0x582592[a95_0x3be7('0x12')]('email')[a95_0x3be7('0x13')]({'gmail_remove_dots':![]});const _0x548275=_0x582592[a95_0x3be7('0x14')]();if(_0x548275){_0x582592['flash'](a95_0x3be7('0x16'),_0x548275);return _0x32bcc6['redirect'](a95_0x3be7('0x26'));}const _0x2b5bf2=new User_1['default']({'email':_0x582592[a95_0x3be7('0x25')][a95_0x3be7('0xe')],'password':_0x582592[a95_0x3be7('0x25')][a95_0x3be7('0xf')]});User_1[a95_0x3be7('0x17')]['findOne']({'email':_0x582592['body'][a95_0x3be7('0xe')]},(_0x525a9f,_0x467ee9)=>{if(_0x525a9f){return _0xffa316(_0x525a9f);}if(_0x467ee9){_0x582592[a95_0x3be7('0x15')](a95_0x3be7('0x16'),{'msg':a95_0x3be7('0x27')});return _0x32bcc6['redirect'](a95_0x3be7('0x26'));}_0x2b5bf2[a95_0x3be7('0x28')](_0x525a9f=>{if(_0x525a9f){return _0xffa316(_0x525a9f);}_0x582592[a95_0x3be7('0x29')](_0x2b5bf2,_0x525a9f=>{if(_0x525a9f){return _0xffa316(_0x525a9f);}_0x32bcc6[a95_0x3be7('0x9')]('/');});});});};exports[a95_0x3be7('0x2a')]=(_0x3bcaae,_0x390ffd)=>{_0x390ffd[a95_0x3be7('0xa')](a95_0x3be7('0x2b'),{'title':'Account\x20Management'});};exports[a95_0x3be7('0x2c')]=(_0x21de5e,_0x33c123,_0x84dc0f)=>{_0x21de5e[a95_0x3be7('0xd')](a95_0x3be7('0xe'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a95_0x3be7('0x2d')]();_0x21de5e[a95_0x3be7('0x12')](a95_0x3be7('0xe'))[a95_0x3be7('0x13')]({'gmail_remove_dots':![]});const _0x4a3822=_0x21de5e['validationErrors']();if(_0x4a3822){_0x21de5e[a95_0x3be7('0x15')](a95_0x3be7('0x16'),_0x4a3822);return _0x33c123[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));}User_1[a95_0x3be7('0x17')][a95_0x3be7('0x2f')](_0x21de5e[a95_0x3be7('0x8')]['id'],(_0x136478,_0x50a36c)=>{if(_0x136478){return _0x84dc0f(_0x136478);}_0x50a36c[a95_0x3be7('0xe')]=_0x21de5e[a95_0x3be7('0x25')][a95_0x3be7('0xe')]||'';_0x50a36c[a95_0x3be7('0x30')][a95_0x3be7('0x31')]=_0x21de5e[a95_0x3be7('0x25')][a95_0x3be7('0x31')]||'';_0x50a36c['profile'][a95_0x3be7('0x32')]=_0x21de5e['body'][a95_0x3be7('0x32')]||'';_0x50a36c[a95_0x3be7('0x30')]['location']=_0x21de5e['body'][a95_0x3be7('0x33')]||'';_0x50a36c[a95_0x3be7('0x30')][a95_0x3be7('0x34')]=_0x21de5e['body'][a95_0x3be7('0x34')]||'';_0x50a36c['save'](_0x136478=>{if(_0x136478){if(_0x136478[a95_0x3be7('0x35')]===0x2af8){_0x21de5e[a95_0x3be7('0x15')]('errors',{'msg':a95_0x3be7('0x36')});return _0x33c123[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));}return _0x84dc0f(_0x136478);}_0x21de5e[a95_0x3be7('0x15')]('success',{'msg':'Profile\x20information\x20has\x20been\x20updated.'});_0x33c123[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));});});};exports[a95_0x3be7('0x37')]=(_0x353bc9,_0x3f295e,_0x1e00f4)=>{_0x353bc9[a95_0x3be7('0xd')]('password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')['len']({'min':0x4});_0x353bc9[a95_0x3be7('0xd')]('confirmPassword',a95_0x3be7('0x24'))[a95_0x3be7('0x38')](_0x353bc9[a95_0x3be7('0x25')]['password']);const _0x2ceff0=_0x353bc9['validationErrors']();if(_0x2ceff0){_0x353bc9['flash']('errors',_0x2ceff0);return _0x3f295e[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));}User_1[a95_0x3be7('0x17')][a95_0x3be7('0x2f')](_0x353bc9[a95_0x3be7('0x8')]['id'],(_0x1e1b6b,_0x458ea6)=>{if(_0x1e1b6b){return _0x1e00f4(_0x1e1b6b);}_0x458ea6[a95_0x3be7('0xf')]=_0x353bc9[a95_0x3be7('0x25')][a95_0x3be7('0xf')];_0x458ea6[a95_0x3be7('0x28')](_0x1e1b6b=>{if(_0x1e1b6b){return _0x1e00f4(_0x1e1b6b);}_0x353bc9[a95_0x3be7('0x15')](a95_0x3be7('0x1c'),{'msg':a95_0x3be7('0x39')});_0x3f295e[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));});});};exports[a95_0x3be7('0x3a')]=(_0x2a2bdf,_0x4cef06,_0xde743c)=>{User_1[a95_0x3be7('0x17')][a95_0x3be7('0x3b')]({'_id':_0x2a2bdf[a95_0x3be7('0x8')]['id']},_0x4da42b=>{if(_0x4da42b){return _0xde743c(_0x4da42b);}_0x2a2bdf[a95_0x3be7('0x3c')]();_0x2a2bdf['flash'](a95_0x3be7('0x3d'),{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0x4cef06[a95_0x3be7('0x9')]('/');});};exports['getOauthUnlink']=(_0x403fd9,_0x3a056f,_0x299d62)=>{const _0x318273=_0x403fd9[a95_0x3be7('0x3e')][a95_0x3be7('0x3f')];User_1[a95_0x3be7('0x17')][a95_0x3be7('0x2f')](_0x403fd9['user']['id'],(_0x6ac1d2,_0x2fa7ed)=>{if(_0x6ac1d2){return _0x299d62(_0x6ac1d2);}_0x2fa7ed[_0x318273]=undefined;_0x2fa7ed[a95_0x3be7('0x40')]=_0x2fa7ed[a95_0x3be7('0x40')][a95_0x3be7('0x41')](_0x1b586a=>_0x1b586a[a95_0x3be7('0x42')]!==_0x318273);_0x2fa7ed['save'](_0x6ac1d2=>{if(_0x6ac1d2){return _0x299d62(_0x6ac1d2);}_0x403fd9[a95_0x3be7('0x15')](a95_0x3be7('0x3d'),{'msg':_0x318273+a95_0x3be7('0x43')});_0x3a056f[a95_0x3be7('0x9')](a95_0x3be7('0x2e'));});});};exports['getReset']=(_0x27d918,_0x1e9361,_0x157270)=>{if(_0x27d918[a95_0x3be7('0x44')]()){return _0x1e9361[a95_0x3be7('0x9')]('/');}User_1[a95_0x3be7('0x17')][a95_0x3be7('0x45')]({'passwordResetToken':_0x27d918[a95_0x3be7('0x3e')][a95_0x3be7('0x46')]})[a95_0x3be7('0x47')](a95_0x3be7('0x48'))['gt'](Date[a95_0x3be7('0x49')]())[a95_0x3be7('0x4a')]((_0x456bd8,_0x3db2c7)=>{if(_0x456bd8){return _0x157270(_0x456bd8);}if(!_0x3db2c7){_0x27d918[a95_0x3be7('0x15')](a95_0x3be7('0x16'),{'msg':a95_0x3be7('0x4b')});return _0x1e9361['redirect'](a95_0x3be7('0x4c'));}_0x1e9361[a95_0x3be7('0xa')](a95_0x3be7('0x4d'),{'title':'Password\x20Reset'});});};exports['postReset']=(_0x38500c,_0x523e10,_0x27b397)=>{_0x38500c[a95_0x3be7('0xd')]('password',a95_0x3be7('0x4e'))[a95_0x3be7('0x22')]({'min':0x4});_0x38500c[a95_0x3be7('0xd')](a95_0x3be7('0x4f'),a95_0x3be7('0x50'))[a95_0x3be7('0x38')](_0x38500c[a95_0x3be7('0x25')][a95_0x3be7('0xf')]);const _0x19b70a=_0x38500c[a95_0x3be7('0x14')]();if(_0x19b70a){_0x38500c[a95_0x3be7('0x15')](a95_0x3be7('0x16'),_0x19b70a);return _0x523e10[a95_0x3be7('0x9')](a95_0x3be7('0x51'));}async_1[a95_0x3be7('0x17')][a95_0x3be7('0x52')]([function resetPassword(_0x5a55dc){User_1[a95_0x3be7('0x17')][a95_0x3be7('0x45')]({'passwordResetToken':_0x38500c[a95_0x3be7('0x3e')]['token']})[a95_0x3be7('0x47')]('passwordResetExpires')['gt'](Date[a95_0x3be7('0x49')]())[a95_0x3be7('0x4a')]((_0x228745,_0xa50dd8)=>{if(_0x228745){return _0x27b397(_0x228745);}if(!_0xa50dd8){_0x38500c[a95_0x3be7('0x15')](a95_0x3be7('0x16'),{'msg':a95_0x3be7('0x4b')});return _0x523e10[a95_0x3be7('0x9')](a95_0x3be7('0x51'));}_0xa50dd8['password']=_0x38500c[a95_0x3be7('0x25')][a95_0x3be7('0xf')];_0xa50dd8[a95_0x3be7('0x53')]=undefined;_0xa50dd8[a95_0x3be7('0x48')]=undefined;_0xa50dd8[a95_0x3be7('0x28')](_0x228745=>{if(_0x228745){return _0x27b397(_0x228745);}_0x38500c[a95_0x3be7('0x29')](_0xa50dd8,_0x228745=>{_0x5a55dc(_0x228745,_0xa50dd8);});});});},function sendResetPasswordEmail(_0x21fa3f,_0x3eb033){const _0x486e24=nodemailer_1['default'][a95_0x3be7('0x54')]({'service':a95_0x3be7('0x55'),'auth':{'user':process[a95_0x3be7('0x56')][a95_0x3be7('0x57')],'pass':process[a95_0x3be7('0x56')]['SENDGRID_PASSWORD']}});const _0x35e5de={'to':_0x21fa3f['email'],'from':a95_0x3be7('0x58'),'subject':a95_0x3be7('0x59'),'text':a95_0x3be7('0x5a')+_0x21fa3f['email']+'\x20has\x20just\x20been\x20changed.\x0a'};_0x486e24[a95_0x3be7('0x5b')](_0x35e5de,_0x33dbb7=>{_0x38500c[a95_0x3be7('0x15')]('success',{'msg':'Success!\x20Your\x20password\x20has\x20been\x20changed.'});_0x3eb033(_0x33dbb7);});}],_0x31730b=>{if(_0x31730b){return _0x27b397(_0x31730b);}_0x523e10[a95_0x3be7('0x9')]('/');});};exports[a95_0x3be7('0x5c')]=(_0x5d29cd,_0x3a44a0)=>{if(_0x5d29cd[a95_0x3be7('0x44')]()){return _0x3a44a0[a95_0x3be7('0x9')]('/');}_0x3a44a0[a95_0x3be7('0xa')](a95_0x3be7('0x5d'),{'title':a95_0x3be7('0x5e')});};exports['postForgot']=(_0x115db3,_0x25b8fa,_0x3a3a98)=>{_0x115db3[a95_0x3be7('0xd')]('email',a95_0x3be7('0x5f'))[a95_0x3be7('0x2d')]();_0x115db3[a95_0x3be7('0x12')](a95_0x3be7('0xe'))[a95_0x3be7('0x13')]({'gmail_remove_dots':![]});const _0x29f571=_0x115db3['validationErrors']();if(_0x29f571){_0x115db3[a95_0x3be7('0x15')](a95_0x3be7('0x16'),_0x29f571);return _0x25b8fa[a95_0x3be7('0x9')]('/forgot');}async_1['default'][a95_0x3be7('0x52')]([function createRandomToken(_0x176e55){crypto_1[a95_0x3be7('0x17')][a95_0x3be7('0x60')](0x10,(_0x236016,_0x515411)=>{const _0xb5a7d6=_0x515411['toString'](a95_0x3be7('0x61'));_0x176e55(_0x236016,_0xb5a7d6);});},function setRandomToken(_0x2b0d52,_0x5ec178){User_1['default'][a95_0x3be7('0x45')]({'email':_0x115db3[a95_0x3be7('0x25')]['email']},(_0x367206,_0x2fb971)=>{if(_0x367206){return _0x5ec178(_0x367206);}if(!_0x2fb971){_0x115db3[a95_0x3be7('0x15')](a95_0x3be7('0x16'),{'msg':a95_0x3be7('0x62')});return _0x25b8fa['redirect'](a95_0x3be7('0x4c'));}_0x2fb971['passwordResetToken']=_0x2b0d52;_0x2fb971['passwordResetExpires']=Date[a95_0x3be7('0x49')]()+0x36ee80;_0x2fb971[a95_0x3be7('0x28')](_0x367206=>{_0x5ec178(_0x367206,_0x2b0d52,_0x2fb971);});});},function sendForgotPasswordEmail(_0x31efed,_0x2f39b0,_0x189230){const _0xb618fe=nodemailer_1[a95_0x3be7('0x17')][a95_0x3be7('0x54')]({'service':a95_0x3be7('0x55'),'auth':{'user':process[a95_0x3be7('0x56')][a95_0x3be7('0x57')],'pass':process[a95_0x3be7('0x56')][a95_0x3be7('0x63')]}});const _0x27bc4f={'to':_0x2f39b0[a95_0x3be7('0xe')],'from':a95_0x3be7('0x64'),'subject':a95_0x3be7('0x65'),'text':a95_0x3be7('0x66')+_0x115db3[a95_0x3be7('0x67')][a95_0x3be7('0x68')]+a95_0x3be7('0x69')+_0x31efed+a95_0x3be7('0x6a')};_0xb618fe[a95_0x3be7('0x5b')](_0x27bc4f,_0x4c24fb=>{_0x115db3[a95_0x3be7('0x15')](a95_0x3be7('0x3d'),{'msg':a95_0x3be7('0x6b')+_0x2f39b0[a95_0x3be7('0xe')]+a95_0x3be7('0x6c')});_0x189230(_0x4c24fb);});}],_0x1c27ff=>{if(_0x1c27ff){return _0x3a3a98(_0x1c27ff);}_0x25b8fa[a95_0x3be7('0x9')]('/forgot');});};