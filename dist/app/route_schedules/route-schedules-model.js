var a134_0x283f=['__esModule','define','default','UUID','INTEGER','DATE','import'];(function(_0x1a315a,_0x5dbe3e){var _0x2de550=function(_0x152ca2){while(--_0x152ca2){_0x1a315a['push'](_0x1a315a['shift']());}};_0x2de550(++_0x5dbe3e);}(a134_0x283f,0x173));var a134_0x5ee8=function(_0x51829f,_0x3801d5){_0x51829f=_0x51829f-0x0;var _0x3e3f34=a134_0x283f[_0x51829f];return _0x3e3f34;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x46a337){return _0x46a337&&_0x46a337[a134_0x5ee8('0x0')]?_0x46a337:{'default':_0x46a337};};Object['defineProperty'](exports,a134_0x5ee8('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class RouteSchedulesModel{constructor(_0x347915,_0x5b8001,_0x515ee5,_0x32eeb9,_0x1aafa0){const _0xc1cc59=function(_0x347915,_0x3b766a){const _0xc1cc59=_0x347915[a134_0x5ee8('0x1')](_0x5b8001,{'id':{'type':sequelize_1[a134_0x5ee8('0x2')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a134_0x5ee8('0x2')][a134_0x5ee8('0x3')],'defaultValue':sequelize_1[a134_0x5ee8('0x2')]['UUIDV4']},'user_id':{'type':_0x3b766a[a134_0x5ee8('0x4')],'references':{'model':_0x515ee5,'key':'id'}},'route_id':{'type':_0x3b766a[a134_0x5ee8('0x4')],'references':{'model':_0x32eeb9,'key':'id'}},'vehicle_id':{'type':_0x3b766a[a134_0x5ee8('0x4')],'references':{'model':_0x1aafa0,'key':'id'}},'start_date':{'type':_0x3b766a['DATE']},'end_date':{'type':_0x3b766a['DATE']},'status':{'type':sequelize_1[a134_0x5ee8('0x2')]['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x3b766a[a134_0x5ee8('0x5')],'allowNull':![]},'updated_at':_0x3b766a[a134_0x5ee8('0x5')],'deleted_at':_0x3b766a[a134_0x5ee8('0x5')]},{'paranoid':!![],'underscored':!![]});return _0xc1cc59;};const _0x498d88=_0x347915[a134_0x5ee8('0x6')](_0x5b8001,_0xc1cc59);return _0x498d88;}}exports[a134_0x5ee8('0x2')]=RouteSchedulesModel;