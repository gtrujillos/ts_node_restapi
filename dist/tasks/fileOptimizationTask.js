var a223_0x5b28=['scale=1920:1080','stdout','data','Converting\x20','stderr','stderr:\x20','close','default','defineProperty','__esModule','child_process','spawn','fs-extra','videoConverting','exploreDir','bind','env','IMAGE_FILES_FOLDER','log','exploreDir:\x20','readdir','forEach','join','existsSync','.mp4','createImageVideo','1/2','-loop','-pattern_type','glob','-c:v','-pix_fmt','yuv420p','-vf'];(function(_0x3b4519,_0x2ebec8){var _0x277bbd=function(_0x515e69){while(--_0x515e69){_0x3b4519['push'](_0x3b4519['shift']());}};_0x277bbd(++_0x2ebec8);}(a223_0x5b28,0xb2));var a223_0x2d72=function(_0x2b3d75,_0x57bc22){_0x2b3d75=_0x2b3d75-0x0;var _0x2452c9=a223_0x5b28[_0x2b3d75];return _0x2452c9;};'use strict';Object[a223_0x2d72('0x0')](exports,a223_0x2d72('0x1'),{'value':!![]});const fs=require('fs');const spawn=require(a223_0x2d72('0x2'))[a223_0x2d72('0x3')];const fsExtra=require(a223_0x2d72('0x4'));const isImage=require('is-image');class FileOptimizationTask{constructor(){this[a223_0x2d72('0x5')]=![];}['start'](){const _0x3b38c7=setInterval(function(){this[a223_0x2d72('0x6')]();}[a223_0x2d72('0x7')](this),0x2710);}[a223_0x2d72('0x6')](){const _0x340757=process[a223_0x2d72('0x8')][a223_0x2d72('0x9')];console[a223_0x2d72('0xa')](a223_0x2d72('0xb')+_0x340757);fs[a223_0x2d72('0xc')](_0x340757,(_0x49b8c5,_0x95a17d)=>{if(_0x95a17d!=null){_0x95a17d[a223_0x2d72('0xd')](_0x59c944=>{const _0x4c9f59=0x14;const _0x379fa9=_0x59c944['split']('.')['slice'](0x0,-0x1)[a223_0x2d72('0xe')]('.');if(isImage(_0x59c944)&&!this[a223_0x2d72('0x5')]&&!fsExtra[a223_0x2d72('0xf')](_0x340757+_0x379fa9+a223_0x2d72('0x10'))){this[a223_0x2d72('0x5')]=!![];this['createImageVideo'](_0x340757,_0x59c944,_0x4c9f59);}});}});}[a223_0x2d72('0x11')](_0x58cda2,_0x39e939,_0xad8dd7=0xa){const _0x177e5c=_0x58cda2+''+_0x39e939;console['log'](_0x177e5c);console[a223_0x2d72('0xa')](_0x39e939);const _0x549be2=_0x39e939['split']('.')['slice'](0x0,-0x1)[a223_0x2d72('0xe')]('.');const _0xc1f5d4='ffmpeg';const _0x540c48=['-y','-r',a223_0x2d72('0x12'),a223_0x2d72('0x13'),'1',a223_0x2d72('0x14'),a223_0x2d72('0x15'),'-i',_0x177e5c,'-t',String(_0xad8dd7),a223_0x2d72('0x16'),'libx264',a223_0x2d72('0x17'),a223_0x2d72('0x18'),'-r','25',a223_0x2d72('0x19'),a223_0x2d72('0x1a'),_0x58cda2+_0x549be2+a223_0x2d72('0x10')];const _0x33b39d=spawn(_0xc1f5d4,_0x540c48);_0x33b39d[a223_0x2d72('0x1b')]['on'](a223_0x2d72('0x1c'),function(_0x675bd){console[a223_0x2d72('0xa')](a223_0x2d72('0x1d')+_0x177e5c);});_0x33b39d[a223_0x2d72('0x1e')]['on']('data',function(_0x3f744f){console[a223_0x2d72('0xa')](a223_0x2d72('0x1f')+_0x3f744f);}[a223_0x2d72('0x7')](this));_0x33b39d['on'](a223_0x2d72('0x20'),function(){console[a223_0x2d72('0xa')]('finished\x20mp4\x20convert');this['videoConverting']=![];}[a223_0x2d72('0x7')](this));}}exports[a223_0x2d72('0x21')]=FileOptimizationTask;