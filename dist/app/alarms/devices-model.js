var a4_0x2baf=['STRING','DATE','__esModule','defineProperty','define','INTEGER','default','UUID'];(function(_0x2e59db,_0x8786fe){var _0x175d99=function(_0x539ebb){while(--_0x539ebb){_0x2e59db['push'](_0x2e59db['shift']());}};_0x175d99(++_0x8786fe);}(a4_0x2baf,0x10a));var a4_0x211d=function(_0x83958c,_0xc60544){_0x83958c=_0x83958c-0x0;var _0x45802b=a4_0x2baf[_0x83958c];return _0x45802b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x580454){return _0x580454&&_0x580454[a4_0x211d('0x0')]?_0x580454:{'default':_0x580454};};Object[a4_0x211d('0x1')](exports,a4_0x211d('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x48b5b5,_0x3fc885,_0x647e59,_0x4330e1){const _0x4b8bc3=function(_0x48b5b5,_0x5e87be){const _0x4b8bc3=_0x48b5b5[a4_0x211d('0x2')](_0x3fc885,{'id':{'type':sequelize_1['default'][a4_0x211d('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a4_0x211d('0x4')][a4_0x211d('0x5')],'defaultValue':sequelize_1[a4_0x211d('0x4')]['UUIDV4']},'device_type_id':{'type':_0x5e87be[a4_0x211d('0x3')],'references':{'model':_0x647e59,'key':'id'}},'brand_id':{'type':_0x5e87be[a4_0x211d('0x3')],'references':{'model':_0x4330e1,'key':'id'}},'name':{'type':sequelize_1[a4_0x211d('0x4')]['STRING']},'internal_ip':{'type':sequelize_1[a4_0x211d('0x4')]['STRING']},'external_ip':{'type':sequelize_1['default'][a4_0x211d('0x6')]},'created_at':{'type':_0x5e87be[a4_0x211d('0x7')],'allowNull':![]},'updated_at':_0x5e87be['DATE'],'deleted_at':_0x5e87be['DATE']},{'paranoid':!![],'underscored':!![]});return _0x4b8bc3;};const _0x56dd02=_0x48b5b5['import'](_0x3fc885,_0x4b8bc3);return _0x56dd02;}}exports[a4_0x211d('0x4')]=DevicesModel;