var a48_0x192a=['default','INTEGER','UUIDV4','DATE','import','__esModule','defineProperty','sequelize','define'];(function(_0x145923,_0x2f3235){var _0x23b617=function(_0x1d1558){while(--_0x1d1558){_0x145923['push'](_0x145923['shift']());}};_0x23b617(++_0x2f3235);}(a48_0x192a,0xb9));var a48_0xf686=function(_0x5f26ae,_0x582d8e){_0x5f26ae=_0x5f26ae-0x0;var _0x30b99b=a48_0x192a[_0x5f26ae];return _0x30b99b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x267251){return _0x267251&&_0x267251[a48_0xf686('0x0')]?_0x267251:{'default':_0x267251};};Object[a48_0xf686('0x1')](exports,a48_0xf686('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a48_0xf686('0x2')));class AlarmsModel{constructor(_0x39921a,_0xffc92a,_0xa1132e){const _0xf7839a=function(_0x39921a,_0x167228){const _0xf7839a=_0x39921a[a48_0xf686('0x3')](_0xffc92a,{'id':{'type':sequelize_1[a48_0xf686('0x4')][a48_0xf686('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a48_0xf686('0x4')][a48_0xf686('0x6')]},'device_id':{'type':_0x167228['INTEGER'],'references':{'model':_0xa1132e,'key':'id'}},'lat':{'type':sequelize_1[a48_0xf686('0x4')]['DOUBLE']},'lon':{'type':sequelize_1[a48_0xf686('0x4')]['DOUBLE']},'status':{'type':sequelize_1[a48_0xf686('0x4')][a48_0xf686('0x5')]},'reported_at':{'type':_0x167228[a48_0xf686('0x7')],'allowNull':![]},'created_at':{'type':_0x167228[a48_0xf686('0x7')],'allowNull':![]},'updated_at':_0x167228[a48_0xf686('0x7')],'deleted_at':_0x167228['DATE']},{'paranoid':!![],'underscored':!![]});return _0xf7839a;};const _0x4954cb=_0x39921a[a48_0xf686('0x8')](_0xffc92a,_0xf7839a);return _0x4954cb;}}exports['default']=AlarmsModel;