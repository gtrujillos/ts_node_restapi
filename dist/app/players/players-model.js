var a125_0x2735=['import','__importDefault','__esModule','define','default','INTEGER','UUID','UUIDV4','STRING','DATE'];(function(_0x36aa4a,_0x7dae7f){var _0x519365=function(_0x14d1ad){while(--_0x14d1ad){_0x36aa4a['push'](_0x36aa4a['shift']());}};_0x519365(++_0x7dae7f);}(a125_0x2735,0xdd));var a125_0x53e6=function(_0x4d697b,_0x412f5d){_0x4d697b=_0x4d697b-0x0;var _0x13a220=a125_0x2735[_0x4d697b];return _0x13a220;};'use strict';var __importDefault=this&&this[a125_0x53e6('0x0')]||function(_0x3b88f3){return _0x3b88f3&&_0x3b88f3[a125_0x53e6('0x1')]?_0x3b88f3:{'default':_0x3b88f3};};Object['defineProperty'](exports,a125_0x53e6('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayersModel{constructor(_0x554981,_0x2cc119,_0x5bde25){const _0x246d80=function(_0x554981,_0x633e36){const _0x246d80=_0x554981[a125_0x53e6('0x2')](_0x2cc119,{'id':{'type':sequelize_1[a125_0x53e6('0x3')][a125_0x53e6('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a125_0x53e6('0x3')][a125_0x53e6('0x5')],'defaultValue':sequelize_1[a125_0x53e6('0x3')][a125_0x53e6('0x6')]},'user_id':{'type':_0x633e36[a125_0x53e6('0x4')],'references':{'model':_0x5bde25,'key':'id'}},'title':{'type':sequelize_1[a125_0x53e6('0x3')][a125_0x53e6('0x7')]},'short_desc':{'type':sequelize_1['default']['STRING']},'thumb':{'type':sequelize_1[a125_0x53e6('0x3')][a125_0x53e6('0x7')]},'created_at':{'type':_0x633e36[a125_0x53e6('0x8')],'allowNull':![]},'updated_at':_0x633e36[a125_0x53e6('0x8')],'deleted_at':_0x633e36[a125_0x53e6('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x246d80;};const _0x12bb9b=_0x554981[a125_0x53e6('0x9')](_0x2cc119,_0x246d80);return _0x12bb9b;}}exports[a125_0x53e6('0x3')]=PlayersModel;