var a58_0x1b88=['default','INTEGER','DATE','import','__importDefault','__esModule','defineProperty','sequelize','define'];(function(_0x1cdf85,_0x2f4af6){var _0x2c7e4c=function(_0x562038){while(--_0x562038){_0x1cdf85['push'](_0x1cdf85['shift']());}};_0x2c7e4c(++_0x2f4af6);}(a58_0x1b88,0x1cf));var a58_0x1342=function(_0x11153a,_0x5cf5b0){_0x11153a=_0x11153a-0x0;var _0x2791c1=a58_0x1b88[_0x11153a];return _0x2791c1;};'use strict';var __importDefault=this&&this[a58_0x1342('0x0')]||function(_0x40fd31){return _0x40fd31&&_0x40fd31[a58_0x1342('0x1')]?_0x40fd31:{'default':_0x40fd31};};Object[a58_0x1342('0x2')](exports,a58_0x1342('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a58_0x1342('0x3')));class PlayerDevicesModel{constructor(_0x1080df,_0x173a61,_0x31cafb,_0x2b1ce1){const _0xd3ab2b=function(_0x1080df,_0xf25e00){const _0xd3ab2b=_0x1080df[a58_0x1342('0x4')](_0x173a61,{'id':{'type':sequelize_1[a58_0x1342('0x5')][a58_0x1342('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a58_0x1342('0x5')]['UUID'],'defaultValue':sequelize_1['default']['UUIDV4']},'device_id':{'type':_0xf25e00[a58_0x1342('0x6')],'references':{'model':_0x31cafb,'key':'id'}},'player_id':{'type':_0xf25e00['INTEGER'],'references':{'model':_0x2b1ce1,'key':'id'}},'status':{'type':sequelize_1[a58_0x1342('0x5')][a58_0x1342('0x6')]},'created_at':{'type':_0xf25e00['DATE'],'allowNull':![]},'updated_at':_0xf25e00[a58_0x1342('0x7')],'deleted_at':_0xf25e00[a58_0x1342('0x7')]},{'paranoid':!![],'underscored':!![]});return _0xd3ab2b;};const _0xcb3177=_0x1080df[a58_0x1342('0x8')](_0x173a61,_0xd3ab2b);return _0xcb3177;}}exports[a58_0x1342('0x5')]=PlayerDevicesModel;