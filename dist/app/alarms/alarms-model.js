var a1_0xd540=['default','INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','defineProperty','sequelize','define'];(function(_0x47e307,_0x534544){var _0x2cd825=function(_0x457071){while(--_0x457071){_0x47e307['push'](_0x47e307['shift']());}};_0x2cd825(++_0x534544);}(a1_0xd540,0x7f));var a1_0x4aec=function(_0x40d3a1,_0x3c23a1){_0x40d3a1=_0x40d3a1-0x0;var _0x46221f=a1_0xd540[_0x40d3a1];return _0x46221f;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5c171d){return _0x5c171d&&_0x5c171d['__esModule']?_0x5c171d:{'default':_0x5c171d};};Object[a1_0x4aec('0x0')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a1_0x4aec('0x1')));class AlarmsModel{constructor(_0x5fdd07,_0x2ce0f2,_0x5e6668){const _0x4c3cf5=function(_0x5fdd07,_0x52aff1){const _0x4c3cf5=_0x5fdd07[a1_0x4aec('0x2')](_0x2ce0f2,{'id':{'type':sequelize_1[a1_0x4aec('0x3')][a1_0x4aec('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a1_0x4aec('0x3')][a1_0x4aec('0x5')],'defaultValue':sequelize_1[a1_0x4aec('0x3')][a1_0x4aec('0x6')]},'device_id':{'type':_0x52aff1[a1_0x4aec('0x4')],'references':{'model':_0x5e6668,'key':'id'}},'lat':{'type':sequelize_1[a1_0x4aec('0x3')]['DOUBLE']},'lon':{'type':sequelize_1[a1_0x4aec('0x3')][a1_0x4aec('0x7')]},'status':{'type':sequelize_1[a1_0x4aec('0x3')][a1_0x4aec('0x4')]},'reported_at':{'type':_0x52aff1[a1_0x4aec('0x8')],'allowNull':![]},'created_at':{'type':_0x52aff1[a1_0x4aec('0x8')],'allowNull':![]},'updated_at':_0x52aff1['DATE'],'deleted_at':_0x52aff1[a1_0x4aec('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x4c3cf5;};const _0x10a221=_0x5fdd07[a1_0x4aec('0x9')](_0x2ce0f2,_0x4c3cf5);return _0x10a221;}}exports['default']=AlarmsModel;