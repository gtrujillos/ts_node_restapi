var a26_0x4529=['UUID','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER'];(function(_0x459626,_0x345690){var _0x306a92=function(_0x1ac5f7){while(--_0x1ac5f7){_0x459626['push'](_0x459626['shift']());}};_0x306a92(++_0x345690);}(a26_0x4529,0x17a));var a26_0x5636=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a26_0x4529[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a26_0x5636('0x0')]||function(_0x23eae5){return _0x23eae5&&_0x23eae5[a26_0x5636('0x1')]?_0x23eae5:{'default':_0x23eae5};};Object[a26_0x5636('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a26_0x5636('0x3')));class AlarmsModel{constructor(_0x1717f0,_0x7676d1,_0x585d9e){const _0x31098e=function(_0x1717f0,_0x1e7ee5){const _0x31098e=_0x1717f0[a26_0x5636('0x4')](_0x7676d1,{'id':{'type':sequelize_1[a26_0x5636('0x5')][a26_0x5636('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a26_0x5636('0x5')][a26_0x5636('0x7')],'defaultValue':sequelize_1[a26_0x5636('0x5')]['UUIDV4']},'device_id':{'type':_0x1e7ee5[a26_0x5636('0x6')],'references':{'model':_0x585d9e,'key':'id'}},'lat':{'type':sequelize_1[a26_0x5636('0x5')]['DOUBLE']},'lon':{'type':sequelize_1[a26_0x5636('0x5')][a26_0x5636('0x8')]},'status':{'type':sequelize_1['default'][a26_0x5636('0x6')]},'reported_at':{'type':_0x1e7ee5['DATE'],'allowNull':![]},'created_at':{'type':_0x1e7ee5['DATE'],'allowNull':![]},'updated_at':_0x1e7ee5[a26_0x5636('0x9')],'deleted_at':_0x1e7ee5['DATE']},{'paranoid':!![],'underscored':!![]});return _0x31098e;};const _0x509ac0=_0x1717f0[a26_0x5636('0xa')](_0x7676d1,_0x31098e);return _0x509ac0;}}exports[a26_0x5636('0x5')]=AlarmsModel;