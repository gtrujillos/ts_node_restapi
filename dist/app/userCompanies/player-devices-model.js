var a166_0x5deb=['default','INTEGER','UUIDV4','STRING','DATE','import','__importDefault','__esModule','define'];(function(_0x38928a,_0x4a0435){var _0x2aaa70=function(_0x20b009){while(--_0x20b009){_0x38928a['push'](_0x38928a['shift']());}};_0x2aaa70(++_0x4a0435);}(a166_0x5deb,0x1da));var a166_0x1d14=function(_0x69993b,_0x509710){_0x69993b=_0x69993b-0x0;var _0x5c9e4b=a166_0x5deb[_0x69993b];return _0x5c9e4b;};'use strict';var __importDefault=this&&this[a166_0x1d14('0x0')]||function(_0x39f74b){return _0x39f74b&&_0x39f74b[a166_0x1d14('0x1')]?_0x39f74b:{'default':_0x39f74b};};Object['defineProperty'](exports,a166_0x1d14('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x10a51c,_0x522bf8,_0x15d9e7,_0xb50aac){const _0x49e146=function(_0x10a51c,_0x58fcda){const _0x49e146=_0x10a51c[a166_0x1d14('0x2')](_0x522bf8,{'id':{'type':sequelize_1[a166_0x1d14('0x3')][a166_0x1d14('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a166_0x1d14('0x3')]['UUID'],'defaultValue':sequelize_1[a166_0x1d14('0x3')][a166_0x1d14('0x5')]},'device_id':{'type':_0x58fcda['INTEGER'],'references':{'model':_0x15d9e7,'key':'id'}},'player_id':{'type':_0x58fcda[a166_0x1d14('0x4')],'references':{'model':_0xb50aac,'key':'id'}},'playing_item':{'type':sequelize_1['default'][a166_0x1d14('0x6')]},'playlist':{'type':sequelize_1[a166_0x1d14('0x3')]['STRING']},'status':{'type':sequelize_1[a166_0x1d14('0x3')][a166_0x1d14('0x4')]},'reported_at':{'type':_0x58fcda[a166_0x1d14('0x7')],'allowNull':![]},'created_at':{'type':_0x58fcda['DATE'],'allowNull':![]},'updated_at':_0x58fcda[a166_0x1d14('0x7')],'deleted_at':_0x58fcda[a166_0x1d14('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x49e146;};const _0x453ef4=_0x10a51c[a166_0x1d14('0x8')](_0x522bf8,_0x49e146);return _0x453ef4;}}exports[a166_0x1d14('0x3')]=PlayerDevicesModel;