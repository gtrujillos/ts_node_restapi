var a156_0x2a05=['__esModule','defineProperty','sequelize','default','userRelationshipStatusesModel','usersModel','getEntity','belongsTo','user_id','import','count','then','admin','create','log','UserRelationshipsModel\x20populated','__importDefault'];(function(_0xcb626d,_0x17214d){var _0x146f8f=function(_0x263001){while(--_0x263001){_0xcb626d['push'](_0xcb626d['shift']());}};_0x146f8f(++_0x17214d);}(a156_0x2a05,0x142));var a156_0x5c46=function(_0x3c8c57,_0x56d1d9){_0x3c8c57=_0x3c8c57-0x0;var _0x1cade4=a156_0x2a05[_0x3c8c57];return _0x1cade4;};'use strict';var __importDefault=this&&this[a156_0x5c46('0x0')]||function(_0x58a865){return _0x58a865&&_0x58a865[a156_0x5c46('0x1')]?_0x58a865:{'default':_0x58a865};};Object[a156_0x5c46('0x2')](exports,a156_0x5c46('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a156_0x5c46('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class UserRelationshipsModel extends model_base_1[a156_0x5c46('0x4')]{constructor(_0x1a0e5d,_0xebe2cd,_0x3828bd){super(_0x3828bd);const _0x5ba825=function(_0x1a0e5d,_0x30e3e4){const _0x337219={'user_relationship_status_id':{'type':sequelize_1[a156_0x5c46('0x4')]['INTEGER'],'references':{'model':_0x3828bd[a156_0x5c46('0x5')],'key':'id'},'allowNull':!![]},'user_id':{'type':_0x30e3e4['INTEGER'],'references':{'model':_0x3828bd[a156_0x5c46('0x6')],'key':'id'}}};const _0x5ba825=this[a156_0x5c46('0x7')](_0x1a0e5d,_0xebe2cd,_0x337219,function(_0x3828bd){_0x5ba825[a156_0x5c46('0x8')](_0x3828bd[a156_0x5c46('0x6')],{'foreignKey':a156_0x5c46('0x9')});});return _0x5ba825;}['bind'](this);const _0x1e2e07=_0x1a0e5d[a156_0x5c46('0xa')](_0xebe2cd,_0x5ba825);_0x1e2e07['sync']()['then'](()=>{_0x1e2e07[a156_0x5c46('0xb')]()[a156_0x5c46('0xc')](_0x1a8c7b=>{if(_0x1a8c7b==0x0){_0x1e2e07['create']({'first_name':a156_0x5c46('0xd'),'last_name':a156_0x5c46('0xd'),'user_relationship_status_id':0x1,'user_id':0x3,'created_by_user_id':0x2});_0x1e2e07[a156_0x5c46('0xe')]({'first_name':a156_0x5c46('0xd'),'last_name':a156_0x5c46('0xd'),'user_relationship_status_id':0x1,'user_id':0x4,'created_by_user_id':0x2});console[a156_0x5c46('0xf')](a156_0x5c46('0x10'));}});});return _0x1e2e07;}}exports['default']=UserRelationshipsModel;