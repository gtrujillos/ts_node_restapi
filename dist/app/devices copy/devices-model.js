var a64_0x2b94=['defineProperty','sequelize','default','INTEGER','STRING','DATE','import','__importDefault','__esModule'];(function(_0x1780ee,_0x14b1bc){var _0x2b38c2=function(_0x47e451){while(--_0x47e451){_0x1780ee['push'](_0x1780ee['shift']());}};_0x2b38c2(++_0x14b1bc);}(a64_0x2b94,0x127));var a64_0x45a3=function(_0x242ecc,_0x528af0){_0x242ecc=_0x242ecc-0x0;var _0x1e1be8=a64_0x2b94[_0x242ecc];return _0x1e1be8;};'use strict';var __importDefault=this&&this[a64_0x45a3('0x0')]||function(_0x3b78ae){return _0x3b78ae&&_0x3b78ae[a64_0x45a3('0x1')]?_0x3b78ae:{'default':_0x3b78ae};};Object[a64_0x45a3('0x2')](exports,a64_0x45a3('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a64_0x45a3('0x3')));class DevicesModel{constructor(_0x238d1f,_0x1962d0,_0x29eaf3,_0x4dc7e3){const _0x5de56b=function(_0x238d1f,_0x52b1c6){const _0x5de56b=_0x238d1f['define'](_0x1962d0,{'id':{'type':sequelize_1[a64_0x45a3('0x4')][a64_0x45a3('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x45a3('0x4')]['UUID'],'defaultValue':sequelize_1[a64_0x45a3('0x4')]['UUIDV4']},'device_type_id':{'type':_0x52b1c6[a64_0x45a3('0x5')],'references':{'model':_0x29eaf3,'key':'id'}},'brand_id':{'type':_0x52b1c6[a64_0x45a3('0x5')],'references':{'model':_0x4dc7e3,'key':'id'}},'name':{'type':sequelize_1[a64_0x45a3('0x4')]['STRING']},'internal_ip':{'type':sequelize_1[a64_0x45a3('0x4')][a64_0x45a3('0x6')]},'external_ip':{'type':sequelize_1[a64_0x45a3('0x4')][a64_0x45a3('0x6')]},'created_at':{'type':_0x52b1c6[a64_0x45a3('0x7')],'allowNull':![]},'updated_at':_0x52b1c6['DATE'],'deleted_at':_0x52b1c6[a64_0x45a3('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x5de56b;};const _0x4e1b73=_0x238d1f[a64_0x45a3('0x8')](_0x1962d0,_0x5de56b);return _0x4e1b73;}}exports['default']=DevicesModel;