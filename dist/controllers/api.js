var a92_0x32ea=['readFile','utf8','parse','CountingInfo','Out','EndTime','create','passes','findAll','countingDate','ASC','getPassCountingByDay','query','month','startDate','sum','col','amount','total','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','endDate','DATE_FORMAT','%Y-%m-%d\x20%H:00','countingDateShort','HOUR','MONTH','getFacebook','user','tokens','find','kind','facebook','setAccessToken','accessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__importDefault','__esModule','ftp','sequelize','setSequelize','render','syncFtp','connecting','default','ready','log','connected','list','colombia','Downloading:\x20','name','endsWith','models','reportFiles','findOrCreate','spread','push','json','connect','ipd','downloadFtp','findOne','then','connected:','get','colombia/','media/','fileName','.txt','pipe','createWriteStream','status','save','error','ftp.vivotek.com','processFtp'];(function(_0x501499,_0x2ab437){var _0xb58d30=function(_0xfb8afc){while(--_0xfb8afc){_0x501499['push'](_0x501499['shift']());}};_0xb58d30(++_0x2ab437);}(a92_0x32ea,0xd0));var a92_0x59e9=function(_0x38e246,_0x381fee){_0x38e246=_0x38e246-0x0;var _0x2a4630=a92_0x32ea[_0x38e246];return _0x2a4630;};'use strict';var __importDefault=this&&this[a92_0x59e9('0x0')]||function(_0x1b2e34){return _0x1b2e34&&_0x1b2e34[a92_0x59e9('0x1')]?_0x1b2e34:{'default':_0x1b2e34};};Object['defineProperty'](exports,a92_0x59e9('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a92_0x59e9('0x2')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x43ba87){exports[a92_0x59e9('0x3')]=_0x43ba87;}exports[a92_0x59e9('0x4')]=setSequelize;exports['getApi']=(_0x5c5ace,_0x4ab4ee)=>{_0x4ab4ee[a92_0x59e9('0x5')]('api/index',{'title':'API\x20Examples'});};exports[a92_0x59e9('0x6')]=(_0x1bff3d,_0x1963f5)=>{console['log'](a92_0x59e9('0x7'));const _0x5021d4=[];const _0x4b1c17=new ftp_1[(a92_0x59e9('0x8'))]();_0x4b1c17['on'](a92_0x59e9('0x9'),function(){console[a92_0x59e9('0xa')](a92_0x59e9('0xb'));_0x4b1c17[a92_0x59e9('0xc')](a92_0x59e9('0xd'),![],function(_0x14d17b,_0xcb42e4){if(_0x14d17b){}else{for(const _0x2ee96c of _0xcb42e4){console[a92_0x59e9('0xa')](a92_0x59e9('0xe')+_0x2ee96c[a92_0x59e9('0xf')]);if(_0x2ee96c[a92_0x59e9('0xf')][a92_0x59e9('0x10')]('json')){exports['sequelize'][a92_0x59e9('0x11')][a92_0x59e9('0x12')][a92_0x59e9('0x13')]({'where':{'fileName':_0x2ee96c[a92_0x59e9('0xf')]}})[a92_0x59e9('0x14')]((_0xf6a8f3,_0x24038a)=>{if(_0x24038a){console['log'](_0x2ee96c[a92_0x59e9('0xf')]);_0x5021d4[a92_0x59e9('0x15')](_0xf6a8f3);}});}}}_0x1963f5[a92_0x59e9('0x16')]({'data':_0x5021d4});});});_0x4b1c17['on']('error',function(_0x3df4ed){_0x1963f5['json']({'message':_0x3df4ed});});_0x4b1c17[a92_0x59e9('0x17')]({'host':'ftp.vivotek.com','port':0x15,'user':a92_0x59e9('0x18'),'password':a92_0x59e9('0x18')});};exports[a92_0x59e9('0x19')]=(_0x3de48a,_0x7627)=>{exports[a92_0x59e9('0x3')][a92_0x59e9('0x11')][a92_0x59e9('0x12')][a92_0x59e9('0x1a')]({'where':{'status':null}})[a92_0x59e9('0x1b')](_0x562141=>{if(_0x562141){const _0x109268=new ftp_1['default']();_0x109268['on'](a92_0x59e9('0x9'),function(){console[a92_0x59e9('0xa')](a92_0x59e9('0x1c')+_0x562141['fileName']);_0x109268[a92_0x59e9('0x1d')](a92_0x59e9('0x1e')+_0x562141['fileName'],function(_0x70ccc0,_0x44565a){_0x109268['end']();if(_0x70ccc0){}else{const _0x295512=a92_0x59e9('0x1f')+_0x562141[a92_0x59e9('0x20')]+a92_0x59e9('0x21');_0x44565a[a92_0x59e9('0x22')](fs_1[a92_0x59e9('0x8')][a92_0x59e9('0x23')](_0x295512));_0x562141[a92_0x59e9('0x24')]=0x1;_0x562141[a92_0x59e9('0x25')]();console[a92_0x59e9('0xa')]('Downloaded:\x20'+_0x562141[a92_0x59e9('0x20')]);}});});_0x109268['on'](a92_0x59e9('0x26'),function(_0x4f801a){_0x7627[a92_0x59e9('0x16')]({'message':_0x4f801a});});_0x109268[a92_0x59e9('0x17')]({'host':a92_0x59e9('0x27'),'port':0x15,'user':a92_0x59e9('0x18'),'password':a92_0x59e9('0x18')});_0x7627['json']({'data':_0x562141['fileName']});}else{_0x7627[a92_0x59e9('0x16')]({'data':[]});}});};exports[a92_0x59e9('0x28')]=(_0x15eeb9,_0x532d8c)=>{exports['sequelize'][a92_0x59e9('0x11')][a92_0x59e9('0x12')][a92_0x59e9('0x1a')]({'where':{'status':0x1}})[a92_0x59e9('0x1b')](_0x24e5e9=>{if(_0x24e5e9){const _0x5012b1=a92_0x59e9('0x1f')+_0x24e5e9[a92_0x59e9('0x20')]+'.txt';fs_1['default'][a92_0x59e9('0x29')](_0x5012b1,a92_0x59e9('0x2a'),function(_0x384ece,_0x34bbd8){if(_0x384ece){_0x24e5e9[a92_0x59e9('0x24')]=null;}else{try{const _0x2daf09=JSON[a92_0x59e9('0x2b')](_0x34bbd8);for(const _0xc0469 of _0x2daf09['Data'][0x0][a92_0x59e9('0x2c')]){const _0x4b53c4=_0xc0469['In'];const _0x4d3c52=_0xc0469[a92_0x59e9('0x2d')];const _0x167c76=Date['parse'](_0xc0469[a92_0x59e9('0x2e')]);if(_0x4b53c4>0x0){exports[a92_0x59e9('0x3')][a92_0x59e9('0x11')]['passes'][a92_0x59e9('0x2f')]({'reportFileId':_0x24e5e9['id'],'amount':_0x4b53c4,'countingDate':_0x167c76});}if(_0x4d3c52>0x0){exports['sequelize'][a92_0x59e9('0x11')]['passes'][a92_0x59e9('0x2f')]({'reportFileId':_0x24e5e9['id'],'amount':_0x4d3c52*-0x1,'countingDate':_0x167c76});}}_0x24e5e9[a92_0x59e9('0x24')]=0x2;}catch(_0x9014c0){_0x24e5e9[a92_0x59e9('0x24')]=null;}}_0x24e5e9['save']();});_0x532d8c[a92_0x59e9('0x16')]({'data':_0x24e5e9[a92_0x59e9('0x20')]});}else{_0x532d8c['json']({'data':[]});}});};exports['getPassCounting']=(_0x262efb,_0x53f1f1)=>{exports[a92_0x59e9('0x3')][a92_0x59e9('0x11')][a92_0x59e9('0x30')][a92_0x59e9('0x31')]({'where':{'amount':{[exports[a92_0x59e9('0x3')]['Op']['gt']]:0x0}},'order':[[a92_0x59e9('0x32'),a92_0x59e9('0x33')]]})[a92_0x59e9('0x1b')](_0xf36293=>{_0x53f1f1['json']({'data':_0xf36293});});};exports[a92_0x59e9('0x34')]=(_0x534ad7,_0x34bbc7)=>{const _0x5efa9d=_0x534ad7[a92_0x59e9('0x35')][a92_0x59e9('0x36')];const _0x26b36d=_0x534ad7[a92_0x59e9('0x35')][a92_0x59e9('0x37')];const _0x4ebc62=_0x534ad7['query']['endDate'];exports[a92_0x59e9('0x3')][a92_0x59e9('0x11')][a92_0x59e9('0x30')][a92_0x59e9('0x31')]({'attributes':[a92_0x59e9('0x32'),[exports[a92_0x59e9('0x3')]['fn'](a92_0x59e9('0x38'),exports[a92_0x59e9('0x3')][a92_0x59e9('0x39')](a92_0x59e9('0x3a'))),a92_0x59e9('0x3b')]],'where':{'countingDate':{[exports[a92_0x59e9('0x3')]['Op'][a92_0x59e9('0x3c')]]:_0x26b36d,[exports[a92_0x59e9('0x3')]['Op']['lt']]:_0x4ebc62},'amount':_0x534ad7[a92_0x59e9('0x3d')][a92_0x59e9('0x3e')]=='in'?{[exports[a92_0x59e9('0x3')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a92_0x59e9('0x3')][a92_0x59e9('0x3f')](a92_0x59e9('0x40'))],'order':[[a92_0x59e9('0x32'),a92_0x59e9('0x33')]]})[a92_0x59e9('0x1b')](_0x3d5f99=>{_0x34bbc7[a92_0x59e9('0x16')]({'data':_0x3d5f99});});};exports[a92_0x59e9('0x41')]=(_0xba2345,_0x342fec)=>{const _0x2415a9=_0xba2345[a92_0x59e9('0x35')][a92_0x59e9('0x36')];const _0x10c6da=_0xba2345[a92_0x59e9('0x35')]['startDate'];const _0x4f0b88=_0xba2345[a92_0x59e9('0x35')][a92_0x59e9('0x42')];exports[a92_0x59e9('0x3')]['models'][a92_0x59e9('0x30')][a92_0x59e9('0x31')]({'attributes':[a92_0x59e9('0x32'),[exports[a92_0x59e9('0x3')]['fn'](a92_0x59e9('0x43'),exports[a92_0x59e9('0x3')]['col'](a92_0x59e9('0x32')),a92_0x59e9('0x44')),a92_0x59e9('0x45')],[exports[a92_0x59e9('0x3')]['fn'](a92_0x59e9('0x38'),exports[a92_0x59e9('0x3')][a92_0x59e9('0x39')](a92_0x59e9('0x3a'))),a92_0x59e9('0x3b')]],'where':{'countingDate':{[exports[a92_0x59e9('0x3')]['Op']['gte']]:_0x10c6da,[exports[a92_0x59e9('0x3')]['Op']['lt']]:_0x4f0b88},'amount':_0xba2345['params']['direction']=='in'?{[exports[a92_0x59e9('0x3')]['Op']['gt']]:0x0}:{[exports[a92_0x59e9('0x3')]['Op']['lt']]:0x0}},'group':[exports[a92_0x59e9('0x3')]['fn'](a92_0x59e9('0x46'),exports['sequelize'][a92_0x59e9('0x39')](a92_0x59e9('0x32'))),exports[a92_0x59e9('0x3')]['fn']('DAY',exports[a92_0x59e9('0x3')][a92_0x59e9('0x39')](a92_0x59e9('0x32'))),exports[a92_0x59e9('0x3')]['fn'](a92_0x59e9('0x47'),exports['sequelize'][a92_0x59e9('0x39')](a92_0x59e9('0x32'))),exports[a92_0x59e9('0x3')]['fn']('YEAR',exports[a92_0x59e9('0x3')][a92_0x59e9('0x39')]('countingDate'))],'order':[['countingDate',a92_0x59e9('0x33')]]})[a92_0x59e9('0x1b')](_0x44540c=>{_0x342fec['json']({'data':_0x44540c});});};exports[a92_0x59e9('0x48')]=(_0x481175,_0x43cd6e,_0x174c31)=>{const _0x40d310=_0x481175[a92_0x59e9('0x49')][a92_0x59e9('0x4a')][a92_0x59e9('0x4b')](_0x40d310=>_0x40d310[a92_0x59e9('0x4c')]===a92_0x59e9('0x4d'));fbgraph_1[a92_0x59e9('0x8')][a92_0x59e9('0x4e')](_0x40d310[a92_0x59e9('0x4f')]);fbgraph_1[a92_0x59e9('0x8')][a92_0x59e9('0x1d')](_0x481175[a92_0x59e9('0x49')][a92_0x59e9('0x4d')]+a92_0x59e9('0x50'),(_0x23a5b7,_0x3906ac)=>{if(_0x23a5b7){return _0x174c31(_0x23a5b7);}_0x43cd6e['render'](a92_0x59e9('0x51'),{'title':a92_0x59e9('0x52'),'profile':_0x3906ac});});};