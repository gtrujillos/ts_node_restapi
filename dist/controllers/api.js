var a288_0x2928=['literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','DATE_FORMAT','sum','HOUR','DAY','MONTH','YEAR','getFacebook','user','tokens','kind','facebook','setAccessToken','accessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','render','api/facebook','Facebook\x20API','__importDefault','fbgraph','ftp','sequelize','setSequelize','getApi','syncFtp','log','connecting','default','list','colombia','Downloading:\x20','name','endsWith','json','models','reportFiles','spread','push','connect','ftp.vivotek.com','ipd','findOne','then','connected:','fileName','get','colombia/','end','media/','.txt','pipe','createWriteStream','save','Downloaded:\x20','error','readFile','status','parse','Data','CountingInfo','Out','EndTime','passes','create','getPassCounting','findAll','countingDate','ASC','getPassCountingByDay','query','month','startDate','endDate','col','amount','total','gte','params','direction'];(function(_0x303ab5,_0x3b3ba2){var _0x3c5fd6=function(_0x503096){while(--_0x503096){_0x303ab5['push'](_0x303ab5['shift']());}};_0x3c5fd6(++_0x3b3ba2);}(a288_0x2928,0x65));var a288_0x599e=function(_0x4cbe00,_0x35d2c7){_0x4cbe00=_0x4cbe00-0x0;var _0x46f629=a288_0x2928[_0x4cbe00];return _0x46f629;};'use strict';var __importDefault=this&&this[a288_0x599e('0x0')]||function(_0xd99293){return _0xd99293&&_0xd99293['__esModule']?_0xd99293:{'default':_0xd99293};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const fbgraph_1=__importDefault(require(a288_0x599e('0x1')));const ftp_1=__importDefault(require(a288_0x599e('0x2')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x22e755){exports[a288_0x599e('0x3')]=_0x22e755;}exports[a288_0x599e('0x4')]=setSequelize;exports[a288_0x599e('0x5')]=(_0x5f3be5,_0x4f6ab8)=>{_0x4f6ab8['render']('api/index',{'title':'API\x20Examples'});};exports[a288_0x599e('0x6')]=(_0x2d81ad,_0x2af627)=>{console[a288_0x599e('0x7')](a288_0x599e('0x8'));const _0x38637e=[];const _0x2b94ae=new ftp_1[(a288_0x599e('0x9'))]();_0x2b94ae['on']('ready',function(){console['log']('connected');_0x2b94ae[a288_0x599e('0xa')](a288_0x599e('0xb'),![],function(_0x3326d2,_0x37756e){if(_0x3326d2){}else{for(const _0x5e5751 of _0x37756e){console[a288_0x599e('0x7')](a288_0x599e('0xc')+_0x5e5751['name']);if(_0x5e5751[a288_0x599e('0xd')][a288_0x599e('0xe')](a288_0x599e('0xf'))){exports[a288_0x599e('0x3')][a288_0x599e('0x10')][a288_0x599e('0x11')]['findOrCreate']({'where':{'fileName':_0x5e5751[a288_0x599e('0xd')]}})[a288_0x599e('0x12')]((_0x18cd02,_0x5049e0)=>{if(_0x5049e0){console['log'](_0x5e5751['name']);_0x38637e[a288_0x599e('0x13')](_0x18cd02);}});}}}_0x2af627[a288_0x599e('0xf')]({'data':_0x38637e});});});_0x2b94ae['on']('error',function(_0x3a39eb){_0x2af627['json']({'message':_0x3a39eb});});_0x2b94ae[a288_0x599e('0x14')]({'host':a288_0x599e('0x15'),'port':0x15,'user':a288_0x599e('0x16'),'password':a288_0x599e('0x16')});};exports['downloadFtp']=(_0x2d7c0f,_0x3cca11)=>{exports[a288_0x599e('0x3')][a288_0x599e('0x10')][a288_0x599e('0x11')][a288_0x599e('0x17')]({'where':{'status':null}})[a288_0x599e('0x18')](_0x25ce74=>{if(_0x25ce74){const _0x4dfdd8=new ftp_1[(a288_0x599e('0x9'))]();_0x4dfdd8['on']('ready',function(){console[a288_0x599e('0x7')](a288_0x599e('0x19')+_0x25ce74[a288_0x599e('0x1a')]);_0x4dfdd8[a288_0x599e('0x1b')](a288_0x599e('0x1c')+_0x25ce74[a288_0x599e('0x1a')],function(_0x214130,_0x34bb89){_0x4dfdd8[a288_0x599e('0x1d')]();if(_0x214130){}else{const _0x3a1c7c=a288_0x599e('0x1e')+_0x25ce74[a288_0x599e('0x1a')]+a288_0x599e('0x1f');_0x34bb89[a288_0x599e('0x20')](fs_1[a288_0x599e('0x9')][a288_0x599e('0x21')](_0x3a1c7c));_0x25ce74['status']=0x1;_0x25ce74[a288_0x599e('0x22')]();console['log'](a288_0x599e('0x23')+_0x25ce74[a288_0x599e('0x1a')]);}});});_0x4dfdd8['on'](a288_0x599e('0x24'),function(_0x5cbf4d){_0x3cca11[a288_0x599e('0xf')]({'message':_0x5cbf4d});});_0x4dfdd8['connect']({'host':'ftp.vivotek.com','port':0x15,'user':'ipd','password':a288_0x599e('0x16')});_0x3cca11[a288_0x599e('0xf')]({'data':_0x25ce74[a288_0x599e('0x1a')]});}else{_0x3cca11[a288_0x599e('0xf')]({'data':[]});}});};exports['processFtp']=(_0x5a6bb7,_0x382338)=>{exports[a288_0x599e('0x3')]['models'][a288_0x599e('0x11')][a288_0x599e('0x17')]({'where':{'status':0x1}})['then'](_0x315d04=>{if(_0x315d04){const _0x3e046f=a288_0x599e('0x1e')+_0x315d04[a288_0x599e('0x1a')]+a288_0x599e('0x1f');fs_1['default'][a288_0x599e('0x25')](_0x3e046f,'utf8',function(_0x52e67a,_0x4988e1){if(_0x52e67a){_0x315d04[a288_0x599e('0x26')]=null;}else{try{const _0x1a0407=JSON[a288_0x599e('0x27')](_0x4988e1);for(const _0x713e5 of _0x1a0407[a288_0x599e('0x28')][0x0][a288_0x599e('0x29')]){const _0x18f0f6=_0x713e5['In'];const _0x140200=_0x713e5[a288_0x599e('0x2a')];const _0x2e4c36=Date[a288_0x599e('0x27')](_0x713e5[a288_0x599e('0x2b')]);if(_0x18f0f6>0x0){exports[a288_0x599e('0x3')][a288_0x599e('0x10')][a288_0x599e('0x2c')][a288_0x599e('0x2d')]({'reportFileId':_0x315d04['id'],'amount':_0x18f0f6,'countingDate':_0x2e4c36});}if(_0x140200>0x0){exports[a288_0x599e('0x3')][a288_0x599e('0x10')][a288_0x599e('0x2c')][a288_0x599e('0x2d')]({'reportFileId':_0x315d04['id'],'amount':_0x140200*-0x1,'countingDate':_0x2e4c36});}}_0x315d04[a288_0x599e('0x26')]=0x2;}catch(_0x51ed09){_0x315d04['status']=null;}}_0x315d04[a288_0x599e('0x22')]();});_0x382338['json']({'data':_0x315d04[a288_0x599e('0x1a')]});}else{_0x382338[a288_0x599e('0xf')]({'data':[]});}});};exports[a288_0x599e('0x2e')]=(_0x2924fe,_0xe0d293)=>{exports[a288_0x599e('0x3')]['models'][a288_0x599e('0x2c')][a288_0x599e('0x2f')]({'where':{'amount':{[exports[a288_0x599e('0x3')]['Op']['gt']]:0x0}},'order':[[a288_0x599e('0x30'),a288_0x599e('0x31')]]})[a288_0x599e('0x18')](_0x18fa64=>{_0xe0d293['json']({'data':_0x18fa64});});};exports[a288_0x599e('0x32')]=(_0x5838f9,_0x357e62)=>{const _0x5162a1=_0x5838f9[a288_0x599e('0x33')][a288_0x599e('0x34')];const _0x417c32=_0x5838f9[a288_0x599e('0x33')][a288_0x599e('0x35')];const _0x2b1975=_0x5838f9[a288_0x599e('0x33')][a288_0x599e('0x36')];exports['sequelize'][a288_0x599e('0x10')]['passes'][a288_0x599e('0x2f')]({'attributes':[a288_0x599e('0x30'),[exports[a288_0x599e('0x3')]['fn']('sum',exports[a288_0x599e('0x3')][a288_0x599e('0x37')](a288_0x599e('0x38'))),a288_0x599e('0x39')]],'where':{'countingDate':{[exports[a288_0x599e('0x3')]['Op'][a288_0x599e('0x3a')]]:_0x417c32,[exports['sequelize']['Op']['lt']]:_0x2b1975},'amount':_0x5838f9[a288_0x599e('0x3b')][a288_0x599e('0x3c')]=='in'?{[exports[a288_0x599e('0x3')]['Op']['gt']]:0x0}:{[exports[a288_0x599e('0x3')]['Op']['lt']]:0x0}},'group':[exports[a288_0x599e('0x3')][a288_0x599e('0x3d')](a288_0x599e('0x3e'))],'order':[[a288_0x599e('0x30'),a288_0x599e('0x31')]]})[a288_0x599e('0x18')](_0x13675b=>{_0x357e62[a288_0x599e('0xf')]({'data':_0x13675b});});};exports[a288_0x599e('0x3f')]=(_0x4127cc,_0x2e1434)=>{const _0x26776a=_0x4127cc[a288_0x599e('0x33')][a288_0x599e('0x34')];const _0x1dbbcc=_0x4127cc[a288_0x599e('0x33')][a288_0x599e('0x35')];const _0x43b290=_0x4127cc[a288_0x599e('0x33')][a288_0x599e('0x36')];exports[a288_0x599e('0x3')][a288_0x599e('0x10')][a288_0x599e('0x2c')][a288_0x599e('0x2f')]({'attributes':['countingDate',[exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x40'),exports[a288_0x599e('0x3')][a288_0x599e('0x37')](a288_0x599e('0x30')),'%Y-%m-%d\x20%H:00'),'countingDateShort'],[exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x41'),exports[a288_0x599e('0x3')][a288_0x599e('0x37')]('amount')),a288_0x599e('0x39')]],'where':{'countingDate':{[exports[a288_0x599e('0x3')]['Op']['gte']]:_0x1dbbcc,[exports[a288_0x599e('0x3')]['Op']['lt']]:_0x43b290},'amount':_0x4127cc[a288_0x599e('0x3b')][a288_0x599e('0x3c')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a288_0x599e('0x3')]['Op']['lt']]:0x0}},'group':[exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x42'),exports['sequelize']['col'](a288_0x599e('0x30'))),exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x43'),exports[a288_0x599e('0x3')][a288_0x599e('0x37')](a288_0x599e('0x30'))),exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x44'),exports[a288_0x599e('0x3')]['col']('countingDate')),exports[a288_0x599e('0x3')]['fn'](a288_0x599e('0x45'),exports[a288_0x599e('0x3')][a288_0x599e('0x37')](a288_0x599e('0x30')))],'order':[[a288_0x599e('0x30'),a288_0x599e('0x31')]]})['then'](_0x12dea1=>{_0x2e1434[a288_0x599e('0xf')]({'data':_0x12dea1});});};exports[a288_0x599e('0x46')]=(_0x403825,_0x1f0f77,_0x2f7fa3)=>{const _0x463a76=_0x403825[a288_0x599e('0x47')][a288_0x599e('0x48')]['find'](_0x463a76=>_0x463a76[a288_0x599e('0x49')]===a288_0x599e('0x4a'));fbgraph_1[a288_0x599e('0x9')][a288_0x599e('0x4b')](_0x463a76[a288_0x599e('0x4c')]);fbgraph_1[a288_0x599e('0x9')]['get'](_0x403825['user'][a288_0x599e('0x4a')]+a288_0x599e('0x4d'),(_0x45d59d,_0x3ff1f0)=>{if(_0x45d59d){return _0x2f7fa3(_0x45d59d);}_0x1f0f77[a288_0x599e('0x4e')](a288_0x599e('0x4f'),{'title':a288_0x599e('0x50'),'profile':_0x3ff1f0});});};