var a92_0x55a1=['create','getPassCounting','findAll','countingDate','ASC','getPassCountingByDay','month','query','endDate','sum','col','amount','total','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','startDate','DATE_FORMAT','%Y-%m-%d\x20%H:00','countingDateShort','HOUR','DAY','MONTH','getFacebook','user','tokens','find','facebook','accessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','render','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','fbgraph','ftp','sequelize','api/index','syncFtp','log','connecting','default','ready','connected','list','colombia','Downloading:\x20','name','endsWith','json','models','findOrCreate','spread','push','connect','ftp.vivotek.com','ipd','downloadFtp','reportFiles','findOne','then','connected:','fileName','get','colombia/','end','.txt','createWriteStream','save','Downloaded:\x20','error','media/','readFile','utf8','status','parse','CountingInfo','passes'];(function(_0x13569f,_0x303dd7){var _0x40b9a0=function(_0x388065){while(--_0x388065){_0x13569f['push'](_0x13569f['shift']());}};_0x40b9a0(++_0x303dd7);}(a92_0x55a1,0x77));var a92_0x49f4=function(_0x488c28,_0x5e5bd3){_0x488c28=_0x488c28-0x0;var _0xee083a=a92_0x55a1[_0x488c28];return _0xee083a;};'use strict';var __importDefault=this&&this[a92_0x49f4('0x0')]||function(_0x362dfc){return _0x362dfc&&_0x362dfc[a92_0x49f4('0x1')]?_0x362dfc:{'default':_0x362dfc};};Object[a92_0x49f4('0x2')](exports,a92_0x49f4('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a92_0x49f4('0x3')));const ftp_1=__importDefault(require(a92_0x49f4('0x4')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x215709){exports[a92_0x49f4('0x5')]=_0x215709;}exports['setSequelize']=setSequelize;exports['getApi']=(_0x5de753,_0x1d24c5)=>{_0x1d24c5['render'](a92_0x49f4('0x6'),{'title':'API\x20Examples'});};exports[a92_0x49f4('0x7')]=(_0x23609b,_0x20ffbd)=>{console[a92_0x49f4('0x8')](a92_0x49f4('0x9'));const _0x261f53=[];const _0x48f2d7=new ftp_1[(a92_0x49f4('0xa'))]();_0x48f2d7['on'](a92_0x49f4('0xb'),function(){console[a92_0x49f4('0x8')](a92_0x49f4('0xc'));_0x48f2d7[a92_0x49f4('0xd')](a92_0x49f4('0xe'),![],function(_0x3c7f00,_0x3edd63){if(_0x3c7f00){}else{for(const _0x4c3985 of _0x3edd63){console[a92_0x49f4('0x8')](a92_0x49f4('0xf')+_0x4c3985[a92_0x49f4('0x10')]);if(_0x4c3985[a92_0x49f4('0x10')][a92_0x49f4('0x11')](a92_0x49f4('0x12'))){exports[a92_0x49f4('0x5')][a92_0x49f4('0x13')]['reportFiles'][a92_0x49f4('0x14')]({'where':{'fileName':_0x4c3985[a92_0x49f4('0x10')]}})[a92_0x49f4('0x15')]((_0x15e113,_0x5dc8f5)=>{if(_0x5dc8f5){console['log'](_0x4c3985[a92_0x49f4('0x10')]);_0x261f53[a92_0x49f4('0x16')](_0x15e113);}});}}}_0x20ffbd[a92_0x49f4('0x12')]({'data':_0x261f53});});});_0x48f2d7['on']('error',function(_0x5d4a57){_0x20ffbd[a92_0x49f4('0x12')]({'message':_0x5d4a57});});_0x48f2d7[a92_0x49f4('0x17')]({'host':a92_0x49f4('0x18'),'port':0x15,'user':a92_0x49f4('0x19'),'password':a92_0x49f4('0x19')});};exports[a92_0x49f4('0x1a')]=(_0x252f85,_0x44ac8f)=>{exports['sequelize']['models'][a92_0x49f4('0x1b')][a92_0x49f4('0x1c')]({'where':{'status':null}})[a92_0x49f4('0x1d')](_0x18bd2e=>{if(_0x18bd2e){const _0x213283=new ftp_1[(a92_0x49f4('0xa'))]();_0x213283['on'](a92_0x49f4('0xb'),function(){console[a92_0x49f4('0x8')](a92_0x49f4('0x1e')+_0x18bd2e[a92_0x49f4('0x1f')]);_0x213283[a92_0x49f4('0x20')](a92_0x49f4('0x21')+_0x18bd2e[a92_0x49f4('0x1f')],function(_0x49b905,_0x339437){_0x213283[a92_0x49f4('0x22')]();if(_0x49b905){}else{const _0x3c945d='media/'+_0x18bd2e[a92_0x49f4('0x1f')]+a92_0x49f4('0x23');_0x339437['pipe'](fs_1[a92_0x49f4('0xa')][a92_0x49f4('0x24')](_0x3c945d));_0x18bd2e['status']=0x1;_0x18bd2e[a92_0x49f4('0x25')]();console[a92_0x49f4('0x8')](a92_0x49f4('0x26')+_0x18bd2e[a92_0x49f4('0x1f')]);}});});_0x213283['on'](a92_0x49f4('0x27'),function(_0x3984c3){_0x44ac8f['json']({'message':_0x3984c3});});_0x213283[a92_0x49f4('0x17')]({'host':a92_0x49f4('0x18'),'port':0x15,'user':a92_0x49f4('0x19'),'password':a92_0x49f4('0x19')});_0x44ac8f['json']({'data':_0x18bd2e[a92_0x49f4('0x1f')]});}else{_0x44ac8f[a92_0x49f4('0x12')]({'data':[]});}});};exports['processFtp']=(_0x324521,_0x369c1d)=>{exports[a92_0x49f4('0x5')][a92_0x49f4('0x13')][a92_0x49f4('0x1b')][a92_0x49f4('0x1c')]({'where':{'status':0x1}})[a92_0x49f4('0x1d')](_0x25a279=>{if(_0x25a279){const _0x13d928=a92_0x49f4('0x28')+_0x25a279[a92_0x49f4('0x1f')]+a92_0x49f4('0x23');fs_1['default'][a92_0x49f4('0x29')](_0x13d928,a92_0x49f4('0x2a'),function(_0x2f5b6b,_0x233a93){if(_0x2f5b6b){_0x25a279[a92_0x49f4('0x2b')]=null;}else{try{const _0x1b13f6=JSON[a92_0x49f4('0x2c')](_0x233a93);for(const _0x252fd6 of _0x1b13f6['Data'][0x0][a92_0x49f4('0x2d')]){const _0x40303a=_0x252fd6['In'];const _0x17c034=_0x252fd6['Out'];const _0x131a37=Date[a92_0x49f4('0x2c')](_0x252fd6['EndTime']);if(_0x40303a>0x0){exports[a92_0x49f4('0x5')][a92_0x49f4('0x13')][a92_0x49f4('0x2e')][a92_0x49f4('0x2f')]({'reportFileId':_0x25a279['id'],'amount':_0x40303a,'countingDate':_0x131a37});}if(_0x17c034>0x0){exports[a92_0x49f4('0x5')][a92_0x49f4('0x13')]['passes']['create']({'reportFileId':_0x25a279['id'],'amount':_0x17c034*-0x1,'countingDate':_0x131a37});}}_0x25a279['status']=0x2;}catch(_0x1fb503){_0x25a279[a92_0x49f4('0x2b')]=null;}}_0x25a279[a92_0x49f4('0x25')]();});_0x369c1d['json']({'data':_0x25a279[a92_0x49f4('0x1f')]});}else{_0x369c1d[a92_0x49f4('0x12')]({'data':[]});}});};exports[a92_0x49f4('0x30')]=(_0x1a9b11,_0x22f736)=>{exports['sequelize']['models'][a92_0x49f4('0x2e')][a92_0x49f4('0x31')]({'where':{'amount':{[exports[a92_0x49f4('0x5')]['Op']['gt']]:0x0}},'order':[[a92_0x49f4('0x32'),a92_0x49f4('0x33')]]})[a92_0x49f4('0x1d')](_0x377f2e=>{_0x22f736[a92_0x49f4('0x12')]({'data':_0x377f2e});});};exports[a92_0x49f4('0x34')]=(_0x13ccd4,_0x40732c)=>{const _0x2996d1=_0x13ccd4['query'][a92_0x49f4('0x35')];const _0x4aa5c1=_0x13ccd4[a92_0x49f4('0x36')]['startDate'];const _0x515983=_0x13ccd4[a92_0x49f4('0x36')][a92_0x49f4('0x37')];exports['sequelize'][a92_0x49f4('0x13')][a92_0x49f4('0x2e')][a92_0x49f4('0x31')]({'attributes':['countingDate',[exports['sequelize']['fn'](a92_0x49f4('0x38'),exports[a92_0x49f4('0x5')][a92_0x49f4('0x39')](a92_0x49f4('0x3a'))),a92_0x49f4('0x3b')]],'where':{'countingDate':{[exports[a92_0x49f4('0x5')]['Op'][a92_0x49f4('0x3c')]]:_0x4aa5c1,[exports[a92_0x49f4('0x5')]['Op']['lt']]:_0x515983},'amount':_0x13ccd4[a92_0x49f4('0x3d')][a92_0x49f4('0x3e')]=='in'?{[exports[a92_0x49f4('0x5')]['Op']['gt']]:0x0}:{[exports[a92_0x49f4('0x5')]['Op']['lt']]:0x0}},'group':[exports[a92_0x49f4('0x5')][a92_0x49f4('0x3f')](a92_0x49f4('0x40'))],'order':[['countingDate',a92_0x49f4('0x33')]]})['then'](_0x34180d=>{_0x40732c['json']({'data':_0x34180d});});};exports[a92_0x49f4('0x41')]=(_0x73c3ca,_0x536d5d)=>{const _0x4c9d56=_0x73c3ca[a92_0x49f4('0x36')][a92_0x49f4('0x35')];const _0x58b5bb=_0x73c3ca[a92_0x49f4('0x36')][a92_0x49f4('0x42')];const _0x21ce94=_0x73c3ca['query'][a92_0x49f4('0x37')];exports[a92_0x49f4('0x5')][a92_0x49f4('0x13')]['passes'][a92_0x49f4('0x31')]({'attributes':[a92_0x49f4('0x32'),[exports['sequelize']['fn'](a92_0x49f4('0x43'),exports['sequelize'][a92_0x49f4('0x39')](a92_0x49f4('0x32')),a92_0x49f4('0x44')),a92_0x49f4('0x45')],[exports['sequelize']['fn'](a92_0x49f4('0x38'),exports[a92_0x49f4('0x5')][a92_0x49f4('0x39')](a92_0x49f4('0x3a'))),a92_0x49f4('0x3b')]],'where':{'countingDate':{[exports[a92_0x49f4('0x5')]['Op']['gte']]:_0x58b5bb,[exports[a92_0x49f4('0x5')]['Op']['lt']]:_0x21ce94},'amount':_0x73c3ca[a92_0x49f4('0x3d')][a92_0x49f4('0x3e')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a92_0x49f4('0x5')]['Op']['lt']]:0x0}},'group':[exports[a92_0x49f4('0x5')]['fn'](a92_0x49f4('0x46'),exports[a92_0x49f4('0x5')][a92_0x49f4('0x39')](a92_0x49f4('0x32'))),exports[a92_0x49f4('0x5')]['fn'](a92_0x49f4('0x47'),exports[a92_0x49f4('0x5')][a92_0x49f4('0x39')]('countingDate')),exports[a92_0x49f4('0x5')]['fn'](a92_0x49f4('0x48'),exports[a92_0x49f4('0x5')]['col'](a92_0x49f4('0x32'))),exports[a92_0x49f4('0x5')]['fn']('YEAR',exports[a92_0x49f4('0x5')]['col'](a92_0x49f4('0x32')))],'order':[[a92_0x49f4('0x32'),a92_0x49f4('0x33')]]})['then'](_0x567594=>{_0x536d5d[a92_0x49f4('0x12')]({'data':_0x567594});});};exports[a92_0x49f4('0x49')]=(_0x5fcfeb,_0x1af09d,_0x2b4f97)=>{const _0x20c78d=_0x5fcfeb[a92_0x49f4('0x4a')][a92_0x49f4('0x4b')][a92_0x49f4('0x4c')](_0x20c78d=>_0x20c78d['kind']===a92_0x49f4('0x4d'));fbgraph_1[a92_0x49f4('0xa')]['setAccessToken'](_0x20c78d[a92_0x49f4('0x4e')]);fbgraph_1[a92_0x49f4('0xa')][a92_0x49f4('0x20')](_0x5fcfeb[a92_0x49f4('0x4a')][a92_0x49f4('0x4d')]+a92_0x49f4('0x4f'),(_0x5fe150,_0x9bd4fb)=>{if(_0x5fe150){return _0x2b4f97(_0x5fe150);}_0x1af09d[a92_0x49f4('0x50')](a92_0x49f4('0x51'),{'title':a92_0x49f4('0x52'),'profile':_0x9bd4fb});});};