var a76_0x413d=['sequelize','define','default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault','defineProperty','__esModule'];(function(_0x93372a,_0x3252c9){var _0x1f492d=function(_0x2bc36c){while(--_0x2bc36c){_0x93372a['push'](_0x93372a['shift']());}};_0x1f492d(++_0x3252c9);}(a76_0x413d,0x111));var a76_0x46c3=function(_0xb76a88,_0x1e1446){_0xb76a88=_0xb76a88-0x0;var _0x248fe5=a76_0x413d[_0xb76a88];return _0x248fe5;};'use strict';var __importDefault=this&&this[a76_0x46c3('0x0')]||function(_0x8b4234){return _0x8b4234&&_0x8b4234['__esModule']?_0x8b4234:{'default':_0x8b4234};};Object[a76_0x46c3('0x1')](exports,a76_0x46c3('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a76_0x46c3('0x3')));class DevicesModel{constructor(_0x38871d,_0x10a8ed,_0x46e56b,_0x5d53fc){const _0x2dba45=function(_0x38871d,_0x2a7a81){const _0x2dba45=_0x38871d[a76_0x46c3('0x4')](_0x10a8ed,{'id':{'type':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x7')],'defaultValue':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x8')]},'device_type_id':{'type':_0x2a7a81[a76_0x46c3('0x6')],'references':{'model':_0x46e56b,'key':'id'}},'brand_id':{'type':_0x2a7a81[a76_0x46c3('0x6')],'references':{'model':_0x5d53fc,'key':'id'}},'name':{'type':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x9')]},'internal_ip':{'type':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x9')]},'external_ip':{'type':sequelize_1[a76_0x46c3('0x5')][a76_0x46c3('0x9')]},'created_at':{'type':_0x2a7a81['DATE'],'allowNull':![]},'updated_at':_0x2a7a81[a76_0x46c3('0xa')],'deleted_at':_0x2a7a81[a76_0x46c3('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x2dba45;};const _0x73ee95=_0x38871d[a76_0x46c3('0xb')](_0x10a8ed,_0x2dba45);return _0x73ee95;}}exports[a76_0x46c3('0x5')]=DevicesModel;