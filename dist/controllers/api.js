var a198_0x12e4=['amount','total','gte','direction','literal','DATE_FORMAT','countingDateShort','params','HOUR','getFacebook','user','tokens','find','kind','facebook','setAccessToken','accessToken','api/facebook','__importDefault','__esModule','defineProperty','fbgraph','ftp','setSequelize','getApi','render','api/index','API\x20Examples','syncFtp','log','connecting','default','colombia','name','endsWith','sequelize','models','reportFiles','findOrCreate','spread','push','json','connect','ftp.vivotek.com','ipd','downloadFtp','findOne','then','connected:','fileName','get','end','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','error','processFtp','media/','parse','Data','CountingInfo','Out','create','passes','findAll','ASC','getPassCountingByDay','query','month','startDate','endDate','countingDate','sum','col'];(function(_0x3506b7,_0x5e89c5){var _0x431da6=function(_0x3169db){while(--_0x3169db){_0x3506b7['push'](_0x3506b7['shift']());}};_0x431da6(++_0x5e89c5);}(a198_0x12e4,0xf9));var a198_0x22a0=function(_0x3d4792,_0x4fcdec){_0x3d4792=_0x3d4792-0x0;var _0x1818d9=a198_0x12e4[_0x3d4792];return _0x1818d9;};'use strict';var __importDefault=this&&this[a198_0x22a0('0x0')]||function(_0x1a9372){return _0x1a9372&&_0x1a9372[a198_0x22a0('0x1')]?_0x1a9372:{'default':_0x1a9372};};Object[a198_0x22a0('0x2')](exports,'__esModule',{'value':!![]});const fbgraph_1=__importDefault(require(a198_0x22a0('0x3')));const ftp_1=__importDefault(require(a198_0x22a0('0x4')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x1199d3){exports['sequelize']=_0x1199d3;}exports[a198_0x22a0('0x5')]=setSequelize;exports[a198_0x22a0('0x6')]=(_0x3ab77c,_0x22cdd5)=>{_0x22cdd5[a198_0x22a0('0x7')](a198_0x22a0('0x8'),{'title':a198_0x22a0('0x9')});};exports[a198_0x22a0('0xa')]=(_0x3460f3,_0x247ed4)=>{console[a198_0x22a0('0xb')](a198_0x22a0('0xc'));const _0xb7913=[];const _0x3e6197=new ftp_1[(a198_0x22a0('0xd'))]();_0x3e6197['on']('ready',function(){console[a198_0x22a0('0xb')]('connected');_0x3e6197['list'](a198_0x22a0('0xe'),![],function(_0x52ea0a,_0x28cd3f){if(_0x52ea0a){}else{for(const _0x12fb92 of _0x28cd3f){console[a198_0x22a0('0xb')]('Downloading:\x20'+_0x12fb92[a198_0x22a0('0xf')]);if(_0x12fb92['name'][a198_0x22a0('0x10')]('json')){exports[a198_0x22a0('0x11')][a198_0x22a0('0x12')][a198_0x22a0('0x13')][a198_0x22a0('0x14')]({'where':{'fileName':_0x12fb92[a198_0x22a0('0xf')]}})[a198_0x22a0('0x15')]((_0x29468f,_0x3d4c76)=>{if(_0x3d4c76){console[a198_0x22a0('0xb')](_0x12fb92[a198_0x22a0('0xf')]);_0xb7913[a198_0x22a0('0x16')](_0x29468f);}});}}}_0x247ed4[a198_0x22a0('0x17')]({'data':_0xb7913});});});_0x3e6197['on']('error',function(_0x597ce7){_0x247ed4['json']({'message':_0x597ce7});});_0x3e6197[a198_0x22a0('0x18')]({'host':a198_0x22a0('0x19'),'port':0x15,'user':a198_0x22a0('0x1a'),'password':'ipd'});};exports[a198_0x22a0('0x1b')]=(_0x1f05cd,_0x1d9491)=>{exports[a198_0x22a0('0x11')][a198_0x22a0('0x12')][a198_0x22a0('0x13')][a198_0x22a0('0x1c')]({'where':{'status':null}})[a198_0x22a0('0x1d')](_0x4208ed=>{if(_0x4208ed){const _0x282874=new ftp_1[(a198_0x22a0('0xd'))]();_0x282874['on']('ready',function(){console['log'](a198_0x22a0('0x1e')+_0x4208ed[a198_0x22a0('0x1f')]);_0x282874[a198_0x22a0('0x20')]('colombia/'+_0x4208ed[a198_0x22a0('0x1f')],function(_0xe77f10,_0x19c9fa){_0x282874[a198_0x22a0('0x21')]();if(_0xe77f10){}else{const _0x46b82d='media/'+_0x4208ed[a198_0x22a0('0x1f')]+a198_0x22a0('0x22');_0x19c9fa[a198_0x22a0('0x23')](fs_1['default'][a198_0x22a0('0x24')](_0x46b82d));_0x4208ed[a198_0x22a0('0x25')]=0x1;_0x4208ed[a198_0x22a0('0x26')]();console['log'](a198_0x22a0('0x27')+_0x4208ed['fileName']);}});});_0x282874['on'](a198_0x22a0('0x28'),function(_0x78e19){_0x1d9491[a198_0x22a0('0x17')]({'message':_0x78e19});});_0x282874[a198_0x22a0('0x18')]({'host':a198_0x22a0('0x19'),'port':0x15,'user':a198_0x22a0('0x1a'),'password':a198_0x22a0('0x1a')});_0x1d9491[a198_0x22a0('0x17')]({'data':_0x4208ed[a198_0x22a0('0x1f')]});}else{_0x1d9491[a198_0x22a0('0x17')]({'data':[]});}});};exports[a198_0x22a0('0x29')]=(_0x5e399a,_0x18d48a)=>{exports[a198_0x22a0('0x11')][a198_0x22a0('0x12')][a198_0x22a0('0x13')][a198_0x22a0('0x1c')]({'where':{'status':0x1}})[a198_0x22a0('0x1d')](_0x2146f1=>{if(_0x2146f1){const _0x635ae4=a198_0x22a0('0x2a')+_0x2146f1[a198_0x22a0('0x1f')]+a198_0x22a0('0x22');fs_1[a198_0x22a0('0xd')]['readFile'](_0x635ae4,'utf8',function(_0x36bc2e,_0x2b88c4){if(_0x36bc2e){_0x2146f1[a198_0x22a0('0x25')]=null;}else{try{const _0x507093=JSON[a198_0x22a0('0x2b')](_0x2b88c4);for(const _0x2b36f3 of _0x507093[a198_0x22a0('0x2c')][0x0][a198_0x22a0('0x2d')]){const _0x53911e=_0x2b36f3['In'];const _0x5c9eda=_0x2b36f3[a198_0x22a0('0x2e')];const _0x189795=Date[a198_0x22a0('0x2b')](_0x2b36f3['EndTime']);if(_0x53911e>0x0){exports['sequelize']['models']['passes']['create']({'reportFileId':_0x2146f1['id'],'amount':_0x53911e,'countingDate':_0x189795});}if(_0x5c9eda>0x0){exports['sequelize']['models']['passes'][a198_0x22a0('0x2f')]({'reportFileId':_0x2146f1['id'],'amount':_0x5c9eda*-0x1,'countingDate':_0x189795});}}_0x2146f1['status']=0x2;}catch(_0x51506f){_0x2146f1['status']=null;}}_0x2146f1[a198_0x22a0('0x26')]();});_0x18d48a[a198_0x22a0('0x17')]({'data':_0x2146f1[a198_0x22a0('0x1f')]});}else{_0x18d48a[a198_0x22a0('0x17')]({'data':[]});}});};exports['getPassCounting']=(_0x5dd1a1,_0x3feeb8)=>{exports['sequelize'][a198_0x22a0('0x12')][a198_0x22a0('0x30')][a198_0x22a0('0x31')]({'where':{'amount':{[exports[a198_0x22a0('0x11')]['Op']['gt']]:0x0}},'order':[['countingDate',a198_0x22a0('0x32')]]})[a198_0x22a0('0x1d')](_0x8bce26=>{_0x3feeb8[a198_0x22a0('0x17')]({'data':_0x8bce26});});};exports[a198_0x22a0('0x33')]=(_0x2d70db,_0x5a8d67)=>{const _0x16349c=_0x2d70db[a198_0x22a0('0x34')][a198_0x22a0('0x35')];const _0x133cfd=_0x2d70db['query'][a198_0x22a0('0x36')];const _0x515e4e=_0x2d70db['query'][a198_0x22a0('0x37')];exports[a198_0x22a0('0x11')][a198_0x22a0('0x12')][a198_0x22a0('0x30')]['findAll']({'attributes':[a198_0x22a0('0x38'),[exports[a198_0x22a0('0x11')]['fn'](a198_0x22a0('0x39'),exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')](a198_0x22a0('0x3b'))),a198_0x22a0('0x3c')]],'where':{'countingDate':{[exports[a198_0x22a0('0x11')]['Op'][a198_0x22a0('0x3d')]]:_0x133cfd,[exports['sequelize']['Op']['lt']]:_0x515e4e},'amount':_0x2d70db['params'][a198_0x22a0('0x3e')]=='in'?{[exports[a198_0x22a0('0x11')]['Op']['gt']]:0x0}:{[exports[a198_0x22a0('0x11')]['Op']['lt']]:0x0}},'group':[exports[a198_0x22a0('0x11')][a198_0x22a0('0x3f')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a198_0x22a0('0x38'),'ASC']]})[a198_0x22a0('0x1d')](_0x1a1551=>{_0x5a8d67['json']({'data':_0x1a1551});});};exports['getPassCountingByHour']=(_0x1fd8bd,_0x257637)=>{const _0x27a73f=_0x1fd8bd[a198_0x22a0('0x34')][a198_0x22a0('0x35')];const _0x12a5f2=_0x1fd8bd[a198_0x22a0('0x34')][a198_0x22a0('0x36')];const _0x4f8781=_0x1fd8bd[a198_0x22a0('0x34')][a198_0x22a0('0x37')];exports[a198_0x22a0('0x11')]['models']['passes'][a198_0x22a0('0x31')]({'attributes':[a198_0x22a0('0x38'),[exports[a198_0x22a0('0x11')]['fn'](a198_0x22a0('0x40'),exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')]('countingDate'),'%Y-%m-%d\x20%H:00'),a198_0x22a0('0x41')],[exports['sequelize']['fn'](a198_0x22a0('0x39'),exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')]('amount')),a198_0x22a0('0x3c')]],'where':{'countingDate':{[exports[a198_0x22a0('0x11')]['Op'][a198_0x22a0('0x3d')]]:_0x12a5f2,[exports[a198_0x22a0('0x11')]['Op']['lt']]:_0x4f8781},'amount':_0x1fd8bd[a198_0x22a0('0x42')][a198_0x22a0('0x3e')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a198_0x22a0('0x11')]['Op']['lt']]:0x0}},'group':[exports[a198_0x22a0('0x11')]['fn'](a198_0x22a0('0x43'),exports[a198_0x22a0('0x11')]['col'](a198_0x22a0('0x38'))),exports[a198_0x22a0('0x11')]['fn']('DAY',exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')]('countingDate')),exports[a198_0x22a0('0x11')]['fn']('MONTH',exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')](a198_0x22a0('0x38'))),exports[a198_0x22a0('0x11')]['fn']('YEAR',exports[a198_0x22a0('0x11')][a198_0x22a0('0x3a')](a198_0x22a0('0x38')))],'order':[[a198_0x22a0('0x38'),a198_0x22a0('0x32')]]})[a198_0x22a0('0x1d')](_0x750cd=>{_0x257637[a198_0x22a0('0x17')]({'data':_0x750cd});});};exports[a198_0x22a0('0x44')]=(_0x5d6266,_0x54ee7c,_0x5abe64)=>{const _0x6896a9=_0x5d6266[a198_0x22a0('0x45')][a198_0x22a0('0x46')][a198_0x22a0('0x47')](_0x6896a9=>_0x6896a9[a198_0x22a0('0x48')]===a198_0x22a0('0x49'));fbgraph_1[a198_0x22a0('0xd')][a198_0x22a0('0x4a')](_0x6896a9[a198_0x22a0('0x4b')]);fbgraph_1[a198_0x22a0('0xd')]['get'](_0x5d6266['user']['facebook']+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x5f04a5,_0x193ced)=>{if(_0x5f04a5){return _0x5abe64(_0x5f04a5);}_0x54ee7c['render'](a198_0x22a0('0x4c'),{'title':'Facebook\x20API','profile':_0x193ced});});};