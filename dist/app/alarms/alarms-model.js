var a1_0x5725=['UUID','UUIDV4','INTEGER','DATE','__importDefault','defineProperty','sequelize','define','default'];(function(_0x168c3d,_0x4040dd){var _0x15b7fb=function(_0x3ae51d){while(--_0x3ae51d){_0x168c3d['push'](_0x168c3d['shift']());}};_0x15b7fb(++_0x4040dd);}(a1_0x5725,0x11b));var a1_0x326a=function(_0x5d0607,_0x1fcb86){_0x5d0607=_0x5d0607-0x0;var _0x5472ec=a1_0x5725[_0x5d0607];return _0x5472ec;};'use strict';var __importDefault=this&&this[a1_0x326a('0x0')]||function(_0x536ce2){return _0x536ce2&&_0x536ce2['__esModule']?_0x536ce2:{'default':_0x536ce2};};Object[a1_0x326a('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a1_0x326a('0x2')));class AlarmsModel{constructor(_0x562061,_0x1f76a0,_0x181101){const _0x3f8023=function(_0x562061,_0x11c33f){const _0x3f8023=_0x562061[a1_0x326a('0x3')](_0x1f76a0,{'id':{'type':sequelize_1[a1_0x326a('0x4')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a1_0x326a('0x5')],'defaultValue':sequelize_1['default'][a1_0x326a('0x6')]},'device_id':{'type':_0x11c33f[a1_0x326a('0x7')],'references':{'model':_0x181101,'key':'id'}},'lat':{'type':sequelize_1[a1_0x326a('0x4')]['DOUBLE']},'lon':{'type':sequelize_1['default']['DOUBLE']},'status':{'type':sequelize_1[a1_0x326a('0x4')][a1_0x326a('0x7')]},'reported_at':{'type':_0x11c33f['DATE'],'allowNull':![]},'created_at':{'type':_0x11c33f[a1_0x326a('0x8')],'allowNull':![]},'updated_at':_0x11c33f[a1_0x326a('0x8')],'deleted_at':_0x11c33f['DATE']},{'paranoid':!![],'underscored':!![]});return _0x3f8023;};const _0x39398e=_0x562061['import'](_0x1f76a0,_0x3f8023);return _0x39398e;}}exports['default']=AlarmsModel;