var a110_0x1d4e=['parse','infoplate','dataValues','img','writeFile','.png','base64','fullData:\x20','CLOSED:\x20','__importDefault','defineProperty','__esModule','errorhandler','./infrastructure/sequelize-utils','./tasks/fileOptimizationDemon','fs-extra','default','use','env','true','SOCKET_SERVICE_ENABLED','get','port','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','log','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','start','net','0.0.0.0','createServer','listen','TCP\x20Server\x20is\x20running\x20on\x20port\x20','IMAGE_FILES_FOLDER','vehiclesCount/','ensureDir','connection','remoteAddress','remotePort','data','close','splice','ST910','controllers','alarmsController','reportAlarm','then','alarm:\x20','LPR','indexOf'];(function(_0x1121d0,_0x1e963b){var _0x49440a=function(_0x264e1a){while(--_0x264e1a){_0x1121d0['push'](_0x1121d0['shift']());}};_0x49440a(++_0x1e963b);}(a110_0x1d4e,0x6b));var a110_0x441c=function(_0x5d4274,_0x25de37){_0x5d4274=_0x5d4274-0x0;var _0x4734cc=a110_0x1d4e[_0x5d4274];return _0x4734cc;};'use strict';var __importDefault=this&&this[a110_0x441c('0x0')]||function(_0x3ae7d9){return _0x3ae7d9&&_0x3ae7d9['__esModule']?_0x3ae7d9:{'default':_0x3ae7d9};};Object[a110_0x441c('0x1')](exports,a110_0x441c('0x2'),{'value':!![]});const errorhandler_1=__importDefault(require(a110_0x441c('0x3')));const app_1=__importDefault(require('./app'));const sequelize_utils_1=__importDefault(require(a110_0x441c('0x4')));const fileOptimizationDemon_1=__importDefault(require(a110_0x441c('0x5')));const fsExtra=require(a110_0x441c('0x6'));app_1[a110_0x441c('0x7')][a110_0x441c('0x8')](errorhandler_1[a110_0x441c('0x7')]());const expressServiceEnabled=process[a110_0x441c('0x9')]['EXPRESS_SERVICE_ENABLED']==a110_0x441c('0xa');const fileOptimizationEnabled=process[a110_0x441c('0x9')]['FILE_OPTIMIZATION_SERVICE_ENABLED']==a110_0x441c('0xa');const socketServiceEnabled=process['env'][a110_0x441c('0xb')]=='true';if(expressServiceEnabled){const server=app_1[a110_0x441c('0x7')]['listen'](app_1[a110_0x441c('0x7')][a110_0x441c('0xc')](a110_0x441c('0xd')),()=>{console['log'](a110_0x441c('0xe'),app_1['default']['get'](a110_0x441c('0xd')),app_1[a110_0x441c('0x7')][a110_0x441c('0xc')](a110_0x441c('0x9')));console[a110_0x441c('0xf')](a110_0x441c('0x10'));});}if(fileOptimizationEnabled){const fileOptimizationTask=new fileOptimizationDemon_1[(a110_0x441c('0x7'))]();fileOptimizationTask[a110_0x441c('0x11')]();}if(socketServiceEnabled){const net=require(a110_0x441c('0x12'));const port=0x46;const host=a110_0x441c('0x13');const fs=require('fs');const socketServer=net[a110_0x441c('0x14')]();socketServer[a110_0x441c('0x15')](port,host,()=>{console[a110_0x441c('0xf')](a110_0x441c('0x16')+port+'.');});const imageFolder=process['env'][a110_0x441c('0x17')]+a110_0x441c('0x18');fsExtra[a110_0x441c('0x19')](imageFolder,_0x164999=>{console[a110_0x441c('0xf')](_0x164999);});const sockets=[];socketServer['on'](a110_0x441c('0x1a'),function(_0x1d9b2d){console[a110_0x441c('0xf')]('CONNECTED:\x20'+_0x1d9b2d[a110_0x441c('0x1b')]+':'+_0x1d9b2d[a110_0x441c('0x1c')]);let _0x5b3251='';_0x1d9b2d['on'](a110_0x441c('0x1d'),function(_0x22f4f9){const _0x377737=String(_0x22f4f9);_0x5b3251+=_0x377737;});_0x1d9b2d['on'](a110_0x441c('0x1e'),function(_0x169455){const _0x37b9aa=sockets['findIndex'](function(_0x5b0a28){return _0x5b0a28['remoteAddress']===_0x1d9b2d[a110_0x441c('0x1b')]&&_0x5b0a28[a110_0x441c('0x1c')]===_0x1d9b2d[a110_0x441c('0x1c')];});if(_0x37b9aa!==-0x1)sockets[a110_0x441c('0x1f')](_0x37b9aa,0x1);if(_0x5b3251['startsWith'](a110_0x441c('0x20'))){console[a110_0x441c('0xf')]('alarm');const _0xe9b5a8={};sequelize_utils_1[a110_0x441c('0x7')][a110_0x441c('0x21')][a110_0x441c('0x22')][a110_0x441c('0x23')]({'body':{'data':''}},null,null)[a110_0x441c('0x24')](_0x5edf24=>{console[a110_0x441c('0xf')](a110_0x441c('0x25'));console['log'](_0x5edf24);});}else{console[a110_0x441c('0xf')](a110_0x441c('0x26'));_0x5b3251=_0x5b3251['substr'](_0x5b3251[a110_0x441c('0x27')]('{'));let _0x37768b={};try{_0x37768b=JSON[a110_0x441c('0x28')](_0x5b3251);}catch(_0x375977){console['log'](_0x375977);}if(_0x37768b['infoplate']!=null&&_0x37768b[a110_0x441c('0x29')]!=''){sequelize_utils_1[a110_0x441c('0x7')]['controllers']['vehiclesCountController']['report']({'body':_0x37768b},null,null)[a110_0x441c('0x24')](_0x46c465=>{console[a110_0x441c('0xf')](_0x46c465[a110_0x441c('0x2a')]);if(_0x37768b[a110_0x441c('0x29')][a110_0x441c('0x2b')]!=null&&_0x37768b[a110_0x441c('0x29')][a110_0x441c('0x2b')]!='')fsExtra[a110_0x441c('0x2c')](imageFolder+_0x46c465['dataValues']['uuid']+a110_0x441c('0x2d'),_0x37768b[a110_0x441c('0x29')]['img'],a110_0x441c('0x2e'),function(_0xa3578a){console[a110_0x441c('0xf')](_0xa3578a);});});}}console['log'](a110_0x441c('0x2f')+_0x5b3251);console[a110_0x441c('0xf')](a110_0x441c('0x30')+_0x1d9b2d[a110_0x441c('0x1b')]+'\x20'+_0x1d9b2d[a110_0x441c('0x1c')]);});});}exports[a110_0x441c('0x7')]=null;