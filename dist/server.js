var a116_0x56f5=['env','EXPRESS_SERVICE_ENABLED','true','FILE_OPTIMIZATION_SERVICE_ENABLED','SOCKET_SERVICE_ENABLED','get','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','port','start','net','0.0.0.0','createServer','listen','IMAGE_FILES_FOLDER','ensureDir','connection','CONNECTED:\x20','remoteAddress','remotePort','startsWith','alarm','controllers','reportAlarm','then','alarm:\x20','close','splice','ST910','LPR','substr','parse','infoplate','dataValues','img','uuid','.png','base64','CLOSED:\x20','defineProperty','__esModule','./infrastructure/sequelize-utils','./tasks/fileOptimizationTask','fs-extra','default','use'];(function(_0x3df577,_0x3d92e3){var _0x44cdc3=function(_0x5990a8){while(--_0x5990a8){_0x3df577['push'](_0x3df577['shift']());}};_0x44cdc3(++_0x3d92e3);}(a116_0x56f5,0x10d));var a116_0x5b17=function(_0x5bcf8b,_0x551743){_0x5bcf8b=_0x5bcf8b-0x0;var _0x44729b=a116_0x56f5[_0x5bcf8b];return _0x44729b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x353042){return _0x353042&&_0x353042['__esModule']?_0x353042:{'default':_0x353042};};Object[a116_0x5b17('0x0')](exports,a116_0x5b17('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const app_1=__importDefault(require('./app'));const sequelize_utils_1=__importDefault(require(a116_0x5b17('0x2')));const fileOptimizationTask_1=__importDefault(require(a116_0x5b17('0x3')));const fsExtra=require(a116_0x5b17('0x4'));app_1[a116_0x5b17('0x5')][a116_0x5b17('0x6')](errorhandler_1[a116_0x5b17('0x5')]());const expressServiceEnabled=process[a116_0x5b17('0x7')][a116_0x5b17('0x8')]==a116_0x5b17('0x9');const fileOptimizationEnabled=process['env'][a116_0x5b17('0xa')]==a116_0x5b17('0x9');const socketServiceEnabled=process[a116_0x5b17('0x7')][a116_0x5b17('0xb')]==a116_0x5b17('0x9');if(expressServiceEnabled){const server=app_1[a116_0x5b17('0x5')]['listen'](app_1[a116_0x5b17('0x5')][a116_0x5b17('0xc')]('port'),()=>{console[a116_0x5b17('0xd')](a116_0x5b17('0xe'),app_1[a116_0x5b17('0x5')]['get'](a116_0x5b17('0xf')),app_1[a116_0x5b17('0x5')][a116_0x5b17('0xc')]('env'));console['log']('\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a');});}if(fileOptimizationEnabled){const fileOptimizationTask=new fileOptimizationTask_1[(a116_0x5b17('0x5'))]();fileOptimizationTask[a116_0x5b17('0x10')]();}if(socketServiceEnabled){const net=require(a116_0x5b17('0x11'));const port=0x46;const host=a116_0x5b17('0x12');const fs=require('fs');const socketServer=net[a116_0x5b17('0x13')]();socketServer[a116_0x5b17('0x14')](port,host,()=>{console[a116_0x5b17('0xd')]('TCP\x20Server\x20is\x20running\x20on\x20port\x20'+port+'.');});const imageFolder=process[a116_0x5b17('0x7')][a116_0x5b17('0x15')]+'vehiclesCount/';fsExtra[a116_0x5b17('0x16')](imageFolder,_0xaa3e8a=>{console[a116_0x5b17('0xd')](_0xaa3e8a);});const sockets=[];socketServer['on'](a116_0x5b17('0x17'),function(_0x69d549){console[a116_0x5b17('0xd')](a116_0x5b17('0x18')+_0x69d549[a116_0x5b17('0x19')]+':'+_0x69d549[a116_0x5b17('0x1a')]);let _0xb5f59='';_0x69d549['on']('data',function(_0x329107){const _0x2ecfca=String(_0x329107);console[a116_0x5b17('0xd')]('******result:\x20');console['log'](_0x2ecfca);_0xb5f59+=_0x2ecfca;if(_0x2ecfca[a116_0x5b17('0x1b')]('ST910')){console[a116_0x5b17('0xd')](a116_0x5b17('0x1c'));const _0x14de98={};sequelize_utils_1['default'][a116_0x5b17('0x1d')]['alarmsController'][a116_0x5b17('0x1e')]({'body':{'data':''}},null,null)[a116_0x5b17('0x1f')](_0xe6977b=>{console['log'](a116_0x5b17('0x20'));console[a116_0x5b17('0xd')](_0xe6977b);});}});_0x69d549['on'](a116_0x5b17('0x21'),function(_0xf8dd26){const _0x50a32a=sockets['findIndex'](function(_0x7ee6f5){return _0x7ee6f5[a116_0x5b17('0x19')]===_0x69d549[a116_0x5b17('0x19')]&&_0x7ee6f5[a116_0x5b17('0x1a')]===_0x69d549[a116_0x5b17('0x1a')];});if(_0x50a32a!==-0x1)sockets[a116_0x5b17('0x22')](_0x50a32a,0x1);if(_0xb5f59['startsWith'](a116_0x5b17('0x23'))){}else{console['log'](a116_0x5b17('0x24'));_0xb5f59=_0xb5f59[a116_0x5b17('0x25')](_0xb5f59['indexOf']('{'));let _0x18ae9f={};try{_0x18ae9f=JSON[a116_0x5b17('0x26')](_0xb5f59);}catch(_0x122ba9){console[a116_0x5b17('0xd')](_0x122ba9);}if(_0x18ae9f[a116_0x5b17('0x27')]!=null&&_0x18ae9f[a116_0x5b17('0x27')]!=''){sequelize_utils_1[a116_0x5b17('0x5')][a116_0x5b17('0x1d')]['vehiclesCountController']['report']({'body':_0x18ae9f},null,null)[a116_0x5b17('0x1f')](_0x4ea794=>{console['log'](_0x4ea794[a116_0x5b17('0x28')]);if(_0x18ae9f[a116_0x5b17('0x27')][a116_0x5b17('0x29')]!=null&&_0x18ae9f[a116_0x5b17('0x27')]['img']!='')fsExtra['writeFile'](imageFolder+_0x4ea794[a116_0x5b17('0x28')][a116_0x5b17('0x2a')]+a116_0x5b17('0x2b'),_0x18ae9f[a116_0x5b17('0x27')][a116_0x5b17('0x29')],a116_0x5b17('0x2c'),function(_0x281d5c){console[a116_0x5b17('0xd')](_0x281d5c);});});}}console['log']('fullData:\x20'+_0xb5f59);console[a116_0x5b17('0xd')](a116_0x5b17('0x2d')+_0x69d549[a116_0x5b17('0x19')]+'\x20'+_0x69d549[a116_0x5b17('0x1a')]);});});}exports[a116_0x5b17('0x5')]=null;