var a39_0x36c0=['__importDefault','__esModule','sequelize','define','UUIDV4','default','STRING','INTEGER','DATE'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a39_0x36c0,0x1c2));var a39_0x620d=function(_0x228f98,_0x46a798){_0x228f98=_0x228f98-0x0;var _0x1fa6d3=a39_0x36c0[_0x228f98];return _0x1fa6d3;};'use strict';var __importDefault=this&&this[a39_0x620d('0x0')]||function(_0x3622f3){return _0x3622f3&&_0x3622f3['__esModule']?_0x3622f3:{'default':_0x3622f3};};Object['defineProperty'](exports,a39_0x620d('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a39_0x620d('0x2')));class UserModel{constructor(_0xb7fad0,_0x2eed59){const _0xf500d0=function(_0xb7fad0,_0xd32186){const _0xf500d0=_0xb7fad0[a39_0x620d('0x3')](_0x2eed59,{'id':{'type':_0xd32186['UUID'],'primaryKey':!![],'defaultValue':_0xd32186[a39_0x620d('0x4')]},'first_name':{'type':sequelize_1[a39_0x620d('0x5')][a39_0x620d('0x6')]},'last_name':{'type':sequelize_1[a39_0x620d('0x5')][a39_0x620d('0x6')]},'email':{'type':sequelize_1[a39_0x620d('0x5')]['STRING'],'unique':!![]},'phone':{'type':sequelize_1['default'][a39_0x620d('0x6')],'unique':!![]},'username':{'type':sequelize_1[a39_0x620d('0x5')]['STRING'],'unique':!![]},'password':{'type':sequelize_1[a39_0x620d('0x5')][a39_0x620d('0x6')]},'status':{'type':sequelize_1[a39_0x620d('0x5')][a39_0x620d('0x7')],'defaultValue':0x0},'created_at':{'type':_0xd32186[a39_0x620d('0x8')],'allowNull':![]},'updated_at':_0xd32186[a39_0x620d('0x8')],'deleted_at':_0xd32186['DATE']},{'paranoid':!![],'underscored':!![]});return _0xf500d0;};const _0x1a058b=_0xb7fad0['import'](_0x2eed59,_0xf500d0);return _0x1a058b;}}exports[a39_0x620d('0x5')]=UserModel;