var a81_0x2c32=['then','count','Requested','create','log','__importDefault','__esModule','sequelize','../../infrastructure/model-base','default','STRING','hasMany','usersModel','user_status_id','import','sync'];(function(_0x4cd2dc,_0x366917){var _0x58ae72=function(_0x1d8a57){while(--_0x1d8a57){_0x4cd2dc['push'](_0x4cd2dc['shift']());}};_0x58ae72(++_0x366917);}(a81_0x2c32,0x85));var a81_0x5ca0=function(_0x1f7b2a,_0x58bda6){_0x1f7b2a=_0x1f7b2a-0x0;var _0x1c543c=a81_0x2c32[_0x1f7b2a];return _0x1c543c;};'use strict';var __importDefault=this&&this[a81_0x5ca0('0x0')]||function(_0x5e46a9){return _0x5e46a9&&_0x5e46a9[a81_0x5ca0('0x1')]?_0x5e46a9:{'default':_0x5e46a9};};Object['defineProperty'](exports,a81_0x5ca0('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a81_0x5ca0('0x2')));const model_base_1=__importDefault(require(a81_0x5ca0('0x3')));class UserRelationshipStatusesModel extends model_base_1[a81_0x5ca0('0x4')]{constructor(_0x206510,_0x484eec,_0x3365b8){super(_0x3365b8);const _0x332e2a=function(_0x206510){const _0x2a2ca5={'name':{'type':sequelize_1[a81_0x5ca0('0x4')][a81_0x5ca0('0x5')]}};const _0x332e2a=this['getEntity'](_0x206510,_0x484eec,_0x2a2ca5,function(_0x3365b8){_0x332e2a[a81_0x5ca0('0x6')](_0x3365b8[a81_0x5ca0('0x7')],{'foreignKey':a81_0x5ca0('0x8')});});return _0x332e2a;}['bind'](this);const _0x176fd2=_0x206510[a81_0x5ca0('0x9')](_0x484eec,_0x332e2a);_0x176fd2[a81_0x5ca0('0xa')]()[a81_0x5ca0('0xb')](()=>{_0x176fd2[a81_0x5ca0('0xc')]()[a81_0x5ca0('0xb')](_0x33f402=>{if(_0x33f402==0x0){_0x176fd2['create']({'name':a81_0x5ca0('0xd')});_0x176fd2[a81_0x5ca0('0xe')]({'name':'Accepted'});_0x176fd2[a81_0x5ca0('0xe')]({'name':'Blocked'});console[a81_0x5ca0('0xf')]('UserRelationshipStatusesModel\x20populated');}});});return _0x176fd2;}}exports[a81_0x5ca0('0x4')]=UserRelationshipStatusesModel;