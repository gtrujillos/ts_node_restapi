var a240_0x22a9=['INTEGER','usersRelationshipsStatusModel','getEntity','bind','import','__importDefault','__esModule','../../infrastructure/model-base','default'];(function(_0x4d697b,_0x412f5d){var _0x13a220=function(_0x10c543){while(--_0x10c543){_0x4d697b['push'](_0x4d697b['shift']());}};_0x13a220(++_0x412f5d);}(a240_0x22a9,0xf8));var a240_0x4353=function(_0x456ee1,_0x32bd14){_0x456ee1=_0x456ee1-0x0;var _0x3b89bb=a240_0x22a9[_0x456ee1];return _0x3b89bb;};'use strict';var __importDefault=this&&this[a240_0x4353('0x0')]||function(_0x1a0bc0){return _0x1a0bc0&&_0x1a0bc0[a240_0x4353('0x1')]?_0x1a0bc0:{'default':_0x1a0bc0};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));const model_base_1=__importDefault(require(a240_0x4353('0x2')));class UsersRelationshipsModel extends model_base_1[a240_0x4353('0x3')]{constructor(_0x1c10e6,_0x6108cd,_0x1b6e53){super(_0x1b6e53);const _0x185160=function(_0x1c10e6,_0x7e09ac){const _0x51e8a4={'user_status_id':{'type':sequelize_1[a240_0x4353('0x3')][a240_0x4353('0x4')],'references':{'model':_0x1b6e53[a240_0x4353('0x5')],'key':'id'}},'user_id':{'type':_0x7e09ac[a240_0x4353('0x4')],'references':{'model':_0x1b6e53['usersModel'],'key':'id'}}};const _0x185160=this[a240_0x4353('0x6')](_0x1c10e6,_0x6108cd,_0x51e8a4);return _0x185160;}[a240_0x4353('0x7')](this);const _0x4b2885=_0x1c10e6[a240_0x4353('0x8')](_0x6108cd,_0x185160);return _0x4b2885;}}exports[a240_0x4353('0x3')]=UsersRelationshipsModel;