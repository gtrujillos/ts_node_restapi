var a96_0x6ab6=['-vf','scale=1920:1080','data','stderr','stderr:\x20','__esModule','child_process','spawn','is-image','start','log','setInterval','exploreDir','bind','env','IMAGE_FILES_FOLDER','readdir','forEach','split','slice','join','.mp4','videoConverting','createImageVideo','ffmpeg','-loop','-pattern_type','glob','-c:v','libx264','-pix_fmt'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(a96_0x6ab6,0x198));var a96_0x3ba8=function(_0x34a0af,_0x4f688c){_0x34a0af=_0x34a0af-0x0;var _0x6fd4d3=a96_0x6ab6[_0x34a0af];return _0x6fd4d3;};'use strict';Object['defineProperty'](exports,a96_0x3ba8('0x0'),{'value':!![]});const fs=require('fs');const spawn=require(a96_0x3ba8('0x1'))[a96_0x3ba8('0x2')];const fsExtra=require('fs-extra');const isImage=require(a96_0x3ba8('0x3'));class FileOptimizationDemon{constructor(){this['videoConverting']=![];}[a96_0x3ba8('0x4')](){const _0xd6688a=setInterval(function(){console[a96_0x3ba8('0x5')](a96_0x3ba8('0x6'));this[a96_0x3ba8('0x7')]();}[a96_0x3ba8('0x8')](this),0x1388);}['exploreDir'](){const _0xb3ce92=process[a96_0x3ba8('0x9')][a96_0x3ba8('0xa')];console[a96_0x3ba8('0x5')](_0xb3ce92);fs[a96_0x3ba8('0xb')](_0xb3ce92,(_0x215ee6,_0x1299d0)=>{if(_0x1299d0!=null){_0x1299d0[a96_0x3ba8('0xc')](_0x5b9bf4=>{const _0x253a4e=0x1e;console[a96_0x3ba8('0x5')](_0x5b9bf4);const _0x8d06ae=_0x5b9bf4[a96_0x3ba8('0xd')]('.')[a96_0x3ba8('0xe')](0x0,-0x1)[a96_0x3ba8('0xf')]('.');if(isImage(_0x5b9bf4)&&!this['videoConverting']&&!fsExtra['existsSync'](_0xb3ce92+_0x8d06ae+a96_0x3ba8('0x10'))){this[a96_0x3ba8('0x11')]=!![];this[a96_0x3ba8('0x12')](_0xb3ce92,_0x5b9bf4,_0x253a4e);}});}});}[a96_0x3ba8('0x12')](_0x171d1b,_0x35cb6c,_0x456539=0x1e){const _0x45b4a7=_0x171d1b+''+_0x35cb6c;console[a96_0x3ba8('0x5')](_0x45b4a7);console[a96_0x3ba8('0x5')](_0x35cb6c);const _0x3a55d3=_0x35cb6c[a96_0x3ba8('0xd')]('.')[a96_0x3ba8('0xe')](0x0,-0x1)[a96_0x3ba8('0xf')]('.');const _0x3ee56b=a96_0x3ba8('0x13');const _0x572da7=['-y','-r','1/2',a96_0x3ba8('0x14'),'1',a96_0x3ba8('0x15'),a96_0x3ba8('0x16'),'-i',_0x45b4a7,'-t',String(_0x456539),a96_0x3ba8('0x17'),a96_0x3ba8('0x18'),a96_0x3ba8('0x19'),'yuv420p','-r','25',a96_0x3ba8('0x1a'),a96_0x3ba8('0x1b'),_0x171d1b+_0x3a55d3+a96_0x3ba8('0x10')];const _0x57dc63=spawn(_0x3ee56b,_0x572da7);_0x57dc63['stdout']['on'](a96_0x3ba8('0x1c'),function(_0x4ed84d){console[a96_0x3ba8('0x5')]('Converting\x20'+_0x45b4a7);});_0x57dc63[a96_0x3ba8('0x1d')]['on'](a96_0x3ba8('0x1c'),function(_0x28f067){console['log'](a96_0x3ba8('0x1e')+_0x28f067);}['bind'](this));_0x57dc63['on']('close',function(){console[a96_0x3ba8('0x5')]('finished\x20mp4\x20convert');this[a96_0x3ba8('0x11')]=![];}['bind'](this));}}exports['default']=FileOptimizationDemon;