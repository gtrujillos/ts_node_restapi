var a198_0x2415=['readFile','utf8','parse','Data','Out','EndTime','passes','create','getPassCounting','findAll','countingDate','ASC','getPassCountingByDay','query','startDate','endDate','sum','col','total','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','then','getPassCountingByHour','month','DATE_FORMAT','%Y-%m-%d\x20%H:00','amount','HOUR','DAY','MONTH','YEAR','getFacebook','tokens','find','kind','facebook','setAccessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','fbgraph','ftp','setSequelize','render','api/index','API\x20Examples','syncFtp','log','connecting','ready','connected','Downloading:\x20','name','endsWith','json','models','reportFiles','findOrCreate','spread','push','error','connect','ftp.vivotek.com','ipd','downloadFtp','sequelize','findOne','connected:','fileName','get','colombia/','media/','.txt','pipe','default','status','save','Downloaded:\x20','processFtp'];(function(_0x444a98,_0x38a728){var _0x215e5f=function(_0x5483ea){while(--_0x5483ea){_0x444a98['push'](_0x444a98['shift']());}};_0x215e5f(++_0x38a728);}(a198_0x2415,0x80));var a198_0x548c=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a198_0x2415[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a198_0x548c('0x0')]||function(_0x50287d){return _0x50287d&&_0x50287d[a198_0x548c('0x1')]?_0x50287d:{'default':_0x50287d};};Object[a198_0x548c('0x2')](exports,a198_0x548c('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a198_0x548c('0x3')));const ftp_1=__importDefault(require(a198_0x548c('0x4')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x9e5a49){exports['sequelize']=_0x9e5a49;}exports[a198_0x548c('0x5')]=setSequelize;exports['getApi']=(_0x1b5553,_0x1e35d3)=>{_0x1e35d3[a198_0x548c('0x6')](a198_0x548c('0x7'),{'title':a198_0x548c('0x8')});};exports[a198_0x548c('0x9')]=(_0x4e810f,_0x3fa2f1)=>{console[a198_0x548c('0xa')](a198_0x548c('0xb'));const _0x21cba1=[];const _0x34ea2c=new ftp_1['default']();_0x34ea2c['on'](a198_0x548c('0xc'),function(){console['log'](a198_0x548c('0xd'));_0x34ea2c['list']('colombia',![],function(_0x126232,_0x46fda3){if(_0x126232){}else{for(const _0x1f2388 of _0x46fda3){console[a198_0x548c('0xa')](a198_0x548c('0xe')+_0x1f2388[a198_0x548c('0xf')]);if(_0x1f2388['name'][a198_0x548c('0x10')](a198_0x548c('0x11'))){exports['sequelize'][a198_0x548c('0x12')][a198_0x548c('0x13')][a198_0x548c('0x14')]({'where':{'fileName':_0x1f2388['name']}})[a198_0x548c('0x15')]((_0x4b777d,_0x1cec9a)=>{if(_0x1cec9a){console[a198_0x548c('0xa')](_0x1f2388[a198_0x548c('0xf')]);_0x21cba1[a198_0x548c('0x16')](_0x4b777d);}});}}}_0x3fa2f1[a198_0x548c('0x11')]({'data':_0x21cba1});});});_0x34ea2c['on'](a198_0x548c('0x17'),function(_0x1c1720){_0x3fa2f1['json']({'message':_0x1c1720});});_0x34ea2c[a198_0x548c('0x18')]({'host':a198_0x548c('0x19'),'port':0x15,'user':'ipd','password':a198_0x548c('0x1a')});};exports[a198_0x548c('0x1b')]=(_0x508540,_0x502502)=>{exports[a198_0x548c('0x1c')][a198_0x548c('0x12')][a198_0x548c('0x13')][a198_0x548c('0x1d')]({'where':{'status':null}})['then'](_0x473632=>{if(_0x473632){const _0x2ef638=new ftp_1['default']();_0x2ef638['on'](a198_0x548c('0xc'),function(){console[a198_0x548c('0xa')](a198_0x548c('0x1e')+_0x473632[a198_0x548c('0x1f')]);_0x2ef638[a198_0x548c('0x20')](a198_0x548c('0x21')+_0x473632[a198_0x548c('0x1f')],function(_0x18d8c6,_0x303778){_0x2ef638['end']();if(_0x18d8c6){}else{const _0x31cf59=a198_0x548c('0x22')+_0x473632['fileName']+a198_0x548c('0x23');_0x303778[a198_0x548c('0x24')](fs_1[a198_0x548c('0x25')]['createWriteStream'](_0x31cf59));_0x473632[a198_0x548c('0x26')]=0x1;_0x473632[a198_0x548c('0x27')]();console['log'](a198_0x548c('0x28')+_0x473632[a198_0x548c('0x1f')]);}});});_0x2ef638['on'](a198_0x548c('0x17'),function(_0x2f1ccd){_0x502502[a198_0x548c('0x11')]({'message':_0x2f1ccd});});_0x2ef638[a198_0x548c('0x18')]({'host':a198_0x548c('0x19'),'port':0x15,'user':'ipd','password':a198_0x548c('0x1a')});_0x502502[a198_0x548c('0x11')]({'data':_0x473632[a198_0x548c('0x1f')]});}else{_0x502502[a198_0x548c('0x11')]({'data':[]});}});};exports[a198_0x548c('0x29')]=(_0x58b866,_0x5c1cea)=>{exports[a198_0x548c('0x1c')][a198_0x548c('0x12')]['reportFiles']['findOne']({'where':{'status':0x1}})['then'](_0x565763=>{if(_0x565763){const _0x5bef10=a198_0x548c('0x22')+_0x565763[a198_0x548c('0x1f')]+a198_0x548c('0x23');fs_1[a198_0x548c('0x25')][a198_0x548c('0x2a')](_0x5bef10,a198_0x548c('0x2b'),function(_0x2fa7c7,_0x66e150){if(_0x2fa7c7){_0x565763[a198_0x548c('0x26')]=null;}else{try{const _0xc075c2=JSON[a198_0x548c('0x2c')](_0x66e150);for(const _0x36f3ce of _0xc075c2[a198_0x548c('0x2d')][0x0]['CountingInfo']){const _0x5ebfbe=_0x36f3ce['In'];const _0x1c1175=_0x36f3ce[a198_0x548c('0x2e')];const _0x3068d5=Date[a198_0x548c('0x2c')](_0x36f3ce[a198_0x548c('0x2f')]);if(_0x5ebfbe>0x0){exports['sequelize'][a198_0x548c('0x12')][a198_0x548c('0x30')][a198_0x548c('0x31')]({'reportFileId':_0x565763['id'],'amount':_0x5ebfbe,'countingDate':_0x3068d5});}if(_0x1c1175>0x0){exports[a198_0x548c('0x1c')][a198_0x548c('0x12')][a198_0x548c('0x30')][a198_0x548c('0x31')]({'reportFileId':_0x565763['id'],'amount':_0x1c1175*-0x1,'countingDate':_0x3068d5});}}_0x565763['status']=0x2;}catch(_0x467ea8){_0x565763[a198_0x548c('0x26')]=null;}}_0x565763['save']();});_0x5c1cea[a198_0x548c('0x11')]({'data':_0x565763[a198_0x548c('0x1f')]});}else{_0x5c1cea[a198_0x548c('0x11')]({'data':[]});}});};exports[a198_0x548c('0x32')]=(_0x2c5e46,_0x3ddc8d)=>{exports[a198_0x548c('0x1c')][a198_0x548c('0x12')][a198_0x548c('0x30')][a198_0x548c('0x33')]({'where':{'amount':{[exports[a198_0x548c('0x1c')]['Op']['gt']]:0x0}},'order':[[a198_0x548c('0x34'),a198_0x548c('0x35')]]})['then'](_0x5da3d8=>{_0x3ddc8d[a198_0x548c('0x11')]({'data':_0x5da3d8});});};exports[a198_0x548c('0x36')]=(_0x3ba9b8,_0x201a9c)=>{const _0x6145c5=_0x3ba9b8['query']['month'];const _0x53ea93=_0x3ba9b8[a198_0x548c('0x37')][a198_0x548c('0x38')];const _0x34b165=_0x3ba9b8[a198_0x548c('0x37')][a198_0x548c('0x39')];exports[a198_0x548c('0x1c')][a198_0x548c('0x12')][a198_0x548c('0x30')][a198_0x548c('0x33')]({'attributes':['countingDate',[exports[a198_0x548c('0x1c')]['fn'](a198_0x548c('0x3a'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')]('amount')),a198_0x548c('0x3c')]],'where':{'countingDate':{[exports['sequelize']['Op'][a198_0x548c('0x3d')]]:_0x53ea93,[exports[a198_0x548c('0x1c')]['Op']['lt']]:_0x34b165},'amount':_0x3ba9b8[a198_0x548c('0x3e')][a198_0x548c('0x3f')]=='in'?{[exports[a198_0x548c('0x1c')]['Op']['gt']]:0x0}:{[exports[a198_0x548c('0x1c')]['Op']['lt']]:0x0}},'group':[exports[a198_0x548c('0x1c')][a198_0x548c('0x40')](a198_0x548c('0x41'))],'order':[[a198_0x548c('0x34'),a198_0x548c('0x35')]]})[a198_0x548c('0x42')](_0x1d47dd=>{_0x201a9c[a198_0x548c('0x11')]({'data':_0x1d47dd});});};exports[a198_0x548c('0x43')]=(_0xd3a7ad,_0x47d43d)=>{const _0x37e7e9=_0xd3a7ad[a198_0x548c('0x37')][a198_0x548c('0x44')];const _0x3424b6=_0xd3a7ad[a198_0x548c('0x37')][a198_0x548c('0x38')];const _0x2be26e=_0xd3a7ad[a198_0x548c('0x37')][a198_0x548c('0x39')];exports[a198_0x548c('0x1c')][a198_0x548c('0x12')][a198_0x548c('0x30')][a198_0x548c('0x33')]({'attributes':[a198_0x548c('0x34'),[exports[a198_0x548c('0x1c')]['fn'](a198_0x548c('0x45'),exports[a198_0x548c('0x1c')]['col'](a198_0x548c('0x34')),a198_0x548c('0x46')),'countingDateShort'],[exports[a198_0x548c('0x1c')]['fn'](a198_0x548c('0x3a'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')](a198_0x548c('0x47'))),'total']],'where':{'countingDate':{[exports[a198_0x548c('0x1c')]['Op'][a198_0x548c('0x3d')]]:_0x3424b6,[exports[a198_0x548c('0x1c')]['Op']['lt']]:_0x2be26e},'amount':_0xd3a7ad[a198_0x548c('0x3e')]['direction']=='in'?{[exports[a198_0x548c('0x1c')]['Op']['gt']]:0x0}:{[exports[a198_0x548c('0x1c')]['Op']['lt']]:0x0}},'group':[exports[a198_0x548c('0x1c')]['fn'](a198_0x548c('0x48'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')](a198_0x548c('0x34'))),exports['sequelize']['fn'](a198_0x548c('0x49'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')](a198_0x548c('0x34'))),exports['sequelize']['fn'](a198_0x548c('0x4a'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')](a198_0x548c('0x34'))),exports[a198_0x548c('0x1c')]['fn'](a198_0x548c('0x4b'),exports[a198_0x548c('0x1c')][a198_0x548c('0x3b')]('countingDate'))],'order':[[a198_0x548c('0x34'),a198_0x548c('0x35')]]})['then'](_0x2a7052=>{_0x47d43d[a198_0x548c('0x11')]({'data':_0x2a7052});});};exports[a198_0x548c('0x4c')]=(_0x469d5f,_0x188383,_0x1ac9ca)=>{const _0x1383ce=_0x469d5f['user'][a198_0x548c('0x4d')][a198_0x548c('0x4e')](_0x1383ce=>_0x1383ce[a198_0x548c('0x4f')]===a198_0x548c('0x50'));fbgraph_1[a198_0x548c('0x25')][a198_0x548c('0x51')](_0x1383ce['accessToken']);fbgraph_1[a198_0x548c('0x25')][a198_0x548c('0x20')](_0x469d5f['user']['facebook']+a198_0x548c('0x52'),(_0x16fd29,_0x488ca3)=>{if(_0x16fd29){return _0x1ac9ca(_0x16fd29);}_0x188383[a198_0x548c('0x6')](a198_0x548c('0x53'),{'title':a198_0x548c('0x54'),'profile':_0x488ca3});});};