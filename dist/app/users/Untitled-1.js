var a184_0x1210=['__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','STRING','INTEGER','bind','import'];(function(_0x4e6ba2,_0x49cc87){var _0x239d99=function(_0x3981d8){while(--_0x3981d8){_0x4e6ba2['push'](_0x4e6ba2['shift']());}};_0x239d99(++_0x49cc87);}(a184_0x1210,0x140));var a184_0x186e=function(_0x2c853f,_0x4d7d71){_0x2c853f=_0x2c853f-0x0;var _0x2a73d2=a184_0x1210[_0x2c853f];return _0x2a73d2;};'use strict';var __importDefault=this&&this[a184_0x186e('0x0')]||function(_0x41fec5){return _0x41fec5&&_0x41fec5[a184_0x186e('0x1')]?_0x41fec5:{'default':_0x41fec5};};Object[a184_0x186e('0x2')](exports,a184_0x186e('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a184_0x186e('0x3')));const model_base_1=__importDefault(require(a184_0x186e('0x4')));class UsersModel extends model_base_1[a184_0x186e('0x5')]{constructor(_0x5d6094,_0x471bb0,_0x2b0581){super(_0x2b0581);const _0x2b6051=function(_0x5d6094){const _0x2e5d68={'first_name':{'type':sequelize_1[a184_0x186e('0x5')][a184_0x186e('0x6')]},'last_name':{'type':sequelize_1[a184_0x186e('0x5')][a184_0x186e('0x6')]},'document':{'type':sequelize_1[a184_0x186e('0x5')]['STRING']},'email':{'type':sequelize_1['default'][a184_0x186e('0x6')],'unique':!![]},'phone':{'type':sequelize_1[a184_0x186e('0x5')][a184_0x186e('0x6')]},'username':{'type':sequelize_1[a184_0x186e('0x5')][a184_0x186e('0x6')],'unique':!![]},'password':{'type':sequelize_1[a184_0x186e('0x5')][a184_0x186e('0x6')]},'status':{'type':sequelize_1['default'][a184_0x186e('0x7')]}};const _0x2b6051=this['getEntity'](_0x5d6094,_0x471bb0,_0x2e5d68);return _0x2b6051;}[a184_0x186e('0x8')](this);const _0x184d7b=_0x5d6094[a184_0x186e('0x9')](_0x471bb0,_0x2b6051);return _0x184d7b;}}exports[a184_0x186e('0x5')]=UsersModel;