var a198_0x2d7e=['reportFiles','findOrCreate','spread','connect','ftp.vivotek.com','ipd','downloadFtp','findOne','default','connected:','fileName','colombia/','end','media/','.txt','createWriteStream','save','Downloaded:\x20','processFtp','then','readFile','utf8','status','parse','Data','CountingInfo','Out','passes','create','getPassCounting','countingDate','ASC','query','month','endDate','findAll','sum','col','amount','total','gte','params','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','startDate','DATE_FORMAT','%Y-%m-%d\x20%H:00','HOUR','DAY','YEAR','user','tokens','find','setAccessToken','get','facebook','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','render','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','ftp','setSequelize','syncFtp','log','ready','connected','list','colombia','name','endsWith','json','sequelize','models'];(function(_0x4cd915,_0x1a01c1){var _0x2bf4f3=function(_0x194886){while(--_0x194886){_0x4cd915['push'](_0x4cd915['shift']());}};_0x2bf4f3(++_0x1a01c1);}(a198_0x2d7e,0x88));var a198_0x1a46=function(_0x415435,_0x47d820){_0x415435=_0x415435-0x0;var _0x224948=a198_0x2d7e[_0x415435];return _0x224948;};'use strict';var __importDefault=this&&this[a198_0x1a46('0x0')]||function(_0x18025a){return _0x18025a&&_0x18025a[a198_0x1a46('0x1')]?_0x18025a:{'default':_0x18025a};};Object[a198_0x1a46('0x2')](exports,a198_0x1a46('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a198_0x1a46('0x3')));const fs_1=__importDefault(require('fs'));function setSequelize(_0x46e331){exports['sequelize']=_0x46e331;}exports[a198_0x1a46('0x4')]=setSequelize;exports['getApi']=(_0x234587,_0x15b86d)=>{_0x15b86d['render']('api/index',{'title':'API\x20Examples'});};exports[a198_0x1a46('0x5')]=(_0x2c41c7,_0x42d052)=>{console[a198_0x1a46('0x6')]('connecting');const _0xddb1dc=[];const _0x32f63d=new ftp_1['default']();_0x32f63d['on'](a198_0x1a46('0x7'),function(){console['log'](a198_0x1a46('0x8'));_0x32f63d[a198_0x1a46('0x9')](a198_0x1a46('0xa'),![],function(_0x3f180e,_0x5d5cd0){if(_0x3f180e){}else{for(const _0x5def2f of _0x5d5cd0){console[a198_0x1a46('0x6')]('Downloading:\x20'+_0x5def2f[a198_0x1a46('0xb')]);if(_0x5def2f[a198_0x1a46('0xb')][a198_0x1a46('0xc')](a198_0x1a46('0xd'))){exports[a198_0x1a46('0xe')][a198_0x1a46('0xf')][a198_0x1a46('0x10')][a198_0x1a46('0x11')]({'where':{'fileName':_0x5def2f[a198_0x1a46('0xb')]}})[a198_0x1a46('0x12')]((_0x471e83,_0x7a611d)=>{if(_0x7a611d){console[a198_0x1a46('0x6')](_0x5def2f[a198_0x1a46('0xb')]);_0xddb1dc['push'](_0x471e83);}});}}}_0x42d052[a198_0x1a46('0xd')]({'data':_0xddb1dc});});});_0x32f63d['on']('error',function(_0x3910eb){_0x42d052[a198_0x1a46('0xd')]({'message':_0x3910eb});});_0x32f63d[a198_0x1a46('0x13')]({'host':a198_0x1a46('0x14'),'port':0x15,'user':'ipd','password':a198_0x1a46('0x15')});};exports[a198_0x1a46('0x16')]=(_0xc46843,_0x53c9fd)=>{exports[a198_0x1a46('0xe')]['models'][a198_0x1a46('0x10')][a198_0x1a46('0x17')]({'where':{'status':null}})['then'](_0x1b11d3=>{if(_0x1b11d3){const _0x2c7f46=new ftp_1[(a198_0x1a46('0x18'))]();_0x2c7f46['on'](a198_0x1a46('0x7'),function(){console[a198_0x1a46('0x6')](a198_0x1a46('0x19')+_0x1b11d3[a198_0x1a46('0x1a')]);_0x2c7f46['get'](a198_0x1a46('0x1b')+_0x1b11d3[a198_0x1a46('0x1a')],function(_0x34801c,_0x460b07){_0x2c7f46[a198_0x1a46('0x1c')]();if(_0x34801c){}else{const _0x5159a8=a198_0x1a46('0x1d')+_0x1b11d3['fileName']+a198_0x1a46('0x1e');_0x460b07['pipe'](fs_1[a198_0x1a46('0x18')][a198_0x1a46('0x1f')](_0x5159a8));_0x1b11d3['status']=0x1;_0x1b11d3[a198_0x1a46('0x20')]();console[a198_0x1a46('0x6')](a198_0x1a46('0x21')+_0x1b11d3[a198_0x1a46('0x1a')]);}});});_0x2c7f46['on']('error',function(_0x427736){_0x53c9fd[a198_0x1a46('0xd')]({'message':_0x427736});});_0x2c7f46['connect']({'host':a198_0x1a46('0x14'),'port':0x15,'user':'ipd','password':a198_0x1a46('0x15')});_0x53c9fd['json']({'data':_0x1b11d3[a198_0x1a46('0x1a')]});}else{_0x53c9fd[a198_0x1a46('0xd')]({'data':[]});}});};exports[a198_0x1a46('0x22')]=(_0x565394,_0x2d7104)=>{exports['sequelize']['models'][a198_0x1a46('0x10')]['findOne']({'where':{'status':0x1}})[a198_0x1a46('0x23')](_0x281282=>{if(_0x281282){const _0x56191e=a198_0x1a46('0x1d')+_0x281282['fileName']+a198_0x1a46('0x1e');fs_1[a198_0x1a46('0x18')][a198_0x1a46('0x24')](_0x56191e,a198_0x1a46('0x25'),function(_0xb46b11,_0x5ade75){if(_0xb46b11){_0x281282[a198_0x1a46('0x26')]=null;}else{try{const _0x160190=JSON[a198_0x1a46('0x27')](_0x5ade75);for(const _0x2e7b11 of _0x160190[a198_0x1a46('0x28')][0x0][a198_0x1a46('0x29')]){const _0x5a867e=_0x2e7b11['In'];const _0x2cfd7f=_0x2e7b11[a198_0x1a46('0x2a')];const _0x2b372c=Date[a198_0x1a46('0x27')](_0x2e7b11['EndTime']);if(_0x5a867e>0x0){exports[a198_0x1a46('0xe')][a198_0x1a46('0xf')][a198_0x1a46('0x2b')][a198_0x1a46('0x2c')]({'reportFileId':_0x281282['id'],'amount':_0x5a867e,'countingDate':_0x2b372c});}if(_0x2cfd7f>0x0){exports[a198_0x1a46('0xe')][a198_0x1a46('0xf')][a198_0x1a46('0x2b')][a198_0x1a46('0x2c')]({'reportFileId':_0x281282['id'],'amount':_0x2cfd7f*-0x1,'countingDate':_0x2b372c});}}_0x281282['status']=0x2;}catch(_0x4b3d99){_0x281282[a198_0x1a46('0x26')]=null;}}_0x281282['save']();});_0x2d7104[a198_0x1a46('0xd')]({'data':_0x281282['fileName']});}else{_0x2d7104[a198_0x1a46('0xd')]({'data':[]});}});};exports[a198_0x1a46('0x2d')]=(_0xd4057b,_0x53e95b)=>{exports['sequelize']['models']['passes']['findAll']({'where':{'amount':{[exports[a198_0x1a46('0xe')]['Op']['gt']]:0x0}},'order':[[a198_0x1a46('0x2e'),a198_0x1a46('0x2f')]]})[a198_0x1a46('0x23')](_0x15f739=>{_0x53e95b['json']({'data':_0x15f739});});};exports['getPassCountingByDay']=(_0x3d7c93,_0x407121)=>{const _0x26412f=_0x3d7c93[a198_0x1a46('0x30')][a198_0x1a46('0x31')];const _0x50b2b3=_0x3d7c93[a198_0x1a46('0x30')]['startDate'];const _0x281a89=_0x3d7c93['query'][a198_0x1a46('0x32')];exports[a198_0x1a46('0xe')][a198_0x1a46('0xf')][a198_0x1a46('0x2b')][a198_0x1a46('0x33')]({'attributes':[a198_0x1a46('0x2e'),[exports[a198_0x1a46('0xe')]['fn'](a198_0x1a46('0x34'),exports['sequelize'][a198_0x1a46('0x35')](a198_0x1a46('0x36'))),a198_0x1a46('0x37')]],'where':{'countingDate':{[exports[a198_0x1a46('0xe')]['Op'][a198_0x1a46('0x38')]]:_0x50b2b3,[exports['sequelize']['Op']['lt']]:_0x281a89},'amount':_0x3d7c93[a198_0x1a46('0x39')]['direction']=='in'?{[exports[a198_0x1a46('0xe')]['Op']['gt']]:0x0}:{[exports[a198_0x1a46('0xe')]['Op']['lt']]:0x0}},'group':[exports['sequelize']['literal'](a198_0x1a46('0x3a'))],'order':[['countingDate','ASC']]})[a198_0x1a46('0x23')](_0x1c1a37=>{_0x407121[a198_0x1a46('0xd')]({'data':_0x1c1a37});});};exports[a198_0x1a46('0x3b')]=(_0x1c9da0,_0x3b326f)=>{const _0x599283=_0x1c9da0['query'][a198_0x1a46('0x31')];const _0x168d52=_0x1c9da0['query'][a198_0x1a46('0x3c')];const _0x341db6=_0x1c9da0[a198_0x1a46('0x30')][a198_0x1a46('0x32')];exports[a198_0x1a46('0xe')][a198_0x1a46('0xf')][a198_0x1a46('0x2b')][a198_0x1a46('0x33')]({'attributes':['countingDate',[exports[a198_0x1a46('0xe')]['fn'](a198_0x1a46('0x3d'),exports[a198_0x1a46('0xe')][a198_0x1a46('0x35')](a198_0x1a46('0x2e')),a198_0x1a46('0x3e')),'countingDateShort'],[exports['sequelize']['fn'](a198_0x1a46('0x34'),exports[a198_0x1a46('0xe')][a198_0x1a46('0x35')](a198_0x1a46('0x36'))),a198_0x1a46('0x37')]],'where':{'countingDate':{[exports['sequelize']['Op'][a198_0x1a46('0x38')]]:_0x168d52,[exports[a198_0x1a46('0xe')]['Op']['lt']]:_0x341db6},'amount':_0x1c9da0[a198_0x1a46('0x39')]['direction']=='in'?{[exports[a198_0x1a46('0xe')]['Op']['gt']]:0x0}:{[exports[a198_0x1a46('0xe')]['Op']['lt']]:0x0}},'group':[exports['sequelize']['fn'](a198_0x1a46('0x3f'),exports[a198_0x1a46('0xe')][a198_0x1a46('0x35')](a198_0x1a46('0x2e'))),exports['sequelize']['fn'](a198_0x1a46('0x40'),exports['sequelize'][a198_0x1a46('0x35')]('countingDate')),exports[a198_0x1a46('0xe')]['fn']('MONTH',exports['sequelize']['col']('countingDate')),exports[a198_0x1a46('0xe')]['fn'](a198_0x1a46('0x41'),exports[a198_0x1a46('0xe')][a198_0x1a46('0x35')](a198_0x1a46('0x2e')))],'order':[[a198_0x1a46('0x2e'),a198_0x1a46('0x2f')]]})[a198_0x1a46('0x23')](_0x52383e=>{_0x3b326f[a198_0x1a46('0xd')]({'data':_0x52383e});});};exports['getFacebook']=(_0x2a1199,_0x17da20,_0x25395e)=>{const _0x3d0eb0=_0x2a1199[a198_0x1a46('0x42')][a198_0x1a46('0x43')][a198_0x1a46('0x44')](_0x3d0eb0=>_0x3d0eb0['kind']==='facebook');fbgraph_1['default'][a198_0x1a46('0x45')](_0x3d0eb0['accessToken']);fbgraph_1[a198_0x1a46('0x18')][a198_0x1a46('0x46')](_0x2a1199[a198_0x1a46('0x42')][a198_0x1a46('0x47')]+a198_0x1a46('0x48'),(_0x492c33,_0x27a473)=>{if(_0x492c33){return _0x25395e(_0x492c33);}_0x17da20[a198_0x1a46('0x49')](a198_0x1a46('0x4a'),{'title':a198_0x1a46('0x4b'),'profile':_0x27a473});});};