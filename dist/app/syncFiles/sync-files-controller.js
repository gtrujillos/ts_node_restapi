var a162_0x1c85=['statSync','fileSizeInBytes:\x20','readFile','utf8','parse','Data','Out','EndTime','passCountingsModel','create','zlib','file','path','filename','.json','createReadStream','pipe','eventos','fecha','hora','\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','puerta','ingresos','salidas','locationPointsModel','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp','processFtp','log','connecting','ready','connected','list','colombia','name','endsWith','size','models','syncFilesModel','findOrCreate','spread','push','error','connect','ftp.vivotek.com','ipd','json','findOne','then','connected:','file_name','get','colombia/','end','.txt','createWriteStream','status','save','fileName','media/','existsSync'];(function(_0x13d81e,_0xaf3649){var _0x538111=function(_0x5c2799){while(--_0x5c2799){_0x13d81e['push'](_0x13d81e['shift']());}};_0x538111(++_0xaf3649);}(a162_0x1c85,0x1cc));var a162_0x285c=function(_0x530e67,_0x31f2e7){_0x530e67=_0x530e67-0x0;var _0x51aa00=a162_0x1c85[_0x530e67];return _0x51aa00;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4a4827){return _0x4a4827&&_0x4a4827[a162_0x285c('0x0')]?_0x4a4827:{'default':_0x4a4827};};Object[a162_0x285c('0x1')](exports,'__esModule',{'value':!![]});const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a162_0x285c('0x2')));const sequelize_utils_1=__importDefault(require(a162_0x285c('0x3')));const moment_1=__importDefault(require(a162_0x285c('0x4')));const UPLOAD_PATH=a162_0x285c('0x5');class SyncFilesController extends controller_utils_1[a162_0x285c('0x6')]{constructor(_0x23f2bc){super(_0x23f2bc,null);this[a162_0x285c('0x7')]=this[a162_0x285c('0x7')][a162_0x285c('0x8')](this);this[a162_0x285c('0x9')]=this['downloadFtp']['bind'](this);this['processFtp']=this[a162_0x285c('0xa')][a162_0x285c('0x8')](this);}[a162_0x285c('0x7')](_0x16d577,_0x14b92c,_0x3c59e5){console[a162_0x285c('0xb')](a162_0x285c('0xc'));const _0x447cc6=[];const _0x2b2ef6=new ftp_1[(a162_0x285c('0x6'))]();_0x2b2ef6['on'](a162_0x285c('0xd'),function(){console[a162_0x285c('0xb')](a162_0x285c('0xe'));_0x2b2ef6[a162_0x285c('0xf')](a162_0x285c('0x10'),![],function(_0x518eeb,_0x3be90f){if(_0x518eeb){console['log'](_0x518eeb);}else{for(const _0x21fcba of _0x3be90f){if(_0x21fcba[a162_0x285c('0x11')][a162_0x285c('0x12')]('json')&&_0x21fcba[a162_0x285c('0x13')]>0x0){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x15')][a162_0x285c('0x16')]({'where':{'file_name':_0x21fcba['name']}})[a162_0x285c('0x17')]((_0x4a0fed,_0x50de6e)=>{if(_0x50de6e){_0x447cc6[a162_0x285c('0x18')](_0x4a0fed);}});}}}});});_0x2b2ef6['on'](a162_0x285c('0x19'),function(_0x416b8c){});_0x2b2ef6[a162_0x285c('0x1a')]({'host':a162_0x285c('0x1b'),'port':0x15,'user':a162_0x285c('0x1c'),'password':a162_0x285c('0x1c')});_0x14b92c[a162_0x285c('0x1d')]({'data':[]});}['downloadFtp'](_0x3e211e,_0x182844,_0x43c613){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x15')][a162_0x285c('0x1e')]({'where':{'status':null}})[a162_0x285c('0x1f')](_0x522f11=>{if(_0x522f11){const _0x5bf3a7=new ftp_1['default']();_0x5bf3a7['on'](a162_0x285c('0xd'),function(){console[a162_0x285c('0xb')](a162_0x285c('0x20')+_0x522f11[a162_0x285c('0x21')]);_0x5bf3a7[a162_0x285c('0x22')](a162_0x285c('0x23')+_0x522f11['file_name'],function(_0x46fab5,_0x5737d8){_0x5bf3a7[a162_0x285c('0x24')]();if(_0x46fab5){}else{const _0x499ba1='media/'+_0x522f11[a162_0x285c('0x21')]+a162_0x285c('0x25');_0x5737d8['pipe'](fs_1[a162_0x285c('0x6')][a162_0x285c('0x26')](_0x499ba1));_0x522f11[a162_0x285c('0x27')]=0x1;_0x522f11[a162_0x285c('0x28')]();console[a162_0x285c('0xb')]('Downloaded:\x20'+_0x522f11[a162_0x285c('0x29')]);}});});_0x5bf3a7['on'](a162_0x285c('0x19'),function(_0x51dc9e){});_0x5bf3a7[a162_0x285c('0x1a')]({'host':a162_0x285c('0x1b'),'port':0x15,'user':'ipd','password':a162_0x285c('0x1c')});}else{}});_0x182844[a162_0x285c('0x1d')]({'data':[]});}['processFtp'](_0x1769d2,_0x2278a5,_0x1e26b1){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x15')]['findOne']({'where':{'status':0x1}})[a162_0x285c('0x1f')](_0x26208d=>{if(_0x26208d){const _0x3b5d7e=a162_0x285c('0x2a')+_0x26208d[a162_0x285c('0x21')]+a162_0x285c('0x25');if(fs_1[a162_0x285c('0x6')][a162_0x285c('0x2b')](_0x3b5d7e)){const _0x1ba75d=fs_1[a162_0x285c('0x6')][a162_0x285c('0x2c')](_0x3b5d7e);const _0x2a1da9=_0x1ba75d[a162_0x285c('0x13')];console[a162_0x285c('0xb')]('fileName:\x20'+_0x3b5d7e);console['log'](a162_0x285c('0x2d')+_0x2a1da9);if(_0x2a1da9>0x0){fs_1[a162_0x285c('0x6')][a162_0x285c('0x2e')](_0x3b5d7e,a162_0x285c('0x2f'),function(_0x266cd6,_0x2e8521){if(_0x266cd6){_0x26208d[a162_0x285c('0x27')]=null;}else{try{const _0x284ce0=JSON[a162_0x285c('0x30')](_0x2e8521);for(const _0xa25e1f of _0x284ce0[a162_0x285c('0x31')][0x0]['CountingInfo']){const _0x328114=_0xa25e1f['In'];const _0x3e208d=_0xa25e1f[a162_0x285c('0x32')];const _0x223cf9=Date['parse'](_0xa25e1f[a162_0x285c('0x33')]);if(_0x328114>0x0){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x34')][a162_0x285c('0x35')]({'amount':_0x328114,'counted_at':_0x223cf9});}if(_0x3e208d>0x0){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x34')]['create']({'amount':_0x3e208d*-0x1,'counted_at':_0x223cf9});}}_0x26208d[a162_0x285c('0x27')]=0x2;}catch(_0x5905dc){_0x26208d[a162_0x285c('0x27')]=null;}}_0x26208d[a162_0x285c('0x28')]();});}else{_0x26208d[a162_0x285c('0x27')]=null;_0x26208d[a162_0x285c('0x28')]();}}else{_0x26208d[a162_0x285c('0x27')]=null;_0x26208d[a162_0x285c('0x28')]();}}else{}});_0x2278a5[a162_0x285c('0x1d')]({'data':[]});}['uploadEvent'](_0x1f9e03,_0x1a4090,_0x166e8d){const _0x49712d=require(a162_0x285c('0x36'));const _0x529029=_0x1f9e03[a162_0x285c('0x37')][a162_0x285c('0x38')];const _0xf4c92=UPLOAD_PATH+'/'+_0x1f9e03[a162_0x285c('0x37')][a162_0x285c('0x39')]+a162_0x285c('0x3a');const _0x546f58=fs_1['default'][a162_0x285c('0x3b')](_0x529029);const _0x53ea76=fs_1[a162_0x285c('0x6')][a162_0x285c('0x26')](_0xf4c92);const _0x3d28dd=_0x49712d['createGunzip']();console['log'](_0x1f9e03[a162_0x285c('0x37')]);_0x546f58[a162_0x285c('0x3c')](_0x3d28dd)['pipe'](_0x53ea76)['on']('finish',_0x5abd8c=>{if(_0x5abd8c)return console[a162_0x285c('0x19')](_0x5abd8c);else{const _0x2cb179=fs_1['default']['statSync'](_0x529029);const _0x49396a=_0x2cb179[a162_0x285c('0x13')];if(_0x49396a>0x0){fs_1[a162_0x285c('0x6')][a162_0x285c('0x2e')](_0xf4c92,a162_0x285c('0x2f'),function(_0x5abd8c,_0x2c6bd4){if(_0x5abd8c){return console[a162_0x285c('0x19')](_0x5abd8c);}else{try{const _0x6bbcc=JSON[a162_0x285c('0x30')](_0x2c6bd4);console[a162_0x285c('0xb')](_0x6bbcc);const _0x148d7c=_0x6bbcc[a162_0x285c('0x3d')][0x0][a162_0x285c('0x3e')];const _0x322004=_0x6bbcc['eventos'][0x0][a162_0x285c('0x3f')];const _0x32433e=moment_1[a162_0x285c('0x6')](_0x148d7c+'\x20'+_0x322004+a162_0x285c('0x40'),a162_0x285c('0x41'));const _0x1cef09=parseFloat(_0x6bbcc['eventos'][0x0][a162_0x285c('0x42')][a162_0x285c('0x43')](',','.'));const _0xb117e6=parseFloat(_0x6bbcc[a162_0x285c('0x3d')][0x0]['longitud'][a162_0x285c('0x43')](',','.'));const _0x43f398=_0x6bbcc[a162_0x285c('0x3d')][0x0]['velocidad'];const _0x8e3fe5=_0x6bbcc[a162_0x285c('0x3d')][0x0][a162_0x285c('0x44')][0x0][a162_0x285c('0x45')];const _0x214175=_0x6bbcc[a162_0x285c('0x3d')][0x0][a162_0x285c('0x44')][0x0][a162_0x285c('0x46')];console['log'](_0x1cef09);console[a162_0x285c('0xb')](_0xb117e6);console[a162_0x285c('0xb')](_0x43f398);console[a162_0x285c('0xb')](_0x8e3fe5);console[a162_0x285c('0xb')](_0x214175);console[a162_0x285c('0xb')](_0x32433e);if(_0x8e3fe5>0x0){sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x34')][a162_0x285c('0x35')]({'amount':_0x8e3fe5,'counted_at':_0x32433e});}sequelize_utils_1[a162_0x285c('0x6')][a162_0x285c('0x14')][a162_0x285c('0x47')][a162_0x285c('0x35')]({'device_id':null,'lat':''+_0x1cef09,'lon':''+_0xb117e6,'tracked_at':_0x32433e});}catch(_0x1d8334){return console[a162_0x285c('0x19')](_0x1d8334);}}});}}});_0x1a4090['json']({'status':0x1,'data':_0x1f9e03['file']});}}exports[a162_0x285c('0x6')]=SyncFilesController;