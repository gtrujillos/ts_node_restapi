var a32_0x30b3=['defineProperty','define','UUID','default','STRING','INTEGER','DATE','import','__importDefault','__esModule'];(function(_0x15a675,_0x5f4c48){var _0x36f3cc=function(_0x526aef){while(--_0x526aef){_0x15a675['push'](_0x15a675['shift']());}};_0x36f3cc(++_0x5f4c48);}(a32_0x30b3,0x1ca));var a32_0x12d3=function(_0x1ece55,_0x3d1425){_0x1ece55=_0x1ece55-0x0;var _0x305823=a32_0x30b3[_0x1ece55];return _0x305823;};'use strict';var __importDefault=this&&this[a32_0x12d3('0x0')]||function(_0x46e37b){return _0x46e37b&&_0x46e37b[a32_0x12d3('0x1')]?_0x46e37b:{'default':_0x46e37b};};Object[a32_0x12d3('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PassCountingsModel{constructor(_0x22794b,_0x579ab4){const _0xe123ad=function(_0x22794b,_0x13230c){const _0xe123ad=_0x22794b[a32_0x12d3('0x3')](_0x579ab4,{'id':{'type':_0x13230c[a32_0x12d3('0x4')],'primaryKey':!![],'defaultValue':_0x13230c['UUIDV4']},'first_name':{'type':sequelize_1[a32_0x12d3('0x5')][a32_0x12d3('0x6')]},'last_name':{'type':sequelize_1[a32_0x12d3('0x5')]['STRING']},'email':{'type':sequelize_1[a32_0x12d3('0x5')]['STRING'],'unique':!![]},'phone':{'type':sequelize_1[a32_0x12d3('0x5')][a32_0x12d3('0x6')],'unique':!![]},'username':{'type':sequelize_1['default'][a32_0x12d3('0x6')],'unique':!![]},'password':{'type':sequelize_1['default']['STRING']},'status':{'type':sequelize_1[a32_0x12d3('0x5')][a32_0x12d3('0x7')],'defaultValue':0x0},'created_at':{'type':_0x13230c[a32_0x12d3('0x8')],'allowNull':![]},'updated_at':_0x13230c[a32_0x12d3('0x8')],'deleted_at':_0x13230c['DATE']},{'paranoid':!![],'underscored':!![]});return _0xe123ad;};const _0x191ca1=_0x22794b[a32_0x12d3('0x9')](_0x579ab4,_0xe123ad);return _0x191ca1;}}exports[a32_0x12d3('0x5')]=PassCountingsModel;