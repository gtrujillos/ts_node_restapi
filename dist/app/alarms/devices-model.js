var a32_0x21c8=['defineProperty','define','default','INTEGER','UUID','STRING','DATE','import','__esModule'];(function(_0x2e6269,_0x8f7af3){var _0x196a54=function(_0xc4b1d6){while(--_0xc4b1d6){_0x2e6269['push'](_0x2e6269['shift']());}};_0x196a54(++_0x8f7af3);}(a32_0x21c8,0xaa));var a32_0x4a64=function(_0x547b7c,_0x4406bd){_0x547b7c=_0x547b7c-0x0;var _0x5b2dd9=a32_0x21c8[_0x547b7c];return _0x5b2dd9;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x37f784){return _0x37f784&&_0x37f784[a32_0x4a64('0x0')]?_0x37f784:{'default':_0x37f784};};Object[a32_0x4a64('0x1')](exports,a32_0x4a64('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x2db6be,_0x5d3d59,_0x1dfd78,_0x538a64){const _0x46d2fa=function(_0x2db6be,_0x309129){const _0x46d2fa=_0x2db6be[a32_0x4a64('0x2')](_0x5d3d59,{'id':{'type':sequelize_1[a32_0x4a64('0x3')][a32_0x4a64('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a32_0x4a64('0x5')],'defaultValue':sequelize_1[a32_0x4a64('0x3')]['UUIDV4']},'device_type_id':{'type':_0x309129[a32_0x4a64('0x4')],'references':{'model':_0x1dfd78,'key':'id'}},'brand_id':{'type':_0x309129[a32_0x4a64('0x4')],'references':{'model':_0x538a64,'key':'id'}},'name':{'type':sequelize_1[a32_0x4a64('0x3')][a32_0x4a64('0x6')]},'internal_ip':{'type':sequelize_1[a32_0x4a64('0x3')][a32_0x4a64('0x6')]},'external_ip':{'type':sequelize_1[a32_0x4a64('0x3')][a32_0x4a64('0x6')]},'created_at':{'type':_0x309129[a32_0x4a64('0x7')],'allowNull':![]},'updated_at':_0x309129[a32_0x4a64('0x7')],'deleted_at':_0x309129[a32_0x4a64('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x46d2fa;};const _0xdab1e6=_0x2db6be[a32_0x4a64('0x8')](_0x5d3d59,_0x46d2fa);return _0xdab1e6;}}exports['default']=DevicesModel;