var a49_0x409b=['defineProperty','__esModule','sequelize','default','INTEGER','UUID','UUIDV4','DOUBLE','DATE','import','__importDefault'];(function(_0x2994fb,_0x36da34){var _0x46ac5d=function(_0x215aa1){while(--_0x215aa1){_0x2994fb['push'](_0x2994fb['shift']());}};_0x46ac5d(++_0x36da34);}(a49_0x409b,0x78));var a49_0x824b=function(_0x32705a,_0x3e415c){_0x32705a=_0x32705a-0x0;var _0x36bcc2=a49_0x409b[_0x32705a];return _0x36bcc2;};'use strict';var __importDefault=this&&this[a49_0x824b('0x0')]||function(_0x5207ac){return _0x5207ac&&_0x5207ac['__esModule']?_0x5207ac:{'default':_0x5207ac};};Object[a49_0x824b('0x1')](exports,a49_0x824b('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a49_0x824b('0x3')));class AlarmsModel{constructor(_0x413d7c,_0x4bc857,_0x3185f4){const _0x5b055a=function(_0x413d7c,_0x439e8a){const _0x5b055a=_0x413d7c['define'](_0x4bc857,{'id':{'type':sequelize_1[a49_0x824b('0x4')][a49_0x824b('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a49_0x824b('0x4')][a49_0x824b('0x6')],'defaultValue':sequelize_1[a49_0x824b('0x4')][a49_0x824b('0x7')]},'device_id':{'type':_0x439e8a[a49_0x824b('0x5')],'references':{'model':_0x3185f4,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1[a49_0x824b('0x4')][a49_0x824b('0x8')]},'status':{'type':sequelize_1[a49_0x824b('0x4')][a49_0x824b('0x5')]},'reported_at':{'type':_0x439e8a[a49_0x824b('0x9')],'allowNull':![]},'created_at':{'type':_0x439e8a[a49_0x824b('0x9')],'allowNull':![]},'updated_at':_0x439e8a[a49_0x824b('0x9')],'deleted_at':_0x439e8a[a49_0x824b('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x5b055a;};const _0x3c2858=_0x413d7c[a49_0x824b('0xa')](_0x4bc857,_0x5b055a);return _0x3c2858;}}exports[a49_0x824b('0x4')]=AlarmsModel;