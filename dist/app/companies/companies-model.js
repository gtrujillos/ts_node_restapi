var a17_0x15c3=['defineProperty','sequelize','default','INTEGER','UUID','UUIDV4','STRING','DATE','import','__importDefault','__esModule'];(function(_0x46d01a,_0x44b3a9){var _0x36a25f=function(_0x5e17d9){while(--_0x5e17d9){_0x46d01a['push'](_0x46d01a['shift']());}};_0x36a25f(++_0x44b3a9);}(a17_0x15c3,0x1e2));var a17_0xdfb4=function(_0x33e010,_0x203136){_0x33e010=_0x33e010-0x0;var _0x439389=a17_0x15c3[_0x33e010];return _0x439389;};'use strict';var __importDefault=this&&this[a17_0xdfb4('0x0')]||function(_0x221814){return _0x221814&&_0x221814[a17_0xdfb4('0x1')]?_0x221814:{'default':_0x221814};};Object[a17_0xdfb4('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a17_0xdfb4('0x3')));class CompaniesModel{constructor(_0x3771de,_0xc63594,_0x5ed841){const _0x5c754e=function(_0x3771de){const _0x5c754e=_0x3771de['define'](_0xc63594,{'id':{'type':sequelize_1[a17_0xdfb4('0x4')][a17_0xdfb4('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a17_0xdfb4('0x4')][a17_0xdfb4('0x6')],'defaultValue':sequelize_1['default'][a17_0xdfb4('0x7')]},'name':{'type':sequelize_1[a17_0xdfb4('0x4')][a17_0xdfb4('0x8')]},'created_by_user_id':{'type':sequelize_1[a17_0xdfb4('0x4')]['INTEGER'],'references':{'model':_0x5ed841,'key':'id'}},'updated_by_user_id':{'type':sequelize_1['default'][a17_0xdfb4('0x5')],'references':{'model':_0x5ed841,'key':'id'}},'deleted_by_user_id':{'type':sequelize_1[a17_0xdfb4('0x4')]['INTEGER'],'references':{'model':_0x5ed841,'key':'id'}},'created_at':{'type':sequelize_1[a17_0xdfb4('0x4')]['DATE'],'allowNull':![]},'updated_at':sequelize_1[a17_0xdfb4('0x4')][a17_0xdfb4('0x9')],'deleted_at':sequelize_1[a17_0xdfb4('0x4')][a17_0xdfb4('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x5c754e;};const _0x31f245=_0x3771de[a17_0xdfb4('0xa')](_0xc63594,_0x5c754e);return _0x31f245;}}exports[a17_0xdfb4('0x4')]=CompaniesModel;