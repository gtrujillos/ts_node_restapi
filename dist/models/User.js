var a105_0x1a17=['defineProperty','bcrypt-nodejs','crypto','default','Schema','pre','save','password','hash','compare','methods','gravatar','email','https://gravatar.com/avatar/?s=','&d=retro','createHash','md5','digest','https://gravatar.com/avatar/','model','User','__esModule'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(a105_0x1a17,0xaf));var a105_0x506a=function(_0x30e686,_0x1f6cf3){_0x30e686=_0x30e686-0x0;var _0x5c7367=a105_0x1a17[_0x30e686];return _0x5c7367;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3fa616){return _0x3fa616&&_0x3fa616[a105_0x506a('0x0')]?_0x3fa616:{'default':_0x3fa616};};Object[a105_0x506a('0x1')](exports,'__esModule',{'value':!![]});const bcrypt_nodejs_1=__importDefault(require(a105_0x506a('0x2')));const crypto_1=__importDefault(require(a105_0x506a('0x3')));const mongoose_1=__importDefault(require('mongoose'));const userSchema=new mongoose_1[(a105_0x506a('0x4'))][(a105_0x506a('0x5'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema[a105_0x506a('0x6')](a105_0x506a('0x7'),function save(_0x205cb8){const _0x36c50c=this;if(!_0x36c50c['isModified'](a105_0x506a('0x8'))){return _0x205cb8();}bcrypt_nodejs_1[a105_0x506a('0x4')]['genSalt'](0xa,(_0x2578e3,_0x4e5ac3)=>{if(_0x2578e3){return _0x205cb8(_0x2578e3);}bcrypt_nodejs_1[a105_0x506a('0x4')][a105_0x506a('0x9')](_0x36c50c[a105_0x506a('0x8')],_0x4e5ac3,undefined,(_0x2578e3,_0x3b67ad)=>{if(_0x2578e3){return _0x205cb8(_0x2578e3);}_0x36c50c[a105_0x506a('0x8')]=_0x3b67ad;_0x205cb8();});});});const comparePassword=function(_0x336509,_0x203d85){bcrypt_nodejs_1[a105_0x506a('0x4')][a105_0x506a('0xa')](_0x336509,this['password'],(_0x3cf283,_0x1a13e2)=>{_0x203d85(_0x3cf283,_0x1a13e2);});};userSchema['methods']['comparePassword']=comparePassword;userSchema[a105_0x506a('0xb')][a105_0x506a('0xc')]=function(_0x40a948){if(!_0x40a948){_0x40a948=0xc8;}if(!this[a105_0x506a('0xd')]){return a105_0x506a('0xe')+_0x40a948+a105_0x506a('0xf');}const _0x1d5c3c=crypto_1['default'][a105_0x506a('0x10')](a105_0x506a('0x11'))['update'](this[a105_0x506a('0xd')])[a105_0x506a('0x12')]('hex');return a105_0x506a('0x13')+_0x1d5c3c+'?s='+_0x40a948+'&d=retro';};const User=mongoose_1['default'][a105_0x506a('0x14')](a105_0x506a('0x15'),userSchema);exports[a105_0x506a('0x4')]=User;