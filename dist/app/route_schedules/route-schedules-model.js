var a134_0x38cd=['__importDefault','__esModule','defineProperty','sequelize','default','INTEGER','UUID','UUIDV4','DATE'];(function(_0x238c95,_0x49af85){var _0x457edf=function(_0x51c35c){while(--_0x51c35c){_0x238c95['push'](_0x238c95['shift']());}};_0x457edf(++_0x49af85);}(a134_0x38cd,0x13b));var a134_0x59ec=function(_0x2d58a9,_0x456eac){_0x2d58a9=_0x2d58a9-0x0;var _0x1d1703=a134_0x38cd[_0x2d58a9];return _0x1d1703;};'use strict';var __importDefault=this&&this[a134_0x59ec('0x0')]||function(_0x459b43){return _0x459b43&&_0x459b43[a134_0x59ec('0x1')]?_0x459b43:{'default':_0x459b43};};Object[a134_0x59ec('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a134_0x59ec('0x3')));class RouteSchedulesModel{constructor(_0x440a8b,_0x3b1e65,_0x5a5ee7,_0x2c120a,_0xe81eea){const _0x2f0728=function(_0x440a8b,_0xfa093c){const _0x2f0728=_0x440a8b['define'](_0x3b1e65,{'id':{'type':sequelize_1[a134_0x59ec('0x4')][a134_0x59ec('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a134_0x59ec('0x4')][a134_0x59ec('0x6')],'defaultValue':sequelize_1['default'][a134_0x59ec('0x7')]},'user_id':{'type':_0xfa093c[a134_0x59ec('0x5')],'references':{'model':_0x5a5ee7,'key':'id'}},'route_id':{'type':_0xfa093c[a134_0x59ec('0x5')],'references':{'model':_0x2c120a,'key':'id'}},'vehicle_id':{'type':_0xfa093c['INTEGER'],'references':{'model':_0xe81eea,'key':'id'}},'start_date':{'type':_0xfa093c[a134_0x59ec('0x8')]},'end_date':{'type':_0xfa093c[a134_0x59ec('0x8')]},'status':{'type':sequelize_1['default']['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0xfa093c[a134_0x59ec('0x8')],'allowNull':![]},'updated_at':_0xfa093c[a134_0x59ec('0x8')],'deleted_at':_0xfa093c[a134_0x59ec('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2f0728;};const _0x287d4e=_0x440a8b['import'](_0x3b1e65,_0x2f0728);return _0x287d4e;}}exports['default']=RouteSchedulesModel;