var a96_0x8f2b=['createImageVideo','ffmpeg','1/2','-loop','-pattern_type','glob','-c:v','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','stdout','data','Converting\x20','stderr','stderr:\x20','bind','close','finished\x20mp4\x20convert','default','defineProperty','__esModule','child_process','fs-extra','is-image','videoConverting','exploreDir','env','IMAGE_FILES_FOLDER','readdir','log','slice','join'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a96_0x8f2b,0x9d));var a96_0x26ab=function(_0x4b43ed,_0x823488){_0x4b43ed=_0x4b43ed-0x0;var _0x1033f9=a96_0x8f2b[_0x4b43ed];return _0x1033f9;};'use strict';Object[a96_0x26ab('0x0')](exports,a96_0x26ab('0x1'),{'value':!![]});const fs=require('fs');const spawn=require(a96_0x26ab('0x2'))['spawn'];const fsExtra=require(a96_0x26ab('0x3'));const isImage=require(a96_0x26ab('0x4'));class FileOptimizationDemon{constructor(){this[a96_0x26ab('0x5')]=![];}['start'](){const _0x27caac=setInterval(function(){console['log']('setInterval');this[a96_0x26ab('0x6')]();}['bind'](this),0x1388);}['exploreDir'](){const _0x248238=process[a96_0x26ab('0x7')][a96_0x26ab('0x8')];console['log'](_0x248238);fs[a96_0x26ab('0x9')](_0x248238,(_0x2eee7d,_0x369909)=>{if(_0x369909!=null){_0x369909['forEach'](_0x1c9a8a=>{const _0x2d61b6=0x1e;console[a96_0x26ab('0xa')](_0x1c9a8a);const _0xa875de=_0x1c9a8a['split']('.')[a96_0x26ab('0xb')](0x0,-0x1)[a96_0x26ab('0xc')]('.');if(isImage(_0x1c9a8a)&&!this[a96_0x26ab('0x5')]&&!fsExtra['existsSync'](_0x248238+_0xa875de+'.mp4')){this['videoConverting']=!![];this['createImageVideo'](_0x248238,_0x1c9a8a,_0x2d61b6);}});}});}[a96_0x26ab('0xd')](_0x46070a,_0x305b40,_0x2e40f3=0x1e){const _0x23b168=_0x46070a+''+_0x305b40;console[a96_0x26ab('0xa')](_0x23b168);console['log'](_0x305b40);const _0x44bc61=_0x305b40['split']('.')[a96_0x26ab('0xb')](0x0,-0x1)[a96_0x26ab('0xc')]('.');const _0x4e9d1b=a96_0x26ab('0xe');const _0x378045=['-y','-r',a96_0x26ab('0xf'),a96_0x26ab('0x10'),'1',a96_0x26ab('0x11'),a96_0x26ab('0x12'),'-i',_0x23b168,'-t',String(_0x2e40f3),a96_0x26ab('0x13'),a96_0x26ab('0x14'),a96_0x26ab('0x15'),a96_0x26ab('0x16'),'-r','25',a96_0x26ab('0x17'),a96_0x26ab('0x18'),_0x46070a+_0x44bc61+'.mp4'];const _0x2868c2=spawn(_0x4e9d1b,_0x378045);_0x2868c2[a96_0x26ab('0x19')]['on'](a96_0x26ab('0x1a'),function(_0x256986){console[a96_0x26ab('0xa')](a96_0x26ab('0x1b')+_0x23b168);});_0x2868c2[a96_0x26ab('0x1c')]['on'](a96_0x26ab('0x1a'),function(_0xe810d1){console['log'](a96_0x26ab('0x1d')+_0xe810d1);}[a96_0x26ab('0x1e')](this));_0x2868c2['on'](a96_0x26ab('0x1f'),function(){console[a96_0x26ab('0xa')](a96_0x26ab('0x20'));this[a96_0x26ab('0x5')]=![];}['bind'](this));}}exports[a96_0x26ab('0x21')]=FileOptimizationDemon;