var a137_0x2cf9=['DOUBLE','DATE','sequelize','../../infrastructure/model-base','default','UUID','UUIDV4','INTEGER','citiesModel'];(function(_0x552c26,_0x1f8e80){var _0x39607b=function(_0x472e4c){while(--_0x472e4c){_0x552c26['push'](_0x552c26['shift']());}};_0x39607b(++_0x1f8e80);}(a137_0x2cf9,0x6e));var a137_0x5108=function(_0x1afe29,_0x212442){_0x1afe29=_0x1afe29-0x0;var _0x24004a=a137_0x2cf9[_0x1afe29];return _0x24004a;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4a9879){return _0x4a9879&&_0x4a9879['__esModule']?_0x4a9879:{'default':_0x4a9879};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a137_0x5108('0x0')));const model_base_1=__importDefault(require(a137_0x5108('0x1')));class LocationPointsModel extends model_base_1[a137_0x5108('0x2')]{constructor(_0x4cbc11,_0x425aa0,_0x51f58a){super(_0x51f58a);const _0x4e130a=function(_0x4cbc11,_0x46f3fa){const _0x4e130a=_0x4cbc11['define'](_0x425aa0,{'id':{'type':_0x46f3fa[a137_0x5108('0x3')],'primaryKey':!![],'defaultValue':_0x46f3fa[a137_0x5108('0x4')]},'city_id':{'type':sequelize_1['default'][a137_0x5108('0x5')],'references':{'model':_0x51f58a[a137_0x5108('0x6')],'key':'id'}},'lat':{'type':sequelize_1[a137_0x5108('0x2')][a137_0x5108('0x7')]},'lon':{'type':sequelize_1[a137_0x5108('0x2')]['DOUBLE']},'alt':{'type':sequelize_1[a137_0x5108('0x2')]['DOUBLE']},'hdop':{'type':sequelize_1[a137_0x5108('0x2')][a137_0x5108('0x7')]},'pdop':{'type':sequelize_1['default'][a137_0x5108('0x7')]},'vdop':{'type':sequelize_1['default']['DOUBLE']},'reported_at':sequelize_1['default'][a137_0x5108('0x8')]},{'paranoid':!![],'underscored':!![]});return _0x4e130a;};const _0x2baee7=_0x4cbc11['import'](_0x425aa0,_0x4e130a);return _0x2baee7;}}exports[a137_0x5108('0x2')]=LocationPointsModel;