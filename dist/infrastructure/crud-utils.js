var a99_0x5c31=['remove','destroy','defineProperty','./sequelize-utils','count','user','length','params','then','json','catch','status','send','stack','find','query','offset','limit','model','findAll','created_by_user_id','updated_by_user_id','created_at','updated_at','deleted_at','i18n','default','toJSONLocalizedOnly','headers','lang','findById','authentication\x20failed','uuid','toJSON','save','body','create','dataValues','findOneAndUpdate','findByPk','update','bind','findOne','findOrCreate'];(function(_0x580ae6,_0x3fcdae){var _0x50a1a2=function(_0x2ce4ad){while(--_0x2ce4ad){_0x580ae6['push'](_0x580ae6['shift']());}};_0x50a1a2(++_0x3fcdae);}(a99_0x5c31,0x136));var a99_0x25a5=function(_0xf34179,_0x5b6b9b){_0xf34179=_0xf34179-0x0;var _0x554d0e=a99_0x5c31[_0xf34179];return _0x554d0e;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4c78df){return _0x4c78df&&_0x4c78df['__esModule']?_0x4c78df:{'default':_0x4c78df};};Object[a99_0x25a5('0x0')](exports,'__esModule',{'value':!![]});const sequelize_utils_1=__importDefault(require(a99_0x25a5('0x1')));class CrudUtils{constructor(_0x4bff22,_0x44c489){this['model']=_0x4bff22;this['i18n']=_0x44c489;}[a99_0x25a5('0x2')](_0x331015,_0x586e0c,_0x21b668){if(!_0x331015[a99_0x25a5('0x3')]||_0x331015[a99_0x25a5('0x3')][a99_0x25a5('0x4')]==0x0){}return this['model'][a99_0x25a5('0x2')]({'where':_0x331015[a99_0x25a5('0x5')]})[a99_0x25a5('0x6')](_0xeccb96=>{const _0x332af6=_0xeccb96;if(_0x586e0c){return _0x586e0c[a99_0x25a5('0x7')]({'success':!![],'data':{'total':_0xeccb96}});}else{return _0x332af6;}})[a99_0x25a5('0x8')](_0x445ba4=>{if(_0x586e0c){return _0x586e0c[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x445ba4['stack']});}else{return _0x445ba4[a99_0x25a5('0xb')];}});}[a99_0x25a5('0xc')](_0x2e2d02,_0x40e894,_0x24e4dd,_0x5333c9=![],_0x1f18f3=[]){const _0x509355=_0x2e2d02[a99_0x25a5('0xd')][a99_0x25a5('0xe')]?_0x2e2d02[a99_0x25a5('0xd')][a99_0x25a5('0xe')]:null;const _0x799065=_0x2e2d02['query'][a99_0x25a5('0xf')]?_0x2e2d02['query'][a99_0x25a5('0xf')]:null;if(!_0x2e2d02[a99_0x25a5('0x3')]||_0x2e2d02[a99_0x25a5('0x3')]['length']==0x0){}return this[a99_0x25a5('0x10')][a99_0x25a5('0x11')]({'attributes':{'exclude':_0x5333c9?[]:['id',a99_0x25a5('0x12'),a99_0x25a5('0x13'),'deleted_by_user_id',a99_0x25a5('0x14'),a99_0x25a5('0x15'),a99_0x25a5('0x16')]},'where':_0x2e2d02[a99_0x25a5('0x5')],'offset':_0x509355,'limit':_0x799065,'include':_0x1f18f3})['then'](_0x4085cb=>{const _0x4cbc6a=this[a99_0x25a5('0x17')]?sequelize_utils_1[a99_0x25a5('0x18')][a99_0x25a5('0x19')](_0x4085cb,_0x2e2d02[a99_0x25a5('0x1a')][a99_0x25a5('0x1b')]):sequelize_utils_1[a99_0x25a5('0x18')]['toJSON'](_0x4085cb);if(_0x40e894){return _0x40e894[a99_0x25a5('0x7')]({'success':!![],'data':_0x4cbc6a});}else{return _0x4cbc6a;}})[a99_0x25a5('0x8')](_0x29eca7=>{if(_0x40e894){return _0x40e894[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x29eca7[a99_0x25a5('0xb')]});}else{return _0x29eca7[a99_0x25a5('0xb')];}});}[a99_0x25a5('0x1c')](_0x2f93e6,_0x20bee0,_0x92e2d0){if(!_0x2f93e6['user']||_0x2f93e6[a99_0x25a5('0x3')]['length']==0x0){return _0x20bee0[a99_0x25a5('0x9')](0x191)[a99_0x25a5('0xa')]({'success':![],'data':a99_0x25a5('0x1d')});}this[a99_0x25a5('0x10')]['findById'](_0x2f93e6['params']['id'])[a99_0x25a5('0x6')](_0x8c6eab=>{const _0x41f182=this['i18n']?sequelize_utils_1[a99_0x25a5('0x18')][a99_0x25a5('0x19')](_0x8c6eab,_0x2f93e6['headers'][a99_0x25a5('0x1b')]):_0x8c6eab;return _0x20bee0['json']({'success':!![],'data':_0x41f182});})[a99_0x25a5('0x8')](_0x205071=>{return _0x20bee0['status'](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x205071['stack']});});}['findByUUId'](_0x549641,_0x323dfc,_0x2a9c16){if(!_0x549641[a99_0x25a5('0x3')]||_0x549641[a99_0x25a5('0x3')][a99_0x25a5('0x4')]==0x0){}return this[a99_0x25a5('0x10')]['findAll']({'where':{'uuid':_0x549641[a99_0x25a5('0x5')][a99_0x25a5('0x1e')]}})[a99_0x25a5('0x6')](_0x5867cd=>{const _0xb6cf4f=this[a99_0x25a5('0x17')]?sequelize_utils_1[a99_0x25a5('0x18')][a99_0x25a5('0x19')](_0x5867cd,_0x549641[a99_0x25a5('0x1a')]['lang']):sequelize_utils_1[a99_0x25a5('0x18')][a99_0x25a5('0x1f')](_0x5867cd);return _0xb6cf4f;})[a99_0x25a5('0x8')](_0x1cf345=>{return _0x1cf345[a99_0x25a5('0xb')];});}[a99_0x25a5('0x20')](_0x27025e,_0x4f24d9,_0xdbd471){if(!_0x27025e[a99_0x25a5('0x3')]||_0x27025e[a99_0x25a5('0x3')]['length']==0x0){}if(_0x27025e[a99_0x25a5('0x3')]&&_0x27025e[a99_0x25a5('0x3')][a99_0x25a5('0x4')]>0x0){_0x27025e[a99_0x25a5('0x21')]['created_by_user_id']=_0x27025e[a99_0x25a5('0x3')][0x0]['id'];}return this[a99_0x25a5('0x10')][a99_0x25a5('0x22')](_0x27025e['body'],this[a99_0x25a5('0x17')]?{'language_id':_0x27025e[a99_0x25a5('0x1a')][a99_0x25a5('0x1b')]}:{})['then'](_0x97fff3=>{const _0x1ff4ca=this[a99_0x25a5('0x17')]?sequelize_utils_1['default']['toJSONLocalizedOnly'](_0x97fff3,_0x27025e[a99_0x25a5('0x1a')]['lang']):_0x97fff3;delete _0x1ff4ca[a99_0x25a5('0x23')]['id'];delete _0x1ff4ca[a99_0x25a5('0x23')][a99_0x25a5('0x12')];delete _0x1ff4ca['dataValues'][a99_0x25a5('0x13')];delete _0x1ff4ca['dataValues']['deleted_by_user_id'];delete _0x1ff4ca[a99_0x25a5('0x23')][a99_0x25a5('0x14')];delete _0x1ff4ca[a99_0x25a5('0x23')][a99_0x25a5('0x15')];delete _0x1ff4ca[a99_0x25a5('0x23')][a99_0x25a5('0x16')];if(_0x4f24d9){return _0x4f24d9[a99_0x25a5('0x7')]({'success':!![],'data':_0x1ff4ca});}else{return _0x1ff4ca;}})[a99_0x25a5('0x8')](_0x195df0=>{if(_0x4f24d9){return _0x4f24d9['status'](0x1f4)['send']({'success':![],'data':_0x195df0[a99_0x25a5('0xb')]});}else{return _0x195df0[a99_0x25a5('0xb')];}});}[a99_0x25a5('0x24')](_0x19480f,_0x16d9a5,_0x5be070){if(!_0x19480f[a99_0x25a5('0x3')]||_0x19480f[a99_0x25a5('0x3')][a99_0x25a5('0x4')]==0x0){}if(_0x19480f['user']&&_0x19480f['user'][a99_0x25a5('0x4')]>0x0){}this[a99_0x25a5('0x10')][a99_0x25a5('0x25')](_0x19480f['body']['id'])['then'](_0x4f8f4f=>{if(_0x4f8f4f==null)return _0x16d9a5[a99_0x25a5('0x7')]({'success':!![],'data':_0x4f8f4f});_0x4f8f4f[a99_0x25a5('0x26')](_0x19480f[a99_0x25a5('0x21')],{'language_id':_0x19480f[a99_0x25a5('0x1a')][a99_0x25a5('0x1b')]})[a99_0x25a5('0x6')](function(_0x1d3945){const _0x546037=this[a99_0x25a5('0x17')]?sequelize_utils_1[a99_0x25a5('0x18')][a99_0x25a5('0x19')](_0x4f8f4f,_0x19480f[a99_0x25a5('0x1a')][a99_0x25a5('0x1b')]):_0x4f8f4f;return _0x16d9a5[a99_0x25a5('0x7')]({'success':!![],'data':_0x546037});}[a99_0x25a5('0x27')](this))[a99_0x25a5('0x8')](_0x4c5059=>{return _0x16d9a5[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x4c5059[a99_0x25a5('0xb')]});});})[a99_0x25a5('0x8')](_0x55af55=>{return _0x16d9a5[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x55af55[a99_0x25a5('0xb')]});});}['updateOrCreate'](_0x3d2824,_0x1a5522,_0x6da803,_0x24cff6=![]){if(!_0x3d2824[a99_0x25a5('0x3')]||_0x3d2824[a99_0x25a5('0x3')]['length']==0x0){}if(_0x3d2824[a99_0x25a5('0x3')]&&_0x3d2824['user'][a99_0x25a5('0x4')]>0x0){}return this['model'][a99_0x25a5('0x28')]({'where':_0x3d2824[a99_0x25a5('0x5')]})['then'](function(_0x25fc5e){if(_0x25fc5e){return _0x25fc5e[a99_0x25a5('0x26')](_0x3d2824[a99_0x25a5('0x21')])[a99_0x25a5('0x6')](function(_0x1ca5da){const _0x485f1c=_0x1ca5da[a99_0x25a5('0x23')];if(_0x24cff6){delete _0x485f1c['id'];}if(_0x1a5522){return _0x1a5522[a99_0x25a5('0x7')]({'success':!![],'data':_0x485f1c});}else{return _0x485f1c;}}[a99_0x25a5('0x27')](this));}else{return this[a99_0x25a5('0x10')][a99_0x25a5('0x22')](_0x3d2824['body'])[a99_0x25a5('0x6')](function(_0x5a4ccc){if(_0x1a5522){return _0x1a5522[a99_0x25a5('0x7')]({'success':!![],'data':_0x5a4ccc['toJSON']()});}else{return _0x5a4ccc;}});}}['bind'](this))[a99_0x25a5('0x8')](_0x4f0fa2=>{if(_0x1a5522){return _0x1a5522['status'](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x4f0fa2[a99_0x25a5('0xb')]});}else{return _0x4f0fa2[a99_0x25a5('0xb')];}});}[a99_0x25a5('0x29')](_0x53de25,_0x5ed998,_0x4d6f40){if(!_0x53de25[a99_0x25a5('0x3')]||_0x53de25[a99_0x25a5('0x3')][a99_0x25a5('0x4')]==0x0){}if(_0x53de25[a99_0x25a5('0x3')]&&_0x53de25[a99_0x25a5('0x3')][a99_0x25a5('0x4')]>0x0){}return this[a99_0x25a5('0x10')]['findOrCreate']({'where':{'uuid':_0x53de25[a99_0x25a5('0x21')][a99_0x25a5('0x1e')]},'defaults':_0x53de25[a99_0x25a5('0x21')]})[a99_0x25a5('0x6')]((_0x26967e,_0x56493c)=>{if(_0x56493c){}else{}return _0x5ed998[a99_0x25a5('0x7')]({'success':!![],'data':_0x26967e});})[a99_0x25a5('0x8')](_0x4b2587=>{return _0x5ed998[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x4b2587[a99_0x25a5('0xb')]});});}[a99_0x25a5('0x2a')](_0x2b18d8,_0x49bb78,_0x38e967){if(!_0x2b18d8[a99_0x25a5('0x3')]||_0x2b18d8[a99_0x25a5('0x3')][a99_0x25a5('0x4')]==0x0){return _0x49bb78[a99_0x25a5('0x9')](0x191)[a99_0x25a5('0xa')]({'success':![],'data':a99_0x25a5('0x1d')});}if(_0x2b18d8[a99_0x25a5('0x3')]&&_0x2b18d8[a99_0x25a5('0x3')]['length']>0x0){_0x2b18d8[a99_0x25a5('0x21')][a99_0x25a5('0x12')]=_0x2b18d8[a99_0x25a5('0x3')][0x0]['id'];}this[a99_0x25a5('0x10')][a99_0x25a5('0x1c')](_0x2b18d8[a99_0x25a5('0x5')]['id'])[a99_0x25a5('0x6')](_0xe779ac=>{if(_0xe779ac==null)return _0x49bb78[a99_0x25a5('0x7')]({'success':!![],'data':_0xe779ac});_0xe779ac[a99_0x25a5('0x2b')]()[a99_0x25a5('0x6')](function(_0x293a12){const _0x5ca2fe=this[a99_0x25a5('0x17')]?sequelize_utils_1['default'][a99_0x25a5('0x19')](_0xe779ac,_0x2b18d8[a99_0x25a5('0x1a')][a99_0x25a5('0x1b')]):_0xe779ac;return _0x49bb78['json']({'success':!![],'data':_0x5ca2fe});})[a99_0x25a5('0x8')](_0x5bd204=>{return _0x49bb78[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x5bd204[a99_0x25a5('0xb')]});});})[a99_0x25a5('0x8')](_0x3a7dd5=>{return _0x49bb78[a99_0x25a5('0x9')](0x1f4)[a99_0x25a5('0xa')]({'success':![],'data':_0x3a7dd5[a99_0x25a5('0xb')]});});}}exports['default']=CrudUtils;