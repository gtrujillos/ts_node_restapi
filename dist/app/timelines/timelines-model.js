var a213_0x34ac=['DATE','__importDefault','__esModule','defineProperty','define','UUIDV4','default','DOUBLE'];(function(_0x37bade,_0x561fb6){var _0x45bb27=function(_0x44bc44){while(--_0x44bc44){_0x37bade['push'](_0x37bade['shift']());}};_0x45bb27(++_0x561fb6);}(a213_0x34ac,0x159));var a213_0x1e74=function(_0x21db79,_0x237017){_0x21db79=_0x21db79-0x0;var _0x4b1f8f=a213_0x34ac[_0x21db79];return _0x4b1f8f;};'use strict';var __importDefault=this&&this[a213_0x1e74('0x0')]||function(_0xaec1fa){return _0xaec1fa&&_0xaec1fa[a213_0x1e74('0x1')]?_0xaec1fa:{'default':_0xaec1fa};};Object[a213_0x1e74('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class LocationPointsModel{constructor(_0x3b80ff,_0x2db523){const _0x4903c9=function(_0x3b80ff,_0x2d0c00){const _0x4903c9=_0x3b80ff[a213_0x1e74('0x3')](_0x2db523,{'id':{'type':_0x2d0c00['UUID'],'primaryKey':!![],'defaultValue':_0x2d0c00[a213_0x1e74('0x4')]},'lat':{'type':sequelize_1[a213_0x1e74('0x5')][a213_0x1e74('0x6')]},'lon':{'type':sequelize_1[a213_0x1e74('0x5')][a213_0x1e74('0x6')]},'alt':{'type':sequelize_1['default'][a213_0x1e74('0x6')]},'hdop':{'type':sequelize_1[a213_0x1e74('0x5')][a213_0x1e74('0x6')]},'pdop':{'type':sequelize_1[a213_0x1e74('0x5')][a213_0x1e74('0x6')]},'vdop':{'type':sequelize_1['default'][a213_0x1e74('0x6')]},'tracked_at':_0x2d0c00['DATE'],'created_at':{'type':_0x2d0c00['DATE'],'allowNull':![]},'updated_at':_0x2d0c00[a213_0x1e74('0x7')],'deleted_at':_0x2d0c00[a213_0x1e74('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x4903c9;};const _0x519072=_0x3b80ff['import'](_0x2db523,_0x4903c9);return _0x519072;}}exports['default']=LocationPointsModel;