var a29_0x39d1=['__esModule','define','UUID','UUIDV4','INTEGER','default','DOUBLE','DATE','import','__importDefault'];(function(_0x382d9e,_0xd8b2fa){var _0x435e8a=function(_0x1314e8){while(--_0x1314e8){_0x382d9e['push'](_0x382d9e['shift']());}};_0x435e8a(++_0xd8b2fa);}(a29_0x39d1,0x12b));var a29_0x21ef=function(_0x184793,_0x22e859){_0x184793=_0x184793-0x0;var _0x2f2ef1=a29_0x39d1[_0x184793];return _0x2f2ef1;};'use strict';var __importDefault=this&&this[a29_0x21ef('0x0')]||function(_0x57ead5){return _0x57ead5&&_0x57ead5[a29_0x21ef('0x1')]?_0x57ead5:{'default':_0x57ead5};};Object['defineProperty'](exports,a29_0x21ef('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class LocationPointsModel{constructor(_0x3d1761,_0x8801e0,_0x1431a4){const _0x2f77d0=function(_0x3d1761,_0x3bfc2c){const _0x2f77d0=_0x3d1761[a29_0x21ef('0x2')](_0x8801e0,{'id':{'type':_0x3bfc2c[a29_0x21ef('0x3')],'primaryKey':!![],'defaultValue':_0x3bfc2c[a29_0x21ef('0x4')]},'device_id':{'type':_0x3bfc2c[a29_0x21ef('0x5')],'references':{'model':_0x1431a4,'key':'id'}},'lat':{'type':sequelize_1[a29_0x21ef('0x6')][a29_0x21ef('0x7')]},'lon':{'type':sequelize_1[a29_0x21ef('0x6')][a29_0x21ef('0x7')]},'alt':{'type':sequelize_1[a29_0x21ef('0x6')][a29_0x21ef('0x7')]},'hdop':{'type':sequelize_1['default'][a29_0x21ef('0x7')]},'pdop':{'type':sequelize_1[a29_0x21ef('0x6')][a29_0x21ef('0x7')]},'vdop':{'type':sequelize_1['default'][a29_0x21ef('0x7')]},'tracked_at':_0x3bfc2c[a29_0x21ef('0x8')],'created_at':{'type':_0x3bfc2c[a29_0x21ef('0x8')],'allowNull':![]},'updated_at':_0x3bfc2c[a29_0x21ef('0x8')],'deleted_at':_0x3bfc2c[a29_0x21ef('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2f77d0;};const _0x3ed7fb=_0x3d1761[a29_0x21ef('0x9')](_0x8801e0,_0x2f77d0);return _0x3ed7fb;}}exports[a29_0x21ef('0x6')]=LocationPointsModel;