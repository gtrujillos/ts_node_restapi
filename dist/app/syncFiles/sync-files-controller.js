var a73_0x5dca=['findOne','media/','existsSync','statSync','fileName:\x20','fileSizeInBytes:\x20','readFile','utf8','parse','Data','CountingInfo','EndTime','passCountingsModel','create','uploadEvent','file','path','filename','.json','createReadStream','createGunzip','eventos','fecha','hora','\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','replace','longitud','velocidad','puerta','salidas','locationPointsModel','__esModule','ftp','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp','processFtp','log','connecting','ready','connected','list','colombia','name','endsWith','json','size','models','syncFilesModel','findOrCreate','push','error','connect','ftp.vivotek.com','ipd','then','connected:','get','file_name','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','fileName'];(function(_0x53740a,_0x463650){var _0x2e3924=function(_0x3ed82e){while(--_0x3ed82e){_0x53740a['push'](_0x53740a['shift']());}};_0x2e3924(++_0x463650);}(a73_0x5dca,0x183));var a73_0x22dd=function(_0x3849da,_0x8f4aa7){_0x3849da=_0x3849da-0x0;var _0x42363a=a73_0x5dca[_0x3849da];return _0x42363a;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4467b3){return _0x4467b3&&_0x4467b3['__esModule']?_0x4467b3:{'default':_0x4467b3};};Object['defineProperty'](exports,a73_0x22dd('0x0'),{'value':!![]});const ftp_1=__importDefault(require(a73_0x22dd('0x1')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require('../../infrastructure/controller-utils'));const sequelize_utils_1=__importDefault(require(a73_0x22dd('0x2')));const moment_1=__importDefault(require(a73_0x22dd('0x3')));const UPLOAD_PATH=a73_0x22dd('0x4');class SyncFilesController extends controller_utils_1[a73_0x22dd('0x5')]{constructor(_0x47a6a8){super(_0x47a6a8,null);this[a73_0x22dd('0x6')]=this[a73_0x22dd('0x6')][a73_0x22dd('0x7')](this);this['downloadFtp']=this[a73_0x22dd('0x8')][a73_0x22dd('0x7')](this);this[a73_0x22dd('0x9')]=this['processFtp'][a73_0x22dd('0x7')](this);}['syncFtp'](_0x3432e1,_0x5c33b1,_0x416e19){console[a73_0x22dd('0xa')](a73_0x22dd('0xb'));const _0x4af09b=[];const _0x5458ab=new ftp_1[(a73_0x22dd('0x5'))]();_0x5458ab['on'](a73_0x22dd('0xc'),function(){console['log'](a73_0x22dd('0xd'));_0x5458ab[a73_0x22dd('0xe')](a73_0x22dd('0xf'),![],function(_0x5cda9b,_0x507253){if(_0x5cda9b){console[a73_0x22dd('0xa')](_0x5cda9b);}else{for(const _0x52c6a9 of _0x507253){if(_0x52c6a9[a73_0x22dd('0x10')][a73_0x22dd('0x11')](a73_0x22dd('0x12'))&&_0x52c6a9[a73_0x22dd('0x13')]>0x0){sequelize_utils_1[a73_0x22dd('0x5')][a73_0x22dd('0x14')][a73_0x22dd('0x15')][a73_0x22dd('0x16')]({'where':{'file_name':_0x52c6a9[a73_0x22dd('0x10')]}})['spread']((_0x4678a6,_0x5eff05)=>{if(_0x5eff05){_0x4af09b[a73_0x22dd('0x17')](_0x4678a6);}});}}}});});_0x5458ab['on'](a73_0x22dd('0x18'),function(_0x135e50){});_0x5458ab[a73_0x22dd('0x19')]({'host':a73_0x22dd('0x1a'),'port':0x15,'user':a73_0x22dd('0x1b'),'password':a73_0x22dd('0x1b')});_0x5c33b1['json']({'data':[]});}[a73_0x22dd('0x8')](_0x2c1b9f,_0x30c0ac,_0x55b6fd){sequelize_utils_1['default'][a73_0x22dd('0x14')][a73_0x22dd('0x15')]['findOne']({'where':{'status':null}})[a73_0x22dd('0x1c')](_0x334b29=>{if(_0x334b29){const _0x33dd49=new ftp_1[(a73_0x22dd('0x5'))]();_0x33dd49['on'](a73_0x22dd('0xc'),function(){console['log'](a73_0x22dd('0x1d')+_0x334b29['file_name']);_0x33dd49[a73_0x22dd('0x1e')]('colombia/'+_0x334b29[a73_0x22dd('0x1f')],function(_0x3e6b7d,_0x348c9e){_0x33dd49['end']();if(_0x3e6b7d){}else{const _0x1295ee='media/'+_0x334b29[a73_0x22dd('0x1f')]+a73_0x22dd('0x20');_0x348c9e[a73_0x22dd('0x21')](fs_1[a73_0x22dd('0x5')][a73_0x22dd('0x22')](_0x1295ee));_0x334b29[a73_0x22dd('0x23')]=0x1;_0x334b29[a73_0x22dd('0x24')]();console[a73_0x22dd('0xa')](a73_0x22dd('0x25')+_0x334b29[a73_0x22dd('0x26')]);}});});_0x33dd49['on'](a73_0x22dd('0x18'),function(_0x564d11){});_0x33dd49[a73_0x22dd('0x19')]({'host':a73_0x22dd('0x1a'),'port':0x15,'user':a73_0x22dd('0x1b'),'password':'ipd'});}else{}});_0x30c0ac['json']({'data':[]});}['processFtp'](_0x1e8460,_0x19b5a8,_0x4168ec){sequelize_utils_1[a73_0x22dd('0x5')][a73_0x22dd('0x14')][a73_0x22dd('0x15')][a73_0x22dd('0x27')]({'where':{'status':0x1}})['then'](_0x1cb223=>{if(_0x1cb223){const _0x4db0ed=a73_0x22dd('0x28')+_0x1cb223['file_name']+'.txt';if(fs_1['default'][a73_0x22dd('0x29')](_0x4db0ed)){const _0x2ae142=fs_1['default'][a73_0x22dd('0x2a')](_0x4db0ed);const _0x281578=_0x2ae142[a73_0x22dd('0x13')];console[a73_0x22dd('0xa')](a73_0x22dd('0x2b')+_0x4db0ed);console['log'](a73_0x22dd('0x2c')+_0x281578);if(_0x281578>0x0){fs_1[a73_0x22dd('0x5')][a73_0x22dd('0x2d')](_0x4db0ed,a73_0x22dd('0x2e'),function(_0xa49c6c,_0x5c3fd9){if(_0xa49c6c){_0x1cb223[a73_0x22dd('0x23')]=null;}else{try{const _0x558a78=JSON[a73_0x22dd('0x2f')](_0x5c3fd9);for(const _0xe89299 of _0x558a78[a73_0x22dd('0x30')][0x0][a73_0x22dd('0x31')]){const _0x20e3b3=_0xe89299['In'];const _0x204aad=_0xe89299['Out'];const _0x4a872a=Date[a73_0x22dd('0x2f')](_0xe89299[a73_0x22dd('0x32')]);if(_0x20e3b3>0x0){sequelize_utils_1[a73_0x22dd('0x5')]['models'][a73_0x22dd('0x33')][a73_0x22dd('0x34')]({'amount':_0x20e3b3,'counted_at':_0x4a872a});}if(_0x204aad>0x0){sequelize_utils_1[a73_0x22dd('0x5')][a73_0x22dd('0x14')][a73_0x22dd('0x33')]['create']({'amount':_0x204aad*-0x1,'counted_at':_0x4a872a});}}_0x1cb223[a73_0x22dd('0x23')]=0x2;}catch(_0x14dffa){_0x1cb223[a73_0x22dd('0x23')]=null;}}_0x1cb223[a73_0x22dd('0x24')]();});}else{_0x1cb223[a73_0x22dd('0x23')]=null;_0x1cb223[a73_0x22dd('0x24')]();}}else{_0x1cb223['status']=null;_0x1cb223['save']();}}else{}});_0x19b5a8[a73_0x22dd('0x12')]({'data':[]});}[a73_0x22dd('0x35')](_0x35db58,_0x351014,_0x3650d2){const _0x42f843=require('zlib');const _0x289723=_0x35db58[a73_0x22dd('0x36')][a73_0x22dd('0x37')];const _0x427bb0=UPLOAD_PATH+'/'+_0x35db58[a73_0x22dd('0x36')][a73_0x22dd('0x38')]+a73_0x22dd('0x39');const _0x14a487=fs_1[a73_0x22dd('0x5')][a73_0x22dd('0x3a')](_0x289723);const _0x5426e3=fs_1['default'][a73_0x22dd('0x22')](_0x427bb0);const _0x22fcc4=_0x42f843[a73_0x22dd('0x3b')]();console[a73_0x22dd('0xa')](_0x35db58[a73_0x22dd('0x36')]);_0x14a487[a73_0x22dd('0x21')](_0x22fcc4)['pipe'](_0x5426e3)['on']('finish',_0x58bee8=>{if(_0x58bee8)return console[a73_0x22dd('0x18')](_0x58bee8);else{const _0xc3dfa2=fs_1[a73_0x22dd('0x5')][a73_0x22dd('0x2a')](_0x289723);const _0x5abbcc=_0xc3dfa2[a73_0x22dd('0x13')];if(_0x5abbcc>0x0){fs_1['default']['readFile'](_0x427bb0,a73_0x22dd('0x2e'),function(_0x58bee8,_0x2b5566){if(_0x58bee8){return console['error'](_0x58bee8);}else{try{const _0x55b2d7=JSON[a73_0x22dd('0x2f')](_0x2b5566);console[a73_0x22dd('0xa')](_0x55b2d7);const _0x53c413=_0x55b2d7[a73_0x22dd('0x3c')][0x0][a73_0x22dd('0x3d')];const _0xff0043=_0x55b2d7['eventos'][0x0][a73_0x22dd('0x3e')];const _0x43f39f=moment_1['default'](_0x53c413+'\x20'+_0xff0043+a73_0x22dd('0x3f'),a73_0x22dd('0x40'));const _0x17caf9=parseFloat(_0x55b2d7['eventos'][0x0]['latitud'][a73_0x22dd('0x41')](',','.'));const _0xc75edc=parseFloat(_0x55b2d7[a73_0x22dd('0x3c')][0x0][a73_0x22dd('0x42')][a73_0x22dd('0x41')](',','.'));const _0x34083c=_0x55b2d7[a73_0x22dd('0x3c')][0x0][a73_0x22dd('0x43')];const _0x14b934=_0x55b2d7['eventos'][0x0][a73_0x22dd('0x44')][0x0]['ingresos'];const _0x44d9c0=_0x55b2d7[a73_0x22dd('0x3c')][0x0][a73_0x22dd('0x44')][0x0][a73_0x22dd('0x45')];console['log'](_0x17caf9);console[a73_0x22dd('0xa')](_0xc75edc);console[a73_0x22dd('0xa')](_0x34083c);console[a73_0x22dd('0xa')](_0x14b934);console['log'](_0x44d9c0);console[a73_0x22dd('0xa')](_0x43f39f);if(_0x14b934>0x0){sequelize_utils_1[a73_0x22dd('0x5')][a73_0x22dd('0x14')][a73_0x22dd('0x33')][a73_0x22dd('0x34')]({'amount':_0x14b934,'counted_at':_0x43f39f});}sequelize_utils_1[a73_0x22dd('0x5')][a73_0x22dd('0x14')][a73_0x22dd('0x46')][a73_0x22dd('0x34')]({'device_id':null,'lat':''+_0x17caf9,'lon':''+_0xc75edc,'tracked_at':_0x43f39f});}catch(_0x3dac23){return console['error'](_0x3dac23);}}});}}});_0x351014['json']({'status':0x1,'data':_0x35db58['file']});}}exports[a73_0x22dd('0x5')]=SyncFilesController;