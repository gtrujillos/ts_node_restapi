var a64_0x268e=['default','INTEGER','UUIDV4','STRING','DATE','import','__esModule','sequelize'];(function(_0xa95e71,_0x30bf37){var _0x2ae236=function(_0x40644c){while(--_0x40644c){_0xa95e71['push'](_0xa95e71['shift']());}};_0x2ae236(++_0x30bf37);}(a64_0x268e,0x106));var a64_0x1774=function(_0x4f4f45,_0x554880){_0x4f4f45=_0x4f4f45-0x0;var _0x2d3b58=a64_0x268e[_0x4f4f45];return _0x2d3b58;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x51a084){return _0x51a084&&_0x51a084[a64_0x1774('0x0')]?_0x51a084:{'default':_0x51a084};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a64_0x1774('0x1')));class PlayersModel{constructor(_0x413047,_0xe14338,_0x321fc6){const _0x20c34a=function(_0x413047,_0x5a6970){const _0x20c34a=_0x413047['define'](_0xe14338,{'id':{'type':sequelize_1[a64_0x1774('0x2')][a64_0x1774('0x3')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x1774('0x2')]['UUID'],'defaultValue':sequelize_1['default'][a64_0x1774('0x4')]},'user_id':{'type':_0x5a6970['INTEGER'],'references':{'model':_0x321fc6,'key':'id'}},'title':{'type':sequelize_1[a64_0x1774('0x2')][a64_0x1774('0x5')]},'short_desc':{'type':sequelize_1[a64_0x1774('0x2')][a64_0x1774('0x5')]},'thumb':{'type':sequelize_1[a64_0x1774('0x2')][a64_0x1774('0x5')]},'created_at':{'type':_0x5a6970[a64_0x1774('0x6')],'allowNull':![]},'updated_at':_0x5a6970['DATE'],'deleted_at':_0x5a6970[a64_0x1774('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x20c34a;};const _0x4baff7=_0x413047[a64_0x1774('0x7')](_0xe14338,_0x20c34a);return _0x4baff7;}}exports[a64_0x1774('0x2')]=PlayersModel;