var a51_0x5652=['sequelize','define','default','UUID','UUIDV4','INTEGER','DOUBLE','DATE','import','__importDefault','defineProperty','__esModule'];(function(_0x57c8de,_0x7872f){var _0x7d4540=function(_0x1497fc){while(--_0x1497fc){_0x57c8de['push'](_0x57c8de['shift']());}};_0x7d4540(++_0x7872f);}(a51_0x5652,0xc9));var a51_0x4d09=function(_0x5821e3,_0x3eb41a){_0x5821e3=_0x5821e3-0x0;var _0x487181=a51_0x5652[_0x5821e3];return _0x487181;};'use strict';var __importDefault=this&&this[a51_0x4d09('0x0')]||function(_0x4fcf4c){return _0x4fcf4c&&_0x4fcf4c['__esModule']?_0x4fcf4c:{'default':_0x4fcf4c};};Object[a51_0x4d09('0x1')](exports,a51_0x4d09('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a51_0x4d09('0x3')));class AlarmsModel{constructor(_0x48ef2b,_0x2f8c15,_0x197c42){const _0x2c24c0=function(_0x48ef2b,_0x12f823){const _0x2c24c0=_0x48ef2b[a51_0x4d09('0x4')](_0x2f8c15,{'id':{'type':sequelize_1[a51_0x4d09('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a51_0x4d09('0x6')],'defaultValue':sequelize_1[a51_0x4d09('0x5')][a51_0x4d09('0x7')]},'device_id':{'type':_0x12f823[a51_0x4d09('0x8')],'references':{'model':_0x197c42,'key':'id'}},'lat':{'type':sequelize_1['default'][a51_0x4d09('0x9')]},'lon':{'type':sequelize_1[a51_0x4d09('0x5')]['DOUBLE']},'status':{'type':sequelize_1[a51_0x4d09('0x5')]['INTEGER']},'reported_at':{'type':_0x12f823[a51_0x4d09('0xa')],'allowNull':![]},'created_at':{'type':_0x12f823[a51_0x4d09('0xa')],'allowNull':![]},'updated_at':_0x12f823['DATE'],'deleted_at':_0x12f823[a51_0x4d09('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x2c24c0;};const _0xf8a40e=_0x48ef2b[a51_0x4d09('0xb')](_0x2f8c15,_0x2c24c0);return _0xf8a40e;}}exports[a51_0x4d09('0x5')]=AlarmsModel;