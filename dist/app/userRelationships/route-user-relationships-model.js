var a237_0x14cc=['__importDefault','defineProperty','__esModule','sequelize','../../infrastructure/model-base','INTEGER','usersModel','getEntity','associate','belongsTo','created_by_user_id','bind','import','count','then','create','admin','log','UserRelationshipsModel\x20populated','default'];(function(_0x2f184b,_0x150adb){var _0x66a54d=function(_0x51fe1d){while(--_0x51fe1d){_0x2f184b['push'](_0x2f184b['shift']());}};_0x66a54d(++_0x150adb);}(a237_0x14cc,0x1a4));var a237_0x1ad3=function(_0x51ac07,_0x2fdc55){_0x51ac07=_0x51ac07-0x0;var _0x42729d=a237_0x14cc[_0x51ac07];return _0x42729d;};'use strict';var __importDefault=this&&this[a237_0x1ad3('0x0')]||function(_0x35a365){return _0x35a365&&_0x35a365['__esModule']?_0x35a365:{'default':_0x35a365};};Object[a237_0x1ad3('0x1')](exports,a237_0x1ad3('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a237_0x1ad3('0x3')));const model_base_1=__importDefault(require(a237_0x1ad3('0x4')));class UserRelationshipsModel extends model_base_1['default']{constructor(_0x563b4d,_0x5a39a5,_0x3f29f2){super(_0x3f29f2);const _0x1fedd5=function(_0x563b4d,_0x323a17){const _0x5cfa36={'user_relationship_status_id':{'type':sequelize_1['default'][a237_0x1ad3('0x5')],'references':{'model':_0x3f29f2['userRelationshipStatusesModel'],'key':'id'},'allowNull':!![]},'user_id':{'type':_0x323a17[a237_0x1ad3('0x5')],'references':{'model':_0x3f29f2[a237_0x1ad3('0x6')],'key':'id'}}};const _0x1fedd5=this[a237_0x1ad3('0x7')](_0x563b4d,_0x5a39a5,_0x5cfa36);_0x1fedd5[a237_0x1ad3('0x8')]=function(_0x3f29f2){_0x1fedd5[a237_0x1ad3('0x9')](_0x3f29f2[a237_0x1ad3('0x6')],{'foreignKey':a237_0x1ad3('0xa')});_0x1fedd5[a237_0x1ad3('0x9')](_0x3f29f2[a237_0x1ad3('0x6')],{'foreignKey':'user_id'});};return _0x1fedd5;}[a237_0x1ad3('0xb')](this);const _0x4b970a=_0x563b4d[a237_0x1ad3('0xc')](_0x5a39a5,_0x1fedd5);_0x4b970a['sync']()['then'](()=>{_0x4b970a[a237_0x1ad3('0xd')]()[a237_0x1ad3('0xe')](_0x4fc1d0=>{if(_0x4fc1d0==0x0){_0x4b970a[a237_0x1ad3('0xf')]({'first_name':a237_0x1ad3('0x10'),'last_name':a237_0x1ad3('0x10'),'user_relationship_status_id':0x1,'user_id':0x3,'created_by_user_id':0x2});console[a237_0x1ad3('0x11')](a237_0x1ad3('0x12'));}});});return _0x4b970a;}}exports[a237_0x1ad3('0x13')]=UserRelationshipsModel;