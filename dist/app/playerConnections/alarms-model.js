var a48_0x1f1d=['sequelize','define','default','INTEGER','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty'];(function(_0x391d6a,_0x490cda){var _0x444a4a=function(_0x350a96){while(--_0x350a96){_0x391d6a['push'](_0x391d6a['shift']());}};_0x444a4a(++_0x490cda);}(a48_0x1f1d,0x75));var a48_0x3c17=function(_0xa85120,_0x33d668){_0xa85120=_0xa85120-0x0;var _0x489ba0=a48_0x1f1d[_0xa85120];return _0x489ba0;};'use strict';var __importDefault=this&&this[a48_0x3c17('0x0')]||function(_0x3fa7a2){return _0x3fa7a2&&_0x3fa7a2[a48_0x3c17('0x1')]?_0x3fa7a2:{'default':_0x3fa7a2};};Object[a48_0x3c17('0x2')](exports,a48_0x3c17('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a48_0x3c17('0x3')));class AlarmsModel{constructor(_0x41a3d4,_0x4a1bdc,_0xd74c60){const _0x2f9570=function(_0x41a3d4,_0x1dc1af){const _0x2f9570=_0x41a3d4[a48_0x3c17('0x4')](_0x4a1bdc,{'id':{'type':sequelize_1[a48_0x3c17('0x5')][a48_0x3c17('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1[a48_0x3c17('0x5')]['UUIDV4']},'device_id':{'type':_0x1dc1af[a48_0x3c17('0x6')],'references':{'model':_0xd74c60,'key':'id'}},'lat':{'type':sequelize_1[a48_0x3c17('0x5')]['DOUBLE']},'lon':{'type':sequelize_1['default'][a48_0x3c17('0x7')]},'status':{'type':sequelize_1['default'][a48_0x3c17('0x6')]},'reported_at':{'type':_0x1dc1af['DATE'],'allowNull':![]},'created_at':{'type':_0x1dc1af[a48_0x3c17('0x8')],'allowNull':![]},'updated_at':_0x1dc1af[a48_0x3c17('0x8')],'deleted_at':_0x1dc1af[a48_0x3c17('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2f9570;};const _0x16df5b=_0x41a3d4[a48_0x3c17('0x9')](_0x4a1bdc,_0x2f9570);return _0x16df5b;}}exports['default']=AlarmsModel;