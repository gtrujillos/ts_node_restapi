var a107_0x55e2=['__esModule','defineProperty','sequelize','define','default','UUIDV4','DATE','__importDefault'];(function(_0x3bdc68,_0x2599f5){var _0x305ad7=function(_0xfea096){while(--_0xfea096){_0x3bdc68['push'](_0x3bdc68['shift']());}};_0x305ad7(++_0x2599f5);}(a107_0x55e2,0x67));var a107_0x2731=function(_0x5665fd,_0x510765){_0x5665fd=_0x5665fd-0x0;var _0xcbcc4d=a107_0x55e2[_0x5665fd];return _0xcbcc4d;};'use strict';var __importDefault=this&&this[a107_0x2731('0x0')]||function(_0x138b22){return _0x138b22&&_0x138b22[a107_0x2731('0x1')]?_0x138b22:{'default':_0x138b22};};Object[a107_0x2731('0x2')](exports,a107_0x2731('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a107_0x2731('0x3')));class PlatesModel{constructor(_0x261eac,_0xa7394b){const _0x3c8e62=function(_0x261eac,_0x464176){const _0x3c8e62=_0x261eac[a107_0x2731('0x4')](_0xa7394b,{'id':{'type':sequelize_1[a107_0x2731('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1[a107_0x2731('0x5')]['UUID'],'defaultValue':sequelize_1[a107_0x2731('0x5')][a107_0x2731('0x6')]},'plate':{'type':sequelize_1[a107_0x2731('0x5')]['STRING']},'reported_at':{'type':_0x464176[a107_0x2731('0x7')],'allowNull':![]},'created_at':{'type':_0x464176['DATE'],'allowNull':![]},'updated_at':_0x464176[a107_0x2731('0x7')],'deleted_at':_0x464176['DATE']},{'paranoid':!![],'underscored':!![]});return _0x3c8e62;};const _0x3742d4=_0x261eac['import'](_0xa7394b,_0x3c8e62);return _0x3742d4;}}exports['default']=PlatesModel;