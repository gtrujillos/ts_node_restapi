var a64_0x469a=['UUID','UUIDV4','INTEGER','STRING','import','__esModule','define','default'];(function(_0x19edd0,_0x4a072e){var _0x2de3f8=function(_0x2497f5){while(--_0x2497f5){_0x19edd0['push'](_0x19edd0['shift']());}};_0x2de3f8(++_0x4a072e);}(a64_0x469a,0x10d));var a64_0x4e1a=function(_0x3100cd,_0x179a6b){_0x3100cd=_0x3100cd-0x0;var _0xc46c03=a64_0x469a[_0x3100cd];return _0xc46c03;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1396e0){return _0x1396e0&&_0x1396e0['__esModule']?_0x1396e0:{'default':_0x1396e0};};Object['defineProperty'](exports,a64_0x4e1a('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x2c0e01,_0x8cf4a3,_0x2660b8,_0x13fc77){const _0x3c1efb=function(_0x2c0e01,_0x1447e9){const _0x3c1efb=_0x2c0e01[a64_0x4e1a('0x1')](_0x8cf4a3,{'id':{'type':sequelize_1[a64_0x4e1a('0x2')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x4e1a('0x2')][a64_0x4e1a('0x3')],'defaultValue':sequelize_1['default'][a64_0x4e1a('0x4')]},'device_type_id':{'type':_0x1447e9[a64_0x4e1a('0x5')],'references':{'model':_0x2660b8,'key':'id'}},'brand_id':{'type':_0x1447e9[a64_0x4e1a('0x5')],'references':{'model':_0x13fc77,'key':'id'}},'name':{'type':sequelize_1[a64_0x4e1a('0x2')][a64_0x4e1a('0x6')]},'internal_ip':{'type':sequelize_1[a64_0x4e1a('0x2')]['STRING']},'external_ip':{'type':sequelize_1['default'][a64_0x4e1a('0x6')]},'created_at':{'type':_0x1447e9['DATE'],'allowNull':![]},'updated_at':_0x1447e9['DATE'],'deleted_at':_0x1447e9['DATE']},{'paranoid':!![],'underscored':!![]});return _0x3c1efb;};const _0x3b0594=_0x2c0e01[a64_0x4e1a('0x7')](_0x8cf4a3,_0x3c1efb);return _0x3b0594;}}exports['default']=DevicesModel;