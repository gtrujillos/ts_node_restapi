var a73_0x2606=['defineProperty','sequelize','../../infrastructure/model-base','default','STRING','DATE','getEntity','belongsToMany','activitiesModel','activityFilesModel','file_id','import','sync','then','count','__importDefault','__esModule'];(function(_0x14a9d8,_0x185164){var _0x1a9eb0=function(_0x4d987a){while(--_0x4d987a){_0x14a9d8['push'](_0x14a9d8['shift']());}};_0x1a9eb0(++_0x185164);}(a73_0x2606,0x64));var a73_0x2d82=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a73_0x2606[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a73_0x2d82('0x0')]||function(_0x64f48d){return _0x64f48d&&_0x64f48d[a73_0x2d82('0x1')]?_0x64f48d:{'default':_0x64f48d};};Object[a73_0x2d82('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a73_0x2d82('0x3')));const model_base_1=__importDefault(require(a73_0x2d82('0x4')));class FilesModel extends model_base_1[a73_0x2d82('0x5')]{constructor(_0xf2bec,_0x4046c7,_0x413316){super(_0x413316);const _0x2fa5a5=function(_0xf2bec){const _0x302950={'title':{'type':sequelize_1[a73_0x2d82('0x5')][a73_0x2d82('0x6')]},'description':{'type':sequelize_1[a73_0x2d82('0x5')]['TEXT']},'name':{'type':sequelize_1[a73_0x2d82('0x5')][a73_0x2d82('0x6')]},'stored_name':{'type':sequelize_1[a73_0x2d82('0x5')][a73_0x2d82('0x6')]},'size':{'type':sequelize_1[a73_0x2d82('0x5')]['INTEGER']},'type':{'type':sequelize_1[a73_0x2d82('0x5')]['STRING']},'reported_at':sequelize_1[a73_0x2d82('0x5')][a73_0x2d82('0x7')],'is_private':{'type':sequelize_1[a73_0x2d82('0x5')]['BOOLEAN'],'allowNull':![],'defaultValue':!![]}};const _0x2fa5a5=this[a73_0x2d82('0x8')](_0xf2bec,_0x4046c7,_0x302950,function(_0x413316){_0x2fa5a5[a73_0x2d82('0x9')](_0x413316[a73_0x2d82('0xa')],{'through':_0x413316[a73_0x2d82('0xb')],'foreignKey':a73_0x2d82('0xc'),'as':'activities'});});return _0x2fa5a5;}['bind'](this);const _0x399b0a=_0xf2bec[a73_0x2d82('0xd')](_0x4046c7,_0x2fa5a5);_0x399b0a[a73_0x2d82('0xe')]()[a73_0x2d82('0xf')](()=>{_0x399b0a[a73_0x2d82('0x10')]()['then'](_0x5c19f4=>{if(_0x5c19f4==0x0){}});});return _0x399b0a;}}exports[a73_0x2d82('0x5')]=FilesModel;