var a134_0x59dc=['defineProperty','sequelize','define','default','UUID','UUIDV4','INTEGER','DATE','import','__importDefault','__esModule'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(a134_0x59dc,0xc4));var a134_0x4bb4=function(_0x2d420d,_0x3d610d){_0x2d420d=_0x2d420d-0x0;var _0x3e1533=a134_0x59dc[_0x2d420d];return _0x3e1533;};'use strict';var __importDefault=this&&this[a134_0x4bb4('0x0')]||function(_0x15d5a0){return _0x15d5a0&&_0x15d5a0[a134_0x4bb4('0x1')]?_0x15d5a0:{'default':_0x15d5a0};};Object[a134_0x4bb4('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a134_0x4bb4('0x3')));class RouteSchedulesModel{constructor(_0x1ee1ee,_0x4eef32,_0x28285c,_0x4a5337,_0x22ed53){const _0xf1a816=function(_0x1ee1ee,_0x5dcd67){const _0xf1a816=_0x1ee1ee[a134_0x4bb4('0x4')](_0x4eef32,{'id':{'type':sequelize_1[a134_0x4bb4('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a134_0x4bb4('0x5')][a134_0x4bb4('0x6')],'defaultValue':sequelize_1[a134_0x4bb4('0x5')][a134_0x4bb4('0x7')]},'user_id':{'type':_0x5dcd67[a134_0x4bb4('0x8')],'references':{'model':_0x28285c,'key':'id'}},'route_id':{'type':_0x5dcd67[a134_0x4bb4('0x8')],'references':{'model':_0x4a5337,'key':'id'}},'vehicle_id':{'type':_0x5dcd67[a134_0x4bb4('0x8')],'references':{'model':_0x22ed53,'key':'id'}},'start_date':{'type':_0x5dcd67[a134_0x4bb4('0x9')]},'end_date':{'type':_0x5dcd67[a134_0x4bb4('0x9')]},'status':{'type':sequelize_1['default'][a134_0x4bb4('0x8')],'defaultValue':0x0},'created_at':{'type':_0x5dcd67['DATE'],'allowNull':![]},'updated_at':_0x5dcd67[a134_0x4bb4('0x9')],'deleted_at':_0x5dcd67['DATE']},{'paranoid':!![],'underscored':!![]});return _0xf1a816;};const _0x1bf1ef=_0x1ee1ee[a134_0x4bb4('0xa')](_0x4eef32,_0xf1a816);return _0x1bf1ef;}}exports[a134_0x4bb4('0x5')]=RouteSchedulesModel;