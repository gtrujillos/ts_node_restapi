var a83_0x33bb=['UUIDV4','STRING','DATE','__importDefault','__esModule','sequelize','INTEGER','default','UUID'];(function(_0x270df5,_0x1ac2c1){var _0x5707d3=function(_0xf19d6a){while(--_0xf19d6a){_0x270df5['push'](_0x270df5['shift']());}};_0x5707d3(++_0x1ac2c1);}(a83_0x33bb,0x198));var a83_0x2ec7=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a83_0x33bb[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a83_0x2ec7('0x0')]||function(_0x525e88){return _0x525e88&&_0x525e88[a83_0x2ec7('0x1')]?_0x525e88:{'default':_0x525e88};};Object['defineProperty'](exports,a83_0x2ec7('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a83_0x2ec7('0x2')));class VehiclesModel{constructor(_0x10bae2,_0x5f382e,_0x3c54b1,_0x5ce070){const _0x3cf031=function(_0x10bae2){const _0x3cf031=_0x10bae2['define'](_0x5f382e,{'id':{'type':sequelize_1['default'][a83_0x2ec7('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x5')],'defaultValue':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x6')]},'brand_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x5ce070,'key':'id'}},'company_id':{'type':sequelize_1[a83_0x2ec7('0x4')]['INTEGER'],'references':{'model':_0x3c54b1,'key':'id'}},'plate':{'type':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x7')]},'model':{'type':sequelize_1['default'][a83_0x2ec7('0x7')]},'created_at':{'type':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x8')],'allowNull':![]},'updated_at':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x8')],'deleted_at':sequelize_1[a83_0x2ec7('0x4')][a83_0x2ec7('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x3cf031;};const _0x113d28=_0x10bae2['import'](_0x5f382e,_0x3cf031);return _0x113d28;}}exports['default']=VehiclesModel;