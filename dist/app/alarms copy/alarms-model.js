var a7_0x19ee=['UUID','DOUBLE','DATE','import','__esModule','defineProperty','define','default','INTEGER'];(function(_0x5c97bf,_0xc56854){var _0x549432=function(_0x59f7af){while(--_0x59f7af){_0x5c97bf['push'](_0x5c97bf['shift']());}};_0x549432(++_0xc56854);}(a7_0x19ee,0x1f3));var a7_0xbdbd=function(_0x4dcb23,_0x361894){_0x4dcb23=_0x4dcb23-0x0;var _0x3ffd17=a7_0x19ee[_0x4dcb23];return _0x3ffd17;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5365c3){return _0x5365c3&&_0x5365c3[a7_0xbdbd('0x0')]?_0x5365c3:{'default':_0x5365c3};};Object[a7_0xbdbd('0x1')](exports,a7_0xbdbd('0x0'),{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class AlarmsModel{constructor(_0x4c8fb7,_0x1d72a2,_0x4267ca){const _0x21044b=function(_0x4c8fb7,_0x244d80){const _0x21044b=_0x4c8fb7[a7_0xbdbd('0x2')](_0x1d72a2,{'id':{'type':sequelize_1[a7_0xbdbd('0x3')][a7_0xbdbd('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a7_0xbdbd('0x3')][a7_0xbdbd('0x5')],'defaultValue':sequelize_1[a7_0xbdbd('0x3')]['UUIDV4']},'device_id':{'type':_0x244d80[a7_0xbdbd('0x4')],'references':{'model':_0x4267ca,'key':'id'}},'lat':{'type':sequelize_1[a7_0xbdbd('0x3')][a7_0xbdbd('0x6')]},'lon':{'type':sequelize_1['default']['DOUBLE']},'status':{'type':sequelize_1[a7_0xbdbd('0x3')][a7_0xbdbd('0x4')]},'reported_at':{'type':_0x244d80[a7_0xbdbd('0x7')],'allowNull':![]},'created_at':{'type':_0x244d80[a7_0xbdbd('0x7')],'allowNull':![]},'updated_at':_0x244d80['DATE'],'deleted_at':_0x244d80[a7_0xbdbd('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x21044b;};const _0x175680=_0x4c8fb7[a7_0xbdbd('0x8')](_0x1d72a2,_0x21044b);return _0x175680;}}exports['default']=AlarmsModel;