var a134_0x3798=['INTEGER','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','UUIDV4'];(function(_0x51d63e,_0x168d06){var _0xa7175c=function(_0x1b951c){while(--_0x1b951c){_0x51d63e['push'](_0x51d63e['shift']());}};_0xa7175c(++_0x168d06);}(a134_0x3798,0x107));var a134_0x4434=function(_0xcc6d1c,_0x5156ab){_0xcc6d1c=_0xcc6d1c-0x0;var _0x4f04d5=a134_0x3798[_0xcc6d1c];return _0x4f04d5;};'use strict';var __importDefault=this&&this[a134_0x4434('0x0')]||function(_0x27da7c){return _0x27da7c&&_0x27da7c[a134_0x4434('0x1')]?_0x27da7c:{'default':_0x27da7c};};Object[a134_0x4434('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a134_0x4434('0x3')));class RouteSchedulesModel{constructor(_0x4cf6c4,_0xb12c1c,_0x54fce8,_0x1a3e2b,_0x1a6156){const _0x44054a=function(_0x4cf6c4,_0x107c44){const _0x44054a=_0x4cf6c4[a134_0x4434('0x4')](_0xb12c1c,{'id':{'type':sequelize_1[a134_0x4434('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a134_0x4434('0x5')]['UUID'],'defaultValue':sequelize_1['default'][a134_0x4434('0x6')]},'user_id':{'type':_0x107c44['INTEGER'],'references':{'model':_0x54fce8,'key':'id'}},'route_id':{'type':_0x107c44['INTEGER'],'references':{'model':_0x1a3e2b,'key':'id'}},'vehicle_id':{'type':_0x107c44[a134_0x4434('0x7')],'references':{'model':_0x1a6156,'key':'id'}},'start_date':{'type':_0x107c44[a134_0x4434('0x8')]},'end_date':{'type':_0x107c44[a134_0x4434('0x8')]},'status':{'type':sequelize_1[a134_0x4434('0x5')][a134_0x4434('0x7')],'defaultValue':0x0},'created_at':{'type':_0x107c44[a134_0x4434('0x8')],'allowNull':![]},'updated_at':_0x107c44[a134_0x4434('0x8')],'deleted_at':_0x107c44['DATE']},{'paranoid':!![],'underscored':!![]});return _0x44054a;};const _0x27458=_0x4cf6c4[a134_0x4434('0x9')](_0xb12c1c,_0x44054a);return _0x27458;}}exports[a134_0x4434('0x5')]=RouteSchedulesModel;