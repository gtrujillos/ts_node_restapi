var a88_0x7683=['cors','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','set','join','../views','view\x20engine','pug','use','initialize','session','locals','user','static','public','./app/models','./app/routes','./infrastructure/sequelize-utils','controllers','./config/passport','setSequelize','createdAt','updatedAt','deletedAt','created_at','users','revision','document_id','revision_id','current_user_request','user_id','sequelize-paper-trail','init','defineModels','get','/api/syncftp','/api/downloadFtp','downloadFtp','/api/processFtp','processFtp','/api/getPassCounting/:direction','getPassCounting','/api/getPassCountingByDay/:direction','getPassCountingByHour','__importDefault','__esModule','__importStar','hasOwnProperty','call','default','defineProperty','express','body-parser','./util/logger','lusca','dotenv','express-flash','passport'];(function(_0x35be28,_0xaf06b3){var _0x598bbd=function(_0x24c8ec){while(--_0x24c8ec){_0x35be28['push'](_0x35be28['shift']());}};_0x598bbd(++_0xaf06b3);}(a88_0x7683,0xee));var a88_0x4460=function(_0x31aa6c,_0x312141){_0x31aa6c=_0x31aa6c-0x0;var _0x1c2088=a88_0x7683[_0x31aa6c];return _0x1c2088;};'use strict';var __importDefault=this&&this[a88_0x4460('0x0')]||function(_0x21c3b8){return _0x21c3b8&&_0x21c3b8[a88_0x4460('0x1')]?_0x21c3b8:{'default':_0x21c3b8};};var __importStar=this&&this[a88_0x4460('0x2')]||function(_0xf4461c){if(_0xf4461c&&_0xf4461c[a88_0x4460('0x1')])return _0xf4461c;var _0x37bea7={};if(_0xf4461c!=null)for(var _0x3165a9 in _0xf4461c)if(Object[a88_0x4460('0x3')][a88_0x4460('0x4')](_0xf4461c,_0x3165a9))_0x37bea7[_0x3165a9]=_0xf4461c[_0x3165a9];_0x37bea7[a88_0x4460('0x5')]=_0xf4461c;return _0x37bea7;};Object[a88_0x4460('0x6')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a88_0x4460('0x7')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a88_0x4460('0x8')));const logger_1=__importDefault(require(a88_0x4460('0x9')));const lusca_1=__importDefault(require(a88_0x4460('0xa')));const dotenv_1=__importDefault(require(a88_0x4460('0xb')));const express_flash_1=__importDefault(require(a88_0x4460('0xc')));const path_1=__importDefault(require('path'));const passport_1=__importDefault(require(a88_0x4460('0xd')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));const cors=require(a88_0x4460('0xe'));if(fs_1[a88_0x4460('0x5')]['existsSync']('.env')){logger_1[a88_0x4460('0x5')][a88_0x4460('0xf')](a88_0x4460('0x10'));dotenv_1[a88_0x4460('0x5')][a88_0x4460('0x11')]({'path':a88_0x4460('0x12')});}else{logger_1['default']['debug'](a88_0x4460('0x13'));dotenv_1[a88_0x4460('0x5')][a88_0x4460('0x11')]({'path':a88_0x4460('0x14')});}const apiController=__importStar(require('./controllers/api'));const app=express_1[a88_0x4460('0x5')]();app['set']('port',process[a88_0x4460('0x15')]['PORT']||0xbb8);app[a88_0x4460('0x16')]('views',path_1[a88_0x4460('0x5')][a88_0x4460('0x17')](__dirname,a88_0x4460('0x18')));app[a88_0x4460('0x16')](a88_0x4460('0x19'),a88_0x4460('0x1a'));app[a88_0x4460('0x1b')](compression_1[a88_0x4460('0x5')]());app[a88_0x4460('0x1b')](body_parser_1[a88_0x4460('0x5')]['json']());app[a88_0x4460('0x1b')](body_parser_1['default']['urlencoded']({'extended':!![]}));app[a88_0x4460('0x1b')](express_validator_1[a88_0x4460('0x5')]());app[a88_0x4460('0x1b')](passport_1[a88_0x4460('0x5')][a88_0x4460('0x1c')]());app[a88_0x4460('0x1b')](passport_1[a88_0x4460('0x5')][a88_0x4460('0x1d')]());app['use'](express_flash_1['default']());app[a88_0x4460('0x1b')](lusca_1['default']['xframe']('SAMEORIGIN'));app[a88_0x4460('0x1b')](lusca_1[a88_0x4460('0x5')]['xssProtection'](!![]));app[a88_0x4460('0x1b')]((_0x270893,_0xbee6a4,_0x3876ed)=>{_0xbee6a4[a88_0x4460('0x1e')][a88_0x4460('0x1f')]=_0x270893['user'];_0x3876ed();});app[a88_0x4460('0x1b')]((_0x4bb39e,_0x5b9e2a,_0x212247)=>{_0x212247();});app[a88_0x4460('0x1b')](express_1['default'][a88_0x4460('0x20')](path_1[a88_0x4460('0x5')][a88_0x4460('0x17')](__dirname,a88_0x4460('0x21')),{'maxAge':0x758fac300}));const sequelize_1=__importDefault(require('./config/sequelize'));const models_1=__importDefault(require(a88_0x4460('0x22')));const routes_1=__importDefault(require(a88_0x4460('0x23')));const sequelize_utils_1=__importDefault(require(a88_0x4460('0x24')));const controllers_1=__importDefault(require('./app/controllers'));const models=new models_1['default'](sequelize_1['default']);const controllers=new controllers_1[(a88_0x4460('0x5'))](models);sequelize_utils_1[a88_0x4460('0x5')]['models']=models;sequelize_utils_1[a88_0x4460('0x5')][a88_0x4460('0x25')]=controllers;routes_1['default'](app,passport_1[a88_0x4460('0x5')],models,controllers);require(a88_0x4460('0x26'))(passport_1[a88_0x4460('0x5')],models['usersModel']);sequelize_utils_1['default']['instance']=sequelize_1[a88_0x4460('0x5')];apiController[a88_0x4460('0x27')](sequelize_1[a88_0x4460('0x5')]);const options={'exclude':['id',a88_0x4460('0x28'),a88_0x4460('0x29'),a88_0x4460('0x2a'),a88_0x4460('0x2b'),'updated_at','deleted_at'],'userModel':a88_0x4460('0x2c'),'revisionAttribute':a88_0x4460('0x2d'),'revisionModel':'revision','revisionChangeModel':'revision_change','enableRevisionChangeModel':!![],'UUID':![],'underscored':!![],'underscoredAttributes':!![],'defaultAttributes':{'documentId':a88_0x4460('0x2e'),'revisionId':a88_0x4460('0x2f')},'enableCompression':![],'enableMigration':![],'enableStrictDiff':!![],'continuationNamespace':a88_0x4460('0x30'),'continuationKey':a88_0x4460('0x31')};const PaperTrail=require(a88_0x4460('0x32'))[a88_0x4460('0x33')](sequelize_1['default'],options);PaperTrail[a88_0x4460('0x34')]({});app[a88_0x4460('0x35')](a88_0x4460('0x36'),apiController['syncFtp']);app[a88_0x4460('0x35')](a88_0x4460('0x37'),apiController[a88_0x4460('0x38')]);app[a88_0x4460('0x35')](a88_0x4460('0x39'),apiController[a88_0x4460('0x3a')]);app['get'](a88_0x4460('0x3b'),apiController[a88_0x4460('0x3c')]);app['get'](a88_0x4460('0x3d'),apiController['getPassCountingByDay']);app[a88_0x4460('0x35')]('/api/getPassCountingByHour/:direction',apiController[a88_0x4460('0x3e')]);exports[a88_0x4460('0x5')]=app;