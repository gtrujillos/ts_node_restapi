var a1_0x1ea3=['define','default','UUIDV4','DOUBLE','INTEGER','DATE','import','__importDefault','__esModule','sequelize'];(function(_0x9dc3d4,_0x37f2ad){var _0x29285d=function(_0x2f9ba6){while(--_0x2f9ba6){_0x9dc3d4['push'](_0x9dc3d4['shift']());}};_0x29285d(++_0x37f2ad);}(a1_0x1ea3,0x7f));var a1_0x5954=function(_0x41903e,_0x3556ee){_0x41903e=_0x41903e-0x0;var _0x484d9a=a1_0x1ea3[_0x41903e];return _0x484d9a;};'use strict';var __importDefault=this&&this[a1_0x5954('0x0')]||function(_0x542f8a){return _0x542f8a&&_0x542f8a['__esModule']?_0x542f8a:{'default':_0x542f8a};};Object['defineProperty'](exports,a1_0x5954('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x5954('0x2')));class AlarmsModel{constructor(_0x4f4cb5,_0x51da36,_0xa4f03f){const _0x584ba9=function(_0x4f4cb5,_0x2d5c5c){const _0x584ba9=_0x4f4cb5[a1_0x5954('0x3')](_0x51da36,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a1_0x5954('0x4')][a1_0x5954('0x5')]},'device_id':{'type':_0x2d5c5c['INTEGER'],'references':{'model':_0xa4f03f,'key':'id'}},'lat':{'type':sequelize_1[a1_0x5954('0x4')][a1_0x5954('0x6')]},'lon':{'type':sequelize_1['default']['DOUBLE']},'status':{'type':sequelize_1['default'][a1_0x5954('0x7')]},'reported_at':{'type':_0x2d5c5c['DATE'],'allowNull':![]},'created_at':{'type':_0x2d5c5c[a1_0x5954('0x8')],'allowNull':![]},'updated_at':_0x2d5c5c[a1_0x5954('0x8')],'deleted_at':_0x2d5c5c['DATE']},{'paranoid':!![],'underscored':!![]});return _0x584ba9;};const _0x460fe2=_0x4f4cb5[a1_0x5954('0x9')](_0x51da36,_0x584ba9);return _0x460fe2;}}exports['default']=AlarmsModel;