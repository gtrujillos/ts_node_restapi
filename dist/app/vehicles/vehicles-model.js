var a82_0x5a0e=['STRING','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','UUIDV4'];(function(_0x417ebf,_0x156caa){var _0x1f7174=function(_0x417ad8){while(--_0x417ad8){_0x417ebf['push'](_0x417ebf['shift']());}};_0x1f7174(++_0x156caa);}(a82_0x5a0e,0x12f));var a82_0xc6f0=function(_0x147779,_0x15ca3a){_0x147779=_0x147779-0x0;var _0xb66e18=a82_0x5a0e[_0x147779];return _0xb66e18;};'use strict';var __importDefault=this&&this[a82_0xc6f0('0x0')]||function(_0x47535e){return _0x47535e&&_0x47535e[a82_0xc6f0('0x1')]?_0x47535e:{'default':_0x47535e};};Object[a82_0xc6f0('0x2')](exports,a82_0xc6f0('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a82_0xc6f0('0x3')));class VehiclesModel{constructor(_0x48194e,_0x56580b,_0x56f64c,_0x21f7d5){const _0x55a931=function(_0x48194e){const _0x55a931=_0x48194e[a82_0xc6f0('0x4')](_0x56580b,{'id':{'type':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0x7')],'defaultValue':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0x8')]},'brand_id':{'type':sequelize_1[a82_0xc6f0('0x5')]['INTEGER'],'references':{'model':_0x21f7d5,'key':'id'}},'company_id':{'type':sequelize_1['default'][a82_0xc6f0('0x6')],'references':{'model':_0x56f64c,'key':'id'}},'plate':{'type':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0x9')]},'model':{'type':sequelize_1['default']['STRING']},'created_at':{'type':sequelize_1['default'][a82_0xc6f0('0xa')],'allowNull':![]},'updated_at':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0xa')],'deleted_at':sequelize_1[a82_0xc6f0('0x5')][a82_0xc6f0('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x55a931;};const _0x57b107=_0x48194e[a82_0xc6f0('0xb')](_0x56580b,_0x55a931);return _0x57b107;}}exports[a82_0xc6f0('0x5')]=VehiclesModel;