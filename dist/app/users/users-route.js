var a178_0x2c3f=['/profile','getUserProfile','put','updateUserProfile','/profile_image','updateUserProfileImage','/profile_image/:id','getUserProfileImage','__importDefault','__esModule','express','default','Router','/featured','featured','get','/count_featured','countFeatured','/relationships','relationships','/count_relationships','/activities','activities'];(function(_0x427822,_0x40964c){var _0x33625a=function(_0x57cf17){while(--_0x57cf17){_0x427822['push'](_0x427822['shift']());}};_0x33625a(++_0x40964c);}(a178_0x2c3f,0x133));var a178_0x5606=function(_0x392cb3,_0x48a7e9){_0x392cb3=_0x392cb3-0x0;var _0xa6d6cb=a178_0x2c3f[_0x392cb3];return _0xa6d6cb;};'use strict';var __importDefault=this&&this[a178_0x5606('0x0')]||function(_0x23575a){return _0x23575a&&_0x23575a[a178_0x5606('0x1')]?_0x23575a:{'default':_0x23575a};};Object['defineProperty'](exports,a178_0x5606('0x1'),{'value':!![]});const router_utils_1=__importDefault(require('../../infrastructure/router-utils'));const express_1=__importDefault(require(a178_0x5606('0x2')));const router=express_1[a178_0x5606('0x3')][a178_0x5606('0x4')]();class UsersRoute{constructor(_0x1d74c1){router['get'](a178_0x5606('0x5'),_0x1d74c1[a178_0x5606('0x6')]);router[a178_0x5606('0x7')](a178_0x5606('0x8'),_0x1d74c1[a178_0x5606('0x9')]);router[a178_0x5606('0x7')](a178_0x5606('0xa'),_0x1d74c1[a178_0x5606('0xb')]);router['get'](a178_0x5606('0xc'),_0x1d74c1['countRelationships']);router['get'](a178_0x5606('0xd'),_0x1d74c1[a178_0x5606('0xe')]);router[a178_0x5606('0x7')](a178_0x5606('0xf'),_0x1d74c1[a178_0x5606('0x10')]);router[a178_0x5606('0x11')]('/profile',_0x1d74c1[a178_0x5606('0x12')]);router['post'](a178_0x5606('0x13'),_0x1d74c1[a178_0x5606('0x14')]);router['get'](a178_0x5606('0x15'),_0x1d74c1[a178_0x5606('0x16')]);const _0x1fb7e5=new router_utils_1[(a178_0x5606('0x3'))](_0x1d74c1,router,null);return router;}}exports['default']=UsersRoute;