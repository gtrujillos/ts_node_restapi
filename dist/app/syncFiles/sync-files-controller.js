var a73_0x17c4=['\x20-05:00','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','ingresos','salidas','locationPointsModel','__importDefault','defineProperty','__esModule','ftp','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','processFtp','log','connecting','ready','connected','colombia','endsWith','size','models','syncFilesModel','findOrCreate','name','push','error','connect','ftp.vivotek.com','ipd','json','downloadFtp','connected:','file_name','get','colombia/','end','media/','.txt','createWriteStream','Downloaded:\x20','fileName','findOne','existsSync','fileName:\x20','fileSizeInBytes:\x20','readFile','utf8','status','parse','Data','CountingInfo','Out','passCountingsModel','create','save','uploadEvent','zlib','file','createGunzip','pipe','finish','statSync','eventos','fecha','hora'];(function(_0x46c626,_0x23e087){var _0x229e40=function(_0x238a10){while(--_0x238a10){_0x46c626['push'](_0x46c626['shift']());}};_0x229e40(++_0x23e087);}(a73_0x17c4,0xdc));var a73_0x21ca=function(_0x50a225,_0x1a1ad0){_0x50a225=_0x50a225-0x0;var _0x546b93=a73_0x17c4[_0x50a225];return _0x546b93;};'use strict';var __importDefault=this&&this[a73_0x21ca('0x0')]||function(_0x902959){return _0x902959&&_0x902959['__esModule']?_0x902959:{'default':_0x902959};};Object[a73_0x21ca('0x1')](exports,a73_0x21ca('0x2'),{'value':!![]});const ftp_1=__importDefault(require(a73_0x21ca('0x3')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a73_0x21ca('0x4')));const sequelize_utils_1=__importDefault(require(a73_0x21ca('0x5')));const moment_1=__importDefault(require(a73_0x21ca('0x6')));const UPLOAD_PATH=a73_0x21ca('0x7');class SyncFilesController extends controller_utils_1[a73_0x21ca('0x8')]{constructor(_0x2f26f1){super(_0x2f26f1,null);this[a73_0x21ca('0x9')]=this[a73_0x21ca('0x9')][a73_0x21ca('0xa')](this);this['downloadFtp']=this['downloadFtp']['bind'](this);this['processFtp']=this[a73_0x21ca('0xb')][a73_0x21ca('0xa')](this);}[a73_0x21ca('0x9')](_0x59a4f4,_0x683559,_0x3971de){console[a73_0x21ca('0xc')](a73_0x21ca('0xd'));const _0x5a9cc2=[];const _0x3884a5=new ftp_1[(a73_0x21ca('0x8'))]();_0x3884a5['on'](a73_0x21ca('0xe'),function(){console[a73_0x21ca('0xc')](a73_0x21ca('0xf'));_0x3884a5['list'](a73_0x21ca('0x10'),![],function(_0x3239c6,_0x206655){if(_0x3239c6){console[a73_0x21ca('0xc')](_0x3239c6);}else{for(const _0x5fbdf7 of _0x206655){if(_0x5fbdf7['name'][a73_0x21ca('0x11')]('json')&&_0x5fbdf7[a73_0x21ca('0x12')]>0x0){sequelize_utils_1[a73_0x21ca('0x8')][a73_0x21ca('0x13')][a73_0x21ca('0x14')][a73_0x21ca('0x15')]({'where':{'file_name':_0x5fbdf7[a73_0x21ca('0x16')]}})['spread']((_0x1ce594,_0x3bd8a4)=>{if(_0x3bd8a4){_0x5a9cc2[a73_0x21ca('0x17')](_0x1ce594);}});}}}});});_0x3884a5['on'](a73_0x21ca('0x18'),function(_0x13159f){});_0x3884a5[a73_0x21ca('0x19')]({'host':a73_0x21ca('0x1a'),'port':0x15,'user':a73_0x21ca('0x1b'),'password':a73_0x21ca('0x1b')});_0x683559[a73_0x21ca('0x1c')]({'data':[]});}[a73_0x21ca('0x1d')](_0x10fd81,_0x42a4ec,_0x3c7581){sequelize_utils_1['default'][a73_0x21ca('0x13')]['syncFilesModel']['findOne']({'where':{'status':null}})['then'](_0x494b2d=>{if(_0x494b2d){const _0x556c2c=new ftp_1['default']();_0x556c2c['on'](a73_0x21ca('0xe'),function(){console[a73_0x21ca('0xc')](a73_0x21ca('0x1e')+_0x494b2d[a73_0x21ca('0x1f')]);_0x556c2c[a73_0x21ca('0x20')](a73_0x21ca('0x21')+_0x494b2d[a73_0x21ca('0x1f')],function(_0x11a3c7,_0x575112){_0x556c2c[a73_0x21ca('0x22')]();if(_0x11a3c7){}else{const _0x395103=a73_0x21ca('0x23')+_0x494b2d[a73_0x21ca('0x1f')]+a73_0x21ca('0x24');_0x575112['pipe'](fs_1[a73_0x21ca('0x8')][a73_0x21ca('0x25')](_0x395103));_0x494b2d['status']=0x1;_0x494b2d['save']();console[a73_0x21ca('0xc')](a73_0x21ca('0x26')+_0x494b2d[a73_0x21ca('0x27')]);}});});_0x556c2c['on'](a73_0x21ca('0x18'),function(_0x4f9936){});_0x556c2c[a73_0x21ca('0x19')]({'host':'ftp.vivotek.com','port':0x15,'user':a73_0x21ca('0x1b'),'password':'ipd'});}else{}});_0x42a4ec['json']({'data':[]});}[a73_0x21ca('0xb')](_0x3c4ee1,_0x1fe28c,_0x41fde8){sequelize_utils_1['default'][a73_0x21ca('0x13')][a73_0x21ca('0x14')][a73_0x21ca('0x28')]({'where':{'status':0x1}})['then'](_0x116d10=>{if(_0x116d10){const _0x35e944=a73_0x21ca('0x23')+_0x116d10['file_name']+a73_0x21ca('0x24');if(fs_1[a73_0x21ca('0x8')][a73_0x21ca('0x29')](_0x35e944)){const _0x402f6d=fs_1[a73_0x21ca('0x8')]['statSync'](_0x35e944);const _0x324f3d=_0x402f6d[a73_0x21ca('0x12')];console[a73_0x21ca('0xc')](a73_0x21ca('0x2a')+_0x35e944);console[a73_0x21ca('0xc')](a73_0x21ca('0x2b')+_0x324f3d);if(_0x324f3d>0x0){fs_1[a73_0x21ca('0x8')][a73_0x21ca('0x2c')](_0x35e944,a73_0x21ca('0x2d'),function(_0x3e2f00,_0xf0d305){if(_0x3e2f00){_0x116d10[a73_0x21ca('0x2e')]=null;}else{try{const _0x35e045=JSON[a73_0x21ca('0x2f')](_0xf0d305);for(const _0x485c0e of _0x35e045[a73_0x21ca('0x30')][0x0][a73_0x21ca('0x31')]){const _0x41fb3b=_0x485c0e['In'];const _0x5d43d4=_0x485c0e[a73_0x21ca('0x32')];const _0xbf3166=Date[a73_0x21ca('0x2f')](_0x485c0e['EndTime']);if(_0x41fb3b>0x0){sequelize_utils_1[a73_0x21ca('0x8')][a73_0x21ca('0x13')][a73_0x21ca('0x33')]['create']({'amount':_0x41fb3b,'counted_at':_0xbf3166});}if(_0x5d43d4>0x0){sequelize_utils_1['default'][a73_0x21ca('0x13')]['passCountingsModel'][a73_0x21ca('0x34')]({'amount':_0x5d43d4*-0x1,'counted_at':_0xbf3166});}}_0x116d10[a73_0x21ca('0x2e')]=0x2;}catch(_0x5f2048){_0x116d10[a73_0x21ca('0x2e')]=null;}}_0x116d10[a73_0x21ca('0x35')]();});}else{_0x116d10['status']=null;_0x116d10[a73_0x21ca('0x35')]();}}else{_0x116d10[a73_0x21ca('0x2e')]=null;_0x116d10[a73_0x21ca('0x35')]();}}else{}});_0x1fe28c[a73_0x21ca('0x1c')]({'data':[]});}[a73_0x21ca('0x36')](_0x46603f,_0x44767a,_0x3148d6){const _0x466256=require(a73_0x21ca('0x37'));const _0x1f33df=_0x46603f['file']['path'];const _0x5b5690=UPLOAD_PATH+'/'+_0x46603f[a73_0x21ca('0x38')]['filename']+'.json';const _0x5a251a=fs_1['default']['createReadStream'](_0x1f33df);const _0x3d151d=fs_1[a73_0x21ca('0x8')][a73_0x21ca('0x25')](_0x5b5690);const _0x203ec4=_0x466256[a73_0x21ca('0x39')]();console[a73_0x21ca('0xc')](_0x46603f[a73_0x21ca('0x38')]);_0x5a251a['pipe'](_0x203ec4)[a73_0x21ca('0x3a')](_0x3d151d)['on'](a73_0x21ca('0x3b'),_0x398f5b=>{if(_0x398f5b)return console[a73_0x21ca('0x18')](_0x398f5b);else{const _0x2b5fea=fs_1['default'][a73_0x21ca('0x3c')](_0x1f33df);const _0x4541c7=_0x2b5fea['size'];if(_0x4541c7>0x0){fs_1[a73_0x21ca('0x8')][a73_0x21ca('0x2c')](_0x5b5690,a73_0x21ca('0x2d'),function(_0x398f5b,_0x40da2f){if(_0x398f5b){return console['error'](_0x398f5b);}else{try{const _0x4f2bda=JSON[a73_0x21ca('0x2f')](_0x40da2f);console['log'](_0x4f2bda);const _0x1dad09=_0x4f2bda[a73_0x21ca('0x3d')][0x0][a73_0x21ca('0x3e')];const _0x2fda12=_0x4f2bda[a73_0x21ca('0x3d')][0x0][a73_0x21ca('0x3f')];const _0x3ab0eb=moment_1['default'](_0x1dad09+'\x20'+_0x2fda12+a73_0x21ca('0x40'),a73_0x21ca('0x41'));const _0x1acc63=parseFloat(_0x4f2bda[a73_0x21ca('0x3d')][0x0][a73_0x21ca('0x42')][a73_0x21ca('0x43')](',','.'));const _0x3a81e3=parseFloat(_0x4f2bda[a73_0x21ca('0x3d')][0x0]['longitud'][a73_0x21ca('0x43')](',','.'));const _0x5d22f7=_0x4f2bda['eventos'][0x0]['velocidad'];const _0x52a513=_0x4f2bda['eventos'][0x0]['puerta'][0x0][a73_0x21ca('0x44')];const _0x41a1b7=_0x4f2bda[a73_0x21ca('0x3d')][0x0]['puerta'][0x0][a73_0x21ca('0x45')];console[a73_0x21ca('0xc')](_0x1acc63);console['log'](_0x3a81e3);console[a73_0x21ca('0xc')](_0x5d22f7);console[a73_0x21ca('0xc')](_0x52a513);console[a73_0x21ca('0xc')](_0x41a1b7);console[a73_0x21ca('0xc')](_0x3ab0eb);if(_0x52a513>0x0){sequelize_utils_1[a73_0x21ca('0x8')][a73_0x21ca('0x13')][a73_0x21ca('0x33')][a73_0x21ca('0x34')]({'amount':_0x52a513,'counted_at':_0x3ab0eb});}sequelize_utils_1[a73_0x21ca('0x8')][a73_0x21ca('0x13')][a73_0x21ca('0x46')]['create']({'device_id':null,'lat':''+_0x1acc63,'lon':''+_0x3a81e3,'tracked_at':_0x3ab0eb});}catch(_0x5772c5){return console[a73_0x21ca('0x18')](_0x5772c5);}}});}}});_0x44767a[a73_0x21ca('0x1c')]({'status':0x1,'data':_0x46603f[a73_0x21ca('0x38')]});}}exports[a73_0x21ca('0x8')]=SyncFilesController;