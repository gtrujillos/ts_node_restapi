var a166_0x4bb6=['define','UUID','default','UUIDV4','INTEGER','STRING','DATE','__esModule','defineProperty'];(function(_0xa14d95,_0x3f9883){var _0x2885d6=function(_0xe100e3){while(--_0xe100e3){_0xa14d95['push'](_0xa14d95['shift']());}};_0x2885d6(++_0x3f9883);}(a166_0x4bb6,0x10c));var a166_0x3d5a=function(_0x454448,_0x393d03){_0x454448=_0x454448-0x0;var _0xcb3e9e=a166_0x4bb6[_0x454448];return _0xcb3e9e;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3e1077){return _0x3e1077&&_0x3e1077[a166_0x3d5a('0x0')]?_0x3e1077:{'default':_0x3e1077};};Object[a166_0x3d5a('0x1')](exports,a166_0x3d5a('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x22ccfd,_0x4bf55d,_0x5ccc35,_0x576641){const _0x597af4=function(_0x22ccfd,_0x3b58ac){const _0x597af4=_0x22ccfd[a166_0x3d5a('0x2')](_0x4bf55d,{'id':{'type':sequelize_1['default']['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a166_0x3d5a('0x3')],'defaultValue':sequelize_1[a166_0x3d5a('0x4')][a166_0x3d5a('0x5')]},'device_id':{'type':_0x3b58ac[a166_0x3d5a('0x6')],'references':{'model':_0x5ccc35,'key':'id'}},'player_id':{'type':_0x3b58ac[a166_0x3d5a('0x6')],'references':{'model':_0x576641,'key':'id'}},'playing_item':{'type':sequelize_1['default'][a166_0x3d5a('0x7')]},'playlist':{'type':sequelize_1['default']['STRING']},'status':{'type':sequelize_1['default'][a166_0x3d5a('0x6')]},'reported_at':{'type':_0x3b58ac[a166_0x3d5a('0x8')],'allowNull':![]},'created_at':{'type':_0x3b58ac[a166_0x3d5a('0x8')],'allowNull':![]},'updated_at':_0x3b58ac['DATE'],'deleted_at':_0x3b58ac[a166_0x3d5a('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x597af4;};const _0x430130=_0x22ccfd['import'](_0x4bf55d,_0x597af4);return _0x430130;}}exports[a166_0x3d5a('0x4')]=PlayerDevicesModel;