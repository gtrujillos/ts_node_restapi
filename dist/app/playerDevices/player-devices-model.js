var a119_0x5bfa=['__importDefault','__esModule','sequelize','define','default','UUID','UUIDV4','INTEGER','STRING','DATE','import'];(function(_0x1c6e70,_0x41f0b7){var _0x925359=function(_0x190014){while(--_0x190014){_0x1c6e70['push'](_0x1c6e70['shift']());}};_0x925359(++_0x41f0b7);}(a119_0x5bfa,0x9a));var a119_0x2910=function(_0x185e05,_0x2f4d97){_0x185e05=_0x185e05-0x0;var _0x3bffc2=a119_0x5bfa[_0x185e05];return _0x3bffc2;};'use strict';var __importDefault=this&&this[a119_0x2910('0x0')]||function(_0x150499){return _0x150499&&_0x150499[a119_0x2910('0x1')]?_0x150499:{'default':_0x150499};};Object['defineProperty'](exports,a119_0x2910('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a119_0x2910('0x2')));class PlayerDevicesModel{constructor(_0xf10afe,_0x120398,_0x3657a4,_0x122261){const _0x40bf6a=function(_0xf10afe,_0x2709d0){const _0x40bf6a=_0xf10afe[a119_0x2910('0x3')](_0x120398,{'id':{'type':sequelize_1[a119_0x2910('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a119_0x2910('0x4')][a119_0x2910('0x5')],'defaultValue':sequelize_1[a119_0x2910('0x4')][a119_0x2910('0x6')]},'device_id':{'type':_0x2709d0[a119_0x2910('0x7')],'references':{'model':_0x3657a4,'key':'id'}},'player_id':{'type':_0x2709d0[a119_0x2910('0x7')],'references':{'model':_0x122261,'key':'id'}},'playing_item':{'type':sequelize_1[a119_0x2910('0x4')][a119_0x2910('0x8')]},'playlist':{'type':sequelize_1[a119_0x2910('0x4')][a119_0x2910('0x8')]},'status':{'type':sequelize_1[a119_0x2910('0x4')]['INTEGER']},'reported_at':{'type':_0x2709d0['DATE'],'allowNull':![]},'created_at':{'type':_0x2709d0['DATE'],'allowNull':![]},'updated_at':_0x2709d0['DATE'],'deleted_at':_0x2709d0[a119_0x2910('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x40bf6a;};const _0x16669c=_0xf10afe[a119_0x2910('0xa')](_0x120398,_0x40bf6a);return _0x16669c;}}exports[a119_0x2910('0x4')]=PlayerDevicesModel;