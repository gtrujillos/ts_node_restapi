var a168_0x550c=['create','admin','admin@admin','usuario1@usuario.com','$2a$10$tarJpN3JvbblgJfpDV.jzuJKC579Sl14GMCv9H4ipq9ZHz.3FsPOm','usuario2','usuario2@usuario.com','usuario3','usuario3@usuario.com','Users\x20populated','__importDefault','__esModule','defineProperty','../../infrastructure/model-base','default','documentTypesModel','STRING','DATE','getEntity','belongsTo','userStatusModel','user_status_id','hasMany','user_id','bind','import','sync','then'];(function(_0x1929fe,_0x3927c4){var _0x451126=function(_0x20c31f){while(--_0x20c31f){_0x1929fe['push'](_0x1929fe['shift']());}};_0x451126(++_0x3927c4);}(a168_0x550c,0x1e6));var a168_0x56ae=function(_0x329ddd,_0x3b797f){_0x329ddd=_0x329ddd-0x0;var _0x531725=a168_0x550c[_0x329ddd];return _0x531725;};'use strict';var __importDefault=this&&this[a168_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a168_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a168_0x56ae('0x2')](exports,a168_0x56ae('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a168_0x56ae('0x3')));class UsersModel extends model_base_1[a168_0x56ae('0x4')]{constructor(_0x292610,_0x151bd2,_0x558098){super(_0x558098);const _0xd7aec1=function(_0x292610){const _0x948b6c={'user_status_id':{'type':sequelize_1[a168_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098['userStatusModel'],'key':'id'}},'document_type_id':{'type':sequelize_1[a168_0x56ae('0x4')]['INTEGER'],'references':{'model':_0x558098[a168_0x56ae('0x5')],'key':'id'}},'first_name':{'type':sequelize_1[a168_0x56ae('0x4')][a168_0x56ae('0x6')]},'last_name':{'type':sequelize_1[a168_0x56ae('0x4')][a168_0x56ae('0x6')]},'nickname':{'type':sequelize_1['default'][a168_0x56ae('0x6')]},'document':{'type':sequelize_1[a168_0x56ae('0x4')][a168_0x56ae('0x6')]},'email':{'type':sequelize_1['default']['STRING'],'unique':!![]},'phone':{'type':sequelize_1[a168_0x56ae('0x4')]['STRING']},'username':{'type':sequelize_1['default'][a168_0x56ae('0x6')],'unique':!![]},'birthday':sequelize_1[a168_0x56ae('0x4')][a168_0x56ae('0x7')],'password':{'type':sequelize_1[a168_0x56ae('0x4')][a168_0x56ae('0x6')]},'email_confirmed_at':sequelize_1[a168_0x56ae('0x4')]['DATE'],'is_private':{'type':sequelize_1['default']['BOOLEAN'],'allowNull':![],'defaultValue':!![]}};const _0xd7aec1=this[a168_0x56ae('0x8')](_0x292610,_0x151bd2,_0x948b6c,function(_0x558098){_0xd7aec1[a168_0x56ae('0x9')](_0x558098[a168_0x56ae('0xa')],{'foreignKey':a168_0x56ae('0xb')});_0xd7aec1[a168_0x56ae('0xc')](_0x558098['userRelationshipsModel'],{'foreignKey':a168_0x56ae('0xd')});});return _0xd7aec1;}[a168_0x56ae('0xe')](this);const _0x2b4227=_0x292610[a168_0x56ae('0xf')](_0x151bd2,_0xd7aec1);_0x2b4227[a168_0x56ae('0x10')]()[a168_0x56ae('0x11')](()=>{_0x2b4227['count']()[a168_0x56ae('0x11')](_0x5d0880=>{if(_0x5d0880==0x0){_0x2b4227[a168_0x56ae('0x12')]({'first_name':'admin','last_name':a168_0x56ae('0x13'),'email':a168_0x56ae('0x14'),'username':'admin@admin','is_private':!![]});_0x2b4227[a168_0x56ae('0x12')]({'first_name':'','last_name':'usuario1','email':a168_0x56ae('0x15'),'password':a168_0x56ae('0x16'),'username':a168_0x56ae('0x15'),'is_private':![]});_0x2b4227[a168_0x56ae('0x12')]({'first_name':a168_0x56ae('0x17'),'last_name':a168_0x56ae('0x17'),'email':a168_0x56ae('0x18'),'password':a168_0x56ae('0x16'),'username':a168_0x56ae('0x18'),'is_private':![]});_0x2b4227[a168_0x56ae('0x12')]({'first_name':a168_0x56ae('0x19'),'last_name':a168_0x56ae('0x19'),'email':'usuario3@usuario.com','password':a168_0x56ae('0x16'),'username':a168_0x56ae('0x1a'),'is_private':![]});console['log'](a168_0x56ae('0x1b'));}});});return _0x2b4227;}}exports['default']=UsersModel;