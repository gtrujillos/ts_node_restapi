var a40_0x2d54=['__esModule','defineProperty','define','UUIDV4','default','STRING','DATE','import'];(function(_0x110cfb,_0xfa78a7){var _0x2d7d8f=function(_0x48fdb4){while(--_0x48fdb4){_0x110cfb['push'](_0x110cfb['shift']());}};_0x2d7d8f(++_0xfa78a7);}(a40_0x2d54,0x1e8));var a40_0xb2c4=function(_0x44ccda,_0x18ebe7){_0x44ccda=_0x44ccda-0x0;var _0xa6ecab=a40_0x2d54[_0x44ccda];return _0xa6ecab;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xe3ab5c){return _0xe3ab5c&&_0xe3ab5c[a40_0xb2c4('0x0')]?_0xe3ab5c:{'default':_0xe3ab5c};};Object[a40_0xb2c4('0x1')](exports,a40_0xb2c4('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class UserModel{constructor(_0x1a59c0,_0xb52bd3){const _0x49de99=function(_0x1a59c0,_0x5b0f30){const _0x49de99=_0x1a59c0[a40_0xb2c4('0x2')](_0xb52bd3,{'id':{'type':_0x5b0f30['UUID'],'primaryKey':!![],'defaultValue':_0x5b0f30[a40_0xb2c4('0x3')]},'first_name':{'type':sequelize_1[a40_0xb2c4('0x4')][a40_0xb2c4('0x5')]},'last_name':{'type':sequelize_1[a40_0xb2c4('0x4')][a40_0xb2c4('0x5')]},'email':{'type':sequelize_1[a40_0xb2c4('0x4')]['STRING'],'unique':!![]},'phone':{'type':sequelize_1[a40_0xb2c4('0x4')][a40_0xb2c4('0x5')],'unique':!![]},'username':{'type':sequelize_1['default']['STRING'],'unique':!![]},'password':{'type':sequelize_1[a40_0xb2c4('0x4')][a40_0xb2c4('0x5')]},'status':{'type':sequelize_1[a40_0xb2c4('0x4')]['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x5b0f30[a40_0xb2c4('0x6')],'allowNull':![]},'updated_at':_0x5b0f30[a40_0xb2c4('0x6')],'deleted_at':_0x5b0f30[a40_0xb2c4('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x49de99;};const _0x32a3b8=_0x1a59c0[a40_0xb2c4('0x7')](_0xb52bd3,_0x49de99);return _0x32a3b8;}}exports[a40_0xb2c4('0x4')]=UserModel;