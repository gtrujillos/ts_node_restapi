var a221_0x7e08=['net','0.0.0.0','createServer','TCP\x20Server\x20is\x20running\x20on\x20port\x20','IMAGE_FILES_FOLDER','vehiclesCount/','ensureDir','connection','CONNECTED:\x20','remoteAddress','remotePort','data','alarm','controllers','eventsController','reportEvent','alarm:\x20','close','findIndex','splice','startsWith','ST910','LPR','substr','indexOf','parse','infoplate','vehiclesCountController','report','then','img','writeFile','dataValues','uuid','.png','base64','CLOSED:\x20','__esModule','defineProperty','errorhandler','./app','./infrastructure/sequelize-utils','./tasks/fileOptimizationTask','default','env','EXPRESS_SERVICE_ENABLED','true','FILE_OPTIMIZATION_SERVICE_ENABLED','SOCKET_SERVICE_ENABLED','listen','port','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','start'];(function(_0x51a7b8,_0x28480f){var _0x5f5685=function(_0x1ad1b9){while(--_0x1ad1b9){_0x51a7b8['push'](_0x51a7b8['shift']());}};_0x5f5685(++_0x28480f);}(a221_0x7e08,0xcd));var a221_0x5691=function(_0x2bdd85,_0x16891b){_0x2bdd85=_0x2bdd85-0x0;var _0x3fc297=a221_0x7e08[_0x2bdd85];return _0x3fc297;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x298447){return _0x298447&&_0x298447[a221_0x5691('0x0')]?_0x298447:{'default':_0x298447};};Object[a221_0x5691('0x1')](exports,a221_0x5691('0x0'),{'value':!![]});const errorhandler_1=__importDefault(require(a221_0x5691('0x2')));const app_1=__importDefault(require(a221_0x5691('0x3')));const sequelize_utils_1=__importDefault(require(a221_0x5691('0x4')));const fileOptimizationTask_1=__importDefault(require(a221_0x5691('0x5')));const fsExtra=require('fs-extra');app_1['default']['use'](errorhandler_1[a221_0x5691('0x6')]());const expressServiceEnabled=process[a221_0x5691('0x7')][a221_0x5691('0x8')]==a221_0x5691('0x9');const fileOptimizationEnabled=process[a221_0x5691('0x7')][a221_0x5691('0xa')]==a221_0x5691('0x9');const socketServiceEnabled=process['env'][a221_0x5691('0xb')]==a221_0x5691('0x9');if(expressServiceEnabled){const server=app_1[a221_0x5691('0x6')][a221_0x5691('0xc')](app_1['default']['get'](a221_0x5691('0xd')),()=>{console[a221_0x5691('0xe')](a221_0x5691('0xf'),app_1['default'][a221_0x5691('0x10')](a221_0x5691('0xd')),app_1[a221_0x5691('0x6')][a221_0x5691('0x10')](a221_0x5691('0x7')));console[a221_0x5691('0xe')](a221_0x5691('0x11'));});}if(fileOptimizationEnabled){const fileOptimizationTask=new fileOptimizationTask_1[(a221_0x5691('0x6'))]();fileOptimizationTask[a221_0x5691('0x12')]();}if(socketServiceEnabled){const net=require(a221_0x5691('0x13'));const port=0x46;const host=a221_0x5691('0x14');const fs=require('fs');const socketServer=net[a221_0x5691('0x15')]();socketServer['listen'](port,host,()=>{console[a221_0x5691('0xe')](a221_0x5691('0x16')+port+'.');});const imageFolder=process[a221_0x5691('0x7')][a221_0x5691('0x17')]+a221_0x5691('0x18');fsExtra[a221_0x5691('0x19')](imageFolder,_0x508671=>{console[a221_0x5691('0xe')](_0x508671);});const sockets=[];socketServer['on'](a221_0x5691('0x1a'),function(_0x2657c5){console['log'](a221_0x5691('0x1b')+_0x2657c5[a221_0x5691('0x1c')]+':'+_0x2657c5[a221_0x5691('0x1d')]);let _0x5005ba='';_0x2657c5['on'](a221_0x5691('0x1e'),function(_0x37c4cc){const _0x3d1e90=String(_0x37c4cc);console[a221_0x5691('0xe')]('******result:\x20');console[a221_0x5691('0xe')](_0x3d1e90);_0x5005ba+=_0x3d1e90;if(_0x3d1e90['startsWith']('ST910')){console[a221_0x5691('0xe')](a221_0x5691('0x1f'));const _0x4ade0d={};sequelize_utils_1['default'][a221_0x5691('0x20')][a221_0x5691('0x21')][a221_0x5691('0x22')]({'body':{'data':''}},null,null)['then'](_0x1dc49c=>{console[a221_0x5691('0xe')](a221_0x5691('0x23'));console['log'](_0x1dc49c);});}});_0x2657c5['on'](a221_0x5691('0x24'),function(_0x3be4c0){const _0x5af19f=sockets[a221_0x5691('0x25')](function(_0xf4760f){return _0xf4760f[a221_0x5691('0x1c')]===_0x2657c5['remoteAddress']&&_0xf4760f['remotePort']===_0x2657c5['remotePort'];});if(_0x5af19f!==-0x1)sockets[a221_0x5691('0x26')](_0x5af19f,0x1);if(_0x5005ba[a221_0x5691('0x27')](a221_0x5691('0x28'))){}else{console[a221_0x5691('0xe')](a221_0x5691('0x29'));_0x5005ba=_0x5005ba[a221_0x5691('0x2a')](_0x5005ba[a221_0x5691('0x2b')]('{'));let _0x49374f={};try{_0x49374f=JSON[a221_0x5691('0x2c')](_0x5005ba);}catch(_0x13280b){console['log'](_0x13280b);}if(_0x49374f[a221_0x5691('0x2d')]!=null&&_0x49374f['infoplate']!=''){sequelize_utils_1['default']['controllers'][a221_0x5691('0x2e')][a221_0x5691('0x2f')]({'body':_0x49374f},null,null)[a221_0x5691('0x30')](_0x29518e=>{console['log'](_0x29518e['dataValues']);if(_0x49374f[a221_0x5691('0x2d')][a221_0x5691('0x31')]!=null&&_0x49374f[a221_0x5691('0x2d')][a221_0x5691('0x31')]!='')fsExtra[a221_0x5691('0x32')](imageFolder+_0x29518e[a221_0x5691('0x33')][a221_0x5691('0x34')]+a221_0x5691('0x35'),_0x49374f['infoplate'][a221_0x5691('0x31')],a221_0x5691('0x36'),function(_0x132d9e){console['log'](_0x132d9e);});});}}console[a221_0x5691('0xe')]('fullData:\x20'+_0x5005ba);console[a221_0x5691('0xe')](a221_0x5691('0x37')+_0x2657c5['remoteAddress']+'\x20'+_0x2657c5['remotePort']);});});}exports[a221_0x5691('0x6')]=null;