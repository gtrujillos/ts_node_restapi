var a26_0x4e8b=['default','INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','__esModule','defineProperty','sequelize','define'];(function(_0x4a2434,_0x550c16){var _0x51cd5e=function(_0x182554){while(--_0x182554){_0x4a2434['push'](_0x4a2434['shift']());}};_0x51cd5e(++_0x550c16);}(a26_0x4e8b,0x146));var a26_0x4747=function(_0x31a2b2,_0x38305d){_0x31a2b2=_0x31a2b2-0x0;var _0x562ed8=a26_0x4e8b[_0x31a2b2];return _0x562ed8;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xd6dc95){return _0xd6dc95&&_0xd6dc95[a26_0x4747('0x0')]?_0xd6dc95:{'default':_0xd6dc95};};Object[a26_0x4747('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a26_0x4747('0x2')));class AlarmsModel{constructor(_0x2ac4cc,_0x5ac554,_0xa47cab){const _0x470eb2=function(_0x2ac4cc,_0x3dd70a){const _0x470eb2=_0x2ac4cc[a26_0x4747('0x3')](_0x5ac554,{'id':{'type':sequelize_1[a26_0x4747('0x4')][a26_0x4747('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a26_0x4747('0x4')][a26_0x4747('0x6')],'defaultValue':sequelize_1['default'][a26_0x4747('0x7')]},'device_id':{'type':_0x3dd70a[a26_0x4747('0x5')],'references':{'model':_0xa47cab,'key':'id'}},'lat':{'type':sequelize_1[a26_0x4747('0x4')][a26_0x4747('0x8')]},'lon':{'type':sequelize_1['default'][a26_0x4747('0x8')]},'status':{'type':sequelize_1['default'][a26_0x4747('0x5')]},'reported_at':{'type':_0x3dd70a['DATE'],'allowNull':![]},'created_at':{'type':_0x3dd70a[a26_0x4747('0x9')],'allowNull':![]},'updated_at':_0x3dd70a[a26_0x4747('0x9')],'deleted_at':_0x3dd70a[a26_0x4747('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x470eb2;};const _0x1c5390=_0x2ac4cc[a26_0x4747('0xa')](_0x5ac554,_0x470eb2);return _0x1c5390;}}exports['default']=AlarmsModel;