var a64_0x24aa=['default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define'];(function(_0x4bd05d,_0x2899c9){var _0x12d00a=function(_0x2155b6){while(--_0x2155b6){_0x4bd05d['push'](_0x4bd05d['shift']());}};_0x12d00a(++_0x2899c9);}(a64_0x24aa,0x19f));var a64_0x1d1f=function(_0x25179b,_0x11266f){_0x25179b=_0x25179b-0x0;var _0x1a0632=a64_0x24aa[_0x25179b];return _0x1a0632;};'use strict';var __importDefault=this&&this[a64_0x1d1f('0x0')]||function(_0x28b744){return _0x28b744&&_0x28b744['__esModule']?_0x28b744:{'default':_0x28b744};};Object[a64_0x1d1f('0x1')](exports,a64_0x1d1f('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a64_0x1d1f('0x3')));class PlayersModel{constructor(_0x5df4d8,_0x4b58c7,_0x18b0d2){const _0x50b46b=function(_0x5df4d8,_0x1e24a8){const _0x50b46b=_0x5df4d8[a64_0x1d1f('0x4')](_0x4b58c7,{'id':{'type':sequelize_1[a64_0x1d1f('0x5')][a64_0x1d1f('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x1d1f('0x5')][a64_0x1d1f('0x7')],'defaultValue':sequelize_1[a64_0x1d1f('0x5')][a64_0x1d1f('0x8')]},'user_id':{'type':_0x1e24a8[a64_0x1d1f('0x6')],'references':{'model':_0x18b0d2,'key':'id'}},'title':{'type':sequelize_1[a64_0x1d1f('0x5')]['STRING']},'short_desc':{'type':sequelize_1[a64_0x1d1f('0x5')][a64_0x1d1f('0x9')]},'thumb':{'type':sequelize_1[a64_0x1d1f('0x5')][a64_0x1d1f('0x9')]},'created_at':{'type':_0x1e24a8[a64_0x1d1f('0xa')],'allowNull':![]},'updated_at':_0x1e24a8[a64_0x1d1f('0xa')],'deleted_at':_0x1e24a8[a64_0x1d1f('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x50b46b;};const _0x2adc95=_0x5df4d8[a64_0x1d1f('0xb')](_0x4b58c7,_0x50b46b);return _0x2adc95;}}exports['default']=PlayersModel;