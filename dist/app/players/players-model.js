var a64_0x189f=['__esModule','define','default','INTEGER','STRING','DATE','import','__importDefault'];(function(_0xf6b0cd,_0x2ee4da){var _0x203a58=function(_0xbd6487){while(--_0xbd6487){_0xf6b0cd['push'](_0xf6b0cd['shift']());}};_0x203a58(++_0x2ee4da);}(a64_0x189f,0xc7));var a64_0x41b7=function(_0x3efbee,_0x53b8d2){_0x3efbee=_0x3efbee-0x0;var _0x19daf3=a64_0x189f[_0x3efbee];return _0x19daf3;};'use strict';var __importDefault=this&&this[a64_0x41b7('0x0')]||function(_0x1e7963){return _0x1e7963&&_0x1e7963[a64_0x41b7('0x1')]?_0x1e7963:{'default':_0x1e7963};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayersModel{constructor(_0x7a1f5f,_0x1d1d35,_0x4c2e5d){const _0x2f3861=function(_0x7a1f5f,_0x57dc11){const _0x2f3861=_0x7a1f5f[a64_0x41b7('0x2')](_0x1d1d35,{'id':{'type':sequelize_1[a64_0x41b7('0x3')][a64_0x41b7('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x41b7('0x3')]['UUID'],'defaultValue':sequelize_1[a64_0x41b7('0x3')]['UUIDV4']},'user_id':{'type':_0x57dc11[a64_0x41b7('0x4')],'references':{'model':_0x4c2e5d,'key':'id'}},'title':{'type':sequelize_1[a64_0x41b7('0x3')][a64_0x41b7('0x5')]},'short_desc':{'type':sequelize_1['default']['STRING']},'thumb':{'type':sequelize_1['default'][a64_0x41b7('0x5')]},'created_at':{'type':_0x57dc11[a64_0x41b7('0x6')],'allowNull':![]},'updated_at':_0x57dc11[a64_0x41b7('0x6')],'deleted_at':_0x57dc11[a64_0x41b7('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x2f3861;};const _0x2eaef1=_0x7a1f5f[a64_0x41b7('0x7')](_0x1d1d35,_0x2f3861);return _0x2eaef1;}}exports[a64_0x41b7('0x3')]=PlayersModel;