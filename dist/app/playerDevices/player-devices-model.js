var a119_0x2bfd=['__importDefault','__esModule','defineProperty','sequelize','define','default','INTEGER','UUID','UUIDV4','DATE','import'];(function(_0x57dd64,_0x32cc59){var _0x66b5b3=function(_0x3cbc3b){while(--_0x3cbc3b){_0x57dd64['push'](_0x57dd64['shift']());}};_0x66b5b3(++_0x32cc59);}(a119_0x2bfd,0x134));var a119_0x404f=function(_0x1d2076,_0x2a7e5a){_0x1d2076=_0x1d2076-0x0;var _0x6ffefc=a119_0x2bfd[_0x1d2076];return _0x6ffefc;};'use strict';var __importDefault=this&&this[a119_0x404f('0x0')]||function(_0x390a65){return _0x390a65&&_0x390a65[a119_0x404f('0x1')]?_0x390a65:{'default':_0x390a65};};Object[a119_0x404f('0x2')](exports,a119_0x404f('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a119_0x404f('0x3')));class PlayerDevicesModel{constructor(_0x108fe5,_0x335670,_0x299d04,_0x56ae3a){const _0x14b724=function(_0x108fe5,_0x5a2a08){const _0x14b724=_0x108fe5[a119_0x404f('0x4')](_0x335670,{'id':{'type':sequelize_1[a119_0x404f('0x5')][a119_0x404f('0x6')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a119_0x404f('0x5')][a119_0x404f('0x7')],'defaultValue':sequelize_1[a119_0x404f('0x5')][a119_0x404f('0x8')]},'device_id':{'type':_0x5a2a08['INTEGER'],'references':{'model':_0x299d04,'key':'id'}},'player_id':{'type':_0x5a2a08[a119_0x404f('0x6')],'references':{'model':_0x56ae3a,'key':'id'}},'playing_item':{'type':sequelize_1[a119_0x404f('0x5')]['STRING']},'playlist':{'type':sequelize_1['default']['STRING']},'status':{'type':sequelize_1[a119_0x404f('0x5')][a119_0x404f('0x6')]},'reported_at':{'type':_0x5a2a08[a119_0x404f('0x9')],'allowNull':![]},'created_at':{'type':_0x5a2a08[a119_0x404f('0x9')],'allowNull':![]},'updated_at':_0x5a2a08[a119_0x404f('0x9')],'deleted_at':_0x5a2a08[a119_0x404f('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x14b724;};const _0x630e29=_0x108fe5[a119_0x404f('0xa')](_0x335670,_0x14b724);return _0x630e29;}}exports[a119_0x404f('0x5')]=PlayerDevicesModel;