var a64_0x5b7e=['sequelize','define','INTEGER','default','UUID','UUIDV4','STRING','DATE','__esModule','defineProperty'];(function(_0x9c0028,_0x4df058){var _0x522bb2=function(_0x53abb6){while(--_0x53abb6){_0x9c0028['push'](_0x9c0028['shift']());}};_0x522bb2(++_0x4df058);}(a64_0x5b7e,0x13e));var a64_0x1130=function(_0x143c58,_0x330b41){_0x143c58=_0x143c58-0x0;var _0x1b0895=a64_0x5b7e[_0x143c58];return _0x1b0895;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xa78ede){return _0xa78ede&&_0xa78ede[a64_0x1130('0x0')]?_0xa78ede:{'default':_0xa78ede};};Object[a64_0x1130('0x1')](exports,a64_0x1130('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a64_0x1130('0x2')));class DevicesModel{constructor(_0xed7e15,_0x540cd4,_0x345253,_0x24d86d){const _0x80974a=function(_0xed7e15,_0x4a00cd){const _0x80974a=_0xed7e15[a64_0x1130('0x3')](_0x540cd4,{'id':{'type':sequelize_1['default'][a64_0x1130('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x1130('0x5')][a64_0x1130('0x6')],'defaultValue':sequelize_1['default'][a64_0x1130('0x7')]},'device_type_id':{'type':_0x4a00cd[a64_0x1130('0x4')],'references':{'model':_0x345253,'key':'id'}},'brand_id':{'type':_0x4a00cd[a64_0x1130('0x4')],'references':{'model':_0x24d86d,'key':'id'}},'name':{'type':sequelize_1[a64_0x1130('0x5')]['STRING']},'internal_ip':{'type':sequelize_1[a64_0x1130('0x5')][a64_0x1130('0x8')]},'external_ip':{'type':sequelize_1['default'][a64_0x1130('0x8')]},'created_at':{'type':_0x4a00cd[a64_0x1130('0x9')],'allowNull':![]},'updated_at':_0x4a00cd[a64_0x1130('0x9')],'deleted_at':_0x4a00cd['DATE']},{'paranoid':!![],'underscored':!![]});return _0x80974a;};const _0x46d9c3=_0xed7e15['import'](_0x540cd4,_0x80974a);return _0x46d9c3;}}exports[a64_0x1130('0x5')]=DevicesModel;