var a64_0x5cdc=['define','INTEGER','default','UUID','STRING','DATE','__importDefault','__esModule','sequelize'];(function(_0x50b579,_0x1a4950){var _0x2267d5=function(_0x592d60){while(--_0x592d60){_0x50b579['push'](_0x50b579['shift']());}};_0x2267d5(++_0x1a4950);}(a64_0x5cdc,0x1d1));var a64_0x5dcc=function(_0x695bc3,_0x31182f){_0x695bc3=_0x695bc3-0x0;var _0x45d5c6=a64_0x5cdc[_0x695bc3];return _0x45d5c6;};'use strict';var __importDefault=this&&this[a64_0x5dcc('0x0')]||function(_0x3dc63e){return _0x3dc63e&&_0x3dc63e[a64_0x5dcc('0x1')]?_0x3dc63e:{'default':_0x3dc63e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a64_0x5dcc('0x2')));class PlayersModel{constructor(_0x109c13,_0x37b664,_0x175c40){const _0x494320=function(_0x109c13,_0x1ebf7e){const _0x494320=_0x109c13[a64_0x5dcc('0x3')](_0x37b664,{'id':{'type':sequelize_1['default'][a64_0x5dcc('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a64_0x5dcc('0x5')][a64_0x5dcc('0x6')],'defaultValue':sequelize_1['default']['UUIDV4']},'user_id':{'type':_0x1ebf7e['INTEGER'],'references':{'model':_0x175c40,'key':'id'}},'title':{'type':sequelize_1['default'][a64_0x5dcc('0x7')]},'short_desc':{'type':sequelize_1[a64_0x5dcc('0x5')][a64_0x5dcc('0x7')]},'thumb':{'type':sequelize_1[a64_0x5dcc('0x5')][a64_0x5dcc('0x7')]},'created_at':{'type':_0x1ebf7e[a64_0x5dcc('0x8')],'allowNull':![]},'updated_at':_0x1ebf7e[a64_0x5dcc('0x8')],'deleted_at':_0x1ebf7e['DATE']},{'paranoid':!![],'underscored':!![]});return _0x494320;};const _0x407c48=_0x109c13['import'](_0x37b664,_0x494320);return _0x407c48;}}exports['default']=PlayersModel;