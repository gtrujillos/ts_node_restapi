var a140_0x4765=['INTEGER','UUID','UUIDV4','DATE','import','__importDefault','defineProperty','__esModule','define','default'];(function(_0x290f65,_0x59c776){var _0x43f29b=function(_0x288695){while(--_0x288695){_0x290f65['push'](_0x290f65['shift']());}};_0x43f29b(++_0x59c776);}(a140_0x4765,0xff));var a140_0x346a=function(_0x13513e,_0x49d348){_0x13513e=_0x13513e-0x0;var _0x10c0fa=a140_0x4765[_0x13513e];return _0x10c0fa;};'use strict';var __importDefault=this&&this[a140_0x346a('0x0')]||function(_0x3c5fbd){return _0x3c5fbd&&_0x3c5fbd['__esModule']?_0x3c5fbd:{'default':_0x3c5fbd};};Object[a140_0x346a('0x1')](exports,a140_0x346a('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class RoutesSchedulesModel{constructor(_0x4c4a47,_0xcfbcdf,_0x227d07,_0x359063){const _0x5cd633=function(_0x4c4a47,_0x259dd3){const _0x5cd633=_0x4c4a47[a140_0x346a('0x3')](_0xcfbcdf,{'id':{'type':sequelize_1[a140_0x346a('0x4')][a140_0x346a('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a140_0x346a('0x6')],'defaultValue':sequelize_1[a140_0x346a('0x4')][a140_0x346a('0x7')]},'user_id':{'type':_0x259dd3['INTEGER'],'references':{'model':_0x227d07,'key':'id'}},'route_id':{'type':_0x259dd3[a140_0x346a('0x5')],'references':{'model':_0x359063,'key':'id'}},'start_date':{'type':_0x259dd3[a140_0x346a('0x8')]},'end_date':{'type':_0x259dd3['DATE']},'status':{'type':sequelize_1['default']['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x259dd3[a140_0x346a('0x8')],'allowNull':![]},'updated_at':_0x259dd3['DATE'],'deleted_at':_0x259dd3['DATE']},{'paranoid':!![],'underscored':!![]});return _0x5cd633;};const _0x48048c=_0x4c4a47[a140_0x346a('0x9')](_0xcfbcdf,_0x5cd633);return _0x48048c;}}exports['default']=RoutesSchedulesModel;