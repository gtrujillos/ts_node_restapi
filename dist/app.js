var a88_0x51cb=['__importStar','__esModule','call','default','express','body-parser','./util/logger','lusca','path','express-validator','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','./controllers/api','set','port','PORT','views','view\x20engine','pug','use','json','urlencoded','session','xframe','SAMEORIGIN','xssProtection','locals','user','static','public','./config/sequelize','./app/models','./app/routes','./infrastructure/sequelize-utils','./app/controllers','models','controllers','./config/passport','usersModel','instance','setSequelize','createdAt','updated_at','users','revision','document_id','revision_id','current_user_request','user_id','sequelize-paper-trail','init','/api/syncftp','get','/api/downloadFtp','downloadFtp','/api/processFtp','/api/getPassCounting/:direction','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByDay','/api/getPassCountingByHour/:direction','getPassCountingByHour','__importDefault'];(function(_0x5e192a,_0x2e8591){var _0x4623fa=function(_0x3d9350){while(--_0x3d9350){_0x5e192a['push'](_0x5e192a['shift']());}};_0x4623fa(++_0x2e8591);}(a88_0x51cb,0x197));var a88_0x3a10=function(_0x4a2842,_0x3a427a){_0x4a2842=_0x4a2842-0x0;var _0x9fa10c=a88_0x51cb[_0x4a2842];return _0x9fa10c;};'use strict';var __importDefault=this&&this[a88_0x3a10('0x0')]||function(_0x45caac){return _0x45caac&&_0x45caac['__esModule']?_0x45caac:{'default':_0x45caac};};var __importStar=this&&this[a88_0x3a10('0x1')]||function(_0x45e060){if(_0x45e060&&_0x45e060[a88_0x3a10('0x2')])return _0x45e060;var _0xf0c6a3={};if(_0x45e060!=null)for(var _0x2c39ee in _0x45e060)if(Object['hasOwnProperty'][a88_0x3a10('0x3')](_0x45e060,_0x2c39ee))_0xf0c6a3[_0x2c39ee]=_0x45e060[_0x2c39ee];_0xf0c6a3[a88_0x3a10('0x4')]=_0x45e060;return _0xf0c6a3;};Object['defineProperty'](exports,a88_0x3a10('0x2'),{'value':!![]});const express_1=__importDefault(require(a88_0x3a10('0x5')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a88_0x3a10('0x6')));const logger_1=__importDefault(require(a88_0x3a10('0x7')));const lusca_1=__importDefault(require(a88_0x3a10('0x8')));const dotenv_1=__importDefault(require('dotenv'));const express_flash_1=__importDefault(require('express-flash'));const path_1=__importDefault(require(a88_0x3a10('0x9')));const passport_1=__importDefault(require('passport'));const express_validator_1=__importDefault(require(a88_0x3a10('0xa')));const fs_1=__importDefault(require('fs'));const cors=require('cors');if(fs_1[a88_0x3a10('0x4')][a88_0x3a10('0xb')](a88_0x3a10('0xc'))){logger_1['default'][a88_0x3a10('0xd')](a88_0x3a10('0xe'));dotenv_1['default'][a88_0x3a10('0xf')]({'path':a88_0x3a10('0xc')});}else{logger_1[a88_0x3a10('0x4')]['debug'](a88_0x3a10('0x10'));dotenv_1['default'][a88_0x3a10('0xf')]({'path':a88_0x3a10('0x11')});}const apiController=__importStar(require(a88_0x3a10('0x12')));const app=express_1[a88_0x3a10('0x4')]();app[a88_0x3a10('0x13')](a88_0x3a10('0x14'),process['env'][a88_0x3a10('0x15')]||0xbb8);app[a88_0x3a10('0x13')](a88_0x3a10('0x16'),path_1[a88_0x3a10('0x4')]['join'](__dirname,'../views'));app['set'](a88_0x3a10('0x17'),a88_0x3a10('0x18'));app[a88_0x3a10('0x19')](compression_1['default']());app[a88_0x3a10('0x19')](body_parser_1[a88_0x3a10('0x4')][a88_0x3a10('0x1a')]());app[a88_0x3a10('0x19')](cors());app[a88_0x3a10('0x19')](body_parser_1['default'][a88_0x3a10('0x1b')]({'extended':!![]}));app[a88_0x3a10('0x19')](express_validator_1[a88_0x3a10('0x4')]());app['use'](passport_1[a88_0x3a10('0x4')]['initialize']());app[a88_0x3a10('0x19')](passport_1['default'][a88_0x3a10('0x1c')]());app[a88_0x3a10('0x19')](express_flash_1[a88_0x3a10('0x4')]());app[a88_0x3a10('0x19')](lusca_1[a88_0x3a10('0x4')][a88_0x3a10('0x1d')](a88_0x3a10('0x1e')));app['use'](lusca_1[a88_0x3a10('0x4')][a88_0x3a10('0x1f')](!![]));app['use']((_0xbd1c0b,_0x5ebf5b,_0x21a5ab)=>{_0x5ebf5b[a88_0x3a10('0x20')][a88_0x3a10('0x21')]=_0xbd1c0b['user'];_0x21a5ab();});app[a88_0x3a10('0x19')]((_0x4d953a,_0x2cd90c,_0x576990)=>{_0x576990();});app[a88_0x3a10('0x19')](express_1[a88_0x3a10('0x4')][a88_0x3a10('0x22')](path_1[a88_0x3a10('0x4')]['join'](__dirname,a88_0x3a10('0x23')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require(a88_0x3a10('0x24')));const models_1=__importDefault(require(a88_0x3a10('0x25')));const routes_1=__importDefault(require(a88_0x3a10('0x26')));const sequelize_utils_1=__importDefault(require(a88_0x3a10('0x27')));const controllers_1=__importDefault(require(a88_0x3a10('0x28')));const models=new models_1[(a88_0x3a10('0x4'))](sequelize_1[a88_0x3a10('0x4')]);const controllers=new controllers_1[(a88_0x3a10('0x4'))](models);sequelize_utils_1[a88_0x3a10('0x4')][a88_0x3a10('0x29')]=models;sequelize_utils_1[a88_0x3a10('0x4')][a88_0x3a10('0x2a')]=controllers;routes_1['default'](app,passport_1[a88_0x3a10('0x4')],models,controllers);require(a88_0x3a10('0x2b'))(passport_1[a88_0x3a10('0x4')],models[a88_0x3a10('0x2c')]);sequelize_utils_1[a88_0x3a10('0x4')][a88_0x3a10('0x2d')]=sequelize_1[a88_0x3a10('0x4')];apiController[a88_0x3a10('0x2e')](sequelize_1[a88_0x3a10('0x4')]);const options={'exclude':['id',a88_0x3a10('0x2f'),'updatedAt','deletedAt','created_at',a88_0x3a10('0x30'),'deleted_at'],'userModel':a88_0x3a10('0x31'),'revisionAttribute':a88_0x3a10('0x32'),'revisionModel':a88_0x3a10('0x32'),'revisionChangeModel':'revision_change','enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a88_0x3a10('0x33'),'revisionId':a88_0x3a10('0x34')},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a88_0x3a10('0x35'),'continuationKey':a88_0x3a10('0x36')};const PaperTrail=require(a88_0x3a10('0x37'))[a88_0x3a10('0x38')](sequelize_1[a88_0x3a10('0x4')],options);PaperTrail['defineModels']({});app['get'](a88_0x3a10('0x39'),apiController['syncFtp']);app[a88_0x3a10('0x3a')](a88_0x3a10('0x3b'),apiController[a88_0x3a10('0x3c')]);app['get'](a88_0x3a10('0x3d'),apiController['processFtp']);app[a88_0x3a10('0x3a')](a88_0x3a10('0x3e'),apiController[a88_0x3a10('0x3f')]);app['get'](a88_0x3a10('0x40'),apiController[a88_0x3a10('0x41')]);app[a88_0x3a10('0x3a')](a88_0x3a10('0x42'),apiController[a88_0x3a10('0x43')]);exports[a88_0x3a10('0x4')]=app;