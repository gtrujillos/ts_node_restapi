var a52_0x13ed=['INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','__esModule','defineProperty','sequelize','default'];(function(_0x40eedf,_0x5c0951){var _0x44fd1b=function(_0x59cb15){while(--_0x59cb15){_0x40eedf['push'](_0x40eedf['shift']());}};_0x44fd1b(++_0x5c0951);}(a52_0x13ed,0x1be));var a52_0x9f17=function(_0x3e39ea,_0x5656e0){_0x3e39ea=_0x3e39ea-0x0;var _0x117089=a52_0x13ed[_0x3e39ea];return _0x117089;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x9e9dce){return _0x9e9dce&&_0x9e9dce[a52_0x9f17('0x0')]?_0x9e9dce:{'default':_0x9e9dce};};Object[a52_0x9f17('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a52_0x9f17('0x2')));class AlarmsModel{constructor(_0x27525e,_0x550c8a,_0x49e8f9){const _0x5c2854=function(_0x27525e,_0xf1d3d6){const _0x5c2854=_0x27525e['define'](_0x550c8a,{'id':{'type':sequelize_1[a52_0x9f17('0x3')][a52_0x9f17('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a52_0x9f17('0x3')][a52_0x9f17('0x5')],'defaultValue':sequelize_1[a52_0x9f17('0x3')][a52_0x9f17('0x6')]},'device_id':{'type':_0xf1d3d6['INTEGER'],'references':{'model':_0x49e8f9,'key':'id'}},'lat':{'type':sequelize_1[a52_0x9f17('0x3')][a52_0x9f17('0x7')]},'lon':{'type':sequelize_1[a52_0x9f17('0x3')]['DOUBLE']},'status':{'type':sequelize_1[a52_0x9f17('0x3')][a52_0x9f17('0x4')]},'reported_at':{'type':_0xf1d3d6[a52_0x9f17('0x8')],'allowNull':![]},'created_at':{'type':_0xf1d3d6[a52_0x9f17('0x8')],'allowNull':![]},'updated_at':_0xf1d3d6[a52_0x9f17('0x8')],'deleted_at':_0xf1d3d6[a52_0x9f17('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x5c2854;};const _0x5c25d3=_0x27525e[a52_0x9f17('0x9')](_0x550c8a,_0x5c2854);return _0x5c25d3;}}exports[a52_0x9f17('0x3')]=AlarmsModel;