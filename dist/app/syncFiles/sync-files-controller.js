var a73_0x5500=['name','size','models','syncFilesModel','spread','error','ftp.vivotek.com','ipd','json','downloadFtp','then','connected:','file_name','get','colombia/','end','media/','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','fileName','connect','existsSync','statSync','fileName:\x20','fileSizeInBytes:\x20','readFile','utf8','parse','Data','CountingInfo','EndTime','passCountingsModel','create','uploadEvent','zlib','file','path','.json','createReadStream','createGunzip','finish','eventos','hora','\x20-05:00','latitud','replace','longitud','velocidad','puerta','ingresos','salidas','locationPointsModel','__importDefault','__esModule','defineProperty','ftp','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','media','default','bind','processFtp','log','connecting','ready','connected','list','colombia'];(function(_0x2dcda2,_0x26da7d){var _0x37bc1b=function(_0x97c909){while(--_0x97c909){_0x2dcda2['push'](_0x2dcda2['shift']());}};_0x37bc1b(++_0x26da7d);}(a73_0x5500,0x1ee));var a73_0x18c1=function(_0x1ac835,_0x4a2c17){_0x1ac835=_0x1ac835-0x0;var _0x270550=a73_0x5500[_0x1ac835];return _0x270550;};'use strict';var __importDefault=this&&this[a73_0x18c1('0x0')]||function(_0x5a0eb2){return _0x5a0eb2&&_0x5a0eb2[a73_0x18c1('0x1')]?_0x5a0eb2:{'default':_0x5a0eb2};};Object[a73_0x18c1('0x2')](exports,a73_0x18c1('0x1'),{'value':!![]});const ftp_1=__importDefault(require(a73_0x18c1('0x3')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a73_0x18c1('0x4')));const sequelize_utils_1=__importDefault(require(a73_0x18c1('0x5')));const moment_1=__importDefault(require(a73_0x18c1('0x6')));const UPLOAD_PATH=a73_0x18c1('0x7');class SyncFilesController extends controller_utils_1[a73_0x18c1('0x8')]{constructor(_0x52030f){super(_0x52030f,null);this['syncFtp']=this['syncFtp'][a73_0x18c1('0x9')](this);this['downloadFtp']=this['downloadFtp'][a73_0x18c1('0x9')](this);this[a73_0x18c1('0xa')]=this[a73_0x18c1('0xa')][a73_0x18c1('0x9')](this);}['syncFtp'](_0xff42fa,_0x506e2a,_0x592c2c){console[a73_0x18c1('0xb')](a73_0x18c1('0xc'));const _0x31339b=[];const _0x81129b=new ftp_1[(a73_0x18c1('0x8'))]();_0x81129b['on'](a73_0x18c1('0xd'),function(){console[a73_0x18c1('0xb')](a73_0x18c1('0xe'));_0x81129b[a73_0x18c1('0xf')](a73_0x18c1('0x10'),![],function(_0x4a3798,_0x6d0589){if(_0x4a3798){console[a73_0x18c1('0xb')](_0x4a3798);}else{for(const _0x5975c6 of _0x6d0589){if(_0x5975c6[a73_0x18c1('0x11')]['endsWith']('json')&&_0x5975c6[a73_0x18c1('0x12')]>0x0){sequelize_utils_1[a73_0x18c1('0x8')][a73_0x18c1('0x13')][a73_0x18c1('0x14')]['findOrCreate']({'where':{'file_name':_0x5975c6[a73_0x18c1('0x11')]}})[a73_0x18c1('0x15')]((_0x49db59,_0x453704)=>{if(_0x453704){_0x31339b['push'](_0x49db59);}});}}}});});_0x81129b['on'](a73_0x18c1('0x16'),function(_0x299a79){});_0x81129b['connect']({'host':a73_0x18c1('0x17'),'port':0x15,'user':a73_0x18c1('0x18'),'password':'ipd'});_0x506e2a[a73_0x18c1('0x19')]({'data':[]});}[a73_0x18c1('0x1a')](_0x2bf86a,_0x95299a,_0x5d0144){sequelize_utils_1[a73_0x18c1('0x8')]['models'][a73_0x18c1('0x14')]['findOne']({'where':{'status':null}})[a73_0x18c1('0x1b')](_0x486c50=>{if(_0x486c50){const _0xec38bf=new ftp_1['default']();_0xec38bf['on'](a73_0x18c1('0xd'),function(){console[a73_0x18c1('0xb')](a73_0x18c1('0x1c')+_0x486c50[a73_0x18c1('0x1d')]);_0xec38bf[a73_0x18c1('0x1e')](a73_0x18c1('0x1f')+_0x486c50[a73_0x18c1('0x1d')],function(_0x5493ee,_0x337043){_0xec38bf[a73_0x18c1('0x20')]();if(_0x5493ee){}else{const _0x7d3d87=a73_0x18c1('0x21')+_0x486c50['file_name']+a73_0x18c1('0x22');_0x337043[a73_0x18c1('0x23')](fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x24')](_0x7d3d87));_0x486c50[a73_0x18c1('0x25')]=0x1;_0x486c50[a73_0x18c1('0x26')]();console[a73_0x18c1('0xb')](a73_0x18c1('0x27')+_0x486c50[a73_0x18c1('0x28')]);}});});_0xec38bf['on']('error',function(_0x2cb71a){});_0xec38bf[a73_0x18c1('0x29')]({'host':'ftp.vivotek.com','port':0x15,'user':a73_0x18c1('0x18'),'password':a73_0x18c1('0x18')});}else{}});_0x95299a[a73_0x18c1('0x19')]({'data':[]});}[a73_0x18c1('0xa')](_0x4ca5b5,_0x3c94ac,_0x511fc7){sequelize_utils_1['default']['models'][a73_0x18c1('0x14')]['findOne']({'where':{'status':0x1}})[a73_0x18c1('0x1b')](_0x304ff7=>{if(_0x304ff7){const _0x47da54=a73_0x18c1('0x21')+_0x304ff7[a73_0x18c1('0x1d')]+'.txt';if(fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x2a')](_0x47da54)){const _0x46f634=fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x2b')](_0x47da54);const _0x541b29=_0x46f634[a73_0x18c1('0x12')];console[a73_0x18c1('0xb')](a73_0x18c1('0x2c')+_0x47da54);console['log'](a73_0x18c1('0x2d')+_0x541b29);if(_0x541b29>0x0){fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x2e')](_0x47da54,a73_0x18c1('0x2f'),function(_0x56d49a,_0x31d63a){if(_0x56d49a){_0x304ff7['status']=null;}else{try{const _0xc07986=JSON[a73_0x18c1('0x30')](_0x31d63a);for(const _0x3105f8 of _0xc07986[a73_0x18c1('0x31')][0x0][a73_0x18c1('0x32')]){const _0x506a61=_0x3105f8['In'];const _0x63ffb2=_0x3105f8['Out'];const _0x19b813=Date[a73_0x18c1('0x30')](_0x3105f8[a73_0x18c1('0x33')]);if(_0x506a61>0x0){sequelize_utils_1[a73_0x18c1('0x8')]['models'][a73_0x18c1('0x34')][a73_0x18c1('0x35')]({'amount':_0x506a61,'counted_at':_0x19b813});}if(_0x63ffb2>0x0){sequelize_utils_1[a73_0x18c1('0x8')][a73_0x18c1('0x13')][a73_0x18c1('0x34')]['create']({'amount':_0x63ffb2*-0x1,'counted_at':_0x19b813});}}_0x304ff7[a73_0x18c1('0x25')]=0x2;}catch(_0x11ef03){_0x304ff7[a73_0x18c1('0x25')]=null;}}_0x304ff7[a73_0x18c1('0x26')]();});}else{_0x304ff7['status']=null;_0x304ff7[a73_0x18c1('0x26')]();}}else{_0x304ff7[a73_0x18c1('0x25')]=null;_0x304ff7[a73_0x18c1('0x26')]();}}else{}});_0x3c94ac['json']({'data':[]});}[a73_0x18c1('0x36')](_0x172ffd,_0x1410bd,_0x136265){const _0x25f6a8=require(a73_0x18c1('0x37'));const _0x5b4821=_0x172ffd[a73_0x18c1('0x38')][a73_0x18c1('0x39')];const _0x10a761=UPLOAD_PATH+'/'+_0x172ffd[a73_0x18c1('0x38')]['filename']+a73_0x18c1('0x3a');const _0x120fac=fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x3b')](_0x5b4821);const _0x339ab3=fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x24')](_0x10a761);const _0x62df8e=_0x25f6a8[a73_0x18c1('0x3c')]();console[a73_0x18c1('0xb')](_0x172ffd[a73_0x18c1('0x38')]);_0x120fac[a73_0x18c1('0x23')](_0x62df8e)[a73_0x18c1('0x23')](_0x339ab3)['on'](a73_0x18c1('0x3d'),_0x21843c=>{if(_0x21843c)return console['error'](_0x21843c);else{const _0x4602cf=fs_1['default'][a73_0x18c1('0x2b')](_0x5b4821);const _0x7d075=_0x4602cf[a73_0x18c1('0x12')];if(_0x7d075>0x0){fs_1[a73_0x18c1('0x8')][a73_0x18c1('0x2e')](_0x10a761,a73_0x18c1('0x2f'),function(_0x21843c,_0x545f34){if(_0x21843c){return console[a73_0x18c1('0x16')](_0x21843c);}else{try{const _0xf5bdb8=JSON['parse'](_0x545f34);console['log'](_0xf5bdb8);const _0x57471e=_0xf5bdb8['eventos'][0x0]['fecha'];const _0x182eb6=_0xf5bdb8[a73_0x18c1('0x3e')][0x0][a73_0x18c1('0x3f')];const _0x44e4dc=moment_1[a73_0x18c1('0x8')](_0x57471e+'\x20'+_0x182eb6+a73_0x18c1('0x40'),'YYYYMMDD\x20HHmmss\x20Z');const _0x257977=parseFloat(_0xf5bdb8[a73_0x18c1('0x3e')][0x0][a73_0x18c1('0x41')][a73_0x18c1('0x42')](',','.'));const _0x129ab6=parseFloat(_0xf5bdb8[a73_0x18c1('0x3e')][0x0][a73_0x18c1('0x43')][a73_0x18c1('0x42')](',','.'));const _0x319508=_0xf5bdb8['eventos'][0x0][a73_0x18c1('0x44')];const _0x23c8ee=_0xf5bdb8[a73_0x18c1('0x3e')][0x0][a73_0x18c1('0x45')][0x0][a73_0x18c1('0x46')];const _0x87e1d0=_0xf5bdb8['eventos'][0x0][a73_0x18c1('0x45')][0x0][a73_0x18c1('0x47')];console[a73_0x18c1('0xb')](_0x257977);console[a73_0x18c1('0xb')](_0x129ab6);console['log'](_0x319508);console['log'](_0x23c8ee);console[a73_0x18c1('0xb')](_0x87e1d0);console[a73_0x18c1('0xb')](_0x44e4dc);if(_0x23c8ee>0x0){sequelize_utils_1[a73_0x18c1('0x8')][a73_0x18c1('0x13')][a73_0x18c1('0x34')][a73_0x18c1('0x35')]({'amount':_0x23c8ee,'counted_at':_0x44e4dc});}sequelize_utils_1[a73_0x18c1('0x8')][a73_0x18c1('0x13')][a73_0x18c1('0x48')]['create']({'device_id':null,'lat':''+_0x257977,'lon':''+_0x129ab6,'tracked_at':_0x44e4dc});}catch(_0xa8af73){return console[a73_0x18c1('0x16')](_0xa8af73);}}});}}});_0x1410bd[a73_0x18c1('0x19')]({'status':0x1,'data':_0x172ffd[a73_0x18c1('0x38')]});}}exports[a73_0x18c1('0x8')]=SyncFilesController;