var a54_0x249e=['DATE','import','__importDefault','defineProperty','__esModule','sequelize','define','default','INTEGER','UUIDV4','STRING'];(function(_0x385f10,_0x272876){var _0x9741e3=function(_0x4b5fc6){while(--_0x4b5fc6){_0x385f10['push'](_0x385f10['shift']());}};_0x9741e3(++_0x272876);}(a54_0x249e,0xff));var a54_0x2353=function(_0x4f06cc,_0x36f85b){_0x4f06cc=_0x4f06cc-0x0;var _0x434eff=a54_0x249e[_0x4f06cc];return _0x434eff;};'use strict';var __importDefault=this&&this[a54_0x2353('0x0')]||function(_0x2f1ca4){return _0x2f1ca4&&_0x2f1ca4['__esModule']?_0x2f1ca4:{'default':_0x2f1ca4};};Object[a54_0x2353('0x1')](exports,a54_0x2353('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a54_0x2353('0x3')));class PlayerDevicesModel{constructor(_0x4c61aa,_0xb9881b,_0x25abcb,_0x18c2a6){const _0x1f1266=function(_0x4c61aa,_0x13d050){const _0x1f1266=_0x4c61aa[a54_0x2353('0x4')](_0xb9881b,{'id':{'type':sequelize_1[a54_0x2353('0x5')][a54_0x2353('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a54_0x2353('0x5')]['UUID'],'defaultValue':sequelize_1['default'][a54_0x2353('0x7')]},'device_id':{'type':_0x13d050[a54_0x2353('0x6')],'references':{'model':_0x25abcb,'key':'id'}},'player_id':{'type':_0x13d050['INTEGER'],'references':{'model':_0x18c2a6,'key':'id'}},'network_info':{'type':sequelize_1['default'][a54_0x2353('0x8')]},'status':{'type':sequelize_1[a54_0x2353('0x5')][a54_0x2353('0x6')]},'created_at':{'type':_0x13d050[a54_0x2353('0x9')],'allowNull':![]},'updated_at':_0x13d050[a54_0x2353('0x9')],'deleted_at':_0x13d050['DATE']},{'paranoid':!![],'underscored':!![]});return _0x1f1266;};const _0x545e27=_0x4c61aa[a54_0x2353('0xa')](_0xb9881b,_0x1f1266);return _0x545e27;}}exports[a54_0x2353('0x5')]=PlayerDevicesModel;