var a72_0x1cf1=['connecting','connected','colombia','name','json','size','models','syncFilesModel','findOrCreate','spread','connect','ftp.vivotek.com','ipd','findOne','then','ready','connected:','file_name','get','colombia/','end','media/','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','fileName','error','existsSync','statSync','fileName:\x20','readFile','parse','CountingInfo','Out','EndTime','create','uploadEvent','zlib','file','path','filename','.json','createReadStream','createGunzip','finish','eventos','fecha','hora','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','longitud','velocidad','puerta','ingresos','salidas','passCountingsModel','locationPointsModel','__importDefault','defineProperty','__esModule','../../infrastructure/sequelize-utils','media','default','syncFtp','downloadFtp','bind','processFtp','log'];(function(_0x2963be,_0x5172ff){var _0xeda88e=function(_0x554dfc){while(--_0x554dfc){_0x2963be['push'](_0x2963be['shift']());}};_0xeda88e(++_0x5172ff);}(a72_0x1cf1,0x1ed));var a72_0x445f=function(_0x1b5138,_0x19d007){_0x1b5138=_0x1b5138-0x0;var _0x198f14=a72_0x1cf1[_0x1b5138];return _0x198f14;};'use strict';var __importDefault=this&&this[a72_0x445f('0x0')]||function(_0x5216a2){return _0x5216a2&&_0x5216a2['__esModule']?_0x5216a2:{'default':_0x5216a2};};Object[a72_0x445f('0x1')](exports,a72_0x445f('0x2'),{'value':!![]});const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const sequelize_utils_1=__importDefault(require(a72_0x445f('0x3')));const moment_1=__importDefault(require('moment'));const UPLOAD_PATH=a72_0x445f('0x4');class SyncFilesController extends controller_utils_1[a72_0x445f('0x5')]{constructor(_0x46e7b0){super(_0x46e7b0,null);this[a72_0x445f('0x6')]=this[a72_0x445f('0x6')]['bind'](this);this[a72_0x445f('0x7')]=this['downloadFtp'][a72_0x445f('0x8')](this);this[a72_0x445f('0x9')]=this[a72_0x445f('0x9')][a72_0x445f('0x8')](this);}['syncFtp'](_0x41f9dd,_0x45e4b5,_0x3d794a){console[a72_0x445f('0xa')](a72_0x445f('0xb'));const _0x3ca271=[];const _0x392480=new ftp_1['default']();_0x392480['on']('ready',function(){console[a72_0x445f('0xa')](a72_0x445f('0xc'));_0x392480['list'](a72_0x445f('0xd'),![],function(_0x313590,_0x4e2a4a){if(_0x313590){console[a72_0x445f('0xa')](_0x313590);}else{for(const _0x498621 of _0x4e2a4a){if(_0x498621[a72_0x445f('0xe')]['endsWith'](a72_0x445f('0xf'))&&_0x498621[a72_0x445f('0x10')]>0x0){sequelize_utils_1[a72_0x445f('0x5')][a72_0x445f('0x11')][a72_0x445f('0x12')][a72_0x445f('0x13')]({'where':{'file_name':_0x498621[a72_0x445f('0xe')]}})[a72_0x445f('0x14')]((_0x40aae9,_0x308644)=>{if(_0x308644){_0x3ca271['push'](_0x40aae9);}});}}}});});_0x392480['on']('error',function(_0x4a5e6c){});_0x392480[a72_0x445f('0x15')]({'host':a72_0x445f('0x16'),'port':0x15,'user':'ipd','password':a72_0x445f('0x17')});_0x45e4b5[a72_0x445f('0xf')]({'data':[]});}[a72_0x445f('0x7')](_0x2b45d5,_0xe0b445,_0x5d7760){sequelize_utils_1['default']['models']['syncFilesModel'][a72_0x445f('0x18')]({'where':{'status':null}})[a72_0x445f('0x19')](_0x40b253=>{if(_0x40b253){const _0x319d78=new ftp_1[(a72_0x445f('0x5'))]();_0x319d78['on'](a72_0x445f('0x1a'),function(){console[a72_0x445f('0xa')](a72_0x445f('0x1b')+_0x40b253[a72_0x445f('0x1c')]);_0x319d78[a72_0x445f('0x1d')](a72_0x445f('0x1e')+_0x40b253[a72_0x445f('0x1c')],function(_0x188bb1,_0xf4f821){_0x319d78[a72_0x445f('0x1f')]();if(_0x188bb1){}else{const _0x5ad825=a72_0x445f('0x20')+_0x40b253['file_name']+a72_0x445f('0x21');_0xf4f821[a72_0x445f('0x22')](fs_1[a72_0x445f('0x5')][a72_0x445f('0x23')](_0x5ad825));_0x40b253[a72_0x445f('0x24')]=0x1;_0x40b253[a72_0x445f('0x25')]();console[a72_0x445f('0xa')](a72_0x445f('0x26')+_0x40b253[a72_0x445f('0x27')]);}});});_0x319d78['on'](a72_0x445f('0x28'),function(_0x3424d2){});_0x319d78[a72_0x445f('0x15')]({'host':'ftp.vivotek.com','port':0x15,'user':a72_0x445f('0x17'),'password':a72_0x445f('0x17')});}else{}});_0xe0b445[a72_0x445f('0xf')]({'data':[]});}[a72_0x445f('0x9')](_0x28778a,_0x103891,_0xb5e4e5){sequelize_utils_1[a72_0x445f('0x5')][a72_0x445f('0x11')][a72_0x445f('0x12')]['findOne']({'where':{'status':0x1}})[a72_0x445f('0x19')](_0x3ecf32=>{if(_0x3ecf32){const _0x19672f=a72_0x445f('0x20')+_0x3ecf32[a72_0x445f('0x1c')]+a72_0x445f('0x21');if(fs_1['default'][a72_0x445f('0x29')](_0x19672f)){const _0x808107=fs_1[a72_0x445f('0x5')][a72_0x445f('0x2a')](_0x19672f);const _0x221a3f=_0x808107[a72_0x445f('0x10')];console[a72_0x445f('0xa')](a72_0x445f('0x2b')+_0x19672f);console[a72_0x445f('0xa')]('fileSizeInBytes:\x20'+_0x221a3f);if(_0x221a3f>0x0){fs_1[a72_0x445f('0x5')][a72_0x445f('0x2c')](_0x19672f,'utf8',function(_0x152f7b,_0xb70ea8){if(_0x152f7b){_0x3ecf32[a72_0x445f('0x24')]=null;}else{try{const _0x2a39ad=JSON[a72_0x445f('0x2d')](_0xb70ea8);for(const _0x2d1252 of _0x2a39ad['Data'][0x0][a72_0x445f('0x2e')]){const _0xef436e=_0x2d1252['In'];const _0x17c772=_0x2d1252[a72_0x445f('0x2f')];const _0x293d24=Date[a72_0x445f('0x2d')](_0x2d1252[a72_0x445f('0x30')]);if(_0xef436e>0x0){sequelize_utils_1[a72_0x445f('0x5')]['models']['passCountingsModel'][a72_0x445f('0x31')]({'amount':_0xef436e,'counted_at':_0x293d24});}if(_0x17c772>0x0){sequelize_utils_1['default'][a72_0x445f('0x11')]['passCountingsModel'][a72_0x445f('0x31')]({'amount':_0x17c772*-0x1,'counted_at':_0x293d24});}}_0x3ecf32[a72_0x445f('0x24')]=0x2;}catch(_0x4d9c49){_0x3ecf32[a72_0x445f('0x24')]=null;}}_0x3ecf32[a72_0x445f('0x25')]();});}else{_0x3ecf32['status']=null;_0x3ecf32[a72_0x445f('0x25')]();}}else{_0x3ecf32[a72_0x445f('0x24')]=null;_0x3ecf32[a72_0x445f('0x25')]();}}else{}});_0x103891[a72_0x445f('0xf')]({'data':[]});}[a72_0x445f('0x32')](_0x419a08,_0x195773,_0x34271e){const _0x7bd04b=require(a72_0x445f('0x33'));const _0xaf8320=_0x419a08[a72_0x445f('0x34')][a72_0x445f('0x35')];const _0x584cf1=UPLOAD_PATH+'/'+_0x419a08[a72_0x445f('0x34')][a72_0x445f('0x36')]+a72_0x445f('0x37');const _0x4f97ac=fs_1[a72_0x445f('0x5')][a72_0x445f('0x38')](_0xaf8320);const _0x304a30=fs_1[a72_0x445f('0x5')]['createWriteStream'](_0x584cf1);const _0x5268c9=_0x7bd04b[a72_0x445f('0x39')]();console['log'](_0x419a08[a72_0x445f('0x34')]);_0x4f97ac[a72_0x445f('0x22')](_0x5268c9)[a72_0x445f('0x22')](_0x304a30)['on'](a72_0x445f('0x3a'),_0x171cdf=>{if(_0x171cdf)return console[a72_0x445f('0x28')](_0x171cdf);else{const _0x1741ff=fs_1['default'][a72_0x445f('0x2a')](_0xaf8320);const _0x33f04e=_0x1741ff[a72_0x445f('0x10')];if(_0x33f04e>0x0){fs_1['default']['readFile'](_0x584cf1,'utf8',function(_0x171cdf,_0x44ed25){if(_0x171cdf){return console[a72_0x445f('0x28')](_0x171cdf);}else{try{const _0x2d3abf=JSON['parse'](_0x44ed25);console[a72_0x445f('0xa')](_0x2d3abf);const _0x24d7fd=_0x2d3abf[a72_0x445f('0x3b')][0x0][a72_0x445f('0x3c')];const _0x59b533=_0x2d3abf[a72_0x445f('0x3b')][0x0][a72_0x445f('0x3d')];const _0x2ff6e8=moment_1['default'](_0x24d7fd+'\x20'+_0x59b533+'\x20-05:00',a72_0x445f('0x3e'));const _0x447b38=parseFloat(_0x2d3abf['eventos'][0x0][a72_0x445f('0x3f')][a72_0x445f('0x40')](',','.'));const _0x1dff80=parseFloat(_0x2d3abf[a72_0x445f('0x3b')][0x0][a72_0x445f('0x41')][a72_0x445f('0x40')](',','.'));const _0x4351b0=_0x2d3abf['eventos'][0x0][a72_0x445f('0x42')];const _0x4406ee=_0x2d3abf[a72_0x445f('0x3b')][0x0][a72_0x445f('0x43')][0x0][a72_0x445f('0x44')];const _0x75a856=_0x2d3abf[a72_0x445f('0x3b')][0x0][a72_0x445f('0x43')][0x0][a72_0x445f('0x45')];console[a72_0x445f('0xa')](_0x447b38);console[a72_0x445f('0xa')](_0x1dff80);console['log'](_0x4351b0);console[a72_0x445f('0xa')](_0x4406ee);console[a72_0x445f('0xa')](_0x75a856);console[a72_0x445f('0xa')](_0x2ff6e8);if(_0x4406ee>0x0){sequelize_utils_1['default'][a72_0x445f('0x11')][a72_0x445f('0x46')]['create']({'amount':_0x4406ee,'counted_at':_0x2ff6e8});}sequelize_utils_1[a72_0x445f('0x5')][a72_0x445f('0x11')][a72_0x445f('0x47')][a72_0x445f('0x31')]({'device_id':null,'lat':''+_0x447b38,'lon':''+_0x1dff80,'tracked_at':_0x2ff6e8});}catch(_0x4f686a){return console[a72_0x445f('0x28')](_0x4f686a);}}});}}});_0x195773[a72_0x445f('0xf')]({'status':0x1,'data':_0x419a08['file']});}}exports[a72_0x445f('0x5')]=SyncFilesController;