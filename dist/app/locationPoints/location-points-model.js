var a79_0x1e35=['__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','define','UUIDV4','INTEGER','citiesModel','DOUBLE','DATE','import'];(function(_0x40cecb,_0xf278f){var _0x167ec4=function(_0x55c8b6){while(--_0x55c8b6){_0x40cecb['push'](_0x40cecb['shift']());}};_0x167ec4(++_0xf278f);}(a79_0x1e35,0x1e1));var a79_0x5a05=function(_0x25e537,_0x3eae0b){_0x25e537=_0x25e537-0x0;var _0x784843=a79_0x1e35[_0x25e537];return _0x784843;};'use strict';var __importDefault=this&&this[a79_0x5a05('0x0')]||function(_0x22c9c8){return _0x22c9c8&&_0x22c9c8[a79_0x5a05('0x1')]?_0x22c9c8:{'default':_0x22c9c8};};Object[a79_0x5a05('0x2')](exports,a79_0x5a05('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a79_0x5a05('0x3')));const model_base_1=__importDefault(require(a79_0x5a05('0x4')));class LocationPointsModel extends model_base_1[a79_0x5a05('0x5')]{constructor(_0x172f59,_0x5489f2,_0x2ca197){super(_0x2ca197);const _0x211fa3=function(_0x172f59,_0x1feb4e){const _0x211fa3=_0x172f59[a79_0x5a05('0x6')](_0x5489f2,{'id':{'type':_0x1feb4e['UUID'],'primaryKey':!![],'defaultValue':_0x1feb4e[a79_0x5a05('0x7')]},'city_id':{'type':sequelize_1[a79_0x5a05('0x5')][a79_0x5a05('0x8')],'references':{'model':_0x2ca197[a79_0x5a05('0x9')],'key':'id'}},'lat':{'type':sequelize_1['default'][a79_0x5a05('0xa')]},'lon':{'type':sequelize_1[a79_0x5a05('0x5')][a79_0x5a05('0xa')]},'alt':{'type':sequelize_1[a79_0x5a05('0x5')][a79_0x5a05('0xa')]},'hdop':{'type':sequelize_1[a79_0x5a05('0x5')]['DOUBLE']},'pdop':{'type':sequelize_1[a79_0x5a05('0x5')][a79_0x5a05('0xa')]},'vdop':{'type':sequelize_1['default'][a79_0x5a05('0xa')]},'reported_at':sequelize_1[a79_0x5a05('0x5')][a79_0x5a05('0xb')]},{'paranoid':!![],'underscored':!![]});return _0x211fa3;};const _0x35b5fe=_0x172f59[a79_0x5a05('0xc')](_0x5489f2,_0x211fa3);return _0x35b5fe;}}exports[a79_0x5a05('0x5')]=LocationPointsModel;