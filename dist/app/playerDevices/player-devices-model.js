var a57_0x4e08=['define','default','INTEGER','UUID','UUIDV4','DATE','__importDefault','defineProperty'];(function(_0x1d2a47,_0x218e0c){var _0x24043e=function(_0x4e059b){while(--_0x4e059b){_0x1d2a47['push'](_0x1d2a47['shift']());}};_0x24043e(++_0x218e0c);}(a57_0x4e08,0x7e));var a57_0x4abb=function(_0x22f56f,_0x191065){_0x22f56f=_0x22f56f-0x0;var _0x4814b2=a57_0x4e08[_0x22f56f];return _0x4814b2;};'use strict';var __importDefault=this&&this[a57_0x4abb('0x0')]||function(_0x551322){return _0x551322&&_0x551322['__esModule']?_0x551322:{'default':_0x551322};};Object[a57_0x4abb('0x1')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require('sequelize'));class PlayerDevicesModel{constructor(_0x3f3d68,_0x2de166,_0x3a9b02,_0x4b5b2e){const _0x392729=function(_0x3f3d68,_0x2d3178){const _0x392729=_0x3f3d68[a57_0x4abb('0x2')](_0x2de166,{'id':{'type':sequelize_1[a57_0x4abb('0x3')][a57_0x4abb('0x4')],'primaryKey':!![],'autoIncrement':!![]},'uuid':{'type':sequelize_1['default'][a57_0x4abb('0x5')],'defaultValue':sequelize_1[a57_0x4abb('0x3')][a57_0x4abb('0x6')]},'device_id':{'type':_0x2d3178[a57_0x4abb('0x4')],'references':{'model':_0x3a9b02,'key':'id'}},'player_id':{'type':_0x2d3178[a57_0x4abb('0x4')],'references':{'model':_0x4b5b2e,'key':'id'}},'status':{'type':sequelize_1['default']['INTEGER']},'created_at':{'type':_0x2d3178[a57_0x4abb('0x7')],'allowNull':![]},'updated_at':_0x2d3178['DATE'],'deleted_at':_0x2d3178[a57_0x4abb('0x7')]},{'paranoid':!![],'underscored':!![]});return _0x392729;};const _0xac12e3=_0x3f3d68['import'](_0x2de166,_0x392729);return _0xac12e3;}}exports['default']=PlayerDevicesModel;