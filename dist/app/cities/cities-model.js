var a39_0x497e=['sequelize','default','provincesModel','getEntity','bind','__importDefault','__esModule','defineProperty'];(function(_0x55bf97,_0x5927a1){var _0x470ab3=function(_0x538e4b){while(--_0x538e4b){_0x55bf97['push'](_0x55bf97['shift']());}};_0x470ab3(++_0x5927a1);}(a39_0x497e,0x1cd));var a39_0x75db=function(_0x3e9071,_0x595df9){_0x3e9071=_0x3e9071-0x0;var _0x2c33c8=a39_0x497e[_0x3e9071];return _0x2c33c8;};'use strict';var __importDefault=this&&this[a39_0x75db('0x0')]||function(_0x17e6e0){return _0x17e6e0&&_0x17e6e0[a39_0x75db('0x1')]?_0x17e6e0:{'default':_0x17e6e0};};Object[a39_0x75db('0x2')](exports,a39_0x75db('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a39_0x75db('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class CitiesModel extends model_base_1[a39_0x75db('0x4')]{constructor(_0x53c57e,_0x1192ca,_0x53b602){super(_0x53b602);const _0x4043fa=function(_0x53c57e){const _0x28db3a={'provinces_id':{'type':sequelize_1[a39_0x75db('0x4')]['INTEGER'],'references':{'model':_0x53b602[a39_0x75db('0x5')],'key':'id'}},'name':{'type':sequelize_1[a39_0x75db('0x4')]['STRING']}};const _0x4043fa=this[a39_0x75db('0x6')](_0x53c57e,_0x1192ca,_0x28db3a);return _0x4043fa;}[a39_0x75db('0x7')](this);const _0xbbb5d9=_0x53c57e['import'](_0x1192ca,_0x4043fa);return _0xbbb5d9;}}exports[a39_0x75db('0x4')]=CitiesModel;