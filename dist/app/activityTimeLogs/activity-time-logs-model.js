var a25_0x4a01=['default','INTEGER','timeLogsModel','activitiesModel','getEntity','associate','belongsTo','time_log_id','activity_id','bind','sync','then','count','defineProperty','__esModule','sequelize','../../infrastructure/model-base'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a25_0x4a01,0xfb));var a25_0x1316=function(_0x25cb50,_0x14b339){_0x25cb50=_0x25cb50-0x0;var _0x1953e2=a25_0x4a01[_0x25cb50];return _0x1953e2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1d60cd){return _0x1d60cd&&_0x1d60cd['__esModule']?_0x1d60cd:{'default':_0x1d60cd};};Object[a25_0x1316('0x0')](exports,a25_0x1316('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a25_0x1316('0x2')));const model_base_1=__importDefault(require(a25_0x1316('0x3')));class ActivityTimeLogsModel extends model_base_1['default']{constructor(_0x19d989,_0x41dc86,_0x45e968){super(_0x45e968);const _0x2ca08d=function(_0x19d989){const _0x134d3b={'time_log_id':{'type':sequelize_1[a25_0x1316('0x4')][a25_0x1316('0x5')],'references':{'model':_0x45e968[a25_0x1316('0x6')],'key':'id'}},'activity_id':{'type':sequelize_1[a25_0x1316('0x4')]['INTEGER'],'references':{'model':_0x45e968[a25_0x1316('0x7')],'key':'id'}}};const _0x2ca08d=this[a25_0x1316('0x8')](_0x19d989,_0x41dc86,_0x134d3b);_0x2ca08d[a25_0x1316('0x9')]=function(_0x45e968){_0x2ca08d[a25_0x1316('0xa')](_0x45e968[a25_0x1316('0x6')],{'foreignKey':a25_0x1316('0xb')});_0x2ca08d[a25_0x1316('0xa')](_0x45e968[a25_0x1316('0x7')],{'foreignKey':a25_0x1316('0xc')});};return _0x2ca08d;}[a25_0x1316('0xd')](this);const _0x5be980=_0x19d989['import'](_0x41dc86,_0x2ca08d);_0x5be980[a25_0x1316('0xe')]()[a25_0x1316('0xf')](()=>{_0x5be980[a25_0x1316('0x10')]()['then'](_0x29b1c1=>{if(_0x29b1c1==0x0){}});});return _0x5be980;}}exports[a25_0x1316('0x4')]=ActivityTimeLogsModel;