var a46_0x70e6=['__importDefault','__esModule','INTEGER','default','UUIDV4','STRING','DATE','import'];(function(_0x5bbef4,_0x49a614){var _0x1de5a0=function(_0xd10974){while(--_0xd10974){_0x5bbef4['push'](_0x5bbef4['shift']());}};_0x1de5a0(++_0x49a614);}(a46_0x70e6,0x1e0));var a46_0x1d0e=function(_0x34fa3e,_0x2360f5){_0x34fa3e=_0x34fa3e-0x0;var _0x6faf7d=a46_0x70e6[_0x34fa3e];return _0x6faf7d;};'use strict';var __importDefault=this&&this[a46_0x1d0e('0x0')]||function(_0x53ffff){return _0x53ffff&&_0x53ffff[a46_0x1d0e('0x1')]?_0x53ffff:{'default':_0x53ffff};};Object['defineProperty'](exports,a46_0x1d0e('0x1'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlatesModel{constructor(_0x502f71,_0x18ecd3){const _0x5439e8=function(_0x502f71,_0x3c7196){const _0x5439e8=_0x502f71['define'](_0x18ecd3,{'id':{'type':sequelize_1['default'][a46_0x1d0e('0x2')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a46_0x1d0e('0x3')]['UUID'],'defaultValue':sequelize_1['default'][a46_0x1d0e('0x4')]},'plate':{'type':sequelize_1['default'][a46_0x1d0e('0x5')]},'reported_at':{'type':_0x3c7196[a46_0x1d0e('0x6')],'allowNull':![]},'created_at':{'type':_0x3c7196['DATE'],'allowNull':![]},'updated_at':_0x3c7196[a46_0x1d0e('0x6')],'deleted_at':_0x3c7196[a46_0x1d0e('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x5439e8;};const _0x206379=_0x502f71[a46_0x1d0e('0x7')](_0x18ecd3,_0x5439e8);return _0x206379;}}exports['default']=PlatesModel;