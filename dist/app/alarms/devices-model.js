var a23_0x8dfa=['__esModule','sequelize','define','default','INTEGER','UUIDV4','STRING','DATE','__importDefault'];(function(_0x10a389,_0xffc5e6){var _0xa16908=function(_0x55ba08){while(--_0x55ba08){_0x10a389['push'](_0x10a389['shift']());}};_0xa16908(++_0xffc5e6);}(a23_0x8dfa,0x194));var a23_0x2435=function(_0x188ce8,_0x588bda){_0x188ce8=_0x188ce8-0x0;var _0x4146a3=a23_0x8dfa[_0x188ce8];return _0x4146a3;};'use strict';var __importDefault=this&&this[a23_0x2435('0x0')]||function(_0x42ba53){return _0x42ba53&&_0x42ba53[a23_0x2435('0x1')]?_0x42ba53:{'default':_0x42ba53};};Object['defineProperty'](exports,a23_0x2435('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a23_0x2435('0x2')));class DevicesModel{constructor(_0x2e9759,_0x542b38,_0x1f144b,_0x32f998){const _0x25fa0d=function(_0x2e9759,_0x1a9802){const _0x25fa0d=_0x2e9759[a23_0x2435('0x3')](_0x542b38,{'id':{'type':sequelize_1[a23_0x2435('0x4')][a23_0x2435('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default']['UUID'],'defaultValue':sequelize_1['default'][a23_0x2435('0x6')]},'device_type_id':{'type':_0x1a9802[a23_0x2435('0x5')],'references':{'model':_0x1f144b,'key':'id'}},'brand_id':{'type':_0x1a9802['INTEGER'],'references':{'model':_0x32f998,'key':'id'}},'name':{'type':sequelize_1[a23_0x2435('0x4')][a23_0x2435('0x7')]},'internal_ip':{'type':sequelize_1[a23_0x2435('0x4')][a23_0x2435('0x7')]},'external_ip':{'type':sequelize_1['default'][a23_0x2435('0x7')]},'created_at':{'type':_0x1a9802[a23_0x2435('0x8')],'allowNull':![]},'updated_at':_0x1a9802[a23_0x2435('0x8')],'deleted_at':_0x1a9802[a23_0x2435('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x25fa0d;};const _0x342c54=_0x2e9759['import'](_0x542b38,_0x25fa0d);return _0x342c54;}}exports[a23_0x2435('0x4')]=DevicesModel;