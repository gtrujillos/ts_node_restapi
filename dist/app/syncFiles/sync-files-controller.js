var a104_0x40f8=['../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp','processFtp','log','connecting','ready','list','colombia','name','endsWith','json','size','models','syncFilesModel','findOrCreate','spread','push','error','connect','ftp.vivotek.com','ipd','connected:','file_name','get','colombia/','end','media/','.txt','createWriteStream','status','save','Downloaded:\x20','findOne','then','statSync','fileName:\x20','fileSizeInBytes:\x20','readFile','utf8','parse','Data','CountingInfo','Out','EndTime','passCountingsModel','create','uploadEvent','zlib','file','path','filename','.json','createReadStream','pipe','fecha','eventos','\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','longitud','velocidad','ingresos','puerta','salidas','locationPointsModel','__esModule','defineProperty','ftp','../../infrastructure/controller-utils'];(function(_0x199ead,_0x35918b){var _0x2fcde4=function(_0x35d309){while(--_0x35d309){_0x199ead['push'](_0x199ead['shift']());}};_0x2fcde4(++_0x35918b);}(a104_0x40f8,0x173));var a104_0x42b0=function(_0x40c386,_0x4f9d48){_0x40c386=_0x40c386-0x0;var _0x3651fc=a104_0x40f8[_0x40c386];return _0x3651fc;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x43ef27){return _0x43ef27&&_0x43ef27[a104_0x42b0('0x0')]?_0x43ef27:{'default':_0x43ef27};};Object[a104_0x42b0('0x1')](exports,a104_0x42b0('0x0'),{'value':!![]});const ftp_1=__importDefault(require(a104_0x42b0('0x2')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a104_0x42b0('0x3')));const sequelize_utils_1=__importDefault(require(a104_0x42b0('0x4')));const moment_1=__importDefault(require(a104_0x42b0('0x5')));const UPLOAD_PATH=a104_0x42b0('0x6');class SyncFilesController extends controller_utils_1[a104_0x42b0('0x7')]{constructor(_0x298b12){super(_0x298b12,null);this[a104_0x42b0('0x8')]=this[a104_0x42b0('0x8')][a104_0x42b0('0x9')](this);this['downloadFtp']=this[a104_0x42b0('0xa')]['bind'](this);this[a104_0x42b0('0xb')]=this[a104_0x42b0('0xb')][a104_0x42b0('0x9')](this);}[a104_0x42b0('0x8')](_0x3d3c81,_0x324099,_0x426afc){console[a104_0x42b0('0xc')](a104_0x42b0('0xd'));const _0x3913e7=[];const _0x407ec8=new ftp_1[(a104_0x42b0('0x7'))]();_0x407ec8['on'](a104_0x42b0('0xe'),function(){console[a104_0x42b0('0xc')]('connected');_0x407ec8[a104_0x42b0('0xf')](a104_0x42b0('0x10'),![],function(_0x5b8723,_0x3f14c2){if(_0x5b8723){console['log'](_0x5b8723);}else{for(const _0x45d97c of _0x3f14c2){if(_0x45d97c[a104_0x42b0('0x11')][a104_0x42b0('0x12')](a104_0x42b0('0x13'))&&_0x45d97c[a104_0x42b0('0x14')]>0x0){sequelize_utils_1[a104_0x42b0('0x7')][a104_0x42b0('0x15')][a104_0x42b0('0x16')][a104_0x42b0('0x17')]({'where':{'file_name':_0x45d97c[a104_0x42b0('0x11')]}})[a104_0x42b0('0x18')]((_0x3b58a2,_0x495bd7)=>{if(_0x495bd7){_0x3913e7[a104_0x42b0('0x19')](_0x3b58a2);}});}}}});});_0x407ec8['on'](a104_0x42b0('0x1a'),function(_0x2e9854){});_0x407ec8[a104_0x42b0('0x1b')]({'host':a104_0x42b0('0x1c'),'port':0x15,'user':'ipd','password':a104_0x42b0('0x1d')});_0x324099[a104_0x42b0('0x13')]({'data':[]});}['downloadFtp'](_0x4ad220,_0x3222bc,_0x20845c){sequelize_utils_1['default'][a104_0x42b0('0x15')]['syncFilesModel']['findOne']({'where':{'status':null}})['then'](_0x4fcc33=>{if(_0x4fcc33){const _0x32e614=new ftp_1[(a104_0x42b0('0x7'))]();_0x32e614['on'](a104_0x42b0('0xe'),function(){console['log'](a104_0x42b0('0x1e')+_0x4fcc33[a104_0x42b0('0x1f')]);_0x32e614[a104_0x42b0('0x20')](a104_0x42b0('0x21')+_0x4fcc33[a104_0x42b0('0x1f')],function(_0x8f2773,_0x1f84eb){_0x32e614[a104_0x42b0('0x22')]();if(_0x8f2773){}else{const _0xd0fe53=a104_0x42b0('0x23')+_0x4fcc33[a104_0x42b0('0x1f')]+a104_0x42b0('0x24');_0x1f84eb['pipe'](fs_1[a104_0x42b0('0x7')][a104_0x42b0('0x25')](_0xd0fe53));_0x4fcc33[a104_0x42b0('0x26')]=0x1;_0x4fcc33[a104_0x42b0('0x27')]();console[a104_0x42b0('0xc')](a104_0x42b0('0x28')+_0x4fcc33['fileName']);}});});_0x32e614['on'](a104_0x42b0('0x1a'),function(_0x3da74d){});_0x32e614[a104_0x42b0('0x1b')]({'host':a104_0x42b0('0x1c'),'port':0x15,'user':a104_0x42b0('0x1d'),'password':a104_0x42b0('0x1d')});}else{}});_0x3222bc[a104_0x42b0('0x13')]({'data':[]});}[a104_0x42b0('0xb')](_0xdc61b0,_0x1f1b4a,_0x5dcf6c){sequelize_utils_1[a104_0x42b0('0x7')][a104_0x42b0('0x15')][a104_0x42b0('0x16')][a104_0x42b0('0x29')]({'where':{'status':0x1}})[a104_0x42b0('0x2a')](_0x4a4cf5=>{if(_0x4a4cf5){const _0x42b02b=a104_0x42b0('0x23')+_0x4a4cf5[a104_0x42b0('0x1f')]+a104_0x42b0('0x24');if(fs_1[a104_0x42b0('0x7')]['existsSync'](_0x42b02b)){const _0xe9aa01=fs_1[a104_0x42b0('0x7')][a104_0x42b0('0x2b')](_0x42b02b);const _0x8eb72a=_0xe9aa01[a104_0x42b0('0x14')];console[a104_0x42b0('0xc')](a104_0x42b0('0x2c')+_0x42b02b);console[a104_0x42b0('0xc')](a104_0x42b0('0x2d')+_0x8eb72a);if(_0x8eb72a>0x0){fs_1['default'][a104_0x42b0('0x2e')](_0x42b02b,a104_0x42b0('0x2f'),function(_0x1246d9,_0x16e80d){if(_0x1246d9){_0x4a4cf5[a104_0x42b0('0x26')]=null;}else{try{const _0x4593b9=JSON[a104_0x42b0('0x30')](_0x16e80d);for(const _0x350dd1 of _0x4593b9[a104_0x42b0('0x31')][0x0][a104_0x42b0('0x32')]){const _0xe30be=_0x350dd1['In'];const _0x175f40=_0x350dd1[a104_0x42b0('0x33')];const _0x20acb6=Date[a104_0x42b0('0x30')](_0x350dd1[a104_0x42b0('0x34')]);if(_0xe30be>0x0){sequelize_utils_1[a104_0x42b0('0x7')][a104_0x42b0('0x15')][a104_0x42b0('0x35')]['create']({'amount':_0xe30be,'counted_at':_0x20acb6});}if(_0x175f40>0x0){sequelize_utils_1['default'][a104_0x42b0('0x15')][a104_0x42b0('0x35')][a104_0x42b0('0x36')]({'amount':_0x175f40*-0x1,'counted_at':_0x20acb6});}}_0x4a4cf5[a104_0x42b0('0x26')]=0x2;}catch(_0x1d4505){_0x4a4cf5[a104_0x42b0('0x26')]=null;}}_0x4a4cf5[a104_0x42b0('0x27')]();});}else{_0x4a4cf5['status']=null;_0x4a4cf5[a104_0x42b0('0x27')]();}}else{_0x4a4cf5[a104_0x42b0('0x26')]=null;_0x4a4cf5['save']();}}else{}});_0x1f1b4a[a104_0x42b0('0x13')]({'data':[]});}[a104_0x42b0('0x37')](_0x44e9f4,_0xcfbba0,_0x5285dc){const _0x52d398=require(a104_0x42b0('0x38'));const _0x3e56d9=_0x44e9f4[a104_0x42b0('0x39')][a104_0x42b0('0x3a')];const _0x396d24=UPLOAD_PATH+'/'+_0x44e9f4[a104_0x42b0('0x39')][a104_0x42b0('0x3b')]+a104_0x42b0('0x3c');const _0x998d4e=fs_1['default'][a104_0x42b0('0x3d')](_0x3e56d9);const _0x87bad5=fs_1[a104_0x42b0('0x7')][a104_0x42b0('0x25')](_0x396d24);const _0x2b4a00=_0x52d398['createGunzip']();console[a104_0x42b0('0xc')](_0x44e9f4[a104_0x42b0('0x39')]);_0x998d4e[a104_0x42b0('0x3e')](_0x2b4a00)['pipe'](_0x87bad5)['on']('finish',_0x197c54=>{if(_0x197c54)return console[a104_0x42b0('0x1a')](_0x197c54);else{const _0x4005f5=fs_1[a104_0x42b0('0x7')][a104_0x42b0('0x2b')](_0x3e56d9);const _0x63136a=_0x4005f5[a104_0x42b0('0x14')];if(_0x63136a>0x0){fs_1[a104_0x42b0('0x7')][a104_0x42b0('0x2e')](_0x396d24,a104_0x42b0('0x2f'),function(_0x197c54,_0x13403a){if(_0x197c54){return console['error'](_0x197c54);}else{try{const _0x10b785=JSON[a104_0x42b0('0x30')](_0x13403a);console[a104_0x42b0('0xc')](_0x10b785);const _0x1ad4b2=_0x10b785['eventos'][0x0][a104_0x42b0('0x3f')];const _0xcded8d=_0x10b785[a104_0x42b0('0x40')][0x0]['hora'];const _0x54b65e=moment_1[a104_0x42b0('0x7')](_0x1ad4b2+'\x20'+_0xcded8d+a104_0x42b0('0x41'),a104_0x42b0('0x42'));const _0x38250d=parseFloat(_0x10b785[a104_0x42b0('0x40')][0x0][a104_0x42b0('0x43')][a104_0x42b0('0x44')](',','.'));const _0x3f9345=parseFloat(_0x10b785[a104_0x42b0('0x40')][0x0][a104_0x42b0('0x45')]['replace'](',','.'));const _0x907e82=_0x10b785[a104_0x42b0('0x40')][0x0][a104_0x42b0('0x46')];const _0x5b2502=_0x10b785[a104_0x42b0('0x40')][0x0]['puerta'][0x0][a104_0x42b0('0x47')];const _0x1ff067=_0x10b785[a104_0x42b0('0x40')][0x0][a104_0x42b0('0x48')][0x0][a104_0x42b0('0x49')];console[a104_0x42b0('0xc')](_0x38250d);console[a104_0x42b0('0xc')](_0x3f9345);console[a104_0x42b0('0xc')](_0x907e82);console[a104_0x42b0('0xc')](_0x5b2502);console[a104_0x42b0('0xc')](_0x1ff067);console[a104_0x42b0('0xc')](_0x54b65e);if(_0x5b2502>0x0){sequelize_utils_1[a104_0x42b0('0x7')][a104_0x42b0('0x15')][a104_0x42b0('0x35')][a104_0x42b0('0x36')]({'amount':_0x5b2502,'counted_at':_0x54b65e});}sequelize_utils_1[a104_0x42b0('0x7')][a104_0x42b0('0x15')][a104_0x42b0('0x4a')][a104_0x42b0('0x36')]({'device_id':null,'lat':''+_0x38250d,'lon':''+_0x3f9345,'tracked_at':_0x54b65e});}catch(_0x32c0b3){return console[a104_0x42b0('0x1a')](_0x32c0b3);}}});}}});_0xcfbba0['json']({'status':0x1,'data':_0x44e9f4['file']});}}exports[a104_0x42b0('0x7')]=SyncFilesController;