var a122_0x38c6=['UUID','INTEGER','STRING','DATE','__importDefault','__esModule','defineProperty','sequelize','define','default'];(function(_0x55a8f5,_0xcde46a){var _0x294883=function(_0xf86516){while(--_0xf86516){_0x55a8f5['push'](_0x55a8f5['shift']());}};_0x294883(++_0xcde46a);}(a122_0x38c6,0xae));var a122_0x7422=function(_0x147779,_0x15ca3a){_0x147779=_0x147779-0x0;var _0xb66e18=a122_0x38c6[_0x147779];return _0xb66e18;};'use strict';var __importDefault=this&&this[a122_0x7422('0x0')]||function(_0x53e241){return _0x53e241&&_0x53e241[a122_0x7422('0x1')]?_0x53e241:{'default':_0x53e241};};Object[a122_0x7422('0x2')](exports,a122_0x7422('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a122_0x7422('0x3')));class DevicesModel{constructor(_0x557dea,_0x36f6b4,_0x14105e,_0x30af4b){const _0xf070b8=function(_0x557dea,_0x346212){const _0xf070b8=_0x557dea[a122_0x7422('0x4')](_0x36f6b4,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a122_0x7422('0x5')][a122_0x7422('0x6')],'defaultValue':sequelize_1['default']['UUIDV4']},'device_type_id':{'type':_0x346212[a122_0x7422('0x7')],'references':{'model':_0x14105e,'key':'id'}},'brand_id':{'type':_0x346212[a122_0x7422('0x7')],'references':{'model':_0x30af4b,'key':'id'}},'name':{'type':sequelize_1['default'][a122_0x7422('0x8')]},'internal_ip':{'type':sequelize_1[a122_0x7422('0x5')][a122_0x7422('0x8')]},'external_ip':{'type':sequelize_1['default']['STRING']},'created_at':{'type':_0x346212[a122_0x7422('0x9')],'allowNull':![]},'updated_at':_0x346212[a122_0x7422('0x9')],'deleted_at':_0x346212[a122_0x7422('0x9')]},{'paranoid':!![],'underscored':!![]});return _0xf070b8;};const _0x19b2be=_0x557dea['import'](_0x36f6b4,_0xf070b8);return _0x19b2be;}}exports['default']=DevicesModel;