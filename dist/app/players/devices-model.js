var a61_0x356b=['INTEGER','STRING','DATE','__importDefault','__esModule','defineProperty','sequelize','default','UUID'];(function(_0x2c3df,_0x339af5){var _0x35db01=function(_0x4cdb41){while(--_0x4cdb41){_0x2c3df['push'](_0x2c3df['shift']());}};_0x35db01(++_0x339af5);}(a61_0x356b,0x8a));var a61_0x1a04=function(_0x42297a,_0x74a3ff){_0x42297a=_0x42297a-0x0;var _0x428fda=a61_0x356b[_0x42297a];return _0x428fda;};'use strict';var __importDefault=this&&this[a61_0x1a04('0x0')]||function(_0x26b3ce){return _0x26b3ce&&_0x26b3ce[a61_0x1a04('0x1')]?_0x26b3ce:{'default':_0x26b3ce};};Object[a61_0x1a04('0x2')](exports,a61_0x1a04('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a61_0x1a04('0x3')));class DevicesModel{constructor(_0x1df594,_0x408fd9,_0x383ad7,_0x41338e){const _0x2adf72=function(_0x1df594,_0x5191af){const _0x2adf72=_0x1df594['define'](_0x408fd9,{'id':{'type':sequelize_1[a61_0x1a04('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a61_0x1a04('0x4')][a61_0x1a04('0x5')],'defaultValue':sequelize_1[a61_0x1a04('0x4')]['UUIDV4']},'device_type_id':{'type':_0x5191af[a61_0x1a04('0x6')],'references':{'model':_0x383ad7,'key':'id'}},'brand_id':{'type':_0x5191af[a61_0x1a04('0x6')],'references':{'model':_0x41338e,'key':'id'}},'name':{'type':sequelize_1['default'][a61_0x1a04('0x7')]},'internal_ip':{'type':sequelize_1[a61_0x1a04('0x4')]['STRING']},'external_ip':{'type':sequelize_1[a61_0x1a04('0x4')]['STRING']},'created_at':{'type':_0x5191af[a61_0x1a04('0x8')],'allowNull':![]},'updated_at':_0x5191af['DATE'],'deleted_at':_0x5191af[a61_0x1a04('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2adf72;};const _0x1d4998=_0x1df594['import'](_0x408fd9,_0x2adf72);return _0x1d4998;}}exports[a61_0x1a04('0x4')]=DevicesModel;