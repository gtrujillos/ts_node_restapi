var a49_0x5677=['INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','__importDefault','sequelize','define','default'];(function(_0x387008,_0x36a841){var _0xdf8c7c=function(_0x5ed488){while(--_0x5ed488){_0x387008['push'](_0x387008['shift']());}};_0xdf8c7c(++_0x36a841);}(a49_0x5677,0x1a0));var a49_0x4c72=function(_0xa50539,_0x36e4a7){_0xa50539=_0xa50539-0x0;var _0x44317e=a49_0x5677[_0xa50539];return _0x44317e;};'use strict';var __importDefault=this&&this[a49_0x4c72('0x0')]||function(_0x399f10){return _0x399f10&&_0x399f10['__esModule']?_0x399f10:{'default':_0x399f10};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a49_0x4c72('0x1')));class AlarmsModel{constructor(_0x15f705,_0x431a43,_0x251741){const _0x32964=function(_0x15f705,_0x553477){const _0x32964=_0x15f705[a49_0x4c72('0x2')](_0x431a43,{'id':{'type':sequelize_1[a49_0x4c72('0x3')][a49_0x4c72('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a49_0x4c72('0x3')][a49_0x4c72('0x5')],'defaultValue':sequelize_1[a49_0x4c72('0x3')][a49_0x4c72('0x6')]},'device_id':{'type':_0x553477['INTEGER'],'references':{'model':_0x251741,'key':'id'}},'lat':{'type':sequelize_1[a49_0x4c72('0x3')][a49_0x4c72('0x7')]},'lon':{'type':sequelize_1['default']['DOUBLE']},'status':{'type':sequelize_1[a49_0x4c72('0x3')][a49_0x4c72('0x4')]},'reported_at':{'type':_0x553477[a49_0x4c72('0x8')],'allowNull':![]},'created_at':{'type':_0x553477[a49_0x4c72('0x8')],'allowNull':![]},'updated_at':_0x553477[a49_0x4c72('0x8')],'deleted_at':_0x553477[a49_0x4c72('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x32964;};const _0x156eb5=_0x15f705[a49_0x4c72('0x9')](_0x431a43,_0x32964);return _0x156eb5;}}exports['default']=AlarmsModel;