var a36_0x1d7c=['import','__esModule','sequelize','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE'];(function(_0x43c054,_0x4c3d80){var _0x42ff6d=function(_0x11aaf1){while(--_0x11aaf1){_0x43c054['push'](_0x43c054['shift']());}};_0x42ff6d(++_0x4c3d80);}(a36_0x1d7c,0xb5));var a36_0x43c4=function(_0x357652,_0x5ef9ae){_0x357652=_0x357652-0x0;var _0x4ceabe=a36_0x1d7c[_0x357652];return _0x4ceabe;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xd5486a){return _0xd5486a&&_0xd5486a[a36_0x43c4('0x0')]?_0xd5486a:{'default':_0xd5486a};};Object['defineProperty'](exports,a36_0x43c4('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a36_0x43c4('0x1')));class EventsModel{constructor(_0x173e5d,_0x1fba60,_0x1835b8,_0x18910e,_0x1ee633){const _0x38adeb=function(_0x173e5d,_0x186644){const _0x38adeb=_0x173e5d['define'](_0x1fba60,{'id':{'type':sequelize_1[a36_0x43c4('0x2')][a36_0x43c4('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a36_0x43c4('0x2')][a36_0x43c4('0x4')],'defaultValue':sequelize_1[a36_0x43c4('0x2')][a36_0x43c4('0x5')]},'event_type_id':{'type':_0x186644[a36_0x43c4('0x3')],'references':{'model':_0x1835b8,'key':'id'}},'device_id':{'type':_0x186644[a36_0x43c4('0x3')],'references':{'model':_0x18910e,'key':'id'}},'user_id':{'type':_0x186644[a36_0x43c4('0x3')],'references':{'model':_0x1ee633,'key':'id'}},'lat':{'type':sequelize_1[a36_0x43c4('0x2')]['DOUBLE']},'lon':{'type':sequelize_1[a36_0x43c4('0x2')][a36_0x43c4('0x6')]},'status':{'type':sequelize_1[a36_0x43c4('0x2')][a36_0x43c4('0x3')]},'reported_at':{'type':_0x186644[a36_0x43c4('0x7')],'allowNull':![]},'created_at':{'type':_0x186644[a36_0x43c4('0x7')],'allowNull':![]},'updated_at':_0x186644[a36_0x43c4('0x7')],'deleted_at':_0x186644[a36_0x43c4('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x38adeb;};const _0x591f82=_0x173e5d[a36_0x43c4('0x8')](_0x1fba60,_0x38adeb);return _0x591f82;}}exports[a36_0x43c4('0x2')]=EventsModel;