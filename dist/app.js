var a283_0xfc59=['body-parser','./util/logger','dotenv','path','passport','express-validator','cors','express-rate-limit','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','.env.example','./controllers/api','port','env','PORT','join','../views','set','view\x20engine','use','10mb','urlencoded','DEV_MODE','initialize','session','xframe','SAMEORIGIN','xssProtection','user','static','public','./config/sequelize','./app/models','./app/routes','./app/controllers','./config/passport','setSequelize','get','/api/syncftp','/api/downloadFtp','processFtp','getPassCounting','getPassCountingByDay','/api/getPassCountingByHour/:direction','getPassCountingByHour','trust\x20proxy','__importDefault','__esModule','__importStar','call','default','defineProperty','express'];(function(_0x1b4f2e,_0x56e644){var _0x563f48=function(_0x3d4d4e){while(--_0x3d4d4e){_0x1b4f2e['push'](_0x1b4f2e['shift']());}};_0x563f48(++_0x56e644);}(a283_0xfc59,0x69));var a283_0x9b4c=function(_0x5aef0e,_0x5d10d6){_0x5aef0e=_0x5aef0e-0x0;var _0x1278b6=a283_0xfc59[_0x5aef0e];return _0x1278b6;};'use strict';var __importDefault=this&&this[a283_0x9b4c('0x0')]||function(_0x2f3bc0){return _0x2f3bc0&&_0x2f3bc0[a283_0x9b4c('0x1')]?_0x2f3bc0:{'default':_0x2f3bc0};};var __importStar=this&&this[a283_0x9b4c('0x2')]||function(_0x29540c){if(_0x29540c&&_0x29540c[a283_0x9b4c('0x1')])return _0x29540c;var _0x2dfed8={};if(_0x29540c!=null)for(var _0x5a1e3d in _0x29540c)if(Object['hasOwnProperty'][a283_0x9b4c('0x3')](_0x29540c,_0x5a1e3d))_0x2dfed8[_0x5a1e3d]=_0x29540c[_0x5a1e3d];_0x2dfed8[a283_0x9b4c('0x4')]=_0x29540c;return _0x2dfed8;};Object[a283_0x9b4c('0x5')](exports,a283_0x9b4c('0x1'),{'value':!![]});const express_1=__importDefault(require(a283_0x9b4c('0x6')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a283_0x9b4c('0x7')));const logger_1=__importDefault(require(a283_0x9b4c('0x8')));const lusca_1=__importDefault(require('lusca'));const dotenv_1=__importDefault(require(a283_0x9b4c('0x9')));const express_flash_1=__importDefault(require('express-flash'));const path_1=__importDefault(require(a283_0x9b4c('0xa')));const passport_1=__importDefault(require(a283_0x9b4c('0xb')));const express_validator_1=__importDefault(require(a283_0x9b4c('0xc')));const fs_1=__importDefault(require('fs'));const cors=require(a283_0x9b4c('0xd'));const rateLimit=require(a283_0x9b4c('0xe'));const slowDown=require('express-slow-down');if(fs_1['default'][a283_0x9b4c('0xf')](a283_0x9b4c('0x10'))){logger_1['default']['debug'](a283_0x9b4c('0x11'));dotenv_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x12')]({'path':'.env'});}else{logger_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x13')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a283_0x9b4c('0x4')]['config']({'path':a283_0x9b4c('0x14')});}const apiController=__importStar(require(a283_0x9b4c('0x15')));const app=express_1[a283_0x9b4c('0x4')]();app['set'](a283_0x9b4c('0x16'),process[a283_0x9b4c('0x17')][a283_0x9b4c('0x18')]||0xbb8);app['set']('views',path_1['default'][a283_0x9b4c('0x19')](__dirname,a283_0x9b4c('0x1a')));app[a283_0x9b4c('0x1b')](a283_0x9b4c('0x1c'),'pug');app[a283_0x9b4c('0x1d')](compression_1[a283_0x9b4c('0x4')]());app[a283_0x9b4c('0x1d')](body_parser_1[a283_0x9b4c('0x4')]['json']({'limit':a283_0x9b4c('0x1e')}));app[a283_0x9b4c('0x1d')](body_parser_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x1f')]({'limit':a283_0x9b4c('0x1e'),'extended':!![]}));if(process[a283_0x9b4c('0x17')][a283_0x9b4c('0x20')]){app['use'](cors());app[a283_0x9b4c('0x1d')](cors({'origin':!![]}));app['options']('*',cors());}else{app[a283_0x9b4c('0x1d')](cors());}app[a283_0x9b4c('0x1d')](express_validator_1[a283_0x9b4c('0x4')]());app[a283_0x9b4c('0x1d')](passport_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x21')]());app[a283_0x9b4c('0x1d')](passport_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x22')]());app[a283_0x9b4c('0x1d')](express_flash_1['default']());app[a283_0x9b4c('0x1d')](lusca_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x23')](a283_0x9b4c('0x24')));app[a283_0x9b4c('0x1d')](lusca_1['default'][a283_0x9b4c('0x25')](!![]));app['use']((_0x5892f3,_0x159dc6,_0xba977d)=>{_0x159dc6['locals'][a283_0x9b4c('0x26')]=_0x5892f3['user'];_0xba977d();});app[a283_0x9b4c('0x1d')]((_0x12d962,_0x521321,_0x4fca69)=>{_0x4fca69();});app['use'](express_1[a283_0x9b4c('0x4')][a283_0x9b4c('0x27')](path_1[a283_0x9b4c('0x4')]['join'](__dirname,a283_0x9b4c('0x28')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require(a283_0x9b4c('0x29')));const models_1=__importDefault(require(a283_0x9b4c('0x2a')));const routes_1=__importDefault(require(a283_0x9b4c('0x2b')));const controllers_1=__importDefault(require(a283_0x9b4c('0x2c')));const models=new models_1[(a283_0x9b4c('0x4'))](sequelize_1[a283_0x9b4c('0x4')]);const controllers=new controllers_1[(a283_0x9b4c('0x4'))](models);routes_1[a283_0x9b4c('0x4')](app,passport_1[a283_0x9b4c('0x4')],models,controllers);require(a283_0x9b4c('0x2d'))(passport_1[a283_0x9b4c('0x4')],models['usersModel']);apiController[a283_0x9b4c('0x2e')](sequelize_1['default']);app[a283_0x9b4c('0x2f')](a283_0x9b4c('0x30'),apiController['syncFtp']);app[a283_0x9b4c('0x2f')](a283_0x9b4c('0x31'),apiController['downloadFtp']);app[a283_0x9b4c('0x2f')]('/api/processFtp',apiController[a283_0x9b4c('0x32')]);app[a283_0x9b4c('0x2f')]('/api/getPassCounting/:direction',apiController[a283_0x9b4c('0x33')]);app[a283_0x9b4c('0x2f')]('/api/getPassCountingByDay/:direction',apiController[a283_0x9b4c('0x34')]);app[a283_0x9b4c('0x2f')](a283_0x9b4c('0x35'),apiController[a283_0x9b4c('0x36')]);const limiter=rateLimit({'windowMs':0x2*0x3c*0x3e8,'max':0x64});app[a283_0x9b4c('0x1d')](limiter);app['enable'](a283_0x9b4c('0x37'));const speedLimiter=slowDown({'windowMs':0x2*0x3c*0x3e8,'delayAfter':0x64,'delayMs':0x1f4});app[a283_0x9b4c('0x1d')](speedLimiter);exports['default']=app;