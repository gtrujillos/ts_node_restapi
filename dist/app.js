var a194_0x6ea0=['revision','revision_change','document_id','current_user_request','user_id','sequelize-paper-trail','init','defineModels','/api/syncftp','syncFtp','/api/downloadFtp','/api/processFtp','processFtp','get','/api/getPassCounting/:direction','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByDay','/api/getPassCountingByHour/:direction','getPassCountingByHour','__esModule','__importStar','call','default','defineProperty','express','compression','body-parser','./util/logger','lusca','dotenv','express-flash','path','passport','express-validator','cors','existsSync','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','set','port','env','PORT','views','../views','view\x20engine','pug','use','json','urlencoded','10mb','session','xframe','xssProtection','locals','user','join','public','./config/sequelize','./app/models','./app/controllers','models','usersModel','createdAt','updatedAt','deletedAt','created_at','deleted_at'];(function(_0x530af7,_0x475500){var _0x140b3c=function(_0x48c895){while(--_0x48c895){_0x530af7['push'](_0x530af7['shift']());}};_0x140b3c(++_0x475500);}(a194_0x6ea0,0x17c));var a194_0x3023=function(_0x215fb5,_0x2a0868){_0x215fb5=_0x215fb5-0x0;var _0x5c6755=a194_0x6ea0[_0x215fb5];return _0x5c6755;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x27480a){return _0x27480a&&_0x27480a[a194_0x3023('0x0')]?_0x27480a:{'default':_0x27480a};};var __importStar=this&&this[a194_0x3023('0x1')]||function(_0x277f6d){if(_0x277f6d&&_0x277f6d[a194_0x3023('0x0')])return _0x277f6d;var _0x12211c={};if(_0x277f6d!=null)for(var _0x3c30a0 in _0x277f6d)if(Object['hasOwnProperty'][a194_0x3023('0x2')](_0x277f6d,_0x3c30a0))_0x12211c[_0x3c30a0]=_0x277f6d[_0x3c30a0];_0x12211c[a194_0x3023('0x3')]=_0x277f6d;return _0x12211c;};Object[a194_0x3023('0x4')](exports,a194_0x3023('0x0'),{'value':!![]});const express_1=__importDefault(require(a194_0x3023('0x5')));const compression_1=__importDefault(require(a194_0x3023('0x6')));const body_parser_1=__importDefault(require(a194_0x3023('0x7')));const logger_1=__importDefault(require(a194_0x3023('0x8')));const lusca_1=__importDefault(require(a194_0x3023('0x9')));const dotenv_1=__importDefault(require(a194_0x3023('0xa')));const express_flash_1=__importDefault(require(a194_0x3023('0xb')));const path_1=__importDefault(require(a194_0x3023('0xc')));const passport_1=__importDefault(require(a194_0x3023('0xd')));const express_validator_1=__importDefault(require(a194_0x3023('0xe')));const fs_1=__importDefault(require('fs'));const cors=require(a194_0x3023('0xf'));if(fs_1['default'][a194_0x3023('0x10')]('.env')){logger_1[a194_0x3023('0x3')][a194_0x3023('0x11')](a194_0x3023('0x12'));dotenv_1['default'][a194_0x3023('0x13')]({'path':a194_0x3023('0x14')});}else{logger_1[a194_0x3023('0x3')]['debug'](a194_0x3023('0x15'));dotenv_1[a194_0x3023('0x3')][a194_0x3023('0x13')]({'path':a194_0x3023('0x16')});}const apiController=__importStar(require('./controllers/api'));const app=express_1[a194_0x3023('0x3')]();app[a194_0x3023('0x17')](a194_0x3023('0x18'),process[a194_0x3023('0x19')][a194_0x3023('0x1a')]||0xbb8);app[a194_0x3023('0x17')](a194_0x3023('0x1b'),path_1[a194_0x3023('0x3')]['join'](__dirname,a194_0x3023('0x1c')));app[a194_0x3023('0x17')](a194_0x3023('0x1d'),a194_0x3023('0x1e'));app[a194_0x3023('0x1f')](compression_1['default']());app[a194_0x3023('0x1f')](body_parser_1['default'][a194_0x3023('0x20')]({'limit':'10mb'}));app[a194_0x3023('0x1f')](body_parser_1[a194_0x3023('0x3')][a194_0x3023('0x21')]({'limit':a194_0x3023('0x22'),'extended':!![]}));app[a194_0x3023('0x1f')](cors());app[a194_0x3023('0x1f')](express_validator_1[a194_0x3023('0x3')]());app[a194_0x3023('0x1f')](passport_1[a194_0x3023('0x3')]['initialize']());app[a194_0x3023('0x1f')](passport_1[a194_0x3023('0x3')][a194_0x3023('0x23')]());app['use'](express_flash_1['default']());app['use'](lusca_1[a194_0x3023('0x3')][a194_0x3023('0x24')]('SAMEORIGIN'));app[a194_0x3023('0x1f')](lusca_1['default'][a194_0x3023('0x25')](!![]));app[a194_0x3023('0x1f')]((_0xec29c4,_0x6d4f08,_0xbf7704)=>{_0x6d4f08[a194_0x3023('0x26')][a194_0x3023('0x27')]=_0xec29c4[a194_0x3023('0x27')];_0xbf7704();});app[a194_0x3023('0x1f')]((_0x204078,_0x188370,_0x2bcb77)=>{_0x2bcb77();});app['use'](express_1[a194_0x3023('0x3')]['static'](path_1[a194_0x3023('0x3')][a194_0x3023('0x28')](__dirname,a194_0x3023('0x29')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require(a194_0x3023('0x2a')));const models_1=__importDefault(require(a194_0x3023('0x2b')));const routes_1=__importDefault(require('./app/routes'));const sequelize_utils_1=__importDefault(require('./infrastructure/sequelize-utils'));const controllers_1=__importDefault(require(a194_0x3023('0x2c')));const models=new models_1[(a194_0x3023('0x3'))](sequelize_1[a194_0x3023('0x3')]);const controllers=new controllers_1[(a194_0x3023('0x3'))](models);sequelize_utils_1['default'][a194_0x3023('0x2d')]=models;sequelize_utils_1[a194_0x3023('0x3')]['controllers']=controllers;routes_1[a194_0x3023('0x3')](app,passport_1[a194_0x3023('0x3')],models,controllers);require('./config/passport')(passport_1[a194_0x3023('0x3')],models[a194_0x3023('0x2e')]);sequelize_utils_1[a194_0x3023('0x3')]['instance']=sequelize_1[a194_0x3023('0x3')];apiController['setSequelize'](sequelize_1[a194_0x3023('0x3')]);const options={'exclude':['id',a194_0x3023('0x2f'),a194_0x3023('0x30'),a194_0x3023('0x31'),a194_0x3023('0x32'),'updated_at',a194_0x3023('0x33')],'userModel':'users','revisionAttribute':a194_0x3023('0x34'),'revisionModel':'revision','revisionChangeModel':a194_0x3023('0x35'),'enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a194_0x3023('0x36'),'revisionId':'revision_id'},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a194_0x3023('0x37'),'continuationKey':a194_0x3023('0x38')};const PaperTrail=require(a194_0x3023('0x39'))[a194_0x3023('0x3a')](sequelize_1[a194_0x3023('0x3')],options);PaperTrail[a194_0x3023('0x3b')]({});app['get'](a194_0x3023('0x3c'),apiController[a194_0x3023('0x3d')]);app['get'](a194_0x3023('0x3e'),apiController['downloadFtp']);app['get'](a194_0x3023('0x3f'),apiController[a194_0x3023('0x40')]);app[a194_0x3023('0x41')](a194_0x3023('0x42'),apiController[a194_0x3023('0x43')]);app[a194_0x3023('0x41')](a194_0x3023('0x44'),apiController[a194_0x3023('0x45')]);app[a194_0x3023('0x41')](a194_0x3023('0x46'),apiController[a194_0x3023('0x47')]);exports[a194_0x3023('0x3')]=app;