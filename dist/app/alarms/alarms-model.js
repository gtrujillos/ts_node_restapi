var a1_0x2cce=['sequelize','define','default','INTEGER','DOUBLE','DATE','import','__importDefault','defineProperty','__esModule'];(function(_0x5c030a,_0x2ad9ae){var _0x29e7ef=function(_0x64e721){while(--_0x64e721){_0x5c030a['push'](_0x5c030a['shift']());}};_0x29e7ef(++_0x2ad9ae);}(a1_0x2cce,0x16f));var a1_0x156c=function(_0x12aabf,_0x58e331){_0x12aabf=_0x12aabf-0x0;var _0xd9a75e=a1_0x2cce[_0x12aabf];return _0xd9a75e;};'use strict';var __importDefault=this&&this[a1_0x156c('0x0')]||function(_0x1e8f71){return _0x1e8f71&&_0x1e8f71['__esModule']?_0x1e8f71:{'default':_0x1e8f71};};Object[a1_0x156c('0x1')](exports,a1_0x156c('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a1_0x156c('0x3')));class AlarmsModel{constructor(_0x15459f,_0x2da95b,_0x158853){const _0x66b84f=function(_0x15459f,_0x118e17){const _0x66b84f=_0x15459f[a1_0x156c('0x4')](_0x2da95b,{'id':{'type':sequelize_1[a1_0x156c('0x5')][a1_0x156c('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a1_0x156c('0x5')]['UUID'],'defaultValue':sequelize_1[a1_0x156c('0x5')]['UUIDV4']},'device_id':{'type':_0x118e17[a1_0x156c('0x6')],'references':{'model':_0x158853,'key':'id'}},'lat':{'type':sequelize_1['default'][a1_0x156c('0x7')]},'lon':{'type':sequelize_1['default'][a1_0x156c('0x7')]},'status':{'type':sequelize_1[a1_0x156c('0x5')][a1_0x156c('0x6')]},'reported_at':{'type':_0x118e17['DATE'],'allowNull':![]},'created_at':{'type':_0x118e17[a1_0x156c('0x8')],'allowNull':![]},'updated_at':_0x118e17['DATE'],'deleted_at':_0x118e17[a1_0x156c('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x66b84f;};const _0x4dc910=_0x15459f[a1_0x156c('0x9')](_0x2da95b,_0x66b84f);return _0x4dc910;}}exports[a1_0x156c('0x5')]=AlarmsModel;