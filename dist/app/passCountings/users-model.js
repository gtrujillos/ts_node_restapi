var a39_0x1b9c=['import','__importDefault','__esModule','defineProperty','sequelize','UUID','UUIDV4','default','STRING','INTEGER','DATE'];(function(_0x2394aa,_0x534093){var _0x58886e=function(_0x351e84){while(--_0x351e84){_0x2394aa['push'](_0x2394aa['shift']());}};_0x58886e(++_0x534093);}(a39_0x1b9c,0x156));var a39_0x4432=function(_0x360ccb,_0x5f477e){_0x360ccb=_0x360ccb-0x0;var _0x5146c6=a39_0x1b9c[_0x360ccb];return _0x5146c6;};'use strict';var __importDefault=this&&this[a39_0x4432('0x0')]||function(_0xd46f17){return _0xd46f17&&_0xd46f17[a39_0x4432('0x1')]?_0xd46f17:{'default':_0xd46f17};};Object[a39_0x4432('0x2')](exports,a39_0x4432('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a39_0x4432('0x3')));class UserModel{constructor(_0x45d96a,_0x472a34){const _0xc9313c=function(_0x45d96a,_0x128e5f){const _0xc9313c=_0x45d96a['define'](_0x472a34,{'id':{'type':_0x128e5f[a39_0x4432('0x4')],'primaryKey':!![],'defaultValue':_0x128e5f[a39_0x4432('0x5')]},'first_name':{'type':sequelize_1[a39_0x4432('0x6')]['STRING']},'last_name':{'type':sequelize_1[a39_0x4432('0x6')][a39_0x4432('0x7')]},'email':{'type':sequelize_1['default'][a39_0x4432('0x7')],'unique':!![]},'phone':{'type':sequelize_1[a39_0x4432('0x6')][a39_0x4432('0x7')],'unique':!![]},'username':{'type':sequelize_1['default'][a39_0x4432('0x7')],'unique':!![]},'password':{'type':sequelize_1[a39_0x4432('0x6')][a39_0x4432('0x7')]},'status':{'type':sequelize_1[a39_0x4432('0x6')][a39_0x4432('0x8')],'defaultValue':0x0},'created_at':{'type':_0x128e5f[a39_0x4432('0x9')],'allowNull':![]},'updated_at':_0x128e5f[a39_0x4432('0x9')],'deleted_at':_0x128e5f[a39_0x4432('0x9')]},{'paranoid':!![],'underscored':!![]});return _0xc9313c;};const _0x5d3dc8=_0x45d96a[a39_0x4432('0xa')](_0x472a34,_0xc9313c);return _0x5d3dc8;}}exports[a39_0x4432('0x6')]=UserModel;