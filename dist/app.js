var a88_0x5a90=['/api/downloadFtp','downloadFtp','/api/processFtp','/api/getPassCounting/:direction','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByDay','getPassCountingByHour','__importDefault','__esModule','__importStar','call','default','defineProperty','express','body-parser','lusca','express-flash','path','express-validator','cors','existsSync','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','port','PORT','set','join','../views','view\x20engine','pug','use','json','initialize','session','xframe','SAMEORIGIN','xssProtection','user','public','./config/sequelize','./app/models','./app/routes','./infrastructure/sequelize-utils','./app/controllers','models','./config/passport','usersModel','instance','setSequelize','createdAt','updatedAt','deletedAt','created_at','deleted_at','users','revision','document_id','revision_id','current_user_request','user_id','sequelize-paper-trail','init','defineModels','get','/api/syncftp','syncFtp'];(function(_0x573e18,_0x275e3c){var _0x424236=function(_0x1a03d1){while(--_0x1a03d1){_0x573e18['push'](_0x573e18['shift']());}};_0x424236(++_0x275e3c);}(a88_0x5a90,0x92));var a88_0x354e=function(_0x14b5a1,_0x4470fb){_0x14b5a1=_0x14b5a1-0x0;var _0xa5f8d0=a88_0x5a90[_0x14b5a1];return _0xa5f8d0;};'use strict';var __importDefault=this&&this[a88_0x354e('0x0')]||function(_0x24ba86){return _0x24ba86&&_0x24ba86[a88_0x354e('0x1')]?_0x24ba86:{'default':_0x24ba86};};var __importStar=this&&this[a88_0x354e('0x2')]||function(_0x5644a3){if(_0x5644a3&&_0x5644a3['__esModule'])return _0x5644a3;var _0x5d5e45={};if(_0x5644a3!=null)for(var _0xfcddab in _0x5644a3)if(Object['hasOwnProperty'][a88_0x354e('0x3')](_0x5644a3,_0xfcddab))_0x5d5e45[_0xfcddab]=_0x5644a3[_0xfcddab];_0x5d5e45[a88_0x354e('0x4')]=_0x5644a3;return _0x5d5e45;};Object[a88_0x354e('0x5')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a88_0x354e('0x6')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a88_0x354e('0x7')));const logger_1=__importDefault(require('./util/logger'));const lusca_1=__importDefault(require(a88_0x354e('0x8')));const dotenv_1=__importDefault(require('dotenv'));const express_flash_1=__importDefault(require(a88_0x354e('0x9')));const path_1=__importDefault(require(a88_0x354e('0xa')));const passport_1=__importDefault(require('passport'));const express_validator_1=__importDefault(require(a88_0x354e('0xb')));const fs_1=__importDefault(require('fs'));const cors=require(a88_0x354e('0xc'));if(fs_1[a88_0x354e('0x4')][a88_0x354e('0xd')]('.env')){logger_1[a88_0x354e('0x4')][a88_0x354e('0xe')](a88_0x354e('0xf'));dotenv_1['default']['config']({'path':'.env'});}else{logger_1['default'][a88_0x354e('0xe')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a88_0x354e('0x4')][a88_0x354e('0x10')]({'path':a88_0x354e('0x11')});}const apiController=__importStar(require('./controllers/api'));const app=express_1[a88_0x354e('0x4')]();app['set'](a88_0x354e('0x12'),process['env'][a88_0x354e('0x13')]||0xbb8);app[a88_0x354e('0x14')]('views',path_1[a88_0x354e('0x4')][a88_0x354e('0x15')](__dirname,a88_0x354e('0x16')));app['set'](a88_0x354e('0x17'),a88_0x354e('0x18'));app[a88_0x354e('0x19')](compression_1['default']());app['use'](body_parser_1[a88_0x354e('0x4')][a88_0x354e('0x1a')]());app[a88_0x354e('0x19')](cors());app['use'](body_parser_1[a88_0x354e('0x4')]['urlencoded']({'extended':!![]}));app[a88_0x354e('0x19')](express_validator_1[a88_0x354e('0x4')]());app[a88_0x354e('0x19')](passport_1['default'][a88_0x354e('0x1b')]());app['use'](passport_1[a88_0x354e('0x4')][a88_0x354e('0x1c')]());app['use'](express_flash_1[a88_0x354e('0x4')]());app[a88_0x354e('0x19')](lusca_1[a88_0x354e('0x4')][a88_0x354e('0x1d')](a88_0x354e('0x1e')));app[a88_0x354e('0x19')](lusca_1[a88_0x354e('0x4')][a88_0x354e('0x1f')](!![]));app[a88_0x354e('0x19')]((_0x3ad82f,_0x583b71,_0x172c21)=>{_0x583b71['locals'][a88_0x354e('0x20')]=_0x3ad82f['user'];_0x172c21();});app['use']((_0x5200fa,_0x3530d7,_0x3ed791)=>{_0x3ed791();});app[a88_0x354e('0x19')](express_1[a88_0x354e('0x4')]['static'](path_1[a88_0x354e('0x4')][a88_0x354e('0x15')](__dirname,a88_0x354e('0x21')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require(a88_0x354e('0x22')));const models_1=__importDefault(require(a88_0x354e('0x23')));const routes_1=__importDefault(require(a88_0x354e('0x24')));const sequelize_utils_1=__importDefault(require(a88_0x354e('0x25')));const controllers_1=__importDefault(require(a88_0x354e('0x26')));const models=new models_1[(a88_0x354e('0x4'))](sequelize_1['default']);const controllers=new controllers_1[(a88_0x354e('0x4'))](models);sequelize_utils_1[a88_0x354e('0x4')][a88_0x354e('0x27')]=models;sequelize_utils_1[a88_0x354e('0x4')]['controllers']=controllers;routes_1[a88_0x354e('0x4')](app,passport_1['default'],models,controllers);require(a88_0x354e('0x28'))(passport_1[a88_0x354e('0x4')],models[a88_0x354e('0x29')]);sequelize_utils_1[a88_0x354e('0x4')][a88_0x354e('0x2a')]=sequelize_1['default'];apiController[a88_0x354e('0x2b')](sequelize_1[a88_0x354e('0x4')]);const options={'exclude':['id',a88_0x354e('0x2c'),a88_0x354e('0x2d'),a88_0x354e('0x2e'),a88_0x354e('0x2f'),'updated_at',a88_0x354e('0x30')],'userModel':a88_0x354e('0x31'),'revisionAttribute':a88_0x354e('0x32'),'revisionModel':a88_0x354e('0x32'),'revisionChangeModel':'revision_change','enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a88_0x354e('0x33'),'revisionId':a88_0x354e('0x34')},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a88_0x354e('0x35'),'continuationKey':a88_0x354e('0x36')};const PaperTrail=require(a88_0x354e('0x37'))[a88_0x354e('0x38')](sequelize_1[a88_0x354e('0x4')],options);PaperTrail[a88_0x354e('0x39')]({});app[a88_0x354e('0x3a')](a88_0x354e('0x3b'),apiController[a88_0x354e('0x3c')]);app[a88_0x354e('0x3a')](a88_0x354e('0x3d'),apiController[a88_0x354e('0x3e')]);app[a88_0x354e('0x3a')](a88_0x354e('0x3f'),apiController['processFtp']);app[a88_0x354e('0x3a')](a88_0x354e('0x40'),apiController[a88_0x354e('0x41')]);app[a88_0x354e('0x3a')](a88_0x354e('0x42'),apiController[a88_0x354e('0x43')]);app['get']('/api/getPassCountingByHour/:direction',apiController[a88_0x354e('0x44')]);exports['default']=app;