var a51_0x1e2e=['bind','substr','hex2Float','body','__importDefault','__esModule','defineProperty','../../infrastructure/controller-utils','../../infrastructure/number-utils','default','reportAlarm'];(function(_0x9feacc,_0xa94a66){var _0x448e68=function(_0x326ce0){while(--_0x326ce0){_0x9feacc['push'](_0x9feacc['shift']());}};_0x448e68(++_0xa94a66);}(a51_0x1e2e,0x1dd));var a51_0x2251=function(_0x6a72fd,_0x2b6b4a){_0x6a72fd=_0x6a72fd-0x0;var _0x31b1d0=a51_0x1e2e[_0x6a72fd];return _0x31b1d0;};'use strict';var __importDefault=this&&this[a51_0x2251('0x0')]||function(_0x45872d){return _0x45872d&&_0x45872d[a51_0x2251('0x1')]?_0x45872d:{'default':_0x45872d};};Object[a51_0x2251('0x2')](exports,a51_0x2251('0x1'),{'value':!![]});const controller_utils_1=__importDefault(require(a51_0x2251('0x3')));const number_utils_1=__importDefault(require(a51_0x2251('0x4')));const responseUtils=require('../../infrastructure/response-utils');class PlayerConnectionsController extends controller_utils_1[a51_0x2251('0x5')]{constructor(_0x36a551){super(_0x36a551,null);this[a51_0x2251('0x6')]=this['reportAlarm'][a51_0x2251('0x7')](this);}[a51_0x2251('0x6')](_0x26844f,_0x49c7ee,_0x3c7eb8){const _0x303ac3=_0x26844f['body']['data'];const _0x190028=_0x303ac3[a51_0x2251('0x8')](0x0,0x2);const _0x23d101=_0x303ac3[a51_0x2251('0x8')](0x2,0x2);const _0x46d1f=number_utils_1[a51_0x2251('0x5')]['hex2Float'](_0x303ac3['substr'](0x4,0x8),0x10);const _0x236a22=number_utils_1['default'][a51_0x2251('0x9')](_0x303ac3[a51_0x2251('0x8')](0xc,0x8),0x10);const _0x3a3ee1=_0x303ac3[a51_0x2251('0x8')](0x14,0x2);const _0x42ec70=_0x303ac3[a51_0x2251('0x8')](0x16,0x2);_0x26844f[a51_0x2251('0xa')]={'reportType':_0x190028,'gpsId':_0x23d101,'lat':_0x46d1f,'lon':_0x236a22,'speedType':_0x3a3ee1,'speed':_0x42ec70,'reported_at':new Date(),'status':0x0};return this['save'](_0x26844f,_0x49c7ee,_0x3c7eb8);}}exports[a51_0x2251('0x5')]=PlayerConnectionsController;