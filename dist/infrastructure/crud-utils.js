var a94_0x1fdf=['send','stack','findById','then','toJSONLocalizedOnly','json','findAll','params','uuid','save','body','create','dataValues','updated_at','findByPk','bind','updateOrCreate','findOrCreate','remove','authentication\x20failed','destroy','__importDefault','__esModule','defineProperty','./sequelize-utils','find','user','length','model','created_by_user_id','updated_by_user_id','deleted_by_user_id','created_at','deleted_at','i18n','default','headers','lang','toJSON','catch','status'];(function(_0x51f0d5,_0x293e88){var _0x42da4c=function(_0x229c27){while(--_0x229c27){_0x51f0d5['push'](_0x51f0d5['shift']());}};_0x42da4c(++_0x293e88);}(a94_0x1fdf,0x10b));var a94_0x2a14=function(_0x2c4e16,_0x3bcd92){_0x2c4e16=_0x2c4e16-0x0;var _0x5dbf2c=a94_0x1fdf[_0x2c4e16];return _0x5dbf2c;};'use strict';var __importDefault=this&&this[a94_0x2a14('0x0')]||function(_0x457f12){return _0x457f12&&_0x457f12[a94_0x2a14('0x1')]?_0x457f12:{'default':_0x457f12};};Object[a94_0x2a14('0x2')](exports,a94_0x2a14('0x1'),{'value':!![]});const sequelize_utils_1=__importDefault(require(a94_0x2a14('0x3')));class CrudUtils{constructor(_0x2c4661,_0x35f40a){this['model']=_0x2c4661;this['i18n']=_0x35f40a;}[a94_0x2a14('0x4')](_0x2da45d,_0x17391b,_0xf8d6bd,_0x43e2d4=![]){if(!_0x2da45d[a94_0x2a14('0x5')]||_0x2da45d['user'][a94_0x2a14('0x6')]==0x0){}return this[a94_0x2a14('0x7')]['findAll']({'attributes':{'exclude':_0x43e2d4?[]:['id',a94_0x2a14('0x8'),a94_0x2a14('0x9'),a94_0x2a14('0xa'),a94_0x2a14('0xb'),'updated_at',a94_0x2a14('0xc')]},'where':{}})['then'](_0x1a0185=>{const _0x184ade=this[a94_0x2a14('0xd')]?sequelize_utils_1[a94_0x2a14('0xe')]['toJSONLocalizedOnly'](_0x1a0185,_0x2da45d[a94_0x2a14('0xf')][a94_0x2a14('0x10')]):sequelize_utils_1[a94_0x2a14('0xe')][a94_0x2a14('0x11')](_0x1a0185);if(_0x17391b){return _0x17391b['json']({'success':!![],'data':_0x184ade});}else{return _0x184ade;}})[a94_0x2a14('0x12')](_0x2af773=>{if(_0x17391b){return _0x17391b[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x2af773['stack']});}else{return _0x2af773[a94_0x2a14('0x15')];}});}['findById'](_0x287126,_0x2147d5,_0x3620fb){if(!_0x287126['user']||_0x287126[a94_0x2a14('0x5')][a94_0x2a14('0x6')]==0x0){return _0x2147d5[a94_0x2a14('0x13')](0x191)['send']({'success':![],'data':'authentication\x20failed'});}this['model'][a94_0x2a14('0x16')](_0x287126['params']['id'])[a94_0x2a14('0x17')](_0x446621=>{const _0xdac307=this[a94_0x2a14('0xd')]?sequelize_utils_1[a94_0x2a14('0xe')][a94_0x2a14('0x18')](_0x446621,_0x287126[a94_0x2a14('0xf')]['lang']):_0x446621;return _0x2147d5[a94_0x2a14('0x19')]({'success':!![],'data':_0xdac307});})[a94_0x2a14('0x12')](_0x465226=>{return _0x2147d5[a94_0x2a14('0x13')](0x1f4)['send']({'success':![],'data':_0x465226[a94_0x2a14('0x15')]});});}['findByUUId'](_0xd77590,_0x469788,_0x5e97cf){if(!_0xd77590[a94_0x2a14('0x5')]||_0xd77590[a94_0x2a14('0x5')][a94_0x2a14('0x6')]==0x0){}return this[a94_0x2a14('0x7')][a94_0x2a14('0x1a')]({'where':{'uuid':_0xd77590[a94_0x2a14('0x1b')][a94_0x2a14('0x1c')]}})[a94_0x2a14('0x17')](_0x26011b=>{const _0x1e191c=this[a94_0x2a14('0xd')]?sequelize_utils_1['default']['toJSONLocalizedOnly'](_0x26011b,_0xd77590[a94_0x2a14('0xf')]['lang']):sequelize_utils_1[a94_0x2a14('0xe')][a94_0x2a14('0x11')](_0x26011b);return _0x1e191c;})[a94_0x2a14('0x12')](_0x2c472d=>{return _0x2c472d[a94_0x2a14('0x15')];});}[a94_0x2a14('0x1d')](_0x581956,_0x5bffbc,_0x4b7447){if(!_0x581956[a94_0x2a14('0x5')]||_0x581956['user']['length']==0x0){}if(_0x581956[a94_0x2a14('0x5')]&&_0x581956[a94_0x2a14('0x5')][a94_0x2a14('0x6')]>0x0){_0x581956[a94_0x2a14('0x1e')][a94_0x2a14('0x8')]=_0x581956[a94_0x2a14('0x5')][0x0]['id'];}this['model'][a94_0x2a14('0x1f')](_0x581956[a94_0x2a14('0x1e')],{'language_id':_0x581956[a94_0x2a14('0xf')]['lang']})[a94_0x2a14('0x17')](_0xa495d8=>{const _0x2d7e31=this[a94_0x2a14('0xd')]?sequelize_utils_1[a94_0x2a14('0xe')][a94_0x2a14('0x18')](_0xa495d8,_0x581956[a94_0x2a14('0xf')][a94_0x2a14('0x10')]):_0xa495d8;delete _0x2d7e31[a94_0x2a14('0x20')]['id'];delete _0x2d7e31[a94_0x2a14('0x20')][a94_0x2a14('0x8')];delete _0x2d7e31[a94_0x2a14('0x20')][a94_0x2a14('0x9')];delete _0x2d7e31['dataValues'][a94_0x2a14('0xa')];delete _0x2d7e31[a94_0x2a14('0x20')][a94_0x2a14('0xb')];delete _0x2d7e31[a94_0x2a14('0x20')][a94_0x2a14('0x21')];delete _0x2d7e31[a94_0x2a14('0x20')]['deleted_at'];return _0x5bffbc[a94_0x2a14('0x19')]({'success':!![],'data':_0x2d7e31});})[a94_0x2a14('0x12')](_0xe797e8=>{return _0x5bffbc[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0xe797e8[a94_0x2a14('0x15')]});});}['findOneAndUpdate'](_0x407de5,_0x504f79,_0x55279a){if(!_0x407de5[a94_0x2a14('0x5')]||_0x407de5['user'][a94_0x2a14('0x6')]==0x0){}if(_0x407de5[a94_0x2a14('0x5')]&&_0x407de5[a94_0x2a14('0x5')][a94_0x2a14('0x6')]>0x0){_0x407de5['body'][a94_0x2a14('0x8')]=_0x407de5[a94_0x2a14('0x5')][0x0]['id'];}this[a94_0x2a14('0x7')][a94_0x2a14('0x22')](_0x407de5['body']['id'])[a94_0x2a14('0x17')](_0x1d8fb0=>{if(_0x1d8fb0==null)return _0x504f79[a94_0x2a14('0x19')]({'success':!![],'data':_0x1d8fb0});_0x1d8fb0['update'](_0x407de5[a94_0x2a14('0x1e')],{'language_id':_0x407de5[a94_0x2a14('0xf')][a94_0x2a14('0x10')]})[a94_0x2a14('0x17')](function(_0x3ae238){const _0x38f807=this['i18n']?sequelize_utils_1['default']['toJSONLocalizedOnly'](_0x1d8fb0,_0x407de5['headers']['lang']):_0x1d8fb0;return _0x504f79[a94_0x2a14('0x19')]({'success':!![],'data':_0x38f807});}[a94_0x2a14('0x23')](this))[a94_0x2a14('0x12')](_0x4eea02=>{return _0x504f79[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x4eea02[a94_0x2a14('0x15')]});});})['catch'](_0x1540f8=>{return _0x504f79[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x1540f8[a94_0x2a14('0x15')]});});}[a94_0x2a14('0x24')](_0xece23f,_0x10e8e0,_0x282e23,_0x3c00e7=![]){if(!_0xece23f[a94_0x2a14('0x5')]||_0xece23f[a94_0x2a14('0x5')][a94_0x2a14('0x6')]==0x0){}if(_0xece23f['user']&&_0xece23f[a94_0x2a14('0x5')]['length']>0x0){_0xece23f[a94_0x2a14('0x1e')]['created_by_user_id']=_0xece23f[a94_0x2a14('0x5')][0x0]['id'];}return this['model']['findOne']({'where':_0xece23f[a94_0x2a14('0x1b')]})[a94_0x2a14('0x17')](function(_0x2248d8){if(_0x2248d8){return _0x2248d8['update'](_0xece23f[a94_0x2a14('0x1e')])[a94_0x2a14('0x17')](function(_0xceeff7){const _0x5ea9a0=_0xceeff7[a94_0x2a14('0x20')];if(_0x3c00e7){delete _0x5ea9a0['id'];}if(_0x10e8e0){return _0x10e8e0[a94_0x2a14('0x19')]({'success':!![],'data':_0x5ea9a0});}else{return _0x5ea9a0;}}['bind'](this));}else{return this['model'][a94_0x2a14('0x1f')](_0xece23f[a94_0x2a14('0x1e')])['then'](function(_0x2f5c81){if(_0x10e8e0){return _0x10e8e0[a94_0x2a14('0x19')]({'success':!![],'data':_0x2f5c81[a94_0x2a14('0x11')]()});}else{return _0x2f5c81;}});}}[a94_0x2a14('0x23')](this))[a94_0x2a14('0x12')](_0x3af6e6=>{if(_0x10e8e0){return _0x10e8e0[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x3af6e6['stack']});}else{return _0x3af6e6[a94_0x2a14('0x15')];}});}[a94_0x2a14('0x25')](_0x8d52e1,_0x6973fd,_0x50b607){if(!_0x8d52e1[a94_0x2a14('0x5')]||_0x8d52e1[a94_0x2a14('0x5')][a94_0x2a14('0x6')]==0x0){}if(_0x8d52e1[a94_0x2a14('0x5')]&&_0x8d52e1[a94_0x2a14('0x5')][a94_0x2a14('0x6')]>0x0){_0x8d52e1[a94_0x2a14('0x1e')][a94_0x2a14('0x8')]=_0x8d52e1[a94_0x2a14('0x5')][0x0]['id'];}return this[a94_0x2a14('0x7')]['findOrCreate']({'where':{'uuid':_0x8d52e1[a94_0x2a14('0x1e')][a94_0x2a14('0x1c')]},'defaults':_0x8d52e1['body']})[a94_0x2a14('0x17')]((_0x2d73ae,_0x363d46)=>{if(_0x363d46){}else{}return _0x6973fd[a94_0x2a14('0x19')]({'success':!![],'data':_0x2d73ae});})[a94_0x2a14('0x12')](_0x4457f4=>{return _0x6973fd['status'](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x4457f4[a94_0x2a14('0x15')]});});}[a94_0x2a14('0x26')](_0x5f3f13,_0x3c249d,_0x26f365){if(!_0x5f3f13[a94_0x2a14('0x5')]||_0x5f3f13[a94_0x2a14('0x5')][a94_0x2a14('0x6')]==0x0){return _0x3c249d['status'](0x191)[a94_0x2a14('0x14')]({'success':![],'data':a94_0x2a14('0x27')});}if(_0x5f3f13[a94_0x2a14('0x5')]&&_0x5f3f13[a94_0x2a14('0x5')]['length']>0x0){_0x5f3f13[a94_0x2a14('0x1e')][a94_0x2a14('0x8')]=_0x5f3f13[a94_0x2a14('0x5')][0x0]['id'];}this[a94_0x2a14('0x7')][a94_0x2a14('0x16')](_0x5f3f13[a94_0x2a14('0x1b')]['id'])['then'](_0x43354b=>{if(_0x43354b==null)return _0x3c249d[a94_0x2a14('0x19')]({'success':!![],'data':_0x43354b});_0x43354b[a94_0x2a14('0x28')]()[a94_0x2a14('0x17')](function(_0x5d8b9a){const _0x309e00=this['i18n']?sequelize_utils_1[a94_0x2a14('0xe')][a94_0x2a14('0x18')](_0x43354b,_0x5f3f13['headers']['lang']):_0x43354b;return _0x3c249d[a94_0x2a14('0x19')]({'success':!![],'data':_0x309e00});})[a94_0x2a14('0x12')](_0x232f8e=>{return _0x3c249d[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x232f8e[a94_0x2a14('0x15')]});});})['catch'](_0x5ec6ed=>{return _0x3c249d[a94_0x2a14('0x13')](0x1f4)[a94_0x2a14('0x14')]({'success':![],'data':_0x5ec6ed['stack']});});}}exports['default']=CrudUtils;