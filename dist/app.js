var a88_0x4f6b=['./app/routes','./infrastructure/sequelize-utils','models','controllers','./config/passport','usersModel','setSequelize','created_at','updated_at','deleted_at','users','revision','revision_change','document_id','revision_id','current_user_request','user_id','init','defineModels','get','/api/syncftp','syncFtp','/api/downloadFtp','downloadFtp','/api/processFtp','processFtp','getPassCounting','/api/getPassCountingByDay/:direction','/api/getPassCountingByHour/:direction','getPassCountingByHour','__esModule','__importStar','hasOwnProperty','call','default','defineProperty','express','compression','body-parser','./util/logger','dotenv','express-flash','path','passport','express-validator','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env','config','.env.example','./controllers/api','set','port','env','PORT','views','join','../views','view\x20engine','pug','use','urlencoded','initialize','xframe','xssProtection','locals','user','static','./app/models'];(function(_0x426242,_0x416f92){var _0x31a0a2=function(_0x39dbcd){while(--_0x39dbcd){_0x426242['push'](_0x426242['shift']());}};_0x31a0a2(++_0x416f92);}(a88_0x4f6b,0x1bc));var a88_0x38eb=function(_0x24d09d,_0x2fb91a){_0x24d09d=_0x24d09d-0x0;var _0x1f7a38=a88_0x4f6b[_0x24d09d];return _0x1f7a38;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1dad4e){return _0x1dad4e&&_0x1dad4e[a88_0x38eb('0x0')]?_0x1dad4e:{'default':_0x1dad4e};};var __importStar=this&&this[a88_0x38eb('0x1')]||function(_0x54de69){if(_0x54de69&&_0x54de69['__esModule'])return _0x54de69;var _0xb366d3={};if(_0x54de69!=null)for(var _0x29188b in _0x54de69)if(Object[a88_0x38eb('0x2')][a88_0x38eb('0x3')](_0x54de69,_0x29188b))_0xb366d3[_0x29188b]=_0x54de69[_0x29188b];_0xb366d3[a88_0x38eb('0x4')]=_0x54de69;return _0xb366d3;};Object[a88_0x38eb('0x5')](exports,a88_0x38eb('0x0'),{'value':!![]});const express_1=__importDefault(require(a88_0x38eb('0x6')));const compression_1=__importDefault(require(a88_0x38eb('0x7')));const body_parser_1=__importDefault(require(a88_0x38eb('0x8')));const logger_1=__importDefault(require(a88_0x38eb('0x9')));const lusca_1=__importDefault(require('lusca'));const dotenv_1=__importDefault(require(a88_0x38eb('0xa')));const express_flash_1=__importDefault(require(a88_0x38eb('0xb')));const path_1=__importDefault(require(a88_0x38eb('0xc')));const passport_1=__importDefault(require(a88_0x38eb('0xd')));const express_validator_1=__importDefault(require(a88_0x38eb('0xe')));const fs_1=__importDefault(require('fs'));if(fs_1[a88_0x38eb('0x4')]['existsSync']('.env')){logger_1[a88_0x38eb('0x4')][a88_0x38eb('0xf')](a88_0x38eb('0x10'));dotenv_1[a88_0x38eb('0x4')]['config']({'path':a88_0x38eb('0x11')});}else{logger_1[a88_0x38eb('0x4')][a88_0x38eb('0xf')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a88_0x38eb('0x4')][a88_0x38eb('0x12')]({'path':a88_0x38eb('0x13')});}const apiController=__importStar(require(a88_0x38eb('0x14')));const app=express_1[a88_0x38eb('0x4')]();app[a88_0x38eb('0x15')](a88_0x38eb('0x16'),process[a88_0x38eb('0x17')][a88_0x38eb('0x18')]||0xbb8);app[a88_0x38eb('0x15')](a88_0x38eb('0x19'),path_1[a88_0x38eb('0x4')][a88_0x38eb('0x1a')](__dirname,a88_0x38eb('0x1b')));app[a88_0x38eb('0x15')](a88_0x38eb('0x1c'),a88_0x38eb('0x1d'));app[a88_0x38eb('0x1e')](compression_1[a88_0x38eb('0x4')]());app[a88_0x38eb('0x1e')](body_parser_1[a88_0x38eb('0x4')]['json']());app['use'](body_parser_1[a88_0x38eb('0x4')][a88_0x38eb('0x1f')]({'extended':!![]}));app[a88_0x38eb('0x1e')](express_validator_1['default']());app[a88_0x38eb('0x1e')](passport_1[a88_0x38eb('0x4')][a88_0x38eb('0x20')]());app[a88_0x38eb('0x1e')](passport_1['default']['session']());app['use'](express_flash_1['default']());app[a88_0x38eb('0x1e')](lusca_1['default'][a88_0x38eb('0x21')]('SAMEORIGIN'));app[a88_0x38eb('0x1e')](lusca_1[a88_0x38eb('0x4')][a88_0x38eb('0x22')](!![]));app[a88_0x38eb('0x1e')]((_0x583ea4,_0x57bc76,_0x376885)=>{_0x57bc76[a88_0x38eb('0x23')]['user']=_0x583ea4[a88_0x38eb('0x24')];_0x376885();});app[a88_0x38eb('0x1e')]((_0x377acd,_0x54f7a1,_0x5cb12f)=>{_0x5cb12f();});app[a88_0x38eb('0x1e')](express_1[a88_0x38eb('0x4')][a88_0x38eb('0x25')](path_1[a88_0x38eb('0x4')][a88_0x38eb('0x1a')](__dirname,'public'),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require('./config/sequelize'));const models_1=__importDefault(require(a88_0x38eb('0x26')));const routes_1=__importDefault(require(a88_0x38eb('0x27')));const sequelize_utils_1=__importDefault(require(a88_0x38eb('0x28')));const controllers_1=__importDefault(require('./app/controllers'));const models=new models_1[(a88_0x38eb('0x4'))](sequelize_1[a88_0x38eb('0x4')]);const controllers=new controllers_1[(a88_0x38eb('0x4'))](models);sequelize_utils_1['default'][a88_0x38eb('0x29')]=models;sequelize_utils_1[a88_0x38eb('0x4')][a88_0x38eb('0x2a')]=controllers;routes_1[a88_0x38eb('0x4')](app,passport_1[a88_0x38eb('0x4')],models,controllers);require(a88_0x38eb('0x2b'))(passport_1[a88_0x38eb('0x4')],models[a88_0x38eb('0x2c')]);sequelize_utils_1['default']['instance']=sequelize_1['default'];apiController[a88_0x38eb('0x2d')](sequelize_1[a88_0x38eb('0x4')]);const options={'exclude':['id','createdAt','updatedAt','deletedAt',a88_0x38eb('0x2e'),a88_0x38eb('0x2f'),a88_0x38eb('0x30')],'userModel':a88_0x38eb('0x31'),'revisionAttribute':a88_0x38eb('0x32'),'revisionModel':a88_0x38eb('0x32'),'revisionChangeModel':a88_0x38eb('0x33'),'enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a88_0x38eb('0x34'),'revisionId':a88_0x38eb('0x35')},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a88_0x38eb('0x36'),'continuationKey':a88_0x38eb('0x37')};const PaperTrail=require('sequelize-paper-trail')[a88_0x38eb('0x38')](sequelize_1[a88_0x38eb('0x4')],options);PaperTrail[a88_0x38eb('0x39')]({});app[a88_0x38eb('0x3a')](a88_0x38eb('0x3b'),apiController[a88_0x38eb('0x3c')]);app[a88_0x38eb('0x3a')](a88_0x38eb('0x3d'),apiController[a88_0x38eb('0x3e')]);app['get'](a88_0x38eb('0x3f'),apiController[a88_0x38eb('0x40')]);app[a88_0x38eb('0x3a')]('/api/getPassCounting/:direction',apiController[a88_0x38eb('0x41')]);app[a88_0x38eb('0x3a')](a88_0x38eb('0x42'),apiController['getPassCountingByDay']);app[a88_0x38eb('0x3a')](a88_0x38eb('0x43'),apiController[a88_0x38eb('0x44')]);exports['default']=app;