var a58_0x2f80=['STRING','DATE','import','__importDefault','defineProperty','sequelize','INTEGER','default','UUID','UUIDV4'];(function(_0x3c9704,_0x2ffb43){var _0xa106f3=function(_0x565b42){while(--_0x565b42){_0x3c9704['push'](_0x3c9704['shift']());}};_0xa106f3(++_0x2ffb43);}(a58_0x2f80,0x14d));var a58_0x2cca=function(_0x4c9736,_0x4fd5af){_0x4c9736=_0x4c9736-0x0;var _0x1612f8=a58_0x2f80[_0x4c9736];return _0x1612f8;};'use strict';var __importDefault=this&&this[a58_0x2cca('0x0')]||function(_0xc2c84c){return _0xc2c84c&&_0xc2c84c['__esModule']?_0xc2c84c:{'default':_0xc2c84c};};Object[a58_0x2cca('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a58_0x2cca('0x2')));class PlayerDevicesModel{constructor(_0x50e092,_0x52a5c6,_0x4446a8,_0x5d2365){const _0x19e034=function(_0x50e092,_0x1b573a){const _0x19e034=_0x50e092['define'](_0x52a5c6,{'id':{'type':sequelize_1['default'][a58_0x2cca('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a58_0x2cca('0x4')][a58_0x2cca('0x5')],'defaultValue':sequelize_1[a58_0x2cca('0x4')][a58_0x2cca('0x6')]},'device_id':{'type':_0x1b573a[a58_0x2cca('0x3')],'references':{'model':_0x4446a8,'key':'id'}},'player_id':{'type':_0x1b573a[a58_0x2cca('0x3')],'references':{'model':_0x5d2365,'key':'id'}},'playing_item':{'type':sequelize_1['default'][a58_0x2cca('0x7')]},'playlist':{'type':sequelize_1[a58_0x2cca('0x4')][a58_0x2cca('0x7')]},'status':{'type':sequelize_1[a58_0x2cca('0x4')][a58_0x2cca('0x3')]},'reported_at':{'type':_0x1b573a['DATE'],'allowNull':![]},'created_at':{'type':_0x1b573a[a58_0x2cca('0x8')],'allowNull':![]},'updated_at':_0x1b573a[a58_0x2cca('0x8')],'deleted_at':_0x1b573a[a58_0x2cca('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x19e034;};const _0x4b0a77=_0x50e092[a58_0x2cca('0x9')](_0x52a5c6,_0x19e034);return _0x4b0a77;}}exports[a58_0x2cca('0x4')]=PlayerDevicesModel;