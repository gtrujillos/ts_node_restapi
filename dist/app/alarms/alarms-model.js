var a1_0x48ca=['DATE','defineProperty','__esModule','sequelize','default','UUID','UUIDV4','INTEGER','DOUBLE'];(function(_0x38f7fb,_0xaf5fa1){var _0x347679=function(_0x28d3ec){while(--_0x28d3ec){_0x38f7fb['push'](_0x38f7fb['shift']());}};_0x347679(++_0xaf5fa1);}(a1_0x48ca,0xb5));var a1_0x6ae5=function(_0x208080,_0x406010){_0x208080=_0x208080-0x0;var _0x5e4209=a1_0x48ca[_0x208080];return _0x5e4209;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4815b7){return _0x4815b7&&_0x4815b7['__esModule']?_0x4815b7:{'default':_0x4815b7};};Object[a1_0x6ae5('0x0')](exports,a1_0x6ae5('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x6ae5('0x2')));class AlarmsModel{constructor(_0x176404,_0x3abb62,_0x46c354){const _0xb20328=function(_0x176404,_0x2b6e9){const _0xb20328=_0x176404['define'](_0x3abb62,{'id':{'type':sequelize_1[a1_0x6ae5('0x3')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a1_0x6ae5('0x3')][a1_0x6ae5('0x4')],'defaultValue':sequelize_1[a1_0x6ae5('0x3')][a1_0x6ae5('0x5')]},'device_id':{'type':_0x2b6e9[a1_0x6ae5('0x6')],'references':{'model':_0x46c354,'key':'id'}},'lat':{'type':sequelize_1[a1_0x6ae5('0x3')][a1_0x6ae5('0x7')]},'lon':{'type':sequelize_1['default'][a1_0x6ae5('0x7')]},'status':{'type':sequelize_1[a1_0x6ae5('0x3')][a1_0x6ae5('0x6')]},'reported_at':{'type':_0x2b6e9[a1_0x6ae5('0x8')],'allowNull':![]},'created_at':{'type':_0x2b6e9[a1_0x6ae5('0x8')],'allowNull':![]},'updated_at':_0x2b6e9[a1_0x6ae5('0x8')],'deleted_at':_0x2b6e9[a1_0x6ae5('0x8')]},{'paranoid':!![],'underscored':!![]});return _0xb20328;};const _0x5138b9=_0x176404['import'](_0x3abb62,_0xb20328);return _0x5138b9;}}exports['default']=AlarmsModel;