var a60_0x1b2d=['default','INTEGER','UUID','UUIDV4','STRING','DATE','__importDefault','__esModule','define'];(function(_0x3737ad,_0x3e838d){var _0x56ca4c=function(_0xda815d){while(--_0xda815d){_0x3737ad['push'](_0x3737ad['shift']());}};_0x56ca4c(++_0x3e838d);}(a60_0x1b2d,0x180));var a60_0x5550=function(_0x183521,_0x1272a6){_0x183521=_0x183521-0x0;var _0xf8ac01=a60_0x1b2d[_0x183521];return _0xf8ac01;};'use strict';var __importDefault=this&&this[a60_0x5550('0x0')]||function(_0x282dba){return _0x282dba&&_0x282dba['__esModule']?_0x282dba:{'default':_0x282dba};};Object['defineProperty'](exports,a60_0x5550('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x3fc28d,_0x2c29bb,_0x3fb10b,_0x33c8e3){const _0xf70dea=function(_0x3fc28d,_0x3a705f){const _0xf70dea=_0x3fc28d[a60_0x5550('0x2')](_0x2c29bb,{'id':{'type':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x5')],'defaultValue':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x6')]},'device_type_id':{'type':_0x3a705f[a60_0x5550('0x4')],'references':{'model':_0x3fb10b,'key':'id'}},'brand_id':{'type':_0x3a705f[a60_0x5550('0x4')],'references':{'model':_0x33c8e3,'key':'id'}},'name':{'type':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x7')]},'internal_ip':{'type':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x7')]},'external_ip':{'type':sequelize_1[a60_0x5550('0x3')][a60_0x5550('0x7')]},'created_at':{'type':_0x3a705f[a60_0x5550('0x8')],'allowNull':![]},'updated_at':_0x3a705f[a60_0x5550('0x8')],'deleted_at':_0x3a705f[a60_0x5550('0x8')]},{'paranoid':!![],'underscored':!![]});return _0xf70dea;};const _0x3e04c1=_0x3fc28d['import'](_0x2c29bb,_0xf70dea);return _0x3e04c1;}}exports[a60_0x5550('0x3')]=DevicesModel;