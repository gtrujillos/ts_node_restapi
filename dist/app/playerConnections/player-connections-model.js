var a113_0x1eaf=['UUID','DOUBLE','INTEGER','DATE','__esModule','sequelize','default'];(function(_0x5d4a64,_0x193c02){var _0x4afe44=function(_0x1fd509){while(--_0x1fd509){_0x5d4a64['push'](_0x5d4a64['shift']());}};_0x4afe44(++_0x193c02);}(a113_0x1eaf,0xc8));var a113_0x276f=function(_0x428731,_0x40dc97){_0x428731=_0x428731-0x0;var _0x23ae72=a113_0x1eaf[_0x428731];return _0x23ae72;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x356756){return _0x356756&&_0x356756[a113_0x276f('0x0')]?_0x356756:{'default':_0x356756};};Object['defineProperty'](exports,a113_0x276f('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a113_0x276f('0x1')));class AlarmsModel{constructor(_0x2cb237,_0xe2b115,_0x33afb7){const _0x279f8e=function(_0x2cb237,_0x2fb33a){const _0x279f8e=_0x2cb237['define'](_0xe2b115,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a113_0x276f('0x2')][a113_0x276f('0x3')],'defaultValue':sequelize_1[a113_0x276f('0x2')]['UUIDV4']},'device_id':{'type':_0x2fb33a['INTEGER'],'references':{'model':_0x33afb7,'key':'id'}},'lat':{'type':sequelize_1['default'][a113_0x276f('0x4')]},'lon':{'type':sequelize_1[a113_0x276f('0x2')][a113_0x276f('0x4')]},'status':{'type':sequelize_1[a113_0x276f('0x2')][a113_0x276f('0x5')]},'reported_at':{'type':_0x2fb33a[a113_0x276f('0x6')],'allowNull':![]},'created_at':{'type':_0x2fb33a['DATE'],'allowNull':![]},'updated_at':_0x2fb33a[a113_0x276f('0x6')],'deleted_at':_0x2fb33a[a113_0x276f('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x279f8e;};const _0x15b562=_0x2cb237['import'](_0xe2b115,_0x279f8e);return _0x15b562;}}exports['default']=AlarmsModel;