var a88_0x4303=['.env.example','./controllers/api','set','views','join','../views','view\x20engine','use','json','urlencoded','initialize','xframe','SAMEORIGIN','xssProtection','locals','user','static','public','./app/models','./app/controllers','models','controllers','./config/passport','usersModel','setSequelize','updatedAt','deletedAt','updated_at','deleted_at','users','revision','revision_change','document_id','current_user_request','user_id','sequelize-paper-trail','defineModels','get','/api/syncftp','syncFtp','/api/downloadFtp','downloadFtp','/api/processFtp','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByDay','/api/getPassCountingByHour/:direction','getPassCountingByHour','__esModule','__importStar','hasOwnProperty','default','defineProperty','express','compression','body-parser','./util/logger','express-flash','path','passport','cors','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables'];(function(_0x427c6f,_0x517e3f){var _0x533658=function(_0x280b4f){while(--_0x280b4f){_0x427c6f['push'](_0x427c6f['shift']());}};_0x533658(++_0x517e3f);}(a88_0x4303,0x17f));var a88_0x5b94=function(_0xb479be,_0x4bb6ab){_0xb479be=_0xb479be-0x0;var _0x44c2ed=a88_0x4303[_0xb479be];return _0x44c2ed;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x248bfe){return _0x248bfe&&_0x248bfe[a88_0x5b94('0x0')]?_0x248bfe:{'default':_0x248bfe};};var __importStar=this&&this[a88_0x5b94('0x1')]||function(_0x223088){if(_0x223088&&_0x223088[a88_0x5b94('0x0')])return _0x223088;var _0x462b99={};if(_0x223088!=null)for(var _0x6ff0d in _0x223088)if(Object[a88_0x5b94('0x2')]['call'](_0x223088,_0x6ff0d))_0x462b99[_0x6ff0d]=_0x223088[_0x6ff0d];_0x462b99[a88_0x5b94('0x3')]=_0x223088;return _0x462b99;};Object[a88_0x5b94('0x4')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a88_0x5b94('0x5')));const compression_1=__importDefault(require(a88_0x5b94('0x6')));const body_parser_1=__importDefault(require(a88_0x5b94('0x7')));const logger_1=__importDefault(require(a88_0x5b94('0x8')));const lusca_1=__importDefault(require('lusca'));const dotenv_1=__importDefault(require('dotenv'));const express_flash_1=__importDefault(require(a88_0x5b94('0x9')));const path_1=__importDefault(require(a88_0x5b94('0xa')));const passport_1=__importDefault(require(a88_0x5b94('0xb')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));const cors=require(a88_0x5b94('0xc'));if(fs_1[a88_0x5b94('0x3')][a88_0x5b94('0xd')](a88_0x5b94('0xe'))){logger_1[a88_0x5b94('0x3')][a88_0x5b94('0xf')](a88_0x5b94('0x10'));dotenv_1[a88_0x5b94('0x3')][a88_0x5b94('0x11')]({'path':a88_0x5b94('0xe')});}else{logger_1[a88_0x5b94('0x3')][a88_0x5b94('0xf')](a88_0x5b94('0x12'));dotenv_1[a88_0x5b94('0x3')][a88_0x5b94('0x11')]({'path':a88_0x5b94('0x13')});}const apiController=__importStar(require(a88_0x5b94('0x14')));const app=express_1[a88_0x5b94('0x3')]();app['set']('port',process['env']['PORT']||0xbb8);app[a88_0x5b94('0x15')](a88_0x5b94('0x16'),path_1[a88_0x5b94('0x3')][a88_0x5b94('0x17')](__dirname,a88_0x5b94('0x18')));app['set'](a88_0x5b94('0x19'),'pug');app[a88_0x5b94('0x1a')](compression_1[a88_0x5b94('0x3')]());app['use'](body_parser_1[a88_0x5b94('0x3')][a88_0x5b94('0x1b')]());app[a88_0x5b94('0x1a')](cors());app[a88_0x5b94('0x1a')](body_parser_1[a88_0x5b94('0x3')][a88_0x5b94('0x1c')]({'extended':!![]}));app[a88_0x5b94('0x1a')](express_validator_1[a88_0x5b94('0x3')]());app[a88_0x5b94('0x1a')](passport_1[a88_0x5b94('0x3')][a88_0x5b94('0x1d')]());app[a88_0x5b94('0x1a')](passport_1['default']['session']());app[a88_0x5b94('0x1a')](express_flash_1[a88_0x5b94('0x3')]());app[a88_0x5b94('0x1a')](lusca_1[a88_0x5b94('0x3')][a88_0x5b94('0x1e')](a88_0x5b94('0x1f')));app[a88_0x5b94('0x1a')](lusca_1[a88_0x5b94('0x3')][a88_0x5b94('0x20')](!![]));app[a88_0x5b94('0x1a')]((_0x2ae6c5,_0x5751a9,_0x1636fc)=>{_0x5751a9[a88_0x5b94('0x21')][a88_0x5b94('0x22')]=_0x2ae6c5[a88_0x5b94('0x22')];_0x1636fc();});app[a88_0x5b94('0x1a')]((_0x183d35,_0x295943,_0x59b952)=>{_0x59b952();});app[a88_0x5b94('0x1a')](express_1[a88_0x5b94('0x3')][a88_0x5b94('0x23')](path_1[a88_0x5b94('0x3')][a88_0x5b94('0x17')](__dirname,a88_0x5b94('0x24')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require('./config/sequelize'));const models_1=__importDefault(require(a88_0x5b94('0x25')));const routes_1=__importDefault(require('./app/routes'));const sequelize_utils_1=__importDefault(require('./infrastructure/sequelize-utils'));const controllers_1=__importDefault(require(a88_0x5b94('0x26')));const models=new models_1[(a88_0x5b94('0x3'))](sequelize_1['default']);const controllers=new controllers_1[(a88_0x5b94('0x3'))](models);sequelize_utils_1[a88_0x5b94('0x3')][a88_0x5b94('0x27')]=models;sequelize_utils_1[a88_0x5b94('0x3')][a88_0x5b94('0x28')]=controllers;routes_1[a88_0x5b94('0x3')](app,passport_1[a88_0x5b94('0x3')],models,controllers);require(a88_0x5b94('0x29'))(passport_1['default'],models[a88_0x5b94('0x2a')]);sequelize_utils_1[a88_0x5b94('0x3')]['instance']=sequelize_1[a88_0x5b94('0x3')];apiController[a88_0x5b94('0x2b')](sequelize_1['default']);const options={'exclude':['id','createdAt',a88_0x5b94('0x2c'),a88_0x5b94('0x2d'),'created_at',a88_0x5b94('0x2e'),a88_0x5b94('0x2f')],'userModel':a88_0x5b94('0x30'),'revisionAttribute':'revision','revisionModel':a88_0x5b94('0x31'),'revisionChangeModel':a88_0x5b94('0x32'),'enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a88_0x5b94('0x33'),'revisionId':'revision_id'},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a88_0x5b94('0x34'),'continuationKey':a88_0x5b94('0x35')};const PaperTrail=require(a88_0x5b94('0x36'))['init'](sequelize_1[a88_0x5b94('0x3')],options);PaperTrail[a88_0x5b94('0x37')]({});app[a88_0x5b94('0x38')](a88_0x5b94('0x39'),apiController[a88_0x5b94('0x3a')]);app[a88_0x5b94('0x38')](a88_0x5b94('0x3b'),apiController[a88_0x5b94('0x3c')]);app['get'](a88_0x5b94('0x3d'),apiController['processFtp']);app[a88_0x5b94('0x38')]('/api/getPassCounting/:direction',apiController[a88_0x5b94('0x3e')]);app[a88_0x5b94('0x38')](a88_0x5b94('0x3f'),apiController[a88_0x5b94('0x40')]);app[a88_0x5b94('0x38')](a88_0x5b94('0x41'),apiController[a88_0x5b94('0x42')]);exports[a88_0x5b94('0x3')]=app;