var a55_0x4aeb=['import','__importDefault','__esModule','defineProperty','define','INTEGER','default','UUID','UUIDV4','DOUBLE','DATE'];(function(_0x30ea9d,_0x4e022a){var _0x194a99=function(_0xecac13){while(--_0xecac13){_0x30ea9d['push'](_0x30ea9d['shift']());}};_0x194a99(++_0x4e022a);}(a55_0x4aeb,0x14b));var a55_0x565a=function(_0x2dcf44,_0x565f5f){_0x2dcf44=_0x2dcf44-0x0;var _0x831b94=a55_0x4aeb[_0x2dcf44];return _0x831b94;};'use strict';var __importDefault=this&&this[a55_0x565a('0x0')]||function(_0xa4ce97){return _0xa4ce97&&_0xa4ce97[a55_0x565a('0x1')]?_0xa4ce97:{'default':_0xa4ce97};};Object[a55_0x565a('0x2')](exports,a55_0x565a('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0xee6aa7,_0x598cc3,_0x7e462b){const _0x18bc4e=function(_0xee6aa7,_0x577a0c){const _0x18bc4e=_0xee6aa7[a55_0x565a('0x3')](_0x598cc3,{'id':{'type':sequelize_1['default'][a55_0x565a('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a55_0x565a('0x5')][a55_0x565a('0x6')],'defaultValue':sequelize_1[a55_0x565a('0x5')][a55_0x565a('0x7')]},'device_id':{'type':_0x577a0c['INTEGER'],'references':{'model':_0x7e462b,'key':'id'}},'lat':{'type':sequelize_1[a55_0x565a('0x5')][a55_0x565a('0x8')]},'lon':{'type':sequelize_1[a55_0x565a('0x5')][a55_0x565a('0x8')]},'status':{'type':sequelize_1['default'][a55_0x565a('0x4')]},'reported_at':{'type':_0x577a0c[a55_0x565a('0x9')],'allowNull':![]},'created_at':{'type':_0x577a0c['DATE'],'allowNull':![]},'updated_at':_0x577a0c[a55_0x565a('0x9')],'deleted_at':_0x577a0c['DATE']},{'paranoid':!![],'underscored':!![]});return _0x18bc4e;};const _0x5135f6=_0xee6aa7[a55_0x565a('0xa')](_0x598cc3,_0x18bc4e);return _0x5135f6;}}exports[a55_0x565a('0x5')]=AlarmsModel;