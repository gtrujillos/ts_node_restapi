var a111_0x4f18=['__importDefault','__esModule','bcrypt-nodejs','mongoose','default','Schema','pre','isModified','password','genSalt','hash','compare','comparePassword','methods','gravatar','https://gravatar.com/avatar/?s=','&d=retro','createHash','update','email','digest','https://gravatar.com/avatar/','?s=','model','User'];(function(_0x519d3e,_0x43bf87){var _0x2e7aca=function(_0x1e22be){while(--_0x1e22be){_0x519d3e['push'](_0x519d3e['shift']());}};_0x2e7aca(++_0x43bf87);}(a111_0x4f18,0x1c2));var a111_0x1264=function(_0x3936aa,_0x141bbd){_0x3936aa=_0x3936aa-0x0;var _0x20a08d=a111_0x4f18[_0x3936aa];return _0x20a08d;};'use strict';var __importDefault=this&&this[a111_0x1264('0x0')]||function(_0xfbecf0){return _0xfbecf0&&_0xfbecf0[a111_0x1264('0x1')]?_0xfbecf0:{'default':_0xfbecf0};};Object['defineProperty'](exports,a111_0x1264('0x1'),{'value':!![]});const bcrypt_nodejs_1=__importDefault(require(a111_0x1264('0x2')));const crypto_1=__importDefault(require('crypto'));const mongoose_1=__importDefault(require(a111_0x1264('0x3')));const userSchema=new mongoose_1[(a111_0x1264('0x4'))][(a111_0x1264('0x5'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema[a111_0x1264('0x6')]('save',function save(_0x55760f){const _0x4d9656=this;if(!_0x4d9656[a111_0x1264('0x7')](a111_0x1264('0x8'))){return _0x55760f();}bcrypt_nodejs_1['default'][a111_0x1264('0x9')](0xa,(_0x4573ee,_0x2904dc)=>{if(_0x4573ee){return _0x55760f(_0x4573ee);}bcrypt_nodejs_1['default'][a111_0x1264('0xa')](_0x4d9656[a111_0x1264('0x8')],_0x2904dc,undefined,(_0x4573ee,_0xcf34d6)=>{if(_0x4573ee){return _0x55760f(_0x4573ee);}_0x4d9656['password']=_0xcf34d6;_0x55760f();});});});const comparePassword=function(_0xf3e95e,_0x36b38a){bcrypt_nodejs_1[a111_0x1264('0x4')][a111_0x1264('0xb')](_0xf3e95e,this['password'],(_0x766311,_0x479f1a)=>{_0x36b38a(_0x766311,_0x479f1a);});};userSchema['methods'][a111_0x1264('0xc')]=comparePassword;userSchema[a111_0x1264('0xd')][a111_0x1264('0xe')]=function(_0x38360e){if(!_0x38360e){_0x38360e=0xc8;}if(!this['email']){return a111_0x1264('0xf')+_0x38360e+a111_0x1264('0x10');}const _0x2a49fa=crypto_1[a111_0x1264('0x4')][a111_0x1264('0x11')]('md5')[a111_0x1264('0x12')](this[a111_0x1264('0x13')])[a111_0x1264('0x14')]('hex');return a111_0x1264('0x15')+_0x2a49fa+a111_0x1264('0x16')+_0x38360e+a111_0x1264('0x10');};const User=mongoose_1['default'][a111_0x1264('0x17')](a111_0x1264('0x18'),userSchema);exports[a111_0x1264('0x4')]=User;