var a166_0x504e=['__esModule','defineProperty','sequelize','define','default','UUID','UUIDV4','STRING','INTEGER','DATE','__importDefault'];(function(_0x33278f,_0x1dd492){var _0x2cbd9e=function(_0x181aa5){while(--_0x181aa5){_0x33278f['push'](_0x33278f['shift']());}};_0x2cbd9e(++_0x1dd492);}(a166_0x504e,0xe6));var a166_0x3337=function(_0x2dd80a,_0x393d1a){_0x2dd80a=_0x2dd80a-0x0;var _0x31d9eb=a166_0x504e[_0x2dd80a];return _0x31d9eb;};'use strict';var __importDefault=this&&this[a166_0x3337('0x0')]||function(_0x1eb765){return _0x1eb765&&_0x1eb765[a166_0x3337('0x1')]?_0x1eb765:{'default':_0x1eb765};};Object[a166_0x3337('0x2')](exports,a166_0x3337('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a166_0x3337('0x3')));class PlayerDevicesModel{constructor(_0x279703,_0x5bbc40,_0x1e9a50,_0x5f87a8){const _0x4e4d01=function(_0x279703,_0x10f6ea){const _0x4e4d01=_0x279703[a166_0x3337('0x4')](_0x5bbc40,{'id':{'type':sequelize_1[a166_0x3337('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a166_0x3337('0x6')],'defaultValue':sequelize_1[a166_0x3337('0x5')][a166_0x3337('0x7')]},'device_id':{'type':_0x10f6ea['INTEGER'],'references':{'model':_0x1e9a50,'key':'id'}},'player_id':{'type':_0x10f6ea['INTEGER'],'references':{'model':_0x5f87a8,'key':'id'}},'playing_item':{'type':sequelize_1[a166_0x3337('0x5')][a166_0x3337('0x8')]},'playlist':{'type':sequelize_1[a166_0x3337('0x5')]['STRING']},'status':{'type':sequelize_1['default'][a166_0x3337('0x9')]},'reported_at':{'type':_0x10f6ea[a166_0x3337('0xa')],'allowNull':![]},'created_at':{'type':_0x10f6ea[a166_0x3337('0xa')],'allowNull':![]},'updated_at':_0x10f6ea[a166_0x3337('0xa')],'deleted_at':_0x10f6ea[a166_0x3337('0xa')]},{'paranoid':!![],'underscored':!![]});return _0x4e4d01;};const _0xdcef81=_0x279703['import'](_0x5bbc40,_0x4e4d01);return _0xdcef81;}}exports[a166_0x3337('0x5')]=PlayerDevicesModel;