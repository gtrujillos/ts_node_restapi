var a61_0x385b=['DATE','import','__importDefault','__esModule','defineProperty','sequelize','define','default','UUID','INTEGER','DOUBLE'];(function(_0x5bbb29,_0x37062a){var _0x10d7ea=function(_0x4a0502){while(--_0x4a0502){_0x5bbb29['push'](_0x5bbb29['shift']());}};_0x10d7ea(++_0x37062a);}(a61_0x385b,0x1a4));var a61_0x4409=function(_0xaa0acb,_0x542052){_0xaa0acb=_0xaa0acb-0x0;var _0x5bcbfb=a61_0x385b[_0xaa0acb];return _0x5bcbfb;};'use strict';var __importDefault=this&&this[a61_0x4409('0x0')]||function(_0x4f3937){return _0x4f3937&&_0x4f3937[a61_0x4409('0x1')]?_0x4f3937:{'default':_0x4f3937};};Object[a61_0x4409('0x2')](exports,a61_0x4409('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a61_0x4409('0x3')));class AlarmsModel{constructor(_0x32ad54,_0x1576f0,_0x2331dd){const _0x460d7c=function(_0x32ad54,_0x98a608){const _0x460d7c=_0x32ad54[a61_0x4409('0x4')](_0x1576f0,{'id':{'type':sequelize_1[a61_0x4409('0x5')]['INTEGER'],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a61_0x4409('0x6')],'defaultValue':sequelize_1['default']['UUIDV4']},'device_id':{'type':_0x98a608[a61_0x4409('0x7')],'references':{'model':_0x2331dd,'key':'id'}},'lat':{'type':sequelize_1[a61_0x4409('0x5')][a61_0x4409('0x8')]},'lon':{'type':sequelize_1[a61_0x4409('0x5')][a61_0x4409('0x8')]},'status':{'type':sequelize_1[a61_0x4409('0x5')][a61_0x4409('0x7')]},'reported_at':{'type':_0x98a608[a61_0x4409('0x9')],'allowNull':![]},'created_at':{'type':_0x98a608['DATE'],'allowNull':![]},'updated_at':_0x98a608[a61_0x4409('0x9')],'deleted_at':_0x98a608['DATE']},{'paranoid':!![],'underscored':!![]});return _0x460d7c;};const _0xe01156=_0x32ad54[a61_0x4409('0xa')](_0x1576f0,_0x460d7c);return _0xe01156;}}exports[a61_0x4409('0x5')]=AlarmsModel;