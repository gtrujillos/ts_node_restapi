var a111_0x2dce=['defineProperty','__esModule','child_process','spawn','fs-extra','start','bind','exploreDir','env','IMAGE_FILES_FOLDER','exploreDir:\x20','readdir','forEach','split','slice','join','videoConverting','existsSync','.mp4','createImageVideo','log','ffmpeg','1/2','-loop','-pattern_type','glob','yuv420p','data','Converting\x20','stderr:\x20','finished\x20mp4\x20convert','default'];(function(_0x2f133e,_0x1b7d94){var _0x17bdad=function(_0x18a6d4){while(--_0x18a6d4){_0x2f133e['push'](_0x2f133e['shift']());}};_0x17bdad(++_0x1b7d94);}(a111_0x2dce,0x1c0));var a111_0x193f=function(_0x31c98f,_0x3bcda2){_0x31c98f=_0x31c98f-0x0;var _0x5c3ebf=a111_0x2dce[_0x31c98f];return _0x5c3ebf;};'use strict';Object[a111_0x193f('0x0')](exports,a111_0x193f('0x1'),{'value':!![]});const fs=require('fs');const spawn=require(a111_0x193f('0x2'))[a111_0x193f('0x3')];const fsExtra=require(a111_0x193f('0x4'));const isImage=require('is-image');class FileOptimizationTask{constructor(){this['videoConverting']=![];}[a111_0x193f('0x5')](){const _0x3ce43a=setInterval(function(){this['exploreDir']();}[a111_0x193f('0x6')](this),0x1388);}[a111_0x193f('0x7')](){const _0x179330=process[a111_0x193f('0x8')][a111_0x193f('0x9')];console['log'](a111_0x193f('0xa')+_0x179330);fs[a111_0x193f('0xb')](_0x179330,(_0x2ca810,_0x7dfbc3)=>{if(_0x7dfbc3!=null){_0x7dfbc3[a111_0x193f('0xc')](_0x2164a4=>{const _0x376a8d=0x14;const _0x506db9=_0x2164a4[a111_0x193f('0xd')]('.')[a111_0x193f('0xe')](0x0,-0x1)[a111_0x193f('0xf')]('.');if(isImage(_0x2164a4)&&!this[a111_0x193f('0x10')]&&!fsExtra[a111_0x193f('0x11')](_0x179330+_0x506db9+a111_0x193f('0x12'))){this[a111_0x193f('0x10')]=!![];this[a111_0x193f('0x13')](_0x179330,_0x2164a4,_0x376a8d);}});}});}[a111_0x193f('0x13')](_0x25e61c,_0x100eb7,_0x463853=0x1e){const _0x743eb5=_0x25e61c+''+_0x100eb7;console[a111_0x193f('0x14')](_0x743eb5);console[a111_0x193f('0x14')](_0x100eb7);const _0x4600f9=_0x100eb7['split']('.')['slice'](0x0,-0x1)[a111_0x193f('0xf')]('.');const _0x15a1a5=a111_0x193f('0x15');const _0x27dd9b=['-y','-r',a111_0x193f('0x16'),a111_0x193f('0x17'),'1',a111_0x193f('0x18'),a111_0x193f('0x19'),'-i',_0x743eb5,'-t',String(_0x463853),'-c:v','libx264','-pix_fmt',a111_0x193f('0x1a'),'-r','25','-vf','scale=1920:1080',_0x25e61c+_0x4600f9+a111_0x193f('0x12')];const _0x22c50c=spawn(_0x15a1a5,_0x27dd9b);_0x22c50c['stdout']['on'](a111_0x193f('0x1b'),function(_0x5c3fe7){console[a111_0x193f('0x14')](a111_0x193f('0x1c')+_0x743eb5);});_0x22c50c['stderr']['on']('data',function(_0x3bd572){console['log'](a111_0x193f('0x1d')+_0x3bd572);}[a111_0x193f('0x6')](this));_0x22c50c['on']('close',function(){console['log'](a111_0x193f('0x1e'));this[a111_0x193f('0x10')]=![];}[a111_0x193f('0x6')](this));}}exports[a111_0x193f('0x1f')]=FileOptimizationTask;