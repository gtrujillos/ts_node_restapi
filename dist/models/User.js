var a105_0x5810=['bcrypt-nodejs','crypto','mongoose','default','Schema','save','isModified','password','genSalt','compare','methods','comparePassword','gravatar','https://gravatar.com/avatar/?s=','&d=retro','createHash','md5','update','email','hex','?s=','model','User','__esModule'];(function(_0x4b7ca3,_0x5d53a7){var _0x1aba40=function(_0x126ed6){while(--_0x126ed6){_0x4b7ca3['push'](_0x4b7ca3['shift']());}};_0x1aba40(++_0x5d53a7);}(a105_0x5810,0xd7));var a105_0x9e85=function(_0x3dc786,_0x3a0921){_0x3dc786=_0x3dc786-0x0;var _0x5d4a74=a105_0x5810[_0x3dc786];return _0x5d4a74;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4346f2){return _0x4346f2&&_0x4346f2[a105_0x9e85('0x0')]?_0x4346f2:{'default':_0x4346f2};};Object['defineProperty'](exports,a105_0x9e85('0x0'),{'value':!![]});const bcrypt_nodejs_1=__importDefault(require(a105_0x9e85('0x1')));const crypto_1=__importDefault(require(a105_0x9e85('0x2')));const mongoose_1=__importDefault(require(a105_0x9e85('0x3')));const userSchema=new mongoose_1[(a105_0x9e85('0x4'))][(a105_0x9e85('0x5'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema['pre'](a105_0x9e85('0x6'),function save(_0x15db70){const _0x3dd050=this;if(!_0x3dd050[a105_0x9e85('0x7')](a105_0x9e85('0x8'))){return _0x15db70();}bcrypt_nodejs_1[a105_0x9e85('0x4')][a105_0x9e85('0x9')](0xa,(_0x1f7034,_0x3a179d)=>{if(_0x1f7034){return _0x15db70(_0x1f7034);}bcrypt_nodejs_1[a105_0x9e85('0x4')]['hash'](_0x3dd050[a105_0x9e85('0x8')],_0x3a179d,undefined,(_0x1f7034,_0x367bec)=>{if(_0x1f7034){return _0x15db70(_0x1f7034);}_0x3dd050[a105_0x9e85('0x8')]=_0x367bec;_0x15db70();});});});const comparePassword=function(_0x455b18,_0x46acde){bcrypt_nodejs_1[a105_0x9e85('0x4')][a105_0x9e85('0xa')](_0x455b18,this[a105_0x9e85('0x8')],(_0x3c07f1,_0x232215)=>{_0x46acde(_0x3c07f1,_0x232215);});};userSchema[a105_0x9e85('0xb')][a105_0x9e85('0xc')]=comparePassword;userSchema[a105_0x9e85('0xb')][a105_0x9e85('0xd')]=function(_0x4a468e){if(!_0x4a468e){_0x4a468e=0xc8;}if(!this['email']){return a105_0x9e85('0xe')+_0x4a468e+a105_0x9e85('0xf');}const _0x25ae80=crypto_1[a105_0x9e85('0x4')][a105_0x9e85('0x10')](a105_0x9e85('0x11'))[a105_0x9e85('0x12')](this[a105_0x9e85('0x13')])['digest'](a105_0x9e85('0x14'));return'https://gravatar.com/avatar/'+_0x25ae80+a105_0x9e85('0x15')+_0x4a468e+a105_0x9e85('0xf');};const User=mongoose_1[a105_0x9e85('0x4')][a105_0x9e85('0x16')](a105_0x9e85('0x17'),userSchema);exports[a105_0x9e85('0x4')]=User;