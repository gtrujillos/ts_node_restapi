var a95_0x8624=['name','gender','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Passwords\x20do\x20not\x20match','findById','Password\x20has\x20been\x20changed.','postDeleteAccount','info','getOauthUnlink','params','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','passwordResetExpires','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','waterfall','back','passwordResetToken','createTransport','SendGrid','env','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','postForgot','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','SENDGRID_USER','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','async','crypto','nodemailer','passport','express-validator','user','redirect','render','account/login','Login','postLogin','email','Email\x20is\x20not\x20valid','isEmail','password','Password\x20cannot\x20be\x20blank','sanitize','normalizeEmail','validationErrors','/login','local','flash','errors','message','logIn','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','account/signup','Create\x20Account','postSignup','assert','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','body','/signup','default','findOne','save','getAccount','account/profile','Please\x20enter\x20a\x20valid\x20email\x20address.','/account','profile'];(function(_0x35a5bf,_0x2895e1){var _0x25c929=function(_0x2a3a85){while(--_0x2a3a85){_0x35a5bf['push'](_0x35a5bf['shift']());}};_0x25c929(++_0x2895e1);}(a95_0x8624,0x17c));var a95_0x5e69=function(_0x35f102,_0x374dd1){_0x35f102=_0x35f102-0x0;var _0x48aa9d=a95_0x8624[_0x35f102];return _0x48aa9d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a11b0){return _0x1a11b0&&_0x1a11b0['__esModule']?_0x1a11b0:{'default':_0x1a11b0};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a95_0x5e69('0x0')));const crypto_1=__importDefault(require(a95_0x5e69('0x1')));const nodemailer_1=__importDefault(require(a95_0x5e69('0x2')));const passport_1=__importDefault(require(a95_0x5e69('0x3')));const User_1=__importDefault(require('../models/User'));const request=require(a95_0x5e69('0x4'));exports['getLogin']=(_0x3f8dad,_0x1b01dc)=>{if(_0x3f8dad[a95_0x5e69('0x5')]){return _0x1b01dc[a95_0x5e69('0x6')]('/');}_0x1b01dc[a95_0x5e69('0x7')](a95_0x5e69('0x8'),{'title':a95_0x5e69('0x9')});};exports[a95_0x5e69('0xa')]=(_0x241487,_0x4db16b,_0x21b27b)=>{_0x241487['assert'](a95_0x5e69('0xb'),a95_0x5e69('0xc'))[a95_0x5e69('0xd')]();_0x241487['assert'](a95_0x5e69('0xe'),a95_0x5e69('0xf'))['notEmpty']();_0x241487[a95_0x5e69('0x10')]('email')[a95_0x5e69('0x11')]({'gmail_remove_dots':![]});const _0x48d237=_0x241487[a95_0x5e69('0x12')]();if(_0x48d237){_0x241487['flash']('errors',_0x48d237);return _0x4db16b[a95_0x5e69('0x6')](a95_0x5e69('0x13'));}passport_1['default']['authenticate'](a95_0x5e69('0x14'),(_0x9e43bc,_0x4133fb,_0x396329)=>{if(_0x9e43bc){return _0x21b27b(_0x9e43bc);}if(!_0x4133fb){_0x241487[a95_0x5e69('0x15')](a95_0x5e69('0x16'),_0x396329[a95_0x5e69('0x17')]);return _0x4db16b[a95_0x5e69('0x6')](a95_0x5e69('0x13'));}_0x241487[a95_0x5e69('0x18')](_0x4133fb,_0x9e43bc=>{if(_0x9e43bc){return _0x21b27b(_0x9e43bc);}_0x241487[a95_0x5e69('0x15')](a95_0x5e69('0x19'),{'msg':a95_0x5e69('0x1a')});_0x4db16b[a95_0x5e69('0x6')](_0x241487[a95_0x5e69('0x1b')][a95_0x5e69('0x1c')]||'/');});})(_0x241487,_0x4db16b,_0x21b27b);};exports['logout']=(_0x1164e7,_0x39b4cb)=>{_0x1164e7[a95_0x5e69('0x1d')]();_0x39b4cb[a95_0x5e69('0x6')]('/');};exports[a95_0x5e69('0x1e')]=(_0x2c3ce3,_0x3e968c)=>{if(_0x2c3ce3[a95_0x5e69('0x5')]){return _0x3e968c[a95_0x5e69('0x6')]('/');}_0x3e968c[a95_0x5e69('0x7')](a95_0x5e69('0x1f'),{'title':a95_0x5e69('0x20')});};exports[a95_0x5e69('0x21')]=(_0x31ef5c,_0x1323ea,_0x14be83)=>{_0x31ef5c[a95_0x5e69('0x22')]('email',a95_0x5e69('0xc'))[a95_0x5e69('0xd')]();_0x31ef5c['assert']('password',a95_0x5e69('0x23'))[a95_0x5e69('0x24')]({'min':0x4});_0x31ef5c['assert'](a95_0x5e69('0x25'),'Passwords\x20do\x20not\x20match')['equals'](_0x31ef5c[a95_0x5e69('0x26')]['password']);_0x31ef5c[a95_0x5e69('0x10')]('email')[a95_0x5e69('0x11')]({'gmail_remove_dots':![]});const _0x137a30=_0x31ef5c[a95_0x5e69('0x12')]();if(_0x137a30){_0x31ef5c[a95_0x5e69('0x15')]('errors',_0x137a30);return _0x1323ea['redirect'](a95_0x5e69('0x27'));}const _0x533776=new User_1[(a95_0x5e69('0x28'))]({'email':_0x31ef5c['body']['email'],'password':_0x31ef5c[a95_0x5e69('0x26')][a95_0x5e69('0xe')]});User_1[a95_0x5e69('0x28')][a95_0x5e69('0x29')]({'email':_0x31ef5c[a95_0x5e69('0x26')][a95_0x5e69('0xb')]},(_0x1de638,_0x2be554)=>{if(_0x1de638){return _0x14be83(_0x1de638);}if(_0x2be554){_0x31ef5c[a95_0x5e69('0x15')](a95_0x5e69('0x16'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x1323ea[a95_0x5e69('0x6')](a95_0x5e69('0x27'));}_0x533776[a95_0x5e69('0x2a')](_0x1de638=>{if(_0x1de638){return _0x14be83(_0x1de638);}_0x31ef5c['logIn'](_0x533776,_0x1de638=>{if(_0x1de638){return _0x14be83(_0x1de638);}_0x1323ea[a95_0x5e69('0x6')]('/');});});});};exports[a95_0x5e69('0x2b')]=(_0x56ab0c,_0x4d77bc)=>{_0x4d77bc[a95_0x5e69('0x7')](a95_0x5e69('0x2c'),{'title':'Account\x20Management'});};exports['postUpdateProfile']=(_0x500640,_0xe456f7,_0x2745c5)=>{_0x500640['assert'](a95_0x5e69('0xb'),a95_0x5e69('0x2d'))[a95_0x5e69('0xd')]();_0x500640[a95_0x5e69('0x10')](a95_0x5e69('0xb'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x1017c8=_0x500640['validationErrors']();if(_0x1017c8){_0x500640[a95_0x5e69('0x15')](a95_0x5e69('0x16'),_0x1017c8);return _0xe456f7['redirect'](a95_0x5e69('0x2e'));}User_1[a95_0x5e69('0x28')]['findById'](_0x500640[a95_0x5e69('0x5')]['id'],(_0x5f553f,_0x4d0dcd)=>{if(_0x5f553f){return _0x2745c5(_0x5f553f);}_0x4d0dcd['email']=_0x500640['body'][a95_0x5e69('0xb')]||'';_0x4d0dcd[a95_0x5e69('0x2f')]['name']=_0x500640[a95_0x5e69('0x26')][a95_0x5e69('0x30')]||'';_0x4d0dcd[a95_0x5e69('0x2f')]['gender']=_0x500640[a95_0x5e69('0x26')][a95_0x5e69('0x31')]||'';_0x4d0dcd[a95_0x5e69('0x2f')][a95_0x5e69('0x32')]=_0x500640[a95_0x5e69('0x26')][a95_0x5e69('0x32')]||'';_0x4d0dcd[a95_0x5e69('0x2f')][a95_0x5e69('0x33')]=_0x500640[a95_0x5e69('0x26')]['website']||'';_0x4d0dcd['save'](_0x5f553f=>{if(_0x5f553f){if(_0x5f553f[a95_0x5e69('0x34')]===0x2af8){_0x500640[a95_0x5e69('0x15')](a95_0x5e69('0x16'),{'msg':a95_0x5e69('0x35')});return _0xe456f7[a95_0x5e69('0x6')]('/account');}return _0x2745c5(_0x5f553f);}_0x500640[a95_0x5e69('0x15')]('success',{'msg':a95_0x5e69('0x36')});_0xe456f7[a95_0x5e69('0x6')]('/account');});});};exports[a95_0x5e69('0x37')]=(_0x5c4e14,_0xea59dd,_0x4d5ae3)=>{_0x5c4e14[a95_0x5e69('0x22')]('password',a95_0x5e69('0x23'))[a95_0x5e69('0x24')]({'min':0x4});_0x5c4e14['assert'](a95_0x5e69('0x25'),a95_0x5e69('0x38'))['equals'](_0x5c4e14['body'][a95_0x5e69('0xe')]);const _0x217dd0=_0x5c4e14[a95_0x5e69('0x12')]();if(_0x217dd0){_0x5c4e14[a95_0x5e69('0x15')](a95_0x5e69('0x16'),_0x217dd0);return _0xea59dd[a95_0x5e69('0x6')](a95_0x5e69('0x2e'));}User_1[a95_0x5e69('0x28')][a95_0x5e69('0x39')](_0x5c4e14[a95_0x5e69('0x5')]['id'],(_0x3d6b3a,_0x22a3df)=>{if(_0x3d6b3a){return _0x4d5ae3(_0x3d6b3a);}_0x22a3df['password']=_0x5c4e14[a95_0x5e69('0x26')][a95_0x5e69('0xe')];_0x22a3df[a95_0x5e69('0x2a')](_0x3d6b3a=>{if(_0x3d6b3a){return _0x4d5ae3(_0x3d6b3a);}_0x5c4e14[a95_0x5e69('0x15')](a95_0x5e69('0x19'),{'msg':a95_0x5e69('0x3a')});_0xea59dd[a95_0x5e69('0x6')]('/account');});});};exports[a95_0x5e69('0x3b')]=(_0x57b8cb,_0x3cb0c2,_0x4d01c5)=>{User_1[a95_0x5e69('0x28')]['remove']({'_id':_0x57b8cb[a95_0x5e69('0x5')]['id']},_0x507245=>{if(_0x507245){return _0x4d01c5(_0x507245);}_0x57b8cb[a95_0x5e69('0x1d')]();_0x57b8cb[a95_0x5e69('0x15')](a95_0x5e69('0x3c'),{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0x3cb0c2[a95_0x5e69('0x6')]('/');});};exports[a95_0x5e69('0x3d')]=(_0x1ce161,_0x682860,_0x2d8561)=>{const _0x3ba4d1=_0x1ce161[a95_0x5e69('0x3e')]['provider'];User_1[a95_0x5e69('0x28')][a95_0x5e69('0x39')](_0x1ce161[a95_0x5e69('0x5')]['id'],(_0x3fa50a,_0x1767f2)=>{if(_0x3fa50a){return _0x2d8561(_0x3fa50a);}_0x1767f2[_0x3ba4d1]=undefined;_0x1767f2[a95_0x5e69('0x3f')]=_0x1767f2[a95_0x5e69('0x3f')][a95_0x5e69('0x40')](_0x323f38=>_0x323f38[a95_0x5e69('0x41')]!==_0x3ba4d1);_0x1767f2[a95_0x5e69('0x2a')](_0x3fa50a=>{if(_0x3fa50a){return _0x2d8561(_0x3fa50a);}_0x1ce161[a95_0x5e69('0x15')](a95_0x5e69('0x3c'),{'msg':_0x3ba4d1+a95_0x5e69('0x42')});_0x682860['redirect']('/account');});});};exports[a95_0x5e69('0x43')]=(_0x54e4b1,_0x5d5843,_0x697c3a)=>{if(_0x54e4b1[a95_0x5e69('0x44')]()){return _0x5d5843[a95_0x5e69('0x6')]('/');}User_1[a95_0x5e69('0x28')]['findOne']({'passwordResetToken':_0x54e4b1[a95_0x5e69('0x3e')][a95_0x5e69('0x45')]})[a95_0x5e69('0x46')](a95_0x5e69('0x47'))['gt'](Date[a95_0x5e69('0x48')]())[a95_0x5e69('0x49')]((_0x3aa4a7,_0x13c030)=>{if(_0x3aa4a7){return _0x697c3a(_0x3aa4a7);}if(!_0x13c030){_0x54e4b1[a95_0x5e69('0x15')](a95_0x5e69('0x16'),{'msg':a95_0x5e69('0x4a')});return _0x5d5843[a95_0x5e69('0x6')](a95_0x5e69('0x4b'));}_0x5d5843[a95_0x5e69('0x7')](a95_0x5e69('0x4c'),{'title':a95_0x5e69('0x4d')});});};exports[a95_0x5e69('0x4e')]=(_0x4ce6a9,_0x28d47d,_0x3496c2)=>{_0x4ce6a9[a95_0x5e69('0x22')](a95_0x5e69('0xe'),a95_0x5e69('0x4f'))['len']({'min':0x4});_0x4ce6a9[a95_0x5e69('0x22')](a95_0x5e69('0x50'),a95_0x5e69('0x51'))['equals'](_0x4ce6a9[a95_0x5e69('0x26')]['password']);const _0xebe97f=_0x4ce6a9['validationErrors']();if(_0xebe97f){_0x4ce6a9[a95_0x5e69('0x15')]('errors',_0xebe97f);return _0x28d47d['redirect']('back');}async_1[a95_0x5e69('0x28')][a95_0x5e69('0x52')]([function resetPassword(_0x3575a6){User_1[a95_0x5e69('0x28')]['findOne']({'passwordResetToken':_0x4ce6a9[a95_0x5e69('0x3e')]['token']})['where'](a95_0x5e69('0x47'))['gt'](Date[a95_0x5e69('0x48')]())[a95_0x5e69('0x49')]((_0x6b7801,_0x5504cc)=>{if(_0x6b7801){return _0x3496c2(_0x6b7801);}if(!_0x5504cc){_0x4ce6a9[a95_0x5e69('0x15')](a95_0x5e69('0x16'),{'msg':a95_0x5e69('0x4a')});return _0x28d47d[a95_0x5e69('0x6')](a95_0x5e69('0x53'));}_0x5504cc[a95_0x5e69('0xe')]=_0x4ce6a9[a95_0x5e69('0x26')][a95_0x5e69('0xe')];_0x5504cc[a95_0x5e69('0x54')]=undefined;_0x5504cc[a95_0x5e69('0x47')]=undefined;_0x5504cc[a95_0x5e69('0x2a')](_0x6b7801=>{if(_0x6b7801){return _0x3496c2(_0x6b7801);}_0x4ce6a9[a95_0x5e69('0x18')](_0x5504cc,_0x6b7801=>{_0x3575a6(_0x6b7801,_0x5504cc);});});});},function sendResetPasswordEmail(_0x1427e6,_0xf73dde){const _0x5476e8=nodemailer_1['default'][a95_0x5e69('0x55')]({'service':a95_0x5e69('0x56'),'auth':{'user':process['env']['SENDGRID_USER'],'pass':process[a95_0x5e69('0x57')][a95_0x5e69('0x58')]}});const _0x2a27b6={'to':_0x1427e6[a95_0x5e69('0xb')],'from':a95_0x5e69('0x59'),'subject':a95_0x5e69('0x5a'),'text':a95_0x5e69('0x5b')+_0x1427e6[a95_0x5e69('0xb')]+'\x20has\x20just\x20been\x20changed.\x0a'};_0x5476e8[a95_0x5e69('0x5c')](_0x2a27b6,_0x4aa3fc=>{_0x4ce6a9[a95_0x5e69('0x15')]('success',{'msg':a95_0x5e69('0x5d')});_0xf73dde(_0x4aa3fc);});}],_0xcbf4c0=>{if(_0xcbf4c0){return _0x3496c2(_0xcbf4c0);}_0x28d47d[a95_0x5e69('0x6')]('/');});};exports[a95_0x5e69('0x5e')]=(_0x164c57,_0x25dae0)=>{if(_0x164c57['isAuthenticated']()){return _0x25dae0[a95_0x5e69('0x6')]('/');}_0x25dae0[a95_0x5e69('0x7')]('account/forgot',{'title':'Forgot\x20Password'});};exports[a95_0x5e69('0x5f')]=(_0x46e510,_0x48a779,_0x4d6c78)=>{_0x46e510[a95_0x5e69('0x22')](a95_0x5e69('0xb'),a95_0x5e69('0x2d'))[a95_0x5e69('0xd')]();_0x46e510['sanitize'](a95_0x5e69('0xb'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x221e46=_0x46e510[a95_0x5e69('0x12')]();if(_0x221e46){_0x46e510[a95_0x5e69('0x15')]('errors',_0x221e46);return _0x48a779[a95_0x5e69('0x6')](a95_0x5e69('0x4b'));}async_1['default']['waterfall']([function createRandomToken(_0x238700){crypto_1[a95_0x5e69('0x28')][a95_0x5e69('0x60')](0x10,(_0x5eddf2,_0x47a659)=>{const _0x34e6b0=_0x47a659[a95_0x5e69('0x61')](a95_0x5e69('0x62'));_0x238700(_0x5eddf2,_0x34e6b0);});},function setRandomToken(_0x5c0437,_0x28f51c){User_1[a95_0x5e69('0x28')][a95_0x5e69('0x29')]({'email':_0x46e510[a95_0x5e69('0x26')][a95_0x5e69('0xb')]},(_0x146d97,_0x3af3ba)=>{if(_0x146d97){return _0x28f51c(_0x146d97);}if(!_0x3af3ba){_0x46e510[a95_0x5e69('0x15')](a95_0x5e69('0x16'),{'msg':a95_0x5e69('0x63')});return _0x48a779[a95_0x5e69('0x6')](a95_0x5e69('0x4b'));}_0x3af3ba[a95_0x5e69('0x54')]=_0x5c0437;_0x3af3ba[a95_0x5e69('0x47')]=Date[a95_0x5e69('0x48')]()+0x36ee80;_0x3af3ba[a95_0x5e69('0x2a')](_0x146d97=>{_0x28f51c(_0x146d97,_0x5c0437,_0x3af3ba);});});},function sendForgotPasswordEmail(_0xbe4606,_0x3c1d51,_0x1d899c){const _0x326bed=nodemailer_1[a95_0x5e69('0x28')][a95_0x5e69('0x55')]({'service':a95_0x5e69('0x56'),'auth':{'user':process['env'][a95_0x5e69('0x64')],'pass':process['env']['SENDGRID_PASSWORD']}});const _0x244210={'to':_0x3c1d51[a95_0x5e69('0xb')],'from':a95_0x5e69('0x65'),'subject':a95_0x5e69('0x66'),'text':a95_0x5e69('0x67')+_0x46e510['headers'][a95_0x5e69('0x68')]+'/reset/'+_0xbe4606+a95_0x5e69('0x69')};_0x326bed[a95_0x5e69('0x5c')](_0x244210,_0xe38df1=>{_0x46e510[a95_0x5e69('0x15')](a95_0x5e69('0x3c'),{'msg':a95_0x5e69('0x6a')+_0x3c1d51[a95_0x5e69('0xb')]+'\x20with\x20further\x20instructions.'});_0x1d899c(_0xe38df1);});}],_0x11d683=>{if(_0x11d683){return _0x4d6c78(_0x11d683);}_0x48a779['redirect'](a95_0x5e69('0x4b'));});};