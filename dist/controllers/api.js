var a139_0x4d24=['api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','ftp','sequelize','setSequelize','render','api/index','syncFtp','log','connecting','ready','connected','list','colombia','name','endsWith','json','reportFiles','findOrCreate','spread','push','error','connect','ftp.vivotek.com','ipd','downloadFtp','models','findOne','then','connected:','fileName','get','colombia/','end','media/','.txt','pipe','default','status','save','processFtp','readFile','parse','Data','CountingInfo','Out','create','passes','findAll','countingDate','getPassCountingByDay','month','query','sum','col','amount','total','literal','ASC','getPassCountingByHour','startDate','endDate','DATE_FORMAT','%Y-%m-%d\x20%H:00','gte','direction','MONTH','YEAR','getFacebook','user','tokens','facebook','setAccessToken','accessToken'];(function(_0x4ce25a,_0x1a61d2){var _0xfe0f3d=function(_0x268b2d){while(--_0x268b2d){_0x4ce25a['push'](_0x4ce25a['shift']());}};_0xfe0f3d(++_0x1a61d2);}(a139_0x4d24,0x136));var a139_0x23dc=function(_0x5809a8,_0x20e36c){_0x5809a8=_0x5809a8-0x0;var _0x51005b=a139_0x4d24[_0x5809a8];return _0x51005b;};'use strict';var __importDefault=this&&this[a139_0x23dc('0x0')]||function(_0x2e402b){return _0x2e402b&&_0x2e402b[a139_0x23dc('0x1')]?_0x2e402b:{'default':_0x2e402b};};Object[a139_0x23dc('0x2')](exports,a139_0x23dc('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a139_0x23dc('0x3')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x40cc79){exports[a139_0x23dc('0x4')]=_0x40cc79;}exports[a139_0x23dc('0x5')]=setSequelize;exports['getApi']=(_0x5703d6,_0x34008a)=>{_0x34008a[a139_0x23dc('0x6')](a139_0x23dc('0x7'),{'title':'API\x20Examples'});};exports[a139_0x23dc('0x8')]=(_0x1fa419,_0x334678)=>{console[a139_0x23dc('0x9')](a139_0x23dc('0xa'));const _0x34e626=[];const _0x17f65b=new ftp_1['default']();_0x17f65b['on'](a139_0x23dc('0xb'),function(){console['log'](a139_0x23dc('0xc'));_0x17f65b[a139_0x23dc('0xd')](a139_0x23dc('0xe'),![],function(_0x4e459f,_0x33bf54){if(_0x4e459f){}else{for(const _0x10bab4 of _0x33bf54){console['log']('Downloading:\x20'+_0x10bab4[a139_0x23dc('0xf')]);if(_0x10bab4[a139_0x23dc('0xf')][a139_0x23dc('0x10')](a139_0x23dc('0x11'))){exports[a139_0x23dc('0x4')]['models'][a139_0x23dc('0x12')][a139_0x23dc('0x13')]({'where':{'fileName':_0x10bab4[a139_0x23dc('0xf')]}})[a139_0x23dc('0x14')]((_0x3e3eaa,_0x4809e6)=>{if(_0x4809e6){console['log'](_0x10bab4['name']);_0x34e626[a139_0x23dc('0x15')](_0x3e3eaa);}});}}}_0x334678['json']({'data':_0x34e626});});});_0x17f65b['on'](a139_0x23dc('0x16'),function(_0x36e3be){_0x334678[a139_0x23dc('0x11')]({'message':_0x36e3be});});_0x17f65b[a139_0x23dc('0x17')]({'host':a139_0x23dc('0x18'),'port':0x15,'user':'ipd','password':a139_0x23dc('0x19')});};exports[a139_0x23dc('0x1a')]=(_0x3f4dba,_0x4c3e69)=>{exports[a139_0x23dc('0x4')][a139_0x23dc('0x1b')][a139_0x23dc('0x12')][a139_0x23dc('0x1c')]({'where':{'status':null}})[a139_0x23dc('0x1d')](_0x1a0d46=>{if(_0x1a0d46){const _0x20b147=new ftp_1['default']();_0x20b147['on']('ready',function(){console[a139_0x23dc('0x9')](a139_0x23dc('0x1e')+_0x1a0d46[a139_0x23dc('0x1f')]);_0x20b147[a139_0x23dc('0x20')](a139_0x23dc('0x21')+_0x1a0d46['fileName'],function(_0x359755,_0x11d252){_0x20b147[a139_0x23dc('0x22')]();if(_0x359755){}else{const _0x50bce4=a139_0x23dc('0x23')+_0x1a0d46['fileName']+a139_0x23dc('0x24');_0x11d252[a139_0x23dc('0x25')](fs_1[a139_0x23dc('0x26')]['createWriteStream'](_0x50bce4));_0x1a0d46[a139_0x23dc('0x27')]=0x1;_0x1a0d46[a139_0x23dc('0x28')]();console[a139_0x23dc('0x9')]('Downloaded:\x20'+_0x1a0d46[a139_0x23dc('0x1f')]);}});});_0x20b147['on'](a139_0x23dc('0x16'),function(_0x5ca59c){_0x4c3e69[a139_0x23dc('0x11')]({'message':_0x5ca59c});});_0x20b147['connect']({'host':a139_0x23dc('0x18'),'port':0x15,'user':a139_0x23dc('0x19'),'password':a139_0x23dc('0x19')});_0x4c3e69['json']({'data':_0x1a0d46[a139_0x23dc('0x1f')]});}else{_0x4c3e69['json']({'data':[]});}});};exports[a139_0x23dc('0x29')]=(_0x1b67d1,_0x1279d7)=>{exports[a139_0x23dc('0x4')]['models']['reportFiles'][a139_0x23dc('0x1c')]({'where':{'status':0x1}})['then'](_0x4eaed8=>{if(_0x4eaed8){const _0x6b002f=a139_0x23dc('0x23')+_0x4eaed8[a139_0x23dc('0x1f')]+a139_0x23dc('0x24');fs_1[a139_0x23dc('0x26')][a139_0x23dc('0x2a')](_0x6b002f,'utf8',function(_0x485ed4,_0x338ccf){if(_0x485ed4){_0x4eaed8['status']=null;}else{try{const _0x32a2ad=JSON[a139_0x23dc('0x2b')](_0x338ccf);for(const _0x54f072 of _0x32a2ad[a139_0x23dc('0x2c')][0x0][a139_0x23dc('0x2d')]){const _0x24b4df=_0x54f072['In'];const _0x1648c3=_0x54f072[a139_0x23dc('0x2e')];const _0x1ccf75=Date[a139_0x23dc('0x2b')](_0x54f072['EndTime']);if(_0x24b4df>0x0){exports[a139_0x23dc('0x4')][a139_0x23dc('0x1b')]['passes'][a139_0x23dc('0x2f')]({'reportFileId':_0x4eaed8['id'],'amount':_0x24b4df,'countingDate':_0x1ccf75});}if(_0x1648c3>0x0){exports[a139_0x23dc('0x4')]['models'][a139_0x23dc('0x30')]['create']({'reportFileId':_0x4eaed8['id'],'amount':_0x1648c3*-0x1,'countingDate':_0x1ccf75});}}_0x4eaed8[a139_0x23dc('0x27')]=0x2;}catch(_0x2b5717){_0x4eaed8[a139_0x23dc('0x27')]=null;}}_0x4eaed8[a139_0x23dc('0x28')]();});_0x1279d7['json']({'data':_0x4eaed8[a139_0x23dc('0x1f')]});}else{_0x1279d7['json']({'data':[]});}});};exports['getPassCounting']=(_0x3bc924,_0x228bb8)=>{exports[a139_0x23dc('0x4')]['models']['passes'][a139_0x23dc('0x31')]({'where':{'amount':{[exports['sequelize']['Op']['gt']]:0x0}},'order':[[a139_0x23dc('0x32'),'ASC']]})['then'](_0x4225ea=>{_0x228bb8[a139_0x23dc('0x11')]({'data':_0x4225ea});});};exports[a139_0x23dc('0x33')]=(_0x254cad,_0xbc82a4)=>{const _0x197655=_0x254cad['query'][a139_0x23dc('0x34')];const _0x5a3ca0=_0x254cad['query']['startDate'];const _0x4f7c04=_0x254cad[a139_0x23dc('0x35')]['endDate'];exports[a139_0x23dc('0x4')]['models'][a139_0x23dc('0x30')][a139_0x23dc('0x31')]({'attributes':[a139_0x23dc('0x32'),[exports[a139_0x23dc('0x4')]['fn'](a139_0x23dc('0x36'),exports['sequelize'][a139_0x23dc('0x37')](a139_0x23dc('0x38'))),a139_0x23dc('0x39')]],'where':{'countingDate':{[exports['sequelize']['Op']['gte']]:_0x5a3ca0,[exports[a139_0x23dc('0x4')]['Op']['lt']]:_0x4f7c04},'amount':_0x254cad['params']['direction']=='in'?{[exports[a139_0x23dc('0x4')]['Op']['gt']]:0x0}:{[exports[a139_0x23dc('0x4')]['Op']['lt']]:0x0}},'group':[exports['sequelize'][a139_0x23dc('0x3a')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a139_0x23dc('0x32'),a139_0x23dc('0x3b')]]})[a139_0x23dc('0x1d')](_0x2e2fd1=>{_0xbc82a4[a139_0x23dc('0x11')]({'data':_0x2e2fd1});});};exports[a139_0x23dc('0x3c')]=(_0x531399,_0x2270f7)=>{const _0x59f4e2=_0x531399[a139_0x23dc('0x35')]['month'];const _0x454e98=_0x531399[a139_0x23dc('0x35')][a139_0x23dc('0x3d')];const _0x35ead0=_0x531399[a139_0x23dc('0x35')][a139_0x23dc('0x3e')];exports[a139_0x23dc('0x4')]['models'][a139_0x23dc('0x30')][a139_0x23dc('0x31')]({'attributes':[a139_0x23dc('0x32'),[exports[a139_0x23dc('0x4')]['fn'](a139_0x23dc('0x3f'),exports['sequelize'][a139_0x23dc('0x37')](a139_0x23dc('0x32')),a139_0x23dc('0x40')),'countingDateShort'],[exports[a139_0x23dc('0x4')]['fn'](a139_0x23dc('0x36'),exports[a139_0x23dc('0x4')][a139_0x23dc('0x37')]('amount')),a139_0x23dc('0x39')]],'where':{'countingDate':{[exports[a139_0x23dc('0x4')]['Op'][a139_0x23dc('0x41')]]:_0x454e98,[exports[a139_0x23dc('0x4')]['Op']['lt']]:_0x35ead0},'amount':_0x531399['params'][a139_0x23dc('0x42')]=='in'?{[exports[a139_0x23dc('0x4')]['Op']['gt']]:0x0}:{[exports[a139_0x23dc('0x4')]['Op']['lt']]:0x0}},'group':[exports[a139_0x23dc('0x4')]['fn']('HOUR',exports['sequelize']['col'](a139_0x23dc('0x32'))),exports[a139_0x23dc('0x4')]['fn']('DAY',exports[a139_0x23dc('0x4')][a139_0x23dc('0x37')](a139_0x23dc('0x32'))),exports[a139_0x23dc('0x4')]['fn'](a139_0x23dc('0x43'),exports[a139_0x23dc('0x4')][a139_0x23dc('0x37')](a139_0x23dc('0x32'))),exports[a139_0x23dc('0x4')]['fn'](a139_0x23dc('0x44'),exports['sequelize'][a139_0x23dc('0x37')](a139_0x23dc('0x32')))],'order':[[a139_0x23dc('0x32'),a139_0x23dc('0x3b')]]})[a139_0x23dc('0x1d')](_0x2bded5=>{_0x2270f7[a139_0x23dc('0x11')]({'data':_0x2bded5});});};exports[a139_0x23dc('0x45')]=(_0x1ad2b4,_0x5be5c7,_0x322dab)=>{const _0x361779=_0x1ad2b4[a139_0x23dc('0x46')][a139_0x23dc('0x47')]['find'](_0x361779=>_0x361779['kind']===a139_0x23dc('0x48'));fbgraph_1[a139_0x23dc('0x26')][a139_0x23dc('0x49')](_0x361779[a139_0x23dc('0x4a')]);fbgraph_1[a139_0x23dc('0x26')][a139_0x23dc('0x20')](_0x1ad2b4[a139_0x23dc('0x46')][a139_0x23dc('0x48')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x4a111d,_0x208730)=>{if(_0x4a111d){return _0x322dab(_0x4a111d);}_0x5be5c7[a139_0x23dc('0x6')](a139_0x23dc('0x4b'),{'title':a139_0x23dc('0x4c'),'profile':_0x208730});});};