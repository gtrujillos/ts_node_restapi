var a140_0x2d3c=['UUIDV4','DOUBLE','DATE','import','__importDefault','__esModule','defineProperty','sequelize','default','INTEGER','UUID'];(function(_0x3d7e35,_0x151f51){var _0x42e52f=function(_0x5b7f58){while(--_0x5b7f58){_0x3d7e35['push'](_0x3d7e35['shift']());}};_0x42e52f(++_0x151f51);}(a140_0x2d3c,0xe0));var a140_0x5461=function(_0x44cd4b,_0x2dd6f2){_0x44cd4b=_0x44cd4b-0x0;var _0x1ad9c1=a140_0x2d3c[_0x44cd4b];return _0x1ad9c1;};'use strict';var __importDefault=this&&this[a140_0x5461('0x0')]||function(_0x3a8e66){return _0x3a8e66&&_0x3a8e66[a140_0x5461('0x1')]?_0x3a8e66:{'default':_0x3a8e66};};Object[a140_0x5461('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a140_0x5461('0x3')));class AlarmsModel{constructor(_0x2f7358,_0x249fd7,_0x354531){const _0x43fe60=function(_0x2f7358,_0x112902){const _0x43fe60=_0x2f7358['define'](_0x249fd7,{'id':{'type':sequelize_1[a140_0x5461('0x4')][a140_0x5461('0x5')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a140_0x5461('0x4')][a140_0x5461('0x6')],'defaultValue':sequelize_1['default'][a140_0x5461('0x7')]},'device_id':{'type':_0x112902[a140_0x5461('0x5')],'references':{'model':_0x354531,'key':'id'}},'lat':{'type':sequelize_1[a140_0x5461('0x4')][a140_0x5461('0x8')]},'lon':{'type':sequelize_1[a140_0x5461('0x4')][a140_0x5461('0x8')]},'status':{'type':sequelize_1[a140_0x5461('0x4')][a140_0x5461('0x5')]},'reported_at':{'type':_0x112902[a140_0x5461('0x9')],'allowNull':![]},'created_at':{'type':_0x112902['DATE'],'allowNull':![]},'updated_at':_0x112902[a140_0x5461('0x9')],'deleted_at':_0x112902[a140_0x5461('0x9')]},{'paranoid':!![],'underscored':!![]});return _0x43fe60;};const _0x4dbcb5=_0x2f7358[a140_0x5461('0xa')](_0x249fd7,_0x43fe60);return _0x4dbcb5;}}exports['default']=AlarmsModel;