var a32_0xad9e=['DATE','__importDefault','__esModule','sequelize','define','UUID','default','STRING'];(function(_0xf6820a,_0xb035c5){var _0xb53941=function(_0x58fabe){while(--_0x58fabe){_0xf6820a['push'](_0xf6820a['shift']());}};_0xb53941(++_0xb035c5);}(a32_0xad9e,0xe1));var a32_0x4ab5=function(_0x2c796a,_0x3db369){_0x2c796a=_0x2c796a-0x0;var _0x48b1b8=a32_0xad9e[_0x2c796a];return _0x48b1b8;};'use strict';var __importDefault=this&&this[a32_0x4ab5('0x0')]||function(_0x122b23){return _0x122b23&&_0x122b23[a32_0x4ab5('0x1')]?_0x122b23:{'default':_0x122b23};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a32_0x4ab5('0x2')));class PassCountingsModel{constructor(_0x39a821,_0x558960){const _0x1ae998=function(_0x39a821,_0x583d3a){const _0x1ae998=_0x39a821[a32_0x4ab5('0x3')](_0x558960,{'id':{'type':_0x583d3a[a32_0x4ab5('0x4')],'primaryKey':!![],'defaultValue':_0x583d3a['UUIDV4']},'first_name':{'type':sequelize_1[a32_0x4ab5('0x5')][a32_0x4ab5('0x6')]},'last_name':{'type':sequelize_1['default']['STRING']},'email':{'type':sequelize_1[a32_0x4ab5('0x5')]['STRING'],'unique':!![]},'phone':{'type':sequelize_1[a32_0x4ab5('0x5')]['STRING'],'unique':!![]},'username':{'type':sequelize_1[a32_0x4ab5('0x5')][a32_0x4ab5('0x6')],'unique':!![]},'password':{'type':sequelize_1['default'][a32_0x4ab5('0x6')]},'status':{'type':sequelize_1[a32_0x4ab5('0x5')]['INTEGER'],'defaultValue':0x0},'created_at':{'type':_0x583d3a[a32_0x4ab5('0x7')],'allowNull':![]},'updated_at':_0x583d3a[a32_0x4ab5('0x7')],'deleted_at':_0x583d3a['DATE']},{'paranoid':!![],'underscored':!![]});return _0x1ae998;};const _0x324f05=_0x39a821['import'](_0x558960,_0x1ae998);return _0x324f05;}}exports[a32_0x4ab5('0x5')]=PassCountingsModel;