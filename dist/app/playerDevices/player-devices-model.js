var a44_0x3ab7=['default','INTEGER','UUIDV4','STRING','DATE','import','__esModule','sequelize','define'];(function(_0x415057,_0x577ea6){var _0x265b72=function(_0x245b5e){while(--_0x245b5e){_0x415057['push'](_0x415057['shift']());}};_0x265b72(++_0x577ea6);}(a44_0x3ab7,0x1bf));var a44_0x4525=function(_0x2d456c,_0x2a4279){_0x2d456c=_0x2d456c-0x0;var _0xbf7d7d=a44_0x3ab7[_0x2d456c];return _0xbf7d7d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5ef757){return _0x5ef757&&_0x5ef757[a44_0x4525('0x0')]?_0x5ef757:{'default':_0x5ef757};};Object['defineProperty'](exports,a44_0x4525('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a44_0x4525('0x1')));class PlayerDevicesModel{constructor(_0x4f731e,_0x20248e,_0x2a8c94,_0xc740c2){const _0x7bf0a2=function(_0x4f731e,_0x2bd229){const _0x7bf0a2=_0x4f731e[a44_0x4525('0x2')](_0x20248e,{'id':{'type':sequelize_1[a44_0x4525('0x3')][a44_0x4525('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a44_0x4525('0x3')]['UUID'],'defaultValue':sequelize_1[a44_0x4525('0x3')][a44_0x4525('0x5')]},'device_id':{'type':_0x2bd229[a44_0x4525('0x4')],'references':{'model':_0x2a8c94,'key':'id'}},'player_id':{'type':_0x2bd229[a44_0x4525('0x4')],'references':{'model':_0xc740c2,'key':'id'}},'playing_item':{'type':sequelize_1['default'][a44_0x4525('0x6')]},'playlist':{'type':sequelize_1['default']['STRING']},'status':{'type':sequelize_1[a44_0x4525('0x3')][a44_0x4525('0x4')]},'reported_at':{'type':_0x2bd229[a44_0x4525('0x7')],'allowNull':![]},'created_at':{'type':_0x2bd229[a44_0x4525('0x7')],'allowNull':![]},'updated_at':_0x2bd229[a44_0x4525('0x7')],'deleted_at':_0x2bd229[a44_0x4525('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x7bf0a2;};const _0x4d698e=_0x4f731e[a44_0x4525('0x8')](_0x20248e,_0x7bf0a2);return _0x4d698e;}}exports[a44_0x4525('0x3')]=PlayerDevicesModel;