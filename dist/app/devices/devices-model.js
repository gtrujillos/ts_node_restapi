var a23_0x550c=['default','UUIDV4','INTEGER','STRING','DATE','import','__importDefault','__esModule','defineProperty','define'];(function(_0x26911f,_0x42ef24){var _0x3703e8=function(_0x2fab33){while(--_0x2fab33){_0x26911f['push'](_0x26911f['shift']());}};_0x3703e8(++_0x42ef24);}(a23_0x550c,0x1e6));var a23_0x56ae=function(_0x209e50,_0x42b20b){_0x209e50=_0x209e50-0x0;var _0xe36dd9=a23_0x550c[_0x209e50];return _0xe36dd9;};'use strict';var __importDefault=this&&this[a23_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a23_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a23_0x56ae('0x2')](exports,a23_0x56ae('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class DevicesModel{constructor(_0x3e3156,_0x1e9e81,_0x292610,_0x151bd2){const _0x558098=function(_0x3e3156,_0x230f38){const _0x558098=_0x3e3156[a23_0x56ae('0x3')](_0x1e9e81,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a23_0x56ae('0x4')]['UUID'],'defaultValue':sequelize_1[a23_0x56ae('0x4')][a23_0x56ae('0x5')]},'device_type_id':{'type':_0x230f38[a23_0x56ae('0x6')],'references':{'model':_0x292610,'key':'id'}},'brand_id':{'type':_0x230f38[a23_0x56ae('0x6')],'references':{'model':_0x151bd2,'key':'id'}},'name':{'type':sequelize_1[a23_0x56ae('0x4')]['STRING']},'internal_ip':{'type':sequelize_1[a23_0x56ae('0x4')][a23_0x56ae('0x7')]},'external_ip':{'type':sequelize_1[a23_0x56ae('0x4')]['STRING']},'network_info':{'type':sequelize_1['default'][a23_0x56ae('0x7')]},'firmware_info':{'type':sequelize_1['default']['STRING']},'created_at':{'type':_0x230f38[a23_0x56ae('0x8')],'allowNull':![]},'updated_at':_0x230f38[a23_0x56ae('0x8')],'deleted_at':_0x230f38[a23_0x56ae('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x558098;};const _0x3ab53f=_0x3e3156[a23_0x56ae('0x9')](_0x1e9e81,_0x558098);return _0x3ab53f;}}exports[a23_0x56ae('0x4')]=DevicesModel;