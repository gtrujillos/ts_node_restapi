var a72_0x1095=['fileSizeInBytes:\x20','readFile','utf8','parse','EndTime','create','passCountingsModel','zlib','file','filename','.json','createReadStream','createGunzip','error','eventos','fecha','YYYYMMDD\x20HHmmss\x20Z','latitud','replace','longitud','velocidad','ingresos','salidas','__importDefault','__esModule','defineProperty','ftp','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','media','default','syncFtp','bind','downloadFtp','processFtp','log','connecting','ready','connected','list','colombia','name','endsWith','json','size','syncFilesModel','findOrCreate','spread','push','connect','ftp.vivotek.com','ipd','models','then','get','colombia/','file_name','end','media/','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','fileName','findOne','existsSync','statSync','fileName:\x20'];(function(_0x259436,_0x4bba5b){var _0x5de318=function(_0x4b9bd7){while(--_0x4b9bd7){_0x259436['push'](_0x259436['shift']());}};_0x5de318(++_0x4bba5b);}(a72_0x1095,0xec));var a72_0x5d58=function(_0x373d2e,_0x8b432f){_0x373d2e=_0x373d2e-0x0;var _0x22eaea=a72_0x1095[_0x373d2e];return _0x22eaea;};'use strict';var __importDefault=this&&this[a72_0x5d58('0x0')]||function(_0x572c48){return _0x572c48&&_0x572c48[a72_0x5d58('0x1')]?_0x572c48:{'default':_0x572c48};};Object[a72_0x5d58('0x2')](exports,a72_0x5d58('0x1'),{'value':!![]});const ftp_1=__importDefault(require(a72_0x5d58('0x3')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a72_0x5d58('0x4')));const sequelize_utils_1=__importDefault(require(a72_0x5d58('0x5')));const moment_1=__importDefault(require(a72_0x5d58('0x6')));const UPLOAD_PATH=a72_0x5d58('0x7');class SyncFilesController extends controller_utils_1[a72_0x5d58('0x8')]{constructor(_0x21bfa8){super(_0x21bfa8,null);this[a72_0x5d58('0x9')]=this[a72_0x5d58('0x9')][a72_0x5d58('0xa')](this);this[a72_0x5d58('0xb')]=this[a72_0x5d58('0xb')][a72_0x5d58('0xa')](this);this['processFtp']=this[a72_0x5d58('0xc')][a72_0x5d58('0xa')](this);}[a72_0x5d58('0x9')](_0x2885fb,_0x40489c,_0x51c17f){console[a72_0x5d58('0xd')](a72_0x5d58('0xe'));const _0x4ac17d=[];const _0x26a28f=new ftp_1['default']();_0x26a28f['on'](a72_0x5d58('0xf'),function(){console['log'](a72_0x5d58('0x10'));_0x26a28f[a72_0x5d58('0x11')](a72_0x5d58('0x12'),![],function(_0x2e473a,_0x2aea00){if(_0x2e473a){console['log'](_0x2e473a);}else{for(const _0x3ca797 of _0x2aea00){if(_0x3ca797[a72_0x5d58('0x13')][a72_0x5d58('0x14')](a72_0x5d58('0x15'))&&_0x3ca797[a72_0x5d58('0x16')]>0x0){sequelize_utils_1['default']['models'][a72_0x5d58('0x17')][a72_0x5d58('0x18')]({'where':{'file_name':_0x3ca797[a72_0x5d58('0x13')]}})[a72_0x5d58('0x19')]((_0x2b98ee,_0x4b5982)=>{if(_0x4b5982){_0x4ac17d[a72_0x5d58('0x1a')](_0x2b98ee);}});}}}});});_0x26a28f['on']('error',function(_0x1597cf){});_0x26a28f[a72_0x5d58('0x1b')]({'host':a72_0x5d58('0x1c'),'port':0x15,'user':'ipd','password':a72_0x5d58('0x1d')});_0x40489c[a72_0x5d58('0x15')]({'data':[]});}[a72_0x5d58('0xb')](_0x4e56d9,_0x253ed7,_0x462e9e){sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')][a72_0x5d58('0x17')]['findOne']({'where':{'status':null}})[a72_0x5d58('0x1f')](_0x1f84e0=>{if(_0x1f84e0){const _0x35b7da=new ftp_1['default']();_0x35b7da['on'](a72_0x5d58('0xf'),function(){console[a72_0x5d58('0xd')]('connected:'+_0x1f84e0['file_name']);_0x35b7da[a72_0x5d58('0x20')](a72_0x5d58('0x21')+_0x1f84e0[a72_0x5d58('0x22')],function(_0x4bc533,_0x439bad){_0x35b7da[a72_0x5d58('0x23')]();if(_0x4bc533){}else{const _0x4020d7=a72_0x5d58('0x24')+_0x1f84e0['file_name']+a72_0x5d58('0x25');_0x439bad[a72_0x5d58('0x26')](fs_1[a72_0x5d58('0x8')][a72_0x5d58('0x27')](_0x4020d7));_0x1f84e0[a72_0x5d58('0x28')]=0x1;_0x1f84e0[a72_0x5d58('0x29')]();console[a72_0x5d58('0xd')](a72_0x5d58('0x2a')+_0x1f84e0[a72_0x5d58('0x2b')]);}});});_0x35b7da['on']('error',function(_0x68e65d){});_0x35b7da[a72_0x5d58('0x1b')]({'host':a72_0x5d58('0x1c'),'port':0x15,'user':'ipd','password':'ipd'});}else{}});_0x253ed7[a72_0x5d58('0x15')]({'data':[]});}[a72_0x5d58('0xc')](_0x45b0dd,_0x5e9b6a,_0x3774ca){sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')][a72_0x5d58('0x17')][a72_0x5d58('0x2c')]({'where':{'status':0x1}})[a72_0x5d58('0x1f')](_0x28a1b2=>{if(_0x28a1b2){const _0x567082=a72_0x5d58('0x24')+_0x28a1b2[a72_0x5d58('0x22')]+a72_0x5d58('0x25');if(fs_1[a72_0x5d58('0x8')][a72_0x5d58('0x2d')](_0x567082)){const _0x15372d=fs_1['default'][a72_0x5d58('0x2e')](_0x567082);const _0x3075c3=_0x15372d[a72_0x5d58('0x16')];console[a72_0x5d58('0xd')](a72_0x5d58('0x2f')+_0x567082);console['log'](a72_0x5d58('0x30')+_0x3075c3);if(_0x3075c3>0x0){fs_1[a72_0x5d58('0x8')][a72_0x5d58('0x31')](_0x567082,a72_0x5d58('0x32'),function(_0x3a7f41,_0x28b4bb){if(_0x3a7f41){_0x28a1b2['status']=null;}else{try{const _0x69be70=JSON[a72_0x5d58('0x33')](_0x28b4bb);for(const _0x4f6873 of _0x69be70['Data'][0x0]['CountingInfo']){const _0x464824=_0x4f6873['In'];const _0x1eeb3f=_0x4f6873['Out'];const _0x3f9e6c=Date[a72_0x5d58('0x33')](_0x4f6873[a72_0x5d58('0x34')]);if(_0x464824>0x0){sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')]['passCountingsModel'][a72_0x5d58('0x35')]({'amount':_0x464824,'counted_at':_0x3f9e6c});}if(_0x1eeb3f>0x0){sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')][a72_0x5d58('0x36')]['create']({'amount':_0x1eeb3f*-0x1,'counted_at':_0x3f9e6c});}}_0x28a1b2[a72_0x5d58('0x28')]=0x2;}catch(_0x4a489d){_0x28a1b2[a72_0x5d58('0x28')]=null;}}_0x28a1b2[a72_0x5d58('0x29')]();});}else{_0x28a1b2[a72_0x5d58('0x28')]=null;_0x28a1b2[a72_0x5d58('0x29')]();}}else{_0x28a1b2['status']=null;_0x28a1b2[a72_0x5d58('0x29')]();}}else{}});_0x5e9b6a['json']({'data':[]});}['uploadEvent'](_0x38b6a8,_0x20dc8e,_0x183cae){const _0x1838cc=require(a72_0x5d58('0x37'));const _0x6b31b8=_0x38b6a8[a72_0x5d58('0x38')]['path'];const _0x25290b=UPLOAD_PATH+'/'+_0x38b6a8[a72_0x5d58('0x38')][a72_0x5d58('0x39')]+a72_0x5d58('0x3a');const _0x3c79b0=fs_1[a72_0x5d58('0x8')][a72_0x5d58('0x3b')](_0x6b31b8);const _0x43099b=fs_1['default'][a72_0x5d58('0x27')](_0x25290b);const _0x38bd74=_0x1838cc[a72_0x5d58('0x3c')]();console['log'](_0x38b6a8[a72_0x5d58('0x38')]);_0x3c79b0[a72_0x5d58('0x26')](_0x38bd74)['pipe'](_0x43099b)['on']('finish',_0x407d67=>{if(_0x407d67)return console[a72_0x5d58('0x3d')](_0x407d67);else{const _0x5f1177=fs_1[a72_0x5d58('0x8')]['statSync'](_0x6b31b8);const _0xe659e=_0x5f1177['size'];if(_0xe659e>0x0){fs_1[a72_0x5d58('0x8')][a72_0x5d58('0x31')](_0x25290b,a72_0x5d58('0x32'),function(_0x407d67,_0x4ec1b9){if(_0x407d67){return console[a72_0x5d58('0x3d')](_0x407d67);}else{try{const _0x387c30=JSON[a72_0x5d58('0x33')](_0x4ec1b9);console[a72_0x5d58('0xd')](_0x387c30);const _0xfb4327=_0x387c30[a72_0x5d58('0x3e')][0x0][a72_0x5d58('0x3f')];const _0x37a809=_0x387c30[a72_0x5d58('0x3e')][0x0]['hora'];const _0x396c10=moment_1['default'](_0xfb4327+'\x20'+_0x37a809+'\x20-05:00',a72_0x5d58('0x40'));const _0x58f3c4=parseFloat(_0x387c30[a72_0x5d58('0x3e')][0x0][a72_0x5d58('0x41')][a72_0x5d58('0x42')](',','.'));const _0x3d05ce=parseFloat(_0x387c30[a72_0x5d58('0x3e')][0x0][a72_0x5d58('0x43')][a72_0x5d58('0x42')](',','.'));const _0x31778f=_0x387c30[a72_0x5d58('0x3e')][0x0][a72_0x5d58('0x44')];const _0x3278bd=_0x387c30[a72_0x5d58('0x3e')][0x0]['puerta'][0x0][a72_0x5d58('0x45')];const _0x2859c3=_0x387c30[a72_0x5d58('0x3e')][0x0]['puerta'][0x0][a72_0x5d58('0x46')];console[a72_0x5d58('0xd')](_0x58f3c4);console[a72_0x5d58('0xd')](_0x3d05ce);console[a72_0x5d58('0xd')](_0x31778f);console[a72_0x5d58('0xd')](_0x3278bd);console[a72_0x5d58('0xd')](_0x2859c3);console[a72_0x5d58('0xd')](_0x396c10);if(_0x3278bd>0x0){sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')][a72_0x5d58('0x36')]['create']({'amount':_0x3278bd,'counted_at':_0x396c10});}sequelize_utils_1[a72_0x5d58('0x8')][a72_0x5d58('0x1e')]['locationPointsModel'][a72_0x5d58('0x35')]({'device_id':null,'lat':''+_0x58f3c4,'lon':''+_0x3d05ce,'tracked_at':_0x396c10});}catch(_0x2d06f9){return console[a72_0x5d58('0x3d')](_0x2d06f9);}}});}}});_0x20dc8e['json']({'status':0x1,'data':_0x38b6a8['file']});}}exports['default']=SyncFilesController;