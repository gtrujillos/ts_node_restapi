var a223_0x3b5b=['ffmpeg','-pattern_type','glob','libx264','-pix_fmt','yuv420p','-vf','stdout','data','stderr:\x20','close','finished\x20mp4\x20convert','defineProperty','child_process','spawn','fs-extra','start','exploreDir','bind','env','IMAGE_FILES_FOLDER','readdir','forEach','split','join','existsSync','.mp4','videoConverting','createImageVideo','log','slice'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a223_0x3b5b,0xc6));var a223_0x51d9=function(_0x409ec1,_0x3dee3f){_0x409ec1=_0x409ec1-0x0;var _0x50e382=a223_0x3b5b[_0x409ec1];return _0x50e382;};'use strict';Object[a223_0x51d9('0x0')](exports,'__esModule',{'value':!![]});const fs=require('fs');const spawn=require(a223_0x51d9('0x1'))[a223_0x51d9('0x2')];const fsExtra=require(a223_0x51d9('0x3'));const isImage=require('is-image');class FileOptimizationTask{constructor(){this['videoConverting']=![];}[a223_0x51d9('0x4')](){const _0x40cd00=setInterval(function(){this[a223_0x51d9('0x5')]();}[a223_0x51d9('0x6')](this),0x2710);}[a223_0x51d9('0x5')](){const _0x393759=process[a223_0x51d9('0x7')][a223_0x51d9('0x8')];console['log']('exploreDir:\x20'+_0x393759);fs[a223_0x51d9('0x9')](_0x393759,(_0xaaefb1,_0x4f60c3)=>{if(_0x4f60c3!=null){_0x4f60c3[a223_0x51d9('0xa')](_0x37b3d9=>{const _0x56458c=0x14;const _0x19331c=_0x37b3d9[a223_0x51d9('0xb')]('.')['slice'](0x0,-0x1)[a223_0x51d9('0xc')]('.');if(isImage(_0x37b3d9)&&!this['videoConverting']&&!fsExtra[a223_0x51d9('0xd')](_0x393759+_0x19331c+a223_0x51d9('0xe'))){this[a223_0x51d9('0xf')]=!![];this[a223_0x51d9('0x10')](_0x393759,_0x37b3d9,_0x56458c);}});}});}[a223_0x51d9('0x10')](_0x58f3fe,_0x40c86e,_0xb55827=0xa){const _0x172d7f=_0x58f3fe+''+_0x40c86e;console['log'](_0x172d7f);console[a223_0x51d9('0x11')](_0x40c86e);const _0x1ab717=_0x40c86e[a223_0x51d9('0xb')]('.')[a223_0x51d9('0x12')](0x0,-0x1)['join']('.');const _0x93f149=a223_0x51d9('0x13');const _0x2acc65=['-y','-r','1/2','-loop','1',a223_0x51d9('0x14'),a223_0x51d9('0x15'),'-i',_0x172d7f,'-t',String(_0xb55827),'-c:v',a223_0x51d9('0x16'),a223_0x51d9('0x17'),a223_0x51d9('0x18'),'-r','25',a223_0x51d9('0x19'),'scale=1920:1080',_0x58f3fe+_0x1ab717+a223_0x51d9('0xe')];const _0x4e130c=spawn(_0x93f149,_0x2acc65);_0x4e130c[a223_0x51d9('0x1a')]['on'](a223_0x51d9('0x1b'),function(_0x1b0e17){console[a223_0x51d9('0x11')]('Converting\x20'+_0x172d7f);});_0x4e130c['stderr']['on']('data',function(_0x482b87){console[a223_0x51d9('0x11')](a223_0x51d9('0x1c')+_0x482b87);}[a223_0x51d9('0x6')](this));_0x4e130c['on'](a223_0x51d9('0x1d'),function(){console[a223_0x51d9('0x11')](a223_0x51d9('0x1e'));this[a223_0x51d9('0xf')]=![];}[a223_0x51d9('0x6')](this));}}exports['default']=FileOptimizationTask;