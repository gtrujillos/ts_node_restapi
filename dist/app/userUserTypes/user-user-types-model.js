var a182_0x2481=['UUIDV4','DATE','__esModule','sequelize','define','default','INTEGER','UUID'];(function(_0x36489e,_0x815ff7){var _0x204845=function(_0x4f9719){while(--_0x4f9719){_0x36489e['push'](_0x36489e['shift']());}};_0x204845(++_0x815ff7);}(a182_0x2481,0x1b2));var a182_0x4241=function(_0x157f2a,_0x21d716){_0x157f2a=_0x157f2a-0x0;var _0x42a57b=a182_0x2481[_0x157f2a];return _0x42a57b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x476efa){return _0x476efa&&_0x476efa[a182_0x4241('0x0')]?_0x476efa:{'default':_0x476efa};};Object['defineProperty'](exports,a182_0x4241('0x0'),{'value':!![]});const sequelize_1=__importDefault(require(a182_0x4241('0x1')));class UserUserTypesModel{constructor(_0xee6078,_0x155bbb,_0x5e438a,_0x30ccce){const _0x4d815f=function(_0xee6078,_0xd33cd0){const _0x4d815f=_0xee6078[a182_0x4241('0x2')](_0x155bbb,{'id':{'type':sequelize_1[a182_0x4241('0x3')][a182_0x4241('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a182_0x4241('0x5')],'defaultValue':sequelize_1['default'][a182_0x4241('0x6')]},'user_id':{'type':_0xd33cd0[a182_0x4241('0x4')],'references':{'model':_0x5e438a,'key':'id'}},'user_type_id':{'type':_0xd33cd0[a182_0x4241('0x4')],'references':{'model':_0x30ccce,'key':'id'}},'created_at':{'type':_0xd33cd0[a182_0x4241('0x7')],'allowNull':![]},'updated_at':_0xd33cd0[a182_0x4241('0x7')],'deleted_at':_0xd33cd0[a182_0x4241('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x4d815f;};const _0x2e451b=_0xee6078['import'](_0x155bbb,_0x4d815f);return _0x2e451b;}}exports[a182_0x4241('0x3')]=UserUserTypesModel;