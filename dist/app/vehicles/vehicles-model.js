var a83_0x1c47=['INTEGER','default','UUID','UUIDV4','STRING','DATE','import','__esModule','sequelize','define'];(function(_0x16b519,_0x26c343){var _0x41faa7=function(_0x242094){while(--_0x242094){_0x16b519['push'](_0x16b519['shift']());}};_0x41faa7(++_0x26c343);}(a83_0x1c47,0x183));var a83_0x5ec2=function(_0x11d4b9,_0xe81135){_0x11d4b9=_0x11d4b9-0x0;var _0x347a93=a83_0x1c47[_0x11d4b9];return _0x347a93;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x51fe42){return _0x51fe42&&_0x51fe42['__esModule']?_0x51fe42:{'default':_0x51fe42};};Object['defineProperty'](exports,a83_0x5ec2('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a83_0x5ec2('0x1')));class VehiclesModel{constructor(_0x1cedcf,_0x496673,_0x3f2e31,_0x57dd37){const _0x2f5261=function(_0x1cedcf){const _0x2f5261=_0x1cedcf[a83_0x5ec2('0x2')](_0x496673,{'id':{'type':sequelize_1['default'][a83_0x5ec2('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x5')],'defaultValue':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x6')]},'brand_id':{'type':sequelize_1['default'][a83_0x5ec2('0x3')],'references':{'model':_0x57dd37,'key':'id'}},'company_id':{'type':sequelize_1['default'][a83_0x5ec2('0x3')],'references':{'model':_0x3f2e31,'key':'id'}},'plate':{'type':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x7')]},'model':{'type':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x7')]},'created_at':{'type':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x8')],'allowNull':![]},'updated_at':sequelize_1['default']['DATE'],'deleted_at':sequelize_1[a83_0x5ec2('0x4')][a83_0x5ec2('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x2f5261;};const _0x11f090=_0x1cedcf[a83_0x5ec2('0x9')](_0x496673,_0x2f5261);return _0x11f090;}}exports[a83_0x5ec2('0x4')]=VehiclesModel;