var a73_0x2a81=['log','connecting','colombia','name','endsWith','json','size','models','syncFilesModel','spread','connect','ftp.vivotek.com','ipd','findOne','then','ready','get','colombia/','file_name','media/','.txt','pipe','createWriteStream','status','fileName','error','existsSync','statSync','fileSizeInBytes:\x20','readFile','utf8','parse','Data','CountingInfo','Out','passCountingsModel','create','save','uploadEvent','zlib','file','path','filename','.json','finish','fecha','eventos','hora','\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','longitud','velocidad','puerta','ingresos','locationPointsModel','defineProperty','__esModule','ftp','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp'];(function(_0xd29dce,_0x15e362){var _0x252778=function(_0x1304a9){while(--_0x1304a9){_0xd29dce['push'](_0xd29dce['shift']());}};_0x252778(++_0x15e362);}(a73_0x2a81,0x18d));var a73_0x19aa=function(_0x817d35,_0x1c2a5e){_0x817d35=_0x817d35-0x0;var _0x12d383=a73_0x2a81[_0x817d35];return _0x12d383;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x188520){return _0x188520&&_0x188520['__esModule']?_0x188520:{'default':_0x188520};};Object[a73_0x19aa('0x0')](exports,a73_0x19aa('0x1'),{'value':!![]});const ftp_1=__importDefault(require(a73_0x19aa('0x2')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a73_0x19aa('0x3')));const sequelize_utils_1=__importDefault(require(a73_0x19aa('0x4')));const moment_1=__importDefault(require(a73_0x19aa('0x5')));const UPLOAD_PATH=a73_0x19aa('0x6');class SyncFilesController extends controller_utils_1[a73_0x19aa('0x7')]{constructor(_0x4e59e0){super(_0x4e59e0,null);this['syncFtp']=this[a73_0x19aa('0x8')][a73_0x19aa('0x9')](this);this[a73_0x19aa('0xa')]=this[a73_0x19aa('0xa')][a73_0x19aa('0x9')](this);this['processFtp']=this['processFtp']['bind'](this);}[a73_0x19aa('0x8')](_0x1bd6aa,_0x5bed74,_0x3c01a6){console[a73_0x19aa('0xb')](a73_0x19aa('0xc'));const _0x3fd036=[];const _0x52cd2b=new ftp_1[(a73_0x19aa('0x7'))]();_0x52cd2b['on']('ready',function(){console[a73_0x19aa('0xb')]('connected');_0x52cd2b['list'](a73_0x19aa('0xd'),![],function(_0x409ac3,_0x2df882){if(_0x409ac3){console[a73_0x19aa('0xb')](_0x409ac3);}else{for(const _0x5e7e83 of _0x2df882){if(_0x5e7e83[a73_0x19aa('0xe')][a73_0x19aa('0xf')](a73_0x19aa('0x10'))&&_0x5e7e83[a73_0x19aa('0x11')]>0x0){sequelize_utils_1[a73_0x19aa('0x7')][a73_0x19aa('0x12')][a73_0x19aa('0x13')]['findOrCreate']({'where':{'file_name':_0x5e7e83['name']}})[a73_0x19aa('0x14')]((_0x4a006c,_0xf4599d)=>{if(_0xf4599d){_0x3fd036['push'](_0x4a006c);}});}}}});});_0x52cd2b['on']('error',function(_0x2a8863){});_0x52cd2b[a73_0x19aa('0x15')]({'host':a73_0x19aa('0x16'),'port':0x15,'user':a73_0x19aa('0x17'),'password':'ipd'});_0x5bed74[a73_0x19aa('0x10')]({'data':[]});}[a73_0x19aa('0xa')](_0xd425e3,_0x34bd10,_0x5ca4c6){sequelize_utils_1[a73_0x19aa('0x7')][a73_0x19aa('0x12')][a73_0x19aa('0x13')][a73_0x19aa('0x18')]({'where':{'status':null}})[a73_0x19aa('0x19')](_0x727bed=>{if(_0x727bed){const _0x526d1f=new ftp_1[(a73_0x19aa('0x7'))]();_0x526d1f['on'](a73_0x19aa('0x1a'),function(){console['log']('connected:'+_0x727bed['file_name']);_0x526d1f[a73_0x19aa('0x1b')](a73_0x19aa('0x1c')+_0x727bed[a73_0x19aa('0x1d')],function(_0x513215,_0x4ab2b1){_0x526d1f['end']();if(_0x513215){}else{const _0x32e786=a73_0x19aa('0x1e')+_0x727bed[a73_0x19aa('0x1d')]+a73_0x19aa('0x1f');_0x4ab2b1[a73_0x19aa('0x20')](fs_1['default'][a73_0x19aa('0x21')](_0x32e786));_0x727bed[a73_0x19aa('0x22')]=0x1;_0x727bed['save']();console['log']('Downloaded:\x20'+_0x727bed[a73_0x19aa('0x23')]);}});});_0x526d1f['on'](a73_0x19aa('0x24'),function(_0x1dec7f){});_0x526d1f[a73_0x19aa('0x15')]({'host':a73_0x19aa('0x16'),'port':0x15,'user':a73_0x19aa('0x17'),'password':a73_0x19aa('0x17')});}else{}});_0x34bd10[a73_0x19aa('0x10')]({'data':[]});}['processFtp'](_0x5eded5,_0x171130,_0x5be99e){sequelize_utils_1['default'][a73_0x19aa('0x12')][a73_0x19aa('0x13')][a73_0x19aa('0x18')]({'where':{'status':0x1}})['then'](_0x22ba6e=>{if(_0x22ba6e){const _0x41664e='media/'+_0x22ba6e[a73_0x19aa('0x1d')]+a73_0x19aa('0x1f');if(fs_1['default'][a73_0x19aa('0x25')](_0x41664e)){const _0x2abd61=fs_1[a73_0x19aa('0x7')][a73_0x19aa('0x26')](_0x41664e);const _0xf46cb5=_0x2abd61[a73_0x19aa('0x11')];console[a73_0x19aa('0xb')]('fileName:\x20'+_0x41664e);console[a73_0x19aa('0xb')](a73_0x19aa('0x27')+_0xf46cb5);if(_0xf46cb5>0x0){fs_1[a73_0x19aa('0x7')][a73_0x19aa('0x28')](_0x41664e,a73_0x19aa('0x29'),function(_0x54b80a,_0x7a4c0b){if(_0x54b80a){_0x22ba6e['status']=null;}else{try{const _0x43c416=JSON[a73_0x19aa('0x2a')](_0x7a4c0b);for(const _0x28f9a6 of _0x43c416[a73_0x19aa('0x2b')][0x0][a73_0x19aa('0x2c')]){const _0x1f3d96=_0x28f9a6['In'];const _0x2ecc7c=_0x28f9a6[a73_0x19aa('0x2d')];const _0xb4ffd6=Date['parse'](_0x28f9a6['EndTime']);if(_0x1f3d96>0x0){sequelize_utils_1[a73_0x19aa('0x7')][a73_0x19aa('0x12')][a73_0x19aa('0x2e')]['create']({'amount':_0x1f3d96,'counted_at':_0xb4ffd6});}if(_0x2ecc7c>0x0){sequelize_utils_1['default']['models'][a73_0x19aa('0x2e')][a73_0x19aa('0x2f')]({'amount':_0x2ecc7c*-0x1,'counted_at':_0xb4ffd6});}}_0x22ba6e['status']=0x2;}catch(_0x36a0e3){_0x22ba6e[a73_0x19aa('0x22')]=null;}}_0x22ba6e[a73_0x19aa('0x30')]();});}else{_0x22ba6e[a73_0x19aa('0x22')]=null;_0x22ba6e[a73_0x19aa('0x30')]();}}else{_0x22ba6e[a73_0x19aa('0x22')]=null;_0x22ba6e[a73_0x19aa('0x30')]();}}else{}});_0x171130['json']({'data':[]});}[a73_0x19aa('0x31')](_0x5b9f53,_0x299b0c,_0x27ee01){const _0x178e70=require(a73_0x19aa('0x32'));const _0x512809=_0x5b9f53[a73_0x19aa('0x33')][a73_0x19aa('0x34')];const _0x25096b=UPLOAD_PATH+'/'+_0x5b9f53[a73_0x19aa('0x33')][a73_0x19aa('0x35')]+a73_0x19aa('0x36');const _0x53ff48=fs_1[a73_0x19aa('0x7')]['createReadStream'](_0x512809);const _0x42188d=fs_1[a73_0x19aa('0x7')][a73_0x19aa('0x21')](_0x25096b);const _0x62ace3=_0x178e70['createGunzip']();console[a73_0x19aa('0xb')](_0x5b9f53['file']);_0x53ff48[a73_0x19aa('0x20')](_0x62ace3)[a73_0x19aa('0x20')](_0x42188d)['on'](a73_0x19aa('0x37'),_0x4ee949=>{if(_0x4ee949)return console['error'](_0x4ee949);else{const _0x4b546d=fs_1[a73_0x19aa('0x7')][a73_0x19aa('0x26')](_0x512809);const _0x37cb43=_0x4b546d[a73_0x19aa('0x11')];if(_0x37cb43>0x0){fs_1[a73_0x19aa('0x7')]['readFile'](_0x25096b,a73_0x19aa('0x29'),function(_0x4ee949,_0x89f0f9){if(_0x4ee949){return console[a73_0x19aa('0x24')](_0x4ee949);}else{try{const _0x45d56e=JSON[a73_0x19aa('0x2a')](_0x89f0f9);console[a73_0x19aa('0xb')](_0x45d56e);const _0x45d29a=_0x45d56e['eventos'][0x0][a73_0x19aa('0x38')];const _0x494903=_0x45d56e[a73_0x19aa('0x39')][0x0][a73_0x19aa('0x3a')];const _0x37944f=moment_1[a73_0x19aa('0x7')](_0x45d29a+'\x20'+_0x494903+a73_0x19aa('0x3b'),a73_0x19aa('0x3c'));const _0x55c71f=parseFloat(_0x45d56e[a73_0x19aa('0x39')][0x0][a73_0x19aa('0x3d')][a73_0x19aa('0x3e')](',','.'));const _0x38d37f=parseFloat(_0x45d56e[a73_0x19aa('0x39')][0x0][a73_0x19aa('0x3f')][a73_0x19aa('0x3e')](',','.'));const _0x395c74=_0x45d56e[a73_0x19aa('0x39')][0x0][a73_0x19aa('0x40')];const _0xe46f5f=_0x45d56e[a73_0x19aa('0x39')][0x0][a73_0x19aa('0x41')][0x0][a73_0x19aa('0x42')];const _0x409107=_0x45d56e['eventos'][0x0][a73_0x19aa('0x41')][0x0]['salidas'];console['log'](_0x55c71f);console[a73_0x19aa('0xb')](_0x38d37f);console['log'](_0x395c74);console['log'](_0xe46f5f);console[a73_0x19aa('0xb')](_0x409107);console['log'](_0x37944f);if(_0xe46f5f>0x0){sequelize_utils_1[a73_0x19aa('0x7')][a73_0x19aa('0x12')][a73_0x19aa('0x2e')][a73_0x19aa('0x2f')]({'amount':_0xe46f5f,'counted_at':_0x37944f});}sequelize_utils_1[a73_0x19aa('0x7')]['models'][a73_0x19aa('0x43')][a73_0x19aa('0x2f')]({'device_id':null,'lat':''+_0x55c71f,'lon':''+_0x38d37f,'tracked_at':_0x37944f});}catch(_0x7ee9fc){return console['error'](_0x7ee9fc);}}});}}});_0x299b0c[a73_0x19aa('0x10')]({'status':0x1,'data':_0x5b9f53[a73_0x19aa('0x33')]});}}exports[a73_0x19aa('0x7')]=SyncFilesController;