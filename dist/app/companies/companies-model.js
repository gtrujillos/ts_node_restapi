var a42_0x1e62=['bind','import','__importDefault','defineProperty','__esModule','sequelize','../../infrastructure/model-base','default','STRING','INTEGER','getEntity'];(function(_0xb518dc,_0x57faea){var _0x389213=function(_0x13c289){while(--_0x13c289){_0xb518dc['push'](_0xb518dc['shift']());}};_0x389213(++_0x57faea);}(a42_0x1e62,0xc8));var a42_0xe47a=function(_0x38596a,_0x3a31b6){_0x38596a=_0x38596a-0x0;var _0x2b6549=a42_0x1e62[_0x38596a];return _0x2b6549;};'use strict';var __importDefault=this&&this[a42_0xe47a('0x0')]||function(_0xd44498){return _0xd44498&&_0xd44498['__esModule']?_0xd44498:{'default':_0xd44498};};Object[a42_0xe47a('0x1')](exports,a42_0xe47a('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a42_0xe47a('0x3')));const model_base_1=__importDefault(require(a42_0xe47a('0x4')));class CompaniesModel extends model_base_1[a42_0xe47a('0x5')]{constructor(_0x31e32b,_0x37befa,_0x2a57fa){super(_0x2a57fa);const _0x5985fb=function(_0x31e32b){const _0x5257f3={'city_id':{'type':sequelize_1[a42_0xe47a('0x5')]['INTEGER'],'references':{'model':_0x2a57fa['citiesModelName'],'key':'id'}},'name':{'type':sequelize_1['default'][a42_0xe47a('0x6')]},'document':{'type':sequelize_1[a42_0xe47a('0x5')][a42_0xe47a('0x6')]},'email':{'type':sequelize_1[a42_0xe47a('0x5')][a42_0xe47a('0x6')],'unique':!![]},'phone':{'type':sequelize_1['default'][a42_0xe47a('0x6')]},'status':{'type':sequelize_1[a42_0xe47a('0x5')][a42_0xe47a('0x7')]}};const _0x5985fb=this[a42_0xe47a('0x8')](_0x31e32b,_0x37befa,_0x5257f3);return _0x5985fb;}[a42_0xe47a('0x9')](this);const _0x1d7123=_0x31e32b[a42_0xe47a('0xa')](_0x37befa,_0x5985fb);return _0x1d7123;}}exports[a42_0xe47a('0x5')]=CompaniesModel;