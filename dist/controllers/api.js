var a92_0x7a69=['status','save','Downloaded:\x20','ipd','media/','readFile','utf8','parse','Data','EndTime','passes','create','getPassCounting','findAll','countingDate','getPassCountingByDay','query','month','startDate','endDate','sum','col','amount','total','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','ASC','DATE_FORMAT','countingDateShort','HOUR','DAY','YEAR','getFacebook','user','tokens','find','kind','facebook','setAccessToken','accessToken','get','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','render','Facebook\x20API','defineProperty','__esModule','fbgraph','ftp','sequelize','setSequelize','api/index','API\x20Examples','syncFtp','log','ready','connected','list','colombia','name','endsWith','json','models','reportFiles','findOrCreate','spread','error','connect','ftp.vivotek.com','downloadFtp','findOne','then','connected:','fileName','colombia/','.txt','pipe','default','createWriteStream'];(function(_0x26911f,_0x42ef24){var _0x3703e8=function(_0x2fab33){while(--_0x2fab33){_0x26911f['push'](_0x26911f['shift']());}};_0x3703e8(++_0x42ef24);}(a92_0x7a69,0xd1));var a92_0xc281=function(_0x41958a,_0x236a65){_0x41958a=_0x41958a-0x0;var _0x195c2e=a92_0x7a69[_0x41958a];return _0x195c2e;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5f5b1b){return _0x5f5b1b&&_0x5f5b1b['__esModule']?_0x5f5b1b:{'default':_0x5f5b1b};};Object[a92_0xc281('0x0')](exports,a92_0xc281('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a92_0xc281('0x2')));const ftp_1=__importDefault(require(a92_0xc281('0x3')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x27f3f0){exports[a92_0xc281('0x4')]=_0x27f3f0;}exports[a92_0xc281('0x5')]=setSequelize;exports['getApi']=(_0x4815af,_0xceb31a)=>{_0xceb31a['render'](a92_0xc281('0x6'),{'title':a92_0xc281('0x7')});};exports[a92_0xc281('0x8')]=(_0xf044c8,_0x58877c)=>{console[a92_0xc281('0x9')]('connecting');const _0xad4bf9=[];const _0x4ad932=new ftp_1['default']();_0x4ad932['on'](a92_0xc281('0xa'),function(){console['log'](a92_0xc281('0xb'));_0x4ad932[a92_0xc281('0xc')](a92_0xc281('0xd'),![],function(_0x4fb836,_0x5203d5){if(_0x4fb836){}else{for(const _0x1ae990 of _0x5203d5){console['log']('Downloading:\x20'+_0x1ae990[a92_0xc281('0xe')]);if(_0x1ae990['name'][a92_0xc281('0xf')](a92_0xc281('0x10'))){exports['sequelize'][a92_0xc281('0x11')][a92_0xc281('0x12')][a92_0xc281('0x13')]({'where':{'fileName':_0x1ae990[a92_0xc281('0xe')]}})[a92_0xc281('0x14')]((_0x2eecf8,_0x9509f4)=>{if(_0x9509f4){console['log'](_0x1ae990[a92_0xc281('0xe')]);_0xad4bf9['push'](_0x2eecf8);}});}}}_0x58877c[a92_0xc281('0x10')]({'data':_0xad4bf9});});});_0x4ad932['on'](a92_0xc281('0x15'),function(_0x6df3e4){_0x58877c['json']({'message':_0x6df3e4});});_0x4ad932[a92_0xc281('0x16')]({'host':a92_0xc281('0x17'),'port':0x15,'user':'ipd','password':'ipd'});};exports[a92_0xc281('0x18')]=(_0x29cc43,_0x1c3aa9)=>{exports[a92_0xc281('0x4')][a92_0xc281('0x11')][a92_0xc281('0x12')][a92_0xc281('0x19')]({'where':{'status':null}})[a92_0xc281('0x1a')](_0x55469e=>{if(_0x55469e){const _0x41f444=new ftp_1['default']();_0x41f444['on'](a92_0xc281('0xa'),function(){console[a92_0xc281('0x9')](a92_0xc281('0x1b')+_0x55469e[a92_0xc281('0x1c')]);_0x41f444['get'](a92_0xc281('0x1d')+_0x55469e[a92_0xc281('0x1c')],function(_0x5ab563,_0x5151a2){_0x41f444['end']();if(_0x5ab563){}else{const _0x191fec='media/'+_0x55469e[a92_0xc281('0x1c')]+a92_0xc281('0x1e');_0x5151a2[a92_0xc281('0x1f')](fs_1[a92_0xc281('0x20')][a92_0xc281('0x21')](_0x191fec));_0x55469e[a92_0xc281('0x22')]=0x1;_0x55469e[a92_0xc281('0x23')]();console[a92_0xc281('0x9')](a92_0xc281('0x24')+_0x55469e[a92_0xc281('0x1c')]);}});});_0x41f444['on']('error',function(_0x4a0d5a){_0x1c3aa9[a92_0xc281('0x10')]({'message':_0x4a0d5a});});_0x41f444['connect']({'host':a92_0xc281('0x17'),'port':0x15,'user':a92_0xc281('0x25'),'password':a92_0xc281('0x25')});_0x1c3aa9[a92_0xc281('0x10')]({'data':_0x55469e[a92_0xc281('0x1c')]});}else{_0x1c3aa9['json']({'data':[]});}});};exports['processFtp']=(_0x299b2d,_0x3ede10)=>{exports[a92_0xc281('0x4')][a92_0xc281('0x11')][a92_0xc281('0x12')]['findOne']({'where':{'status':0x1}})[a92_0xc281('0x1a')](_0x5df061=>{if(_0x5df061){const _0x14ca14=a92_0xc281('0x26')+_0x5df061[a92_0xc281('0x1c')]+a92_0xc281('0x1e');fs_1['default'][a92_0xc281('0x27')](_0x14ca14,a92_0xc281('0x28'),function(_0x57aa85,_0x2bf0e9){if(_0x57aa85){_0x5df061[a92_0xc281('0x22')]=null;}else{try{const _0x32ba73=JSON[a92_0xc281('0x29')](_0x2bf0e9);for(const _0x5ce20c of _0x32ba73[a92_0xc281('0x2a')][0x0]['CountingInfo']){const _0x5a974e=_0x5ce20c['In'];const _0x3ea884=_0x5ce20c['Out'];const _0x1709e4=Date[a92_0xc281('0x29')](_0x5ce20c[a92_0xc281('0x2b')]);if(_0x5a974e>0x0){exports[a92_0xc281('0x4')][a92_0xc281('0x11')][a92_0xc281('0x2c')][a92_0xc281('0x2d')]({'reportFileId':_0x5df061['id'],'amount':_0x5a974e,'countingDate':_0x1709e4});}if(_0x3ea884>0x0){exports[a92_0xc281('0x4')][a92_0xc281('0x11')][a92_0xc281('0x2c')][a92_0xc281('0x2d')]({'reportFileId':_0x5df061['id'],'amount':_0x3ea884*-0x1,'countingDate':_0x1709e4});}}_0x5df061['status']=0x2;}catch(_0x25c53b){_0x5df061[a92_0xc281('0x22')]=null;}}_0x5df061[a92_0xc281('0x23')]();});_0x3ede10[a92_0xc281('0x10')]({'data':_0x5df061[a92_0xc281('0x1c')]});}else{_0x3ede10[a92_0xc281('0x10')]({'data':[]});}});};exports[a92_0xc281('0x2e')]=(_0x9ed89f,_0x250a4f)=>{exports['sequelize'][a92_0xc281('0x11')][a92_0xc281('0x2c')][a92_0xc281('0x2f')]({'where':{'amount':{[exports[a92_0xc281('0x4')]['Op']['gt']]:0x0}},'order':[[a92_0xc281('0x30'),'ASC']]})[a92_0xc281('0x1a')](_0x7205e5=>{_0x250a4f[a92_0xc281('0x10')]({'data':_0x7205e5});});};exports[a92_0xc281('0x31')]=(_0x400f6f,_0xd05073)=>{const _0x3f33f8=_0x400f6f[a92_0xc281('0x32')][a92_0xc281('0x33')];const _0x3b76d4=_0x400f6f[a92_0xc281('0x32')][a92_0xc281('0x34')];const _0xe09c6d=_0x400f6f[a92_0xc281('0x32')][a92_0xc281('0x35')];exports[a92_0xc281('0x4')][a92_0xc281('0x11')]['passes'][a92_0xc281('0x2f')]({'attributes':[a92_0xc281('0x30'),[exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x36'),exports[a92_0xc281('0x4')][a92_0xc281('0x37')](a92_0xc281('0x38'))),a92_0xc281('0x39')]],'where':{'countingDate':{[exports[a92_0xc281('0x4')]['Op'][a92_0xc281('0x3a')]]:_0x3b76d4,[exports['sequelize']['Op']['lt']]:_0xe09c6d},'amount':_0x400f6f[a92_0xc281('0x3b')][a92_0xc281('0x3c')]=='in'?{[exports[a92_0xc281('0x4')]['Op']['gt']]:0x0}:{[exports[a92_0xc281('0x4')]['Op']['lt']]:0x0}},'group':[exports[a92_0xc281('0x4')][a92_0xc281('0x3d')](a92_0xc281('0x3e'))],'order':[['countingDate',a92_0xc281('0x3f')]]})[a92_0xc281('0x1a')](_0x983488=>{_0xd05073[a92_0xc281('0x10')]({'data':_0x983488});});};exports['getPassCountingByHour']=(_0x45043a,_0xa1bcbd)=>{const _0x4994d9=_0x45043a[a92_0xc281('0x32')][a92_0xc281('0x33')];const _0x515d62=_0x45043a['query']['startDate'];const _0x56d00b=_0x45043a[a92_0xc281('0x32')][a92_0xc281('0x35')];exports['sequelize']['models'][a92_0xc281('0x2c')][a92_0xc281('0x2f')]({'attributes':[a92_0xc281('0x30'),[exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x40'),exports[a92_0xc281('0x4')]['col'](a92_0xc281('0x30')),'%Y-%m-%d\x20%H:00'),a92_0xc281('0x41')],[exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x36'),exports['sequelize'][a92_0xc281('0x37')](a92_0xc281('0x38'))),a92_0xc281('0x39')]],'where':{'countingDate':{[exports[a92_0xc281('0x4')]['Op'][a92_0xc281('0x3a')]]:_0x515d62,[exports['sequelize']['Op']['lt']]:_0x56d00b},'amount':_0x45043a[a92_0xc281('0x3b')][a92_0xc281('0x3c')]=='in'?{[exports[a92_0xc281('0x4')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x42'),exports[a92_0xc281('0x4')][a92_0xc281('0x37')](a92_0xc281('0x30'))),exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x43'),exports[a92_0xc281('0x4')][a92_0xc281('0x37')](a92_0xc281('0x30'))),exports[a92_0xc281('0x4')]['fn']('MONTH',exports[a92_0xc281('0x4')][a92_0xc281('0x37')](a92_0xc281('0x30'))),exports[a92_0xc281('0x4')]['fn'](a92_0xc281('0x44'),exports[a92_0xc281('0x4')][a92_0xc281('0x37')]('countingDate'))],'order':[['countingDate',a92_0xc281('0x3f')]]})[a92_0xc281('0x1a')](_0x31a009=>{_0xa1bcbd[a92_0xc281('0x10')]({'data':_0x31a009});});};exports[a92_0xc281('0x45')]=(_0x77e13d,_0xaf967c,_0x36644f)=>{const _0x36e13a=_0x77e13d[a92_0xc281('0x46')][a92_0xc281('0x47')][a92_0xc281('0x48')](_0x36e13a=>_0x36e13a[a92_0xc281('0x49')]===a92_0xc281('0x4a'));fbgraph_1[a92_0xc281('0x20')][a92_0xc281('0x4b')](_0x36e13a[a92_0xc281('0x4c')]);fbgraph_1['default'][a92_0xc281('0x4d')](_0x77e13d[a92_0xc281('0x46')]['facebook']+a92_0xc281('0x4e'),(_0x2f9fea,_0x3f209f)=>{if(_0x2f9fea){return _0x36644f(_0x2f9fea);}_0xaf967c[a92_0xc281('0x4f')]('api/facebook',{'title':a92_0xc281('0x50'),'profile':_0x3f209f});});};