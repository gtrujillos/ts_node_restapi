var a131_0x2b53=['__esModule','sequelize','../../infrastructure/model-base','default','INTEGER','companiesModel','routesModel','vehiclesModel','DATE','import','defineProperty'];(function(_0x3796bc,_0xe80437){var _0x1ff1de=function(_0x85cadd){while(--_0x85cadd){_0x3796bc['push'](_0x3796bc['shift']());}};_0x1ff1de(++_0xe80437);}(a131_0x2b53,0x128));var a131_0x1423=function(_0x302e3c,_0x46691b){_0x302e3c=_0x302e3c-0x0;var _0x158284=a131_0x2b53[_0x302e3c];return _0x158284;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x400f55){return _0x400f55&&_0x400f55['__esModule']?_0x400f55:{'default':_0x400f55};};Object[a131_0x1423('0x0')](exports,a131_0x1423('0x1'),{'value':!![]});const sequelize_1=__importDefault(require(a131_0x1423('0x2')));const model_base_1=__importDefault(require(a131_0x1423('0x3')));class RouteSchedulesModel extends model_base_1[a131_0x1423('0x4')]{constructor(_0x4f0029,_0x21202d,_0xd08ebb){super(_0xd08ebb);const _0x5c3765=function(_0x4f0029,_0xf28464){const _0x1fef17={'company_id':{'type':sequelize_1[a131_0x1423('0x4')][a131_0x1423('0x5')],'references':{'model':_0xd08ebb[a131_0x1423('0x6')],'key':'id'}},'user_id':{'type':_0xf28464[a131_0x1423('0x5')],'references':{'model':_0xd08ebb['usersModel'],'key':'id'}},'route_id':{'type':_0xf28464['INTEGER'],'references':{'model':_0xd08ebb[a131_0x1423('0x7')],'key':'id'}},'vehicle_id':{'type':_0xf28464[a131_0x1423('0x5')],'references':{'model':_0xd08ebb[a131_0x1423('0x8')],'key':'id'}},'start_date':{'type':_0xf28464['DATE']},'end_date':{'type':_0xf28464[a131_0x1423('0x9')]}};const _0x5c3765=this['getEntity'](_0x4f0029,_0x21202d,_0x1fef17);return _0x5c3765;}['bind'](this);const _0x31d002=_0x4f0029[a131_0x1423('0xa')](_0x21202d,_0x5c3765);return _0x31d002;}}exports[a131_0x1423('0x4')]=RouteSchedulesModel;