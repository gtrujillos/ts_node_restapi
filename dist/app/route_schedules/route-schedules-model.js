var a134_0x4598=['DATE','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER'];(function(_0x2fbeca,_0x302170){var _0x1ae02f=function(_0x1066ee){while(--_0x1066ee){_0x2fbeca['push'](_0x2fbeca['shift']());}};_0x1ae02f(++_0x302170);}(a134_0x4598,0xc9));var a134_0x1630=function(_0xb7157e,_0x32975f){_0xb7157e=_0xb7157e-0x0;var _0x56968b=a134_0x4598[_0xb7157e];return _0x56968b;};'use strict';var __importDefault=this&&this[a134_0x1630('0x0')]||function(_0x54e551){return _0x54e551&&_0x54e551[a134_0x1630('0x1')]?_0x54e551:{'default':_0x54e551};};Object[a134_0x1630('0x2')](exports,a134_0x1630('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a134_0x1630('0x3')));class RouteSchedulesModel{constructor(_0x5d47d3,_0x2b75d9,_0x2a8b14,_0x1f0f30,_0x4b37b5){const _0x1a6b32=function(_0x5d47d3,_0x4c1d34){const _0x1a6b32=_0x5d47d3[a134_0x1630('0x4')](_0x2b75d9,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a134_0x1630('0x5')]['UUID'],'defaultValue':sequelize_1[a134_0x1630('0x5')]['UUIDV4']},'user_id':{'type':_0x4c1d34[a134_0x1630('0x6')],'references':{'model':_0x2a8b14,'key':'id'}},'route_id':{'type':_0x4c1d34[a134_0x1630('0x6')],'references':{'model':_0x1f0f30,'key':'id'}},'vehicle_id':{'type':_0x4c1d34['INTEGER'],'references':{'model':_0x4b37b5,'key':'id'}},'start_date':{'type':_0x4c1d34[a134_0x1630('0x7')]},'end_date':{'type':_0x4c1d34['DATE']},'status':{'type':sequelize_1[a134_0x1630('0x5')][a134_0x1630('0x6')],'defaultValue':0x0},'created_at':{'type':_0x4c1d34[a134_0x1630('0x7')],'allowNull':![]},'updated_at':_0x4c1d34[a134_0x1630('0x7')],'deleted_at':_0x4c1d34[a134_0x1630('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x1a6b32;};const _0x42f143=_0x5d47d3['import'](_0x2b75d9,_0x1a6b32);return _0x42f143;}}exports[a134_0x1630('0x5')]=RouteSchedulesModel;