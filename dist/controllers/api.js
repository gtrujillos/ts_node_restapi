var a92_0x3841=['sum','col','amount','total','gte','direction','literal','ASC','getPassCountingByHour','DATE_FORMAT','%Y-%m-%d\x20%H:00','countingDateShort','params','HOUR','DAY','MONTH','YEAR','getFacebook','tokens','kind','setAccessToken','accessToken','user','facebook','__esModule','defineProperty','ftp','sequelize','getApi','API\x20Examples','log','connecting','default','connected','list','colombia','Downloading:\x20','name','endsWith','json','models','reportFiles','findOrCreate','spread','error','connect','ipd','downloadFtp','findOne','ready','connected:','fileName','get','end','media/','.txt','pipe','status','save','Downloaded:\x20','ftp.vivotek.com','processFtp','then','readFile','utf8','parse','Data','Out','EndTime','passes','create','getPassCounting','findAll','countingDate','getPassCountingByDay','query','startDate','endDate'];(function(_0x2f184b,_0x150adb){var _0x66a54d=function(_0x51fe1d){while(--_0x51fe1d){_0x2f184b['push'](_0x2f184b['shift']());}};_0x66a54d(++_0x150adb);}(a92_0x3841,0x1ec));var a92_0x4c28=function(_0x5c31df,_0x2cef72){_0x5c31df=_0x5c31df-0x0;var _0x219159=a92_0x3841[_0x5c31df];return _0x219159;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0xd3ecb){return _0xd3ecb&&_0xd3ecb[a92_0x4c28('0x0')]?_0xd3ecb:{'default':_0xd3ecb};};Object[a92_0x4c28('0x1')](exports,'__esModule',{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a92_0x4c28('0x2')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x5e0996){exports[a92_0x4c28('0x3')]=_0x5e0996;}exports['setSequelize']=setSequelize;exports[a92_0x4c28('0x4')]=(_0x15e66e,_0x40ef59)=>{_0x40ef59['render']('api/index',{'title':a92_0x4c28('0x5')});};exports['syncFtp']=(_0x2eb686,_0x427d25)=>{console[a92_0x4c28('0x6')](a92_0x4c28('0x7'));const _0x380258=[];const _0x6c4807=new ftp_1[(a92_0x4c28('0x8'))]();_0x6c4807['on']('ready',function(){console[a92_0x4c28('0x6')](a92_0x4c28('0x9'));_0x6c4807[a92_0x4c28('0xa')](a92_0x4c28('0xb'),![],function(_0x462347,_0x2e6024){if(_0x462347){}else{for(const _0x60e46c of _0x2e6024){console['log'](a92_0x4c28('0xc')+_0x60e46c[a92_0x4c28('0xd')]);if(_0x60e46c['name'][a92_0x4c28('0xe')](a92_0x4c28('0xf'))){exports[a92_0x4c28('0x3')][a92_0x4c28('0x10')][a92_0x4c28('0x11')][a92_0x4c28('0x12')]({'where':{'fileName':_0x60e46c[a92_0x4c28('0xd')]}})[a92_0x4c28('0x13')]((_0x592427,_0xf93f95)=>{if(_0xf93f95){console['log'](_0x60e46c[a92_0x4c28('0xd')]);_0x380258['push'](_0x592427);}});}}}_0x427d25[a92_0x4c28('0xf')]({'data':_0x380258});});});_0x6c4807['on'](a92_0x4c28('0x14'),function(_0x1ba4f1){_0x427d25[a92_0x4c28('0xf')]({'message':_0x1ba4f1});});_0x6c4807[a92_0x4c28('0x15')]({'host':'ftp.vivotek.com','port':0x15,'user':a92_0x4c28('0x16'),'password':a92_0x4c28('0x16')});};exports[a92_0x4c28('0x17')]=(_0x12c139,_0x4d49bd)=>{exports[a92_0x4c28('0x3')]['models'][a92_0x4c28('0x11')][a92_0x4c28('0x18')]({'where':{'status':null}})['then'](_0x5be46b=>{if(_0x5be46b){const _0x1695ee=new ftp_1[(a92_0x4c28('0x8'))]();_0x1695ee['on'](a92_0x4c28('0x19'),function(){console[a92_0x4c28('0x6')](a92_0x4c28('0x1a')+_0x5be46b[a92_0x4c28('0x1b')]);_0x1695ee[a92_0x4c28('0x1c')]('colombia/'+_0x5be46b['fileName'],function(_0x21bbd4,_0x5283e5){_0x1695ee[a92_0x4c28('0x1d')]();if(_0x21bbd4){}else{const _0x2208ce=a92_0x4c28('0x1e')+_0x5be46b[a92_0x4c28('0x1b')]+a92_0x4c28('0x1f');_0x5283e5[a92_0x4c28('0x20')](fs_1[a92_0x4c28('0x8')]['createWriteStream'](_0x2208ce));_0x5be46b[a92_0x4c28('0x21')]=0x1;_0x5be46b[a92_0x4c28('0x22')]();console[a92_0x4c28('0x6')](a92_0x4c28('0x23')+_0x5be46b[a92_0x4c28('0x1b')]);}});});_0x1695ee['on']('error',function(_0x347e4d){_0x4d49bd[a92_0x4c28('0xf')]({'message':_0x347e4d});});_0x1695ee[a92_0x4c28('0x15')]({'host':a92_0x4c28('0x24'),'port':0x15,'user':'ipd','password':a92_0x4c28('0x16')});_0x4d49bd[a92_0x4c28('0xf')]({'data':_0x5be46b['fileName']});}else{_0x4d49bd[a92_0x4c28('0xf')]({'data':[]});}});};exports[a92_0x4c28('0x25')]=(_0x173651,_0x46b832)=>{exports[a92_0x4c28('0x3')][a92_0x4c28('0x10')][a92_0x4c28('0x11')][a92_0x4c28('0x18')]({'where':{'status':0x1}})[a92_0x4c28('0x26')](_0x3e220a=>{if(_0x3e220a){const _0x5d3181=a92_0x4c28('0x1e')+_0x3e220a[a92_0x4c28('0x1b')]+a92_0x4c28('0x1f');fs_1[a92_0x4c28('0x8')][a92_0x4c28('0x27')](_0x5d3181,a92_0x4c28('0x28'),function(_0x43507c,_0x45fb54){if(_0x43507c){_0x3e220a[a92_0x4c28('0x21')]=null;}else{try{const _0x390dfa=JSON[a92_0x4c28('0x29')](_0x45fb54);for(const _0x4e1505 of _0x390dfa[a92_0x4c28('0x2a')][0x0]['CountingInfo']){const _0x31d815=_0x4e1505['In'];const _0x29ec66=_0x4e1505[a92_0x4c28('0x2b')];const _0x4f830d=Date['parse'](_0x4e1505[a92_0x4c28('0x2c')]);if(_0x31d815>0x0){exports[a92_0x4c28('0x3')][a92_0x4c28('0x10')][a92_0x4c28('0x2d')][a92_0x4c28('0x2e')]({'reportFileId':_0x3e220a['id'],'amount':_0x31d815,'countingDate':_0x4f830d});}if(_0x29ec66>0x0){exports['sequelize'][a92_0x4c28('0x10')]['passes'][a92_0x4c28('0x2e')]({'reportFileId':_0x3e220a['id'],'amount':_0x29ec66*-0x1,'countingDate':_0x4f830d});}}_0x3e220a[a92_0x4c28('0x21')]=0x2;}catch(_0x3eeaaf){_0x3e220a[a92_0x4c28('0x21')]=null;}}_0x3e220a[a92_0x4c28('0x22')]();});_0x46b832[a92_0x4c28('0xf')]({'data':_0x3e220a[a92_0x4c28('0x1b')]});}else{_0x46b832[a92_0x4c28('0xf')]({'data':[]});}});};exports[a92_0x4c28('0x2f')]=(_0x2cbfcd,_0x11cc18)=>{exports[a92_0x4c28('0x3')]['models'][a92_0x4c28('0x2d')][a92_0x4c28('0x30')]({'where':{'amount':{[exports[a92_0x4c28('0x3')]['Op']['gt']]:0x0}},'order':[[a92_0x4c28('0x31'),'ASC']]})[a92_0x4c28('0x26')](_0x551b52=>{_0x11cc18['json']({'data':_0x551b52});});};exports[a92_0x4c28('0x32')]=(_0x2040a2,_0x302344)=>{const _0x57823a=_0x2040a2[a92_0x4c28('0x33')]['month'];const _0x16c705=_0x2040a2[a92_0x4c28('0x33')][a92_0x4c28('0x34')];const _0x46c29c=_0x2040a2[a92_0x4c28('0x33')][a92_0x4c28('0x35')];exports['sequelize'][a92_0x4c28('0x10')][a92_0x4c28('0x2d')][a92_0x4c28('0x30')]({'attributes':['countingDate',[exports['sequelize']['fn'](a92_0x4c28('0x36'),exports[a92_0x4c28('0x3')][a92_0x4c28('0x37')](a92_0x4c28('0x38'))),a92_0x4c28('0x39')]],'where':{'countingDate':{[exports['sequelize']['Op'][a92_0x4c28('0x3a')]]:_0x16c705,[exports[a92_0x4c28('0x3')]['Op']['lt']]:_0x46c29c},'amount':_0x2040a2['params'][a92_0x4c28('0x3b')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports['sequelize'][a92_0x4c28('0x3c')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[['countingDate',a92_0x4c28('0x3d')]]})[a92_0x4c28('0x26')](_0x246066=>{_0x302344['json']({'data':_0x246066});});};exports[a92_0x4c28('0x3e')]=(_0x24bd64,_0x5c0d56)=>{const _0x5bac72=_0x24bd64[a92_0x4c28('0x33')]['month'];const _0x47a888=_0x24bd64[a92_0x4c28('0x33')]['startDate'];const _0x41ef0c=_0x24bd64[a92_0x4c28('0x33')][a92_0x4c28('0x35')];exports[a92_0x4c28('0x3')]['models'][a92_0x4c28('0x2d')][a92_0x4c28('0x30')]({'attributes':[a92_0x4c28('0x31'),[exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x3f'),exports[a92_0x4c28('0x3')]['col'](a92_0x4c28('0x31')),a92_0x4c28('0x40')),a92_0x4c28('0x41')],[exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x36'),exports[a92_0x4c28('0x3')][a92_0x4c28('0x37')](a92_0x4c28('0x38'))),a92_0x4c28('0x39')]],'where':{'countingDate':{[exports[a92_0x4c28('0x3')]['Op'][a92_0x4c28('0x3a')]]:_0x47a888,[exports[a92_0x4c28('0x3')]['Op']['lt']]:_0x41ef0c},'amount':_0x24bd64[a92_0x4c28('0x42')][a92_0x4c28('0x3b')]=='in'?{[exports[a92_0x4c28('0x3')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x43'),exports[a92_0x4c28('0x3')]['col']('countingDate')),exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x44'),exports[a92_0x4c28('0x3')][a92_0x4c28('0x37')](a92_0x4c28('0x31'))),exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x45'),exports[a92_0x4c28('0x3')]['col'](a92_0x4c28('0x31'))),exports[a92_0x4c28('0x3')]['fn'](a92_0x4c28('0x46'),exports[a92_0x4c28('0x3')][a92_0x4c28('0x37')](a92_0x4c28('0x31')))],'order':[[a92_0x4c28('0x31'),a92_0x4c28('0x3d')]]})[a92_0x4c28('0x26')](_0x46b450=>{_0x5c0d56[a92_0x4c28('0xf')]({'data':_0x46b450});});};exports[a92_0x4c28('0x47')]=(_0x45d7ef,_0x25e756,_0x3c1e16)=>{const _0x384a40=_0x45d7ef['user'][a92_0x4c28('0x48')]['find'](_0x384a40=>_0x384a40[a92_0x4c28('0x49')]==='facebook');fbgraph_1[a92_0x4c28('0x8')][a92_0x4c28('0x4a')](_0x384a40[a92_0x4c28('0x4b')]);fbgraph_1[a92_0x4c28('0x8')][a92_0x4c28('0x1c')](_0x45d7ef[a92_0x4c28('0x4c')][a92_0x4c28('0x4d')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x438eeb,_0x4df014)=>{if(_0x438eeb){return _0x3c1e16(_0x438eeb);}_0x25e756['render']('api/facebook',{'title':'Facebook\x20API','profile':_0x4df014});});};