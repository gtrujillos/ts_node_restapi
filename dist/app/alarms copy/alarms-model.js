var a26_0x1ea3=['INTEGER','DOUBLE','DATE','import','__importDefault','defineProperty','__esModule','sequelize','define','default','UUID'];(function(_0x147779,_0x15ca3a){var _0xb66e18=function(_0x3af634){while(--_0x3af634){_0x147779['push'](_0x147779['shift']());}};_0xb66e18(++_0x15ca3a);}(a26_0x1ea3,0x67));var a26_0x6cc1=function(_0x360f25,_0x26d9ef){_0x360f25=_0x360f25-0x0;var _0x3f849a=a26_0x1ea3[_0x360f25];return _0x3f849a;};'use strict';var __importDefault=this&&this[a26_0x6cc1('0x0')]||function(_0x441318){return _0x441318&&_0x441318['__esModule']?_0x441318:{'default':_0x441318};};Object[a26_0x6cc1('0x1')](exports,a26_0x6cc1('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a26_0x6cc1('0x3')));class AlarmsModel{constructor(_0x105e08,_0x4dbd9f,_0x54b66f){const _0xf0b23f=function(_0x105e08,_0x24c79b){const _0xf0b23f=_0x105e08[a26_0x6cc1('0x4')](_0x4dbd9f,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a26_0x6cc1('0x5')][a26_0x6cc1('0x6')],'defaultValue':sequelize_1[a26_0x6cc1('0x5')]['UUIDV4']},'device_id':{'type':_0x24c79b[a26_0x6cc1('0x7')],'references':{'model':_0x54b66f,'key':'id'}},'lat':{'type':sequelize_1[a26_0x6cc1('0x5')]['DOUBLE']},'lon':{'type':sequelize_1['default'][a26_0x6cc1('0x8')]},'status':{'type':sequelize_1[a26_0x6cc1('0x5')][a26_0x6cc1('0x7')]},'reported_at':{'type':_0x24c79b[a26_0x6cc1('0x9')],'allowNull':![]},'created_at':{'type':_0x24c79b[a26_0x6cc1('0x9')],'allowNull':![]},'updated_at':_0x24c79b[a26_0x6cc1('0x9')],'deleted_at':_0x24c79b[a26_0x6cc1('0x9')]},{'paranoid':!![],'underscored':!![]});return _0xf0b23f;};const _0x1bb62b=_0x105e08[a26_0x6cc1('0xa')](_0x4dbd9f,_0xf0b23f);return _0x1bb62b;}}exports['default']=AlarmsModel;