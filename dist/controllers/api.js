var a88_0x34fc=['utf8','status','parse','Data','CountingInfo','passes','create','findAll','countingDate','ASC','getPassCountingByDay','query','month','endDate','amount','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','startDate','DATE_FORMAT','col','%Y-%m-%d\x20%H:00','sum','total','HOUR','DAY','MONTH','YEAR','getFacebook','find','kind','facebook','accessToken','user','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','render','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','fbgraph','ftp','sequelize','getApi','api/index','API\x20Examples','syncFtp','log','default','connected','list','colombia','name','json','models','findOrCreate','spread','push','ipd','downloadFtp','reportFiles','then','connected:','fileName','get','colombia/','end','media/','pipe','Downloaded:\x20','error','connect','ftp.vivotek.com','processFtp','findOne','readFile'];(function(_0x5b8fd0,_0x1067d2){var _0x5aca70=function(_0x3e0bfe){while(--_0x3e0bfe){_0x5b8fd0['push'](_0x5b8fd0['shift']());}};_0x5aca70(++_0x1067d2);}(a88_0x34fc,0x119));var a88_0x1713=function(_0x558d68,_0x4f885d){_0x558d68=_0x558d68-0x0;var _0x2e2aa8=a88_0x34fc[_0x558d68];return _0x2e2aa8;};'use strict';var __importDefault=this&&this[a88_0x1713('0x0')]||function(_0x5e2b78){return _0x5e2b78&&_0x5e2b78[a88_0x1713('0x1')]?_0x5e2b78:{'default':_0x5e2b78};};Object[a88_0x1713('0x2')](exports,a88_0x1713('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a88_0x1713('0x3')));const ftp_1=__importDefault(require(a88_0x1713('0x4')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x2a04bb){exports[a88_0x1713('0x5')]=_0x2a04bb;}exports['setSequelize']=setSequelize;exports[a88_0x1713('0x6')]=(_0x200d0c,_0x3ec2f5)=>{_0x3ec2f5['render'](a88_0x1713('0x7'),{'title':a88_0x1713('0x8')});};exports[a88_0x1713('0x9')]=(_0x37d5f8,_0x1cce01)=>{console[a88_0x1713('0xa')]('connecting');const _0x235195=[];const _0x1d1e91=new ftp_1[(a88_0x1713('0xb'))]();_0x1d1e91['on']('ready',function(){console[a88_0x1713('0xa')](a88_0x1713('0xc'));_0x1d1e91[a88_0x1713('0xd')](a88_0x1713('0xe'),![],function(_0x3080a9,_0x21c456){if(_0x3080a9){}else{for(const _0x2d5c3d of _0x21c456){console[a88_0x1713('0xa')]('Downloading:\x20'+_0x2d5c3d[a88_0x1713('0xf')]);if(_0x2d5c3d[a88_0x1713('0xf')]['endsWith'](a88_0x1713('0x10'))){exports[a88_0x1713('0x5')][a88_0x1713('0x11')]['reportFiles'][a88_0x1713('0x12')]({'where':{'fileName':_0x2d5c3d[a88_0x1713('0xf')]}})[a88_0x1713('0x13')]((_0x1eca68,_0x54613a)=>{if(_0x54613a){console[a88_0x1713('0xa')](_0x2d5c3d['name']);_0x235195[a88_0x1713('0x14')](_0x1eca68);}});}}}_0x1cce01[a88_0x1713('0x10')]({'data':_0x235195});});});_0x1d1e91['on']('error',function(_0x4a48f4){_0x1cce01[a88_0x1713('0x10')]({'message':_0x4a48f4});});_0x1d1e91['connect']({'host':'ftp.vivotek.com','port':0x15,'user':a88_0x1713('0x15'),'password':a88_0x1713('0x15')});};exports[a88_0x1713('0x16')]=(_0x861b06,_0x1c005a)=>{exports[a88_0x1713('0x5')][a88_0x1713('0x11')][a88_0x1713('0x17')]['findOne']({'where':{'status':null}})[a88_0x1713('0x18')](_0x2ed3f0=>{if(_0x2ed3f0){const _0x1549c5=new ftp_1[(a88_0x1713('0xb'))]();_0x1549c5['on']('ready',function(){console[a88_0x1713('0xa')](a88_0x1713('0x19')+_0x2ed3f0[a88_0x1713('0x1a')]);_0x1549c5[a88_0x1713('0x1b')](a88_0x1713('0x1c')+_0x2ed3f0['fileName'],function(_0x306e44,_0x34f275){_0x1549c5[a88_0x1713('0x1d')]();if(_0x306e44){}else{const _0x2f2860=a88_0x1713('0x1e')+_0x2ed3f0[a88_0x1713('0x1a')]+'.txt';_0x34f275[a88_0x1713('0x1f')](fs_1[a88_0x1713('0xb')]['createWriteStream'](_0x2f2860));_0x2ed3f0['status']=0x1;_0x2ed3f0['save']();console[a88_0x1713('0xa')](a88_0x1713('0x20')+_0x2ed3f0[a88_0x1713('0x1a')]);}});});_0x1549c5['on'](a88_0x1713('0x21'),function(_0x4dd3c5){_0x1c005a['json']({'message':_0x4dd3c5});});_0x1549c5[a88_0x1713('0x22')]({'host':a88_0x1713('0x23'),'port':0x15,'user':a88_0x1713('0x15'),'password':a88_0x1713('0x15')});_0x1c005a['json']({'data':_0x2ed3f0[a88_0x1713('0x1a')]});}else{_0x1c005a[a88_0x1713('0x10')]({'data':[]});}});};exports[a88_0x1713('0x24')]=(_0x53e788,_0xb19492)=>{exports[a88_0x1713('0x5')]['models'][a88_0x1713('0x17')][a88_0x1713('0x25')]({'where':{'status':0x1}})[a88_0x1713('0x18')](_0x1be49d=>{if(_0x1be49d){const _0x4d557e=a88_0x1713('0x1e')+_0x1be49d[a88_0x1713('0x1a')]+'.txt';fs_1['default'][a88_0x1713('0x26')](_0x4d557e,a88_0x1713('0x27'),function(_0x847761,_0x50c333){if(_0x847761){_0x1be49d[a88_0x1713('0x28')]=null;}else{try{const _0xa5ff0a=JSON[a88_0x1713('0x29')](_0x50c333);for(const _0x4610a9 of _0xa5ff0a[a88_0x1713('0x2a')][0x0][a88_0x1713('0x2b')]){const _0x30dd0d=_0x4610a9['In'];const _0x415033=_0x4610a9['Out'];const _0x3aadbd=Date[a88_0x1713('0x29')](_0x4610a9['EndTime']);if(_0x30dd0d>0x0){exports['sequelize'][a88_0x1713('0x11')][a88_0x1713('0x2c')]['create']({'reportFileId':_0x1be49d['id'],'amount':_0x30dd0d,'countingDate':_0x3aadbd});}if(_0x415033>0x0){exports[a88_0x1713('0x5')]['models'][a88_0x1713('0x2c')][a88_0x1713('0x2d')]({'reportFileId':_0x1be49d['id'],'amount':_0x415033*-0x1,'countingDate':_0x3aadbd});}}_0x1be49d[a88_0x1713('0x28')]=0x2;}catch(_0x1bd01f){_0x1be49d['status']=null;}}_0x1be49d['save']();});_0xb19492[a88_0x1713('0x10')]({'data':_0x1be49d['fileName']});}else{_0xb19492['json']({'data':[]});}});};exports['getPassCounting']=(_0x13a5e3,_0x612cb8)=>{exports['sequelize'][a88_0x1713('0x11')][a88_0x1713('0x2c')][a88_0x1713('0x2e')]({'where':{'amount':{[exports['sequelize']['Op']['gt']]:0x0}},'order':[[a88_0x1713('0x2f'),a88_0x1713('0x30')]]})['then'](_0x55ec68=>{_0x612cb8[a88_0x1713('0x10')]({'data':_0x55ec68});});};exports[a88_0x1713('0x31')]=(_0x1ccc49,_0x43f48c)=>{const _0x2d533f=_0x1ccc49[a88_0x1713('0x32')][a88_0x1713('0x33')];const _0x4ac7bb=_0x1ccc49[a88_0x1713('0x32')]['startDate'];const _0x53ed17=_0x1ccc49['query'][a88_0x1713('0x34')];exports[a88_0x1713('0x5')][a88_0x1713('0x11')][a88_0x1713('0x2c')]['findAll']({'attributes':[a88_0x1713('0x2f'),[exports[a88_0x1713('0x5')]['fn']('sum',exports[a88_0x1713('0x5')]['col'](a88_0x1713('0x35'))),'total']],'where':{'countingDate':{[exports[a88_0x1713('0x5')]['Op'][a88_0x1713('0x36')]]:_0x4ac7bb,[exports[a88_0x1713('0x5')]['Op']['lt']]:_0x53ed17},'amount':_0x1ccc49[a88_0x1713('0x37')][a88_0x1713('0x38')]=='in'?{[exports[a88_0x1713('0x5')]['Op']['gt']]:0x0}:{[exports[a88_0x1713('0x5')]['Op']['lt']]:0x0}},'group':[exports[a88_0x1713('0x5')][a88_0x1713('0x39')](a88_0x1713('0x3a'))],'order':[[a88_0x1713('0x2f'),a88_0x1713('0x30')]]})[a88_0x1713('0x18')](_0x25e09f=>{_0x43f48c[a88_0x1713('0x10')]({'data':_0x25e09f});});};exports[a88_0x1713('0x3b')]=(_0x1e4ae9,_0x5c1745)=>{const _0x145a5b=_0x1e4ae9[a88_0x1713('0x32')][a88_0x1713('0x33')];const _0x51e60f=_0x1e4ae9[a88_0x1713('0x32')][a88_0x1713('0x3c')];const _0x186521=_0x1e4ae9[a88_0x1713('0x32')]['endDate'];exports[a88_0x1713('0x5')]['models'][a88_0x1713('0x2c')]['findAll']({'attributes':[a88_0x1713('0x2f'),[exports[a88_0x1713('0x5')]['fn'](a88_0x1713('0x3d'),exports[a88_0x1713('0x5')][a88_0x1713('0x3e')](a88_0x1713('0x2f')),a88_0x1713('0x3f')),'countingDateShort'],[exports[a88_0x1713('0x5')]['fn'](a88_0x1713('0x40'),exports['sequelize'][a88_0x1713('0x3e')](a88_0x1713('0x35'))),a88_0x1713('0x41')]],'where':{'countingDate':{[exports[a88_0x1713('0x5')]['Op'][a88_0x1713('0x36')]]:_0x51e60f,[exports[a88_0x1713('0x5')]['Op']['lt']]:_0x186521},'amount':_0x1e4ae9['params'][a88_0x1713('0x38')]=='in'?{[exports[a88_0x1713('0x5')]['Op']['gt']]:0x0}:{[exports[a88_0x1713('0x5')]['Op']['lt']]:0x0}},'group':[exports[a88_0x1713('0x5')]['fn'](a88_0x1713('0x42'),exports['sequelize'][a88_0x1713('0x3e')](a88_0x1713('0x2f'))),exports['sequelize']['fn'](a88_0x1713('0x43'),exports[a88_0x1713('0x5')]['col'](a88_0x1713('0x2f'))),exports[a88_0x1713('0x5')]['fn'](a88_0x1713('0x44'),exports[a88_0x1713('0x5')][a88_0x1713('0x3e')](a88_0x1713('0x2f'))),exports[a88_0x1713('0x5')]['fn'](a88_0x1713('0x45'),exports[a88_0x1713('0x5')]['col'](a88_0x1713('0x2f')))],'order':[[a88_0x1713('0x2f'),a88_0x1713('0x30')]]})[a88_0x1713('0x18')](_0x9ed132=>{_0x5c1745[a88_0x1713('0x10')]({'data':_0x9ed132});});};exports[a88_0x1713('0x46')]=(_0x2fb235,_0x676187,_0x46e01b)=>{const _0xb1102b=_0x2fb235['user']['tokens'][a88_0x1713('0x47')](_0xb1102b=>_0xb1102b[a88_0x1713('0x48')]===a88_0x1713('0x49'));fbgraph_1['default']['setAccessToken'](_0xb1102b[a88_0x1713('0x4a')]);fbgraph_1[a88_0x1713('0xb')][a88_0x1713('0x1b')](_0x2fb235[a88_0x1713('0x4b')]['facebook']+a88_0x1713('0x4c'),(_0x3b125b,_0x1da59e)=>{if(_0x3b125b){return _0x46e01b(_0x3b125b);}_0x676187[a88_0x1713('0x4d')](a88_0x1713('0x4e'),{'title':a88_0x1713('0x4f'),'profile':_0x1da59e});});};