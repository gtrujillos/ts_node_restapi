var a58_0x4bab=['count','__importDefault','__esModule','defineProperty','sequelize','default','INTEGER','deviceTypesModel','brandsModel','STRING','import','then'];(function(_0x504b3d,_0x5bfc48){var _0x53f621=function(_0x3959ab){while(--_0x3959ab){_0x504b3d['push'](_0x504b3d['shift']());}};_0x53f621(++_0x5bfc48);}(a58_0x4bab,0xfd));var a58_0x5eb7=function(_0x4d4d75,_0x544cee){_0x4d4d75=_0x4d4d75-0x0;var _0x1f3552=a58_0x4bab[_0x4d4d75];return _0x1f3552;};'use strict';var __importDefault=this&&this[a58_0x5eb7('0x0')]||function(_0x3740f7){return _0x3740f7&&_0x3740f7[a58_0x5eb7('0x1')]?_0x3740f7:{'default':_0x3740f7};};Object[a58_0x5eb7('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a58_0x5eb7('0x3')));const model_base_1=__importDefault(require('../../infrastructure/model-base'));class DevicesModel extends model_base_1[a58_0x5eb7('0x4')]{constructor(_0x58bf6e,_0x241f41,_0xb65d96){super(_0xb65d96);const _0x2764f4=function(_0x58bf6e){const _0x3b8e83={'device_type_id':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x5')],'references':{'model':_0xb65d96[a58_0x5eb7('0x6')],'key':'id'}},'brand_id':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x5')],'references':{'model':_0xb65d96[a58_0x5eb7('0x7')],'key':'id'}},'name':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x8')]},'internal_ip':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x8')]},'external_ip':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x8')]},'network_info':{'type':sequelize_1[a58_0x5eb7('0x4')]['STRING']},'firmware_info':{'type':sequelize_1[a58_0x5eb7('0x4')][a58_0x5eb7('0x8')]}};const _0x2764f4=this['getEntity'](_0x58bf6e,_0x241f41,_0x3b8e83);return _0x2764f4;}['bind'](this);const _0x4a5ba3=_0x58bf6e[a58_0x5eb7('0x9')](_0x241f41,_0x2764f4);_0x4a5ba3['sync']()[a58_0x5eb7('0xa')](()=>{_0x4a5ba3[a58_0x5eb7('0xb')]()[a58_0x5eb7('0xa')](_0x5adbc6=>{if(_0x5adbc6==0x0){}});});return _0x4a5ba3;}}exports['default']=DevicesModel;