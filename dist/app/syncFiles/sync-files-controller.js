var a72_0x1b1b=['ready','connected','list','colombia','name','endsWith','json','size','models','findOrCreate','push','error','connect','ftp.vivotek.com','ipd','syncFilesModel','findOne','then','file_name','get','colombia/','.txt','status','Downloaded:\x20','fileName','media/','existsSync','statSync','fileName:\x20','fileSizeInBytes:\x20','readFile','parse','CountingInfo','create','save','uploadEvent','zlib','file','path','filename','.json','createReadStream','createGunzip','pipe','finish','fecha','hora','\x20-05:00','latitud','replace','longitud','velocidad','eventos','puerta','ingresos','passCountingsModel','locationPointsModel','__importDefault','__esModule','defineProperty','ftp','../../infrastructure/controller-utils','../../infrastructure/sequelize-utils','moment','syncFtp','bind','downloadFtp','processFtp','log','default'];(function(_0x32af95,_0x3ff7f8){var _0x73bc7c=function(_0x4cf26e){while(--_0x4cf26e){_0x32af95['push'](_0x32af95['shift']());}};_0x73bc7c(++_0x3ff7f8);}(a72_0x1b1b,0x7f));var a72_0x377b=function(_0x303898,_0x1a633a){_0x303898=_0x303898-0x0;var _0x542c15=a72_0x1b1b[_0x303898];return _0x542c15;};'use strict';var __importDefault=this&&this[a72_0x377b('0x0')]||function(_0x108dbd){return _0x108dbd&&_0x108dbd[a72_0x377b('0x1')]?_0x108dbd:{'default':_0x108dbd};};Object[a72_0x377b('0x2')](exports,a72_0x377b('0x1'),{'value':!![]});const ftp_1=__importDefault(require(a72_0x377b('0x3')));const fs_1=__importDefault(require('fs'));const controller_utils_1=__importDefault(require(a72_0x377b('0x4')));const sequelize_utils_1=__importDefault(require(a72_0x377b('0x5')));const moment_1=__importDefault(require(a72_0x377b('0x6')));const UPLOAD_PATH='media';class SyncFilesController extends controller_utils_1['default']{constructor(_0x1bde4c){super(_0x1bde4c,null);this[a72_0x377b('0x7')]=this[a72_0x377b('0x7')][a72_0x377b('0x8')](this);this[a72_0x377b('0x9')]=this[a72_0x377b('0x9')][a72_0x377b('0x8')](this);this['processFtp']=this[a72_0x377b('0xa')]['bind'](this);}[a72_0x377b('0x7')](_0x372e05,_0x51b689,_0x1a80b7){console[a72_0x377b('0xb')]('connecting');const _0x511bac=[];const _0x164103=new ftp_1[(a72_0x377b('0xc'))]();_0x164103['on'](a72_0x377b('0xd'),function(){console[a72_0x377b('0xb')](a72_0x377b('0xe'));_0x164103[a72_0x377b('0xf')](a72_0x377b('0x10'),![],function(_0x5cb588,_0x31790b){if(_0x5cb588){console[a72_0x377b('0xb')](_0x5cb588);}else{for(const _0x3223b7 of _0x31790b){if(_0x3223b7[a72_0x377b('0x11')][a72_0x377b('0x12')](a72_0x377b('0x13'))&&_0x3223b7[a72_0x377b('0x14')]>0x0){sequelize_utils_1['default'][a72_0x377b('0x15')]['syncFilesModel'][a72_0x377b('0x16')]({'where':{'file_name':_0x3223b7[a72_0x377b('0x11')]}})['spread']((_0x2e8bd2,_0x27ad3d)=>{if(_0x27ad3d){_0x511bac[a72_0x377b('0x17')](_0x2e8bd2);}});}}}});});_0x164103['on'](a72_0x377b('0x18'),function(_0x21ca25){});_0x164103[a72_0x377b('0x19')]({'host':a72_0x377b('0x1a'),'port':0x15,'user':a72_0x377b('0x1b'),'password':a72_0x377b('0x1b')});_0x51b689[a72_0x377b('0x13')]({'data':[]});}[a72_0x377b('0x9')](_0x22edd6,_0x31bc60,_0x52854f){sequelize_utils_1[a72_0x377b('0xc')][a72_0x377b('0x15')][a72_0x377b('0x1c')][a72_0x377b('0x1d')]({'where':{'status':null}})[a72_0x377b('0x1e')](_0xe5aef6=>{if(_0xe5aef6){const _0x16bcea=new ftp_1[(a72_0x377b('0xc'))]();_0x16bcea['on']('ready',function(){console['log']('connected:'+_0xe5aef6[a72_0x377b('0x1f')]);_0x16bcea[a72_0x377b('0x20')](a72_0x377b('0x21')+_0xe5aef6[a72_0x377b('0x1f')],function(_0x20aa9c,_0x6b8f7e){_0x16bcea['end']();if(_0x20aa9c){}else{const _0x2fa207='media/'+_0xe5aef6[a72_0x377b('0x1f')]+a72_0x377b('0x22');_0x6b8f7e['pipe'](fs_1[a72_0x377b('0xc')]['createWriteStream'](_0x2fa207));_0xe5aef6[a72_0x377b('0x23')]=0x1;_0xe5aef6['save']();console['log'](a72_0x377b('0x24')+_0xe5aef6[a72_0x377b('0x25')]);}});});_0x16bcea['on'](a72_0x377b('0x18'),function(_0x2b524f){});_0x16bcea[a72_0x377b('0x19')]({'host':a72_0x377b('0x1a'),'port':0x15,'user':'ipd','password':a72_0x377b('0x1b')});}else{}});_0x31bc60[a72_0x377b('0x13')]({'data':[]});}[a72_0x377b('0xa')](_0xa57ff3,_0x3dc729,_0xc9591a){sequelize_utils_1[a72_0x377b('0xc')][a72_0x377b('0x15')]['syncFilesModel'][a72_0x377b('0x1d')]({'where':{'status':0x1}})[a72_0x377b('0x1e')](_0xa434b=>{if(_0xa434b){const _0x35fb54=a72_0x377b('0x26')+_0xa434b[a72_0x377b('0x1f')]+a72_0x377b('0x22');if(fs_1['default'][a72_0x377b('0x27')](_0x35fb54)){const _0x1f19e3=fs_1[a72_0x377b('0xc')][a72_0x377b('0x28')](_0x35fb54);const _0xfaefaf=_0x1f19e3[a72_0x377b('0x14')];console[a72_0x377b('0xb')](a72_0x377b('0x29')+_0x35fb54);console[a72_0x377b('0xb')](a72_0x377b('0x2a')+_0xfaefaf);if(_0xfaefaf>0x0){fs_1[a72_0x377b('0xc')][a72_0x377b('0x2b')](_0x35fb54,'utf8',function(_0x723028,_0x20a374){if(_0x723028){_0xa434b['status']=null;}else{try{const _0x5d6400=JSON[a72_0x377b('0x2c')](_0x20a374);for(const _0x2615ac of _0x5d6400['Data'][0x0][a72_0x377b('0x2d')]){const _0x4dccf8=_0x2615ac['In'];const _0x2286c3=_0x2615ac['Out'];const _0x3e8804=Date[a72_0x377b('0x2c')](_0x2615ac['EndTime']);if(_0x4dccf8>0x0){sequelize_utils_1[a72_0x377b('0xc')]['models']['passCountingsModel'][a72_0x377b('0x2e')]({'amount':_0x4dccf8,'counted_at':_0x3e8804});}if(_0x2286c3>0x0){sequelize_utils_1[a72_0x377b('0xc')][a72_0x377b('0x15')]['passCountingsModel']['create']({'amount':_0x2286c3*-0x1,'counted_at':_0x3e8804});}}_0xa434b[a72_0x377b('0x23')]=0x2;}catch(_0xb319e4){_0xa434b['status']=null;}}_0xa434b[a72_0x377b('0x2f')]();});}else{_0xa434b['status']=null;_0xa434b[a72_0x377b('0x2f')]();}}else{_0xa434b[a72_0x377b('0x23')]=null;_0xa434b[a72_0x377b('0x2f')]();}}else{}});_0x3dc729[a72_0x377b('0x13')]({'data':[]});}[a72_0x377b('0x30')](_0x58d735,_0x35f22c,_0x40ae84){const _0x3efe23=require(a72_0x377b('0x31'));const _0x2b2ef8=_0x58d735[a72_0x377b('0x32')][a72_0x377b('0x33')];const _0x16430a=UPLOAD_PATH+'/'+_0x58d735[a72_0x377b('0x32')][a72_0x377b('0x34')]+a72_0x377b('0x35');const _0x1828e4=fs_1[a72_0x377b('0xc')][a72_0x377b('0x36')](_0x2b2ef8);const _0x26bfa5=fs_1['default']['createWriteStream'](_0x16430a);const _0x31a0fc=_0x3efe23[a72_0x377b('0x37')]();console[a72_0x377b('0xb')](_0x58d735[a72_0x377b('0x32')]);_0x1828e4[a72_0x377b('0x38')](_0x31a0fc)[a72_0x377b('0x38')](_0x26bfa5)['on'](a72_0x377b('0x39'),_0x5633c4=>{if(_0x5633c4)return console['error'](_0x5633c4);else{const _0x116a73=fs_1['default'][a72_0x377b('0x28')](_0x2b2ef8);const _0x5812fa=_0x116a73['size'];if(_0x5812fa>0x0){fs_1[a72_0x377b('0xc')][a72_0x377b('0x2b')](_0x16430a,'utf8',function(_0x5633c4,_0x520462){if(_0x5633c4){return console['error'](_0x5633c4);}else{try{const _0x52a043=JSON[a72_0x377b('0x2c')](_0x520462);console[a72_0x377b('0xb')](_0x52a043);const _0x408159=_0x52a043['eventos'][0x0][a72_0x377b('0x3a')];const _0x54fc73=_0x52a043['eventos'][0x0][a72_0x377b('0x3b')];const _0x48fe9d=moment_1[a72_0x377b('0xc')](_0x408159+'\x20'+_0x54fc73+a72_0x377b('0x3c'),'YYYYMMDD\x20HHmmss\x20Z');const _0xec73b=parseFloat(_0x52a043['eventos'][0x0][a72_0x377b('0x3d')][a72_0x377b('0x3e')](',','.'));const _0x41e6a6=parseFloat(_0x52a043['eventos'][0x0][a72_0x377b('0x3f')][a72_0x377b('0x3e')](',','.'));const _0x681479=_0x52a043['eventos'][0x0][a72_0x377b('0x40')];const _0x59d2a0=_0x52a043[a72_0x377b('0x41')][0x0][a72_0x377b('0x42')][0x0][a72_0x377b('0x43')];const _0x1a1277=_0x52a043[a72_0x377b('0x41')][0x0][a72_0x377b('0x42')][0x0]['salidas'];console[a72_0x377b('0xb')](_0xec73b);console['log'](_0x41e6a6);console[a72_0x377b('0xb')](_0x681479);console[a72_0x377b('0xb')](_0x59d2a0);console[a72_0x377b('0xb')](_0x1a1277);console['log'](_0x48fe9d);if(_0x59d2a0>0x0){sequelize_utils_1[a72_0x377b('0xc')][a72_0x377b('0x15')][a72_0x377b('0x44')][a72_0x377b('0x2e')]({'amount':_0x59d2a0,'counted_at':_0x48fe9d});}sequelize_utils_1[a72_0x377b('0xc')][a72_0x377b('0x15')][a72_0x377b('0x45')][a72_0x377b('0x2e')]({'device_id':null,'lat':''+_0xec73b,'lon':''+_0x41e6a6,'tracked_at':_0x48fe9d});}catch(_0x381440){return console[a72_0x377b('0x18')](_0x381440);}}});}}});_0x35f22c[a72_0x377b('0x13')]({'status':0x1,'data':_0x58d735[a72_0x377b('0x32')]});}}exports[a72_0x377b('0xc')]=SyncFilesController;