var a113_0x2820=['DATE','__importDefault','defineProperty','__esModule','sequelize','define','default','UUID','DOUBLE'];(function(_0x191b5c,_0x21a2b6){var _0x76d652=function(_0x960b03){while(--_0x960b03){_0x191b5c['push'](_0x191b5c['shift']());}};_0x76d652(++_0x21a2b6);}(a113_0x2820,0x169));var a113_0x5d5b=function(_0x2be46b,_0x1fa50a){_0x2be46b=_0x2be46b-0x0;var _0x271ef3=a113_0x2820[_0x2be46b];return _0x271ef3;};'use strict';var __importDefault=this&&this[a113_0x5d5b('0x0')]||function(_0x39828f){return _0x39828f&&_0x39828f['__esModule']?_0x39828f:{'default':_0x39828f};};Object[a113_0x5d5b('0x1')](exports,a113_0x5d5b('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a113_0x5d5b('0x3')));class AlarmsModel{constructor(_0xbefc2d,_0x26d0c3,_0x16c3ed){const _0x48ce47=function(_0xbefc2d,_0x179cae){const _0x48ce47=_0xbefc2d[a113_0x5d5b('0x4')](_0x26d0c3,{'id':{'type':sequelize_1[a113_0x5d5b('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a113_0x5d5b('0x6')],'defaultValue':sequelize_1[a113_0x5d5b('0x5')]['UUIDV4']},'device_id':{'type':_0x179cae['INTEGER'],'references':{'model':_0x16c3ed,'key':'id'}},'lat':{'type':sequelize_1[a113_0x5d5b('0x5')][a113_0x5d5b('0x7')]},'lon':{'type':sequelize_1[a113_0x5d5b('0x5')]['DOUBLE']},'status':{'type':sequelize_1[a113_0x5d5b('0x5')]['INTEGER']},'reported_at':{'type':_0x179cae['DATE'],'allowNull':![]},'created_at':{'type':_0x179cae[a113_0x5d5b('0x8')],'allowNull':![]},'updated_at':_0x179cae['DATE'],'deleted_at':_0x179cae[a113_0x5d5b('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x48ce47;};const _0x2b7632=_0xbefc2d['import'](_0x26d0c3,_0x48ce47);return _0x2b7632;}}exports['default']=AlarmsModel;