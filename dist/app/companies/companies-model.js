var a17_0x5079=['import','__importDefault','__esModule','sequelize','define','default','INTEGER','UUIDV4','STRING','DATE'];(function(_0xcaf46e,_0x470102){var _0x1c8ec3=function(_0x4e6d02){while(--_0x4e6d02){_0xcaf46e['push'](_0xcaf46e['shift']());}};_0x1c8ec3(++_0x470102);}(a17_0x5079,0x137));var a17_0x359e=function(_0x392cb3,_0x48a7e9){_0x392cb3=_0x392cb3-0x0;var _0xa6d6cb=a17_0x5079[_0x392cb3];return _0xa6d6cb;};'use strict';var __importDefault=this&&this[a17_0x359e('0x0')]||function(_0x29eeba){return _0x29eeba&&_0x29eeba['__esModule']?_0x29eeba:{'default':_0x29eeba};};Object['defineProperty'](exports,a17_0x359e('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a17_0x359e('0x2')));class CompaniesModel{constructor(_0xc72fcd,_0x25b05f,_0xbba623){const _0x131368=function(_0xc72fcd){const _0x131368=_0xc72fcd[a17_0x359e('0x3')](_0x25b05f,{'id':{'type':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a17_0x359e('0x4')]['UUID'],'defaultValue':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x6')]},'name':{'type':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x7')]},'created_by_user_id':{'type':sequelize_1[a17_0x359e('0x4')]['INTEGER'],'references':{'model':_0xbba623,'key':'id'}},'updated_by_user_id':{'type':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x5')],'references':{'model':_0xbba623,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1['default'][a17_0x359e('0x5')],'references':{'model':_0xbba623,'key':'id'}},'created_at':{'type':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x8')],'allowNull':![]},'updated_at':sequelize_1['default']['DATE'],'deleted_at':sequelize_1[a17_0x359e('0x4')][a17_0x359e('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x131368;};const _0x12e5af=_0xc72fcd[a17_0x359e('0x9')](_0x25b05f,_0x131368);return _0x12e5af;}}exports[a17_0x359e('0x4')]=CompaniesModel;