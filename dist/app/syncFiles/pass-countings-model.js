var a67_0x58fe=['DATE','import','__importDefault','defineProperty','__esModule','UUIDV4','default','INTEGER'];(function(_0x4440c2,_0x342bad){var _0x227b20=function(_0x560015){while(--_0x560015){_0x4440c2['push'](_0x4440c2['shift']());}};_0x227b20(++_0x342bad);}(a67_0x58fe,0x18a));var a67_0x44d9=function(_0x5c3f96,_0x908f6e){_0x5c3f96=_0x5c3f96-0x0;var _0x1c2313=a67_0x58fe[_0x5c3f96];return _0x1c2313;};'use strict';var __importDefault=this&&this[a67_0x44d9('0x0')]||function(_0x5eaefa){return _0x5eaefa&&_0x5eaefa['__esModule']?_0x5eaefa:{'default':_0x5eaefa};};Object[a67_0x44d9('0x1')](exports,a67_0x44d9('0x2'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PassCountingsModel{constructor(_0x1311c9,_0x30d5ba){const _0x159b58=function(_0x1311c9,_0x5e1a60){const _0x159b58=_0x1311c9['define'](_0x30d5ba,{'id':{'type':_0x5e1a60['UUID'],'primaryKey':!![],'defaultValue':_0x5e1a60[a67_0x44d9('0x3')]},'device_id':{'type':sequelize_1[a67_0x44d9('0x4')][a67_0x44d9('0x5')]},'amount':{'type':sequelize_1[a67_0x44d9('0x4')][a67_0x44d9('0x5')]},'counted_at':{'type':sequelize_1[a67_0x44d9('0x4')]['DATE']},'created_at':{'type':_0x5e1a60['DATE'],'allowNull':![]},'updated_at':_0x5e1a60[a67_0x44d9('0x6')],'deleted_at':_0x5e1a60[a67_0x44d9('0x6')]},{'paranoid':!![],'underscored':!![]});return _0x159b58;};const _0x399874=_0x1311c9[a67_0x44d9('0x7')](_0x30d5ba,_0x159b58);return _0x399874;}}exports['default']=PassCountingsModel;