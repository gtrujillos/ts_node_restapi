var a135_0x2f82=['file_name','.txt','pipe','save','Downloaded:\x20','fileName','connect','ftp.vivotek.com','media/','existsSync','statSync','fileName:\x20','fileSizeInBytes:\x20','readFile','parse','Data','Out','EndTime','passCountingsModel','create','status','zlib','file','.json','createReadStream','createWriteStream','utf8','eventos','fecha','hora','\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','longitud','velocidad','puerta','locationPointsModel','__importDefault','__esModule','defineProperty','ftp','../../infrastructure/base-controller','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp','processFtp','log','ready','connected','list','name','endsWith','json','size','models','syncFilesModel','findOrCreate','push','error','ipd','findOne','connected:','colombia/'];(function(_0x58caab,_0x54ff1a){var _0xb19176=function(_0x53800a){while(--_0x53800a){_0x58caab['push'](_0x58caab['shift']());}};_0xb19176(++_0x54ff1a);}(a135_0x2f82,0xf2));var a135_0x4a51=function(_0x13e04a,_0x2699af){_0x13e04a=_0x13e04a-0x0;var _0x27c1b6=a135_0x2f82[_0x13e04a];return _0x27c1b6;};'use strict';var __importDefault=this&&this[a135_0x4a51('0x0')]||function(_0x56d371){return _0x56d371&&_0x56d371[a135_0x4a51('0x1')]?_0x56d371:{'default':_0x56d371};};Object[a135_0x4a51('0x2')](exports,'__esModule',{'value':!![]});const ftp_1=__importDefault(require(a135_0x4a51('0x3')));const fs_1=__importDefault(require('fs'));const base_controller_1=__importDefault(require(a135_0x4a51('0x4')));const sequelize_utils_1=__importDefault(require(a135_0x4a51('0x5')));const moment_1=__importDefault(require(a135_0x4a51('0x6')));const UPLOAD_PATH=a135_0x4a51('0x7');class SyncFilesController extends base_controller_1[a135_0x4a51('0x8')]{constructor(_0x3690af){super(_0x3690af,null);this[a135_0x4a51('0x9')]=this[a135_0x4a51('0x9')][a135_0x4a51('0xa')](this);this[a135_0x4a51('0xb')]=this[a135_0x4a51('0xb')][a135_0x4a51('0xa')](this);this['processFtp']=this[a135_0x4a51('0xc')][a135_0x4a51('0xa')](this);}[a135_0x4a51('0x9')](_0x28cfac,_0x257861,_0x200e0b){console[a135_0x4a51('0xd')]('connecting');const _0x489c06=[];const _0x430e3e=new ftp_1[(a135_0x4a51('0x8'))]();_0x430e3e['on'](a135_0x4a51('0xe'),function(){console[a135_0x4a51('0xd')](a135_0x4a51('0xf'));_0x430e3e[a135_0x4a51('0x10')]('colombia',![],function(_0x290f49,_0x5eea3a){if(_0x290f49){console[a135_0x4a51('0xd')](_0x290f49);}else{for(const _0x5789d1 of _0x5eea3a){if(_0x5789d1[a135_0x4a51('0x11')][a135_0x4a51('0x12')](a135_0x4a51('0x13'))&&_0x5789d1[a135_0x4a51('0x14')]>0x0){sequelize_utils_1[a135_0x4a51('0x8')][a135_0x4a51('0x15')][a135_0x4a51('0x16')][a135_0x4a51('0x17')]({'where':{'file_name':_0x5789d1['name']}})['spread']((_0x5ceb48,_0xe9e5cc)=>{if(_0xe9e5cc){_0x489c06[a135_0x4a51('0x18')](_0x5ceb48);}});}}}});});_0x430e3e['on'](a135_0x4a51('0x19'),function(_0x34e4b2){});_0x430e3e['connect']({'host':'ftp.vivotek.com','port':0x15,'user':'ipd','password':a135_0x4a51('0x1a')});_0x257861[a135_0x4a51('0x13')]({'data':[]});}[a135_0x4a51('0xb')](_0xf402b9,_0x4a01c7,_0x43ae53){sequelize_utils_1['default'][a135_0x4a51('0x15')][a135_0x4a51('0x16')][a135_0x4a51('0x1b')]({'where':{'status':null}})['then'](_0x2cd602=>{if(_0x2cd602){const _0x2fc390=new ftp_1['default']();_0x2fc390['on'](a135_0x4a51('0xe'),function(){console[a135_0x4a51('0xd')](a135_0x4a51('0x1c')+_0x2cd602['file_name']);_0x2fc390['get'](a135_0x4a51('0x1d')+_0x2cd602[a135_0x4a51('0x1e')],function(_0x444d33,_0x13028c){_0x2fc390['end']();if(_0x444d33){}else{const _0x19f879='media/'+_0x2cd602[a135_0x4a51('0x1e')]+a135_0x4a51('0x1f');_0x13028c[a135_0x4a51('0x20')](fs_1['default']['createWriteStream'](_0x19f879));_0x2cd602['status']=0x1;_0x2cd602[a135_0x4a51('0x21')]();console[a135_0x4a51('0xd')](a135_0x4a51('0x22')+_0x2cd602[a135_0x4a51('0x23')]);}});});_0x2fc390['on'](a135_0x4a51('0x19'),function(_0x389ba4){});_0x2fc390[a135_0x4a51('0x24')]({'host':a135_0x4a51('0x25'),'port':0x15,'user':a135_0x4a51('0x1a'),'password':a135_0x4a51('0x1a')});}else{}});_0x4a01c7[a135_0x4a51('0x13')]({'data':[]});}['processFtp'](_0x41e327,_0x37d059,_0x568d39){sequelize_utils_1['default'][a135_0x4a51('0x15')]['syncFilesModel']['findOne']({'where':{'status':0x1}})['then'](_0x3eff81=>{if(_0x3eff81){const _0x254a97=a135_0x4a51('0x26')+_0x3eff81['file_name']+a135_0x4a51('0x1f');if(fs_1[a135_0x4a51('0x8')][a135_0x4a51('0x27')](_0x254a97)){const _0x43603b=fs_1[a135_0x4a51('0x8')][a135_0x4a51('0x28')](_0x254a97);const _0xb75755=_0x43603b[a135_0x4a51('0x14')];console[a135_0x4a51('0xd')](a135_0x4a51('0x29')+_0x254a97);console[a135_0x4a51('0xd')](a135_0x4a51('0x2a')+_0xb75755);if(_0xb75755>0x0){fs_1[a135_0x4a51('0x8')][a135_0x4a51('0x2b')](_0x254a97,'utf8',function(_0xef4035,_0x5c44){if(_0xef4035){_0x3eff81['status']=null;}else{try{const _0x722e52=JSON[a135_0x4a51('0x2c')](_0x5c44);for(const _0x1799bf of _0x722e52[a135_0x4a51('0x2d')][0x0]['CountingInfo']){const _0x19f177=_0x1799bf['In'];const _0x2664c5=_0x1799bf[a135_0x4a51('0x2e')];const _0x577681=Date[a135_0x4a51('0x2c')](_0x1799bf[a135_0x4a51('0x2f')]);if(_0x19f177>0x0){sequelize_utils_1['default'][a135_0x4a51('0x15')][a135_0x4a51('0x30')][a135_0x4a51('0x31')]({'amount':_0x19f177,'counted_at':_0x577681});}if(_0x2664c5>0x0){sequelize_utils_1[a135_0x4a51('0x8')][a135_0x4a51('0x15')][a135_0x4a51('0x30')][a135_0x4a51('0x31')]({'amount':_0x2664c5*-0x1,'counted_at':_0x577681});}}_0x3eff81[a135_0x4a51('0x32')]=0x2;}catch(_0x2a84bd){_0x3eff81[a135_0x4a51('0x32')]=null;}}_0x3eff81['save']();});}else{_0x3eff81[a135_0x4a51('0x32')]=null;_0x3eff81[a135_0x4a51('0x21')]();}}else{_0x3eff81[a135_0x4a51('0x32')]=null;_0x3eff81[a135_0x4a51('0x21')]();}}else{}});_0x37d059[a135_0x4a51('0x13')]({'data':[]});}['uploadEvent'](_0x281e81,_0x44c915,_0x28a1ce){const _0xbd039b=require(a135_0x4a51('0x33'));const _0x352559=_0x281e81[a135_0x4a51('0x34')]['path'];const _0x7d27a7=UPLOAD_PATH+'/'+_0x281e81['file']['filename']+a135_0x4a51('0x35');const _0x4507eb=fs_1['default'][a135_0x4a51('0x36')](_0x352559);const _0x3341a3=fs_1[a135_0x4a51('0x8')][a135_0x4a51('0x37')](_0x7d27a7);const _0x578f76=_0xbd039b['createGunzip']();console[a135_0x4a51('0xd')](_0x281e81[a135_0x4a51('0x34')]);_0x4507eb['pipe'](_0x578f76)[a135_0x4a51('0x20')](_0x3341a3)['on']('finish',_0x2ed3a3=>{if(_0x2ed3a3)return console[a135_0x4a51('0x19')](_0x2ed3a3);else{const _0x517776=fs_1[a135_0x4a51('0x8')][a135_0x4a51('0x28')](_0x352559);const _0xf193f=_0x517776[a135_0x4a51('0x14')];if(_0xf193f>0x0){fs_1[a135_0x4a51('0x8')]['readFile'](_0x7d27a7,a135_0x4a51('0x38'),function(_0x2ed3a3,_0x2d1a59){if(_0x2ed3a3){return console[a135_0x4a51('0x19')](_0x2ed3a3);}else{try{const _0x5b31aa=JSON[a135_0x4a51('0x2c')](_0x2d1a59);console['log'](_0x5b31aa);const _0x4f0b55=_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x3a')];const _0x3a145e=_0x5b31aa['eventos'][0x0][a135_0x4a51('0x3b')];const _0x43d24d=moment_1['default'](_0x4f0b55+'\x20'+_0x3a145e+a135_0x4a51('0x3c'),a135_0x4a51('0x3d'));const _0x11ec2f=parseFloat(_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x3e')][a135_0x4a51('0x3f')](',','.'));const _0x3ba3e7=parseFloat(_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x40')][a135_0x4a51('0x3f')](',','.'));const _0x3aa54f=_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x41')];const _0x43c1fb=_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x42')][0x0]['ingresos'];const _0xd0509c=_0x5b31aa[a135_0x4a51('0x39')][0x0][a135_0x4a51('0x42')][0x0]['salidas'];console[a135_0x4a51('0xd')](_0x11ec2f);console[a135_0x4a51('0xd')](_0x3ba3e7);console[a135_0x4a51('0xd')](_0x3aa54f);console[a135_0x4a51('0xd')](_0x43c1fb);console[a135_0x4a51('0xd')](_0xd0509c);console[a135_0x4a51('0xd')](_0x43d24d);if(_0x43c1fb>0x0){sequelize_utils_1[a135_0x4a51('0x8')][a135_0x4a51('0x15')]['passCountingsModel']['create']({'amount':_0x43c1fb,'counted_at':_0x43d24d});}sequelize_utils_1[a135_0x4a51('0x8')][a135_0x4a51('0x15')][a135_0x4a51('0x43')]['create']({'device_id':null,'lat':''+_0x11ec2f,'lon':''+_0x3ba3e7,'tracked_at':_0x43d24d});}catch(_0x597f1b){return console[a135_0x4a51('0x19')](_0x597f1b);}}});}}});_0x44c915[a135_0x4a51('0x13')]({'status':0x1,'data':_0x281e81[a135_0x4a51('0x34')]});}}exports[a135_0x4a51('0x8')]=SyncFilesController;