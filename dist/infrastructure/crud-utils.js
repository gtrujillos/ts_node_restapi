var a98_0x5c80=['updateOrCreate','findOne','findOrCreate','remove','destroy','__esModule','defineProperty','i18n','log','find','user','length','model','findAll','deleted_by_user_id','created_at','updated_at','then','default','toJSONLocalizedOnly','toJSON','json','catch','status','stack','findById','authentication\x20failed','params','findByUUId','uuid','headers','save','body','created_by_user_id','create','lang','dataValues','send','findOneAndUpdate','findByPk','update','bind'];(function(_0x58f1ca,_0x58e123){var _0x2de37b=function(_0x9268bd){while(--_0x9268bd){_0x58f1ca['push'](_0x58f1ca['shift']());}};_0x2de37b(++_0x58e123);}(a98_0x5c80,0x83));var a98_0x3949=function(_0x38a485,_0x292a90){_0x38a485=_0x38a485-0x0;var _0x3258da=a98_0x5c80[_0x38a485];return _0x3258da;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x18b724){return _0x18b724&&_0x18b724[a98_0x3949('0x0')]?_0x18b724:{'default':_0x18b724};};Object[a98_0x3949('0x1')](exports,a98_0x3949('0x0'),{'value':!![]});const sequelize_utils_1=__importDefault(require('./sequelize-utils'));class CrudUtils{constructor(_0x26097b,_0x5aa2d6){this['model']=_0x26097b;this[a98_0x3949('0x2')]=_0x5aa2d6;}['find'](_0xe2accb,_0x2c519a,_0x357d0b,_0x494acf=![]){console[a98_0x3949('0x3')](a98_0x3949('0x4'));if(!_0xe2accb[a98_0x3949('0x5')]||_0xe2accb[a98_0x3949('0x5')][a98_0x3949('0x6')]==0x0){}return this[a98_0x3949('0x7')][a98_0x3949('0x8')]({'attributes':{'exclude':_0x494acf?[]:['id','created_by_user_id','updated_by_user_id',a98_0x3949('0x9'),a98_0x3949('0xa'),a98_0x3949('0xb'),'deleted_at']},'where':{}})[a98_0x3949('0xc')](_0xec391a=>{console[a98_0x3949('0x3')](_0xec391a);const _0xdde35b=this[a98_0x3949('0x2')]?sequelize_utils_1[a98_0x3949('0xd')][a98_0x3949('0xe')](_0xec391a,_0xe2accb['headers']['lang']):sequelize_utils_1[a98_0x3949('0xd')][a98_0x3949('0xf')](_0xec391a);if(_0x2c519a){return _0x2c519a[a98_0x3949('0x10')]({'success':!![],'data':_0xdde35b});}else{return _0xdde35b;}})[a98_0x3949('0x11')](_0xb4fd5f=>{if(_0x2c519a){return _0x2c519a[a98_0x3949('0x12')](0x1f4)['send']({'success':![],'data':_0xb4fd5f[a98_0x3949('0x13')]});}else{return _0xb4fd5f[a98_0x3949('0x13')];}});}[a98_0x3949('0x14')](_0x2caaf8,_0x8c627f,_0x2fbe17){if(!_0x2caaf8[a98_0x3949('0x5')]||_0x2caaf8[a98_0x3949('0x5')][a98_0x3949('0x6')]==0x0){return _0x8c627f['status'](0x191)['send']({'success':![],'data':a98_0x3949('0x15')});}this[a98_0x3949('0x7')][a98_0x3949('0x14')](_0x2caaf8[a98_0x3949('0x16')]['id'])[a98_0x3949('0xc')](_0x4fdccf=>{const _0x2bb9c6=this[a98_0x3949('0x2')]?sequelize_utils_1['default'][a98_0x3949('0xe')](_0x4fdccf,_0x2caaf8['headers']['lang']):_0x4fdccf;return _0x8c627f[a98_0x3949('0x10')]({'success':!![],'data':_0x2bb9c6});})[a98_0x3949('0x11')](_0x24fe73=>{return _0x8c627f[a98_0x3949('0x12')](0x1f4)['send']({'success':![],'data':_0x24fe73[a98_0x3949('0x13')]});});}[a98_0x3949('0x17')](_0x33cddd,_0x141318,_0x4b1e64){if(!_0x33cddd[a98_0x3949('0x5')]||_0x33cddd[a98_0x3949('0x5')]['length']==0x0){}return this[a98_0x3949('0x7')][a98_0x3949('0x8')]({'where':{'uuid':_0x33cddd[a98_0x3949('0x16')][a98_0x3949('0x18')]}})[a98_0x3949('0xc')](_0x31ce7d=>{const _0x419b57=this[a98_0x3949('0x2')]?sequelize_utils_1['default'][a98_0x3949('0xe')](_0x31ce7d,_0x33cddd[a98_0x3949('0x19')]['lang']):sequelize_utils_1[a98_0x3949('0xd')]['toJSON'](_0x31ce7d);return _0x419b57;})[a98_0x3949('0x11')](_0x9499e0=>{return _0x9499e0[a98_0x3949('0x13')];});}[a98_0x3949('0x1a')](_0x591e0f,_0x1eacd9,_0x57a031){if(!_0x591e0f['user']||_0x591e0f[a98_0x3949('0x5')]['length']==0x0){}if(_0x591e0f[a98_0x3949('0x5')]&&_0x591e0f[a98_0x3949('0x5')][a98_0x3949('0x6')]>0x0){_0x591e0f[a98_0x3949('0x1b')][a98_0x3949('0x1c')]=_0x591e0f[a98_0x3949('0x5')][0x0]['id'];}return this[a98_0x3949('0x7')][a98_0x3949('0x1d')](_0x591e0f[a98_0x3949('0x1b')],this[a98_0x3949('0x2')]?{'language_id':_0x591e0f[a98_0x3949('0x19')]['lang']}:{})['then'](_0x54391d=>{const _0x79cc79=this['i18n']?sequelize_utils_1[a98_0x3949('0xd')][a98_0x3949('0xe')](_0x54391d,_0x591e0f['headers'][a98_0x3949('0x1e')]):_0x54391d;delete _0x79cc79[a98_0x3949('0x1f')]['id'];delete _0x79cc79['dataValues'][a98_0x3949('0x1c')];delete _0x79cc79[a98_0x3949('0x1f')]['updated_by_user_id'];delete _0x79cc79[a98_0x3949('0x1f')]['deleted_by_user_id'];delete _0x79cc79[a98_0x3949('0x1f')]['created_at'];delete _0x79cc79[a98_0x3949('0x1f')][a98_0x3949('0xb')];delete _0x79cc79[a98_0x3949('0x1f')]['deleted_at'];if(_0x1eacd9){return _0x1eacd9[a98_0x3949('0x10')]({'success':!![],'data':_0x79cc79});}else{return _0x79cc79;}})[a98_0x3949('0x11')](_0x55f61c=>{if(_0x1eacd9){return _0x1eacd9[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x55f61c[a98_0x3949('0x13')]});}else{return _0x55f61c['stack'];}});}[a98_0x3949('0x21')](_0x2d670,_0x58cfec,_0x332523){if(!_0x2d670[a98_0x3949('0x5')]||_0x2d670['user'][a98_0x3949('0x6')]==0x0){}if(_0x2d670['user']&&_0x2d670[a98_0x3949('0x5')]['length']>0x0){_0x2d670[a98_0x3949('0x1b')][a98_0x3949('0x1c')]=_0x2d670[a98_0x3949('0x5')][0x0]['id'];}this['model'][a98_0x3949('0x22')](_0x2d670['body']['id'])[a98_0x3949('0xc')](_0x4f93f2=>{if(_0x4f93f2==null)return _0x58cfec[a98_0x3949('0x10')]({'success':!![],'data':_0x4f93f2});_0x4f93f2[a98_0x3949('0x23')](_0x2d670[a98_0x3949('0x1b')],{'language_id':_0x2d670[a98_0x3949('0x19')][a98_0x3949('0x1e')]})[a98_0x3949('0xc')](function(_0x3d2b25){const _0x5e0643=this[a98_0x3949('0x2')]?sequelize_utils_1[a98_0x3949('0xd')][a98_0x3949('0xe')](_0x4f93f2,_0x2d670[a98_0x3949('0x19')][a98_0x3949('0x1e')]):_0x4f93f2;return _0x58cfec[a98_0x3949('0x10')]({'success':!![],'data':_0x5e0643});}[a98_0x3949('0x24')](this))[a98_0x3949('0x11')](_0x334f92=>{return _0x58cfec[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x334f92[a98_0x3949('0x13')]});});})[a98_0x3949('0x11')](_0x3128ab=>{return _0x58cfec[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x3128ab[a98_0x3949('0x13')]});});}[a98_0x3949('0x25')](_0x32ff07,_0x43d736,_0x5b57fe,_0x2ec206=![]){if(!_0x32ff07[a98_0x3949('0x5')]||_0x32ff07[a98_0x3949('0x5')][a98_0x3949('0x6')]==0x0){}if(_0x32ff07[a98_0x3949('0x5')]&&_0x32ff07[a98_0x3949('0x5')]['length']>0x0){_0x32ff07[a98_0x3949('0x1b')][a98_0x3949('0x1c')]=_0x32ff07[a98_0x3949('0x5')][0x0]['id'];}console[a98_0x3949('0x3')](_0x32ff07[a98_0x3949('0x16')]);return this['model'][a98_0x3949('0x26')]({'where':_0x32ff07[a98_0x3949('0x16')]})[a98_0x3949('0xc')](function(_0x501e8c){if(_0x501e8c){return _0x501e8c[a98_0x3949('0x23')](_0x32ff07['body'])['then'](function(_0x4c4ff7){const _0x3380bf=_0x4c4ff7['dataValues'];if(_0x2ec206){delete _0x3380bf['id'];}if(_0x43d736){return _0x43d736[a98_0x3949('0x10')]({'success':!![],'data':_0x3380bf});}else{return _0x3380bf;}}[a98_0x3949('0x24')](this));}else{return this[a98_0x3949('0x7')][a98_0x3949('0x1d')](_0x32ff07[a98_0x3949('0x1b')])[a98_0x3949('0xc')](function(_0xd67bd4){if(_0x43d736){return _0x43d736['json']({'success':!![],'data':_0xd67bd4[a98_0x3949('0xf')]()});}else{return _0xd67bd4;}});}}[a98_0x3949('0x24')](this))[a98_0x3949('0x11')](_0x3994a5=>{if(_0x43d736){return _0x43d736[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x3994a5[a98_0x3949('0x13')]});}else{return _0x3994a5[a98_0x3949('0x13')];}});}[a98_0x3949('0x27')](_0x452b8f,_0x5564d3,_0x1f089c){if(!_0x452b8f[a98_0x3949('0x5')]||_0x452b8f[a98_0x3949('0x5')]['length']==0x0){}if(_0x452b8f[a98_0x3949('0x5')]&&_0x452b8f['user'][a98_0x3949('0x6')]>0x0){_0x452b8f['body'][a98_0x3949('0x1c')]=_0x452b8f[a98_0x3949('0x5')][0x0]['id'];}return this[a98_0x3949('0x7')][a98_0x3949('0x27')]({'where':{'uuid':_0x452b8f[a98_0x3949('0x1b')][a98_0x3949('0x18')]},'defaults':_0x452b8f[a98_0x3949('0x1b')]})['then']((_0x556032,_0x18bbf0)=>{if(_0x18bbf0){}else{}return _0x5564d3[a98_0x3949('0x10')]({'success':!![],'data':_0x556032});})[a98_0x3949('0x11')](_0x1b095f=>{return _0x5564d3[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x1b095f[a98_0x3949('0x13')]});});}[a98_0x3949('0x28')](_0x109bdf,_0xd7eb62,_0xdc64fe){if(!_0x109bdf[a98_0x3949('0x5')]||_0x109bdf[a98_0x3949('0x5')][a98_0x3949('0x6')]==0x0){return _0xd7eb62['status'](0x191)[a98_0x3949('0x20')]({'success':![],'data':a98_0x3949('0x15')});}if(_0x109bdf[a98_0x3949('0x5')]&&_0x109bdf['user'][a98_0x3949('0x6')]>0x0){_0x109bdf['body'][a98_0x3949('0x1c')]=_0x109bdf[a98_0x3949('0x5')][0x0]['id'];}this[a98_0x3949('0x7')][a98_0x3949('0x14')](_0x109bdf[a98_0x3949('0x16')]['id'])[a98_0x3949('0xc')](_0x34ea02=>{if(_0x34ea02==null)return _0xd7eb62[a98_0x3949('0x10')]({'success':!![],'data':_0x34ea02});_0x34ea02[a98_0x3949('0x29')]()[a98_0x3949('0xc')](function(_0x13db9c){const _0x98988c=this[a98_0x3949('0x2')]?sequelize_utils_1[a98_0x3949('0xd')][a98_0x3949('0xe')](_0x34ea02,_0x109bdf[a98_0x3949('0x19')][a98_0x3949('0x1e')]):_0x34ea02;return _0xd7eb62['json']({'success':!![],'data':_0x98988c});})[a98_0x3949('0x11')](_0x2ab172=>{return _0xd7eb62['status'](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x2ab172[a98_0x3949('0x13')]});});})['catch'](_0x23b740=>{return _0xd7eb62[a98_0x3949('0x12')](0x1f4)[a98_0x3949('0x20')]({'success':![],'data':_0x23b740[a98_0x3949('0x13')]});});}}exports['default']=CrudUtils;