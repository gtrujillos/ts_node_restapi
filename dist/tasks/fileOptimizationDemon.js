var a222_0x550c=['Converting\x20','stderr:\x20','bind','close','finished\x20mp4\x20convert','default','defineProperty','__esModule','child_process','spawn','fs-extra','videoConverting','start','exploreDir','env','IMAGE_FILES_FOLDER','readdir','forEach','slice','join','log','ffmpeg','1/2','-loop','-pattern_type','-c:v','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','data'];(function(_0x27e159,_0xa4e5aa){var _0x10c396=function(_0x2c2d67){while(--_0x2c2d67){_0x27e159['push'](_0x27e159['shift']());}};_0x10c396(++_0xa4e5aa);}(a222_0x550c,0x1e6));var a222_0x56ae=function(_0x481822,_0x2f8439){_0x481822=_0x481822-0x0;var _0x1a11bf=a222_0x550c[_0x481822];return _0x1a11bf;};'use strict';Object[a222_0x56ae('0x0')](exports,a222_0x56ae('0x1'),{'value':!![]});const fs=require('fs');const spawn=require(a222_0x56ae('0x2'))[a222_0x56ae('0x3')];const fsExtra=require(a222_0x56ae('0x4'));const isImage=require('is-image');class FileOptimizationTask{constructor(){this[a222_0x56ae('0x5')]=![];}[a222_0x56ae('0x6')](){const _0x292610=setInterval(function(){this[a222_0x56ae('0x7')]();}['bind'](this),0x1388);}[a222_0x56ae('0x7')](){const _0x230f38=process[a222_0x56ae('0x8')][a222_0x56ae('0x9')];console['log']('exploreDir:\x20'+_0x230f38);fs[a222_0x56ae('0xa')](_0x230f38,(_0x4ce2f1,_0x333808)=>{if(_0x333808!=null){_0x333808[a222_0x56ae('0xb')](_0x2ab90b=>{const _0x991246=0x14;const _0x981158=_0x2ab90b['split']('.')[a222_0x56ae('0xc')](0x0,-0x1)[a222_0x56ae('0xd')]('.');if(isImage(_0x2ab90b)&&!this[a222_0x56ae('0x5')]&&!fsExtra['existsSync'](_0x230f38+_0x981158+'.mp4')){this[a222_0x56ae('0x5')]=!![];this['createImageVideo'](_0x230f38,_0x2ab90b,_0x991246);}});}});}['createImageVideo'](_0x39753a,_0xf81284,_0x307b3e=0x1e){const _0x3ab53f=_0x39753a+''+_0xf81284;console[a222_0x56ae('0xe')](_0x3ab53f);console[a222_0x56ae('0xe')](_0xf81284);const _0x4a4c56=_0xf81284['split']('.')['slice'](0x0,-0x1)['join']('.');const _0x273d4d=a222_0x56ae('0xf');const _0xd5b662=['-y','-r',a222_0x56ae('0x10'),a222_0x56ae('0x11'),'1',a222_0x56ae('0x12'),'glob','-i',_0x3ab53f,'-t',String(_0x307b3e),a222_0x56ae('0x13'),a222_0x56ae('0x14'),a222_0x56ae('0x15'),a222_0x56ae('0x16'),'-r','25',a222_0x56ae('0x17'),a222_0x56ae('0x18'),_0x39753a+_0x4a4c56+'.mp4'];const _0x22dccb=spawn(_0x273d4d,_0xd5b662);_0x22dccb['stdout']['on'](a222_0x56ae('0x19'),function(_0x519dfd){console[a222_0x56ae('0xe')](a222_0x56ae('0x1a')+_0x3ab53f);});_0x22dccb['stderr']['on'](a222_0x56ae('0x19'),function(_0x5a0a06){console[a222_0x56ae('0xe')](a222_0x56ae('0x1b')+_0x5a0a06);}[a222_0x56ae('0x1c')](this));_0x22dccb['on'](a222_0x56ae('0x1d'),function(){console[a222_0x56ae('0xe')](a222_0x56ae('0x1e'));this[a222_0x56ae('0x5')]=![];}[a222_0x56ae('0x1c')](this));}}exports[a222_0x56ae('0x1f')]=FileOptimizationTask;