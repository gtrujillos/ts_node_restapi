var a189_0x2c9d=['STRING','getEntity','bind','import','__importDefault','__esModule','sequelize','default','brandsModelName','companiesModel'];(function(_0x97508f,_0x33b745){var _0x90c5d8=function(_0x11f7b8){while(--_0x11f7b8){_0x97508f['push'](_0x97508f['shift']());}};_0x90c5d8(++_0x33b745);}(a189_0x2c9d,0x1b2));var a189_0x5a23=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a189_0x2c9d[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a189_0x5a23('0x0')]||function(_0x454cb4){return _0x454cb4&&_0x454cb4['__esModule']?_0x454cb4:{'default':_0x454cb4};};Object['defineProperty'](exports,a189_0x5a23('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a189_0x5a23('0x2')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class VehiclesModel extends model_base_1[a189_0x5a23('0x3')]{constructor(_0x3e1c0e,_0x5a06c5,_0x93c7e5){super(_0x93c7e5);const _0x45a5de=function(_0x3e1c0e){const _0x1f3ef2={'brand_id':{'type':sequelize_1[a189_0x5a23('0x3')]['INTEGER'],'references':{'model':_0x93c7e5[a189_0x5a23('0x4')],'key':'id'}},'company_id':{'type':sequelize_1['default']['INTEGER'],'references':{'model':_0x93c7e5[a189_0x5a23('0x5')],'key':'id'}},'plate':{'type':sequelize_1['default']['STRING']},'model':{'type':sequelize_1[a189_0x5a23('0x3')][a189_0x5a23('0x6')]}};const _0x45a5de=this[a189_0x5a23('0x7')](_0x3e1c0e,_0x5a06c5,_0x1f3ef2);return _0x45a5de;}[a189_0x5a23('0x8')](this);const _0x48842c=_0x3e1c0e[a189_0x5a23('0x9')](_0x5a06c5,_0x45a5de);return _0x48842c;}}exports[a189_0x5a23('0x3')]=VehiclesModel;