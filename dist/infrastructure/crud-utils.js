var a99_0x66b5=['create','dataValues','status','findOneAndUpdate','findByPk','update','bind','updateOrCreate','findOne','findOrCreate','remove','destroy','__importDefault','__esModule','defineProperty','./sequelize-utils','find','user','length','model','findAll','created_by_user_id','updated_by_user_id','deleted_by_user_id','created_at','deleted_at','then','i18n','default','toJSONLocalizedOnly','headers','lang','toJSON','json','send','stack','findById','authentication\x20failed','params','catch','uuid','save','body'];(function(_0x2d4e56,_0x285474){var _0x471801=function(_0x5d330e){while(--_0x5d330e){_0x2d4e56['push'](_0x2d4e56['shift']());}};_0x471801(++_0x285474);}(a99_0x66b5,0xb8));var a99_0xc5b4=function(_0x5f2dd9,_0x160538){_0x5f2dd9=_0x5f2dd9-0x0;var _0x14fd87=a99_0x66b5[_0x5f2dd9];return _0x14fd87;};'use strict';var __importDefault=this&&this[a99_0xc5b4('0x0')]||function(_0x3309cf){return _0x3309cf&&_0x3309cf[a99_0xc5b4('0x1')]?_0x3309cf:{'default':_0x3309cf};};Object[a99_0xc5b4('0x2')](exports,'__esModule',{'value':!![]});const sequelize_utils_1=__importDefault(require(a99_0xc5b4('0x3')));class CrudUtils{constructor(_0x46c168,_0x25646a){this['model']=_0x46c168;this['i18n']=_0x25646a;}[a99_0xc5b4('0x4')](_0x1c1767,_0x13648a,_0xa150a3,_0xa5dce0=![],_0x484bba=[]){if(!_0x1c1767[a99_0xc5b4('0x5')]||_0x1c1767[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}return this[a99_0xc5b4('0x7')][a99_0xc5b4('0x8')]({'attributes':{'exclude':_0xa5dce0?[]:['id',a99_0xc5b4('0x9'),a99_0xc5b4('0xa'),a99_0xc5b4('0xb'),a99_0xc5b4('0xc'),'updated_at',a99_0xc5b4('0xd')]},'where':_0x1c1767['params'],'include':_0x484bba})[a99_0xc5b4('0xe')](_0x2b35eb=>{const _0x385114=this[a99_0xc5b4('0xf')]?sequelize_utils_1[a99_0xc5b4('0x10')][a99_0xc5b4('0x11')](_0x2b35eb,_0x1c1767[a99_0xc5b4('0x12')][a99_0xc5b4('0x13')]):sequelize_utils_1[a99_0xc5b4('0x10')][a99_0xc5b4('0x14')](_0x2b35eb);if(_0x13648a){return _0x13648a[a99_0xc5b4('0x15')]({'success':!![],'data':_0x385114});}else{return _0x385114;}})['catch'](_0x3163cf=>{if(_0x13648a){return _0x13648a['status'](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x3163cf[a99_0xc5b4('0x17')]});}else{return _0x3163cf[a99_0xc5b4('0x17')];}});}[a99_0xc5b4('0x18')](_0x5b4182,_0x22abb5,_0x472281){if(!_0x5b4182['user']||_0x5b4182['user'][a99_0xc5b4('0x6')]==0x0){return _0x22abb5['status'](0x191)[a99_0xc5b4('0x16')]({'success':![],'data':a99_0xc5b4('0x19')});}this[a99_0xc5b4('0x7')][a99_0xc5b4('0x18')](_0x5b4182[a99_0xc5b4('0x1a')]['id'])[a99_0xc5b4('0xe')](_0x39c91b=>{const _0x79f76f=this[a99_0xc5b4('0xf')]?sequelize_utils_1['default']['toJSONLocalizedOnly'](_0x39c91b,_0x5b4182[a99_0xc5b4('0x12')]['lang']):_0x39c91b;return _0x22abb5[a99_0xc5b4('0x15')]({'success':!![],'data':_0x79f76f});})[a99_0xc5b4('0x1b')](_0x53660d=>{return _0x22abb5['status'](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x53660d[a99_0xc5b4('0x17')]});});}['findByUUId'](_0x27a357,_0x37aa01,_0x51f5da){if(!_0x27a357[a99_0xc5b4('0x5')]||_0x27a357[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}return this[a99_0xc5b4('0x7')]['findAll']({'where':{'uuid':_0x27a357[a99_0xc5b4('0x1a')][a99_0xc5b4('0x1c')]}})[a99_0xc5b4('0xe')](_0x54c93d=>{const _0x18a818=this[a99_0xc5b4('0xf')]?sequelize_utils_1[a99_0xc5b4('0x10')][a99_0xc5b4('0x11')](_0x54c93d,_0x27a357[a99_0xc5b4('0x12')][a99_0xc5b4('0x13')]):sequelize_utils_1[a99_0xc5b4('0x10')][a99_0xc5b4('0x14')](_0x54c93d);return _0x18a818;})[a99_0xc5b4('0x1b')](_0x5c3d6a=>{return _0x5c3d6a['stack'];});}[a99_0xc5b4('0x1d')](_0x1cdae5,_0x6f2c9f,_0x241d66){if(!_0x1cdae5[a99_0xc5b4('0x5')]||_0x1cdae5[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}if(_0x1cdae5['user']&&_0x1cdae5['user'][a99_0xc5b4('0x6')]>0x0){_0x1cdae5[a99_0xc5b4('0x1e')]['created_by_user_id']=_0x1cdae5['user'][0x0]['id'];}return this['model'][a99_0xc5b4('0x1f')](_0x1cdae5[a99_0xc5b4('0x1e')],this[a99_0xc5b4('0xf')]?{'language_id':_0x1cdae5[a99_0xc5b4('0x12')][a99_0xc5b4('0x13')]}:{})[a99_0xc5b4('0xe')](_0x15d28f=>{const _0x1863c3=this[a99_0xc5b4('0xf')]?sequelize_utils_1[a99_0xc5b4('0x10')]['toJSONLocalizedOnly'](_0x15d28f,_0x1cdae5['headers'][a99_0xc5b4('0x13')]):_0x15d28f;delete _0x1863c3['dataValues']['id'];delete _0x1863c3['dataValues'][a99_0xc5b4('0x9')];delete _0x1863c3['dataValues']['updated_by_user_id'];delete _0x1863c3[a99_0xc5b4('0x20')][a99_0xc5b4('0xb')];delete _0x1863c3[a99_0xc5b4('0x20')][a99_0xc5b4('0xc')];delete _0x1863c3['dataValues']['updated_at'];delete _0x1863c3[a99_0xc5b4('0x20')][a99_0xc5b4('0xd')];if(_0x6f2c9f){return _0x6f2c9f['json']({'success':!![],'data':_0x1863c3});}else{return _0x1863c3;}})[a99_0xc5b4('0x1b')](_0x5021dc=>{if(_0x6f2c9f){return _0x6f2c9f[a99_0xc5b4('0x21')](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x5021dc[a99_0xc5b4('0x17')]});}else{return _0x5021dc['stack'];}});}[a99_0xc5b4('0x22')](_0x169cab,_0x502197,_0xaa52e9){if(!_0x169cab[a99_0xc5b4('0x5')]||_0x169cab[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}if(_0x169cab[a99_0xc5b4('0x5')]&&_0x169cab['user'][a99_0xc5b4('0x6')]>0x0){}this[a99_0xc5b4('0x7')][a99_0xc5b4('0x23')](_0x169cab[a99_0xc5b4('0x1e')]['id'])['then'](_0x3aaba2=>{if(_0x3aaba2==null)return _0x502197[a99_0xc5b4('0x15')]({'success':!![],'data':_0x3aaba2});_0x3aaba2[a99_0xc5b4('0x24')](_0x169cab[a99_0xc5b4('0x1e')],{'language_id':_0x169cab['headers'][a99_0xc5b4('0x13')]})['then'](function(_0x139947){const _0x583621=this[a99_0xc5b4('0xf')]?sequelize_utils_1[a99_0xc5b4('0x10')][a99_0xc5b4('0x11')](_0x3aaba2,_0x169cab['headers'][a99_0xc5b4('0x13')]):_0x3aaba2;return _0x502197[a99_0xc5b4('0x15')]({'success':!![],'data':_0x583621});}[a99_0xc5b4('0x25')](this))[a99_0xc5b4('0x1b')](_0x3ccaf0=>{return _0x502197[a99_0xc5b4('0x21')](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x3ccaf0[a99_0xc5b4('0x17')]});});})[a99_0xc5b4('0x1b')](_0x445e16=>{return _0x502197['status'](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x445e16[a99_0xc5b4('0x17')]});});}[a99_0xc5b4('0x26')](_0x4f27c2,_0x3f9200,_0x5f02b2,_0x4fc815=![]){if(!_0x4f27c2['user']||_0x4f27c2[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}if(_0x4f27c2[a99_0xc5b4('0x5')]&&_0x4f27c2[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]>0x0){}return this['model'][a99_0xc5b4('0x27')]({'where':_0x4f27c2['params']})[a99_0xc5b4('0xe')](function(_0x234a55){if(_0x234a55){return _0x234a55[a99_0xc5b4('0x24')](_0x4f27c2[a99_0xc5b4('0x1e')])[a99_0xc5b4('0xe')](function(_0x3af2de){const _0x788a8c=_0x3af2de[a99_0xc5b4('0x20')];if(_0x4fc815){delete _0x788a8c['id'];}if(_0x3f9200){return _0x3f9200[a99_0xc5b4('0x15')]({'success':!![],'data':_0x788a8c});}else{return _0x788a8c;}}[a99_0xc5b4('0x25')](this));}else{return this[a99_0xc5b4('0x7')][a99_0xc5b4('0x1f')](_0x4f27c2[a99_0xc5b4('0x1e')])[a99_0xc5b4('0xe')](function(_0xd7877){if(_0x3f9200){return _0x3f9200['json']({'success':!![],'data':_0xd7877[a99_0xc5b4('0x14')]()});}else{return _0xd7877;}});}}[a99_0xc5b4('0x25')](this))['catch'](_0x3a01b6=>{if(_0x3f9200){return _0x3f9200[a99_0xc5b4('0x21')](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x3a01b6[a99_0xc5b4('0x17')]});}else{return _0x3a01b6[a99_0xc5b4('0x17')];}});}['findOrCreate'](_0x4b16b5,_0x239fd3,_0x67b7d3){if(!_0x4b16b5[a99_0xc5b4('0x5')]||_0x4b16b5[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){}if(_0x4b16b5[a99_0xc5b4('0x5')]&&_0x4b16b5[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]>0x0){}return this[a99_0xc5b4('0x7')][a99_0xc5b4('0x28')]({'where':{'uuid':_0x4b16b5[a99_0xc5b4('0x1e')][a99_0xc5b4('0x1c')]},'defaults':_0x4b16b5[a99_0xc5b4('0x1e')]})['then']((_0x596069,_0x52a6f7)=>{if(_0x52a6f7){}else{}return _0x239fd3[a99_0xc5b4('0x15')]({'success':!![],'data':_0x596069});})['catch'](_0x14aacc=>{return _0x239fd3[a99_0xc5b4('0x21')](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x14aacc['stack']});});}[a99_0xc5b4('0x29')](_0x23d561,_0x389a5e,_0x252250){if(!_0x23d561[a99_0xc5b4('0x5')]||_0x23d561[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]==0x0){return _0x389a5e[a99_0xc5b4('0x21')](0x191)[a99_0xc5b4('0x16')]({'success':![],'data':a99_0xc5b4('0x19')});}if(_0x23d561[a99_0xc5b4('0x5')]&&_0x23d561[a99_0xc5b4('0x5')][a99_0xc5b4('0x6')]>0x0){_0x23d561[a99_0xc5b4('0x1e')][a99_0xc5b4('0x9')]=_0x23d561[a99_0xc5b4('0x5')][0x0]['id'];}this[a99_0xc5b4('0x7')][a99_0xc5b4('0x18')](_0x23d561[a99_0xc5b4('0x1a')]['id'])[a99_0xc5b4('0xe')](_0x21d0bc=>{if(_0x21d0bc==null)return _0x389a5e[a99_0xc5b4('0x15')]({'success':!![],'data':_0x21d0bc});_0x21d0bc[a99_0xc5b4('0x2a')]()['then'](function(_0x39796c){const _0x9f16c0=this[a99_0xc5b4('0xf')]?sequelize_utils_1[a99_0xc5b4('0x10')]['toJSONLocalizedOnly'](_0x21d0bc,_0x23d561[a99_0xc5b4('0x12')][a99_0xc5b4('0x13')]):_0x21d0bc;return _0x389a5e[a99_0xc5b4('0x15')]({'success':!![],'data':_0x9f16c0});})[a99_0xc5b4('0x1b')](_0xb2e7a3=>{return _0x389a5e['status'](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0xb2e7a3[a99_0xc5b4('0x17')]});});})[a99_0xc5b4('0x1b')](_0x1f48fe=>{return _0x389a5e['status'](0x1f4)[a99_0xc5b4('0x16')]({'success':![],'data':_0x1f48fe[a99_0xc5b4('0x17')]});});}}exports[a99_0xc5b4('0x10')]=CrudUtils;