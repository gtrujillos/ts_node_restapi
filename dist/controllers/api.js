var a198_0x2594=['Downloaded:\x20','processFtp','readFile','utf8','parse','Data','CountingInfo','Out','EndTime','passes','create','getPassCounting','findAll','countingDate','getPassCountingByDay','query','month','endDate','sum','col','amount','total','params','direction','ASC','getPassCountingByHour','startDate','DATE_FORMAT','%Y-%m-%d\x20%H:00','countingDateShort','gte','HOUR','DAY','MONTH','YEAR','getFacebook','user','tokens','find','facebook','accessToken','get','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','fbgraph','ftp','sequelize','setSequelize','getApi','render','API\x20Examples','syncFtp','log','connecting','default','list','colombia','Downloading:\x20','name','json','reportFiles','findOrCreate','push','error','connect','ftp.vivotek.com','ipd','models','findOne','then','connected:','fileName','colombia/','end','media/','.txt','pipe','createWriteStream','status','save'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(a198_0x2594,0x81));var a198_0x89c3=function(_0x567663,_0x10766c){_0x567663=_0x567663-0x0;var _0x505580=a198_0x2594[_0x567663];return _0x505580;};'use strict';var __importDefault=this&&this[a198_0x89c3('0x0')]||function(_0x525efc){return _0x525efc&&_0x525efc[a198_0x89c3('0x1')]?_0x525efc:{'default':_0x525efc};};Object[a198_0x89c3('0x2')](exports,a198_0x89c3('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a198_0x89c3('0x3')));const ftp_1=__importDefault(require(a198_0x89c3('0x4')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x1e6768){exports[a198_0x89c3('0x5')]=_0x1e6768;}exports[a198_0x89c3('0x6')]=setSequelize;exports[a198_0x89c3('0x7')]=(_0x536032,_0x3d5277)=>{_0x3d5277[a198_0x89c3('0x8')]('api/index',{'title':a198_0x89c3('0x9')});};exports[a198_0x89c3('0xa')]=(_0x3418a3,_0x2d15aa)=>{console[a198_0x89c3('0xb')](a198_0x89c3('0xc'));const _0x39cc90=[];const _0x5e7a86=new ftp_1[(a198_0x89c3('0xd'))]();_0x5e7a86['on']('ready',function(){console[a198_0x89c3('0xb')]('connected');_0x5e7a86[a198_0x89c3('0xe')](a198_0x89c3('0xf'),![],function(_0x41e24d,_0x37d401){if(_0x41e24d){}else{for(const _0x4fb317 of _0x37d401){console[a198_0x89c3('0xb')](a198_0x89c3('0x10')+_0x4fb317[a198_0x89c3('0x11')]);if(_0x4fb317[a198_0x89c3('0x11')]['endsWith'](a198_0x89c3('0x12'))){exports[a198_0x89c3('0x5')]['models'][a198_0x89c3('0x13')][a198_0x89c3('0x14')]({'where':{'fileName':_0x4fb317['name']}})['spread']((_0x236ed3,_0x4e18b0)=>{if(_0x4e18b0){console[a198_0x89c3('0xb')](_0x4fb317[a198_0x89c3('0x11')]);_0x39cc90[a198_0x89c3('0x15')](_0x236ed3);}});}}}_0x2d15aa[a198_0x89c3('0x12')]({'data':_0x39cc90});});});_0x5e7a86['on'](a198_0x89c3('0x16'),function(_0x4b4e48){_0x2d15aa[a198_0x89c3('0x12')]({'message':_0x4b4e48});});_0x5e7a86[a198_0x89c3('0x17')]({'host':a198_0x89c3('0x18'),'port':0x15,'user':a198_0x89c3('0x19'),'password':a198_0x89c3('0x19')});};exports['downloadFtp']=(_0x185b24,_0x4b55c5)=>{exports[a198_0x89c3('0x5')][a198_0x89c3('0x1a')][a198_0x89c3('0x13')][a198_0x89c3('0x1b')]({'where':{'status':null}})[a198_0x89c3('0x1c')](_0x303094=>{if(_0x303094){const _0x355e1e=new ftp_1[(a198_0x89c3('0xd'))]();_0x355e1e['on']('ready',function(){console[a198_0x89c3('0xb')](a198_0x89c3('0x1d')+_0x303094[a198_0x89c3('0x1e')]);_0x355e1e['get'](a198_0x89c3('0x1f')+_0x303094[a198_0x89c3('0x1e')],function(_0x43ec8d,_0x27e8c7){_0x355e1e[a198_0x89c3('0x20')]();if(_0x43ec8d){}else{const _0x455c2a=a198_0x89c3('0x21')+_0x303094[a198_0x89c3('0x1e')]+a198_0x89c3('0x22');_0x27e8c7[a198_0x89c3('0x23')](fs_1[a198_0x89c3('0xd')][a198_0x89c3('0x24')](_0x455c2a));_0x303094[a198_0x89c3('0x25')]=0x1;_0x303094[a198_0x89c3('0x26')]();console[a198_0x89c3('0xb')](a198_0x89c3('0x27')+_0x303094[a198_0x89c3('0x1e')]);}});});_0x355e1e['on'](a198_0x89c3('0x16'),function(_0x34ac5d){_0x4b55c5['json']({'message':_0x34ac5d});});_0x355e1e[a198_0x89c3('0x17')]({'host':a198_0x89c3('0x18'),'port':0x15,'user':a198_0x89c3('0x19'),'password':a198_0x89c3('0x19')});_0x4b55c5[a198_0x89c3('0x12')]({'data':_0x303094[a198_0x89c3('0x1e')]});}else{_0x4b55c5[a198_0x89c3('0x12')]({'data':[]});}});};exports[a198_0x89c3('0x28')]=(_0x574a17,_0x15e111)=>{exports[a198_0x89c3('0x5')]['models']['reportFiles'][a198_0x89c3('0x1b')]({'where':{'status':0x1}})['then'](_0xf1ac30=>{if(_0xf1ac30){const _0x19da78=a198_0x89c3('0x21')+_0xf1ac30[a198_0x89c3('0x1e')]+a198_0x89c3('0x22');fs_1[a198_0x89c3('0xd')][a198_0x89c3('0x29')](_0x19da78,a198_0x89c3('0x2a'),function(_0x528476,_0x59ffc0){if(_0x528476){_0xf1ac30['status']=null;}else{try{const _0x552ff3=JSON[a198_0x89c3('0x2b')](_0x59ffc0);for(const _0x4ba0b5 of _0x552ff3[a198_0x89c3('0x2c')][0x0][a198_0x89c3('0x2d')]){const _0x1522c1=_0x4ba0b5['In'];const _0x5262a6=_0x4ba0b5[a198_0x89c3('0x2e')];const _0x416ffb=Date['parse'](_0x4ba0b5[a198_0x89c3('0x2f')]);if(_0x1522c1>0x0){exports[a198_0x89c3('0x5')][a198_0x89c3('0x1a')][a198_0x89c3('0x30')]['create']({'reportFileId':_0xf1ac30['id'],'amount':_0x1522c1,'countingDate':_0x416ffb});}if(_0x5262a6>0x0){exports[a198_0x89c3('0x5')]['models'][a198_0x89c3('0x30')][a198_0x89c3('0x31')]({'reportFileId':_0xf1ac30['id'],'amount':_0x5262a6*-0x1,'countingDate':_0x416ffb});}}_0xf1ac30[a198_0x89c3('0x25')]=0x2;}catch(_0x273d94){_0xf1ac30[a198_0x89c3('0x25')]=null;}}_0xf1ac30['save']();});_0x15e111['json']({'data':_0xf1ac30['fileName']});}else{_0x15e111[a198_0x89c3('0x12')]({'data':[]});}});};exports[a198_0x89c3('0x32')]=(_0x4cedc5,_0x1190c7)=>{exports['sequelize'][a198_0x89c3('0x1a')]['passes'][a198_0x89c3('0x33')]({'where':{'amount':{[exports[a198_0x89c3('0x5')]['Op']['gt']]:0x0}},'order':[[a198_0x89c3('0x34'),'ASC']]})[a198_0x89c3('0x1c')](_0x332717=>{_0x1190c7[a198_0x89c3('0x12')]({'data':_0x332717});});};exports[a198_0x89c3('0x35')]=(_0x355193,_0x1317df)=>{const _0x2340c1=_0x355193[a198_0x89c3('0x36')][a198_0x89c3('0x37')];const _0x1ea458=_0x355193[a198_0x89c3('0x36')]['startDate'];const _0x2820ab=_0x355193[a198_0x89c3('0x36')][a198_0x89c3('0x38')];exports[a198_0x89c3('0x5')][a198_0x89c3('0x1a')][a198_0x89c3('0x30')][a198_0x89c3('0x33')]({'attributes':[a198_0x89c3('0x34'),[exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x39'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')](a198_0x89c3('0x3b'))),a198_0x89c3('0x3c')]],'where':{'countingDate':{[exports[a198_0x89c3('0x5')]['Op']['gte']]:_0x1ea458,[exports[a198_0x89c3('0x5')]['Op']['lt']]:_0x2820ab},'amount':_0x355193[a198_0x89c3('0x3d')][a198_0x89c3('0x3e')]=='in'?{[exports[a198_0x89c3('0x5')]['Op']['gt']]:0x0}:{[exports[a198_0x89c3('0x5')]['Op']['lt']]:0x0}},'group':[exports[a198_0x89c3('0x5')]['literal']('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a198_0x89c3('0x34'),a198_0x89c3('0x3f')]]})['then'](_0x537f3d=>{_0x1317df[a198_0x89c3('0x12')]({'data':_0x537f3d});});};exports[a198_0x89c3('0x40')]=(_0x25dca1,_0x2eee32)=>{const _0x4904c6=_0x25dca1[a198_0x89c3('0x36')][a198_0x89c3('0x37')];const _0x58b3c3=_0x25dca1['query'][a198_0x89c3('0x41')];const _0x20952a=_0x25dca1[a198_0x89c3('0x36')]['endDate'];exports[a198_0x89c3('0x5')][a198_0x89c3('0x1a')]['passes'][a198_0x89c3('0x33')]({'attributes':['countingDate',[exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x42'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')]('countingDate'),a198_0x89c3('0x43')),a198_0x89c3('0x44')],[exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x39'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')](a198_0x89c3('0x3b'))),'total']],'where':{'countingDate':{[exports[a198_0x89c3('0x5')]['Op'][a198_0x89c3('0x45')]]:_0x58b3c3,[exports[a198_0x89c3('0x5')]['Op']['lt']]:_0x20952a},'amount':_0x25dca1[a198_0x89c3('0x3d')][a198_0x89c3('0x3e')]=='in'?{[exports[a198_0x89c3('0x5')]['Op']['gt']]:0x0}:{[exports[a198_0x89c3('0x5')]['Op']['lt']]:0x0}},'group':[exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x46'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')](a198_0x89c3('0x34'))),exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x47'),exports[a198_0x89c3('0x5')]['col'](a198_0x89c3('0x34'))),exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x48'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')](a198_0x89c3('0x34'))),exports[a198_0x89c3('0x5')]['fn'](a198_0x89c3('0x49'),exports[a198_0x89c3('0x5')][a198_0x89c3('0x3a')](a198_0x89c3('0x34')))],'order':[[a198_0x89c3('0x34'),'ASC']]})[a198_0x89c3('0x1c')](_0x49d1be=>{_0x2eee32[a198_0x89c3('0x12')]({'data':_0x49d1be});});};exports[a198_0x89c3('0x4a')]=(_0xd03537,_0x4f5cf5,_0x49e55a)=>{const _0x2ca662=_0xd03537[a198_0x89c3('0x4b')][a198_0x89c3('0x4c')][a198_0x89c3('0x4d')](_0x2ca662=>_0x2ca662['kind']===a198_0x89c3('0x4e'));fbgraph_1[a198_0x89c3('0xd')]['setAccessToken'](_0x2ca662[a198_0x89c3('0x4f')]);fbgraph_1[a198_0x89c3('0xd')][a198_0x89c3('0x50')](_0xd03537[a198_0x89c3('0x4b')][a198_0x89c3('0x4e')]+a198_0x89c3('0x51'),(_0x3909d6,_0x38cfad)=>{if(_0x3909d6){return _0x49e55a(_0x3909d6);}_0x4f5cf5[a198_0x89c3('0x8')](a198_0x89c3('0x52'),{'title':a198_0x89c3('0x53'),'profile':_0x38cfad});});};