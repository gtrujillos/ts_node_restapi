var a198_0x24de=['query','month','endDate','amount','total','gte','params','direction','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','DATE_FORMAT','col','%Y-%m-%d\x20%H:00','countingDateShort','sum','HOUR','DAY','MONTH','getFacebook','user','find','facebook','setAccessToken','accessToken','api/facebook','__importDefault','__esModule','defineProperty','fbgraph','getApi','render','api/index','API\x20Examples','syncFtp','log','connecting','ready','connected','list','colombia','Downloading:\x20','endsWith','json','sequelize','models','reportFiles','findOrCreate','name','push','error','ftp.vivotek.com','ipd','findOne','then','connected:','get','fileName','end','.txt','pipe','default','status','save','processFtp','media/','utf8','CountingInfo','Out','EndTime','create','getPassCounting','findAll','countingDate','ASC','getPassCountingByDay'];(function(_0xf42b48,_0x263ebf){var _0x93910e=function(_0x4d584c){while(--_0x4d584c){_0xf42b48['push'](_0xf42b48['shift']());}};_0x93910e(++_0x263ebf);}(a198_0x24de,0x1d4));var a198_0x3be1=function(_0xf19a6,_0x3247b3){_0xf19a6=_0xf19a6-0x0;var _0x3e813c=a198_0x24de[_0xf19a6];return _0x3e813c;};'use strict';var __importDefault=this&&this[a198_0x3be1('0x0')]||function(_0x163deb){return _0x163deb&&_0x163deb[a198_0x3be1('0x1')]?_0x163deb:{'default':_0x163deb};};Object[a198_0x3be1('0x2')](exports,a198_0x3be1('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a198_0x3be1('0x3')));const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));function setSequelize(_0x39fb86){exports['sequelize']=_0x39fb86;}exports['setSequelize']=setSequelize;exports[a198_0x3be1('0x4')]=(_0x9f0fd0,_0x14b1f8)=>{_0x14b1f8[a198_0x3be1('0x5')](a198_0x3be1('0x6'),{'title':a198_0x3be1('0x7')});};exports[a198_0x3be1('0x8')]=(_0x1acfe1,_0x2a73ee)=>{console[a198_0x3be1('0x9')](a198_0x3be1('0xa'));const _0x3366f6=[];const _0xcbf16b=new ftp_1['default']();_0xcbf16b['on'](a198_0x3be1('0xb'),function(){console[a198_0x3be1('0x9')](a198_0x3be1('0xc'));_0xcbf16b[a198_0x3be1('0xd')](a198_0x3be1('0xe'),![],function(_0x26233b,_0x587b38){if(_0x26233b){}else{for(const _0x283490 of _0x587b38){console['log'](a198_0x3be1('0xf')+_0x283490['name']);if(_0x283490['name'][a198_0x3be1('0x10')](a198_0x3be1('0x11'))){exports[a198_0x3be1('0x12')][a198_0x3be1('0x13')][a198_0x3be1('0x14')][a198_0x3be1('0x15')]({'where':{'fileName':_0x283490['name']}})['spread']((_0x2b5a2e,_0x1d592d)=>{if(_0x1d592d){console[a198_0x3be1('0x9')](_0x283490[a198_0x3be1('0x16')]);_0x3366f6[a198_0x3be1('0x17')](_0x2b5a2e);}});}}}_0x2a73ee['json']({'data':_0x3366f6});});});_0xcbf16b['on'](a198_0x3be1('0x18'),function(_0x3e09f0){_0x2a73ee[a198_0x3be1('0x11')]({'message':_0x3e09f0});});_0xcbf16b['connect']({'host':a198_0x3be1('0x19'),'port':0x15,'user':a198_0x3be1('0x1a'),'password':a198_0x3be1('0x1a')});};exports['downloadFtp']=(_0x4d6b59,_0x53ee62)=>{exports[a198_0x3be1('0x12')][a198_0x3be1('0x13')][a198_0x3be1('0x14')][a198_0x3be1('0x1b')]({'where':{'status':null}})[a198_0x3be1('0x1c')](_0x27f177=>{if(_0x27f177){const _0x42b6e9=new ftp_1['default']();_0x42b6e9['on']('ready',function(){console[a198_0x3be1('0x9')](a198_0x3be1('0x1d')+_0x27f177['fileName']);_0x42b6e9[a198_0x3be1('0x1e')]('colombia/'+_0x27f177[a198_0x3be1('0x1f')],function(_0x2781d1,_0xeccd98){_0x42b6e9[a198_0x3be1('0x20')]();if(_0x2781d1){}else{const _0x4077cb='media/'+_0x27f177['fileName']+a198_0x3be1('0x21');_0xeccd98[a198_0x3be1('0x22')](fs_1[a198_0x3be1('0x23')]['createWriteStream'](_0x4077cb));_0x27f177[a198_0x3be1('0x24')]=0x1;_0x27f177[a198_0x3be1('0x25')]();console[a198_0x3be1('0x9')]('Downloaded:\x20'+_0x27f177[a198_0x3be1('0x1f')]);}});});_0x42b6e9['on'](a198_0x3be1('0x18'),function(_0x218af7){_0x53ee62['json']({'message':_0x218af7});});_0x42b6e9['connect']({'host':a198_0x3be1('0x19'),'port':0x15,'user':'ipd','password':a198_0x3be1('0x1a')});_0x53ee62['json']({'data':_0x27f177[a198_0x3be1('0x1f')]});}else{_0x53ee62[a198_0x3be1('0x11')]({'data':[]});}});};exports[a198_0x3be1('0x26')]=(_0x49b190,_0x57ee11)=>{exports[a198_0x3be1('0x12')]['models'][a198_0x3be1('0x14')]['findOne']({'where':{'status':0x1}})[a198_0x3be1('0x1c')](_0x4e3046=>{if(_0x4e3046){const _0xab138e=a198_0x3be1('0x27')+_0x4e3046['fileName']+a198_0x3be1('0x21');fs_1['default']['readFile'](_0xab138e,a198_0x3be1('0x28'),function(_0x519df6,_0x363b5c){if(_0x519df6){_0x4e3046['status']=null;}else{try{const _0x10f35c=JSON['parse'](_0x363b5c);for(const _0x284bb5 of _0x10f35c['Data'][0x0][a198_0x3be1('0x29')]){const _0x6b843a=_0x284bb5['In'];const _0x16ab1f=_0x284bb5[a198_0x3be1('0x2a')];const _0x1b1a8c=Date['parse'](_0x284bb5[a198_0x3be1('0x2b')]);if(_0x6b843a>0x0){exports['sequelize'][a198_0x3be1('0x13')]['passes'][a198_0x3be1('0x2c')]({'reportFileId':_0x4e3046['id'],'amount':_0x6b843a,'countingDate':_0x1b1a8c});}if(_0x16ab1f>0x0){exports['sequelize'][a198_0x3be1('0x13')]['passes'][a198_0x3be1('0x2c')]({'reportFileId':_0x4e3046['id'],'amount':_0x16ab1f*-0x1,'countingDate':_0x1b1a8c});}}_0x4e3046[a198_0x3be1('0x24')]=0x2;}catch(_0x338058){_0x4e3046[a198_0x3be1('0x24')]=null;}}_0x4e3046['save']();});_0x57ee11[a198_0x3be1('0x11')]({'data':_0x4e3046[a198_0x3be1('0x1f')]});}else{_0x57ee11[a198_0x3be1('0x11')]({'data':[]});}});};exports[a198_0x3be1('0x2d')]=(_0x1f0a5d,_0xd78048)=>{exports[a198_0x3be1('0x12')][a198_0x3be1('0x13')]['passes'][a198_0x3be1('0x2e')]({'where':{'amount':{[exports[a198_0x3be1('0x12')]['Op']['gt']]:0x0}},'order':[[a198_0x3be1('0x2f'),a198_0x3be1('0x30')]]})[a198_0x3be1('0x1c')](_0xddfac1=>{_0xd78048[a198_0x3be1('0x11')]({'data':_0xddfac1});});};exports[a198_0x3be1('0x31')]=(_0xf54f5a,_0x52be6f)=>{const _0x5272fd=_0xf54f5a[a198_0x3be1('0x32')][a198_0x3be1('0x33')];const _0x470df0=_0xf54f5a[a198_0x3be1('0x32')]['startDate'];const _0x431763=_0xf54f5a[a198_0x3be1('0x32')][a198_0x3be1('0x34')];exports[a198_0x3be1('0x12')][a198_0x3be1('0x13')]['passes'][a198_0x3be1('0x2e')]({'attributes':[a198_0x3be1('0x2f'),[exports[a198_0x3be1('0x12')]['fn']('sum',exports[a198_0x3be1('0x12')]['col'](a198_0x3be1('0x35'))),a198_0x3be1('0x36')]],'where':{'countingDate':{[exports[a198_0x3be1('0x12')]['Op'][a198_0x3be1('0x37')]]:_0x470df0,[exports['sequelize']['Op']['lt']]:_0x431763},'amount':_0xf54f5a[a198_0x3be1('0x38')][a198_0x3be1('0x39')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a198_0x3be1('0x12')]['Op']['lt']]:0x0}},'group':[exports[a198_0x3be1('0x12')]['literal'](a198_0x3be1('0x3a'))],'order':[[a198_0x3be1('0x2f'),'ASC']]})[a198_0x3be1('0x1c')](_0x3e7a7c=>{_0x52be6f['json']({'data':_0x3e7a7c});});};exports['getPassCountingByHour']=(_0x20e3a0,_0x66bbc8)=>{const _0x125998=_0x20e3a0[a198_0x3be1('0x32')][a198_0x3be1('0x33')];const _0x4f1c9b=_0x20e3a0[a198_0x3be1('0x32')]['startDate'];const _0x290100=_0x20e3a0[a198_0x3be1('0x32')][a198_0x3be1('0x34')];exports[a198_0x3be1('0x12')][a198_0x3be1('0x13')]['passes'][a198_0x3be1('0x2e')]({'attributes':[a198_0x3be1('0x2f'),[exports['sequelize']['fn'](a198_0x3be1('0x3b'),exports[a198_0x3be1('0x12')][a198_0x3be1('0x3c')](a198_0x3be1('0x2f')),a198_0x3be1('0x3d')),a198_0x3be1('0x3e')],[exports[a198_0x3be1('0x12')]['fn'](a198_0x3be1('0x3f'),exports['sequelize']['col'](a198_0x3be1('0x35'))),a198_0x3be1('0x36')]],'where':{'countingDate':{[exports[a198_0x3be1('0x12')]['Op'][a198_0x3be1('0x37')]]:_0x4f1c9b,[exports[a198_0x3be1('0x12')]['Op']['lt']]:_0x290100},'amount':_0x20e3a0[a198_0x3be1('0x38')][a198_0x3be1('0x39')]=='in'?{[exports[a198_0x3be1('0x12')]['Op']['gt']]:0x0}:{[exports[a198_0x3be1('0x12')]['Op']['lt']]:0x0}},'group':[exports[a198_0x3be1('0x12')]['fn'](a198_0x3be1('0x40'),exports['sequelize'][a198_0x3be1('0x3c')](a198_0x3be1('0x2f'))),exports[a198_0x3be1('0x12')]['fn'](a198_0x3be1('0x41'),exports[a198_0x3be1('0x12')][a198_0x3be1('0x3c')](a198_0x3be1('0x2f'))),exports[a198_0x3be1('0x12')]['fn'](a198_0x3be1('0x42'),exports[a198_0x3be1('0x12')][a198_0x3be1('0x3c')](a198_0x3be1('0x2f'))),exports[a198_0x3be1('0x12')]['fn']('YEAR',exports[a198_0x3be1('0x12')]['col']('countingDate'))],'order':[['countingDate',a198_0x3be1('0x30')]]})[a198_0x3be1('0x1c')](_0x572784=>{_0x66bbc8[a198_0x3be1('0x11')]({'data':_0x572784});});};exports[a198_0x3be1('0x43')]=(_0xf6ae4e,_0x126f12,_0x480bf3)=>{const _0x357caa=_0xf6ae4e[a198_0x3be1('0x44')]['tokens'][a198_0x3be1('0x45')](_0x357caa=>_0x357caa['kind']===a198_0x3be1('0x46'));fbgraph_1['default'][a198_0x3be1('0x47')](_0x357caa[a198_0x3be1('0x48')]);fbgraph_1['default'][a198_0x3be1('0x1e')](_0xf6ae4e['user'][a198_0x3be1('0x46')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x426fd4,_0x5e6e24)=>{if(_0x426fd4){return _0x480bf3(_0x426fd4);}_0x126f12[a198_0x3be1('0x5')](a198_0x3be1('0x49'),{'title':'Facebook\x20API','profile':_0x5e6e24});});};