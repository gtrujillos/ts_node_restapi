var a180_0x432d=['query','startDate','endDate','findAll','col','total','gte','params','literal','getPassCountingByHour','month','DATE_FORMAT','sum','amount','direction','DAY','MONTH','YEAR','getFacebook','user','tokens','find','kind','facebook','setAccessToken','render','api/facebook','Facebook\x20API','__importDefault','fbgraph','ftp','sequelize','setSequelize','getApi','API\x20Examples','syncFtp','connecting','default','ready','list','colombia','Downloading:\x20','name','json','reportFiles','findOrCreate','log','error','connect','ftp.vivotek.com','ipd','findOne','then','fileName','get','colombia/','end','media/','createWriteStream','status','save','Downloaded:\x20','processFtp','models','.txt','utf8','parse','CountingInfo','EndTime','passes','create','getPassCounting','countingDate','ASC'];(function(_0x322ae2,_0xa10fed){var _0x9657d8=function(_0x1e1f19){while(--_0x1e1f19){_0x322ae2['push'](_0x322ae2['shift']());}};_0x9657d8(++_0xa10fed);}(a180_0x432d,0xfa));var a180_0x5c6f=function(_0xe068e2,_0x1c5752){_0xe068e2=_0xe068e2-0x0;var _0x5c7bac=a180_0x432d[_0xe068e2];return _0x5c7bac;};'use strict';var __importDefault=this&&this[a180_0x5c6f('0x0')]||function(_0x559e1e){return _0x559e1e&&_0x559e1e['__esModule']?_0x559e1e:{'default':_0x559e1e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const fbgraph_1=__importDefault(require(a180_0x5c6f('0x1')));const ftp_1=__importDefault(require(a180_0x5c6f('0x2')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x5242f3){exports[a180_0x5c6f('0x3')]=_0x5242f3;}exports[a180_0x5c6f('0x4')]=setSequelize;exports[a180_0x5c6f('0x5')]=(_0x26a33b,_0x222ba9)=>{_0x222ba9['render']('api/index',{'title':a180_0x5c6f('0x6')});};exports[a180_0x5c6f('0x7')]=(_0x42d816,_0x2a5f1f)=>{console['log'](a180_0x5c6f('0x8'));const _0x42d19c=[];const _0x4b1c08=new ftp_1[(a180_0x5c6f('0x9'))]();_0x4b1c08['on'](a180_0x5c6f('0xa'),function(){console['log']('connected');_0x4b1c08[a180_0x5c6f('0xb')](a180_0x5c6f('0xc'),![],function(_0x4072e3,_0x1b1c2e){if(_0x4072e3){}else{for(const _0x2c019e of _0x1b1c2e){console['log'](a180_0x5c6f('0xd')+_0x2c019e[a180_0x5c6f('0xe')]);if(_0x2c019e[a180_0x5c6f('0xe')]['endsWith'](a180_0x5c6f('0xf'))){exports['sequelize']['models'][a180_0x5c6f('0x10')][a180_0x5c6f('0x11')]({'where':{'fileName':_0x2c019e[a180_0x5c6f('0xe')]}})['spread']((_0x26f631,_0x23b1da)=>{if(_0x23b1da){console[a180_0x5c6f('0x12')](_0x2c019e[a180_0x5c6f('0xe')]);_0x42d19c['push'](_0x26f631);}});}}}_0x2a5f1f[a180_0x5c6f('0xf')]({'data':_0x42d19c});});});_0x4b1c08['on'](a180_0x5c6f('0x13'),function(_0x167fdc){_0x2a5f1f[a180_0x5c6f('0xf')]({'message':_0x167fdc});});_0x4b1c08[a180_0x5c6f('0x14')]({'host':a180_0x5c6f('0x15'),'port':0x15,'user':a180_0x5c6f('0x16'),'password':a180_0x5c6f('0x16')});};exports['downloadFtp']=(_0x29eca3,_0x11221b)=>{exports['sequelize']['models'][a180_0x5c6f('0x10')][a180_0x5c6f('0x17')]({'where':{'status':null}})[a180_0x5c6f('0x18')](_0x13a0c2=>{if(_0x13a0c2){const _0xe0dfea=new ftp_1[(a180_0x5c6f('0x9'))]();_0xe0dfea['on'](a180_0x5c6f('0xa'),function(){console['log']('connected:'+_0x13a0c2[a180_0x5c6f('0x19')]);_0xe0dfea[a180_0x5c6f('0x1a')](a180_0x5c6f('0x1b')+_0x13a0c2[a180_0x5c6f('0x19')],function(_0x3940e3,_0x3560b6){_0xe0dfea[a180_0x5c6f('0x1c')]();if(_0x3940e3){}else{const _0x56b4ad=a180_0x5c6f('0x1d')+_0x13a0c2['fileName']+'.txt';_0x3560b6['pipe'](fs_1['default'][a180_0x5c6f('0x1e')](_0x56b4ad));_0x13a0c2[a180_0x5c6f('0x1f')]=0x1;_0x13a0c2[a180_0x5c6f('0x20')]();console[a180_0x5c6f('0x12')](a180_0x5c6f('0x21')+_0x13a0c2['fileName']);}});});_0xe0dfea['on'](a180_0x5c6f('0x13'),function(_0x134216){_0x11221b['json']({'message':_0x134216});});_0xe0dfea[a180_0x5c6f('0x14')]({'host':a180_0x5c6f('0x15'),'port':0x15,'user':a180_0x5c6f('0x16'),'password':a180_0x5c6f('0x16')});_0x11221b[a180_0x5c6f('0xf')]({'data':_0x13a0c2[a180_0x5c6f('0x19')]});}else{_0x11221b[a180_0x5c6f('0xf')]({'data':[]});}});};exports[a180_0x5c6f('0x22')]=(_0xddf48d,_0x249484)=>{exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x23')][a180_0x5c6f('0x10')][a180_0x5c6f('0x17')]({'where':{'status':0x1}})[a180_0x5c6f('0x18')](_0x31c3ec=>{if(_0x31c3ec){const _0x38f86c='media/'+_0x31c3ec[a180_0x5c6f('0x19')]+a180_0x5c6f('0x24');fs_1[a180_0x5c6f('0x9')]['readFile'](_0x38f86c,a180_0x5c6f('0x25'),function(_0x1fb141,_0x1b9852){if(_0x1fb141){_0x31c3ec[a180_0x5c6f('0x1f')]=null;}else{try{const _0x1ff8ec=JSON[a180_0x5c6f('0x26')](_0x1b9852);for(const _0x34480a of _0x1ff8ec['Data'][0x0][a180_0x5c6f('0x27')]){const _0xaf4975=_0x34480a['In'];const _0x3da5b1=_0x34480a['Out'];const _0x4420e1=Date[a180_0x5c6f('0x26')](_0x34480a[a180_0x5c6f('0x28')]);if(_0xaf4975>0x0){exports[a180_0x5c6f('0x3')]['models'][a180_0x5c6f('0x29')][a180_0x5c6f('0x2a')]({'reportFileId':_0x31c3ec['id'],'amount':_0xaf4975,'countingDate':_0x4420e1});}if(_0x3da5b1>0x0){exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x23')][a180_0x5c6f('0x29')][a180_0x5c6f('0x2a')]({'reportFileId':_0x31c3ec['id'],'amount':_0x3da5b1*-0x1,'countingDate':_0x4420e1});}}_0x31c3ec['status']=0x2;}catch(_0x4809c8){_0x31c3ec[a180_0x5c6f('0x1f')]=null;}}_0x31c3ec[a180_0x5c6f('0x20')]();});_0x249484[a180_0x5c6f('0xf')]({'data':_0x31c3ec[a180_0x5c6f('0x19')]});}else{_0x249484['json']({'data':[]});}});};exports[a180_0x5c6f('0x2b')]=(_0x50a15b,_0x5e6997)=>{exports['sequelize'][a180_0x5c6f('0x23')][a180_0x5c6f('0x29')]['findAll']({'where':{'amount':{[exports[a180_0x5c6f('0x3')]['Op']['gt']]:0x0}},'order':[[a180_0x5c6f('0x2c'),a180_0x5c6f('0x2d')]]})[a180_0x5c6f('0x18')](_0x1a8b9e=>{_0x5e6997['json']({'data':_0x1a8b9e});});};exports['getPassCountingByDay']=(_0x509b7d,_0x216d0f)=>{const _0x1def7e=_0x509b7d['query']['month'];const _0x15c0ee=_0x509b7d[a180_0x5c6f('0x2e')][a180_0x5c6f('0x2f')];const _0x3c56c5=_0x509b7d[a180_0x5c6f('0x2e')][a180_0x5c6f('0x30')];exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x23')][a180_0x5c6f('0x29')][a180_0x5c6f('0x31')]({'attributes':[a180_0x5c6f('0x2c'),[exports[a180_0x5c6f('0x3')]['fn']('sum',exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x32')]('amount')),a180_0x5c6f('0x33')]],'where':{'countingDate':{[exports[a180_0x5c6f('0x3')]['Op'][a180_0x5c6f('0x34')]]:_0x15c0ee,[exports[a180_0x5c6f('0x3')]['Op']['lt']]:_0x3c56c5},'amount':_0x509b7d[a180_0x5c6f('0x35')]['direction']=='in'?{[exports[a180_0x5c6f('0x3')]['Op']['gt']]:0x0}:{[exports[a180_0x5c6f('0x3')]['Op']['lt']]:0x0}},'group':[exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x36')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a180_0x5c6f('0x2c'),a180_0x5c6f('0x2d')]]})['then'](_0x50b72b=>{_0x216d0f[a180_0x5c6f('0xf')]({'data':_0x50b72b});});};exports[a180_0x5c6f('0x37')]=(_0x23f1de,_0x5c31a7)=>{const _0x2caf82=_0x23f1de[a180_0x5c6f('0x2e')][a180_0x5c6f('0x38')];const _0x309fbc=_0x23f1de['query']['startDate'];const _0x251ef6=_0x23f1de[a180_0x5c6f('0x2e')][a180_0x5c6f('0x30')];exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x23')][a180_0x5c6f('0x29')][a180_0x5c6f('0x31')]({'attributes':['countingDate',[exports[a180_0x5c6f('0x3')]['fn'](a180_0x5c6f('0x39'),exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x32')](a180_0x5c6f('0x2c')),'%Y-%m-%d\x20%H:00'),'countingDateShort'],[exports[a180_0x5c6f('0x3')]['fn'](a180_0x5c6f('0x3a'),exports[a180_0x5c6f('0x3')]['col'](a180_0x5c6f('0x3b'))),a180_0x5c6f('0x33')]],'where':{'countingDate':{[exports['sequelize']['Op'][a180_0x5c6f('0x34')]]:_0x309fbc,[exports[a180_0x5c6f('0x3')]['Op']['lt']]:_0x251ef6},'amount':_0x23f1de[a180_0x5c6f('0x35')][a180_0x5c6f('0x3c')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a180_0x5c6f('0x3')]['Op']['lt']]:0x0}},'group':[exports[a180_0x5c6f('0x3')]['fn']('HOUR',exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x32')](a180_0x5c6f('0x2c'))),exports[a180_0x5c6f('0x3')]['fn'](a180_0x5c6f('0x3d'),exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x32')](a180_0x5c6f('0x2c'))),exports['sequelize']['fn'](a180_0x5c6f('0x3e'),exports[a180_0x5c6f('0x3')][a180_0x5c6f('0x32')](a180_0x5c6f('0x2c'))),exports[a180_0x5c6f('0x3')]['fn'](a180_0x5c6f('0x3f'),exports[a180_0x5c6f('0x3')]['col'](a180_0x5c6f('0x2c')))],'order':[[a180_0x5c6f('0x2c'),'ASC']]})[a180_0x5c6f('0x18')](_0x40b679=>{_0x5c31a7['json']({'data':_0x40b679});});};exports[a180_0x5c6f('0x40')]=(_0x112ffa,_0x35c0e7,_0x300a52)=>{const _0x3becfb=_0x112ffa[a180_0x5c6f('0x41')][a180_0x5c6f('0x42')][a180_0x5c6f('0x43')](_0x3becfb=>_0x3becfb[a180_0x5c6f('0x44')]===a180_0x5c6f('0x45'));fbgraph_1[a180_0x5c6f('0x9')][a180_0x5c6f('0x46')](_0x3becfb['accessToken']);fbgraph_1[a180_0x5c6f('0x9')]['get'](_0x112ffa[a180_0x5c6f('0x41')][a180_0x5c6f('0x45')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x23c78c,_0x458521)=>{if(_0x23c78c){return _0x300a52(_0x23c78c);}_0x35c0e7[a180_0x5c6f('0x47')](a180_0x5c6f('0x48'),{'title':a180_0x5c6f('0x49'),'profile':_0x458521});});};