var a72_0x16f1=['processFtp','log','ready','connected','colombia','endsWith','models','syncFilesModel','findOrCreate','name','push','error','ftp.vivotek.com','ipd','json','then','connected:','file_name','get','colombia/','end','media/','.txt','pipe','createWriteStream','status','save','fileName','connect','findOne','existsSync','statSync','size','fileName:\x20','fileSizeInBytes:\x20','utf8','parse','Data','CountingInfo','Out','passCountingsModel','create','zlib','file','path','.json','readFile','eventos','fecha','hora','YYYYMMDD\x20HHmmss\x20Z','replace','longitud','puerta','salidas','locationPointsModel','__importDefault','__esModule','ftp','../../infrastructure/controller-utils','moment','media','default','syncFtp','bind','downloadFtp'];(function(_0x1fa6e3,_0x7cda0c){var _0x53d754=function(_0x2fcdf0){while(--_0x2fcdf0){_0x1fa6e3['push'](_0x1fa6e3['shift']());}};_0x53d754(++_0x7cda0c);}(a72_0x16f1,0x7a));var a72_0x4d2b=function(_0x2be0b1,_0x22d9a3){_0x2be0b1=_0x2be0b1-0x0;var _0x23be37=a72_0x16f1[_0x2be0b1];return _0x23be37;};'use strict';var __importDefault=this&&this[a72_0x4d2b('0x0')]||function(_0x2e641f){return _0x2e641f&&_0x2e641f[a72_0x4d2b('0x1')]?_0x2e641f:{'default':_0x2e641f};};Object['defineProperty'](exports,a72_0x4d2b('0x1'),{'value':!![]});const ftp_1=__importDefault(require(a72_0x4d2b('0x2')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a72_0x4d2b('0x3')));const sequelize_utils_1=__importDefault(require('../../infrastructure/sequelize-utils'));const moment_1=__importDefault(require(a72_0x4d2b('0x4')));const UPLOAD_PATH=a72_0x4d2b('0x5');class SyncFilesController extends controller_utils_1[a72_0x4d2b('0x6')]{constructor(_0x32c0dc){super(_0x32c0dc,null);this[a72_0x4d2b('0x7')]=this[a72_0x4d2b('0x7')][a72_0x4d2b('0x8')](this);this[a72_0x4d2b('0x9')]=this[a72_0x4d2b('0x9')][a72_0x4d2b('0x8')](this);this[a72_0x4d2b('0xa')]=this['processFtp'][a72_0x4d2b('0x8')](this);}[a72_0x4d2b('0x7')](_0x2e3b32,_0x21a6fe,_0x1d2fdd){console[a72_0x4d2b('0xb')]('connecting');const _0x4fb026=[];const _0x36058e=new ftp_1[(a72_0x4d2b('0x6'))]();_0x36058e['on'](a72_0x4d2b('0xc'),function(){console[a72_0x4d2b('0xb')](a72_0x4d2b('0xd'));_0x36058e['list'](a72_0x4d2b('0xe'),![],function(_0x2a8858,_0x49d040){if(_0x2a8858){console[a72_0x4d2b('0xb')](_0x2a8858);}else{for(const _0xcb85d9 of _0x49d040){if(_0xcb85d9['name'][a72_0x4d2b('0xf')]('json')&&_0xcb85d9['size']>0x0){sequelize_utils_1['default'][a72_0x4d2b('0x10')][a72_0x4d2b('0x11')][a72_0x4d2b('0x12')]({'where':{'file_name':_0xcb85d9[a72_0x4d2b('0x13')]}})['spread']((_0x244064,_0x14af39)=>{if(_0x14af39){_0x4fb026[a72_0x4d2b('0x14')](_0x244064);}});}}}});});_0x36058e['on'](a72_0x4d2b('0x15'),function(_0x3a99b6){});_0x36058e['connect']({'host':a72_0x4d2b('0x16'),'port':0x15,'user':a72_0x4d2b('0x17'),'password':'ipd'});_0x21a6fe[a72_0x4d2b('0x18')]({'data':[]});}[a72_0x4d2b('0x9')](_0x13e978,_0x3c98ba,_0x2b3bb4){sequelize_utils_1[a72_0x4d2b('0x6')]['models']['syncFilesModel']['findOne']({'where':{'status':null}})[a72_0x4d2b('0x19')](_0x58d651=>{if(_0x58d651){const _0x481a10=new ftp_1[(a72_0x4d2b('0x6'))]();_0x481a10['on'](a72_0x4d2b('0xc'),function(){console[a72_0x4d2b('0xb')](a72_0x4d2b('0x1a')+_0x58d651[a72_0x4d2b('0x1b')]);_0x481a10[a72_0x4d2b('0x1c')](a72_0x4d2b('0x1d')+_0x58d651[a72_0x4d2b('0x1b')],function(_0x37a665,_0x2cd96b){_0x481a10[a72_0x4d2b('0x1e')]();if(_0x37a665){}else{const _0x28b157=a72_0x4d2b('0x1f')+_0x58d651[a72_0x4d2b('0x1b')]+a72_0x4d2b('0x20');_0x2cd96b[a72_0x4d2b('0x21')](fs_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x22')](_0x28b157));_0x58d651[a72_0x4d2b('0x23')]=0x1;_0x58d651[a72_0x4d2b('0x24')]();console[a72_0x4d2b('0xb')]('Downloaded:\x20'+_0x58d651[a72_0x4d2b('0x25')]);}});});_0x481a10['on'](a72_0x4d2b('0x15'),function(_0x3c61f0){});_0x481a10[a72_0x4d2b('0x26')]({'host':a72_0x4d2b('0x16'),'port':0x15,'user':a72_0x4d2b('0x17'),'password':a72_0x4d2b('0x17')});}else{}});_0x3c98ba[a72_0x4d2b('0x18')]({'data':[]});}['processFtp'](_0x5da2af,_0x5d51e5,_0x4338bd){sequelize_utils_1[a72_0x4d2b('0x6')]['models'][a72_0x4d2b('0x11')][a72_0x4d2b('0x27')]({'where':{'status':0x1}})[a72_0x4d2b('0x19')](_0x17dfcd=>{if(_0x17dfcd){const _0x12cadb=a72_0x4d2b('0x1f')+_0x17dfcd[a72_0x4d2b('0x1b')]+a72_0x4d2b('0x20');if(fs_1['default'][a72_0x4d2b('0x28')](_0x12cadb)){const _0x3dd5fd=fs_1['default'][a72_0x4d2b('0x29')](_0x12cadb);const _0x377bcc=_0x3dd5fd[a72_0x4d2b('0x2a')];console['log'](a72_0x4d2b('0x2b')+_0x12cadb);console[a72_0x4d2b('0xb')](a72_0x4d2b('0x2c')+_0x377bcc);if(_0x377bcc>0x0){fs_1[a72_0x4d2b('0x6')]['readFile'](_0x12cadb,a72_0x4d2b('0x2d'),function(_0x6d7460,_0x54d70d){if(_0x6d7460){_0x17dfcd[a72_0x4d2b('0x23')]=null;}else{try{const _0x4f7942=JSON[a72_0x4d2b('0x2e')](_0x54d70d);for(const _0x351a19 of _0x4f7942[a72_0x4d2b('0x2f')][0x0][a72_0x4d2b('0x30')]){const _0x5860bb=_0x351a19['In'];const _0x34d6f3=_0x351a19[a72_0x4d2b('0x31')];const _0xa045d9=Date[a72_0x4d2b('0x2e')](_0x351a19['EndTime']);if(_0x5860bb>0x0){sequelize_utils_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x10')][a72_0x4d2b('0x32')]['create']({'amount':_0x5860bb,'counted_at':_0xa045d9});}if(_0x34d6f3>0x0){sequelize_utils_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x10')][a72_0x4d2b('0x32')][a72_0x4d2b('0x33')]({'amount':_0x34d6f3*-0x1,'counted_at':_0xa045d9});}}_0x17dfcd[a72_0x4d2b('0x23')]=0x2;}catch(_0x476f09){_0x17dfcd[a72_0x4d2b('0x23')]=null;}}_0x17dfcd[a72_0x4d2b('0x24')]();});}else{_0x17dfcd['status']=null;_0x17dfcd['save']();}}else{_0x17dfcd[a72_0x4d2b('0x23')]=null;_0x17dfcd[a72_0x4d2b('0x24')]();}}else{}});_0x5d51e5[a72_0x4d2b('0x18')]({'data':[]});}['uploadEvent'](_0x23576b,_0x14a80d,_0x2b5c7c){const _0x5712cc=require(a72_0x4d2b('0x34'));const _0x28f06c=_0x23576b[a72_0x4d2b('0x35')][a72_0x4d2b('0x36')];const _0x5c5e30=UPLOAD_PATH+'/'+_0x23576b[a72_0x4d2b('0x35')]['filename']+a72_0x4d2b('0x37');const _0x26e08f=fs_1[a72_0x4d2b('0x6')]['createReadStream'](_0x28f06c);const _0x18dbe1=fs_1['default'][a72_0x4d2b('0x22')](_0x5c5e30);const _0x1c2d99=_0x5712cc['createGunzip']();console['log'](_0x23576b[a72_0x4d2b('0x35')]);_0x26e08f['pipe'](_0x1c2d99)[a72_0x4d2b('0x21')](_0x18dbe1)['on']('finish',_0x5ab355=>{if(_0x5ab355)return console[a72_0x4d2b('0x15')](_0x5ab355);else{const _0x38f983=fs_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x29')](_0x28f06c);const _0x66626c=_0x38f983[a72_0x4d2b('0x2a')];if(_0x66626c>0x0){fs_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x38')](_0x5c5e30,a72_0x4d2b('0x2d'),function(_0x5ab355,_0x46924c){if(_0x5ab355){return console[a72_0x4d2b('0x15')](_0x5ab355);}else{try{const _0x498fd4=JSON[a72_0x4d2b('0x2e')](_0x46924c);console[a72_0x4d2b('0xb')](_0x498fd4);const _0x5d2619=_0x498fd4[a72_0x4d2b('0x39')][0x0][a72_0x4d2b('0x3a')];const _0xa29528=_0x498fd4['eventos'][0x0][a72_0x4d2b('0x3b')];const _0x2dc8df=moment_1[a72_0x4d2b('0x6')](_0x5d2619+'\x20'+_0xa29528+'\x20-05:00',a72_0x4d2b('0x3c'));const _0x5cd058=parseFloat(_0x498fd4[a72_0x4d2b('0x39')][0x0]['latitud'][a72_0x4d2b('0x3d')](',','.'));const _0x20a518=parseFloat(_0x498fd4[a72_0x4d2b('0x39')][0x0][a72_0x4d2b('0x3e')][a72_0x4d2b('0x3d')](',','.'));const _0x3f2edc=_0x498fd4['eventos'][0x0]['velocidad'];const _0x467ccb=_0x498fd4[a72_0x4d2b('0x39')][0x0][a72_0x4d2b('0x3f')][0x0]['ingresos'];const _0x34fa7c=_0x498fd4['eventos'][0x0][a72_0x4d2b('0x3f')][0x0][a72_0x4d2b('0x40')];console['log'](_0x5cd058);console[a72_0x4d2b('0xb')](_0x20a518);console[a72_0x4d2b('0xb')](_0x3f2edc);console[a72_0x4d2b('0xb')](_0x467ccb);console[a72_0x4d2b('0xb')](_0x34fa7c);console['log'](_0x2dc8df);if(_0x467ccb>0x0){sequelize_utils_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x10')]['passCountingsModel'][a72_0x4d2b('0x33')]({'amount':_0x467ccb,'counted_at':_0x2dc8df});}sequelize_utils_1[a72_0x4d2b('0x6')][a72_0x4d2b('0x10')][a72_0x4d2b('0x41')][a72_0x4d2b('0x33')]({'device_id':null,'lat':''+_0x5cd058,'lon':''+_0x20a518,'tracked_at':_0x2dc8df});}catch(_0xcbf6cb){return console[a72_0x4d2b('0x15')](_0xcbf6cb);}}});}}});_0x14a80d['json']({'status':0x1,'data':_0x23576b[a72_0x4d2b('0x35')]});}}exports['default']=SyncFilesController;