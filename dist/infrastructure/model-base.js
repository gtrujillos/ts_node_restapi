var a188_0x55cd=['created_at','__importDefault','defineProperty','__esModule','sequelize','basicField','default','INTEGER','getEntity','assign'];(function(_0xfb6358,_0x2b6efe){var _0x7d5f85=function(_0x404e74){while(--_0x404e74){_0xfb6358['push'](_0xfb6358['shift']());}};_0x7d5f85(++_0x2b6efe);}(a188_0x55cd,0x1af));var a188_0x4e33=function(_0xb5382f,_0x5badbf){_0xb5382f=_0xb5382f-0x0;var _0x5b63bb=a188_0x55cd[_0xb5382f];return _0x5b63bb;};'use strict';var __importDefault=this&&this[a188_0x4e33('0x0')]||function(_0x31cc08){return _0x31cc08&&_0x31cc08['__esModule']?_0x31cc08:{'default':_0x31cc08};};Object[a188_0x4e33('0x1')](exports,a188_0x4e33('0x2'),{'value':!![]});const sequelize_1=__importDefault(require(a188_0x4e33('0x3')));class ModelBase{constructor(_0x5c469){this[a188_0x4e33('0x4')]={};this['basicField']={'id':{'type':sequelize_1[a188_0x4e33('0x5')][a188_0x4e33('0x6')],'primaryKey':!![],'autoIncrement':!![]},'created_by_user_id':{'type':sequelize_1[a188_0x4e33('0x5')]['INTEGER']},'updated_by_user_id':{'type':sequelize_1[a188_0x4e33('0x5')]['INTEGER']},'deleted_by_user_id':{'type':sequelize_1[a188_0x4e33('0x5')]['INTEGER']}};}[a188_0x4e33('0x7')](_0x13ad75,_0x53637c,_0x53e1b8,_0x16213f=function(_0xf3cde0){}){const _0x3d2f8d={};Object[a188_0x4e33('0x8')](_0x3d2f8d,this[a188_0x4e33('0x4')],_0x53e1b8);const _0x45ca2d=_0x13ad75['define'](_0x53637c,_0x3d2f8d,{'paranoid':!![],'underscored':!![],'timestamps':!![],'updatedAt':'updated_at','createdAt':a188_0x4e33('0x9'),'deletedAt':'deleted_at'});_0x45ca2d['associate']=_0x16213f;return _0x45ca2d;}}exports[a188_0x4e33('0x5')]=ModelBase;