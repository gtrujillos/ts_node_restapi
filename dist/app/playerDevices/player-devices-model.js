var a119_0x11f5=['sequelize','define','default','UUID','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule'];(function(_0x18b6f3,_0x21e802){var _0x21e003=function(_0x9969fa){while(--_0x9969fa){_0x18b6f3['push'](_0x18b6f3['shift']());}};_0x21e003(++_0x21e802);}(a119_0x11f5,0x1b6));var a119_0x4609=function(_0x1a2628,_0x528615){_0x1a2628=_0x1a2628-0x0;var _0x4025a2=a119_0x11f5[_0x1a2628];return _0x4025a2;};'use strict';var __importDefault=this&&this[a119_0x4609('0x0')]||function(_0x22a247){return _0x22a247&&_0x22a247[a119_0x4609('0x1')]?_0x22a247:{'default':_0x22a247};};Object['defineProperty'](exports,a119_0x4609('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a119_0x4609('0x2')));class PlayerDevicesModel{constructor(_0x1aad4e,_0x3ea137,_0x3452bb,_0x4833f6){const _0x1ca046=function(_0x1aad4e,_0x12ed3c){const _0x1ca046=_0x1aad4e[a119_0x4609('0x3')](_0x3ea137,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a119_0x4609('0x4')][a119_0x4609('0x5')],'defaultValue':sequelize_1[a119_0x4609('0x4')][a119_0x4609('0x6')]},'device_id':{'type':_0x12ed3c[a119_0x4609('0x7')],'references':{'model':_0x3452bb,'key':'id'}},'player_id':{'type':_0x12ed3c[a119_0x4609('0x7')],'references':{'model':_0x4833f6,'key':'id'}},'playing_item':{'type':sequelize_1[a119_0x4609('0x4')]['STRING']},'playlist':{'type':sequelize_1[a119_0x4609('0x4')][a119_0x4609('0x8')]},'status':{'type':sequelize_1[a119_0x4609('0x4')][a119_0x4609('0x7')]},'reported_at':{'type':_0x12ed3c[a119_0x4609('0x9')],'allowNull':![]},'created_at':{'type':_0x12ed3c[a119_0x4609('0x9')],'allowNull':![]},'updated_at':_0x12ed3c[a119_0x4609('0x9')],'deleted_at':_0x12ed3c[a119_0x4609('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1ca046;};const _0x4f8bdb=_0x1aad4e[a119_0x4609('0xa')](_0x3ea137,_0x1ca046);return _0x4f8bdb;}}exports[a119_0x4609('0x4')]=PlayerDevicesModel;