var a94_0x7683=['cors','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','set','join','../views','view\x20engine','pug','use','initialize','session','locals','user','static','public','./app/models','./app/routes','./infrastructure/sequelize-utils','controllers','./config/passport','setSequelize','createdAt','updatedAt','deletedAt','created_at','users','revision','document_id','revision_id','current_user_request','user_id','sequelize-paper-trail','init','defineModels','get','/api/syncftp','/api/downloadFtp','downloadFtp','/api/processFtp','processFtp','/api/getPassCounting/:direction','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByHour','__importDefault','__esModule','__importStar','hasOwnProperty','call','default','defineProperty','express','body-parser','./util/logger','lusca','dotenv','express-flash','passport'];(function(_0x46a615,_0x59c0bd){var _0x5c260e=function(_0x204b79){while(--_0x204b79){_0x46a615['push'](_0x46a615['shift']());}};_0x5c260e(++_0x59c0bd);}(a94_0x7683,0xee));var a94_0x4460=function(_0x4980dd,_0x5c063f){_0x4980dd=_0x4980dd-0x0;var _0x30fefd=a94_0x7683[_0x4980dd];return _0x30fefd;};'use strict';var __importDefault=this&&this[a94_0x4460('0x0')]||function(_0x21c3b8){return _0x21c3b8&&_0x21c3b8[a94_0x4460('0x1')]?_0x21c3b8:{'default':_0x21c3b8};};var __importStar=this&&this[a94_0x4460('0x2')]||function(_0xf4461c){if(_0xf4461c&&_0xf4461c[a94_0x4460('0x1')])return _0xf4461c;var _0x37bea7={};if(_0xf4461c!=null)for(var _0x3165a9 in _0xf4461c)if(Object[a94_0x4460('0x3')][a94_0x4460('0x4')](_0xf4461c,_0x3165a9))_0x37bea7[_0x3165a9]=_0xf4461c[_0x3165a9];_0x37bea7[a94_0x4460('0x5')]=_0xf4461c;return _0x37bea7;};Object[a94_0x4460('0x6')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a94_0x4460('0x7')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a94_0x4460('0x8')));const logger_1=__importDefault(require(a94_0x4460('0x9')));const lusca_1=__importDefault(require(a94_0x4460('0xa')));const dotenv_1=__importDefault(require(a94_0x4460('0xb')));const express_flash_1=__importDefault(require(a94_0x4460('0xc')));const path_1=__importDefault(require('path'));const passport_1=__importDefault(require(a94_0x4460('0xd')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));const cors=require(a94_0x4460('0xe'));if(fs_1[a94_0x4460('0x5')]['existsSync']('.env')){logger_1[a94_0x4460('0x5')][a94_0x4460('0xf')](a94_0x4460('0x10'));dotenv_1[a94_0x4460('0x5')][a94_0x4460('0x11')]({'path':a94_0x4460('0x12')});}else{logger_1['default']['debug'](a94_0x4460('0x13'));dotenv_1[a94_0x4460('0x5')][a94_0x4460('0x11')]({'path':a94_0x4460('0x14')});}const apiController=__importStar(require('./controllers/api'));const app=express_1[a94_0x4460('0x5')]();app['set']('port',process[a94_0x4460('0x15')]['PORT']||0xbb8);app[a94_0x4460('0x16')]('views',path_1[a94_0x4460('0x5')][a94_0x4460('0x17')](__dirname,a94_0x4460('0x18')));app[a94_0x4460('0x16')](a94_0x4460('0x19'),a94_0x4460('0x1a'));app[a94_0x4460('0x1b')](compression_1[a94_0x4460('0x5')]());app[a94_0x4460('0x1b')](body_parser_1[a94_0x4460('0x5')]['json']());app[a94_0x4460('0x1b')](body_parser_1['default']['urlencoded']({'extended':!![]}));app[a94_0x4460('0x1b')](express_validator_1[a94_0x4460('0x5')]());app[a94_0x4460('0x1b')](passport_1[a94_0x4460('0x5')][a94_0x4460('0x1c')]());app[a94_0x4460('0x1b')](passport_1[a94_0x4460('0x5')][a94_0x4460('0x1d')]());app['use'](express_flash_1['default']());app[a94_0x4460('0x1b')](lusca_1['default']['xframe']('SAMEORIGIN'));app[a94_0x4460('0x1b')](lusca_1[a94_0x4460('0x5')]['xssProtection'](!![]));app[a94_0x4460('0x1b')]((_0x270893,_0xbee6a4,_0x3876ed)=>{_0xbee6a4[a94_0x4460('0x1e')][a94_0x4460('0x1f')]=_0x270893['user'];_0x3876ed();});app[a94_0x4460('0x1b')]((_0x4bb39e,_0x5b9e2a,_0x212247)=>{_0x212247();});app[a94_0x4460('0x1b')](express_1['default'][a94_0x4460('0x20')](path_1[a94_0x4460('0x5')][a94_0x4460('0x17')](__dirname,a94_0x4460('0x21')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require('./config/sequelize'));const models_1=__importDefault(require(a94_0x4460('0x22')));const routes_1=__importDefault(require(a94_0x4460('0x23')));const sequelize_utils_1=__importDefault(require(a94_0x4460('0x24')));const controllers_1=__importDefault(require('./app/controllers'));const models=new models_1['default'](sequelize_1['default']);const controllers=new controllers_1[(a94_0x4460('0x5'))](models);sequelize_utils_1[a94_0x4460('0x5')]['models']=models;sequelize_utils_1[a94_0x4460('0x5')][a94_0x4460('0x25')]=controllers;routes_1['default'](app,passport_1[a94_0x4460('0x5')],models,controllers);require(a94_0x4460('0x26'))(passport_1[a94_0x4460('0x5')],models['usersModel']);sequelize_utils_1['default']['instance']=sequelize_1[a94_0x4460('0x5')];apiController[a94_0x4460('0x27')](sequelize_1[a94_0x4460('0x5')]);const options={'exclude':['id',a94_0x4460('0x28'),a94_0x4460('0x29'),a94_0x4460('0x2a'),a94_0x4460('0x2b'),'updated_at','deleted_at'],'userModel':a94_0x4460('0x2c'),'revisionAttribute':a94_0x4460('0x2d'),'revisionModel':'revision','revisionChangeModel':'revision_change','enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a94_0x4460('0x2e'),'revisionId':a94_0x4460('0x2f')},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a94_0x4460('0x30'),'continuationKey':a94_0x4460('0x31')};const PaperTrail=require(a94_0x4460('0x32'))[a94_0x4460('0x33')](sequelize_1['default'],options);PaperTrail[a94_0x4460('0x34')]({});app[a94_0x4460('0x35')](a94_0x4460('0x36'),apiController['syncFtp']);app[a94_0x4460('0x35')](a94_0x4460('0x37'),apiController[a94_0x4460('0x38')]);app[a94_0x4460('0x35')](a94_0x4460('0x39'),apiController[a94_0x4460('0x3a')]);app['get'](a94_0x4460('0x3b'),apiController[a94_0x4460('0x3c')]);app['get'](a94_0x4460('0x3d'),apiController['getPassCountingByDay']);app[a94_0x4460('0x35')]('/api/getPassCountingByHour/:direction',apiController[a94_0x4460('0x3e')]);exports[a94_0x4460('0x5')]=app;