var a201_0x427e=['randomBytes','toString','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','SENDGRID_USER','SENDGRID_PASSWORD','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','defineProperty','__esModule','async','crypto','passport','../models/User','express-validator','getLogin','user','redirect','render','account/login','postLogin','email','Email\x20is\x20not\x20valid','isEmail','assert','password','Password\x20cannot\x20be\x20blank','sanitize','flash','/login','default','authenticate','local','errors','message','logIn','success','Success!\x20You\x20are\x20logged\x20in.','session','returnTo','logout','getSignup','Create\x20Account','postSignup','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','normalizeEmail','body','findOne','/signup','save','account/profile','Account\x20Management','validationErrors','/account','profile','gender','location','website','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','findById','tokens','kind','getReset','isAuthenticated','token','passwordResetExpires','now','exec','/forgot','account/reset','Password\x20Reset','postReset','confirm','Passwords\x20must\x20match.','back','where','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','passwordResetToken','createTransport','SendGrid','env','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','account/forgot','Forgot\x20Password','postForgot','Please\x20enter\x20a\x20valid\x20email\x20address.','waterfall'];(function(_0x295f50,_0x23543e){var _0x4bf3ed=function(_0x39ef64){while(--_0x39ef64){_0x295f50['push'](_0x295f50['shift']());}};_0x4bf3ed(++_0x23543e);}(a201_0x427e,0xe7));var a201_0xd636=function(_0x10c3f7,_0x32899d){_0x10c3f7=_0x10c3f7-0x0;var _0x42cdf9=a201_0x427e[_0x10c3f7];return _0x42cdf9;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4d9893){return _0x4d9893&&_0x4d9893['__esModule']?_0x4d9893:{'default':_0x4d9893};};Object[a201_0xd636('0x0')](exports,a201_0xd636('0x1'),{'value':!![]});const async_1=__importDefault(require(a201_0xd636('0x2')));const crypto_1=__importDefault(require(a201_0xd636('0x3')));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a201_0xd636('0x4')));const User_1=__importDefault(require(a201_0xd636('0x5')));const request=require(a201_0xd636('0x6'));exports[a201_0xd636('0x7')]=(_0x26207a,_0xb1e696)=>{if(_0x26207a[a201_0xd636('0x8')]){return _0xb1e696[a201_0xd636('0x9')]('/');}_0xb1e696[a201_0xd636('0xa')](a201_0xd636('0xb'),{'title':'Login'});};exports[a201_0xd636('0xc')]=(_0xc1ab84,_0x53a9d6,_0xfe9018)=>{_0xc1ab84['assert'](a201_0xd636('0xd'),a201_0xd636('0xe'))[a201_0xd636('0xf')]();_0xc1ab84[a201_0xd636('0x10')](a201_0xd636('0x11'),a201_0xd636('0x12'))['notEmpty']();_0xc1ab84[a201_0xd636('0x13')]('email')['normalizeEmail']({'gmail_remove_dots':![]});const _0x408806=_0xc1ab84['validationErrors']();if(_0x408806){_0xc1ab84[a201_0xd636('0x14')]('errors',_0x408806);return _0x53a9d6[a201_0xd636('0x9')](a201_0xd636('0x15'));}passport_1[a201_0xd636('0x16')][a201_0xd636('0x17')](a201_0xd636('0x18'),(_0x36be1c,_0x301586,_0x21c4b6)=>{if(_0x36be1c){return _0xfe9018(_0x36be1c);}if(!_0x301586){_0xc1ab84[a201_0xd636('0x14')](a201_0xd636('0x19'),_0x21c4b6[a201_0xd636('0x1a')]);return _0x53a9d6['redirect'](a201_0xd636('0x15'));}_0xc1ab84[a201_0xd636('0x1b')](_0x301586,_0x36be1c=>{if(_0x36be1c){return _0xfe9018(_0x36be1c);}_0xc1ab84['flash'](a201_0xd636('0x1c'),{'msg':a201_0xd636('0x1d')});_0x53a9d6[a201_0xd636('0x9')](_0xc1ab84[a201_0xd636('0x1e')][a201_0xd636('0x1f')]||'/');});})(_0xc1ab84,_0x53a9d6,_0xfe9018);};exports[a201_0xd636('0x20')]=(_0x37319e,_0x31e170)=>{_0x37319e[a201_0xd636('0x20')]();_0x31e170['redirect']('/');};exports[a201_0xd636('0x21')]=(_0x5c0fa8,_0x39f0dc)=>{if(_0x5c0fa8[a201_0xd636('0x8')]){return _0x39f0dc[a201_0xd636('0x9')]('/');}_0x39f0dc['render']('account/signup',{'title':a201_0xd636('0x22')});};exports[a201_0xd636('0x23')]=(_0x410255,_0x5908cd,_0x58d7ba)=>{_0x410255['assert']('email',a201_0xd636('0xe'))[a201_0xd636('0xf')]();_0x410255['assert'](a201_0xd636('0x11'),a201_0xd636('0x24'))[a201_0xd636('0x25')]({'min':0x4});_0x410255[a201_0xd636('0x10')](a201_0xd636('0x26'),a201_0xd636('0x27'))[a201_0xd636('0x28')](_0x410255['body'][a201_0xd636('0x11')]);_0x410255[a201_0xd636('0x13')](a201_0xd636('0xd'))[a201_0xd636('0x29')]({'gmail_remove_dots':![]});const _0x44d0c6=_0x410255['validationErrors']();if(_0x44d0c6){_0x410255[a201_0xd636('0x14')](a201_0xd636('0x19'),_0x44d0c6);return _0x5908cd[a201_0xd636('0x9')]('/signup');}const _0x498cf3=new User_1[(a201_0xd636('0x16'))]({'email':_0x410255[a201_0xd636('0x2a')][a201_0xd636('0xd')],'password':_0x410255['body'][a201_0xd636('0x11')]});User_1[a201_0xd636('0x16')][a201_0xd636('0x2b')]({'email':_0x410255[a201_0xd636('0x2a')]['email']},(_0x3619df,_0x213bac)=>{if(_0x3619df){return _0x58d7ba(_0x3619df);}if(_0x213bac){_0x410255[a201_0xd636('0x14')](a201_0xd636('0x19'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x5908cd['redirect'](a201_0xd636('0x2c'));}_0x498cf3[a201_0xd636('0x2d')](_0x3619df=>{if(_0x3619df){return _0x58d7ba(_0x3619df);}_0x410255[a201_0xd636('0x1b')](_0x498cf3,_0x3619df=>{if(_0x3619df){return _0x58d7ba(_0x3619df);}_0x5908cd[a201_0xd636('0x9')]('/');});});});};exports['getAccount']=(_0x53103d,_0x3fa59f)=>{_0x3fa59f[a201_0xd636('0xa')](a201_0xd636('0x2e'),{'title':a201_0xd636('0x2f')});};exports['postUpdateProfile']=(_0x4b14d7,_0x99a3fa,_0x12760b)=>{_0x4b14d7[a201_0xd636('0x10')](a201_0xd636('0xd'),'Please\x20enter\x20a\x20valid\x20email\x20address.')['isEmail']();_0x4b14d7[a201_0xd636('0x13')]('email')[a201_0xd636('0x29')]({'gmail_remove_dots':![]});const _0x18ce36=_0x4b14d7[a201_0xd636('0x30')]();if(_0x18ce36){_0x4b14d7[a201_0xd636('0x14')](a201_0xd636('0x19'),_0x18ce36);return _0x99a3fa['redirect'](a201_0xd636('0x31'));}User_1['default']['findById'](_0x4b14d7[a201_0xd636('0x8')]['id'],(_0x28679c,_0x15905e)=>{if(_0x28679c){return _0x12760b(_0x28679c);}_0x15905e['email']=_0x4b14d7[a201_0xd636('0x2a')][a201_0xd636('0xd')]||'';_0x15905e[a201_0xd636('0x32')]['name']=_0x4b14d7[a201_0xd636('0x2a')]['name']||'';_0x15905e['profile'][a201_0xd636('0x33')]=_0x4b14d7['body'][a201_0xd636('0x33')]||'';_0x15905e[a201_0xd636('0x32')][a201_0xd636('0x34')]=_0x4b14d7[a201_0xd636('0x2a')][a201_0xd636('0x34')]||'';_0x15905e[a201_0xd636('0x32')][a201_0xd636('0x35')]=_0x4b14d7[a201_0xd636('0x2a')][a201_0xd636('0x35')]||'';_0x15905e['save'](_0x28679c=>{if(_0x28679c){if(_0x28679c['code']===0x2af8){_0x4b14d7['flash'](a201_0xd636('0x19'),{'msg':a201_0xd636('0x36')});return _0x99a3fa[a201_0xd636('0x9')](a201_0xd636('0x31'));}return _0x12760b(_0x28679c);}_0x4b14d7[a201_0xd636('0x14')]('success',{'msg':a201_0xd636('0x37')});_0x99a3fa[a201_0xd636('0x9')]('/account');});});};exports[a201_0xd636('0x38')]=(_0x59fb43,_0xdcdb66,_0x34b749)=>{_0x59fb43[a201_0xd636('0x10')](a201_0xd636('0x11'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')[a201_0xd636('0x25')]({'min':0x4});_0x59fb43[a201_0xd636('0x10')]('confirmPassword',a201_0xd636('0x27'))[a201_0xd636('0x28')](_0x59fb43['body']['password']);const _0x5d9125=_0x59fb43[a201_0xd636('0x30')]();if(_0x5d9125){_0x59fb43[a201_0xd636('0x14')](a201_0xd636('0x19'),_0x5d9125);return _0xdcdb66['redirect'](a201_0xd636('0x31'));}User_1[a201_0xd636('0x16')]['findById'](_0x59fb43['user']['id'],(_0x28e252,_0x5e1c27)=>{if(_0x28e252){return _0x34b749(_0x28e252);}_0x5e1c27[a201_0xd636('0x11')]=_0x59fb43['body']['password'];_0x5e1c27['save'](_0x28e252=>{if(_0x28e252){return _0x34b749(_0x28e252);}_0x59fb43['flash'](a201_0xd636('0x1c'),{'msg':a201_0xd636('0x39')});_0xdcdb66[a201_0xd636('0x9')](a201_0xd636('0x31'));});});};exports[a201_0xd636('0x3a')]=(_0x44ee84,_0x9175d0,_0xae6bc7)=>{User_1[a201_0xd636('0x16')][a201_0xd636('0x3b')]({'_id':_0x44ee84[a201_0xd636('0x8')]['id']},_0x10e765=>{if(_0x10e765){return _0xae6bc7(_0x10e765);}_0x44ee84[a201_0xd636('0x20')]();_0x44ee84['flash'](a201_0xd636('0x3c'),{'msg':a201_0xd636('0x3d')});_0x9175d0[a201_0xd636('0x9')]('/');});};exports[a201_0xd636('0x3e')]=(_0x51340b,_0xf6675a,_0x13a276)=>{const _0x2ae4da=_0x51340b[a201_0xd636('0x3f')][a201_0xd636('0x40')];User_1[a201_0xd636('0x16')][a201_0xd636('0x41')](_0x51340b[a201_0xd636('0x8')]['id'],(_0x441b1b,_0x4ea286)=>{if(_0x441b1b){return _0x13a276(_0x441b1b);}_0x4ea286[_0x2ae4da]=undefined;_0x4ea286[a201_0xd636('0x42')]=_0x4ea286[a201_0xd636('0x42')]['filter'](_0x3149fa=>_0x3149fa[a201_0xd636('0x43')]!==_0x2ae4da);_0x4ea286[a201_0xd636('0x2d')](_0x441b1b=>{if(_0x441b1b){return _0x13a276(_0x441b1b);}_0x51340b[a201_0xd636('0x14')]('info',{'msg':_0x2ae4da+'\x20account\x20has\x20been\x20unlinked.'});_0xf6675a[a201_0xd636('0x9')](a201_0xd636('0x31'));});});};exports[a201_0xd636('0x44')]=(_0x13b1be,_0x5b6683,_0x10fa28)=>{if(_0x13b1be[a201_0xd636('0x45')]()){return _0x5b6683['redirect']('/');}User_1['default'][a201_0xd636('0x2b')]({'passwordResetToken':_0x13b1be[a201_0xd636('0x3f')][a201_0xd636('0x46')]})['where'](a201_0xd636('0x47'))['gt'](Date[a201_0xd636('0x48')]())[a201_0xd636('0x49')]((_0x3a073a,_0x262d82)=>{if(_0x3a073a){return _0x10fa28(_0x3a073a);}if(!_0x262d82){_0x13b1be['flash']('errors',{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x5b6683[a201_0xd636('0x9')](a201_0xd636('0x4a'));}_0x5b6683[a201_0xd636('0xa')](a201_0xd636('0x4b'),{'title':a201_0xd636('0x4c')});});};exports[a201_0xd636('0x4d')]=(_0xeb6592,_0x537592,_0x168ad5)=>{_0xeb6592[a201_0xd636('0x10')]('password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a201_0xd636('0x25')]({'min':0x4});_0xeb6592['assert'](a201_0xd636('0x4e'),a201_0xd636('0x4f'))[a201_0xd636('0x28')](_0xeb6592[a201_0xd636('0x2a')]['password']);const _0xb72dd2=_0xeb6592[a201_0xd636('0x30')]();if(_0xb72dd2){_0xeb6592[a201_0xd636('0x14')](a201_0xd636('0x19'),_0xb72dd2);return _0x537592[a201_0xd636('0x9')](a201_0xd636('0x50'));}async_1['default']['waterfall']([function resetPassword(_0x28ea01){User_1[a201_0xd636('0x16')][a201_0xd636('0x2b')]({'passwordResetToken':_0xeb6592[a201_0xd636('0x3f')]['token']})[a201_0xd636('0x51')](a201_0xd636('0x47'))['gt'](Date[a201_0xd636('0x48')]())[a201_0xd636('0x49')]((_0x170a6d,_0x2bc061)=>{if(_0x170a6d){return _0x168ad5(_0x170a6d);}if(!_0x2bc061){_0xeb6592['flash'](a201_0xd636('0x19'),{'msg':a201_0xd636('0x52')});return _0x537592[a201_0xd636('0x9')](a201_0xd636('0x50'));}_0x2bc061[a201_0xd636('0x11')]=_0xeb6592[a201_0xd636('0x2a')][a201_0xd636('0x11')];_0x2bc061[a201_0xd636('0x53')]=undefined;_0x2bc061['passwordResetExpires']=undefined;_0x2bc061['save'](_0x170a6d=>{if(_0x170a6d){return _0x168ad5(_0x170a6d);}_0xeb6592[a201_0xd636('0x1b')](_0x2bc061,_0x170a6d=>{_0x28ea01(_0x170a6d,_0x2bc061);});});});},function sendResetPasswordEmail(_0x11a0c0,_0x3eacf1){const _0x2f536a=nodemailer_1[a201_0xd636('0x16')][a201_0xd636('0x54')]({'service':a201_0xd636('0x55'),'auth':{'user':process[a201_0xd636('0x56')]['SENDGRID_USER'],'pass':process[a201_0xd636('0x56')]['SENDGRID_PASSWORD']}});const _0x477355={'to':_0x11a0c0[a201_0xd636('0xd')],'from':a201_0xd636('0x57'),'subject':a201_0xd636('0x58'),'text':a201_0xd636('0x59')+_0x11a0c0[a201_0xd636('0xd')]+a201_0xd636('0x5a')};_0x2f536a[a201_0xd636('0x5b')](_0x477355,_0x71ae0c=>{_0xeb6592[a201_0xd636('0x14')]('success',{'msg':a201_0xd636('0x5c')});_0x3eacf1(_0x71ae0c);});}],_0x563dbc=>{if(_0x563dbc){return _0x168ad5(_0x563dbc);}_0x537592[a201_0xd636('0x9')]('/');});};exports[a201_0xd636('0x5d')]=(_0x1ec028,_0x5ceee6)=>{if(_0x1ec028[a201_0xd636('0x45')]()){return _0x5ceee6[a201_0xd636('0x9')]('/');}_0x5ceee6[a201_0xd636('0xa')](a201_0xd636('0x5e'),{'title':a201_0xd636('0x5f')});};exports[a201_0xd636('0x60')]=(_0x165deb,_0x61336,_0x5bf5f2)=>{_0x165deb[a201_0xd636('0x10')](a201_0xd636('0xd'),a201_0xd636('0x61'))[a201_0xd636('0xf')]();_0x165deb[a201_0xd636('0x13')](a201_0xd636('0xd'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x2ed814=_0x165deb[a201_0xd636('0x30')]();if(_0x2ed814){_0x165deb['flash'](a201_0xd636('0x19'),_0x2ed814);return _0x61336['redirect'](a201_0xd636('0x4a'));}async_1[a201_0xd636('0x16')][a201_0xd636('0x62')]([function createRandomToken(_0x560820){crypto_1['default'][a201_0xd636('0x63')](0x10,(_0x455e52,_0x45d6b3)=>{const _0x5e1260=_0x45d6b3[a201_0xd636('0x64')]('hex');_0x560820(_0x455e52,_0x5e1260);});},function setRandomToken(_0x4a667d,_0x5d2f40){User_1[a201_0xd636('0x16')][a201_0xd636('0x2b')]({'email':_0x165deb[a201_0xd636('0x2a')]['email']},(_0x2d015f,_0x42d3f4)=>{if(_0x2d015f){return _0x5d2f40(_0x2d015f);}if(!_0x42d3f4){_0x165deb[a201_0xd636('0x14')](a201_0xd636('0x19'),{'msg':a201_0xd636('0x65')});return _0x61336[a201_0xd636('0x9')](a201_0xd636('0x4a'));}_0x42d3f4[a201_0xd636('0x53')]=_0x4a667d;_0x42d3f4[a201_0xd636('0x47')]=Date[a201_0xd636('0x48')]()+0x36ee80;_0x42d3f4[a201_0xd636('0x2d')](_0x2d015f=>{_0x5d2f40(_0x2d015f,_0x4a667d,_0x42d3f4);});});},function sendForgotPasswordEmail(_0x3dc020,_0x540922,_0x28b895){const _0xcc0c7b=nodemailer_1[a201_0xd636('0x16')][a201_0xd636('0x54')]({'service':a201_0xd636('0x55'),'auth':{'user':process[a201_0xd636('0x56')][a201_0xd636('0x66')],'pass':process[a201_0xd636('0x56')][a201_0xd636('0x67')]}});const _0x4177f7={'to':_0x540922['email'],'from':'hackathon@starter.com','subject':a201_0xd636('0x68'),'text':a201_0xd636('0x69')+_0x165deb[a201_0xd636('0x6a')]['host']+'/reset/'+_0x3dc020+a201_0xd636('0x6b')};_0xcc0c7b[a201_0xd636('0x5b')](_0x4177f7,_0x2d4cb4=>{_0x165deb['flash'](a201_0xd636('0x3c'),{'msg':a201_0xd636('0x6c')+_0x540922[a201_0xd636('0xd')]+a201_0xd636('0x6d')});_0x28b895(_0x2d4cb4);});}],_0x496510=>{if(_0x496510){return _0x5bf5f2(_0x496510);}_0x61336[a201_0xd636('0x9')](a201_0xd636('0x4a'));});};