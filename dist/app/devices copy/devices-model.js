var a27_0x5bab=['DATE','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','STRING'];(function(_0x43f987,_0xcb035f){var _0x47b67d=function(_0x121568){while(--_0x121568){_0x43f987['push'](_0x43f987['shift']());}};_0x47b67d(++_0xcb035f);}(a27_0x5bab,0xd9));var a27_0x28dd=function(_0x330af9,_0x27f57d){_0x330af9=_0x330af9-0x0;var _0x15d11c=a27_0x5bab[_0x330af9];return _0x15d11c;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5e331a){return _0x5e331a&&_0x5e331a[a27_0x28dd('0x0')]?_0x5e331a:{'default':_0x5e331a};};Object[a27_0x28dd('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a27_0x28dd('0x2')));class DevicesModel{constructor(_0xc07176,_0x419c5a,_0x197ba2,_0x50258b){const _0x4ff361=function(_0xc07176,_0x14b4a1){const _0x4ff361=_0xc07176[a27_0x28dd('0x3')](_0x419c5a,{'id':{'type':sequelize_1[a27_0x28dd('0x4')][a27_0x28dd('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a27_0x28dd('0x4')][a27_0x28dd('0x6')],'defaultValue':sequelize_1[a27_0x28dd('0x4')]['UUIDV4']},'device_type_id':{'type':_0x14b4a1[a27_0x28dd('0x5')],'references':{'model':_0x197ba2,'key':'id'}},'brand_id':{'type':_0x14b4a1[a27_0x28dd('0x5')],'references':{'model':_0x50258b,'key':'id'}},'name':{'type':sequelize_1['default']['STRING']},'internal_ip':{'type':sequelize_1[a27_0x28dd('0x4')]['STRING']},'external_ip':{'type':sequelize_1[a27_0x28dd('0x4')][a27_0x28dd('0x7')]},'created_at':{'type':_0x14b4a1[a27_0x28dd('0x8')],'allowNull':![]},'updated_at':_0x14b4a1['DATE'],'deleted_at':_0x14b4a1[a27_0x28dd('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x4ff361;};const _0xe1b35b=_0xc07176['import'](_0x419c5a,_0x4ff361);return _0xe1b35b;}}exports[a27_0x28dd('0x4')]=DevicesModel;