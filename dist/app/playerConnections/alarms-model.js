var a110_0x16b8=['import','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','INTEGER','DOUBLE','DATE'];(function(_0x23dcba,_0x864631){var _0x1b0337=function(_0x1c08ec){while(--_0x1c08ec){_0x23dcba['push'](_0x23dcba['shift']());}};_0x1b0337(++_0x864631);}(a110_0x16b8,0x9b));var a110_0x4fe8=function(_0x1d2076,_0x2a7e5a){_0x1d2076=_0x1d2076-0x0;var _0x6ffefc=a110_0x16b8[_0x1d2076];return _0x6ffefc;};'use strict';var __importDefault=this&&this[a110_0x4fe8('0x0')]||function(_0x52ef5f){return _0x52ef5f&&_0x52ef5f[a110_0x4fe8('0x1')]?_0x52ef5f:{'default':_0x52ef5f};};Object[a110_0x4fe8('0x2')](exports,a110_0x4fe8('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a110_0x4fe8('0x3')));class AlarmsModel{constructor(_0x2dbf89,_0x588093,_0x92e54){const _0x1d8c02=function(_0x2dbf89,_0x565077){const _0x1d8c02=_0x2dbf89[a110_0x4fe8('0x4')](_0x588093,{'id':{'type':sequelize_1[a110_0x4fe8('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a110_0x4fe8('0x5')][a110_0x4fe8('0x6')],'defaultValue':sequelize_1[a110_0x4fe8('0x5')]['UUIDV4']},'device_id':{'type':_0x565077[a110_0x4fe8('0x7')],'references':{'model':_0x92e54,'key':'id'}},'lat':{'type':sequelize_1['default']['DOUBLE']},'lon':{'type':sequelize_1[a110_0x4fe8('0x5')][a110_0x4fe8('0x8')]},'status':{'type':sequelize_1['default'][a110_0x4fe8('0x7')]},'reported_at':{'type':_0x565077['DATE'],'allowNull':![]},'created_at':{'type':_0x565077[a110_0x4fe8('0x9')],'allowNull':![]},'updated_at':_0x565077[a110_0x4fe8('0x9')],'deleted_at':_0x565077[a110_0x4fe8('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x1d8c02;};const _0x169848=_0x2dbf89[a110_0x4fe8('0xa')](_0x588093,_0x1d8c02);return _0x169848;}}exports[a110_0x4fe8('0x5')]=AlarmsModel;