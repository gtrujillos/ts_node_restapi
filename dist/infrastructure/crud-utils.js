var a94_0x4ba2=['default','headers','catch','save','body','dataValues','updated_by_user_id','deleted_by_user_id','__importDefault','./sequelize-utils','i18n','find','user','model','findAll','created_by_user_id','created_at','updated_at','deleted_at','then','toJSONLocalizedOnly','lang','json','status','stack','findById','length','send','authentication\x20failed','params'];(function(_0x5b84af,_0x5453b6){var _0x2facfd=function(_0x4ccb89){while(--_0x4ccb89){_0x5b84af['push'](_0x5b84af['shift']());}};_0x2facfd(++_0x5453b6);}(a94_0x4ba2,0x1e8));var a94_0xbaa5=function(_0x5d3dfc,_0x5a6ea6){_0x5d3dfc=_0x5d3dfc-0x0;var _0x166e1a=a94_0x4ba2[_0x5d3dfc];return _0x166e1a;};'use strict';var __importDefault=this&&this[a94_0xbaa5('0x0')]||function(_0x70b070){return _0x70b070&&_0x70b070['__esModule']?_0x70b070:{'default':_0x70b070};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_utils_1=__importDefault(require(a94_0xbaa5('0x1')));class CrudUtils{constructor(_0x2623a5,_0x36d288){this['model']=_0x2623a5;this[a94_0xbaa5('0x2')]=_0x36d288;}[a94_0xbaa5('0x3')](_0x332a1c,_0x4aa432,_0x13c27f){if(!_0x332a1c[a94_0xbaa5('0x4')]||_0x332a1c[a94_0xbaa5('0x4')]['length']==0x0){}this[a94_0xbaa5('0x5')][a94_0xbaa5('0x6')]({'attributes':{'exclude':['id',a94_0xbaa5('0x7'),'updated_by_user_id','deleted_by_user_id',a94_0xbaa5('0x8'),a94_0xbaa5('0x9'),a94_0xbaa5('0xa')]}})[a94_0xbaa5('0xb')](_0x4f5e6f=>{const _0x294084=this[a94_0xbaa5('0x2')]?sequelize_utils_1['default'][a94_0xbaa5('0xc')](_0x4f5e6f,_0x332a1c['headers'][a94_0xbaa5('0xd')]):_0x4f5e6f;return _0x4aa432[a94_0xbaa5('0xe')]({'success':!![],'data':_0x294084});})['catch'](_0x251d13=>{return _0x4aa432[a94_0xbaa5('0xf')](0x1f4)['send']({'success':![],'data':_0x251d13[a94_0xbaa5('0x10')]});});}[a94_0xbaa5('0x11')](_0x2e78b6,_0x1d4c0c,_0x47c94d){if(!_0x2e78b6[a94_0xbaa5('0x4')]||_0x2e78b6[a94_0xbaa5('0x4')][a94_0xbaa5('0x12')]==0x0){return _0x1d4c0c['status'](0x191)[a94_0xbaa5('0x13')]({'success':![],'data':a94_0xbaa5('0x14')});}this[a94_0xbaa5('0x5')][a94_0xbaa5('0x11')](_0x2e78b6[a94_0xbaa5('0x15')]['id'])[a94_0xbaa5('0xb')](_0x2b3c32=>{const _0x116432=this[a94_0xbaa5('0x2')]?sequelize_utils_1[a94_0xbaa5('0x16')][a94_0xbaa5('0xc')](_0x2b3c32,_0x2e78b6[a94_0xbaa5('0x17')][a94_0xbaa5('0xd')]):_0x2b3c32;return _0x1d4c0c['json']({'success':!![],'data':_0x116432});})[a94_0xbaa5('0x18')](_0x2a766e=>{return _0x1d4c0c[a94_0xbaa5('0xf')](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x2a766e['stack']});});}[a94_0xbaa5('0x19')](_0x33ec8f,_0x244f66,_0x5946d5){if(!_0x33ec8f['user']||_0x33ec8f[a94_0xbaa5('0x4')]['length']==0x0){}if(_0x33ec8f['user']&&_0x33ec8f[a94_0xbaa5('0x4')][a94_0xbaa5('0x12')]>0x0){_0x33ec8f[a94_0xbaa5('0x1a')][a94_0xbaa5('0x7')]=_0x33ec8f['user'][0x0]['id'];}this[a94_0xbaa5('0x5')]['create'](_0x33ec8f[a94_0xbaa5('0x1a')],{'language_id':_0x33ec8f[a94_0xbaa5('0x17')]['lang']})[a94_0xbaa5('0xb')](_0x29f0d4=>{const _0x3815f2=this[a94_0xbaa5('0x2')]?sequelize_utils_1[a94_0xbaa5('0x16')][a94_0xbaa5('0xc')](_0x29f0d4,_0x33ec8f[a94_0xbaa5('0x17')]['lang']):_0x29f0d4;delete _0x3815f2[a94_0xbaa5('0x1b')]['id'];delete _0x3815f2[a94_0xbaa5('0x1b')][a94_0xbaa5('0x7')];delete _0x3815f2['dataValues'][a94_0xbaa5('0x1c')];delete _0x3815f2[a94_0xbaa5('0x1b')][a94_0xbaa5('0x1d')];delete _0x3815f2[a94_0xbaa5('0x1b')][a94_0xbaa5('0x8')];delete _0x3815f2[a94_0xbaa5('0x1b')][a94_0xbaa5('0x9')];delete _0x3815f2[a94_0xbaa5('0x1b')][a94_0xbaa5('0xa')];return _0x244f66['json']({'success':!![],'data':_0x3815f2});})[a94_0xbaa5('0x18')](_0x3f2a43=>{return _0x244f66['status'](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x3f2a43[a94_0xbaa5('0x10')]});});}['findOneAndUpdate'](_0x32eabc,_0x118a43,_0x33e7bb){if(!_0x32eabc[a94_0xbaa5('0x4')]||_0x32eabc[a94_0xbaa5('0x4')][a94_0xbaa5('0x12')]==0x0){return _0x118a43[a94_0xbaa5('0xf')](0x191)['send']({'success':![],'data':a94_0xbaa5('0x14')});}if(_0x32eabc[a94_0xbaa5('0x4')]&&_0x32eabc[a94_0xbaa5('0x4')][a94_0xbaa5('0x12')]>0x0){_0x32eabc['body']['created_by_user_id']=_0x32eabc[a94_0xbaa5('0x4')][0x0]['id'];}this[a94_0xbaa5('0x5')]['findById'](_0x32eabc[a94_0xbaa5('0x15')]['id'])['then'](_0x559aa0=>{if(_0x559aa0==null)return _0x118a43['json']({'success':!![],'data':_0x559aa0});_0x559aa0['update'](_0x32eabc[a94_0xbaa5('0x1a')],{'language_id':_0x32eabc['headers']['lang']})[a94_0xbaa5('0xb')](function(_0xc9a2a){const _0x45f7e9=this[a94_0xbaa5('0x2')]?sequelize_utils_1['default'][a94_0xbaa5('0xc')](_0x559aa0,_0x32eabc[a94_0xbaa5('0x17')][a94_0xbaa5('0xd')]):_0x559aa0;return _0x118a43[a94_0xbaa5('0xe')]({'success':!![],'data':_0x45f7e9});})[a94_0xbaa5('0x18')](_0x5a07de=>{return _0x118a43[a94_0xbaa5('0xf')](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x5a07de[a94_0xbaa5('0x10')]});});})[a94_0xbaa5('0x18')](_0x67d895=>{return _0x118a43[a94_0xbaa5('0xf')](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x67d895['stack']});});}['remove'](_0x5dff49,_0x3d7b00,_0x34d522){if(!_0x5dff49[a94_0xbaa5('0x4')]||_0x5dff49[a94_0xbaa5('0x4')]['length']==0x0){return _0x3d7b00[a94_0xbaa5('0xf')](0x191)['send']({'success':![],'data':'authentication\x20failed'});}if(_0x5dff49[a94_0xbaa5('0x4')]&&_0x5dff49[a94_0xbaa5('0x4')][a94_0xbaa5('0x12')]>0x0){_0x5dff49[a94_0xbaa5('0x1a')]['created_by_user_id']=_0x5dff49[a94_0xbaa5('0x4')][0x0]['id'];}this[a94_0xbaa5('0x5')][a94_0xbaa5('0x11')](_0x5dff49[a94_0xbaa5('0x15')]['id'])[a94_0xbaa5('0xb')](_0x5caab5=>{if(_0x5caab5==null)return _0x3d7b00[a94_0xbaa5('0xe')]({'success':!![],'data':_0x5caab5});_0x5caab5['destroy']()[a94_0xbaa5('0xb')](function(_0x18d555){const _0x34c9c3=this[a94_0xbaa5('0x2')]?sequelize_utils_1[a94_0xbaa5('0x16')]['toJSONLocalizedOnly'](_0x5caab5,_0x5dff49[a94_0xbaa5('0x17')]['lang']):_0x5caab5;return _0x3d7b00[a94_0xbaa5('0xe')]({'success':!![],'data':_0x34c9c3});})[a94_0xbaa5('0x18')](_0x563bce=>{return _0x3d7b00['status'](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x563bce[a94_0xbaa5('0x10')]});});})[a94_0xbaa5('0x18')](_0x4501f1=>{return _0x3d7b00[a94_0xbaa5('0xf')](0x1f4)[a94_0xbaa5('0x13')]({'success':![],'data':_0x4501f1['stack']});});}}exports[a94_0xbaa5('0x16')]=CrudUtils;