var a111_0x3b22=['libx264','yuv420p','-vf','stdout','data','Converting\x20','stderr','stderr:\x20','close','finished\x20mp4\x20convert','__esModule','child_process','spawn','fs-extra','is-image','videoConverting','start','setInterval','exploreDir','bind','env','IMAGE_FILES_FOLDER','readdir','log','split','join','createImageVideo','ffmpeg','-pattern_type','glob','-c:v'];(function(_0x25f0e1,_0x4bd1ec){var _0x472354=function(_0x1ae71d){while(--_0x1ae71d){_0x25f0e1['push'](_0x25f0e1['shift']());}};_0x472354(++_0x4bd1ec);}(a111_0x3b22,0x102));var a111_0x2022=function(_0x5b9beb,_0x20eb9d){_0x5b9beb=_0x5b9beb-0x0;var _0x289fc0=a111_0x3b22[_0x5b9beb];return _0x289fc0;};'use strict';Object['defineProperty'](exports,a111_0x2022('0x0'),{'value':!![]});const fs=require('fs');const spawn=require(a111_0x2022('0x1'))[a111_0x2022('0x2')];const fsExtra=require(a111_0x2022('0x3'));const isImage=require(a111_0x2022('0x4'));class FileOptimizationTask{constructor(){this[a111_0x2022('0x5')]=![];}[a111_0x2022('0x6')](){const _0x209e67=setInterval(function(){console['log'](a111_0x2022('0x7'));this[a111_0x2022('0x8')]();}[a111_0x2022('0x9')](this),0x1388);}[a111_0x2022('0x8')](){const _0x3a0fc6=process[a111_0x2022('0xa')][a111_0x2022('0xb')];console['log'](_0x3a0fc6);fs[a111_0x2022('0xc')](_0x3a0fc6,(_0x2b98f4,_0x1d0c26)=>{if(_0x1d0c26!=null){_0x1d0c26['forEach'](_0x171d05=>{const _0x33e492=0x1e;console[a111_0x2022('0xd')](_0x171d05);const _0x4e6799=_0x171d05[a111_0x2022('0xe')]('.')['slice'](0x0,-0x1)[a111_0x2022('0xf')]('.');if(isImage(_0x171d05)&&!this['videoConverting']&&!fsExtra['existsSync'](_0x3a0fc6+_0x4e6799+'.mp4')){this['videoConverting']=!![];this[a111_0x2022('0x10')](_0x3a0fc6,_0x171d05,_0x33e492);}});}});}[a111_0x2022('0x10')](_0x41dea0,_0x59d6ba,_0x4ed56b=0x1e){const _0x463309=_0x41dea0+''+_0x59d6ba;console['log'](_0x463309);console[a111_0x2022('0xd')](_0x59d6ba);const _0x544ac2=_0x59d6ba[a111_0x2022('0xe')]('.')['slice'](0x0,-0x1)[a111_0x2022('0xf')]('.');const _0x570965=a111_0x2022('0x11');const _0x3dc669=['-y','-r','1/2','-loop','1',a111_0x2022('0x12'),a111_0x2022('0x13'),'-i',_0x463309,'-t',String(_0x4ed56b),a111_0x2022('0x14'),a111_0x2022('0x15'),'-pix_fmt',a111_0x2022('0x16'),'-r','25',a111_0x2022('0x17'),'scale=1920:1080',_0x41dea0+_0x544ac2+'.mp4'];const _0x15a795=spawn(_0x570965,_0x3dc669);_0x15a795[a111_0x2022('0x18')]['on'](a111_0x2022('0x19'),function(_0x57c316){console[a111_0x2022('0xd')](a111_0x2022('0x1a')+_0x463309);});_0x15a795[a111_0x2022('0x1b')]['on']('data',function(_0x2f6584){console[a111_0x2022('0xd')](a111_0x2022('0x1c')+_0x2f6584);}[a111_0x2022('0x9')](this));_0x15a795['on'](a111_0x2022('0x1d'),function(){console['log'](a111_0x2022('0x1e'));this[a111_0x2022('0x5')]=![];}[a111_0x2022('0x9')](this));}}exports['default']=FileOptimizationTask;