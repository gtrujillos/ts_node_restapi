var a48_0x1760=['__importDefault','__esModule','defineProperty','sequelize','../../infrastructure/model-base','default','INTEGER','provincesModel','getEntity','bind','then','create','CitiesModel\x20populated'];(function(_0xf09046,_0x4a7be9){var _0x4d0c68=function(_0x26a705){while(--_0x26a705){_0xf09046['push'](_0xf09046['shift']());}};_0x4d0c68(++_0x4a7be9);}(a48_0x1760,0x1a0));var a48_0x22e1=function(_0x19aa84,_0x428b6d){_0x19aa84=_0x19aa84-0x0;var _0x53dfa8=a48_0x1760[_0x19aa84];return _0x53dfa8;};'use strict';var __importDefault=this&&this[a48_0x22e1('0x0')]||function(_0x177f9c){return _0x177f9c&&_0x177f9c[a48_0x22e1('0x1')]?_0x177f9c:{'default':_0x177f9c};};Object[a48_0x22e1('0x2')](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a48_0x22e1('0x3')));const model_base_1=__importDefault(require(a48_0x22e1('0x4')));class CitiesModel extends model_base_1[a48_0x22e1('0x5')]{constructor(_0xd00e44,_0x68bb12,_0x54ef53){super(_0x54ef53);const _0x3402ce=function(_0xd00e44){const _0x2245da={'province_id':{'type':sequelize_1['default'][a48_0x22e1('0x6')],'references':{'model':_0x54ef53[a48_0x22e1('0x7')],'key':'id'}},'name':{'type':sequelize_1['default']['STRING']}};const _0x3402ce=this[a48_0x22e1('0x8')](_0xd00e44,_0x68bb12,_0x2245da);return _0x3402ce;}[a48_0x22e1('0x9')](this);const _0x3b1599=_0xd00e44['import'](_0x68bb12,_0x3402ce);_0x3b1599['sync']()[a48_0x22e1('0xa')](()=>{_0x3b1599['count']()['then'](_0x58bcf7=>{if(_0x58bcf7==0x0){_0x3b1599[a48_0x22e1('0xb')]({'country_id':0x1,'name':'Medellín'});console['log'](a48_0x22e1('0xc'));}});});return _0x3b1599;}}exports[a48_0x22e1('0x5')]=CitiesModel;